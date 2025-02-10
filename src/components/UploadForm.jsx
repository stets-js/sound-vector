import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { uploadSound } from "../features/soundSlice";
import styles from "../styles/UploadForm.module.scss";

const UploadForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.sounds);

  const onSubmit = (data) => {
    dispatch(uploadSound(data.file[0]));
  };

  return (
    <div className={styles.container}>
      <h2>Завантажити аудіо</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file", { required: true })} />
        <button type="submit" disabled={loading}>Завантажити</button>
      </form>
      {loading && <p>Завантаження...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default UploadForm;
