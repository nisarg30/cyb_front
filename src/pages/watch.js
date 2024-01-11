import React from "react";

import Header from "../components/header/header";
import Watchlist from "../components/watchlist/watchlist";
import Watchcontrol from "../components/watchcontrol/watchcontrol";

const Watchpage = ({ onSwitchMode }) => {
    return (
        <div className='Watchpage' style={{height : '100%', width : '100%'}}>
            <Header />
            <Watchcontrol />
            <Watchlist />
        </div>
    );
};

export default Watchpage;