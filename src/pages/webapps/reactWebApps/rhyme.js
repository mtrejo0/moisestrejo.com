import React from 'react'
import './rhyme.scss'
import {Button} from "react-bootstrap"

var rhymes = require('rhymes')

class Contact extends React.Component {

    constructor() {
        super();
        this.state={
            songName: '',
            lyrics: [],
            colorDictionary: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div className={'wrapper'}>
                <p>Enter a Name of a Song</p>
                <div className={'songInput'}>
                    <input value={this.state.songName} onChange={this.handleChange}/>
                    <Button className={"button"} onClick={this.handleSubmit}> Submit</Button>
                </div>
                {this.state.lyrics.map((word,index) => <p style={{padding: '8px',background: this.state.colorDictionary[word]}}>{word+' '+this.state.colorDictionary[word]} </p>)}
            </div>
        )
    }

    handleSubmit(event) {
        console.log(this.state.songName)
        let lyrics = this.state.lyrics.concat(this.state.songName)
        this.getRhymingScheme(this.state.songName);
        this.setState({...this.state, lyrics: lyrics, songName: ''});
    }


    handleChange(event){
        this.setState({...this.state,songName: event.target.value});
    }



    async getSongList(){
        try {
            const response = await fetch('https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test');
            let responseJson = await response.json();

        } catch (e) {

        }
    }

    async getSongLyrics(){
        try {
            const response = await fetch('https://2r2wddk4i6.execute-api.us-east-2.amazonaws.com/test');
            let responseJson = await response.json();

        } catch (e) {

        }
    }

    getRhymingScheme(word){

        let colorCodes = this.state.colorDictionary
        console.log(word)
        let rhymingWords = rhymes(word)
        console.log(rhymingWords)
        let wordColor = '';
        console.log(colorCodes)
        for(let rhyme in rhymingWords){
            let rhymeWord = rhymingWords[rhyme].word
            console.log(rhymeWord)
            if (rhymeWord in colorCodes){
                console.log(colorCodes)
                wordColor = colorCodes[rhymeWord]
                console.log(wordColor)
            }
        }
        colorCodes[word] = wordColor == '' ? this.getRandomCode() : wordColor;

        this.setState({colorDictionary: colorCodes})
    }

    getRandomCode(){
        let digits = '0123456789ABCDEF';
        let code = '#';
        for(let i = 0 ; i < 6 ; i ++){
            let index = Math.random()*(digits.length);
            code += digits.substring(index,index+1);
        }
        return code;
    }


}
export default Contact;
