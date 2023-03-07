import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import image from "../assets/img/about-bg.jpg";
import postService from "../services/post";
import pageService from "../services/page";

const Header = () => {
  const { postId } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await postService.getId(postId);
      setPost(post);
      setPage(null); // reset page state when viewing a post
    };
    const fetchPage = async () => {
      const pageSlug = location.pathname.substring(1);
      const page = await pageService.getBySlug(pageSlug);
      setPage(page);
      setPost(null); // reset post state when viewing a page
    };
    // add a check to reset state when on the homepage
    if (location.pathname === "/") {
      setPost(null);
      setPage(null);
    } else if (postId) {
      fetchPost();
    } else {
      fetchPage();
    }
  }, [postId, location.pathname]);

  const featuredImage = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const pageFeaturedImage = page?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <header
      className="masthead"
      style={{ backgroundImage: `url(${featuredImage || pageFeaturedImage || image})` }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <span className="subheading">
                {post?.title?.rendered || page?.title?.rendered || "A Blog Theme by Start Bootstrap"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
