// pages/dashboard/DashboardPage.jsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/Layout";

import Overview from "./Overview";
import Trading from "./Service";
import Analytics from "./Analytics";
import Settings from "./Settings";
import User from "./User";
import Marketting from "./Marketting";
import OrderLive from "./OrderLive";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<Overview />} />
                <Route path="marketting" element={<Marketting/>} />
                <Route path="orders" element={<OrderLive/>} />
                {/* <Route path="dashboard/user" element={<User/>} /> */}
            </Routes>
        </DashboardLayout>
    );
}