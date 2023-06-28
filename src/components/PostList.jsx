import React from 'react';
import PostItem from './PostItem';

const PostList = ({ data, deletePost, editPost }) => {
  return (
    <div className="row">
      {data !== null &&
        data instanceof Array &&
        data.map(post => (
          <PostItem
            post={post}
            key={post.id}
            deletePost={deletePost}
            editPost={editPost}
          />
        ))}
    </div>
  );
};

export default PostList;
