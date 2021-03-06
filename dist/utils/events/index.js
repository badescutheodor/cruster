'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClusterEmitter = function (_Events$EventEmitter) {
  _inherits(ClusterEmitter, _Events$EventEmitter);

  function ClusterEmitter() {
    _classCallCheck(this, ClusterEmitter);

    return _possibleConstructorReturn(this, (ClusterEmitter.__proto__ || Object.getPrototypeOf(ClusterEmitter)).apply(this, arguments));
  }

  return ClusterEmitter;
}(_events2.default.EventEmitter);

exports.default = new ClusterEmitter();
module.exports = exports['default'];