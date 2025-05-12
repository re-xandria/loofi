import AdminDashboard from "../../components/dashboard/AdminDashboard";
import UserDashboard from "../../components/dashboard/UserDashboard";
import {useContext, useEffect} from "react";
import {UserContext} from "../auth/Store";
import * as settingsAPI from "../../services/settingsAPI";
import {useSearchParams} from "react-router-dom";

function AccountDashboard() {

    const [userInfo, setUserInfo] = useContext((UserContext));
    const [searchParams] = useSearchParams();
    const isChecked = searchParams.get("isChecked") === "true";

    switch (userInfo.role) {
        case "admin":
            return <AdminDashboard isChecked={isChecked}/>;
        default:
            return <UserDashboard isChecked={isChecked}/>;
    }
}

export default AccountDashboard;