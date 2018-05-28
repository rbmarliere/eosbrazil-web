import React, { Component } from 'react';
import TeamMembers from '../Components/TeamMembers';

const members = [
    {
        'id': 1,
        'avatar_url': 'http://lorempixel.com/400/200/people',
        'name': 'Ricardo',
        'email': 'example@email.com',
        'bio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore esse est incidunt sapiente? Alias aperiam eligendi explicabo maiores quasi.',
        'github_url': 'https://github.com/rbmarliere'
    },
    {
        'id': 2,
        'avatar_url': 'http://lorempixel.com/400/200/people',
        'name': 'Member 2',
        'email': 'example@email.com',
        'bio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore esse est incidunt sapiente? Alias aperiam eligendi explicabo maiores quasi.',
        'github_url': 'https://github.com/rbmarliere'
    },
    {
        'id': 3,
        'avatar_url': 'http://lorempixel.com/400/200/people',
        'name': 'Member 3',
        'email': 'example@email.com',
        'bio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore esse est incidunt sapiente? Alias aperiam eligendi explicabo maiores quasi.',
        'github_url': 'https://github.com/rbmarliere'
    }
    ,
    {
        'id': 4,
        'avatar_url': 'http://lorempixel.com/400/200/people',
        'name': 'Member 3',
        'email': 'example@email.com',
        'bio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore esse est incidunt sapiente? Alias aperiam eligendi explicabo maiores quasi.',
        'github_url': 'https://github.com/rbmarliere'
    },
    {
        'id': 5,
        'avatar_url': 'http://lorempixel.com/400/200/people',
        'name': 'Member 3',
        'email': 'example@email.com',
        'bio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore esse est incidunt sapiente? Alias aperiam eligendi explicabo maiores quasi.',
        'github_url': 'https://github.com/rbmarliere'
    }
];

class Team extends Component {

    render() {
        return (
            <main className='container mt-10'>
                <div className="row justify-content-center">
                    <div className="col-xs-10">
                        <h2>EOS Brazil Team</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <TeamMembers members={members} />
                </div>
            </main>
        );
    }
}

export default Team;