import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

const Private: React.FC<{ Item: React.ElementType }> = ({ Item }) => {
    const signed = false;

    return signed ? <Item /> : <LoginPage />;
}

const RoutesApp = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/dashboard' element={<Private Item={DashboardPage} />} />
                </Routes>
            </Fragment>
        </Router>
    );
}

export default RoutesApp;