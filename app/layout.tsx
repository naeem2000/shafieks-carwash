import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
	title: `Shafiek's Carwash`,
	description: `Your local favourite.`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
