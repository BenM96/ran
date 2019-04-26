import React, { Component } from 'react';

 export default class Ran extends Component{
    constructor(props){
        super(props);
        this.state={
            names:["ben","john","dave"]
        };
    }


    
    render(){
        return(
        <div>
            {this.state.names.map((name, i)=><p key={"task" + i}>Hi {name}</p>)}
        </div>
        );
    }

}