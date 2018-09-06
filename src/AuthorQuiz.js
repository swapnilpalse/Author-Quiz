import React, { Component } from 'react';
import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';

function Hero(){
  return(
    <div className="row">
      <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select a Book written by an author</p>
      </div>
    </div>
  )
}
function Book({title}){
  return(<div className="answer">
      <h4>{title}</h4>
    </div>)
}
function Turn({author,books}){
  return(
    <div className="row turn" style={{backgroundColor:"white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alth="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title}/>)}
    </div>

    </div>
  );
}
function Continue(){
  return(<div></div>);
}
function Footer() {
  return(
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">WikiMedia Commons</a>
        </p>
      </div>
    </div>
  );
}



function AuthorQuiz({turnData}) {
    return (
    <div className="container-fluid">
    <Hero/>
    <Turn{...turnData}/>
    <Continue/>
    <Footer/>
    </div>
  );
}


/*

*/


export default AuthorQuiz;
