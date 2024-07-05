import { Form, Input } from '@/styles/Newsletter/NewsletterStyles';
import React, { useState } from 'react';
import Title from '../UI/Title';
import { Link } from 'react-feather';
import Button from '../UI/Button';

const NewsletterForm = () => {
  const handleClick = () => {
    window.open('https://larsassen.substack.com/subscribe', '_blank');
  };
  return (
    <Form>
      <Title level={3}>Subscribe to my Substack newsletter!</Title>
      <Button onClick={handleClick} >Subscribe
      </Button>
    </Form>
  );
};

export default NewsletterForm;