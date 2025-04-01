import { useState } from "react";
import { Button } from "restaurant-dashboard/src/components/ui/button.jsx";
import { Input } from "restaurant-dashboard/src/components/ui/input.jsx";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function Settings() {
  const [tables, setTables] = useState(10);
  const [openingHours, setOpeningHours] = useState("09:00 - 22:00");

  const handleSave = async () => {
    try {
      await axios.post(`${API_URL}/settings`, { tables, openingHours }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Settings updated successfully");
    } catch (error) {
      alert("Failed to update settings");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Restaurant Settings</h1>
      <div className="mt-4">
        <label className="block mb-2">Number of Tables</label>
        <Input type="number" value={tables} onChange={(e) => setTables(e.target.value)} />
      </div>
      <div className="mt-4">
        <label className="block mb-2">Opening Hours</label>
        <Input type="text" value={openingHours} onChange={(e) => setOpeningHours(e.target.value)} />
      </div>
      <Button onClick={handleSave} className="mt-4">Save Settings</Button>
    </div>
  );
}
