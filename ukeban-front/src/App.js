
import React from 'react';
import './App.css';
import Product from './views/Product';
import About from './views/About';
import Help from './views/Help';
import Merchant from './views/Merchant';
import News from './views/News';
import Home from './views/Home';
import {HashRouter, NavLink, Route} from 'react-router-dom'
import RouterIndex from './RouterIndex';
import {Button} from 'antd'
class App extends React.Component{
  // state = {
  //   current: 0,
  //   list:[
  //     {
  //       id: 0,
  //       text: '首页',
  //       routeName: 'Home',
  //     },
  //     {
  //       id: 1,
  //       text:'产品介绍',
  //       routeName: 'Product',
  //     },
  //     {
  //       id: 2,
  //       text: '关于我们',
  //       routeName: 'About',
  //     },
  //     {
  //       id: 3,
  //       text: '新闻中心',
  //       routeName: 'News',
  //     },
  //     {
  //       id: 4,
  //       text: '商户总览',
  //       routeName: 'Merchant',
  //     },
  //     {
  //       id: 5,
  //       text: '帮助中心',
  //       routeName: 'Help',
  //     },
  //   ]
  // }

  handleClick(index){
    console.log(index)
    this.setState({
      current: index
    })
  }

  choosePage(){
    switch(this.state.current){
      case 0:
        return<Home></Home>
      case 1:
        return<Product></Product>
      case 2:
        return<About></About>
      case 3:
        return<News></News>
      case 4:
        return<Merchant></Merchant>
      case 5:
        return<Help></Help>
      default:
        return null
    }
  }

  render(){
    return(
      <div>
        <Button>hi</Button>
        <div className='heads'>
          <div className='heads-box'>
            <p>欢迎来到可伴员工之家</p>
            <p className='heads-applet'>可伴云服务小程序</p>
          </div>
          <div className='nav'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAArCAMAAAAe72skAAABFFBMVEUAAAAAAADHAAnHAAnFDwDHAAkAAADEAADGAAXHAAnHAAnHAAbEAAUAAADHAAnHAAkAAADHAAjHAAjHAAgAAADDAAAAAAAAAADHAAkAAAAAAADHAAfHAAgAAADHAAnHAAnIAAnHAAnGAAnHAAjGAAcAAADHAAkAAADIAAjJAAjHAAnIAAkAAAAAAAAAAAAAAAAGAADGAAcAAADBAAYBAADHAAkAAADHAAjHAAgAAADGAAjGAAbHAAkAAAAAAADHAAjHAAkAAADFAAnHAAkAAADGAAYAAAAAAAAAAADwggAAAAAAAADGAAfvgQDugADwggDxggDxgQAAAADwgQAAAADwggDufwDvgQDxgwDuggDHAAoAAACkrPkQAAAAWnRSTlMA9/zsCfYJDR/O8jAZEZjcx7qKby4T17qfi09DOebgx8CxpXs28NepWT3n07Oil2pdSCYl3YSBdmBWUSnjnXplVDeqkkAsHOvNmJJjTDUU98eQc1BJsx3df2jdnvTXAAAEGklEQVRIx51T53raQBA8nXSqiN47phsDxoAhYFNc4xrbcZr0/u+RvaIgxUm+JPNHp52d23roLzGeb1IIhcIEZ+H7LwhVMKmllDh2HFz/N2mBaqYhwwFUAnfer2fxsMD5bL1paD52NOugEQZNuVulUkPxGKW7VzaB2QETuTqmlGYVlmgjOyTOpDhep8HPkYe67LwFKQCjn8m4vM7Cr9lhTvuL80g5HvKUC6EMIgYZp2I0VI9KnZnBzD1L7xa6XjXxXylxB5gEZpESBP4TVZGNTAhpFbl0+ivpvg49iLGjXMgSp9Ko+Ok93qhiBL+VVmDs4wiXdlOJ6eVloKya6LE+O6sYvZMAdwZcQxZS6hPzsycF5EEJhfTlZXF+bhDvWm0nBT+thn3CbNG3Ed1Ovb6+15XUvLVLWEgJdGzuUxpFLWTpYrHD+5jBjDXQpShwiZC1z5tdD7aynDUINlmj9ApmzrXzKolYaIaZfwLGaoh2QivLDpaDCzeic2Wm1khBqTjOokseqxISDITRIIPNqNAKSBMgZRY8R+h1cBjp6QrPmCwgH4N73bNWJky/1KStwuy0RGrUnZzBJCJiE4FanpneUlpVEhhPAgF4EEj9eDLYkwue1LRoqDqmx3u0NALZ1hqIgo8gCzfb4xO5oJV9xaBQhIVVEo4fppiNKCjc0DcVp6V3ZcGHWYVh5rpYB9rbE08nK6LsR0w6CJaiqBAwJ2y5xlUwE4+qihXuEP8D1wzH45nUkpndCnXW88VUFlGFVKv5HpM2w0Gp0uOtCIRpUerxEUYQE+7YGC/kn99kmMfhjVGy3pt7/HxzA4ZUwjAJMctTXdnNANdFIL7TdAO8/Ak0//n56wfxdqwGvVc/2Q3A4ox4BCPEsTFwpK6hh6ebj0IqsGsSiQuTUhN7J5DSYbs/f/r0cPOEAliIhZCnmmcqRmjPQkG/h4fnLx9REFY81mrF4kWfqbFn7I1REN8+PDFlEIqmKT+b3jo9Cpttq+g3sK9s9Hsc5TKZ0yOE1MPB6XGSfl9VtB3CCW370feZFxts7zh3leuv7GT+iCuTacl13VLSzsBXus6rfUl62Zak6y26a7oA6cC2DyhXyqtt+pGk5opJBxLjL4bwBUS3adfNHEquNLyagJ1q8oLLbK9djgmL+57a2i92H2SrJviVgMmB9Jjq+0OIfEy542u3lHddcds7Kk3Dod0eJA9ct31R4lKXsnenNNkcHFfA9V8nIKX2HA12R6VgpljRQE3JjSaj3CAlM16Iix8cjbPqe1EvJswxf8Ta1bxDvDBpoDIpOwnuUL2VwBMKSfMeX7TT6cw7FSVz79MH9LZhtCmVbq8QlUZzt0ABF2Xc1Wl7iOxcO48EVFUNfvmOtEF6qvp8/h6HtM3ov2DfStGjP/DfAZItc3c4PvNOAAAAAElFTkSuQmCC' />
            {/* <div className='nav-img'>img</div> */}
            {/* tabBar1 */}
            <RouterIndex>
            <div>
              <ul>
                  <li>
                    <NavLink to='/Home'>首页</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Product'>产品介绍</NavLink>
                  </li>
                  <li>
                    <NavLink to='/About'>关于我们</NavLink>
                  </li>
                  <li>
                    <NavLink to='/News'>新闻中心</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Merchant'>商户总览</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Help'>帮助中心</NavLink>
                  </li>
              </ul>
            </div>
            </RouterIndex>
          </div>

        </div>
          {/* tabBar2  */}
          
        {/* {this.choosePage()} */}
      
      </div>
    )
  }

}

// {/* <div>
// {/* <ul className='nav-box'> */} */}
  // {
    // this.state.list.map((item,index) => 
    //     <li key={item.id} 
    //       className={this.state.current===index?'active':''} 
    //       onClick={() => this.handleClick(index)}
    //     >
    //       <a href={'/#/' + item.routeName}>{item.text}</a>
    //       {/* {item.text} */}
    //     </li>
    // )
//   }
// </ul>
// </div>   
export default App;
