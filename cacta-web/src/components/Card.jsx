import "./Card.css";

export function Card({ imagePath, altText, preTitle, title, description, href}) {
	return (
		<div class="max-w-sm bg-white border border-gray-200 rounded-lg card">
			<img
				src={imagePath}
				alt={altText}
				class="rounded-t-[1rem] w-full max-h-[225px] object-cover opacity-85 image"
			/>

			<div class="p-5">
				<p class="font-normal text-gray-700">{preTitle}</p>

				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{title}
				</h5>

				<p class="mb-5 font-normal text-gray-700">{description}</p>
				<a
					href={href}
					id="read-more"
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 btn">
					Read more
					<svg
						class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"></path>
					</svg>
				</a>
			</div>
		</div>
	);
}
