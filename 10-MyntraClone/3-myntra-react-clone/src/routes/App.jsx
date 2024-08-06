import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingMessage from "../components/LoadingMessage";

function App() {
  const { fetchDone, currentlyFetching } = useSelector(
    (store) => store.fetchStatus
  );

  return (
    <>
      <Header />
      <FetchItems />
      {currentlyFetching ? <LoadingMessage /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
