import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { list, handleGetMoreArticleList } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className="pic" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={handleGetMoreArticleList}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleGetMoreArticleList() {
    dispatch(actionCreators.getArticleListMoreData());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List); 