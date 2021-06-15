import React from 'react';
import Navbar from '../components/Navbar.jsx';
import QueriesPanel from '../components/QueriesPanel.jsx';
import QueriesMainArea from './QueriesMainArea.jsx';

// eventually add a graphs/visualization component

const QueryPage = () => {

   
    return (
        <div id="queryPage">
            <Navbar />
            <QueriesPanel />
            <QueriesMainArea />
         </div>
    );
}


export default QueryPage;