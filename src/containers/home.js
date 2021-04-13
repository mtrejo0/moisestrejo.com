import React from 'react'
import axios from 'axios'

import "../styles/home.css";

const ListItem = ({info, img, small = false}) => {
    return <div class="list-item">
        <p>{info}</p>
        {
            img ? 
            <img class={small? "small-image" : "image"} src={process.env.PUBLIC_URL + `/images/${img}.jpg`} alt={img}></img>
            : null
        }
    </div>
};

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: 0,
            error: null
        };
    }

    async componentDidMount() {
        axios.get(`https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test`)
        .then(res => {
            this.setState({
                isLoading: false,
                users: res.data.body.userCount
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { isLoading, users  } = this.state;
        
        return (
            <div class="center">
                <div className={'paragraph'}>
                    <h1 class="title">Hey I'm Moises!</h1>
                    <p>You are the {isLoading?'Loading...':users}th person to visit this site!</p>
                </div>
                <div className={'paragraph'}>
                    <p>I am currently a junior at MIT studying Computer Science. I am passionate about using technology to give everyone the same opportinity to live happy and succeed. 
                    I have a Shiba Inu named Mango <span role="img" aria-label='mango'>🥭</span>. I love cooking, basketball, skateboarding, and philosophy. </p>
                </div>

                <h1 class="title">About Me</h1>
                <br/>

                <div class="columns">
                    <div>
                        <ListItem info={<p>Born and raised in Dallas, TX <span role="img" aria-label='tex'>🤠</span></p>} img="dallas"/>
                        <ListItem info={<p>Roots from <a href="https://www.google.com/search?q=tlaltenango+zacatecas" target="_blank" rel="noopener noreferrer">Tlaltenango, Zacatecas <span role="img" aria-label='mex'>🇲🇽</span></a></p>} img="mexico"/>
                        <ListItem info={<p>FGLI - First generation low income student</p>} img="fam"/>
                    </div>
                    <div>
                        <ListItem info={"Junior at MIT BS 21' MS 22'"} img="mit"/>
                        <ListItem 
                            info={
                                <div>
                                    <p>Undergraduate Researcher in the <a href="https://lids.mit.edu/" target="_blank" rel="noopener noreferrer">LIDS</a> Group</p>
                                    <br/>
                                    <p><a href="https://superurop.mit.edu/scholars/moises-trejo/" target="_blank" rel="noopener noreferrer">Regulating Social Media</a></p>
                                </div>
                                } 
                            img="lids" small={true} />
                        <ListItem info={"Twitter 2021"} img="twitter"/>
                        <ListItem info={<p>President of <a href="http://maes.mit.edu" target="_blank" rel="noopener noreferrer">MAES</a></p>} img="maes"/>
                        <ListItem info={<p>Vice President of <a href="http://shpe.mit.edu" target="_blank" rel="noopener noreferrer">SHPE</a></p>} img="shpe"/>
                        <ListItem info={<p>Brother of <a href="http://sigmanu.mit.edu" target="_blank" rel="noopener noreferrer">Sigma Nu</a></p>} img="sigmanu" small={true}/>
                    </div>
                </div>
                </div>
        );
    }
}



export default Home;
