import React from 'react';
import styles from './ListMenu.module.css';

const ListMenu = (data) => {
  const tableData = data.props;

  const ListMenuPages = (count) => {
    if (count % 10 === 0)
      return <li className={styles.list_menu_li}> {count / 10 + 1}</li>;
  };

  return (
    <menu className={styles.list_menu}>
      <button className={styles.list_menu_button}>Назад</button>
      <nav className={styles.list_menu_nav}>
        <ul className={styles.list_menu_ul}>
          {tableData.length === 0
            ? ListMenuPages(0)
            : tableData.map((item, index) => {
                return ListMenuPages(index);
              })}
        </ul>
      </nav>

      <button className={styles.list_menu_button}>Вперед</button>
    </menu>
  );
};

export default ListMenu;
