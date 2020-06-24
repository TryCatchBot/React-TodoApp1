import React from 'react';
import './App.css';
import ListItems from "./ListIems";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text: " ",
        key: " "
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

    addItem(e){
      e.preventDefault();//prevents page reload
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==""){
        const newItems = [...this.state.items, newItem];
        this.setState({
          items:newItems,
          currentItem:{
            text:"",
            key:""
          }
        });
      }
    }


    deleteItem(key){
      const filteredItems = this.state.items.filter(item => item.key!==key);
      this.setState({
        items:filteredItems
      })
    }


    setUpdate(text,key){
      const items = this.state.items;
      items.map(item => {
        if(item.key===key){
          item.text=text;
        }
      })
      this.setState({
        items:items
      })
  
    }

    


  render(){
    return (
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit= {this.addItem}>
          <input type="text" placeholder="Todolist Here" 
            value = {this.state.currentItem.text}
            onChange = {this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        </header>
        <ListItems items={this.state.items} 
          deleteItem = {this.deleteItem}
          setUpdate = {this.setUpdate}
        >
        </ListItems>
      </div>
    )
  }
}


// const App = () => {
//   return (
//     <h1>Hi Everyone</h1>
//   );
// }

export default App;
