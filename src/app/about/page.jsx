"use client";

import Avatar from "@/components/Avatar";
// icons
import Circles from "@/components/Circles";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
} from "react-icons/fa";

import {
	SiNextdotjs,
	SiFramer,
	SiAdobexd,
	SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
	{
		title: "skills",
		info: [
			{
				title: "Web Development",
				icons: [
					<FaHtml5 key={1} />,
					<FaCss3 key={2} />,
					<FaJs key={3} />,
					<FaReact key={4} />,
					<SiNextdotjs key={5} />,
				],
			},
			{
				title: "UI/UX Design",
				icons: [<FaFigma key={1} />],
			},
		],
	},
	{
		title: "experience",
		info: [
			{
				title:
					"Professor - 'Máximo Gómez Báez' University, Ciego de Ávila, Cuba",
				stage: "2015 - present",
			},
			{
				title:
					"Web Developer - 'Máximo Gómez Báez' University, Ciego de Ávila, Cuba",
				stage: "2015 - present",
			},
		],
	},
	{
		title: "credentials",
		info: [
			{
				title:
					"Informatic Engineer - 'Máximo Gómez Báez' University, Ciego de Ávila, Cuba",
				stage: "2015",
			},
			{
				title:
					"M.Sc. in Applied Informatic - 'Máximo Gómez Báez' University, Ciego de Ávila, Cuba",
				stage: "2022",
			},
		],
	},
];

const About = () => {
	const [index, setIndex] = useState(0);

	return (
		<main className='h-full bg-primary/30 py-32 text-center xl:text-left '>
			<Circles />
			{/* avatar img */}
			<motion.div
				variants={fadeIn("right", 0.2)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='hidden xl:flex xl:h-[50%] absolute bottom-0 xl:-left-[245px]'
			>
				<Avatar />
			</motion.div>
			<div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>
				{/* text */}
				<div className='relative z-[1] flex-1 flex flex-col justify-center '>
					<motion.h2
						variants={fadeIn("right", 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='text-[35px] leading-tight xl:text-[54px] md:leading-[1.3] mb-4 font-semibold'
					>
						Transforming <span className='text-accent'>Visions</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("right", 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
					>
						Full stack developer with a passion for building innovative, user
						friendly applications. Skilled in a wide range of front end and back
						end technologies, and able to deliver high quality, scalable systems
						that meet the needs of both users and stakeholders.
					</motion.p>
					{/* counters */}
					<motion.div
						variants={fadeIn("right", 0.6)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='hidden xl:flex xl:max-w-none mx-auto xl:mx-0 mb-8'
					>
						<div>
							<div className='flex flex-1 xl:gap-x-6'>
								{/* experience */}
								<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
									<div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={8} duration={5} /> +
									</div>
									<p className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
										Years of experience
									</p>
								</div>
								{/* clients */}
								<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
									<div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={9} duration={5} /> +
									</div>
									<p className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
										Tecnologies
									</p>
								</div>
								{/* projects */}
								<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
									<div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={15} duration={5} /> +
									</div>
									<p className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
										Finished projects
									</p>
								</div>
								{/* awards */}
								<div className='relative flex-1'>
									<div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={6} duration={5} /> +
									</div>
									<p className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
										Certifications
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* info */}
				<motion.div
					variants={fadeIn("left", 0.4)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='w-full h-[480px] flex flex-col xl:max-w-[48%] xl:mt-36'
				>
					<div className='flex mx-auto gap-x-4 mb-4 xl:gap-x-8 xl:mx-0'>
						{aboutData.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className={`${
									index === itemIndex
										? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
										: ""
								} relative cursor-pointer capitalize xl:text-lg after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
								onClick={() => setIndex(itemIndex)}
							>
								{item.title}
							</div>
						))}
					</div>
					<div className='py-2 flex flex-col items-center gap-y-2 xl:py-6 xl:gap-y-4 xl:items-start h-[200px] xl:h-auto overflow-auto xl:overflow-hidden pb-[40px] xl:mb-0'>
						{aboutData[index].info.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className='flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
							>
								{/* title */}
								<div className='font-light mb-2 md:mb-0 xl:max-w-[300px]'>
									{item.title}
								</div>
								<div className='hidden md:flex'>-</div>
								<div>{item.stage}</div>
								<div className='flex gap-x-4'>
									{/* icons */}
									{item.icons?.map((icon, i) => (
										<div key={i} className='text-2xl text-white'>
											{icon}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default About;
