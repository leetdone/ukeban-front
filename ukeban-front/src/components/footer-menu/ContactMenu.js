import './FooterMenu.css'
import React, { Component } from 'react'
import { Popover, Button } from 'antd'

export default class ContactMenu extends Component {
  render() {
    return (
        <div className='footerMenu menuLocation2'>
            <p className='menuTitle'>联系我们</p>
            <a className='menuContent' style={{marginLeft:'10px'}} href="https://webpage.qidian.qq.com/2/chat/pc/index.html?linkType=1&env=ol&kfuin=2852138917&fid=81&key=55b3f1d27ae421b799583bc5efa35ee3&cate=7&type=10&ftype=1&_type=wpa&qidian=true&translateSwitch=0&source=0&isLBS=0&isSsc=0&isCustomEntry=0&roleValue=1&roleData=34">在线咨询</a>
            <Popover placement="right" title={"客服热线"} content={<p>400-1875151</p>} trigger="click">
                <Button type="text" style={{padding: 0, border:0, margin:'10px', height:'16px'}} className='menuContent'><p>客服热线</p></Button>
            </Popover>
            <Popover placement="right"content={<img className='qr-image' src={require('../../assets/images/gongzhonghao.png')} alt="" />} trigger="click">
                <Button style={{padding: 0, border:0, height:'16px', marginTop:'4px',marginLeft:'10px'}} type="text"><p className='menuContent'>微信客服</p></Button>
            </Popover>
        </div>
    )
  }
}
