import Elipse from "../components/Elipse/Elipse";
import { LoadingContext } from "../context/Contexte";
import { useEffect, useContext } from "react";

const Loading = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <section className="loading">
      <Elipse />
      <h1>Welcome to our Site</h1>
    </section>
  );
};

export default Loading;
