# react-roku-remote-control

Just to have fun with a local React Application and a Roku Device in the same network.

Once integrated, you can use your web browser to control the Roku device.


## Demo & Examples

Live demo: [encodi.github.io/react-roku-remote-control](http://encodi.github.io/react-roku-remote-control/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-roku-remote-control is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-roku-remote-control.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-roku-remote-control --save
```


## Usage


```
var ReactRokuRemoteControl = require('react-roku-remote-control');

<ReactRokuRemoteControl ip="127.0.0.1">Example</ReactRokuRemoteControl>
```

### Properties

ip of the roku device in the same network

### Notes


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## Contributors

(@encodi)

By all means, if you see room for improvement, let us know!


## License

MIT License

Copyright (c) 2017 encodi.
