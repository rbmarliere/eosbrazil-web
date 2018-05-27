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
];

class Team extends Component {

    render() {
        return (
            <section>
                <TeamMembers members={members} />
            </section>
        );
    }
}

export default Team;