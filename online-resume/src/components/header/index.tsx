import React from "react";
import styles from "./styles.module.scss";

const Header = (props: {
  brand: { name: string; to: string };
  links: Array<{ name: string; to: any }>;
}) => {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <a className={styles.nav} key={link.name} href={link.to}>
        {link.name}
      </a>
    ));
  return (
    <div className={styles.header}>
      <a className={styles.nav} href={brand.to}>
        {brand.name}
      </a>
      <NavLinks />
    </div>
  );
};

export default Header;
