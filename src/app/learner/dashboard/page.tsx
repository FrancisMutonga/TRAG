"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/client";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        router.push("/login");
        return;
      }

      const userDocRef = doc(db, "users", currentUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.role !== "learner") {
          router.push("/unauthorized");
          return;
        }
        setUsername(data.username || "Learner");
      } else {
        router.push("/unauthorized");
      }

      setLoading(false);
    };

    fetchUser();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold mb-4">Welcome, {username}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/*  cards here */}
        <div className="bg-white p-6 rounded shadow">Users</div>
        <div className="bg-white p-6 rounded shadow">Reports</div>
        <div className="bg-white p-6 rounded shadow">Settings</div>
        {/* Add more cards for features */}
      </div>
    </div>
  );
}
