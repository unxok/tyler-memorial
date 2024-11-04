import "./App.css";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { ComponentProps } from "react";
import { cn } from "./lib/utils";
import { Heart } from "lucide-react";

function App() {
	return (
		<ThemeProvider
			defaultTheme='system'
			storageKey='ui-theme'
		>
			<main className='flex flex-col items-center fixed inset-0 pt-14 px-12 overflow-y-scroll pb-6 scroll-smooth'>
				<ThemeToggle className='fixed top-4 right-4' />
				<Header />
				<Hero />
				<DonationWidget />
				<FuneralInfo />
			</main>
		</ThemeProvider>
	);
}

export default App;

const Header = () => {
	//
	return (
		<>
			<h1 className='font-serif flex flex-wrap w-fit justify-center gap-2 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl'>
				<span className=''>
					<Heart className='inline' /> In Loving Memory of
				</span>
				<span className=''>
					Tyler Stanley-Camba <Heart className='inline' />
				</span>
			</h1>
			<Nav />
		</>
	);
};

const Nav = () => {
	//
	return (
		<nav className='flex gap-4'>
			<NavLink href='https://gofund.me/65a94ed6'>Donate to the family</NavLink>
			<NavLink href='#FuneralInfo'>Funeral information</NavLink>
		</nav>
	);
};

const NavLink = ({ className, ...props }: ComponentProps<"a">) => (
	<a
		{...props}
		className={cn(
			className,
			"text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
		)}
	/>
);

const Hero = () => {
	//
	return (
		<>
			<div className='object-contain w-full flex justify-center items-center pt-8'>
				<img
					src='/tyler1.jpg'
					className='rounded-lg w-[80%] sm:w-1/2'
				/>
			</div>
			<br />
			<p>
				It is with the heaviest heart that we share the sudden and unexpected
				passing of my beloved son, Tyler Camba, at the age of 27. Tyler was a
				light in our lives, full of joy and warmth that touched everyone around
				him.
			</p>
		</>
	);
};

// photos.app.goo.gl/JmxLKoq5szDzvwE98

// https://photos.google.com/share/AF1QipOrOa4XHescWm3W3HNfuwdgtbRtSE1nhxrgw17ApIuy4F2geld9LNA9wEERYpAYAA/photo/AF1QipPrlD3SEWcnOyE6aXqCoMm7R-bDe1nkKgrWIyne?key=OExudzdFdXB6Zlk2ZDFmZWt3cDdSZVJwb0xKYjln

const FuneralInfo = () => {
	//
	return (
		<div className='text-start py-8'>
			<H2 id='FuneralInfo'>Funeral Information</H2>
			<p>
				We will be holding two separate services for Tyler's friends and family
				to say their goodybes and pay respects. One will be held in San Jose
				where he spent his life, and the other in Eureka where many of his
				family resides.
			</p>
			<br />
			<H3>San Jose Funeral</H3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit ea
				distinctio possimus laboriosam quis sequi repellat vitae, at, ut
				eligendi aliquam maxime, ex id. Iusto veniam porro temporibus
				exercitationem? Sunt delectus est veniam sit alias repellat pariatur
				distinctio, in unde sed voluptatibus ipsam inventore, illo totam
				excepturi deserunt, facere aperiam dicta velit? Cum assumenda ea amet
				culpa ducimus eveniet?
			</p>
			<br />
			<H3>Eureka Funeral</H3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit ea
				distinctio possimus laboriosam quis sequi repellat vitae, at, ut
				eligendi aliquam maxime, ex id. Iusto veniam porro temporibus
				exercitationem? Sunt delectus est veniam sit alias repellat pariatur
				distinctio, in unde sed voluptatibus ipsam inventore, illo totam
				excepturi deserunt, facere aperiam dicta velit? Cum assumenda ea amet
				culpa ducimus eveniet?
			</p>
		</div>
	);
};

const H2 = ({ children, ...props }: ComponentProps<"h2">) => (
	<h2
		className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'
		{...props}
	>
		{children}
	</h2>
);

const H3 = ({ children, ...props }: ComponentProps<"h3">) => (
	<h3
		className='scroll-m-20 text-2xl font-semibold tracking-tight'
		{...props}
	>
		{children}
	</h3>
);

const DonationWidget = () => {
	//
	return (
		<>
			<div
				className='gfm-embed h-24 w-24 block'
				data-url='https://www.gofundme.com/f/help-bring-tyler-home-to-rest/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=undefined'
			></div>
		</>
	);
};
