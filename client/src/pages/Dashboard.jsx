import React from 'react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import Photographer from './Photographer';

export default function Dashboard(props) {
  const { user } = useContext(UserContext);
  const { role, setRole } = useState(props.role);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Dashboard</h1>
      {!!user && <h1 className="user-greeting">Hi {user.name}!</h1>}
      {role === 'user' ? (
        <div>
          <div className="calendly-container">
            <div className="calendly-widget">
              <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '580px' }} data-auto-load="false"></div>
            </div>
            <div>
              <h2>Some Title</h2>
              <span>Some Info</span>
            </div>
          </div>
          <div className="photography-info">
            <div>
              <p>
                <span>Professional photography for weddings, families, and events</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <a href="/" className="photography-link">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Photographer />
      )}
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      <script type="module" src="/src/assets/index.js"></script>
    </div>
  );
}
