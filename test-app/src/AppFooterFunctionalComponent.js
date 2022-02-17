import React, { Component, Fragment } from 'react';
import './AppFooter.css'
export default function AppFooterFunctionalComponent(props) {
    // with a functional component you can pass props defined at index.jsw
    const currentYear = new Date().getFullYear();
    return (
        <Fragment>
        <hr />
        <p className='footer'>Copyright &copy; 2020 - { currentYear } Acme Ltd. {props.myProperty}</p>
        </Fragment>
    );
}