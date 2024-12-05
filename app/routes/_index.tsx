import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import { Button } from '#app/components/atoms/Button.tsx'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

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
				<div className="container py-16">
					<h2 className="mb-8 text-h2 font-normal">Latest news</h2>

					<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
						{allArticles.length > 0 ? (
							allArticles.map(article => (
								<ArticleCard
									key={article.id}
									title={article.title}
									category={article.category?.name}
									imageId={article.images[0]?.id}
								/>
							))
						) : (
							<p>No articles found</p>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}
