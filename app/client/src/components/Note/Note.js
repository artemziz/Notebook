import React,{Component} from 'react';

export default class Note extends Component{
    constructor(props){
        super(props);
        this.state ={
            title:this.props.title,
            body:this.props.body,
            showEditForm:false,
            showNote:false
        }
    }
    showNote =(event) =>{
        this.setState({
            showNote:!this.state.showNote
        },()=>{
            event.preventDefault();
        })
    }
    changeTitle = (event) =>{
        this.setState({
            title:event.target.value
        })
    }
    changeBody = (event) =>{
        this.setState({
            body:event.target.value
        })
    }
    deleteNote = async(event) =>{
        
        
        try{
            
            
           await fetch(`/deleteNote`,{
                
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    _id: this.props._id
                })
            })
        }catch(err){
            console.log(err);
            
        }finally{
            
            event.preventDefault();
        } 
        
        
    }
    handleSubmit = async(event) =>{
        try{
            await fetch('/editNote',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    _id: this.props._id,
                    title:this.state.title,
                    body:this.state.body
                })
            })
        }catch(err){
            console.log(err);
            
        }finally{
            event.preventDefault();
        }
        
    }
    editNote =(event) =>{
        this.setState({
            showEditForm:true
        })
    }
    render(){
    if(!this.state.showEditForm) {
        return(
            <article className='mdl-card'>
            <div className="mdl-card__title">
                <h2 onClick={this.showNote} className="mdl-card__title-text">{this.props.title}</h2>
                <button onClick={this.editNote} className="mdl-button mdl-js-button">
                    <i className="material-icons">edit</i>
                </button>
            </div>
                
                <div className="mdl-card__supporting-text">{this.props.body}</div>
                <button onClick={this.deleteNote} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">delete</i>
                </button>
            </article>
        )
    }else{
        return(
            <form onSubmit={this.handleSubmit}>
            <div  className='mdl-card'>
            <div className="mdl-card__title">
                <input className="mdl-textfield__input" type='text' onChange={this.changeTitle} value={this.state.title} />
                
            </div>
                
                <textarea className="mdl-textfield__input" onChange={this.changeBody} value={this.state.body} />
                
                
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit"  >Сохранить</button>
                
            </div>
            </form>
        )
    }   
    }
}