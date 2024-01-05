import "./CardZoom.css";

export function CardZoom({ image, preTitle, title, description }) {
	return (
		<div class=" mx-20  bg-white border border-gray-200 rounded-lg flex-wrap card">
			<img
				class="object-cover image md:w-1/2 w-full min-w-[350px]"
				src={image}
				alt={`image about ${image}`}
			/>

			<div class="p-5 relative w-1/2 h-auto min-w-[400px]">
				<p class="font-normal text-gray-700">{preTitle}</p>

				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{title}
				</h5>

				<p class="mb-5 font-normal text-gray-700">{description}</p>
			</div>
			<a
				href="/#metrics"
				class="absolute top-0 right-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 btn-back">
				<svg
					class="rotate-180 w-3.5 h-3.5 mr-1"
					aria-hidden="true"
					fill="none"
					viewBox="0 0 14 10">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"></path>
				</svg>{" "}
				Go back
			</a>
		</div>
	);
}
