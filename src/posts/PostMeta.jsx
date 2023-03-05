import React from "react";
import dateFormat from "dateformat";
import Author from "../author/Author";

const PostMeta = ({ authorId, date }) => {
  return (
    <p className="post-meta">
      Autore{" "}
      <a href="#!">
        <Author authorId={authorId} />
      </a>{" "}
      il {dateFormat(date, "dd/mm/yyyy")}
    </p>
  );
};

export default PostMeta;
