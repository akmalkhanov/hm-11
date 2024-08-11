import { Link, NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LineChart from "./pages/LineChart";
import PieChart from "./pages/Product";
import Product from "./pages/Product";
import logo from "./assets/logo.webp";


const App = () => {

  return (
    <div>
      <Router>
        <nav className="h-24 bg-blue-500 flex items-center justify-between px-4 sm:px-8 lg:px-16 text-lg font-semibold text-white">
          <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-16">
            <Link to="/">
              <img
                width={80}
                src={logo}
                alt="Logo"
                className="sm:h-10 lg:h-12"
              />
            </Link>
            <div className="flex space-x-4 sm:space-x-8 lg:space-x-12">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-gray-200 ${
                    isActive ? "border-b-2 border-white" : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/linechart"
                className={({ isActive }) =>
                  `hover:text-gray-200 ${
                    isActive ? "border-b-2 border-white" : "text-white"
                  }`
                }
              >
                Linechart
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `hover:text-gray-200 ${
                    isActive ? "border-b-2 border-white" : "text-white"
                  }`
                }
              >
                Product
              </NavLink>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linechart" element={<LineChart />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
