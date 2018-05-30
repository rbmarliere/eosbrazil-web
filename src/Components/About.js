import React, { Component } from 'react';

const Fragment = React.Fragment;

class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="card mb-5 text-justify">
                    <div className="card-body">
                        <p className="card-text">We are a couple of EOS nerds who are dedicated to expanding the EOS ecosystem to this underrepresented continent, bringing the blockchain to Brazil (and wider South America) in order to secure life, liberty, and property in accordance with the goals of block.one and the EOS community.</p>
                        <p className="card-text">We are based in Joinville, a modern industrial city in the south of Brazil. However, our initial plans call for us to deploy from AWS cloud servers in Sao Paulo (sa-east-1), as data center colocation is prohibitively expensive for us at this moment. This is a reality for not only us but many other who have chosen to use cloud-base solutions for one reason or another.</p>
                        <p className="card-text">We would like to colocate in a data center and if we expand enough, one day perhaps even build our own if we get elected. We think that our appeal lies in being part of an underrepresented geographic region (compare the amount of candidates in South America with the ten million candidates coming out of China) as well as our demonstrated passion for the project.</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About;
