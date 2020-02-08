import React,{Component} from 'react';

export default class Note extends Component{
    render(){
        return(
            <article className='mdl-card'>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{this.props.title}</h2>
            </div>
                
                <div className="mdl-card__supporting-text">{this.props.body}</div>
            </article>
        )
    }
}