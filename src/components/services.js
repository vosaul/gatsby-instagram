import React from 'react';
import config from 'data/config';

const ServiceItem = props => {
  return (
    <li>
      <img className="about_icon" src={props.icon} alt="icon" />
      <p>{props.info}</p>
    </li>
  );
};
const Services = () => {
  const S = { config };
  const Serv = S.config.services;
  const servList = Serv.map((serv, i) => {
    let k = 'serv' + toString(i);
    return <ServiceItem key={k} icon={serv.image} info={serv.info} />;
  });
  return (
    <div className="content ">
      <section className="services container-fluid">
        <div className="inner">
          <h2>our services</h2>
          <ul className="about">{servList}</ul>
        </div>
      </section>
    </div>
  );
};
export default Services;
