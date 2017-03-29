'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var ReactRokuRemoteControl = (function (_Component) {
  _inherits(ReactRokuRemoteControl, _Component);

  function ReactRokuRemoteControl(props) {
    _classCallCheck(this, ReactRokuRemoteControl);

    _get(Object.getPrototypeOf(ReactRokuRemoteControl.prototype), 'constructor', this).call(this, props);
    this.handleClick = this.handleClick.bind(this);
    this.config = {
      ip: props.ip,
      port: '8060'
    };
  }

  _createClass(ReactRokuRemoteControl, [{
    key: 'handleClick',
    value: function handleClick(e) {
      _axios2['default'].post('http://' + this.config.ip + ':' + this.config.port + '/keypress/' + e.target.name).then(function (response) {
        console.log('Pressed ', e.target.name);
      })['catch'](function (error) {});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'roku-remote-control-wrapper container-fluid' },
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Back', onClick: this.handleClick },
              'Back'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Home', onClick: this.handleClick },
              'Home'
            )
          )
        ),
        _react2['default'].createElement('div', { role: 'separator', className: 'divider' }),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-12' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Up', onClick: this.handleClick },
              'Up'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Left', onClick: this.handleClick },
              'Left'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Select', onClick: this.handleClick },
              'Select'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Right', onClick: this.handleClick },
              'Right'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-12' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Down', onClick: this.handleClick },
              'Down'
            )
          )
        ),
        _react2['default'].createElement('div', { role: 'separator', className: 'divider' }),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'InstantReplay', onClick: this.handleClick },
              'InstantReplay'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Info', onClick: this.handleClick },
              'Info'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Rev', onClick: this.handleClick },
              'Rev'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Play', onClick: this.handleClick },
              'Play'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            _react2['default'].createElement(
              'button',
              { className: 'btn btn-default', name: 'Fwd', onClick: this.handleClick },
              'Fwd'
            )
          )
        ),
        _react2['default'].createElement('div', { role: 'separator', className: 'divider' }),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'button',
            { name: 'Search', onClick: this.handleClick },
            'Search'
          ),
          _react2['default'].createElement(
            'button',
            { name: 'Enter', onClick: this.handleClick },
            'Enter'
          ),
          _react2['default'].createElement(
            'button',
            { name: 'VolumeDown', onClick: this.handleClick },
            'Volume Down'
          ),
          _react2['default'].createElement(
            'button',
            { name: 'VolumeUp', onClick: this.handleClick },
            'Volume Up'
          ),
          _react2['default'].createElement(
            'button',
            { name: 'VolumeMute', onClick: this.handleClick },
            'Mute'
          ),
          _react2['default'].createElement(
            'button',
            { name: 'PowerOff', onClick: this.handleClick },
            'Power Off'
          )
        )
      );
    }
  }]);

  return ReactRokuRemoteControl;
})(_react.Component);

;
ReactRokuRemoteControl.defaultProps = {
  ip: '192.168.1.154'
};
ReactRokuRemoteControl.propTypes = {
  ip: _react2['default'].PropTypes.string
};

exports['default'] = ReactRokuRemoteControl;
module.exports = exports['default'];