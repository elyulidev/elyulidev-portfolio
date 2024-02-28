import Link from "next/link";
import Socials from "./Socials";
//import Image from "next/image";
//import Logo from "../../public/logo.svg";

const Header = () => {
	return (
		<header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
			<div className='container mx-auto'>
				<div className='flex flex-col justify-between items-center gap-y-3 py-8 lg:flex-row'>
					{/* Logo */}
					<Link href={`/`} className='uppercase text-3xl font-bold'>
						{/* <Image src={Logo} alt='' /> */}
						elyuli
						<span className='text-accent font-semibold'>dev</span>
					</Link>
					{/* socials */}
					<Socials />
				</div>
			</div>
		</header>
	);
};

export default Header;
