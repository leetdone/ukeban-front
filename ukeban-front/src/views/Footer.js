import React, { Component } from 'react'
import './viewCSS/Footer.css'
export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            
            toPath: ['/index/product', '/index/personal', '/index/welfare', '/index/newsc', '/index/merchant'],
            footer_list: [

                {
                    list: '可伴',
                    list_li: ['产品介绍', '关于我们',  '新闻中心', '商户总览'],

                },
                {
                    list: '联系我们',
                    list_li: ['在线咨询', '客服热线', '微信客服'],
                    toPath: ['', '', '']
                }

            ]
        }
    }
         
        getText (i,index1,e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();        
          if(i!=='客服热线'){
            this.refs.footBone.style.display = 'none'
         }else if(i !== '微信客服'){
            this.refs.footBtwo.style.display = 'none'
         }
            
            let toPath = this.state.toPath
           
            if (i === '产品介绍') {
                this.props.history.push(toPath[0])   

            } else if (i === '关于我们') {
                this.props.history.push(toPath[1])

            } 
            else if (i === '新闻中心') {
                this.props.history.push(toPath[3])
    
            } else if (i === '商户总览') {
                this.props.history.push(toPath[4])
    
            } else if (i === '在线咨询') {
                window.open('http://q.url.cn/CDyPMP?_type=wpa&qidian=true', '_self')
    
            }else if (i === '客服热线') {
                this.refs.footBone.style.display = 'block'
            } else if(i === '微信客服'){
                this.refs.footBtwo.style.display = 'block'
            }
    }

  render() {
    return (
        
        <div className='footer-main'>

          <div className='footer-t'>

            <div className='footer-img'>
              <div className="footer-qr-box">
                <img className='qr-image' src={require('../assets/images/gongzhonghao.png')} alt="" />
                <p className='qr-content'>扫码关注可伴云福利公众号</p>
                </div>
              <div className="footer-qr-box"><img className='qr-image' src={require('../assets/images/xiaochenxu.png')} alt="" /><p className='qr-content'>扫码添加可伴云福利小程序</p></div>
            </div>

          </div>

            <div className='footer-box'>
              
            </div>

            <div className='footer-ul2'>

            </div>
        </div>
    )
  }
}
