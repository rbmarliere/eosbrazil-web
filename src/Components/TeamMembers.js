import React, { Component } from 'react';

class TeamMembers extends Component {
    render() {
        const { members } = this.props;

        return (
            <section className='team__wrapper'>
                <h2 className='team__title'>Team Members EOS Brasil</h2>
                <div className="team__container">
                    {members ? members.map(member => (
                        <div className="card mt-2 mb-3 team__card" key={member.id}>
                            <img src={member.avatar_url} alt="" className='team__avatar'/>
                            <div className="card__inner team__card__inner">
                                <h3 className='team__member__name mt-0'>{member.name}</h3>
                                <h4 className='team__member__email'>{member.email}</h4>
                                <p className='team__member__bio'>{member.bio}</p>
                                <div className='mt-2 team__card__social'>
                                    <a href={member.github_url} target='_blank' className='btn team__card__link'>View On Github</a>
                                </div>
                            </div>
                        </div>
                    )) : <h3>No members now</h3>}
                </div>
            </section>
        )
    }
}

export default TeamMembers;