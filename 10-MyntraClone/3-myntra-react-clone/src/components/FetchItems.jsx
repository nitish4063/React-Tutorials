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

    dispatch(markFetchingStarted());

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((items) => {
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
        dispatch(addInitialItems(items.items));
        // console.log("items from server", items.items);
      });
  }, [fetchDone, currentlyFetching]);

  return (
    <div>
      fetch: {fetchDone}
      curr: {currentlyFetching}
    </div>
  );
}

export default FetchItems;
