import Loading from 'components/loading';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
const MainComponent = React.lazy(() => import('../../containers/main-component'));

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    & > div {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`;

const AppContent = ({ setDisplaySidebar}: { setDisplaySidebar: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
    <Content onClick={() => setDisplaySidebar(false)} role='button'>
        <Suspense fallback={<div className="children-line-loader"><Loading /></div>}>
            <Routes>
                <Route key='slash' path='/' element={<MainComponent />} />
                <Route key='dashboard' path='/dashboard' element={<MainComponent />} />
            </Routes>
        </Suspense>
    </Content>
    )
};

export default AppContent;