import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showBackTop: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.INIT_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList)
      });
    case constants.ARTICLE_MORE_ACTION:
      return state.set('articleList', state.get('articleList').concat(action.data));
    case constants.TOGGLE_BACK_TOP:
      return state.set('showBackTop', action.value)
    default:
      return state;
  }
}