import React, { Component } from 'react';

import Comment from './Comment';

class Comments  extends Component{
    renderComment(key,comment){
      return ( <Comment date = {new Date().getDate()} key={key} comment={comment}/> );
    }
    render(){
        console.log(this.props);
        return (
            <div>
            Renderizar comentários aqui
           {Object.keys(this.props.comments)
            .map(key=>this.renderComment(key,this.props.comments[key]))}
            </div>
        );
    }

}
export default Comments;