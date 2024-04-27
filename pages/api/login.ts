import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5167/graphql',
  cache: new InMemoryCache(),
});

const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
        token
        }
    }
    `;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const { data } = await client.mutate({
            mutation: LOGIN,
            variables: { username, password },
        });
        res.status(200).json({ token: data.login.token });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
} 