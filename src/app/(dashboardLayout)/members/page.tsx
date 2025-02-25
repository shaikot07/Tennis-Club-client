/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Members - Tennis Club",
};

export default async function Members() {
  const res = await fetch("https://next-level-tennis-club.vercel.app/api/members", { cache: "no-store" }); // SSR
  const members = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Club Members</h1>
      <ul className="mt-4 space-y-2">
        {members.map((member: any) => (
          <li key={member._id} className="p-4 bg-gray-50 rounded-lg shadow-md">
            <Link href={`/members/${member._id}`} className="text-blue-500 hover:underline">
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}