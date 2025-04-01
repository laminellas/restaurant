import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/ui/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TablesConfig from "./pages/TablesConfig.jsx";
import MenuManagement from "./pages/MenuManagement.jsx";
import Reviews from "./pages/Reviews.jsx";
import Analytics from "./pages/Analytics.jsx";
import './index.css';
const App = () => {
  return (
    
      <div 
        className="min-h-screen bg-cover bg-center flex"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?restaurant,dining')" }} // Change to your preferred image
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-4xl font-bold text-center text-blue-600">Restaurant Dashboard</h1>

  <div className="grid grid-cols-2 gap-4 mt-6">
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Admin Panel</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-500 hover:underline">Dashboard</a></li>
        <li><a href="#" className="text-yellow-500 hover:underline">Tables</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Menu</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Avis Clients</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Statistiques</a></li>
      </ul>
    </div>
  </div>


          {/* Page Content */}
          <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<TablesConfig />} />
              <Route path="/menu" element={<MenuManagement />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </div>
    
  );
};

export default App;
