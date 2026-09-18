"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "home", text: "Home" },
  { href: "/event", icon: "memo", text: "이벤트" },
  { href: "/deposit", icon: "excharge", text: "충전하기" },
  { href: "/withdraw", icon: "exchange", text: "환전하기" },
  { href: "/messages", icon: "note", text: "쪽지", badge: true },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="navigation">
      <ul>
        {navItems.map((item) => (
          <li
            key={item.href}
            className={`list ${pathname === item.href || (item.href === "/messages" && (pathname === "/note" || pathname === "/notice")) ? "active" : ""} ${item.badge ? "nav-bottom-mu" : ""}`}
          >
            <Link href={item.href}>
              <span className={`icon ${item.icon}`}></span>
              <span className="text">{item.text}</span>
            </Link>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
