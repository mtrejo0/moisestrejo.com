import React from 'react'

import {ResumeItem} from "./resume++"

class Education extends React.Component {

    render() {
        return (
          <div>
            <h3>MIT</h3>
            {this.props.items.map(item => <ResumeItem item ={item}></ResumeItem>)}
          </div>
        );
    }
}

export default Education;