import React, { Component } from 'react';
import CommentBox from './comment_box.js';
import CommentList from './comment-list';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <CommentBox />
        <CommentList />
      </div>

    );
  }
}
