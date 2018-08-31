import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;

export const TopicWrapper = styled.ul`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.li`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7f;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-img{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 1005；
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`;

export const WriterWrapper = styled.div`
  width: 280px;
  height: 440px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  background: #fff;
  z-index: 999;
  cursor: pointer;
`;