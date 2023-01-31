import React from 'react';

const PostItem = props => {
  const { post } = props;
  const { title, body } = post;
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
