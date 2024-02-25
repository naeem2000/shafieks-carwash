import dynamic from 'next/dynamic';

export const Components = {
	Home: dynamic(() => import('./app/page'), {
		ssr: true,
	}),
	About: dynamic(() => import('./app/About/page'), {
		ssr: true,
	}),
};
