import React, { Component } from 'react';
import 'bootstrap-css-only';
import NewComment from './NewComment';
import Comments from './Comments';
import db from './firebase';






class App extends Component {
  constructor(props){

    super(props);  
    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments:{
       
      }
    }
    
  }
  postNewComment(comment){
    const comments = {
      ...this.state.comments,comment
    };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;
    this.setState({
      comments:comments
    });
    db.database().ref('comments').push(comment);
  }
  render() {
    return (
      <div className="container">
      <NewComment postNewComment = {this.postNewComment } />
      <Comments comments = {this.state.comments}/>
      </div>
    );
  }
}

export default App;
