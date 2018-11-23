import React, { Component } from 'react';
import {Route,Link ,Switch} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InputFocus from './component/InputFocus';
import MyComponent from './component/MyComponent';
import TempComponent from './component/TempComponent';
import logo from './logo.svg';
import './App.less';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            temp:'',
            type:'c'
        }
    }

    toCelsius(temp){
        return (temp-32)*5/9;
    }

    toFahrenheit(temp){
        return (temp * 9 / 5)+32;
    }

    tryCovert(temp,cover){
        let input = parseFloat(temp);
        if(Number.isNaN(input)){
            return '';
        }
        let output = cover(input);
        let rounded = Math.round(output*1000)/1000;
        return rounded.toString();
    }

    handleC (type,temp) {
        this.setState({
            type:type,
            temp:temp
        })
    }

  render() {
        let a1=[1,2,3];
        let a2=[...a1];
        a2[1]=6;
        console.log(a1);
        console.log(a2);

    var arr = [
        <h1 key="index1">Hello world!</h1>,
        <h2 key="index2">React is awesome</h2>
    ]  ;
    var name='crystal'

    let type = this.state.type;
    let temp = this.state.temp;
    let ctemp = type==='f'? this.tryCovert(temp,this.toCelsius):temp;
    let ftemp = type==='c'? this.tryCovert(temp,this.toFahrenheit):temp;


    var match=this.props.match;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<MyComponent className="App-title" isLogin={false} name={name}/>*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>

          {arr}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              <ul>
                  <li><Link to="/myComponent/true/crystal" >myComponent</Link></li>
                  <li><Link to="/input" >input</Link></li>

                  <li><Link to="/nomatch" >nomatch</Link></li>
              </ul>

              <hr/>

              <ReactCSSTransitionGroup transitionName="fade"
                                        transitionEnterTimeout={2000}
                                       transitionLeaveTimeout={2000}>
                  {/*<Switch>*/}
                      <Route path="/myComponent/:isLogin/:name" component={MyComponent}/>
                      <Route path="/input" component={InputFocus} />
                      <Route exact path="/" component={Home}/>
                      <Route  render={({location})=><div>地址不存在<code>{location.pathname}</code></div>}/>
                  {/*</Switch>*/}
              </ReactCSSTransitionGroup>
              <hr/>
          </div>



       {/*   <InputFocus/>*/}

          <TempComponent type="c" temp={ctemp} onTempChange={(type,value)=>this.handleC(type,value)} />
          <TempComponent type="f" temp={ftemp} onTempChange={(type,value)=>this.handleC(type,value)} />
      </div>
    );
  }
}

class NoMatch extends Component {
    render () {
        const {location} =this.props;
        console.log(this.props)
        return (
            <div>地址不存在<code>{location.pathname}</code></div>
        );
    }
}

class Home extends Component {
    render () {
        return (
            <div>
                <h2>首页222</h2>
            </div>
        );
    }
}

export default App;

/*

import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/topics">主题列表</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)

class Home extends Component {
    render () {
        return (
            <div>
                <h2>首页222</h2>
            </div>
        );
    }
}

const About = () => (
    <div>
        <h2>关于</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>主题列表</h2>
        {/!*<ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    使用 React 渲染
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    属性 v. 状态
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>请选择一个主题。</h3>
        )}/>*!/}
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default App
*/
