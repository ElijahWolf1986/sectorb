import React from 'react';
import styles from './List.module.css';
import Table from '../table/Table';
import ListMenu from '../listMenu/ListMenu';
// import data from '../../utils/data.json';

const List = (props) => {
  const { tableData, onSortColumn } = props;
  return (
    <section className={styles.list}>
      <Table props={tableData} onSortColumn={onSortColumn} />
      <ListMenu props={tableData} />
    </section>
  );
};

export default List;
