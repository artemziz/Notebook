import React,{Component} from 'react';
import Note from './Note';
import AddNote from './AddNote';
export default class App extends Component{
    render(){
        return(
            <div>
                <h1>NoteBook</h1>
                <Note></Note>
                <Note></Note>
                <Note></Note>
                <button>Добавить запись</button>
                <AddNote></AddNote>
            </div>
        )}
}