import { useEffect , useCallback } from "react";
import "./App.scss";
import Filter from "components/Filter";
import NavBar from "components/Navbar";
import SideBar from "components/Sidebar";
import requestResult from "shares/agent";
import { useLocation } from "react-router-dom";
import { startApp } from "Redux/action";
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
const callBBack = useCallback(()=>{
  dispatch<any>(requestResult(startApp, location.search.split("=")[1]));
},[])
  useEffect(() => {
    callBBack()
  }, [callBBack]);

  return (
    <div className="App">
      <NavBar />
      <Filter />
      <SideBar />
    </div>
  );
}

export default App;
