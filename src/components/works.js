import React from "react";
import PropTypes from 'prop-types';
import config from 'data/config';

const WorkItem = (props) => {
  return (
    <div className="video_item container">
      <h3>{props.title}</h3>
      <a className="video360" href={props.w_link}>
        <picture>
          <img srcSet={props.image} alt="work" />
          <source srcSet={props.im_s} media="(max-width: 600px)" />
          <source
            srcSet={props.img_m}
            media="(max-width: 800px) and (max-width: 800px)"
          />
        </picture>
      </a>
    </div>
  );
};

const Works = () => {
  const W = ({config});
  const workss=W.config.works;
  const waList = workss.map(work => {
    return (
      <WorkItem
        key=  {work.id}
        image={work.image}
        img_m={work.img_m}
        img_s={work.img_s}
        title={work.title}
        w_link={work.w_link}
      />
    );
  });
  return (
    <section className="works" id="video360">
      <h2>our works</h2>
      {waList}
    </section>
  );
};

WorkItem.defaultProps = {
  title: `en`,
  tags: [],
};

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Works;
