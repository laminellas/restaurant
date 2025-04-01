import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white fixed top-0 left-0 flex flex-col p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-6">Restaurant Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link className="block px-4 py-2 hover:bg-blue-700 rounded" to="/">Dashboard</Link></li>
          <li><Link className="block px-4 py-2 hover:bg-blue-700 rounded" to="/tables">Tables</Link></li>
          <li><Link className="block px-4 py-2 hover:bg-blue-700 rounded" to="/menu">Menu</Link></li>
          <li><Link className="block px-4 py-2 hover:bg-blue-700 rounded" to="/reviews">Avis Clients</Link></li>
          <li><Link className="block px-4 py-2 hover:bg-blue-700 rounded" to="/analytics">Statistiques</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
