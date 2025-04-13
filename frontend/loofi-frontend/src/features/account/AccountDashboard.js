// display dashboard

import Navigation from "../../components/Navigation";
import BaseDashboard from "../../components/BaseDashboard";
import AdminDashboard from "../../components/AdminDashboard";
import UserDashboard from "../../components/UserDashboard";

function AccountDashboard() {

    switch ("user") {
        case "admin":
        return <><Navigation></Navigation><AdminDashboard /></>;
        default:
        return <><Navigation></Navigation><UserDashboard /></>;
    }
}

export default AccountDashboard;