import { Sora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";
import PageTransitionEffect from "@/components/PageTransitionEffect";
import { Analytics } from "@vercel/analytics/react";

const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Portfolio",
	description: "Portofolio of web developer @elyulidev",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='overflow-hidden'>
			<body
				className={`page text-white bg-site bg-cover bg-no-repeat ${sora.className} font-sora relative`}
			>
				<link rel='icon' href='/favicons/favicon.ico' sizes='any' />
				<PageTransitionEffect>
					<TopLeftImg />
					<Nav />
					<Header />

					{children}
					<Analytics />
				</PageTransitionEffect>
			</body>
		</html>
	);
}
