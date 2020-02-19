import React,{Component} from 'react';

export default class Note extends Component{
    constructor(props){
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
    async deleteNote(){
        try{
            await fetch(`/deleteNote`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                body: {
                    _id:this.props._id
                }
            })
        }catch(err){
            console.log(err);
            
        }
        
        
    }
    render(){
        return(
            <article className='mdl-card'>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{this.props.title}</h2>
            </div>
                
                <div className="mdl-card__supporting-text">{this.props.body}</div>
                <button onClick={this.deleteNote} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">delete</i>
                </button>
            </article>
        )
    }
}