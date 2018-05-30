import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='container-fluid'>
                <div className="row d-flex justify-content-center pt-2 pb-2">
                    <div className="col-xs-12">
                        <p className="lightgray text-justify">EOS Brazil {(new Date().getFullYear())} &copy; contact@eosbrazil.com</p>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;
