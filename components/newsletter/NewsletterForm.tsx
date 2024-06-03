import { Form, Input } from '@/styles/Newsletter/NewsletterStyles';
import React, { useState } from 'react';
import Button from '../UI/Button';
import Title from '../UI/Title';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title level={3}>Subscribe to my newsletter</Title>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => {  }}>Subscribe</Button>
    </Form>
  );
};

export default NewsletterForm;