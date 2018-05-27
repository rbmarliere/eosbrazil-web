import React, { Component } from 'react';
import { Client } from 'dsteem';
import Masthead from '../Components/Masthead';

const client = new Client('https://api.steemit.com');

function fetchBlog() {
    const query = {
        tag: 'eosbrazil',
        limit: 10,
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
                    `<article class="card mt-2 mb-4">
                        <a href="https://steemit.com${url}" target="_blank">
                            <img src="${image}" alt="" class="card__image"/>
                        </a>
                        <div class="card__inner">
                            <a href="https://steemit.com${url}" target="_blank">
                                <h2 class="card__heading">${title}</h2>
                            </a>
                            <h3 class="card__sub__heading">by ${author} <span class="card__created">created at ${created}</span></h3>
                        
                            <div class="card__tags mb-1 mt-1"><p>Tags: ${Tags}</p></div>
                            <div class="mt-2">
                                <a href="https://steemit.com${url}" class="btn">READ MORE...</a>
                            </div>
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
        fetchBlog()
    }
    render() {
        return (
            <main className='home__wrapper'>
                <Masthead />
                <section className='post__list' id="postList"></section>
            </main>
        );
    }
}

export default Home;