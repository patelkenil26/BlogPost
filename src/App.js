import "./App.css";
import FetchPost from "./components/FetchPost";
import { useEffect, useState } from "react";
import blogData from "./blog";
import AutherPage from "./components/AutherPage.jsx";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search.jsx";

function App() {
  const [fetchBlog, setFetchBlog] = useState();

  let fetchBlogHandler = async () => {
    try {
      let response = await fetch("./blog");
      const data = await response.json();
      console.log(data);
      setFetchBlog(data);
    } catch (error) {
      console.error("error occured when data fetching", error);
    }
  };

  useEffect(() => {
    fetchBlogHandler();
  }, []);

  return (
    <div className="App">
      <FetchPost data={fetchBlog} />
      <Search dataSearch={fetchBlog} />

      <Routes>
        {/* <Route path="/auther/:id" >
          <AutherPage data={fetchBlog.auther} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
