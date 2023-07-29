import React from 'react';
import styles from './App.module.css';
import List from './list/List';
import Search from './search/Search';
import apiData from '../utils/data.json';

function App() {
  //Стейт для хранения данных таблицы
  const [tableData, setTableData] = React.useState([]);

  const handleSearch = (keyword) => {
    const searchData = tableData.filter(
      (a) => Object.values(a).toString().includes(keyword) === true
    );
    setTableData(searchData);
  };

  const handleEmptySearch = () => {
    setTableData(apiData);
  };

  const handleSortColumn = (arr) => {
    // const sortArr = arr.sort();
    // setTableData(sortArr);
  };

  React.useEffect(() => {
    setTableData(apiData);
  }, []);
  return (
    <div className={styles.App}>
      <Search onSearch={handleSearch} onEmptySearch={handleEmptySearch} />
      <List tableData={tableData} onSortColumn={handleSortColumn} />
    </div>
  );
}

export default App;
