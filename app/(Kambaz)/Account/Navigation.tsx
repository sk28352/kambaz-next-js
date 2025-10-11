'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  const links = [
    { name: "Profile", href: "/Account/Profile" },
    { name: "Signin", href: "/Account/Signin" },
    { name: "Signup", href: "/Account/Signup" },
  ];

  return (
    <div id="wd-account-navigation" className="bg-light border-end vh-100 p-3" style={{ width: "220px" }}>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li key={link.href} className="nav-item mb-2">
            <Link
              href={link.href}
              className={`nav-link fw-semibold ${
                pathname === link.href ? "active text-white bg-primary rounded px-3 py-2" : "text-dark px-3 py-2"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
