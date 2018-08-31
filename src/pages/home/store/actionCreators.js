import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

// 首页action
const initHomeDataAction = (data) => ({
  type: constants.INIT_HOME_DATA,
  data
});

// article more action
const articleMoreAction = (data) => ({
  type: constants.ARTICLE_MORE_ACTION,
  data: fromJS(data)
});

/**
 * 初始化获取首页数据
 */
export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      const result = res.data;
      const action = initHomeDataAction(result.data);
      dispatch(action);
    }).catch((e) => {
      console.log('请求失败', e);
    })
  }
}

/**
 * 请求获取更多article列表数据
 */
export const getArticleListMoreData = () => {
  return (dispatch) => {
    axios.get('/api/articleMoreList.json').then(res => {
      const result = res.data.data;
      const action = articleMoreAction(result.articleList);
      dispatch(action);
    })
  }
}

// 切换回到顶部按钮显示action
export const toggleBackTopAction = (value) => ({
  type: constants.TOGGLE_BACK_TOP,
  value
});