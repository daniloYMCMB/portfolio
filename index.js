import React from 'react';
import ReactDOM from 'react-dom';
import Title from './src/banner/components/title';

const app = document.getElementById("app");

const texto = "hola"

//ReactDOM.render(que voy a renderizar?, donde lo haré?);
ReactDOM.render(<Title />, app);

