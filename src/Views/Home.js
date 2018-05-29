import React, { Component } from 'react';
import { Client } from 'dsteem';
import Masthead from '../Components/Masthead';
import About from '../Components/About';

const client = new Client('https://api.steemit.com');
const Fragment = React.Fragment;

function fetchBlog() {
    /**
     * @description tag (account name)  and amount of posts set to 10 now will pul the last 10 posts from steemit
     * @type {{tag: string, limit: number}}
     */
    const query = {
        tag: 'eosbrazil',
        limit: 10
    };

    client.database
        .getDiscussions('blog', query)
        .then(result => {
            const posts = [];
            result.forEach(post => {
                const json = JSON.parse(post.json_metadata);
                const image = json.image ? json.image[0] : '';
                const title = post.title;
                const author = post.author;
                const tags = json.tags;
                const Tags = [];
                tags.forEach(tag => {
                    Tags.push(` ${tag}`);
                });
                const url = post.url;
                const created = new Date(post.created).toDateString();

                posts.push(
                    `<article class="card mb-5">
                        <a href="https://steemit.com${url}" target="_blank">
                            <img src="${image}" alt="" class="card-img-top"/>
                        </a>
                        
                        <div class="card-body">
                            
                            <h2 class="card-title">${title}</h2>
                            <p class="card-text">Tags: ${Tags}</p>
                            <div class="mt-2">
                                <a href="https://steemit.com${url}" class="btn btn-outline-custom">READ MORE...</a>
                            </div>
                            <hr>
                            <p class="card-text text-center text-muted">by ${author} created at ${created}</p>
                        </div>
                    </article>`
                );

            });

            document.getElementById('postList').innerHTML = posts.join('');
        })
        .catch(err => {
            alert('Error occured' + err);
        });
}

class Home extends Component {
    componentDidMount() {
        fetchBlog();
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid mt-center">
                    <div className="row  h-100">
                        <div className="col-12 d-flex justify-content-center">
                            <Masthead />
                        </div>
                    </div>
                </div>

                <main className='container'>
                    <div className="row justify-content-center">
                        <div className="col-xs-10 col-md-8">
                            <About />
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5">
                        <div className="col-xs-10 col-md-8 text-center" id="postList">

                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Home;