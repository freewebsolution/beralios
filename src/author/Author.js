import React, { useState, useEffect } from 'react';
import authorServices from "../services/author";

const Author = (props) => {
  const [authorName, setAuthorName] = useState('');
  
  useEffect(() => {
    authorServices.getId(props.authorId).then((initialAuthor) => {
      setAuthorName(initialAuthor.name);
    });
  }, [props.authorId]);

  return (
    <>
     {authorName}
    </>
  );
}

export default Author;
