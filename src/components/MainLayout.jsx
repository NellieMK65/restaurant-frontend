import { Button, Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MainLayout({ children }) {
	const [session, setSession] = useState(
		JSON.parse(localStorage.getItem('session'))
	);

	const handleLogout = () => {
		// 1. Delete session from localstroage
		localStorage.removeItem('session');

		// 2. Reset session
		setSession(null);

		//3. Naigate user to login/home page
	};

	return (
		<main>
			<Navbar fluid rounded className="sticky">
				<Navbar.Brand as={Link} to="/">
					{/* <img
						src="/favicon.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Restaurant"
					/> */}
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Restaurant
					</span>
				</Navbar.Brand>

				<div className="flex md:order-2">
					{session ? (
						<div className="flex items-center gap-3">
							<h2>{session.user.name}</h2>
							<Button onClick={handleLogout}>Logout</Button>
						</div>
					) : (
						<Button as={Link} to={'/login'}>
							Login
						</Button>
					)}
					<Navbar.Toggle />
				</div>

				<Navbar.Collapse>
					<Navbar.Link as={Link} to="/" active>
						Home
					</Navbar.Link>
					<Navbar.Link as={Link} href="#">
						About
					</Navbar.Link>
					<Navbar.Link href="#">Services</Navbar.Link>
					<Navbar.Link href="#">Pricing</Navbar.Link>
					<Navbar.Link href="#">Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
			<div className="p-6 mx-auto">{children}</div>
		</main>
	);
}
