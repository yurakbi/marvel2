import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';


class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar = () => {
       const {charId} = this.props;
       if(!charId) {
           return;
       }

       this.onCharLoading() 

       this.marvelService
        .getCharacter(charId)
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () =>{
        this.setState({
            loading: true
        })
    }

    onError= () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, homepage, wiki, thumbnail, description, comics} = char;
    let imgStyle = {'objectFit' : "contain"}
    if(thumbnail === "'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'"){
        imgStyle = {"objectFit" : "unset"}
    }
    return(
        <>
             <div className="char__basics">
                    <img src={thumbnail} alt={name} style={imgStyle}/>
                    <div>
                        <div className="char__info-name">thor</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.length > 0 ? null : "There are no comics for this character"}
                    {
                        comics.map((item, i) => {
                            
                            return(
                                <li className="char__comics-item" key={i}>
                                    {item.name}
                                </li> 
                            )
                        })
                    }
                </ul>
        </>
    )
}
CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;