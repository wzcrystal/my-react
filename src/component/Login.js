import React,{Component} from 'react';

export default class Login extends Component {
    render () {
        return (
            <div>
                <label>姓名：</label>
                <input type="text" />
                <label>密码：</label>
                <input type="text" />

                <button type="button">登录</button>
            </div>
        )
    }
}