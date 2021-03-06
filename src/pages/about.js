import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      The <strong>Institute of AI</strong> was created to provide high quality and affordable
      training to engineers in the field of Artificial Intelligence.
    </p>
    <br />
    <p>Want to know more details about the program. Fill the <a href='https://forms.gle/RqL5oxcHtARV5Rgk6' target='_blank'><b>Form</b></a> and our team will get in touch with you shortly!</p>
    <p>You can also email us at: contact@instituteofai.com</p>
  </Layout>
);

export default AboutPage;
