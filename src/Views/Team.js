import React, { Component } from 'react';

import ricardo from '../Assets/ricardo.webp';
import alex from '../Assets/alex.webp';

class Team extends Component {

    render() {
        return (
            <main className='container mt-10'>
                <div className="row justify-content-center mt-2 mb-5">
                    <div className="col-xs-10">
                        <h2>EOS Brazil Team</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-10 col-md-8">
                        <div className="card mt-2 mb-5 team__card" >
                            <img src={ricardo} alt="ricardo" className='team__avatar'/>
                            <div className="card-body">
                                <h3 className='card-title text-md-center'>
                                    Ricardo M <small className="text-black-50">Co-Founder</small>
                                </h3>
                                <p className='card-text mt-2 mb-2 text-black-70 text-md-center'>
                                    Also known in the community as “Zaratustra” or “CHONG, T” Experienced in Linux administration and
                                    fundamental programming skills. <br />
                                    He has been engaging with the Brazilian community,
                                    admining EOS Telegram groups.
                                </p>
                                <hr/>
                                <p className="card-text">
                                    As I'm writing this, my great nation is yet in another crisis.<br /> Truck drivers are on strike
                                    across our whole territory for days, resulting in a sharp collapse.<br /> Gas stations without any,
                                    schools closed, farms with starving animals, stores with no food, hospitals with no medicine,
                                    wild dumps on the stock market and an even weaker fiat currency.
                                </p>
                                <p className="card-text">
                                    We were a colony from 1500
                                    to 1822, an empire until 1889 and a republic since then, coming to life after a coup. <br />Since
                                    then, we had at least 7 others (some unsuccessful) while the most known was the military coup
                                    of 1964 which gave birth (along with our current Central Bank) to a very sad part of our
                                    history marked by censorship and violence.<br /> The regime ended in 1984 with redemocratization
                                    and we impeached 2 of the 6 presidents elected since then.
                                </p>
                                <p className="card-text">
                                    No, my friend, Brazil is not for
                                    amateurs.<br /> But it doesn't require much thought to conclude that in essence the central problem
                                    is governance.<br /> This is exactly what made me curious about EOS at the first place.<br />
                                    I discovered EOS a week after the May 2017 consensus presentation given by Dan, receiving the
                                    link of his video by accident on some random stream chat box.<br /> Back then I was deciding which
                                    field to study for my graduation final project and chose to pursue blockchains.
                                </p>
                                <p className="card-text">I joined the
                                    only EOS group on Telegram with about 1600 users by the time we were anxious for their white
                                    paper to be released.<br /> It turned into a huge part of my life and I spent many hours studying
                                    EOS everyday ever since, being emerged in this beautiful community.<br /> Thankfully I didn’t come
                                    across on any misinformation regarding Dan on those initial weeks of research and saw the
                                    value of EOS very early.</p>
                                <p className="card-text">I'll it took for me to click was to use Steem and BitShares (to
                                    finally learn what on Earth was “margin trading”) once.<br /> Even though I knew vaguely about
                                    Bitcoin before, I actually first bought some on January 2017 and as you see, I had no time to
                                    become attached to it, transforming myself into a stubborn EOS “maximalist” going all in on
                                    the first period of the token sale.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className="col-xs-10 col-md-8">
                        <div className="card mt-2 mb-5 team__card" >
                            <img src={alex} alt="Alex" className='team__avatar'/>
                            <div className="card-body">
                                <h3 className='card-title text-md-center'>
                                    Alex K <small className="text-black-50">Co-Founder</small>
                                </h3>
                                <p className='card-text mt-2 mb-2 text-black-70 text-md-center'>
                                    Also known in the community as “bakuDD”. Experienced in Linux administration and
                                    accounting.<br /> He has been engaging with the Japanese crypto community.
                                </p>
                                <hr/>
                                <p className="card-text">
                                    Before undertaking this enterprise, most of my adult career had been spent working a boring
                                    accounting job for the United States government (DoD FM certified) but I find this career
                                    path far more exciting and promising!<br /> Before this I was also part of the Japanese computer
                                    game preservation community as a hobby (dumping floppy disks, scanning instruction manuals, and so on).
                                </p>
                                <p className="card-text">
                                    With only 2 people to our team so far, ours is very much a garage door operation.<br /> I’m
                                    inspired by one of my favorite crypto exchanges, Bitstamp, which started out in much the same
                                    way.<br /> Now the block producing task itself is deceptively simple, however we must always
                                    consider the adversarial environment of the blockchain, and consider people with experience
                                    in scaling and security operations.<br /> That said, we have several potential employees in mind,
                                    and I encourage any enterprising Brazilian nerds interested in joining our team to get in
                                    touch with Ricardo.
                                </p>
                                <p className="card-text">
                                    I’d like to point out, the problem is not so much in finding skilled workers, but finding
                                    skilled workers who have the foresight to believe in a future which is paved by EOS and the
                                    blockchain.<br /> It’s hard to convince people of the benefits of such a disruptive technology, but
                                    I’m sure they will see things our way in due time).
                                </p>
                                <p className="card-text">
                                    Having extensive familiarity with Japan and Japanese culture, it was originally my intention
                                    to serve as a proxy representative for the Japanese community.<br /> This is why I created this
                                    informational <a href="https://www.youtube.com/watch?v=NAnoy9gpdTA" target='_blank'>video in Japanese</a> (10,000+ views\n' +
                                    on nicovideo)
                                    However due to life getting in the way it became more and more difficult to achieve this
                                    task.<br /> I’m happy to say that JEDA (www.eosjapan.org) seems to have stepped into the Japanese
                                    role quite nicely and would like to extend my personal recommendation to nominate them as a
                                    fellow BP.
                                </p>
                                <p className="card-text">
                                    This has been a learning experience for me.<br /> I have gone from thinking “This shit is never
                                    going to work” to “Just how far can we take this?” At this point we’ve done just about all we
                                    can do, the rest is up to you guys, so stake those tokens and vote!<br /> It is hard to anticipate
                                    what lies in store in the coming weeks and months leading up to and beyond the EOS launch,
                                    but I’m sure this will be an enriching experience for all of us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Team;