"use client";

import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">Account</h1>

      <div className="flex flex-col space-y-4 w-64">
        <Link
          href="/Account/Signin"
          className="text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign In
        </Link>

        <Link
          href="/Account/Signup"
          className="text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Sign Up
        </Link>

        <Link
          href="/Account/Profile"
          className="text-center bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Profile
        </Link>
      </div>
    </div>
  );
}
