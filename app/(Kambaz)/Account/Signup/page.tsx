'use client';
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create your account
        </h2>

        {/* Vertical stack container */}
        <div className="flex flex-col gap-4">
          <input
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            placeholder="Verify password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <Link
            href="/Account/Profile"
            className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Save
          </Link>

          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/Account/Signin"
                className="text-blue-500 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
