/**
 * Created by crystal on 2017/12/11.
 */
import React, { Component } from 'react';

export default class InputFocus extends Component {
    constructor(props){
        super(props);
        this.state = {
            liked:false
        }
    }

    handleClick () {
        let {liked} = this.state;
        this.setState({liked:!liked})
        console.log(liked)
        this.refs.inputtext.focus();
    }

    render () {
        var text = this.state.liked?'like':'hate';
        return (
            <div>
                <input type="text" ref="inputtext"/>
                <button onClick={()=>this.handleClick()}>input {text} focus</button>
            </div>
        );
    }
}