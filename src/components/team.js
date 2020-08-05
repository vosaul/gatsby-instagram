import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostLink from './post-link';

const Team = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
     {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              image
              slug
              title
            }
          }
        }
      }
    }
  `);

  const renderMembers = () => {
    const Members = edges.map(({ node }) => {
      const {
        id,
        frontmatter: { image, slug, title },
      } = node;
      return <PostLink key={id} post={node} />;
    });
    return Members;
  };

  return (
    <section className="container-fluid">
      <div className="team_grid container">
        <h2>our team</h2>
        {renderMembers()}
      </div>
    </section>
  );
};

export default Team;
