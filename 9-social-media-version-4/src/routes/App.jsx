import { useState } from "react";
import "./App.css";

import CreatePost from "../components/CreatePost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Post from "../components/Post";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";

import PostListProvider from "../STORE/post-list-store";

import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />

          <Outlet />

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
