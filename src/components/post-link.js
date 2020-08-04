import React from 'react';

const PostLink = ({ post }) => {
  console.log({post});
  return (
    <div className="team_item">
      <div className="author_img_box">
        <img src={post.frontmatter.image} alt="{post.frontmatter.title}" />
      </div>
      <div className="text_box">
        <h3>
          <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
};

export default PostLink;
