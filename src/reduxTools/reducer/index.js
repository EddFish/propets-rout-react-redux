import {combineReducers} from "redux";

import generalReducer from "./GeneralReducer";
import postsReducer from "./PostReducer";
import favoritesReducer from "./FavoritesReducer";
import auth from "./AuthReducer";
import newPostReducer from "./AddingNewPostReducer";

export const  rootReducer = combineReducers({login: auth, general: generalReducer, posts: postsReducer, favorites: favoritesReducer, newPost: newPostReducer});