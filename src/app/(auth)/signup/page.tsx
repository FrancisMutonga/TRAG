"use client";

import { useState, FormEvent } from "react";
import { auth, db } from "../../firebase/client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("learner");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role,
        username,
        createdAt: new Date(),
      });

      // Redirect by role
      if (role === "admin") router.push("/admin/dashboard");
      else if (role === "teacher") router.push("/teacher/dashboard");
      else if (role === "accounts") router.push("/accounts/dashboard");
      else router.push("/learner/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-gray-100">
      <div className="mb-4">
        <Image
          src="/images/logo.png"
          alt="school Logo"
          className="hover:opacity-80 transition-opacity duration-300"
          width={200}
          height={200}
        />
      </div>

      <div className="w-full max-w-md rounded-xl shadow-2xl p-8 bg-white flex flex-col gap-2">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
          Sign Up
        </h1>

        <div className="flex gap-4 items-center text-stone-700 text-sm">
          <p>Already have an account?</p>
          <Link
            href="/login"
            className="text-pink-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded text-stone-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded text-stone-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded text-stone-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide" : "Show"}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              className="w-full p-2 border rounded text-stone-700"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              title={showConfirmPassword ? "Hide" : "Show"}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <select
            className="w-full p-2 border rounded text-stone-700"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="learner">Learner</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
            <option value="accounts">Accounts</option>
          </select>

          <div className="flex justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
              type="submit"
            >
              Signup
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
