import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreators } from './store';


class Home extends Component {
  // 构造函数初始化
  constructor(props) {
    super(props);
    this.timer = null;
    this.handleBackTop = this.handleBackTop.bind(this);
    this.scrollBackTop = this.scrollBackTop.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
  }
  // 组件渲染
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4421/dfbcbd1e8c27fc179209b8d0aa1060558ced4aba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showBackTop ? <BackTop onClick={this.handleBackTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  /**
   * 以下均为react生命周期函数
   */
  // 组件挂载完成
  componentDidMount() {
    this.props.initHomeData();
    // 组件挂载绑定事件
    this.bindEvents();
  }
  // 组件卸载调用
  componentWillUnmount() {
    // 组件卸载后，去除window全局绑定事件
    window.removeEventListener('scroll', this.props.toggleBackTop);
  }

  /**
   * 以下均为自定义函数
   */
  // 返回顶部按钮点击事件处理
  handleBackTop() {
    cancelAnimationFrame(this.timer);
    this.timer = requestAnimationFrame(this.scrollBackTop);
  }
  scrollBackTop() {
    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
      
    if(osTop > 0) {
      document.documentElement.scrollTop = document.body.scrollTop = osTop - 50;
      this.timer = requestAnimationFrame(this.scrollBackTop);
    } else {
      cancelAnimationFrame(this.timer);
    }
  }

  // 绑定事件
  bindEvents() {
    // 监听全局滚动事件
    window.addEventListener('scroll', this.props.toggleBackTop)
  }
}

// 映射state数据
const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    // 初始化页面
    initHomeData() {
      const action = actionCreators.getHomeData();
      dispatch(action);
    },
    // 切换回到顶部按钮的显示
    toggleBackTop() {
      const osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(osTop > 100) {
        dispatch(actionCreators.toggleBackTopAction(true));
      } else {
        dispatch(actionCreators.toggleBackTopAction(false));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);