import React,{Component} from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';



export default class App extends Component{
    constructor(props){
        super(props);
        this.hideForm = this.hideForm.bind(this);
        this.state = {
            notes:[],
            isLoading:true,
            hideForm:true
        }     
    }
    hideForm(){
        this.setState({
            hideForm:!this.state.hideForm
        })
    }
     loadNotes = async() =>{
        try {
            let res = await fetch('/notes',{
                method:"GET",             
            });
            let notes = await res.json();
            this.setState({
                notes:notes['notes'],
                isLoading:false
            }) 
        }catch(err){
            console.log(err);           
        }
    }
    async componentDidMount(){  
        this.loadNotes();
          
    }
    render(){
        if(this.state.isLoading){
            return(
                
                
                <div className='container App'>
                <h1 className='App-logo'>NoteBook</h1>
                    
                    <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
                </div>
                
            )
        }else
        return(
            
           
            <div className='container App'>
            <h1 className='App-logo'>NoteBook</h1>
                {this.state.notes.map((note,index)=>{
                    return <Note  key={note._id} _id={note._id} title={note.title} body={note.body}/>
                })} 
                {this.state.hideForm&&(
                    <button onClick={this.hideForm} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">add</i>
                    </button>
                )}
                
                {!this.state.hideForm&&<AddNote/>}
                
            </div>
            
        )}
}