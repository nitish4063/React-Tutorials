import React from "react";
import HomeItem from "../components/HomeItem.jsx";
import { useSelector } from "react-redux";

function Home() {
  const allItems = useSelector((store) => store.items);
  console.log("HOME PAGE items from store", allItems);

  return (
    <main>
      <div className="items-container">
        {allItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
