import React,{Component} from 'react';

export default class Note extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </article>
        )
    }
}