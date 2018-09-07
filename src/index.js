import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  AuthorQuiz from './AuthorQuiz.js';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route} from 'react-router-dom';
const authors =[
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn',
    'Heart of Darkness','Harry Potter and the Sorcerers Stone','The Shining']
    },
    {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
    },
    {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone']
    },
    {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
    },
    {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData(authors){
  const allBooks = authors.reduce(function(p,c,i){
    return p.concat(c.books);
  },[]);

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer =sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author:authors.find((author)=>author.books.some((title)=> title===answer))
  }

}
function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  };
}

let state = resetState();
function onAnswerSelected(answer){
  const isCorrect=state.turnData.author.books.some((book)=>book===answer);
  state.highlight=isCorrect?'correct':'wrong';
  render();
}

function App(){
  return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} onContinue={()=>{
    state=resetState();
    render();
  }}/>;
}


function AddAuthorForm({match}){
  return (<div>
    <h1>
    Add Author
    </h1>
    <p>{JSON.stringify(match)}</p>
  </div>)
}
function render(){
ReactDOM.render(<BrowserRouter><React.Fragment><Route exact path="/" component={App}/>
                              <Route path="/add" component={AddAuthorForm}/>
                              </React.Fragment>
                </BrowserRouter>, document.getElementById('root'));
}
render();

registerServiceWorker();
