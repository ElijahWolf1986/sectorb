import React from 'react';
import styles from './List.module.css';
import Table from '../table/Table';
import data from '../../utils/data.json';

const List = () => {
  return (
    <section className={styles.list}>
      <Table props={data} />
      {/* <Table /> */}

      {/* <menu>
        <nav></nav>
      </menu> */}
    </section>
  );
};

export default List;
