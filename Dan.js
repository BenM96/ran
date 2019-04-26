import React, { Component } from 'react';


export default class Dan extends Component{
    static defaultProps={
        name:"stranger",
        height:"not"
      }
    render(name){
        return(
            <div>
                <p>I am {this.props.name}, I'm {this.props.height} tall</p>
                {console.log(this.props)}
            </div>
        )
    }
}