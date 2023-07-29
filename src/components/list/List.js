import React from 'react';
import styles from './List.module.css';
import Table from '../table/Table';
import ListMenu from '../listMenu/ListMenu';
import data from '../../utils/data.json';

const List = () => {
  return (
    <section className={styles.list}>
      <Table props={data} />
      <ListMenu props={data} />
    </section>
  );
};

export default List;
