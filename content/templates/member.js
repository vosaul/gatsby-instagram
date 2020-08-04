import React from "react"
//import { graphql } from "gatsby"

const Member = (data) =>  
 {
  //const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log({data})
  //const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>"frontmatter.title"</h1>
        <img
          src="{frontmatter.image}" alt="{frontmatter.title}
        "/>
        <div
          className="blog-post-content"
          //dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default Member
