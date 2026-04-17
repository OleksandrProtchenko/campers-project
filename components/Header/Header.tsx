"use client";

import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isCatalog = pathname.startsWith("/catalog");

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/">
          <Image
            className={css.logo}
            src="/Logo.png"
            alt="Logo"
            width={136}
            height={16}
            loading="eager"
          />
        </Link>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link
                className={
                  isHome ? `${css.navLink} ${css.navLinkActive}` : css.navLink
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                className={
                  isCatalog
                    ? `${css.navLink} ${css.navLinkActive}`
                    : css.navLink
                }
                href="/catalog"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
