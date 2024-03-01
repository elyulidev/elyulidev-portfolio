"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
const Testimonials = () => {
	return (
		<main className='h-full bg-primary/30 py-32; text-center'>
			<div className='container mx-auto h-full flex flex-col justify-center'>
				{/* title */}
				<motion.h2
					variants={fadeIn("up", 0.2)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='text-[35px] leading-tight xl:text-[54px] xl:leading-[1.3] mb-2 xl:mb-0 mt-8 sm:mt-32 md:mt-0 font-semibold'
				>
					What clients <span className='text-accent'>say.</span>
				</motion.h2>
				{/* slider */}
				<motion.div
					variants={fadeIn("up", 0.4)}
					initial='hidden'
					animate='show'
					exit='hidden'
				>
					<TestimonialSlider />
				</motion.div>
			</div>
		</main>
	);
};

export default Testimonials;
