import React from 'react';
import styles from './Search.module.css';
import { handleValidationTextInputRequired } from '../../utils/ValidationForm';

const Search = (props) => {
  const [keyword, setKeyword] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('Поиск');

  const handleChangeKeyword = (evt) => {
    setKeyword(evt.target.value);
    setPlaceholder('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!keyword) {
      return props.onEmptySearch();
    }
    if (!handleValidationTextInputRequired(keyword)) {
      setKeyword('');
      return setPlaceholder('Слишком длинный запрос');
    }
    props.onSearch(keyword);
    setKeyword('');
  };

  return (
    <section className={styles.search}>
      <form
        name='search_bar'
        className={styles.search_form}
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.search_fieldset}>
          <input
            type='text'
            name='search'
            value={keyword || ''}
            onChange={handleChangeKeyword}
            required
            placeholder={placeholder}
            className={styles.search_input}
          />
        </fieldset>
        <button type='submit' className={styles.search_button} />
      </form>
    </section>
  );
};

export default Search;
