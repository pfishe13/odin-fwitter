import React from 'react';

const PostBody = ({ post }) => {
  return (
    <div className="post-body">
      <p className="post-text">{post.text}</p>
      {post.image !== null && (
        <div className="post-image">
          <img alt="post" src={post.image} />
        </div>
      )}
    </div>
  );
};

export default PostBody;
