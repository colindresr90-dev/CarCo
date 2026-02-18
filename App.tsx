import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { VehicleDetail } from './pages/VehicleDetail';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Locations, Heritage, Support } from './pages/MorePages';
import { Page, Language } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
    const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
    const [language, setLanguage] = useState<Language>('en');

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case Page.HOME:
                return <Home setCurrentPage={setCurrentPage} setSelectVehicle={setSelectedVehicleId} lang={language} />;
            case Page.FLEET:
                return <Fleet setCurrentPage={setCurrentPage} setSelectVehicle={setSelectedVehicleId} lang={language} />;
            case Page.VEHICLE_DETAIL:
                return <VehicleDetail setCurrentPage={setCurrentPage} selectedVehicleId={selectedVehicleId} setSelectVehicle={setSelectedVehicleId} lang={language} />;
            case Page.BOOKING:
                return <Booking setCurrentPage={setCurrentPage} selectedVehicleId={selectedVehicleId} lang={language} />;
            case Page.LOCATIONS:
                return <Locations lang={language} />;
            case Page.HERITAGE:
                return <Heritage lang={language} />;
            case Page.SUPPORT:
                return <Support lang={language} />;
            case Page.CONTACT:
                return <Contact lang={language} />;
            default:
                return <Home setCurrentPage={setCurrentPage} setSelectVehicle={setSelectedVehicleId} lang={language} />;
        }
    };

    return (
        <Layout currentPage={currentPage} setCurrentPage={setCurrentPage} lang={language} setLang={setLanguage}>
            {renderPage()}
        </Layout>
    );
};

export default App;