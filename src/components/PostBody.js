import React from 'react';

const PostBody = ({ post }) => {
  return (
    <div>
      <p className="post-text">{post.text}</p>
    </div>
  );
};

export default PostBody;
