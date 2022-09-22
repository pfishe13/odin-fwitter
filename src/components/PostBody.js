import React from 'react';

const PostBody = ({ post }) => {
  return (
    <div>
      <p>{post.text}</p>
    </div>
  );
};

export default PostBody;
