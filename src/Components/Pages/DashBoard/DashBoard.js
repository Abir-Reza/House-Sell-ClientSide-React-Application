import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import DashBoardHeader from './DashBoardHeader';

const DashBoard = () => {
   const {admin} = useAuth();

    return (
        <div id='dashboard'>
            <DashBoardHeader></DashBoardHeader>
         
    
            

        </div>
    );
};

export default DashBoard;