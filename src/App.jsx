import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Dashboard from './Components/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
