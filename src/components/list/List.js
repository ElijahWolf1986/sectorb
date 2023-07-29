import React from 'react';
import styles from './List.module.css';
import Table from '../table/Table';
import ListMenu from '../listMenu/ListMenu';

const List = (props) => {
  const { tableData, onSortColumn, location, onChangeURL } = props;
  return (
    <section className={styles.list}>
      <Table
        props={tableData}
        onSortColumn={onSortColumn}
        location={location}
      />
      <ListMenu
        props={tableData}
        location={location}
        onChangeURL={onChangeURL}
      />
    </section>
  );
};

export default List;
