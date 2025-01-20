import Router from "./Router.jsx";
import NavBar from "../components/common/NavBar.jsx";

const AppLayout = () => {
    return (
        <div>
            <NavBar />
            <Router />
        </div>
    );
}

export default AppLayout;