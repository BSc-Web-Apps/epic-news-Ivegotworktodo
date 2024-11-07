import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const nonce = useNonce()

	return (
		<Document nonce={nonce}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<main className="grid h-full place-items-center bg-blue-400">
						<h1 className="px-60 text-center text-mega text-red-400">
							¡ǝɯoɔlǝM
						</h1>
						<p className="text-5xl text-yellow-500">The cat ate the bird</p>
						<button className="transition=all h-1/2 w-1/3 rounded bg-blue-500 px-4 py-2 font-bold text-white duration-500 hover:bg-red-700 hover:text-6xl md:text-lg lg:text-xl">
							Help Me!
						</button>
					</main>
				</div>
			</div>
		</Document>
	)
}
