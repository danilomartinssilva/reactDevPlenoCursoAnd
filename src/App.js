import React, { Component } from 'react';
import 'bootstrap-css-only';
import NewComment from './NewComment';
import Comments from './Comments';
import db from './firebase';
import base from './base';
import firebase from './firebase';


class App extends Component {
  constructor(props){

    super(props);  
    this.postNewComment = this.postNewComment.bind(this);
    this.state={
      comments:[]
    }
    
    
    
  }
  componentDidMount(){
    db.on('value',snapshot=>{
      this.setState({
        comments:snapshot.val()
      })
    })
  }
  renderComents(){
   
  }
  postNewComment(comment){
    db.push(comment);

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
