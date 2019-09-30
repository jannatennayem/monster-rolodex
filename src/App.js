import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-lists/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters:users}));
  }
  handleChange=(e) => {
    this.setState({searchFeild: e.target.value})
  } 
  render() {
    const {monsters, searchFeild} = this.state;
    const filterMonster= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholer= 'search monsters'
        handleChange = {this.handleChange}
      />
        <CardList monsters = {filterMonster}>

          
        </CardList>
        
      </div>
    );
  }
  
}

export default App;
