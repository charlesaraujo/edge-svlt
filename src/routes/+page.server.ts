import { error } from '@sveltejs/kit';
import createClient from '../lib/prismicio';

export async function load({ fetch, request }) {
	const homepageUID = 'home';
	const client = createClient({ fetch, request });
	const document = await client.getByUID('home', homepageUID);

	if (document) {
		return document;
	}

	error(404, 'Not found');
}
