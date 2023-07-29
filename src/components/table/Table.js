import React from 'react';
import styles from './Table.module.css';
import { clearUrlPath } from '../../utils/Fuctions';

const Table = (data) => {
  const tableData = data.props;

  const handleSortButton = (evt) => {
    if (evt.target) {
      data.onSortColumn(evt.target.id);
    }
  };

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
              <button
                id='id'
                className={styles.table_header_sortbutton}
                onClick={handleSortButton}
              />
            </div>
          </td>
          <td className={styles.table_header_cell}>
            <div className={styles.table_header_container}>
              <p>Заголовок</p>
              <button
                id='title'
                className={styles.table_header_sortbutton}
                onClick={handleSortButton}
              />
            </div>
          </td>
          <td className={styles.table_header_cell}>
            <div className={styles.table_header_container}>
              <p>Описание</p>
              <button
                id='body'
                className={styles.table_header_sortbutton}
                onClick={handleSortButton}
              />
            </div>
          </td>
        </tr>
        {tableData.length === 0 ? (
          <p>ничего не найдено...</p>
        ) : (
          tableData
            .map((item, id) => {
              return handleTableRow(item);
            })
            .slice(
              clearUrlPath(data.location) * 10 - 10,
              clearUrlPath(data.location) * 10
            )
        )}
      </table>
    </section>
  );
};

export default Table;
