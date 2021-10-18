import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

//------------------

//Скрипт на основании вёрстки Никиты

//Условный пароль для сравнения
const conditionalPass = "0000";

const btnEnter = document.querySelector(".button_enter").addEventListener('click', () => {
  let passwordValue = document.querySelector(".password_value").value;
  
  if (passwordValue == conditionalPass) {
    alert("Welcome to the party, юный падаван");
  } else {
    alert("Назад, маслёнок, вход тебе запрещён!");
  }
});