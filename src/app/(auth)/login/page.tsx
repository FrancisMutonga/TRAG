"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/client";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      // Sign in the user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch user role from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        // Role-based navigation
        if (role === "admin") {
          router.push("/admin/dashboard");
        } else if (role === "teacher") {
          router.push("/teacher/dashboard");
        } else if (role === "learner") {
          router.push("/learner/dashboard");
        } else if (role === "accounts") {
          router.push("/accounts/dashboard");
        } else {
          setError("Unauthorized role.");
        }
      } else {
        setError("No user data found.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-4">
        <Image
          src="/images/logo.png"
          alt="school Logo"
          className="hover:opacity-80 transition-opacity duration-300"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full max-w-md rounded-xl  flex flex-col  gap-2 shadow-2xl p-8 ">
        <h1 className="text-2xl sm:text-2xlmd:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
          Sign In
        </h1>
        <div className="flex gap-4 items-center text-stone-700">
          <p>Don&apos;t have an account?</p>
          <Link
            href="/signup"
            className="text-med font-semibold text-pink-500 hover:underline"
          >
            Sign Up
          </Link>
        </div>
        <form onSubmit={handleLogin} className="  space-y-4">
          <h3 className="text-xl font-bold text-blue-700">please SignIn</h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded text-stone-700"
            value={email}
            onChange={handleEmailChange}
            required
          />
         <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded text-stone-700"
              value={password}
              onChange={handlePasswordChange}
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
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              type="submit"
            >
              Sign
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
