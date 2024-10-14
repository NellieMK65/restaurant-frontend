import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const MenuCard = ({ name, price, category }) => {
	return (
		<Card
			// className="max-w-sm"
			imgSrc="https://www.dreams.co.uk/sleep-matters-club/wp-content/uploads/SMC-Food-Dreams-Main-1000x667.jpg"
		>
			<div>
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>
				<span>{category.name}</span>
			</div>
			<div className="flex items-center justify-between">
				<span className="text-3xl font-bold text-gray-900">
					Kshs {price}
				</span>
				<Button>Add to cart</Button>
			</div>
		</Card>
	);
};
