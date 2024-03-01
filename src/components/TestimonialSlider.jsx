"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FaQuoteLeft } from "react-icons/fa";

// testimonial data
const testimonialData = [
	{
		image: "bg-yoelkis",
		name: "Yoelkis Hernandez Victor",
		position: "Vice Chancellor at the University of Ciego de Ávila",
		message:
			"When you handed in my work my head was spinning, you were very nice and implemented all the features I requested. Thank you.",
		aspectRatio: "256/341",
	},
	{
		image: "bg-fito",
		name: "Rodolfo Luis Reyes Baños",
		position:
			"Director of the Department of Networks at the University of Ciego de Avila",
		message:
			"I patronized Julio and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers ontime.",
		aspectRatio: "128/85",
	},
	{
		image: "bg-yordanis",
		name: "Yordanis Arencibia López",
		position: "Network Administrator at the University of Ciego de Ávila",
		message:
			"I have been working with him for seven years, I have seen his professional growth and his performance on the front page. I highly recommend it.",
		aspectRatio: "256/193",
	},
	{
		image: "bg-daniel",
		name: "Daniel Orlando Jiménez Choi",
		position: "Web Master at the University of Ciego de Ávila",
		aspectRatio: "1/1",
		message:
			"Julio is a professional dedicated to self-improvement at all times. He is an incredible person, very responsible and deeply involved in our work team.",
	},
];

const TestimonialSlider = () => {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation]}
			className='h-[350px] xl:max-w-[90%]'
		>
			{testimonialData.map((person, index) => (
				<SwiperSlide key={index}>
					<div className='flex flex-col items-center sm:flex-row gap-x-8 h-full px-4'>
						{/* avatar, name, position */}
						<div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
							<div className='flex flex-col justify-center text-center'>
								{/* avatar */}
								<div
									className={`${
										person.image === "bg-yordanis" ? "bg-right" : "bg-center"
									} ${
										person.image
									} mb-2 mx-auto bg-cover bg-no-repeat rounded-full w-[100px] h-[100px]`}
								></div>
								{/* name */}
								<div className='text-lg'>{person.name}</div>
								{/* position */}
								<div className='uppercase text-[12px] font-extralight'>
									{person.position}
								</div>
							</div>
						</div>
						{/* quote & message */}
						{/* max-w-[90%] mx-auto */}{" "}
						<div className='flex flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
							{/* quote icon */}
							<div className='mb-4'>
								<FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
							</div>
							{/* message */}
							<p className='xl:text-lg text-center md:text-left'>
								{person.message}
							</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TestimonialSlider;
