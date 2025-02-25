/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from "react";
import { use } from 'react';  // Importing `use` from React

const UpdateMember = ({ params }: any) => {
  // Unwrapping the params here using `React.use()`
  const { id }: any = use(params);
  const [member, setMember] = useState<any>({
    name: "",
    email: "",
    phone: "",
    membershipType: "Regular",
  });

  useEffect(() => {
    const fetchMember = async () => {
      const res = await fetch(`https://next-level-tennis-club.vercel.app/api/members/${id}`);
      const data = await res.json();
      setMember(data);
    };
    fetchMember();
  }, [id]);

  const handleChange = (e: any) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`https://next-level-tennis-club.vercel.app/api/members/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    if (res.ok) {
      alert("Member updated successfully!");
      // Optionally redirect after updating
      window.location.href = `/members/${id}`;
    } else {
      alert("Failed to update member.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Update Member</h1>
      <form onSubmit={handleSubmit} className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="phone"
          value={member.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        />
        <select
          name="membershipType"
          value={member.membershipType}
          onChange={handleChange}
          className="p-2 mt-4 border border-gray-300 rounded w-full"
        >
          <option value="Regular">Regular</option>
          <option value="Premium">Premium</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded hover:bg-blue-700"
        >
          Update Member
        </button>
      </form>
    </div>
  );
};

export default UpdateMember;
