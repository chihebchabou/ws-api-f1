import React from 'react';

const PostItem = ({ post, deletePost, editPost }) => {
  const { id, title, body } = post;

  const onDeletePost = () => deletePost(id);

  const onEditPost = () => editPost(post);

  return (
    <div className="col-md-6 mb-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {' '}
            <span className="badge text-bg-success">{id}</span> {title}
          </h5>
          <p className="card-body">{body}</p>
          <a
            href="#!"
            className="btn btn-secondary me-2"
            data-bs-toggle="modal"
            data-bs-target="#addPost"
            onClick={onEditPost}
          >
            Edit
          </a>
          <a href="#!" className="btn btn-danger" onClick={onDeletePost}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
