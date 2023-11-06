"use client"
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../AuthContext';

import { useRouter } from 'next/navigation';
const Page = () => {
    const auth = useAuth();
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({ email: '', password: '' });
    const [apiResponce, setApiResponse] = React.useState('')
    const [apiTrueResponce, setApiTrueResponse] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false);

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Check email format using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!email.match(emailRegex)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        // Check password length
        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await setErrors({ email: '', password: '' });
        await setApiResponse("")
        await setIsLoading(true)
  
    };

    return (
        <>
            {isLoading == true ?
                <div className="modal">
                    <div className="loader">
                        <div className="bar1" />
                        <div className="bar2" />
                        <div className="bar3" />
                        <div className="bar4" />
                        <div className="bar5" />
                        <div className="bar6" />
                        <div className="bar7" />
                        <div className="bar8" />
                        <div className="bar9" />
                        <div className="bar10" />
                        <div className="bar11" />
                        <div className="bar12" />
                    </div>
                </div> : ""}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
                    <h1 className="text-center text-5xl font-bold leading-9 tracking-tight text-[orange]">MMIT University</h1>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login Using Email
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                        <div className="text-green-500 text-sm mt-1">
                            {apiTrueResponce ? apiTrueResponce : ''}
                        </div>
                        <div className="text-red-500 text-sm mt-1">
                            {errors.email}
                            {apiResponce ? apiResponce : ''}
                        </div>
                        <div className="text-red-500 text-sm mt-1">
                            {errors.password}
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        If You Don not Have Account
                        <Link href={'/signup'}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            .  sign up
                        </Link>
                    </p>
                </div>
            </div>

        </>
    );
};

export default Page;
