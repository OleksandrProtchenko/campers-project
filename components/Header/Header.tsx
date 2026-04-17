"use client";

import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
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
              <Link className={css.navLink} href="/">
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link className={css.navLink} href="/catalog">
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
