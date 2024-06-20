import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Home = () => {
  return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome to Cafe Menu</h1>
            <p className="text-lg text-gray-700">Your favorite cafe's menu at your fingertips.</p>
            <InertiaLink href="/login" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Login</InertiaLink>
            <InertiaLink href="/register" className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Register</InertiaLink>
        </div>
  );
};

export default Home;
