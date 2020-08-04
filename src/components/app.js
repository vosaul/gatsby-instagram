import { StyledBody } from 'baseui/card';
import ImageGallery from 'components/imageGallery';
import * as React from 'react';
import Layout from './layout';
import Navbar from './navbar';
import Video from './video_bg';
import Services from './services';
import Works from './works';
import Team from './team';
import './main.css';
import SEO from './seo';

const App = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledBody>
        <Navbar />
        <Video key="video" />
        <Services key="services" />
        <Works key="works" />
        <Team />
        <section className="container insta_box">
          <h3>Join us on Instagram</h3>
          <ImageGallery />
        </section>
      </StyledBody>
    </Layout>
  );
};

export default App;
