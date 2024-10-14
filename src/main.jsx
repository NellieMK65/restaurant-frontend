import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './routes/home.jsx';
import { LoginPage } from './routes/login.jsx';
import { MainLayout } from './components/MainLayout.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<MainLayout>
				<HomePage />
			</MainLayout>
		),
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Toaster position="top-right" />
		<RouterProvider router={router} />
	</StrictMode>
);
