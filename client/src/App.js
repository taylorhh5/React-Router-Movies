import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Movie  from './Movies/Movie.js';
import  MovieList from './Movies/MovieList.js';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
