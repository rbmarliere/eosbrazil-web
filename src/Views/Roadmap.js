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
                            <div className="timeline">
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

Commitments

Blog updates
---
We would like to keep the community regularly updated on various developments in the EOS and
block producer scene. This will be written in English and Portuguese.


Community dapp contributions and our stance on voter kickbacks
---
Great discussions were set since the start of the governance channel about kickbacks.
Following the majority of community sentiment, our stance is that rewarding voters directly
does not provide value to the community. For every token we distribute to voters it is one
less that could be used to contribute to more meaningful endeavours. So we will not be paying
dividends to voters. Instead we will pledge to leverage community projects, with an emphasis
on projects originating in South America, using our block producing rewards after covering
the costs of our operation. This way the demand for EOS increases organically and the value
of your tokens increase without creating a race among candidates to cut profit margins.


Earnings transparency report
---
We will provide a quarterly report of our expenses which show exactly how our money
is being used.

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Roadmap;
