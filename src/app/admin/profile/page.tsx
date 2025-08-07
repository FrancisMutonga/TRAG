"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/client";
import { User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


type UserProfile = {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  gender?: string;
  role?: string;
  photoURL?: string;
};

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile); 
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center mt-10">No profile data found.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 space-y-4">
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center bg-gray-100">
          {profile.photoURL ? (
            <Image
              src={profile.photoURL}
              alt="Profile"
              width={12}
              height={12}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-12 h-12 text-gray-400" />
          )}
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {profile.firstName} {profile.lastName}
        </h2>
      </div>

      <div className="space-y-2 text-gray-700">
        <div>
          <span className="font-semibold">Phone:</span>{" "}
          {profile.phoneNumber || "N/A"}
        </div>
        <div>
          <span className="font-semibold">Gender:</span>{" "}
          {profile.gender || "N/A"}
        </div>
        <div>
          <span className="font-semibold">Role:</span>{" "}
          {profile.role || "admin"}
        </div>
      </div>

      <div className="text-right">
        <Link
          href="/admin/profile/edit"
          className="text-gray-800 px-4 py-2 rounded shadow-md transition font-medium"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
