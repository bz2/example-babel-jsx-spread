# Example for [preact issue 2773]

Minimal reproduction code generation issue with [babel] and new JSX transformation with [preact] `10.5.x` release.

See [Introducing the New JSX Transform] blog post for background on the code generation change.


## Usage

    $ npm install

Then inspect `dist/main.js` compiled result.


## Closing

With improvements to the babel transform process, including [babel issue 12557] fixed, sensible code now gets generated:

```js
function App(_ref) {
  var style = _ref.style;
  return jsxRuntime_module_o("h1", {
    style: style,
    children: "Title"
  });
}
```


[preact issue 2773]: https://github.com/preactjs/preact/issues/2773
[babel]: https://babeljs.io/
[preact]: https://preactjs.com/
[Introducing the New JSX Transform]: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
[babel issue 12557]: https://github.com/babel/babel/pull/12557
