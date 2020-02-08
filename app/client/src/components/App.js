import React,{Component} from 'react';
import Note from './Note';
import AddNote from './AddNote';



export default class App extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            notes:[]
        }     
    }
    
    componentDidMount(){  

    fetch('/notes',{
        method:"GET",             
    }).then((data)=>data.json())
    .then((notes)=>{  
        
        this.setState({
            notes:notes['notes']
        })
        
    }).then(()=>{

    })
    .catch(err=>{
        console.log(err);          
     })
        
    }
    render(){
        return(
            <div>
                <h1>NoteBook</h1>
                {this.state.notes.map((note,index)=>{
                    return <Note key={note._id} title={note.title} body={note.body}/>
                })} 
                <button>Добавить запись</button>
                <AddNote></AddNote>
            </div>
        )}
}