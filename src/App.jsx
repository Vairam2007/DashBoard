import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Dashboard from './Components/Dashboard';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
