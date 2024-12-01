import { combineReducers } from 'redux';

import mainComponentReducer from './main-component/reducer';

const rootReducer = combineReducers({
  mainComponent: mainComponentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
