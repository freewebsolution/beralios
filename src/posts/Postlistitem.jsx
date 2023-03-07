import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from './PostMeta';

function Postlistitem({ post }) {
  const excerpt = post.excerpt.rendered.slice(0, 50);
  const title = post.title.rendered;
  const postId = post.id;
  const authorId = post.author;
  const date = post.date;

  return (
    <>
      <Link to={`/post/${postId}`}>
        <h2 className="post-title">{title}</h2>
        <h3
          className="post-subtitle"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></h3>
      </Link>
      <PostMeta authorId={authorId} date={date} postId={postId} />
    </>
  );
}

export default Postlistitem;
