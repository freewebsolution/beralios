import { React, useState, useEffect } from "react";
import postsServices from "../services/post";
import PostListItem from "./Postlistitem";
import { PropagateLoader } from 'react-spinners';

const Posts = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    postsServices.getAll().then((initialPost) => {
      setPost(initialPost);
      setIsLoading(false); // Aggiorniamo lo stato per indicare che il caricamento dei dati è terminato
    });
  }, []);
  return (
    <>
    {isLoading ? (
      <div className="d-flex justify-content-center">
        <PropagateLoader />
      </div>
    ) : (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {post.map((data) => (
            <div key={data.id}>
              <div className="post-preview">
                <PostListItem key={data.id} post={data} />
              </div>
              <hr className="my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default Posts;
