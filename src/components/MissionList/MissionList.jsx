import React, { useEffect } from 'react';
import Aos from 'aos';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, reservedMissions } from '../../redux/Missions/Missions';
import './MissionList.scss';
import 'aos/dist/aos.css';

function MissionsList() {
  const missions = useSelector((state) => state.missions.missions);
  const missionNumber = Object.keys(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if ((missions.length) === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <div className="missions-container">
      <h2 className="missions-title" data-aos="fade-right">MISSIONS</h2>
      <div className="missions-list">
        {missionNumber.map((mission) => (
          <div key={mission} className="mission-container" data-aos="fade-up">
            <div className="mission-header">
              <h3 className="mission-name">{missions[mission].name}</h3>
              <h3 className="mission-status">
                {missions[mission].reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
              </h3>
            </div>
            <p className="mission-description">{missions[mission].description}</p>
            <div className="join-button-container">
              {!missions[mission].reserved && (
              <button
                type="button"
                className="reserve-button"
                onClick={() => {
                  dispatch(reservedMissions(mission));
                }}
              >
                JOIN MISSION
              </button>
              )}
              {missions[mission].reserved && (
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  dispatch(reservedMissions(mission));
                }}
              >
                LEAVE MISSION
              </button>
              )}
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default MissionsList;
