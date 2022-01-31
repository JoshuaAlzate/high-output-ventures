// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import 'cross-fetch/polyfill';
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../apollo-client';
import searchQuery from '../../graphql/search.graphql';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { category, location } = JSON.parse(req.body);
    const result = await client.query({
        query: searchQuery,
        variables: { category, location }
    })
        .then(result => result)
        .catch(error => {
            console.error(error.networkError.result.errors);
        });

    res.status(200).json(result['data']);
}