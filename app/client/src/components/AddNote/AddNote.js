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
    
    async handleSubmit(event){
        try{
            await fetch('/addNote',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
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
            <form className="AddNote-form" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
               
                <input className="mdl-textfield__input" value={this.state.title} onChange={this.handleChangeTitle} type='text'/>
                <label className="mdl-textfield__label" htmlFor='title'>
                   Title
                </label>
            </div>
            <div className="mdl-textfield mdl-js-textfield">
               <label className="mdl-textfield__label" htmlFor='body'>
                   Body
                </label>
                <textarea rows='5' className="mdl-textfield__input" value={this.state.body} onChange={this.handleChangeBody} />
               
            </div>
               <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent AddNote-button" type='submit'>Отправить</button>
           
            </form>
        )
    }
}