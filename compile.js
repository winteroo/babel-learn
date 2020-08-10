import "core-js/modules/es.array.includes";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
// Promise
var promise = Promise.resolve(1); // 数组的includes语法

var arr = [1, 2, 3];
var flag = arr.includes(3);
console.log(flag); // class语法

var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "run",
    value: function run() {
      console.log("".concat(this.name, " is running"));
    }
  }]);

  return Animal;
}(); // 异步函数


var fun = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var ans;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(1);
              });
            });

          case 2:
            ans = _context.sent;
            console.log(ans);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fun() {
    return _ref.apply(this, arguments);
  };
}();
