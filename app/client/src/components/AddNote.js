import React,{Component} from 'react';

export default class AddNote extends Component{
    render(){
        return(
            <form>
               <label htmlFor='title'>
                   Title
                   <input type='text'/>
               </label>
               <label htmlFor='body'>
                   Body
                   <input type='text'/>
               </label>
               <button type='submit'>Отправить</button>
            </form>
        )
    }
}