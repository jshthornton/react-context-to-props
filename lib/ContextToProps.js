'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextToProps = function ContextToProps(contextTypes, map) {
  return function (DecoratedComponent) {
    return function (_Component) {
      _inherits(ContextToProp, _Component);

      function ContextToProp() {
        _classCallCheck(this, ContextToProp);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContextToProp).apply(this, arguments));
      }

      _createClass(ContextToProp, [{
        key: '_getContextAsProps',
        value: function _getContextAsProps() {
          var _this2 = this;

          if (map == null) {
            return this.context;
          }

          var mapped = {};
          _lodash2.default.forOwn(map, function (value, key) {
            mapped[key] = _this2.context[value];
          });

          return mapped;
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this._getContextAsProps()));
        }
      }], [{
        key: 'contextTypes',
        get: function get() {
          return contextTypes;
        }
      }]);

      return ContextToProp;
    }(_react.Component);
  };
};

exports.default = ContextToProps;
