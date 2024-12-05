import { Link } from '@remix-run/react'
import logo from '~/assets/png/logo.png'

export default function NavLogo() {
	return (
		<Link to="/" className="flex h-full w-full flex-row p-6">
			<div>
				<img src={logo} alt="Jersey Morning News Logo" className="w-20" />
			</div>
		</Link>
	)
}
