import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Account() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 pt-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">Create an account</h1>
        <p className="text-gray-500 mb-6">
          Access your tasks, notes, and projects anytime, anywhere — and keep
          everything flowing in one place.
        </p>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block font-medium mb-1">Your email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg mt-2 transition-colors"
          >
            Get Started
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex justify-center gap-3">
          <button className="border rounded-lg px-6 py-2 hover:bg-gray-50">
            Be
          </button>
          <button className="border rounded-lg px-6 py-2 hover:bg-gray-50">
            G
          </button>
          <button className="border rounded-lg px-6 py-2 hover:bg-gray-50">
            f
          </button>
        </div>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Account;
