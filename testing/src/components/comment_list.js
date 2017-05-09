import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    const list = comments.map((comment, i) => <li key={i}>{comment}</li>);

    return (
      <ul className="comment-list">
        {list}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
