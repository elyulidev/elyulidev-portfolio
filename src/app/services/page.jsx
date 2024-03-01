"use client";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const Services = () => {
	return (
		<main className='h-full bg-primary/30 py-36 flex items-center'>
			<Circles />
			<div className='container mx-auto'>
				<div className='flex flex-col md:flex-row gap-x-8'>
					{/* text */}
					<div className='min-w-[200px] text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
						<motion.h2
							variants={fadeIn("up", 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='text-[35px] leading-tight xl:text-[54px] xl:leading-[1.3] mb-2 mt-8 sm:mt-32 md:mt-0 font-semibold'
						>
							My <span className='text-accent'>Services.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn("up", 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className=' max-w-[400px] mx-auto lg:mx-0'
						>
							I offer custom software development services, adapted to the
							specific needs of your project. My focus is to create innovative
							and functional products that boost your business.{" "}
							<span className='hidden xl:flex'>
								With experience in cutting-edge technologies, I guarantee
								efficient, scalable and high-quality development. Contact me to
								take your idea to the next technological level.
							</span>
						</motion.p>
					</div>
					<motion.section
						variants={fadeIn("down", 0.6)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='w-full xl:max-w-[65%]'
					>
						{/* slider */}
						<ServiceSlider />
					</motion.section>
				</div>
			</div>
			<Bulb />
		</main>
	);
};

export default Services;
