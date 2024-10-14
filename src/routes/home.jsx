import { useEffect, useState } from 'react';
import { MenuCard } from '../components/MenuCard';

export const HomePage = () => {
	const [categories, setCategories] = useState([]);
	const [menus, setMenus] = useState([]);

	useEffect(() => {
		const session = JSON.parse(localStorage.getItem('session'));

		// this is a route that requires auth with the access_token
		fetch(`${import.meta.env.VITE_SERVER_URL}/categories`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${session.access_token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setCategories(data));

		fetch(`${import.meta.env.VITE_SERVER_URL}/menus`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => setMenus(data));
	}, []);

	return (
		<div>
			<select name="category" id="" className="mb-3">
				{categories.map((category) => (
					<option key={category.id}>{category.name}</option>
				))}
			</select>

			<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
				{menus.map((menu) => (
					<MenuCard key={menu.id} {...menu} />
				))}
			</div>
		</div>
	);
};
