import React from 'react';
import styles from './Table.module.css';

const Table = (props) => {
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
        <tr>
          <td className={styles.table_cell}>hvduhjvdu</td>
          <td className={styles.table_cell}>hvduhjvdu</td>
          <td className={styles.table_cell}>hvduhjvdu</td>
        </tr>
        <tr>
          <td className={styles.table_cell}>hvduhjvdu</td>
          <td className={styles.table_cell}>hvduhjvdu</td>
          <td className={styles.table_cell}>hvduhjvdu</td>
        </tr>
      </table>
    </section>
  );
};

export default Table;
