import './AboutContent.css'
import React, { Component } from 'react'
import titleImage from '../../assets/images/pic_title.png'
export default class AboutContent extends Component {

  render() {
    return (
      <div className='contentBlock'>
          <div className='aboutTitle'>
            {this.props.title}
          </div>
          <div className='content'>
            <p className="info" dangerouslySetInnerHTML={{__html: this.props.content}}></p>
          </div>
      </div>
    )
  }
}
