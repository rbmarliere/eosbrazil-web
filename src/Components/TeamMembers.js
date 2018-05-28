import React, { Component } from 'react';
const Fragment = React.Fragment;
class TeamMembers extends Component {
    render() {
        const { members } = this.props;

        return (
            <Fragment>
                {members ? members.map(member => (
                    <div className="col-xs-10 col-md-8 col-lg-4 mt-3 mb-3" key={member.id}>
                        <div className="card mt-2 mb-3 team__card" >
                            <img src={member.avatar_url} alt="" className='team__avatar'/>
                            <div className="card-body">
                                <h3 className='card-title'>{member.name}</h3>
                                <h4 className='card-subtitle'>{member.email}</h4>
                                <p className='card-text'>{member.bio}</p>
                                <hr/>
                                <div className='mt-2 text'>
                                    <a href={member.github_url} target='_blank' className='btn btn-outline-custom'>View On Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <h3>No members now</h3>}
            </Fragment>
        )
    }
}

export default TeamMembers;