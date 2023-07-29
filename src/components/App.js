import React from 'react';
import styles from './App.module.css';
import List from './list/List';
import Search from './search/Search';
import apiData from '../utils/data.json';
import {
  Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

function App() {
  //Стейт для хранения данных таблицы
  const [tableData, setTableData] = React.useState([]);
  let location = useLocation();
  // const history = useHistory();

  const handleSearch = (keyword) => {
    const searchData = tableData.filter(
      (a) => Object.values(a).toString().includes(keyword) === true
    );
    setTableData(searchData);
  };

  const handleEmptySearch = () => {
    setTableData(apiData);
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
    // history.push('/');
    console.log(location);
  }, []);
  return (
    <Router history={history}>
      <div className={styles.App}>
        <Search onSearch={handleSearch} onEmptySearch={handleEmptySearch} />
        <List tableData={tableData} onSortColumn={handleSortColumn} />
      </div>
    </Router>
  );
}

export default App;
