import React,{Component} from 'react';

export default class AddNote extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isHidden:true,
            title:"",
            body:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }
    
    handleSubmit(event){
        fetch('/addNote',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({
                title:this.state.title,
                body:this.state.body
            })
        }).then(()=>{
            event.preventDefault(); 
        })
        .catch(err=>{
            console.log(err);
        })                  
    }
    handleChangeTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    handleChangeBody(event){
        this.setState({
            body:event.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
               <label htmlFor='title'>
                   Title
                   <input value={this.state.title} onChange={this.handleChangeTitle} type='text'/>
               </label>
               <label htmlFor='body'>
                   Body
                   <textarea value={this.state.body} onChange={this.handleChangeBody} />
               </label>
               <button type='submit'>Отправить</button>
            </form>
        )
    }
}