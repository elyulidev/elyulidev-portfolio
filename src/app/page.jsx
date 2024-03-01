"use client";

import ProjectsBtn from "@/components/ProjectsBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";

export default function Home() {
	return (
		<main className='bg-primary/60 h-full'>
			{/* text */}
			<div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
				<div className='h-full flex flex-col justify-center container mx-auto text-center xl:pt-40 xl:text-left '>
					{/* title */}
					<motion.h1
						variants={fadeIn("down", 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h1'
					>
						Transforming Ideas <br /> Into{" "}
						<span className='text-accent'>Digital Reality</span>
					</motion.h1>
					{/* subtitle */}
					<motion.p
						variants={fadeIn("down", 0.3)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='max-w-sm mx-auto mb-2 xl:max-w-xl xl:mx-0 xl:mb-3'
					>
						Every line of code is an opportunity to bring ideas to life, build
						innovative solutions, and improve people&#39;s digital lives.
						Satisfaction comes from seeing how work becomes tangible products
						that positively impact the daily lives of users. As a software
						developer, the journey is marked by creativity, technical rigor and
						commitment to excellence in each project.
					</motion.p>
					{/* btn */}
					<div className='relative flex justify-center xl:hidden'>
						<ProjectsBtn />
					</div>
					<motion.div
						variants={fadeIn("down", 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='hidden xl:flex'
					>
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			{/* Image */}
			<div className='w-[1200px] h-full absolute right-0 bottom-0'>
				{/* bg img */}
				<div className='w-full h-full absolute mix-blend-color-dodge translate-z-0 bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat '></div>
				{/* particles */}
				<ParticlesContainer />
				{/* avatar img */}
				<motion.div
					variants={fadeIn("up", 0.5)}
					initial='hidden'
					animate='show'
					exit='hidden'
					transition={{ duration: 1, ease: "easeInOut" }}
					className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:right-[8%]'
				>
					<Avatar />
				</motion.div>

				{/* <Image src={``} alt='' priority={true} style={{ aspectRatio: "" }} /> */}
			</div>
		</main>
	);
}
