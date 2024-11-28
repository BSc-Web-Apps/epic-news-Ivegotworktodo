import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Button } from '#app/components/atoms/Button.tsx'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="container grid h-full place-items-center">
			<h1 className="px-60 text-center text-mega text-red-400">Welcome!</h1>
			<h2 className="text-4xl">News Categories</h2>
			<div className="w-full py-16">
				<HeroCallToAction
					image={heroImage}
					imageRight={true}
					hasBackgroundColour={true}
				>
					<div className="m-6 flex h-full flex-1 flex-col items-center justify-between bg-gray-400 p-16">
						<div className="flex flex-col gap-8">
							<h2 className="dark:text-dark-secondary-foreground text-h2">
								Hello Helo
							</h2>
							<h3 className="text-h2 text-yellow-500">Yellow Yelo</h3>
						</div>
						<Button asChild variant="default" size="wide">
							<Link to="/signup">Sign Up</Link>
						</Button>
					</div>
				</HeroCallToAction>
			</div>
			<p className="text-5xl">This is a great website</p>
			<button className="transition=all h-1/2 w-1/3 rounded bg-blue-500 px-4 py-2 font-bold duration-500 hover:bg-red-700 hover:text-6xl md:text-lg lg:text-xl">
				Goodbye!
			</button>
			<div className="w-1/2">
				<section className="relative h-1/6 border-8 border-yellow-500"></section>
				<section className="relative h-1/6 border-8 border-green-500"></section>
				<section className="relative h-1/6 border-8 border-amber-500"></section>
			</div>
		</main>
	)
}
