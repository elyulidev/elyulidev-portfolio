"use client";

// icons
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	HiChatBubbleBottomCenterText,
	HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
	{ name: "home", path: "/", icon: <HiHome /> },
	{ name: "about", path: "/about", icon: <HiUser /> },
	{ name: "services", path: "/services", icon: <HiRectangleGroup /> },
	{ name: "work", path: "/work", icon: <HiViewColumns /> },
	{
		name: "testimonials",
		path: "/testimonials",
		icon: <HiChatBubbleBottomCenterText />,
	},
	{
		name: "contact",
		path: "/contact",
		icon: <HiEnvelope />,
	},
];

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className='h-max w-full fixed top-0 z-50 bottom-0 flex flex-col items-center justify-between gap-y-4 mt-auto xl:w-16 xl:max-w-md xl:h-screen xl:right-[2%] xl:justify-center pointer-events-none'>
			<div className='w-full h-[80px] flex justify-between items-center gap-y-10 px-4 py-8 bg-white/10 backdrop-blur-sm text-3xl md:px-40 xl:flex-col xl:h-max xl:justify-center xl:px-0 xl:text-xl xl:rounded-full pointer-events-auto'>
				{navData.map((link, index) => (
					<Link
						key={link.name + index}
						href={link.path}
						className={`${
							link.path === pathname && "text-accent"
						} relative flex items-center group transition-all duration-300 hover:text-accent`}
					>
						{/* tooltip */}
						<div className='hidden absolute right-0 pr-14 xl:group-hover:flex'>
							<div className='relative flex items-center text-primary bg-white p-[6px] rounded-[3px]'>
								<div className='text-[12px] capitalize leading-none font-semibold'>
									{link.name}
								</div>
								{/* triangle */}
								<div className='absolute -right-2 border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0'></div>
							</div>
						</div>
						{/* icon */}
						<div>{link.icon}</div>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
