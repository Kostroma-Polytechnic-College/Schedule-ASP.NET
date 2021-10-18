import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <>
            <div id="login-form">
                <h1>Авторизация</h1>

                <fieldset>
                    <form action="javascript:void(0);" method="get">
                        <h4>Логин</h4>
                        <input type="email" ></input>

                        <h4>Пароль</h4>
                        <input className="password_value" type="password"></input>
                        <input className="button_enter" type="submit" value="ВОЙТИ"></input>

                        <footer className="clearfix">
                            <p>
                                <span className="info">?</span>
                                <a href="#">Забыли пароль?</a>
                            </p>
                        </footer>
                    </form>
                </fieldset>
            </div>
        </>
    );
  }
}
