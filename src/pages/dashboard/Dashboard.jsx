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
import Customer from "./Customer";
import Transaction from "./Transaction";
import Portfolio from "./Portfolio";
import Commission from "./Commission";
import Report from "./Report";
import VerifyKYC from "./VerifyKYC";
import Notification from "./Notification";
import Audit from "./Audit";
import SystemHealth from "./SystemHealth";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Routes>
                <Route index element={<Overview />} />
                <Route path="marketting" element={<Marketting/>} />
                <Route path="orders" element={<OrderLive/>} />
                <Route path="customers" element={<Customer/>} />
                <Route path="transactions" element={<Transaction/>} />
                <Route path="portfolio" element={<Portfolio/>} />
                <Route path="commission" element={<Commission/>} />
                <Route path="report" element={<Report/>} />
                <Route path="verify-kyc" element={<VerifyKYC/>} />
                <Route path="notifications" element={<Notification/>} />
                <Route path="audit" element={<Audit/>} />
                <Route path="system-health" element={<SystemHealth/>} />
                <Route path="settings" element={<Settings/>} />
            </Routes>
        </DashboardLayout>
    );
}