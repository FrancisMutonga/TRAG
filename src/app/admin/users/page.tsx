"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebase/client";
import { collection, getDocs } from "firebase/firestore";

type UserType = {
  id: string;
  username: string;
  email: string;
  role: string;
};

export default function ManageUsers() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData: UserType[] = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() } as UserType);
      });
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchRole =
      filterRole === "all" || user.role.toLowerCase() === filterRole;

    return matchSearch && matchRole;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-row gap-12 items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">Manage Users</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          + Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by username or email..."
          className="w-full max-w-sm p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="learner">Learner</option>
          <option value="accounts">Accounts</option>
        </select>
      </div>

      {/* Sleek Card UI */}
      <div className="p-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="min-w-[160px] flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                {/* Profile circle */}
                <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold uppercase shadow-inner">
                  {user.username
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                {/* Username */}
                <div className="mt-3 text-sm font-semibold text-gray-800 text-center">
                  {user.username}
                </div>

                {/* Email or Role */}
                <div className="text-xs text-gray-500 capitalize">
                  {user.role}
                </div>

                {/* Optional actions */}
                <div className="mt-3 flex gap-2">
                  <button className="text-blue-500 text-xs hover:underline">
                    Edit
                  </button>
                  <button className="text-red-500 text-xs hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center w-full py-10">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
