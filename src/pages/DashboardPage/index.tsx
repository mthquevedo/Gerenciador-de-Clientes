import React from 'react';
import { Dashboard } from './style';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HeaderDash';

function DashboardPage() {

    return (
        <Dashboard>
            <Header />
        </Dashboard>
    );
}

export default DashboardPage;
