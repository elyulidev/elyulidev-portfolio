"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";
import { useEffect, useState } from "react";

const PageTransitionEffect = ({ children }) => {
	// The `key` is tied to the url using the `usePathname` hook.
	const pathname = usePathname();
	const [key, setKey] = useState();

	useEffect(() => {
		setKey(pathname);
	}, [pathname]);

	return (
		<AnimatePresence mode='wait'>
			<motion.div key={key} className='h-full'>
				<Transition />
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransitionEffect;
