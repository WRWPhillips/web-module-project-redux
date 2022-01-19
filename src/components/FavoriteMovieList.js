import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeFavorite} from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const removeFavoritecb = (id) => {
        props.removeFavorite(id);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={removeFavoritecb(movie.id)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.fav.favorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);