import React, { Component } from 'react';

const Fragment = React.Fragment;
class Specs extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row mt-10 justify-content-center mb-5">
                        <div className="col-xs-10 col-md-8 text-center">
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5 className="card-title mt-2 mb-2">Main producer node and full nodes</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-black-50">r4.4 x large running Ubuntu</li>
                                        <li className="list-group-item text-black-50">16 cores CPU</li>
                                        <li className="list-group-item text-black-50">122 GB RAM</li>
                                        <li className="list-group-item text-black-50">256 GB storage</li>
                                        <li className="list-group-item text-black-50">1Gb bandwidth</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5 className="card-title mt-4 mb-4">Proxy servers</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-black-50">t2.large burstable performance instances</li>
                                    </ul>
                                    <p className="card-text mt-4 mb-4">We have already made a reasonable investment in a few bare metal servers in order to move off of AWS into a data center when possible and have more direct control over scaling</p>
                                    <h5 className="card-subtitle mt-4 mb-4">Ubuntu Linux</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-black-50">Lenovo Thinkpad P71 x2</li>
                                        <li className="list-group-item text-black-50">i7 7820HQ</li>
                                        <li className="list-group-item text-black-50">64GB RAM and 32GB RAM</li>
                                    </ul>
                                    <h5 className="card-subtitle mt-4 mb-4">iMac Pro</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-black-50">8 core Xeon W</li>
                                        <li className="list-group-item text-black-50">32GB RAM</li>
                                    </ul>
                                    <p className="card-text mt-4 mb-4">
                                        There are currently some issues on the Mac build of EOS software which preclude us from using
                                        MacOS, but we’d like to experiment with it in the future if possible and see if we can make
                                        it viable as a failover node.
                                    </p>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5 className="card-title mb-4">Storage</h5>
                                    <p className="card-text">We are still very hesitant about the idea of block producers providing IPFS storage, but we
                                        are tentatively going to have a single d2 instance (somewhere from 12-48 TB in size) for the
                                        purpose of providing rudimentary storage. Anything further will require us to move to bare
                                        metal servers in order to implement the high speed hardware required to keep I/O performance
                                        at a workable level. This is of course not a priority at the moment since the feature is
                                        still to be implemented in the protocol</p>
                                </div>
                            </div>

                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title mb-4">Security</h5>
                                    <p className="card-text">We have rudimentary DDoS protection in place using port knocking, haproxy (which doubles as a
                                        load balancer), fail2ban, and Wireguard VPN. More thorough and expensive protection will be
                                        contingent on our election and ability to scale, at which point we will investigate
                                        providers. Auditing tools such as Amazon’s GuardDuty will also be implemented in the near
                                        future. We would also like to hire a third-party firm to conduct a security audit on our
                                        system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Specs;