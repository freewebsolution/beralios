import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pagesService from './pagesService';

const PagesMenu = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    pagesService.getAll().then(data => {
      setPages(data);
    });
  }, []);

  return (
    <ul>
      {pages.map(page => (
        <li key={page.id}>
          <Link to={`/pages/${page.slug}`}>{page.title.rendered}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PagesMenu;
