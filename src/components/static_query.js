import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
 const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            subtitle
            author
            email
            description
            services {
              image
              info
            }
            socials {
              link
              title
              icon
            }
            works {
              title
              image
              img_m
              img_s
              w_link
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
