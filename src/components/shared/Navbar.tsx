"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/login", label: "login" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mb-6 flex gap-6 bg-white shadow-md p-4 rounded-lg justify-around">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href
              ? "text-blue-600 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

