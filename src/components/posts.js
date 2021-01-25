import React, {Component} from 'react'
import '../App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        articles: null,
        id: null
      };
  }

  componentDidMount(){
    let id = this.props.match.params.post_id
    fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=827c32b5413e420a8367b1ec759a6503')
    .then(response => response.json())
    .then(data => {
      this.setState({
        articles: data.articles,
        id: id})
    })
  }

  render(){
    const infoData = []
    if(this.state.articles === null){}else{
      this.state.articles.map((article) => {
        if(article.title !== this.state.id){}else{
          infoData.push(article)
        }
      })
    }
    if(infoData === []){
      console.log('true'}else{
        const displayPost = infoData.map((data) =>
        <div id="posts" key={data.title} className="text-left">
          <img id="blogImg" src={data.urlToImage} alt="..." />
          <h1>{data.title}</h1>
          <h6>By {data.author}</h6><br />
          <p>{data.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas. Senectus et netus et malesuada. Tempor orci dapibus ultrices in. Ante in nibh mauris cursus mattis molestie a iaculis at. Netus et malesuada fames ac turpis egestas integer eget aliquet. Arcu non sodales neque sodales ut etiam sit. Diam sit amet nisl suscipit adipiscing bibendum. Varius morbi enim nunc faucibus a. Elementum sagittis vitae et leo duis ut diam quam nulla. Urna nunc id cursus metus aliquam eleifend mi in. Vitae turpis massa sed elementum tempus egestas. Sed vulputate mi sit amet mauris commodo quis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Turpis egestas sed tempus urna et pharetra pharetra massa massa.</p>
          <p>Vel eros donec ac odio tempor orci. Mi eget mauris pharetra et. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Accumsan sit amet nulla facilisi morbi tempus iaculis. Luctus accumsan tortor posuere ac ut consequat. Molestie ac feugiat sed lectus. Adipiscing bibendum est ultricies integer. Erat velit scelerisque in dictum non consectetur. At elementum eu facilisis sed odio morbi quis. Amet porttitor eget dolor morbi non arcu risus quis varius. Tortor vitae purus faucibus ornare suspendisse. Gravida rutrum quisque non tellus orci.</p>
          <p>Massa eget egestas purus viverra accumsan in nisl nisi. Arcu felis bibendum ut tristique et egestas quis ipsum. Maecenas sed enim ut sem viverra aliquet. Faucibus in ornare quam viverra. At ultrices mi tempus imperdiet nulla malesuada. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Pulvinar neque laoreet suspendisse interdum. Vel fringilla est ullamcorper eget nulla facilisi etiam. Rhoncus urna neque viverra justo nec ultrices. Egestas congue quisque egestas diam. Non curabitur gravida arcu ac tortor dignissim. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sagittis purus sit amet volutpat consequat. Vel quam elementum pulvinar etiam non quam lacus. Rutrum quisque non tellus orci ac auctor. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Congue mauris rhoncus aenean vel elit scelerisque. Vitae suscipit tellus mauris a diam maecenas sed enim ut.</p>

        </div>
      )
      return (
        <div> {displayPost}</div>
      );
    }
  }

}

export default App;
