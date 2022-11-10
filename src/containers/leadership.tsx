import React from "react";

import leadership from "../information/leadership.json";

const LeadershipItem = ({ leadership }: { leadership: any }) => {
  return <div className="center">{JSON.stringify(leadership)}</div>;
};

class Leadership extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Leadership</h1>
        <div className="center">
          {leadership.map((leadership) => {
            return <LeadershipItem leadership={leadership}></LeadershipItem>;
          })}
        </div>
      </div>
    );
  }
}

export default Leadership;
