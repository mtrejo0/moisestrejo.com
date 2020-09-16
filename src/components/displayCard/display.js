import React from 'react'
import './display.scss'

class Display extends React.Component {

    render() {
        return(
            <div className={'display'}>
                {this.props.flip ?
                    <>
                        <div className={'description'}>
                            <h4 className={'title'}>{this.props.title}</h4>
                            <p>{this.props.body}</p>
                        </div>
                        <img className={'image'} src={this.props.src} alt={this.props.src}/>
                    </>
                    :
                    <>
                        <img className={'image'} src={this.props.src} alt={this.props.src}/>
                        <div className={'description'}>
                            <h4 className={'title'}>{this.props.title}</h4>
                            <p>{this.props.body}</p>
                        </div>
                    </>
                }
            </div>
        )
    }
}
export default Display;
