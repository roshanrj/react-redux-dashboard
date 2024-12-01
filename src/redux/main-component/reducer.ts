import { SET_SERIES_DATA_LIST, SET_SERIES_DATA_LIST_LOADING, SET_SERIES_DATA_LIST_ERROR, SET_SELECTED_SERIES_DATA_LOADING, SET_SELECTED_SERIES_DATA, SET_SELECTED_SERIES_DATA_ERROR } from './actionTypes';

import { MainComponentState, SeriesListResponse, MainComponentActions, SelectedSeriesResponse } from './types';

const initialState: MainComponentState = {
  seriesDataList: {
    loading: true,
    error: '',
    data: [] as Array<SeriesListResponse>,
  },
  selectedSeriesData: {
    loading: true,
    error: '',
    data: {} as SelectedSeriesResponse,
  }
};

export default (state = initialState, action: MainComponentActions) => {
  switch (action.type) {
    case SET_SERIES_DATA_LIST_LOADING:
      return {
        ...state,
        seriesDataList: { data: [], error: '', loading: action.payload },
      };
    case SET_SERIES_DATA_LIST:
      return {
        ...state,
        seriesDataList: { data: action.payload, error: '', loading: false },
      };
    case SET_SERIES_DATA_LIST_ERROR:
      return {
        ...state,
        seriesDataList: { data: [], error: action.payload, loading: false },
      };
      case SET_SELECTED_SERIES_DATA_LOADING:
        return {
          ...state,
          selectedSeriesData: { data: [], error: '', loading: action.payload },
        };
      case SET_SELECTED_SERIES_DATA:
        return {
          ...state,
          selectedSeriesData: { data: action.payload, error: '', loading: false },
        };
      case SET_SELECTED_SERIES_DATA_ERROR:
        return {
          ...state,
          selectedSeriesData: { data: [], error: action.payload, loading: false },
        };
    default:
      return {
        ...state,
      };
  }
};
