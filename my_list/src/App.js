import React, { Component } from 'react';
import GroceryList from './components/GroceryList';

class App extends Component {

  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false,
    missingItem: false
  }

  changeHandler = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    if (this.state.item !== "") {
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items: updatedItems,
        item: '',
        id: (this.state.id + 1),
        editItem: false,
        missingItem: false
      })
    } else {
      this.setState({
        missingItem: true
      });
    }
   

  };

  deleteAll = () => {
    this.setState({
      items: []
    });
  };
  deleteOne = (id) => {
    const searchItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: searchItems
    });
  };
  editOne = (id) => {
    const searchItems = this.state.items.filter(item => item.id !== id);
    const targetItem = this.state.items.find(item => item.id === id);
    this.setState({
    items: searchItems,
    item: targetItem.title,
    editItem: true,
    id: id
    })
  };

  render() {
    return (
      <div  >

        {
          <GroceryList
            changeHandler={this.changeHandler}
            item={this.state.item}
            submitHandler={this.submitHandler}
            items={this.state.items}
            title={this.state.title}
            deleteAll={this.deleteAll}
            deleteOne={this.deleteOne}
            editOne={this.editOne}
            editItem={this.state.editItem}
            missingItem={this.state.missingItem}/>
            
        }
        
      </div>
    );
  }
}

export default App;
