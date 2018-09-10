import React,{Component} from 'react';
import './AddAuthorForm.css';
import './bootstrap.min.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
class AuthorForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      imageUrl:'',
      books:[],
      bookTemp:''
    }
    this.onFieldChange=this.onFieldChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleAddBook=this.handleAddBook.bind(this);
  }
  onFieldChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onAddAuthor(this.state);

  }
  handleAddBook(event){
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp:''
    });
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm_input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}/>
        </div>
        <div className="AddAuthorForm_input">
          <label htmlFor="imageUrl">Image Url</label>
          <input   type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
        </div>
        <div className="AddAuthorForm_input">
        <label htmlFor="bookTemp">Books</label>
        <input  type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}/>
        <input type="button" value="+" onClick={this.handleAddBook}/>
          {this.state.books.map((book)=><p key={book}>{book}</p>)}

        </div>
        <div className="AddAuthorForm_input">
          <input className="btn btn-primary btn-lg" type="submit" value="Add"/>
        </div>
      </form>
    )
  }
}

function AddAuthorForm({match,onAddAuthor}){

      return (
        <div>
          <h1 className="AddAuthorForm">
          Add Author
          </h1>
          <AuthorForm onAddAuthor={onAddAuthor}/>

      </div>
    )

}

function mapDispatchToProps(dispatch, props){
  return{
    onAddAuthor:(author)=>{
      dispatch({type:'ADD_AUTHOR',author});
      props.history.push('/');
    }
  }
}
export default connect(()=>{},mapDispatchToProps)( AddAuthorForm)
