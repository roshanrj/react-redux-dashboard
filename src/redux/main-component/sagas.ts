/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { INTERNAL_SERVER_ERROR } from 'constants/apiConstants';
import { fetchSeriesData, fetchSelectedSeriesData } from 'utils/apiHelperFunctions';
import { setSeriesDataList, setSelectedSeriesData } from './action';
import { IGetSelectedSeriesDataSaga } from './types';
import { GET_SERIES_DATA_LIST, SET_SERIES_DATA_LIST, SET_SERIES_DATA_LIST_ERROR, SET_SERIES_DATA_LIST_LOADING, GET_SELECTED_SERIES_DATA, SET_SELECTED_SERIES_DATA_LOADING, SET_SELECTED_SERIES_DATA, SET_SELECTED_SERIES_DATA_ERROR} from './actionTypes';


function* getSeriesDataList(): any {
  yield put(setSeriesDataList({ type: SET_SERIES_DATA_LIST_LOADING, payload: true }));
  try {
    const response = yield call(fetchSeriesData);
    if (response.data?.results) {
      yield put(setSeriesDataList({ type: SET_SERIES_DATA_LIST, payload: response.data?.results }));
    }
  } catch (error:any) {
    yield put(setSeriesDataList({ type: SET_SERIES_DATA_LIST_ERROR, payload: INTERNAL_SERVER_ERROR }));
  }
}


function* getSelectedSeriesData(action: IGetSelectedSeriesDataSaga): any {
  yield put(setSelectedSeriesData({ type: SET_SELECTED_SERIES_DATA_LOADING, payload: true }));
  try {
    const payload = action?.payload;
    const response = yield call(fetchSelectedSeriesData, payload);
    if (response.data) {
      yield put(setSelectedSeriesData({ type: SET_SELECTED_SERIES_DATA, payload: response.data }));
    }
  } catch (error: any) {
    yield put(setSelectedSeriesData({ type: SET_SELECTED_SERIES_DATA_ERROR, payload: INTERNAL_SERVER_ERROR }));
  }
}

function* mainComponentSaga() {
  yield all([
    takeLatest(GET_SERIES_DATA_LIST, getSeriesDataList),
    takeLatest(GET_SELECTED_SERIES_DATA, getSelectedSeriesData),
  ]);
}

export default mainComponentSaga;
