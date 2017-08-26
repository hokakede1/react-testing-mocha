import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

 class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = {comment: ''};
  }


  HandleChange(e){
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: ''
    })
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='CommentBox'>
        <textarea onChange={this.HandleChange.bind(this)}
        value={this.state.comment}
        />
        <button action='submit'>Submit</button>
      </form>
    )
  }
}

export default connect(null,actions)(CommentBox)
