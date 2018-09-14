import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';

const app = document.getElementById("app");

const texto = "hola"

//ReactDOM.render(que voy a renderizar?, donde lo haré?);
ReactDOM.render(<Home />, app);
