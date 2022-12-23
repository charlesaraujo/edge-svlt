import * as prismic from '@prismicio/client';

const repoName = 'edge-svlt';
const accessToken = '';

const routes = [
	{
		type: 'home',
		uid: 'home',
		path: '/'
	},
	{
		type: 'outras',
		path: '/:uid'
	}
];

const createClient = ({ request, fetch } = {}) => {
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
