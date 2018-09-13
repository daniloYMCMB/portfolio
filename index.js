import React from 'react';
import ReactDOM from 'react-dom';
import Title from './src/banner/components/title';

const app = document.getElementById("app");

const texto = "hola"

//ReactDOM.render(que voy a renderizar?, donde lo haré?);
ReactDOM.render(<Title title="EL SILENCIO PARAMETRO" image="https://camo.githubusercontent.com/9c8486f1f9e23ad3e14e118bedc909cbc92ec937/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3331343939372f313535333237362f31313733373165362d346533312d313165332d393539632d3636613061303932376464352e706e67" />, app);
