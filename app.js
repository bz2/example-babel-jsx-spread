/** @jsx h */

import {h, render} from 'preact';

function App({style}) {
  return <h1 {...{style}}>Title</h1>;
}

render(<App style="color: red" />, document.getElementById('root'));

