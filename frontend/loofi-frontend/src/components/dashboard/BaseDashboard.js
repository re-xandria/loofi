import Navigation from "../../components/Navigation";

function BaseDashboard({title, isChecked, children}) {
    return (
        <>
            <Navigation isChecked={isChecked}></Navigation>
            {/* Toggling search switch in account dashboard causes "setIsChecked" error, props not being passed to dashboard page/components */}
            <div>{children}</div>
            <footer className="my-5 mx-5 d-flex align-content-center">
                <p>
                    You are viewing this page in {title} mode.
                </p>
            </footer>
        </>
    )
}

export default BaseDashboard;