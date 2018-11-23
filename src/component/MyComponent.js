/**
 * Created by crystal on 2017/12/11.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Prompt} from 'react-router-dom';

export default class MyComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogin:this.props.match.params.isLogin
        }
    }

    static propTypes = {
        name:PropTypes.string
    }

    static defaultProps = {
        name: 'wz'
    }

    login () {
        this.setState(preState => ({
            isLogin: !preState.isLogin
        }));
    }

    render () {
        const isLogged = this.state.isLogin;
        console.log(this.props);
        console.log('++++++++++++++++++++++++++++++++++++++=');
        if(isLogged){
            return <h3 style={{backgroundColor:'red'}} onClick={()=>this.login()}>Hello {this.props.match.params.name}</h3>;
        }else{
            return <div><h3 onClick={()=>this.login()}>请先登录</h3><Prompt message="真的要离开吗？"/></div>;
        }
        //return html;
    }
}


