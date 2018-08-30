/**
 * 总数据管理，合并其他各个组件reducer
 */
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
});

export default reducer;
