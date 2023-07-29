import React from 'react';
import styles from './Table.module.css';

const Table = (data) => {
  const tableData = data.props;

  const handleTableRow = (item) => {
    return (
      <tr>
        <td className={styles.table_cell}>{item.id}</td>
        <td className={styles.table_cell}>{item.title}</td>
        <td className={styles.table_cell}>{item.body}</td>
      </tr>
    );
  };

  return (
    <section className={styles.table_container}>
      <table className={styles.table}>
        <tr className={styles.table_header}>
          <td className={styles.table_header_cell}>
            <div className={styles.table_header_container}>
              <p>ID</p>
              <button className={styles.table_header_sortbutton} />
            </div>
          </td>
          <td className={styles.table_header_cell}>
            <div className={styles.table_header_container}>
              <p>Заголовок</p>
              <button className={styles.table_header_sortbutton} />
            </div>
          </td>
          <td className={styles.table_header_cell}>
            <div className={styles.table_header_container}>
              <p>Описание</p>
              <button className={styles.table_header_sortbutton} />
            </div>
          </td>
        </tr>
        {tableData.length === 0 ? (
          <p>data error</p>
        ) : (
          tableData
            .map((item, id) => {
              return handleTableRow(item);
            })
            .slice(0, 10)
        )}
      </table>
    </section>
  );
};

export default Table;
