import React, {Component } from 'react';


class NewComment extends Component{
    constructor(props){
        super(props);
        this.handleOnchange = this.handleOnchange.bind(this);
    }
    handleOnchange(event ){
        if(event.keyCode===13){

            this.props.postNewComment({
                comment:this.refs.comment.value

            });

            event.preventDefault();
            
        }
        
    }
    render(

    ){
        return(
            <div className="row">
            <textarea className="form-control"
             placeholder="Comente.."
              onKeyDown={this.handleOnchange}
              ref = "comment"              >
            
            </textarea>
            
            </div>
        );
    }
}
export default NewComment;
