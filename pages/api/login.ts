import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'localhost:5167/graphql',
  cache: new InMemoryCache(),
});

const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password)
    }
    `;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
        const { data } = await client.mutate({
            mutation: LOGIN,
            variables: { username, password },
        });
        res.status(200).json({ token: data.login });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
} 