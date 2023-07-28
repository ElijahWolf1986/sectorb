import styles from './App.module.css';
import List from './list/List';
import Search from './search/Search';

function App() {
  return (
    <div className={styles.App}>
      <Search />
      <List />
    </div>
  );
}

export default App;
