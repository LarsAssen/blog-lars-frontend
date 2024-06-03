import Layout from '@/components/layout';
import React from 'react';
import { AboutContainer, TextColumn, Heading, Paragraph, ProfileImage, ImageColumn,  } from '@/styles/About/AboutStyles';



const AboutPage = () => (
  <Layout>
    <AboutContainer>
      <TextColumn>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi Everybody, my name is Lars Assen and I am a avid ultra runner who loves everything about health, fitness, mindfullness
          and meaning. My passion for these topics has led me to create this blog where I share my experiences and insights with the world.
        </Paragraph>
      </TextColumn>
      <ImageColumn>
        <ProfileImage src="/about.jpg" alt="Profile Image" />
      </ImageColumn>
      <div style={{ gridColumn: "1 / -1" }}> {/* Spans across all columns */}
        <Paragraph>
          It is my mission to inspire others to live a healthier and more fulfilling life. I believe that by
          sharing my journey, I can help others to achieve their goals and live a life of purpose. I am passionate
          about running and the positive impact it has on both physical and mental health.
        </Paragraph>
        <Paragraph>
          I believe in the power of mindfulness and the impact it can have on personal development
          and professional growth. This blog serves as a platform to share my insights and experiences
          with both running and personal growth, hoping to inspire others to chase their passions.
        </Paragraph>
      </div>
    </AboutContainer>
  </Layout>
);

export default AboutPage;
