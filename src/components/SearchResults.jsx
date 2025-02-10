import { useSelector } from "react-redux";
import styles from "../styles/SearchResults.module.scss";

const SearchResults = () => {
  const { files } = useSelector((state) => state.sounds);

  return (
    <div className={styles.container}>
      <h2>Результати пошуку</h2>
      <ul>
        {files.length > 0 ? (
          files.map((file, index) => (
            <li key={index}>
              <a href={file} target="_blank" rel="noopener noreferrer">{file}</a>
            </li>
          ))
        ) : (
          <p>Нічого не знайдено</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
