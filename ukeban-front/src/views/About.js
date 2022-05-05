import React, { Component } from 'react'
import honor from '../assets/images/pic_honor.png'
import './viewCSS/About.css'
import aboutBanner from '../assets/images/about_banner.png'
import titleImage from '../assets/images/pic_title.png'
import aboutFooter from '../assets/images/about_footer.png'
import AboutContent from '../components/aboutContent/AboutContent'
export default class About extends Component {
  constructor() {
    super()
    this.state = {
        person_ul: [
            {
                title: '公司简介',
                content: '武汉市可伴信息技术有限公司是十年福利品牌供应商，致力于为企业打造数字化福利工会平台， 为银行进行数字化转型升级服务，拥有线上线下商户3000多家，荣获武汉市线上经济重点企业，武汉市大数据企业认证，东湖开发区瞪羚企业等荣誉称号。 <br> 武汉市可伴信息技术有限公司是武汉市金源信企业服务信息系统有限公司全资子公司，可伴迄今已服务20000多家国内外知名企业，已成为广大企业与银行的信任合作伙伴。'

            },
            {
                title: '遇见可伴，遇见美好',
                content: '党的十八大后，国民经济踏上新征途。在消费升级，产业结构优化的背景下,为满足人民对美好生活的向往，响应信息化时代“互联网+”的号召，2015年可伴应运而生。</br>汉购通·可伴秉承“金融创新为实体经济服务”之理念，将现代IT技术应用于帮助客户挑选出市场性价比高的品牌商户和商品，已研发出适用于银行积分兑换、场景营销、工会福利、码上优惠等普及大众的多条产品线。'

            },
            {
                title: '业界领先的服务，客户信赖的好伙伴',
                content: '我们拥有一批高素质的职工队伍，成员均来自于全国各大集团企业，本科以上比例达71%，为公司的发展提供源源不断的动力。'

            },
            {
                title: '汉购通通百业业冠荆楚，为民生福祉可伴进万家',
                content: '2021年8月，一站式福利mall—云福利SaaS平台“可伴云福利”正式上线，目前正在为近两万家企事业机关单位提供专业福利管理服务，一方面帮助企业实现了福利发放管理的在线化、透明化、精准化、智能化与规范化;另一方面又帮助企业降低成本与实现员工的高粘性管理，极大提升广大职工生活品质、增强职工幸福感、获得感与安全感。汉购通可伴与中百、武商、仟吉等实体商户，构建了长期稳定、持续导流的紧密合作关系，真正实现了支付为民、服务社会的目的。引用某集团车间基层职工的话来说，“以前工会福利产品发放单一，缺少了自主选择余地。自从平台启用后，我既可以去家附近的超市消费兑换，也可以在平台上直接选购喜欢的商品。不但福利选择更多，还能享受很多折扣优惠，更能通过转赠亲友账号，让家人也享受到企业的福利，确实很方便实惠!”'

            },
        ],
    }
}
  render() {
    return (
      <div className='about'>
        <div className='about-main'>
          <img className='cardImages' src={honor}/>
          <AboutContent title={this.state.person_ul[0].title} content={this.state.person_ul[0].content}></AboutContent>

        </div>
      </div>
    )
  }
}
