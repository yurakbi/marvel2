import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharList()
        console.log('mount');
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError(){
        this.setState({
            loading: false,
            error: true
        })
    }

    updateCharList() {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharLoaded)
            .catch(this.onError)

    }

    render() {
        console.log('render');
        const {char, loading, error} = this.state
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {spinner}
                    {errorMessage}
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}
const View = ({char}) => {
    console.log(char);
    const {name, thumbnail} = char;
    return(
        <li className="char__item">
            <img src={thumbnail} alt='img'/>
            <div className="char__name">{name}</div>
        </li>
    )
}

export default CharList;