import Navigation from "../../components/Navigation";
import AdminDashboard from "../../components/dashboard/AdminDashboard";
import UserDashboard from "../../components/dashboard/UserDashboard";
import {useContext, useEffect} from "react";
import {UserContext} from "../auth/Store";
import * as settingsAPI from "../../services/settingsAPI";

function AccountDashboard() {

    const [userInfo, setUserInfo] = useContext((UserContext));

    useEffect( () => {
        const timer = setTimeout(() => {
            setRole();
        }, 100);
        return () => clearTimeout(timer);
    })

    const setRole = async () => {
        try {
            const res = await settingsAPI.isAdmin(userInfo.email)
            if (res.data) {
                localStorage.setItem("role", "admin")
                setUserInfo({email: userInfo.email, token: userInfo.token, role: "admin"})
            }
        } catch (error) {
            console.log(error)
        }
    }

    switch (userInfo.role) {
        case "admin":
            return <AdminDashboard />;
        default:
            return <UserDashboard />;
    }
}

export default AccountDashboard;