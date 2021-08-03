import React from "react";

import leadership from "../information/leadership.json";

const LeadershipItem = ({ leadership }) => {
  return <div class="center">{JSON.stringify(leadership)}</div>;
};

class Leadership extends React.Component {
  render() {
    return (
      <div>
        <h1 class="title">Leadership</h1>
        <div class="center">
          {leadership.map((leadership) => {
            return <LeadershipItem leadership={leadership}></LeadershipItem>;
          })}
        </div>
      </div>
    );
  }
}

export default Leadership;
