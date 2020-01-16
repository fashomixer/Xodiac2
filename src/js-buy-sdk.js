import fetch from 'node-fetch';
import Client from 'shopify-buy';

global.fetch = fetch;

const client = Client.buildClient({
	storefrontAccessToken: '2e74d5f9fed3b9939dcfa9d026fe09e3',
  	domain: 'https://xodiakxtrx1.myshopify.com/api/graphql'
});

export default client;
