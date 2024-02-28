import Image from "next/image";
import Link from "next/link";
import Rounded from "../../public/rounded-text.png";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
	return (
		<div className='mx-auto xl:mx-0'>
			<Link
				href={`/work`}
				className='relative w-[90px] h-[90px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px]'
			>
				<Image
					src={Rounded}
					alt=''
					priority
					className='w-[70px] h-[70px] max-w-[141px] max-h-[148px] animate-spin-slow md:w-[40px] md:h-[40px] lg:w-[70px] lg:h-[70px]'
					style={{ aspectRatio: "141/148" }}
				/>
				<HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300 md:text-base lg:text-2xl' />
			</Link>
		</div>
	);
};

export default ProjectsBtn;
