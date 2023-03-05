import React, { useEffect, useState } from "react";
import postServices from "../services/post";
import { useParams } from "react-router-dom";
import { PropagateLoader } from 'react-spinners';

import Layout from "../pages/Layout";

const PostDetail = (props) => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    postServices.getId(postId).then((data) => {
      setPost(data);
      setIsLoading(false); // Aggiorniamo lo stato per indicare che il caricamento dei dati è terminato
    });
  }, [postId]);
  

  return (
    <Layout>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <PropagateLoader />
        </div>
      ) : (
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <h1>{post.title.rendered}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></div>
              </div>
            </div>
          </div>
        </article>
      )}
    </Layout>
  );
};
export default PostDetail;
