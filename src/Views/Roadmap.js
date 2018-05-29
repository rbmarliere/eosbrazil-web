import React, { Component } from 'react';

const Fragment = React.Fragment;

class Roadmap extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid mt-10">
                    <div className="row mt-3 mb-5">
                        <div className="col-xs-10 col-md-8 offset-md-2 justify-content-center">
                            <h2 className="text-center">EOS Brazil Roadmap for 2018</h2>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-xs-12 col-md-10 offset-md-1 justify-content-center">
                            <div className="timeline text-justify">
                                <div className="card card-timeline left">
                                    <div className="card-header">
                                        <h3 className="card-title">June</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Elected</h5>
                                        <p className="card-text">EOS Brazil elected as main or standby block producer.</p>
                                    </div>
                                </div>

                                <div className="card card-timeline right">
                                    <div className="card-header">
                                        <h3 className="card-title">July</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Team Expansion</h5>
                                        <p className="card-text">Onboarding staff for assistance in hardening security and creating in-house dapps.</p>
                                    </div>
                                </div>

                                <div className="card card-timeline left">
                                    <div className="card-header">
                                        <h3 className="card-title">August</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Community Dapp Incubator</h5>
                                        <p className="card-text">Launch incubator fund to promote EOS development in South America.</p>
                                    </div>
                                </div>

                                <div className="card card-timeline right">
                                    <div className="card-header">
                                        <h3 className="card-title">September</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Security Audit</h5>
                                        <p className="card-text">Conduct third-party security audit to analyze vulnerabilities in our system.</p>
                                    </div>
                                </div>

                                <div className="card card-timeline left">
                                    <div className="card-header">
                                        <h3 className="card-title">October</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Earning Transparency Report</h5>
                                        <p className="card-text">First quarterly earnings report released.</p>
                                    </div>
                                </div>

                                <div className="card card-timeline right">
                                    <div className="card-header">
                                        <h3 className="card-title">November</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Storage Expansion</h5>
                                        <p className="card-text">Implementations of IPFS nodes.</p>
                                    </div>
                                </div>

                                <div className="card card-timeline left">
                                    <div className="card-header">
                                        <h3 className="card-title">December</h3>
                                    </div>
                                    <div className="content">
                                        <h5 className="card-title">Server Expansion</h5>
                                        <p className="card-text">Begin moving off AWS cloud infrastructure towards our own physical servers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Roadmap;