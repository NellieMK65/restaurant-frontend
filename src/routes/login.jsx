import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export function LoginPage() {
	const navigate = useNavigate();

	const formik = useFormik({
		validationSchema: Yup.object().shape({
			phone: Yup.string().required('Phone number is required'),
			password: Yup.string().required('Password is required'),
		}),
		initialValues: {
			phone: '',
			password: '',
		},
		onSubmit: async (values) => {
			// create-react-app -> process.env.
			// vite -> import.meta.env.

			const res = await fetch(
				`${import.meta.env.VITE_SERVER_URL}/login`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
				}
			);

			const data = await res.json();

			// if access_token is available, this means the login process is ok
			if (data?.access_token) {
				toast.success(data.message);
				// 1. store user & token inside local storage
				localStorage.setItem('session', JSON.stringify(data));
				// 2. Navigate the user to home page
				navigate('/');
			} else {
				toast.error(data.message);
			}
		},
	});

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form
				className="flex  flex-col gap-4"
				onSubmit={formik.handleSubmit}
			>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Your phone number" />
					</div>
					<TextInput
						id="phone"
						type="phone"
						placeholder="0712345678"
						name="phone"
						onChange={formik.handleChange}
						value={formik.values.phone}
						helperText={formik.errors.phone}
						color={formik.errors.phone ? 'failure' : undefined}
						// required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="password1" value="Your password" />
					</div>
					<TextInput
						id="password1"
						type="password"
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
						helperText={formik.errors.password}
						color={formik.errors.password ? 'failure' : undefined}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">Remember me</Label>
				</div>
				<Button type="submit" isProcessing={formik.isSubmitting}>
					Submit
				</Button>
			</form>
		</div>
	);
}
