

// import 'antd/dist/antd.css';
// import './index.css';
import './MCard.css'
import { Card, Col, Row } from 'antd';
import qunzong from '../assets/images/qunzong.png'
import xierongji from '../assets/images/xierongji.png'
import fanganzx from '../assets/images/fanganzx.png'
import wushang from '../assets/images/wushang.png'
import youhui from '../assets/images/youhui.png'
import zhongqiu from '../assets/images/zhongqiu.png'
import keban_small from '../assets/images/keban_small.png'
import card_i2 from '../assets/images/card_i2.png'
import card_i3 from '../assets/images/card_i3.png'
import card_i4 from '../assets/images/card_i4.png'
import card_i5 from '../assets/images/card_i5.png'
import card_i6 from '../assets/images/card_i6.png'
import card_i7 from '../assets/images/card_i7.png'
import card_i8 from '../assets/images/card_i8.png'
import card_i9 from '../assets/images/card_i9.png'
import card_i10 from '../assets/images/card_i10.png'
import card_i11 from '../assets/images/card_i11.png'
import card_i12 from '../assets/images/card_i12.png'
import card_i13 from '../assets/images/card_i13.png'
import card_i14 from '../assets/images/card_i14.png'
import card_i15 from '../assets/images/card_i15.png'
import card_i16 from '../assets/images/card_i16.png'
import card_i17 from '../assets/images/card_i17.png'
import card_i18 from '../assets/images/card_i18.png'
import company_profile from '../assets/images/company_profile.jpg'
import platform from '../assets/images/platform.png'
import React, { Component } from 'react'
import HomeSingleCard from './HomeSingleCard/HomeSingleCard';
import Home from '../views/Home';
export default class MCard extends Component {

  constructor() {
    super()
    this.state = {
        card_list:[
            //认识我们
            {
                card_title:'新闻中心',
                card_subtitle:'认识我们',
                card_over:{
                    card_img:qunzong,
                    card_url:'',
                    picture_url:company_profile
                },
                card_item:[
                    {
                        card_theme:'可伴——公司简介',
                        card_subtheme:'致力于成为企业最值得信赖的福..',
                        card_img:keban_small,
                        card_url:'https://mp.weixin.qq.com/s/A3oqRkxA9iW5HtHkYXe7lA',
                        picture_url:''
                    },
                    {
                        card_theme:'喜讯！可伴入选2021年武汉市软件收入百强企业名单',
                        card_subtheme:'位列第88名，入围门槛达亿元',
                        card_img:card_i16,
                        card_url:'https://mp.weixin.qq.com/s/g6LP5LSfcegyHikvrDBgFA',
                        picture_url:''
                    },
                    {
                        card_theme:'热烈祝贺我司支付牌照续展成功！',
                        card_subtheme:'福虎迎春，携手未来！',
                        card_img:card_i2,
                        card_url:'https://mp.weixin.qq.com/s/WFNmof9xyBJ-xxp0R8oF4w',
                        picture_url:''
                    }
                ]
            },
            //当季福利
            {
                card_title:'新闻中心',
                card_subtitle:'当季福利',
                card_over:{
                    card_img:xierongji,
                    card_url:'https://web.ukeban.com/#/activepage/dwyl',
                    picture_url:''
                },
                card_item:[
                    {
                        card_theme:'4月出游不出油｜纪梵希控油散粉6折拿下',
                        card_subtheme:'做清爽出游人，拒绝成为出油人',
                        card_img:card_i17,
                        card_url:'https://mp.weixin.qq.com/s/XkgxUIPPzcPWCwjiOlV3hg',
                        picture_url:''
                    },
                    {
                        card_theme:'蜜时4月特惠｜快看，蜜时的蛋糕会“说话”',
                        card_subtheme:'蜜时4月限时特惠，全新口味组合快来尝鲜！',
                        card_img:card_i3,
                        card_url:'https://mp.weixin.qq.com/s/q40IViDvYmgKfpyboRcj3A',
                        picture_url:''
                    },
                    {
                        card_theme:'「新款」YSL气垫、黛珂紫苏水、兰蔻、美妆护肤国际大牌新上一波！',
                        card_subtheme:'【免税价·正品国际】职工自选，我的福利我做主',
                        card_img:card_i4,
                        card_url:'https://mp.weixin.qq.com/s/yqrNcviJwLodeN0v2Wekwg',
                        picture_url:''
                    }
                ]
            },
            //定制服务
            {
                card_title:'方案中心',
                card_subtitle:'定制服务',
                card_over:{
                    card_img:fanganzx,
                    card_url:'https://mp.weixin.qq.com/s/0fSON70abm3ypQthizkSRA',
                    picture_url:''
                },
                card_item:[
                    {
                        card_theme:'定制福利积分平台',
                        card_subtheme:'一对一定制化满足客户需求',
                        card_img:card_i6,
                        card_url:'',
                        picture_url:platform
                    },
                    {
                        card_theme:'来自某国企采购负责人的心声...',
                        card_subtheme:'挑福利，上可伴，企业福利采购不再是难题',
                        card_img:card_i15,
                        card_url:'https://mp.weixin.qq.com/s/OVPgLFO3Pth4dTszsgVo4g',
                        picture_url:''
                    },
                    {
                        card_theme:'新春发福利，首选云福利！一张图带你看懂可伴数字工会福利产品和服务',
                        card_subtheme:'五星服务，八大优势！附“福虎贺春”新春福利整体解决方案',
                        card_img:card_i5,
                        card_url:'https://mp.weixin.qq.com/s/R1taPiMjovZ9D2CmREXepw',
                        picture_url:''
                    },
                ]
            },
            //商户一览表
            {
                card_title:'商户、商品、活动',
                card_subtitle:'商户一览表',
                card_over:{
                    card_img:wushang,
                    card_url:'https://mp.weixin.qq.com/s/MjM2C9XM85DTDBsVhOjsxA',
                    picture_url:''
                },
                card_item:[
                    {
                        card_theme:'可伴&花礼网｜打卡春日花束里的浪漫，上新立减30！',
                        card_subtheme:'一面鲜花，一面春光，收录这美好季节的所有浪漫',
                        card_img:card_i14,
                        card_url:'https://mp.weixin.qq.com/s/os92mCw5BTdRE1BFjfXueg',
                        picture_url:''
                    },
                    {
                        card_theme:'【可伴生日会】一场超nice的生日会！',
                        card_subtheme:'做福利当然懂得发福利，爱员工，选可伴！',
                        card_img:card_i7,
                        card_url:'https://mp.weixin.qq.com/s/Pi2nyVOuLxNoLgK1ePVlZw',
                        picture_url:''
                    },
                    {
                        card_theme:'可伴携手麦德龙徐东店给您发福利了！',
                        card_subtheme:'五一劳动节，劳动最光荣；荣光..',
                        card_img:card_i8,
                        card_url:'https://mp.weixin.qq.com/s/DoVEi5QnBspsZqi-aXRdUA',
                        picture_url:''
                    }
                ]
            },
            //码上有优惠
            {
                card_title:'大牌补贴',
                card_subtitle:'码上有优惠',
                card_over:{
                    card_img:youhui,
                    card_url:'https://mp.weixin.qq.com/s/Lr4Kc7ako2ir3_XUMQIArg',
                    picture_url:''
                },
                card_item:[
                    {
                        card_theme:'【码上优惠】每逢周五六日全省武商-8%，麦德龙-8%，中百-5%',
                        card_subtheme:'不限次数，不限金额，大家都在用',
                        card_img:card_i18,
                        card_url:'https://mp.weixin.qq.com/s/-L0axu_inm7egobkVVutRA',
                        picture_url:''
                    },
                    {
                        card_theme:'【码上优惠】新增黄商、北山、富迪、寿康永乐等7个商超权益',
                        card_subtheme:'不限次数，不限金额，大家都在用',
                        card_img:card_i10,
                        card_url:'https://mp.weixin.qq.com/s/nSfd1Z1pZvBZTNQ3WsL9hg',
                        picture_url:''
                    },
                    {
                        card_theme:'暖冬传喜讯, 码上有优惠正式入驻云闪付啦！',
                        card_subtheme:'如此优惠，惊喜连连，今天你用了“码”？',
                        card_img:card_i9,
                        card_url:'https://mp.weixin.qq.com/s/-nmJduaeEmeMqAPExVdN_Q',
                        picture_url:''
                    },
                ]
            },
            //礼品图册
            {
                card_title:'企业集采',
                card_subtitle:'礼品图册',
                card_over:{
                    card_img:zhongqiu,
                    card_url:'https://web.ukeban.com/#/giftBook',
                    picture_url:''
                },
                card_item:[
                    {
                        card_theme:'四季花开，季季好福利——新春礼品册',
                        card_subtheme:'物美价廉，欢迎选购',
                        card_img:card_i11,
                        card_url:'https://web.ukeban.com/#/giftBook',
                        picture_url:''
                    },
                    {
                        card_theme:'福虎呈祥，可伴有礼，个性化定制企业春节福利',
                        card_subtheme:'工会主席、HR们请注意了，省心省钱省时的新春好礼',
                        card_img:card_i12,
                        card_url:'https://web.ukeban.com/#/activepage',
                        picture_url:''
                    },
                    {
                        card_theme:'你真的会用单位发的福利吗？发福利还可以薅羊毛！新年开启数字福利生活，礼到福到！',
                        card_subtheme:'——新年开启数字福利生活，礼到福到！',
                        card_img:card_i13,
                        card_url:'https://mp.weixin.qq.com/s/A3oqRkxA9iW5HtHkYXe7lA',
                        picture_url:''
                    },
                ]
            },
        ]
    }
}

  render() {
    return (
      <div>
      <div className="firstRow">
        <Row  gutter={16} style={{position:'absolute', margin:'0 auto', backgroundColor:'white'}}>
          <Col span={8} style={{flex:'0',padding: "0", height:'713px', width:'389px', margin:'10px'}} className={'col1'}>
           <HomeSingleCard title={this.state.card_list[0].card_title} 
            subtitle={this.state.card_list[0].card_subtitle}
            cardItem={this.state.card_list[0].card_item}
           /> 
          </Col>
          <Col span={8} style={{flex:'0',padding: "0", height:'713px', width:'389px', margin:'10px'}} className={'col1'}>
          <HomeSingleCard title={this.state.card_list[1].card_title} 
            subtitle={this.state.card_list[1].card_subtitle}
            cardItem={this.state.card_list[1].card_item}
           /> 
          </Col>
          <Col span={8} style={{flex:'0',padding: "0", height:'713px', width:'389px', margin:'10px'}} className={'col1'}>
          <HomeSingleCard title={this.state.card_list[2].card_title} 
            subtitle={this.state.card_list[2].card_subtitle}
            cardItem={this.state.card_list[2].card_item}
           /> 
          </Col>
        </Row>
        </div>
    
    
        <div className="secondRow">
        <Row gutter={16} style={{position:'absolute', margin:'0 auto', backgroundColor:'white'}}>
        <Col span={8} style={{flex:'0',padding: "0", height:'713px', width:'389px', margin:'10px'}} className={'col1'}>
        <HomeSingleCard title={this.state.card_list[3].card_title} 
            subtitle={this.state.card_list[3].card_subtitle}
            cardItem={this.state.card_list[3].card_item}
           /> 
          </Col>
          <Col span={8} style={{flex:'0',padding: "0", height:'713px', width:'389px', margin:'10px'}} className={'col1'}>
          <HomeSingleCard title={this.state.card_list[4].card_title} 
            subtitle={this.state.card_list[4].card_subtitle}
            cardItem={this.state.card_list[4].card_item}
           /> 
          </Col>
          <Col span={8} style={{flex:'0',padding: "0", height:'713px', width:'389px', margin:'10px'}} className={'col1'}>
          <HomeSingleCard title={this.state.card_list[5].card_title} 
            subtitle={this.state.card_list[5].card_subtitle}
            cardItem={this.state.card_list[5].card_item}
           /> 
          </Col>
        </Row>
        </div>
      </div>
    )
  }
}

