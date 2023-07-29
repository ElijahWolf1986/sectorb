import React from 'react';
import styles from './App.module.css';
import List from './list/List';
import Search from './search/Search';
import apiData from '../utils/data.json';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [tableData, setTableData] = React.useState([]);
  let location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    const searchData = tableData.filter(
      (a) => Object.values(a).toString().includes(keyword) === true
    );
    setTableData(searchData);
  };

  const handleEmptySearch = () => {
    setTableData(apiData);
  };

  const handleChangeUrl = (url) => {
    navigate(url);
  };

  const handleSortColumn = (type) => {
    if (type === 'id') {
      const sortArr = [...tableData].sort((a, b) => a.id - b.id);
      setTableData(sortArr);
    }
    if (type === 'title') {
      const sortArr = [...tableData].sort((a, b) =>
        a.title < b.title ? -1 : 1
      );
      setTableData(sortArr);
    }
    if (type === 'body') {
      const sortArr = [...tableData].sort((a, b) => (a.body < b.body ? -1 : 1));
      setTableData(sortArr);
    }
  };

  React.useEffect(() => {
    setTableData(apiData);
    handleChangeUrl('1');
  }, []);
  return (
    <div className={styles.App}>
      <Search onSearch={handleSearch} onEmptySearch={handleEmptySearch} />
      <List
        tableData={tableData}
        onSortColumn={handleSortColumn}
        location={location}
        onChangeURL={handleChangeUrl}
      />
    </div>
  );
}

export default App;
