import React, { useState,useEffect } from 'react';
import dateFormat from 'dateformat';

const Footer = () => {

    const date = new Date();
    const [siteName, setSiteName] = useState('');
    useEffect(() => {
        fetch('http://wp_react.test/wp-json')
          .then(response => response.json())
          .then(data => {
            const name = data.name;
            setSiteName(name);
          });
      }, []);
    return (
        <footer className="border-top">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="small text-center text-muted fst-italic">Copyright &copy; {siteName} {dateFormat(date,"yyyy")}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;