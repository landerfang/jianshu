import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '互联网',
    imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '写作怎么进行刻意练习？（附训练清单）',
    desc: '刻意练习，是进步最快的方法。“拆解、模仿、反馈、总结、反复”， 助你从写作小白变成高手。 如果你觉得某个人写的很好，想学习他的文风，就可以这样来...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2106228-0245b781133a188d?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 2,
    title: '写作怎么进行刻意练习？（附训练清单）',
    desc: '刻意练习，是进步最快的方法。“拆解、模仿、反馈、总结、反复”， 助你从写作小白变成高手。 如果你觉得某个人写的很好，想学习他的文风，就可以这样来...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2106228-0245b781133a188d?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }, {
    id: 3,
    title: '写作怎么进行刻意练习？（附训练清单）',
    desc: '刻意练习，是进步最快的方法。“拆解、模仿、反馈、总结、反复”， 助你从写作小白变成高手。 如果你觉得某个人写的很好，想学习他的文风，就可以这样来...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2106228-0245b781133a188d?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }],
  recommendList: [{
    id: 1,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
  } ,{
    id: 2,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
  }, {
    id: 3,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  }, {
    id: 4,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  }, {
    id: 5,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}