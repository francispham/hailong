import React from 'react';
import Link from 'next/link';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header: React.FC<> = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>HaiLong</a>
          </Link>
        </p>
      </Container>
    </header>
  )
}

export default Header;