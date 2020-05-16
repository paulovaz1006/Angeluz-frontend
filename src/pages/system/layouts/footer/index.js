import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer id="page-footer">
            <div className="content py-20 font-size-sm clearfix">
                <div className="float-right">
                    
                </div>
                <div className="float-left">
                    <Link className="font-w600" to="https://1.envato.market/95j" target="_blank"></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;