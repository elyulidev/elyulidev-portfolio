"use client";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { BsArrowRight } from "react-icons/bs";
import Spinner from "../../../public/spinner.svg";
import { useEffect } from "react";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitting, ...formState },
	} = useForm({ mode: "all" });

	const onSubmit = async (data) => {
		console.log("onSubmit>>", data);
		try {
			const response = await fetch(
				"https://formsubmit.co/ajax/elyuli.dev@gmail.com",
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);

			if (!response.ok) {
				console.log("response", response);
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<main className='h-full bg-primary/30'>
			<div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
				{/* text & form */}
				<div className='flex flex-col w-full max-w-[700px]'>
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h2 text-center mb-12'
					>
						Let&apos;s <span className='text-accent'>connect.</span>
					</motion.h2>
					{/* form */}
					<motion.form
						variants={fadeIn("up", 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-1 flex-col gap-6 w-full mx-auto'
					>
						{/* input group */}
						<div className='flex gap-x-6 w-full'>
							<input
								{...register("name", {
									pattern: /^[a-zA-Z\u00C0-\u00FF]{3,16}$/,
									required: true,
								})}
								type='text'
								placeholder='name'
								className={errors.name ? "input ring-2 ring-red-600 " : "input"}
								autoComplete='off'
								required
							/>
							<input
								{...register("email", {
									pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									required: true,
								})}
								type='text'
								placeholder='email'
								className={
									errors.email ? "input ring-2 ring-red-600 " : "input"
								}
								//autoComplete='off'
								required
							/>
						</div>
						<textarea
							{...register("textarea", {
								pattern: /^(?!\s*$)[\s\S]{1,10}$/,
								required: true,
							})}
							id='textarea'
							placeholder='Message'
							cols='30'
							rows='5'
							className={
								errors.textarea ? "textarea ring-2 ring-red-600 " : "textarea"
							}
							autoComplete='off'
						></textarea>
						<button
							className={`${
								!isDirty || !isValid || isSubmitting
									? "bg-gray-100/50"
									: "hover:border-accent"
							} btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group`}
							disabled={!isDirty || !isValid || isSubmitting}
						>
							{isSubmitting ? (
								<>
									<svg
										className='animate-spin -mr-4 h-5 w-5 text-accent'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
								</>
							) : (
								<>
									<span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
										let&#39;s talk
									</span>

									<BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
								</>
							)}
						</button>
					</motion.form>
				</div>
			</div>
		</main>
	);
};

export default Contact;
