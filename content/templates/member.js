import React from 'react';
//import { graphql } from "gatsby"

const Member = data => {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>"frontmatter.title"</h1>
        <img
          src="{frontmatter.image}"
          alt="{frontmatter.title}
        "
        />
        <div className="blog-post-content" />
      </div>
    </div>
  );
};

export default Member;
