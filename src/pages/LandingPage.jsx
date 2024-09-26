import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Notes 4 Uni!</h1>
      <p>Store, share, and access your course notes easily and securely.</p>
      <button onClick={() => navigate('/courses')}>Get Started</button>
    </div>
  );
}

export default LandingPage;
