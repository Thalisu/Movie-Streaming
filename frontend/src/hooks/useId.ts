import { useParams } from "react-router-dom";

const useId = () => {
  const { id } = useParams();
  return id;
};

export default useId;
