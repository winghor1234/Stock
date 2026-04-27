// pages/dashboard/DashboardPage.jsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/Layout";

import Overview from "./Overview";
import Portfolio from "./Portfolio";
import Trading from "./Trading";
import Analytics from "./Analytics";
import Settings from "./Settings";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<Overview />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="trading" element={<Trading />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </DashboardLayout>
    );
}