import React, {Component } from 'react';


//stateless
const Comment = props=>
    
        <div className="card">
            <p className="card-body">{props.comment.comment} -
             {props.date} 
            </p>
        </div>
    



/*
class Comment extends Component{
    render(){
        return (
            <div className="card">
                <p className="card-body">{this.props.comment.comment} -
                 {this.props.date} 
                </p>
            </div>
        )
    }

}
*/
export default Comment;