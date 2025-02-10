import UploadForm from "../components/UploadForm";
import SearchResults from "../components/SearchResults";

const Home = () => {
  return (
    <div>
      <h1>Пошук схожих звуків</h1>
      <UploadForm />
      <SearchResults />
    </div>
  );
};

export default Home;

