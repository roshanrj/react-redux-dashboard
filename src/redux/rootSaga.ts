import { all, fork } from 'redux-saga/effects';

import mainComponentSaga from './main-component/sagas';

export function* rootSaga() {
  yield all([fork(mainComponentSaga)]);
}
