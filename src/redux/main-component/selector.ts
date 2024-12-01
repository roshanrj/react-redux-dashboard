import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getMainComponent = (state: AppState) => state.mainComponent;

export const seriesDataListSelector = createSelector(getMainComponent, (mainComponent: any) => mainComponent.seriesDataList);
export const selectedSeriesDataSelector = createSelector(getMainComponent, (mainComponent: any) => mainComponent.selectedSeriesData);

