import Layout from '@/components/layout';
import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  background: url('http://localhost:1337/uploads/7716_20220618_084712_231254754_original_d4b611cdc2.jpg') no-repeat center center;
  background-size: cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: auto;
`;

const AboutPage = () => (
  <Layout>
    <Hero>
      <h1>About Us</h1>
    </Hero>
    <Section>
      <Heading>Our Mission</Heading>
      <Paragraph>
        To deliver outstanding solutions that make a genuine difference in your business.
      </Paragraph>
    </Section>
    <Section style={{backgroundColor: '#f0f0f0'}}>
      <Heading>Our History</Heading>
      <Paragraph>
        Founded in 2010, we have been on an epic ride ever since.
      </Paragraph>
    </Section>
  </Layout>
);

export default AboutPage;
