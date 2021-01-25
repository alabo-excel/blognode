import '../App.css';
import {Link} from 'react-router-dom'

function Home(props) {
  if(props.articles === null){
    return(
      <div className="spinner-border mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }else{
    const blogs = [];
    props.articles.map((article) => {
      if(article.urlToImage === null  || article.author === null){}else{
        blogs.push(article);
      }
    })
    if(blogs.length === 0){}else{
    var displayBlog = blogs.map((blog) =>
    <div key={blog.title} className="card col-lg-3 m-lg-5 text-left">
      <img src={blog.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{blog.title}</h6>
        <p className="card-text">{blog.description.substr(0, 80)}...</p>
        <Link to={'/'+ blog.author}>
        <p className="btn btn-primary">Read More</p>
        </Link>
      </div>
    </div>
    )

    }
  }
  return(
    <div className="row">
      <div className="col-12 mt-2"> <h3>Trending</h3></div>
      {displayBlog}
    </div>
  )
}

export default Home;
