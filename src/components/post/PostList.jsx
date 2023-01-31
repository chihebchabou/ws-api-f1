import React from 'react';
import PostItem from './PostItem';

const PostList = props => {
  const { posts } = props;
  console.log(posts);

  const postList = posts.map(post => <PostItem key={post.id} post={post} />);

  return (
    <div className="Container py-5">
      <div className="row">{postList}</div>
    </div>
  );
};

export default PostList;
