import { Home } from "./Pages/Home/Home";
import Pages from "./Pages/Pages";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div>
        <Navbar/>
        <Pages/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
