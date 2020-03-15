'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are not on browser and metamask is not running

    //   window.web3.currentProvider.enable();
    //   web3 = new Web3(window.web3.currentProvider);  

    web3 = new _web2.default(window.ethereum);
    window.ethereum.enable();

    // window.web3.currentProvider.enable();
    // web3 = new Web3(window.web3.currentProvider);
} else {

    // we are on the server or user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/da69307b72de4258a570781e1fdcf8b4');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBR0EsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBM0QsYUFBd0UsQUFDdEU7QUFFRjs7QUFDQTtBQUVJOztXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQWhCLEFBQVAsQUFDQTtXQUFPLEFBQVAsU0FBZ0IsQUFBaEIsQUFFQTs7QUFDQTtBQUdIO0FBYkQsT0FhTyxBQUVIOztBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9FdGhlcmV1bS9raWNrc3RhcnQifQ==