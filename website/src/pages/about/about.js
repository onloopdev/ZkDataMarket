import React from 'react';
import Layout from '@/components/layout/Layout';

const Wrap = css.div`
  color: #fff;
  padding: 32px 64px;
  h1{
    color: #fff;
    font-size: 20px;
    margin-bottom: 32px;
  }
  p{
    color: rgba(255, 255, 255, .65);
    font-size: 18px;
    line-height: 1.8em;
    margin-bottom: 12px;
  }
`;

function AboutPage() {
  return (
    <Layout>
      <Wrap>
        <h1>About</h1>
        <p>
        We discovered that if we want to motivate individuals to publish data, we must overcome two issues:
          <br />
          <br />
          1. A vendor should be compensated for publicizing/disclosing data, which then becomes public property/goods. <br />
          <br />
          2. Because the disclosed data is already a public good, people cannot resell it to a third party. <br />
          <br />
          Data Market is pleased to offer a Zero knowledge proof solution to establish a market to address these two issues and enable a seamless crowdfunding data market for user <br />
          <br />
          This product is brought to you by a student of Harmony ZK University 
        </p>
      </Wrap>
    </Layout>
  );
}

export default AboutPage;
