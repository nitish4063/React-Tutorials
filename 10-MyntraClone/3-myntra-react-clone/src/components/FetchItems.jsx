import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "../store/itemsSlice";
import {
  markFetchDone,
  markFetchingFinished,
  markFetchingStarted,
} from "../store/fetchStatusSlice";

function FetchItems() {
  const { fetchDone, currentlyFetching } = useSelector(
    (store) => store.fetchStatus
  );

  console.log(fetchDone, currentlyFetching);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // console.log("Request to server for initial data");

    // dispatch(markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        res.json();
      })
      .then((items) => {
        // dispatch(markFetchDone());
        // dispatch(markFetchingFinished());
        dispatch(addInitialItems(items));
        console.log("items from server", items);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          //   console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", err);
        }
      });

    return () => {
      //   console.log("cleaning up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <div>
      fetch: {fetchDone}
      curr: {currentlyFetching}
    </div>
  );
}

export default FetchItems;
