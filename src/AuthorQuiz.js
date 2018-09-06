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

function Turn(){
  return(<div></div>);
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



class AuthorQuiz extends Component {
  render() {
    return (
    <div className="container-fluid">
    <Hero/>
    <Turn/>
    <Continue/>
    <Footer/>
    </div>
  );
}
}

/*

*/


export default AuthorQuiz;
