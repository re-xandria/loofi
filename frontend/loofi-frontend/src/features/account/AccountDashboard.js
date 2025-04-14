// display dashboard

import Navigation from "../../components/Navigation";
import AdminDashboard from "../../components/dashboard/AdminDashboard";
import UserDashboard from "../../components/dashboard/UserDashboard";

function AccountDashboard() {

    // access findByEmail() from spring to get user_role from database

    switch ("admin") {
        case "admin":
            return <AdminDashboard />;
        default:
            return <UserDashboard />;
    }
}

export default AccountDashboard;