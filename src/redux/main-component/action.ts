import { GET_SELECTED_SERIES_DATA, GET_SERIES_DATA_LIST, SET_SERIES_DATA_LIST } from './actionTypes';
import { IGetSelectedSeriesDataPayload, MainComponentActionTypes } from './types';

export const getSeriesDataList = () => ({
  type: GET_SERIES_DATA_LIST,
});

export const setSeriesDataList = (action: MainComponentActionTypes) => ({
  type: action.type,
  payload: action.payload,
});

export const getSelectedSeriesData = (payload: IGetSelectedSeriesDataPayload) => ({
  type: GET_SELECTED_SERIES_DATA,
  payload,
});

export const setSelectedSeriesData = (action: MainComponentActionTypes) => ({
  type: action.type,
  payload: action.payload,
});