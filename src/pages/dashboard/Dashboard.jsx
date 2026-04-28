// pages/dashboard/DashboardPage.jsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/Layout";

import Overview from "./Overview";
import Trading from "./Service";
import Analytics from "./Analytics";
import Settings from "./Settings";
import User from "./User";
import Service from "./Service";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<Overview />} />
                <Route path="user" element={<User/>} />
                <Route path="service" element={<Service/>} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </DashboardLayout>
    );
}