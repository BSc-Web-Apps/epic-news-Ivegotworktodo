import { type LoaderFunctionArgs, json } from '@remix-run/node'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	console.log({ category })

	return json({})
}

export default function NewsPageIndex() {
	return (
		<main className="container py-24">
			<h2 className="text-4xl">
				Select a news category from the choices above...
			</h2>
		</main>
	)
}
