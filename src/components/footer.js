import React from 'react';
import Navbar from './navbar';
import config from 'data/config';

const Footer = () => {
  const conf = { config };
  const F = conf.config;
  const title =  F.title;
  const email =  F.email;
  const social = F.socials;
  const description = F.description;
  return (
    <footer className="site_footer container-fluid">
      <div className="wrapper">
        <div className="footer_grid">
          <div className="footer_col col1">
            <p>
              <a className="u-email" href={email}>
                <span>&#128231;</span> {email}
              </a>
            </p>
            <p>Created by Gatsby</p>
            <p>
              Developer:{' '}
              <a
                href="https://www.upwork.com/fl/volodimirsaulyak"
                target="_blank"
                rel="noopener noreferrer"
              >
                vosaul
              </a>
            </p>
            <p>
              <span>&#169;</span> TEAMA, 202010px
            </p>
          </div>

          <div className="footer_col col2">
            <h3>Join Us at</h3>
            <Navbar siteSocial={social} />
          </div>

          <div className="footer_col col3">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
