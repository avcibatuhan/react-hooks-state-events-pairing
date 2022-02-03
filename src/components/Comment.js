import React from 'react';

export default function Comment({comment}) {
    console.log(comment)
  return (
  <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
  </div>
  );
}
