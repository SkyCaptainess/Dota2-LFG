import React, { Component } from 'react';
import './../../css/miniProfile.css';
import { withCookies} from 'react-cookie';
import MiniHero from '../MiniHero';

class MiniProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      top3GamesPlayed: null
    }
  }
  componentDidMount = async () => {
    const stats = await this.getStats();
    if(stats) {
      if(stats.length === 0) {
        this.setState({
          top3GamesPlayed: <p>Looks like you haven't played any games
          <img src="/images/emoticons/undying_cry.gif" alt="Undying crying"/>
          </p>
        })
      } else {
        this.getMiniHeroes(stats, 'wins');
      }
    }
    
  }

  getStats = async() => {
    try {
      const response = await fetch('/api/matchstats/top3heroes/totalgames', {
        method: 'GET',
        credentials: 'same-origin',
      });
      const stats = await response.json()
      if(stats.error) {
        throw new Error('Not authorized');
      }
      return stats;
    } catch(error) {
      console.error(error);
    }
  }

  getMiniHeroes = (stats, type) => {
    let top3 = [];
    stats.forEach(h => {
      top3.push(<MiniHero wins={h.win} losses={h.loss} total={h.total} _id={h._id} key={type + h._id}/>)
    })
    this.setState({
      top3GamesPlayed: top3
    })
  }

  render() {
    const {cookies} = this.props;
    const user = cookies.get('user');
    let content;
    
    if (user) {
      content =
      <section className="miniProfile">
        <div className="profile">
          <p>{user.username}</p>
          <img src={user.avatarFull} alt="User's profile"/>
        </div>
        <div className="stats">
          <div className="top3">
            <p>Most Played Heroes</p>
            {this.state.top3GamesPlayed || 'Loading stats...'}
            <p className="opendota">View more stats on&nbsp; 
              <a target="_blank" href={`https://opendota.com/players/${user.steamid32}`}>OPENDOTA</a>
            </p>
          </div>
        </div>
      </section>
    } else {
      content =
      <div className="miniProfile">
        <p className="login">
          Login to view summary stats, create a group, join a group, and more! &nbsp;
          <img src="/images/emoticons/sniper_highfive.gif" alt="Sniper high five"/>
        </p>
      </div>
    }
    
    return (content);
  }
}

export default withCookies(MiniProfile);
