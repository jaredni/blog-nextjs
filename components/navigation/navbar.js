import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";
import styles from './nav.module.css';
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

const MENU_LIST = [
  { text: "Logs", href: "/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <div className={styles.nav}>
        <Link href={"/"}>
          <Image
            priority
            src="/images/bear.png"
            height={70}
            width={75}
            alt=""
          />
        </Link>
        <div className={styles.nav__menuList}>
          <Link href="/" className={styles.nav__link}>Logs</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;