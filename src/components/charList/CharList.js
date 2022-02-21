import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newLoadingItem: false,
        offset: 210,
        charEnded: false
    }
    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
        window.addEventListener('scroll', this.onScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    itemsRefs = [];

    setRefs = (ref) => {
        this.itemsRefs.push(ref)
    }

    onFocusCard = (id) => {
        this.itemsRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemsRefs[id].classList.add('char__item_selected');
        this.itemsRefs[id].focus();
    }   

    onScroll= () => {
        if(this.state.newLoadingItem) return;
        if(this.state.charEnded ) {
            window.addEventListener('scroll', this.onScroll);
        }
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.onRequest(this.state.offset)
        }
    }

    onRequest = (offset) => {
        this.onCharListLoading()
        this.marvelService.getAllCharacters(offset)
        .then(this.onCharListLoaded)
        .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newLoadingItem: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9 ){
            ended = true
        }

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newLoadingItem: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError= () => {
        this.setState({
            error: true,
            loading: false
        })
    }

   renderItems=(arr) =>{
       const items = arr.map((item, i) => {
           let imgStyle = {'objectFit' : 'cover'}
           if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
               imgStyle = {'objectFit' : 'unset'}
           }
           return (
            <li 
                className="char__item"
                tabIndex={0}
                key={item.id}
                ref={this.setRefs}
                onClick={() => {
                    this.props.onSelectedChar(item.id)
                    this.onFocusCard(i)
                    }}
                onKeyPress={ (e) => {
                    if(e.key === '' || e.key === 'Enter') {
                        this.props.onSelectedChar(item.id)
                        this.onFocusCard(i)
                    }
                }} >
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
            </li>
           )
       })
       return (
        <ul className="char__grid">
            {items}
        </ul>
       )

   }

    render() {
        const {charList, loading, error, offset, newLoadingItem, charEnded} = this.state
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                    {spinner}
                    {errorMessage}
                    {content}
                <button 
                    className="button button__main button__long"
                    disabled={newLoadingItem}
                    onClick={() => this.onRequest(offset)} 
                    style={{'display' : charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onSelectedChar: PropTypes.func
}

export default CharList;