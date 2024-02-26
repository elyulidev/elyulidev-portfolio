import { Sora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";

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
		<html lang='en'>
			<body className={`${sora.className}`}>
				<link rel='icon' href='/favicons/favicon.ico' sizes='any' />
				<TopLeftImg />
				<Nav />
				<Header />

				{children}
			</body>
		</html>
	);
}
