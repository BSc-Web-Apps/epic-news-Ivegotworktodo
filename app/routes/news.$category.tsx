import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'
import { toTitleCase } from '~/utils/stringUtils.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'Category not found')
	const categoryTitle = toTitleCase(category)

	const filteredArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: category,
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ categoryTitle, filteredArticles })
}

export default function NewsCategoryPage() {
	const { categoryTitle, filteredArticles } = useLoaderData<typeof loader>()

	return (
		<div className="container py-8 lg:py-16">
			<h2 className="mb-16 text-h2">{categoryTitle}</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-4 xl:grid-cols-3">
				{filteredArticles.map(article => {
					return (
						<ArticleCard
							key={article.id}
							articleId={article.id}
							title={article.title}
							category={article.category?.name}
							imageId={article.images[0]?.id}
						/>
					)
				})}
			</div>
		</div>
	)
}
