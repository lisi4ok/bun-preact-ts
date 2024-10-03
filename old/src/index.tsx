import { render } from 'preact'
import { App } from './app'
import './index.css'
/** @jsx h */
/** @jsxFrag Fragment */

import { h, Fragment } from "preact";

import { createElement } from 'preact';

export default function App() {
    return (
        <p class="big">Hello World!</p>
    )
}

render(<App />, document.getElementById("app"));




Cannot find module 'preact' or its corresponding type declarations.


const HelloWorld = () => (
    <>
        <div>Hello</div>
    </>
);
render(<App />, document.getElementById('root'))
