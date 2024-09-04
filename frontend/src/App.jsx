import { Outlet } from "react-router";
import Navivgation from "./components/Navivgation";
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <>
      {/* <Navivgation /> */}
      <ToastContainer/>
      <main className="py-2">
        <Outlet />
      </main>
    </>
  );
}

export default App;
