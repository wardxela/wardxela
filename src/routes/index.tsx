import { Title } from "@solidjs/meta";

export default function Home() {
	return (
		<div class="h-full grid place-items-center">
			<Title>wardxela</Title>
			<h1 class="text-[clamp(18px,13vw,300px)] font-[Notable] flex flex-col items-center leading-[calc(100%-3.5vw)]">
			<span class="-ml-[11vw]">WARD</span>
			<span class="-mr-[11vw]">XELA</span>
			</h1>
		</div>
	);
}
