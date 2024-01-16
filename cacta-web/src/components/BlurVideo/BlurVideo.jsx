import { useState } from "react";
import youtube from "../../img/youtube.png";
import video1 from "../../videos/video1.mp4";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo() {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		// stop scroll
		document.body.style.overflow = "hidden";
	};
	const closeDialog = () => {
		setIsOpen(false);
		// enable scroll
		document.body.style.overflow = "auto";
	};

	return (
		<article className="">
			<video
				className="rounded-lg border app-video"
				src={video1}
				loop
				muted
				autoPlay></video>
			<button onClick={openDialog}>
				<img
					src={youtube.src}
					className="absolute top-0 bottom-0 left-0 right-0 m-auto w-28 youtube"
					alt="logo youtube"
				/>
			</button>
			{isOpen && (
				<dialog open className="z-30">
					<iframe
						className="m-auto w-[50%] aspect-video rounded-lg shadow-2xl"
						src="https://www.youtube.com/embed/XTH7oeiY2Cg?si=fDqlXkuYmHE4XKDi&autoplay=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>

					<button
						className="fixed top-5 right-5 bg-red z-40"
						onClick={closeDialog}>
						<img
							src={close.src}
							alt="close button"
							className="close-button"
						/>
					</button>
				</dialog>
			)}
		</article>
	);
}
