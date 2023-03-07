import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import { useParams } from 'react-router-dom';

import Layout from "./Layout";
import pageServices from "../services/page";

const Pages = () => {
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPage = async () => {
      setIsLoading(true);
      const pages = await pageServices.getAll();
      const filteredPage = pages.filter((page) => page.slug === slug);
      setPage(filteredPage[0]);
      setIsLoading(false);
    };
  
    fetchPage();
  }, [slug]);
  

  return (
    <Layout>
      {isLoading ? (
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7 text-center">
                <PropagateLoader />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="mb-4">
          {page ? (
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7" dangerouslySetInnerHTML={{ __html: page?.content?.rendered }}></div>
              </div>
            </div>
          ) : (
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">Page not found</div>
              </div>
            </div>
          )}
        </main>
      )}
    </Layout>
  );
};

export default Pages;
