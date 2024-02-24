import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.scss';

export const metadata: Metadata = {
	description: `Your local favourte car wash.`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head>
				<meta
					name='google-site-verification'
					content='qgCDozuB7q8avYtBYV_1gJpJ77rNBVS8zEmmYdamFBI'
				/>
				<title>Shafiek's Carwash</title>
			</Head>
			<body>{children}</body>
		</html>
	);
}
