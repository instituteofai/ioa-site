/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Banner from './banner';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={{ minWidth: '330px' }}>
      <Banner />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: `16px 1.0875rem 1.45rem`,
          color: '#777',
          position: 'fixed', width: `100%`, bottom: 0,
          
        }}
      >
        <footer style={{ marginTop: '48px',marginLeft:'350px', margin:`0 auto`,maxWidth: '960px'}}>
        
          <small>
            © Copyright {new Date().getFullYear()}, Institute of AI. All rights
            reserved.
          </small>
          <small>
            {' '}
            | <a href="mailto:contact@instituteofai.com">Contact us</a>
          </small>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
