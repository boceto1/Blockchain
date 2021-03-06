import React, { Component } from 'react';

import Blocks from './Blocks';
import logo from '../assets/logo.png'
class Main extends Component {
    state = {walletInfo: {address: 'fooxv6', balance: 9999}};

    componentDidMount(){
        fetch('http://localhost:3000/api/wallet-info')
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json }));
    }

    render(){
        const { address, balance } = this.state.walletInfo;

        return (
            <div className='Main'>
                <img className='logo' src={logo}/>
                <br />
                <div>Welcome to the blockchain...</div>
                <br />
                <div className='WalletInfo'>
                <div>Address: {address}</div>
                <div>Balance: {balance}</div>
                </div>
                <br />
                <Blocks />
            </div>
        )
    }
}

export default Main;