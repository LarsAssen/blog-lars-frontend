import { Form, Input, InputContainer, Button } from '@/styles/Newsletter/NewsletterStyles';
import React, { useState, useEffect } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Subscription successful!');
    } else {
      setMessage(`Error: ${data.error}`);
    }

    setEmail('');
  };

  return (
    <Form>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <InputContainer>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
        />
        </InputContainer>
        
        <Button type="submit">Subscribe</Button>
      </form>
      {message && <p>{message}</p>}
    </Form>
  );
};

export default NewsletterForm;