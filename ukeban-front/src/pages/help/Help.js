import React, { Component } from "react";
import HelpCard from "../../components/helpCard/HelpCard";
import "./Help.css";
export default class Help extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <HelpCard></HelpCard>
        <div className="helpcenter">
          {/* <img src={require('@assets/images/helpcenter.png').default} alt="" /> */}
          <div className="helpcenter-middle">
            <div className="helpcenter-call">
              <img
                src={require("../../assets/images/helpcenter_call.jpg")}
                alt=""
              />
              <div className="helpcenter-call-box01">
                <p>
                  <span>服务时间</span> ：周一至周日9:00至20:00 &emsp; &emsp;
                  &emsp; &emsp; <span>服务热线</span> ：4001875151 <br />
                  拨打服务热线“4001875151”进行咨询和预订，确定购卡数量、购卡金额、付款方式以及经办人的姓名及联系电话；
                  <br />
                  我司在确认收到客户购卡款项（支票或转账）后通知客户取卡；
                  <br />
                  客户凭付款凭证（转账单、支票进账单、现金缴款单）、经办人的有效证件签收卡及购卡发票；
                  <br />
                  金源信公司收到到账款项和客户签收单，卡片24小时内激活；
                  <br />
                  单次购卡金额3.6万元（含）以上，可提供送卡上门服务。
                </p>
              </div>
            </div>
            <div className="helpcenter-henxian"></div>
            <div className="helpcenter-company">
              <img
                src={require("../../assets/images/helpcenter_company.jpg")}
                alt=""
              />
              <div className="helpcenter-call-box02">
                <p>
                  <span> 服务时间</span> ：周一至周日8:30至17:30 <br />
                  <span>支付方式</span>{" "}
                  ：客户可通过现金、支票、转账或刷储蓄卡购卡。
                  <br />
                  <span>卡片激活</span>{" "}
                  ：用现金和银行卡购卡，当日下午17:30卡片激活，用支票及转账方式购卡，资金到账后24小时内卡片激活。
                  <br />
                  <span>汉购通·自营售卡网点</span>
                  <br />1 汉街总部 武汉市武昌区中北路86号汉街总部国际D座501室
                  &emsp; &emsp; &emsp; &emsp; 400-187-5151
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
