import { Children, useEffect, useState } from "react";
import "./Counter.css";

export function Counter({ initialValue, speed, children, text }) {
	const [counterValue, setCounterValue] = useState(0);

	useEffect(() => {
		const value = +initialValue;
		const animate = () => {
			if (counterValue < value) {
				setCounterValue((prevValue) =>
					Math.ceil(prevValue + value / speed)
				);
				setTimeout(animate, 1);
			} else {
				setCounterValue(value);
			}
		};

		animate();
	}, [counterValue, initialValue, speed]);

	return (
		<div className="font-extrabold">
			<p>
				<span
					className="lg:text-7xl text-5xl value flex items-center justify-center span"
					akhi={initialValue}>
					{children}
					{counterValue}
				</span>
			</p>
			<p className="text-3xl flex fle-col justify-center items-center opacity-20 font-extrabold">
				{text}
			</p>
		</div>
	);
}
