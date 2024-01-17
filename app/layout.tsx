import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
	title: `Shafiek's Carwash`,
	description: `Shafiek's Carwash Web App - Made in Next.JS `,
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
