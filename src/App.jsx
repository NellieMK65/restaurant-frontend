import { useEffect, useState } from 'react';

function App() {
	const [menus, setMenus] = useState([]);

	// CORS

	useEffect(() => {
		fetch('http://localhost:5000/menus', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => setMenus(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main className="text-xl text-red-500">
			Restaurant app
			<ol>
				{menus.map((menu, index) => (
					<li key={index}>{menu.name}</li>
				))}
			</ol>
		</main>
	);
}

export default App;
