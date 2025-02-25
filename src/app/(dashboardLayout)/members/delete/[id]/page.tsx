/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from 'react';  // Importing `use` from React

const DeleteMember = ({ params }: any) => {
  // Unwrapping the params using `React.use()`
  const { id }: any = use(params);
  const [member, setMember] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMember = async () => {
      const res = await fetch(`https://next-level-tennis-club.vercel.app/api/members/${id}`);
      const data = await res.json();
      setMember(data);
    };
    fetchMember();
  }, [id]);

  const handleDelete = async () => {
    const res = await fetch(`https://next-level-tennis-club.vercel.app/api/members/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("Member deleted successfully!");
      router.push("/members"); // Redirect to members list after delete
    } else {
      alert("Failed to delete member.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Delete Member</h1>
      {member ? (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <p className="text-lg font-semibold">Are you sure you want to delete the following member?</p>
          <p className="mt-2">Name: {member.name}</p>
          <p>Email: {member.email}</p>
          <p>Phone: {member.phone}</p>
          <p>Membership Type: {member.membershipType}</p>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white p-2 mt-4 rounded hover:bg-red-700"
          >
            Delete Member
          </button>
        </div>
      ) : (
        <p>Loading member details...</p>
      )}
    </div>
  );
};

export default DeleteMember;
