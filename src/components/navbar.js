import React from 'react';
import { Link } from 'gatsby';
import config from 'data/config';
import '../../static/Ionicons/css/ionicons.min.css';

// Our child component that will display our names:

const NavItem = props => {
  return (
    <a href={props.link}>
      <i className={props.icon} />
    </a>
  );
};

const Navbar = () => {
  const conf = { config };
  const Soc = conf.config.socials;
  const socialsList = Soc.map((social, i) => {
    let k = `nav${toString(i)}`;
    return (
      <>
        <NavItem
          key={k}
          link={social.link}
          icon={social.icon}
          title={social.title}
        />
      </>
    );
  });
  return (
    <header className="main_header transparent">
      <Link to="/" className="logo">
        <h1>TEAMA</h1>
        <p>VISUAL EFFECTS STUDIO</p>
      </Link>
      <p className="social_links">{socialsList}</p>
    </header>
  );
};

export default Navbar;
