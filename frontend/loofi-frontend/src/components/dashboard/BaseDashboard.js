
import Navigation from "../../components/Navigation";

function BaseDashboard({ title, children }) {
    return(
        <>
            <Navigation></Navigation>
            {/* Toggling search switch in account dashboard causes "setIsChecked" error, props not being passed to dashboard page/components */}
            <div>{children}</div>
            <footer className="fixed-bottom my-5 mx-5">You are viewing this page in {title} mode.</footer>
        </>
    )
}

export default BaseDashboard;