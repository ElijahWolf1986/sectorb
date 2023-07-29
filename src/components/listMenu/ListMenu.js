import React from 'react';
import styles from './ListMenu.module.css';
import { clearUrlPath } from '../../utils/Fuctions';

const ListMenu = (data) => {
  const tableData = data.props;
  const location = clearUrlPath(data.location);

  const handlePushNav = (evt) => {
    if (evt.target) {
      data.onChangeURL(evt.target.id);
    }
  };

  const handlePushForward = () => {
    if (location < tableData.length / 10) {
      data.onChangeURL(String(parseInt(location) + 1));
    }
  };

  const handlePushBack = () => {
    if (location > 1) {
      data.onChangeURL(String(parseInt(location) - 1));
    }
  };

  const ListMenuPages = (count) => {
    if (count % 10 === 0)
      return (
        <li
          key={count}
          onClick={handlePushNav}
          id={count / 10 + 1}
          className={styles.list_menu_li}
        >
          {' '}
          {count / 10 + 1}
        </li>
      );
  };

  return (
    <menu className={styles.list_menu}>
      <button className={styles.list_menu_button} onClick={handlePushBack}>
        Назад
      </button>
      <nav className={styles.list_menu_nav}>
        <ul className={styles.list_menu_ul}>
          {tableData.length === 0
            ? ListMenuPages(0)
            : tableData.map((item, index) => {
                return ListMenuPages(index);
              })}
        </ul>
      </nav>

      <button className={styles.list_menu_button} onClick={handlePushForward}>
        Вперед
      </button>
    </menu>
  );
};

export default ListMenu;
