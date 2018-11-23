/**
 * Created by crystal on 2017/12/12.
 */

import React, {Component} from 'react';

 class Boiling extends Component {
    render () {
        if(this.props.celsius>=100){
            return <p>水会烧开</p>
        }
        return <p>水还没开</p>
    }
}

const tempType={
    c:'Celsius',
    f:'Fahrenheit'
}

export default class TempComponent extends Component {
    constructor(props){
        super(props);
        /*this.state = {
            temp: ''
        }*/
    }

    handleChange (e) {
        //this.setState({temp:e.target.value});
        this.props.onTempChange(this.props.type,e.target.value);
    }


    render () {
        let type = this.props.type;
        return (
            <div>
                <label>请输入{tempType[type]}</label>
                <input type="text" value={this.props.temp}
                       onChange={(e)=>this.handleChange(e)}/>

                <Boiling celsius={this.props.temp} />
            </div>
        );


    }
}