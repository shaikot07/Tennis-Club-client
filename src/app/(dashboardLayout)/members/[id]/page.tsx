/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Link from "next/link"; 

export const metadata: Metadata = {
  title: "Member Details - Tennis Club",
};

const MemberDetails = async ({ params }: any) => {
  const memberParam = await params;
  const res = await fetch(`https://next-level-tennis-club.vercel.app/api/members/${memberParam.id}`, { cache: "no-store" }); // SSR
  const member = await res.json();

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">{member.name}</h1>
      <p className="text-gray-700 mt-2">Email: {member.email}</p>
      <p className="text-gray-700">Phone: {member.phone}</p>
      <p className="text-gray-700">Membership Type: {member.membershipType}</p>

      {/* Buttons to redirect to update and delete pages */}
      <div className="mt-4 flex gap-4">
        <Link href={`/members/update/${member._id}`}>
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Update Member</button>
        </Link>
        <Link href={`/members/delete/${member._id}`}>
          <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">Delete Member</button>
        </Link>
      </div>
    </div>
  );
};

export default MemberDetails;
