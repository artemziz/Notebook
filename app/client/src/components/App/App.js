import React,{Component} from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';



export default class App extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            notes:[],
            isLoading:true
        }     
    }
    
    componentDidMount(){  

    fetch('/notes',{
        method:"GET",             
    }).then((data)=>data.json())
    .then((notes)=>{  
        
        this.setState({
            notes:notes['notes'],
            isLoading:false
        })
        
    })
    .catch(err=>{
        console.log(err);          
     })
        
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
                    return <Note key={note._id} title={note.title} body={note.body}/>
                })} 
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">add</i>
                </button>
                <AddNote></AddNote>
            </div>
        )}
}