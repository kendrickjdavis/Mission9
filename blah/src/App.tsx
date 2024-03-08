import React from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';

var CollegeData = jsonData['teams'];

interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  const headingStyle = {
    margin: '0 auto',
    padding: '10px',
    maxWidth: '400px',
  };

  const headerStyle = {
    maxWidth: '300px',
    margin: '0 auto',
    background: 'rgba(51, 51, 51,.9)',
    padding: '10px',
    color: 'white',
    fontSize: 'large',
  };

  return (
    <div>
      <h1 style={headingStyle}>NCAA Basketball Teams</h1>

      <h3 style={headerStyle}>
        Welcome! This site catalogs all of the NCAA teams so that you can learn
        a little bit about them before March Madness begins. Learn about each
        team by scrolling through the list. Good luck on your bracket!
      </h3>
      <br></br>
    </div>
  );
}

class College extends React.Component<CollegeProps> {
  render() {
    const oneCollege = this.props;

    const divStyle = {
      maxWidth: '300px',
      margin: '0 auto',
      background: 'rgba(51, 51, 51,.9)',
      padding: '10px',
      color: 'white',
      fontSize: 'large',
    };

    return (
      <div>
        <div style={divStyle}>
          <h2>{oneCollege.school}</h2>
          <h3>{oneCollege.name}</h3>
          <h3>
            {oneCollege.city}, {oneCollege.state}
          </h3>
        </div>
        <br></br>
      </div>
    );
  }
}

function CollegeList() {
  return (
    <div>
      {CollegeData.map((singleCollege) => (
        <College {...singleCollege} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Heading></Heading>
      <CollegeList></CollegeList>
    </>
  );
}

export default App;
