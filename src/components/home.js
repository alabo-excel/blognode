import '../App.css';

function Home(props) {
  if(props.articles === null){
    return(
      <div className="spinner-border mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }else{
    const displayPosts = props.articles.map((article) =>
        <div key={article.publishedAt} className="card col-lg-3 m-5">
          <div className="card-body">
          <img src={article.urlToImage} alt={article.title} />
            <h6 className="text-left"> {article.title}</h6>
            <p>{article.description}</p>
          </div>
        </div>
      )
      return(
        <div className="row">
          {displayPosts}
        </div>
    )
  }
}

export default Home;
