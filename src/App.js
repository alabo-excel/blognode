import React, {Component} from 'react'
import Home from './components/home';
import Header from './components/header';

import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        articles: null
      };
  }

  componentDidMount(){
    console.log('hello world')
    fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=827c32b5413e420a8367b1ec759a6503')
    .then(response => response.json())
    .then(data => {
      this.setState({articles: data.articles})
      console.log(this.state.articles)
    })
  }

  render(){
      return (
        <div className="App">
        <Header />
          <Home articles={this.state.articles} />
        </div>
      );
  }
}

export default App;
