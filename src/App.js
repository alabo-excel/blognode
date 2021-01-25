import React, {Component} from 'react'
import Home from './components/home'
import Header from './components/header'
import Posts from './components/posts'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        articles: [],
        type: 'sports'
      };
    this.typeSports = this.typeSports.bind(this)
    this.typeBusinesss = this.typeBusinesss.bind(this)
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=827c32b5413e420a8367b1ec759a6503')
    .then(response => response.json())
    .then(data => {
      this.setState({
        articles: data.articles
      })
    })

  }

  changeType(){
    fetch('http://newsapi.org/v2/top-headlines?country=ng&category='+this.state.type+'&apiKey=827c32b5413e420a8367b1ec759a6503')
    .then(response => response.json())
    .then(data => {
      this.setState({
        articles: data.articles
      })
    })
  }
  typeSports(){
    this.changeType()
  }
  typeBusinesss(){
    fetch('http://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=827c32b5413e420a8367b1ec759a6503')
    .then(response => response.json())
    .then(data => {
      this.setState({
        articles: data.articles
      })
    })
  }
  render(){
      return (
        <BrowserRouter>
        <div className="App">
        <Header sports={this.typeSports} business={this.typeBusinesss} />
        <Route exact path='/' component={() => <Home articles={this.state.articles} isAuthed={true} />} />
        <Route path='/:post_id' component={Posts} />
        </div>
        </BrowserRouter>
      );
  }
}

export default App;
