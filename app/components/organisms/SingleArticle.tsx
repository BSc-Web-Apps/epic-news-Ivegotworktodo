import { Link } from '@remix-run/react'
import { FiArrowLeft } from 'react-icons/fi'
import {
	MdOutlineBusinessCenter,
	MdOutlineTheaters,
	MdOutlineDesktopMac,
	MdOutlineNewspaper,
} from 'react-icons/md'
import { toTitleCase } from '#app/utils/stringUtils.js'
import siteLogo from '~/assets/png/logo.png'
import { getArticleImgSrc } from '~/utils/misc.js'

interface SingleArticleProps {
	article: {
		id: string
		title: string
		content: string
		owner: {
			name: string | null
		}
		category: {
			name: string
		} | null
		images: {
			id: string
		}[]
	}
}
export default function SingleArticle({ article }: SingleArticleProps) {
	const mainImage = article.images[0]
	const imageSrc = article.images.length
		? getArticleImgSrc(mainImage.id)
		: siteLogo
	const categoryTitle = toTitleCase(article.category?.name || 'General News')

	const categoryIcons: { [key: string]: JSX.Element } = {
		Business: <MdOutlineBusinessCenter size={50} className="text-red-600" />,
		Entertainment: <MdOutlineTheaters size={50} className="text-red-600" />,
		Technology: <MdOutlineDesktopMac size={50} className="text-red-600" />,
		'General news': <MdOutlineNewspaper size={50} className="text-red-600" />,
	}

	return (
		<div className="container py-16">
			<div className="lg:w-2/3">
				<Link
					to="/news"
					className="group flex items-center gap-2 pb-4 text-muted-foreground transition hover:text-foreground"
				>
					<FiArrowLeft className="transition group-hover:-translate-x-1" /> Back
					to News
				</Link>
				<h2 className="pb-8 text-h2">{article.title}</h2>

				<div
					className={`relative h-[18rem] object-cover md:h-[23rem] lg:h-[28rem]`}
				>
					<div className="absolute inset-0">
						<img
							className="h-full w-full rounded-t-lg object-cover"
							src={imageSrc}
							alt={article.title}
						/>
					</div>
				</div>
				<div className="flex justify-between gap-4 pt-4">
					<div className="flex items-center gap-4">
						{categoryIcons[categoryTitle]}
						<p className="text-lg text-red-500">{categoryTitle}</p>
					</div>
					<span className="text-lg text-muted-foreground text-red-500">
						By: {article.owner.name}
					</span>
				</div>
				<div className="whitespace-break-spaces pt-16 text-xl leading-loose text-zinc-600">
					{article.content}
				</div>
			</div>
		</div>
	)
}
