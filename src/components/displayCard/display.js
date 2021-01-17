import React from 'react'
import './display.scss'

class Display extends React.Component {


    render() {
        return(
            <div className={'display'}>
                <div className={'description'}>
                    <h4 className={'title'}>{this.props.item.header}</h4>
                    <p>{this.props.item.description}</p>
                </div>
                <img className={'image'} src={process.env.PUBLIC_URL + `/aboutMe/${this.props.item.img}.jpg`} alt={this.props.item.img}/>
            </div>
        )
    }
}
export default Display;
