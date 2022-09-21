import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions-div" data-testid="missions">
        <Title headline="Missões" />
        <div className="misson-list">
          {MissionsData.map((m) => (
            <MissionCard
              key={ m.name }
              name={ m.name }
              country={ m.country }
              destination={ m.destination }
              year={ m.year }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
