import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { 
    FaWallet, 
    FaShoppingBag, 
    FaEnvelope, 
    FaUser, 
    FaSyncAlt,
    FaWrench,
    FaBriefcase
} from 'react-icons/fa';

import { Link } from 'react-router-dom'
import './style.css';

const Dashboard = () => {
    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <main id="main-container">
                <div className="container p-0">
                    <div className="row" data-toggle="appear">
                        <div className="col-6 col-xl-3 ">
                            <Link className="block block-link-shadow text-right shadow-sm" to="#">
                                <div className="block-content block-content-full clearfix">
                                    <div className="float-left mt-10 d-none d-sm-block">
                                        <FaShoppingBag className="si si-bag fa-3x text-body-bg-dark" />
                                    </div>
                                    <div className="font-size-h3 font-w600" data-toggle="countTo" data-speed="1000" data-to="1500">0</div>
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Sales</div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-xl-3">
                            <Link className="block block-link-shadow text-right shadow-sm" to="#">
                                <div className="block-content block-content-full clearfix">
                                    <div className="float-left mt-10 d-none d-sm-block">
                                        <FaWallet className="si si-wallet fa-3x text-body-bg-dark" />
                                    </div>
                                    <div className="font-size-h3 font-w600">$<span data-toggle="countTo" data-speed="1000" data-to="780">0</span></div>
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Earnings</div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-xl-3">
                            <Link className="block block-link-shadow text-right shadow-sm" to="#">
                                <div className="block-content block-content-full clearfix">
                                    <div className="float-left mt-10 d-none d-sm-block">
                                        <FaEnvelope className="fa-3x text-body-bg-dark" />
                                    </div>
                                    <div className="font-size-h3 font-w600" data-toggle="countTo" data-speed="1000" data-to="15">0</div>
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Messages</div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-xl-3">
                            <Link className="block block-link-shadow text-right shadow-sm" to="#">
                                <div className="block-content block-content-full clearfix">
                                    <div className="float-left mt-10 d-none d-sm-block">
                                        <FaUser className="fa-3x text-body-bg-dark" />
                                    </div>
                                    <div className="font-size-h3 font-w600" data-toggle="countTo" data-speed="1000" data-to="4252">0</div>
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Online</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row" data-toggle="appear">
                        <div className="col-md-6">
                            <div className="block shadow-sm">
                                <div className="block-header">
                                    <h3 className="block-title">
                                        Sales <small>This week</small>
                                    </h3>
                                    <div className="block-options">
                                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                            <FaSyncAlt />
                                        </button>
                                        <button type="button" className="btn-block-option">
                                            <FaWrench />
                                        </button>
                                    </div>
                                </div>
                                <div className="block-content block-content-full">
                                    <div className="pull-all">
                                        <canvas className="js-chartjs-dashboard-lines"></canvas>
                                    </div>
                                </div>
                                <div className="block-content">
                                    <div className="row items-push">
                                        <div className="col-6 col-sm-4 text-center text-sm-left">
                                            <div className="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                            <div className="font-size-h4 font-w600">720</div>
                                            <div className="font-w600 text-success">
                                                <i className="fa fa-caret-up"></i> +16%
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4 text-center text-sm-left">
                                            <div className="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                            <div className="font-size-h4 font-w600">160</div>
                                            <div className="font-w600 text-danger">
                                                <i className="fa fa-caret-down"></i> -3%
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 text-center text-sm-left">
                                            <div className="font-size-sm font-w600 text-uppercase text-muted">Average</div>
                                            <div className="font-size-h4 font-w600">24.3</div>
                                            <div className="font-w600 text-success">
                                                <i className="fa fa-caret-up"></i> +9%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="block shadow-sm">
                                <div className="block-header">
                                    <h3 className="block-title">
                                        Earnings <small>This week</small>
                                    </h3>
                                    <div className="block-options">
                                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                            <FaSyncAlt />
                                        </button>
                                        <button type="button" className="btn-block-option">
                                            <FaWrench />
                                        </button>
                                    </div>
                                </div>
                                <div className="block-content block-content-full">
                                    <div className="pull-all">
                                        <canvas className="js-chartjs-dashboard-lines2"></canvas>
                                    </div>
                                </div>
                                <div className="block-content bg-white">
                                    <div className="row items-push">
                                        <div className="col-6 col-sm-4 text-center text-sm-left">
                                            <div className="font-size-sm font-w600 text-uppercase text-muted">This Month</div>
                                            <div className="font-size-h4 font-w600">$ 6,540</div>
                                            <div className="font-w600 text-success">
                                                <i className="fa fa-caret-up"></i> +4%
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4 text-center text-sm-left">
                                            <div className="font-size-sm font-w600 text-uppercase text-muted">This Week</div>
                                            <div className="font-size-h4 font-w600">$ 1,525</div>
                                            <div className="font-w600 text-danger">
                                                <i className="fa fa-caret-down"></i> -7%
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 text-center text-sm-left">
                                            <div className="font-size-sm font-w600 text-uppercase text-muted">Balance</div>
                                            <div className="font-size-h4 font-w600">$ 9,352</div>
                                            <div className="font-w600 text-success">
                                                <i className="fa fa-caret-up"></i> +35%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-toggle="appear">
                        <div className="col-md-6">
                            <Link className="block block-link-shadow overflow-hidden shadow-sm" to="#">
                                <div className="block-content block-content-full">
                                    <FaBriefcase className="fa-2x text-body-bg-dark" />
                                    <div className="row py-20">
                                        <div className="col-6 text-right border-r">
                                            <div  data-toggle="appear">
                                                <div className="font-size-h3 font-w600">16</div>
                                                <div className="font-size-sm font-w600 text-uppercase text-muted">Projects</div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div  data-toggle="appear">
                                                <div className="font-size-h3 font-w600">2</div>
                                                <div className="font-size-sm font-w600 text-uppercase text-muted">Active</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link className="block block-link-shadow overflow-hidden shadow-sm" to="#">
                                <div className="block-content block-content-full">
                                    <div className="text-right">
                                        <FaUser className="fa-2x text-body-bg-dark" />
                                    </div>
                                    <div className="row py-20">
                                        <div className="col-6 text-right border-r">
                                            <div  data-toggle="appear">
                                                <div className="font-size-h3 font-w600 text-info">63250</div>
                                                <div className="font-size-sm font-w600 text-uppercase text-muted">Accounts</div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div  data-toggle="appear" >
                                                <div className="font-size-h3 font-w600 text-success">97%</div>
                                                <div className="font-size-sm font-w600 text-uppercase text-muted">Active</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
           <Footer />
        </div>
    )
}

export default Dashboard;