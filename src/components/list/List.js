import React from 'react';
import styles from './List.module.css';
import Table from '../table/Table';

const List = () => {
  return (
    <section className={styles.list}>
      <Table />
      {/* <menu>
        <nav></nav>
      </menu> */}
    </section>
  );
};

export default List;
