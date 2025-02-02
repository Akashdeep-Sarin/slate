(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('immutable')) :
	typeof define === 'function' && define.amd ? define(['exports', 'immutable'], factory) :
	(factory((global.Slate = {}),global.Immutable));
}(this, (function (exports,immutable) { 'use strict';

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isobject = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isObjectObject(o) {
  return isobject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

var isPlainObject = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/**
 * An auto-incrementing index for generating keys.
 *
 * @type {Number}
 */

var n = void 0;

/**
 * The global key generating function.
 *
 * @type {Function}
 */

var generate = void 0;

/**
 * Create a key, using a provided key if available.
 *
 * @param {String|Void} key
 * @return {String}
 */

function create(key) {
  if (key == null) {
    return generate();
  }

  if (typeof key === 'string') {
    return key;
  }

  throw new Error('Keys must be strings, but you passed: ' + key);
}

/**
 * Set a different unique ID generating `function`.
 *
 * @param {Function} func
 */

function setGenerator(func) {
  generate = func;
}

/**
 * Reset the key generating function to its initial state.
 */

function resetGenerator() {
  n = 0;
  generate = function generate() {
    return '' + n++;
  };
}

/**
 * Set the initial state.
 */

resetGenerator();

/**
 * Export.
 *
 * @type {Object}
 */

var KeyUtils = {
  create: create,
  setGenerator: setGenerator,
  resetGenerator: resetGenerator
};

var isProduction = "development" === 'production';
var index = (function (condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    console.warn(message);
  }
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Data.
 *
 * This isn't an immutable record, it's just a thin wrapper around `Map` so that
 * we can allow for more convenient creation.
 *
 * @type {Object}
 */

var Data = function () {
  function Data() {
    classCallCheck(this, Data);
  }

  createClass(Data, null, [{
    key: 'create',

    /**
     * Create a new `Data` with `attrs`.
     *
     * @param {Object|Data|Map} attrs
     * @return {Data} data
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (immutable.Map.isMap(attrs)) {
        return attrs;
      }

      if (isPlainObject(attrs)) {
        return Data.fromJSON(attrs);
      }

      throw new Error('`Data.create` only accepts objects or maps, but you passed it: ' + attrs);
    }

    /**
     * Create a `Data` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Data}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      return new immutable.Map(object);
    }

    /**
     * Alias `fromJS`.
     */

  }]);
  return Data;
}();

/**
 * Export.
 *
 * @type {Object}
 */

Data.fromJS = Data.fromJSON;

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS = {
  data: undefined,
  key: undefined,
  nodes: undefined

  /**
   * Document.
   *
   * @type {Document}
   */

};
var Document = function (_Record) {
  inherits(Document, _Record);

  function Document() {
    classCallCheck(this, Document);
    return possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  createClass(Document, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the document.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Document` with `attrs`.
     *
     * @param {Object|Array|List|Text} attrs
     * @return {Document}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Document.isDocument(attrs)) {
        return attrs;
      }

      if (immutable.List.isList(attrs) || Array.isArray(attrs)) {
        attrs = { nodes: attrs };
      }

      if (isPlainObject(attrs)) {
        return Document.fromJSON(attrs);
      }

      throw new Error('`Document.create` only accepts objects, arrays, lists or documents, but you passed it: ' + attrs);
    }

    /**
     * Create a `Document` from a JSON `object`.
     *
     * @param {Object|Document} object
     * @return {Document}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Document.isDocument(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes;


      var document = new Document({
        key: key,
        data: new immutable.Map(data),
        nodes: Node.createList(nodes)
      });

      return document;
    }
  }]);
  return Document;
}(immutable.Record(DEFAULTS));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$1 = {
  data: undefined,
  key: undefined,
  nodes: undefined,
  type: undefined

  /**
   * Inline.
   *
   * @type {Inline}
   */

};
var Inline = function (_Record) {
  inherits(Inline, _Record);

  function Inline() {
    classCallCheck(this, Inline);
    return possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  createClass(Inline, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the inline.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Inline` with `attrs`.
     *
     * @param {Object|String|Inline} attrs
     * @return {Inline}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Inline.isInline(attrs)) {
        return attrs;
      }

      if (typeof attrs === 'string') {
        attrs = { type: attrs };
      }

      if (isPlainObject(attrs)) {
        return Inline.fromJSON(attrs);
      }

      throw new Error('`Inline.create` only accepts objects, strings or inlines, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Inlines` from an array.
     *
     * @param {Array<Inline|Object>|List<Inline|Object>} elements
     * @return {List<Inline>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(elements) || Array.isArray(elements)) {
        var list = new immutable.List(elements.map(Inline.create));
        return list;
      }

      throw new Error('`Inline.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Inline` from a JSON `object`.
     *
     * @param {Object|Inline} object
     * @return {Inline}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Inline.isInline(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes,
          type = object.type;


      if (typeof type !== 'string') {
        throw new Error('`Inline.fromJS` requires a `type` string.');
      }

      var inline = new Inline({
        key: key,
        type: type,
        data: new immutable.Map(data),
        nodes: Node.createList(nodes)
      });

      return inline;
    }

    /**
     * Check if `any` is a list of inlines.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isInlineList',
    value: function isInlineList(any) {
      return immutable.List.isList(any) && any.every(function (item) {
        return Inline.isInline(item);
      });
    }
  }]);
  return Inline;
}(immutable.Record(DEFAULTS$1));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$2 = {
  data: undefined,
  type: undefined

  /**
   * Mark.
   *
   * @type {Mark}
   */

};
var Mark = function (_Record) {
  inherits(Mark, _Record);

  function Mark() {
    classCallCheck(this, Mark);
    return possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).apply(this, arguments));
  }

  createClass(Mark, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the mark.
     *
     * @return {Object}
     */

    value: function toJSON() {
      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON()
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Mark` with `attrs`.
     *
     * @param {Object|Mark} attrs
     * @return {Mark}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Mark.isMark(attrs)) {
        return attrs;
      }

      if (typeof attrs === 'string') {
        attrs = { type: attrs };
      }

      if (isPlainObject(attrs)) {
        return Mark.fromJSON(attrs);
      }

      throw new Error('`Mark.create` only accepts objects, strings or marks, but you passed it: ' + attrs);
    }

    /**
     * Create a set of marks.
     *
     * @param {Array<Object|Mark>} elements
     * @return {Set<Mark>}
     */

  }, {
    key: 'createSet',
    value: function createSet(elements) {
      if (immutable.Set.isSet(elements) || Array.isArray(elements)) {
        var marks = new immutable.Set(elements.map(Mark.create));
        return marks;
      }

      if (elements == null) {
        return immutable.Set();
      }

      throw new Error('`Mark.createSet` only accepts sets, arrays or null, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable mark properties from `attrs`.
     *
     * @param {Object|String|Mark} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Mark.isMark(attrs)) {
        return {
          data: attrs.data,
          type: attrs.type
        };
      }

      if (typeof attrs === 'string') {
        return { type: attrs };
      }

      if (isPlainObject(attrs)) {
        var props = {};
        if ('type' in attrs) props.type = attrs.type;
        if ('data' in attrs) props.data = Data.create(attrs.data);
        return props;
      }

      throw new Error('`Mark.createProperties` only accepts objects, strings or marks, but you passed it: ' + attrs);
    }

    /**
     * Create a `Mark` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Mark}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          type = object.type;


      if (typeof type !== 'string') {
        throw new Error('`Mark.fromJS` requires a `type` string.');
      }

      var mark = new Mark({
        type: type,
        data: new immutable.Map(data)
      });

      return mark;
    }

    /**
     * Check if `any` is a set of marks.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isMarkSet',
    value: function isMarkSet(any) {
      return immutable.Set.isSet(any) && any.every(function (item) {
        return Mark.isMark(item);
      });
    }
  }]);
  return Mark;
}(immutable.Record(DEFAULTS$2));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$3 = {
  marks: undefined,
  text: undefined

  /**
   * Leaf.
   *
   * @type {Leaf}
   */

};
var Leaf = function (_Record) {
  inherits(Leaf, _Record);

  function Leaf() {
    classCallCheck(this, Leaf);
    return possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).apply(this, arguments));
  }

  createClass(Leaf, [{
    key: 'updateMark',


    /**
     * Update a `mark` at leaf, replace with newMark
     *
     * @param {Mark} mark
     * @param {Mark} newMark
     * @returns {Leaf}
     */

    value: function updateMark(mark, newMark) {
      var marks = this.marks;

      if (newMark.equals(mark)) return this;
      if (!marks.has(mark)) return this;
      var newMarks = marks.withMutations(function (collection) {
        collection.remove(mark).add(newMark);
      });
      return this.set('marks', newMarks);
    }

    /**
     * Add a `mark` to the leaf.
     *
     * @param {Mark} mark
     * @returns {Text}
     */

  }, {
    key: 'addMark',
    value: function addMark(mark) {
      var marks = this.marks;

      return this.set('marks', marks.add(mark));
    }

    /**
     * Add a `set` of marks to the leaf.
     *
     * @param {Set<Mark>} set
     * @returns {Text}
     */

  }, {
    key: 'addMarks',
    value: function addMarks(set$$1) {
      var marks = this.marks;

      return this.set('marks', marks.union(set$$1));
    }

    /**
     * Insert a text `string` into the leaf at `offset`.
     *
     * @param {Number} offset
     * @param {String} string
     * @return {Leaf}
     */

  }, {
    key: 'insertText',
    value: function insertText(offset, string) {
      var text = this.text;

      var next = text.slice(0, offset) + string + text.slice(offset);
      return this.set('text', next);
    }

    /**
     * Remove a `mark` from the leaf.
     *
     * @param {Mark} mark
     * @returns {Text}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(mark) {
      var marks = this.marks;

      return this.set('marks', marks.remove(mark));
    }

    /**
     * Return a JSON representation of the leaf.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        text: this.text,
        marks: this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Leaf` with `attrs`.
     *
     * @param {Object|Leaf} attrs
     * @return {Leaf}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Leaf.isLeaf(attrs)) {
        return attrs;
      }

      if (typeof attrs === 'string') {
        attrs = { text: attrs };
      }

      if (isPlainObject(attrs)) {
        return Leaf.fromJSON(attrs);
      }

      throw new Error('`Leaf.create` only accepts objects, strings or leaves, but you passed it: ' + attrs);
    }

    /**
     * Create a valid List of `Leaf` from `leaves`
     *
     * @param {List<Leaf>} leaves
     * @return {List<Leaf>}
     */

  }, {
    key: 'createLeaves',
    value: function createLeaves(leaves) {
      if (leaves.size <= 1) return leaves;

      var invalid = false;

      // TODO: we can make this faster with [List] and then flatten
      var result = immutable.List().withMutations(function (cache) {
        // Search from the leaves left end to find invalid node;
        leaves.findLast(function (leaf, index) {
          var firstLeaf = cache.first();

          // If the first leaf of cache exist, check whether the first leaf is connectable with the current leaf
          if (firstLeaf) {
            // If marks equals, then the two leaves can be connected
            if (firstLeaf.marks.equals(leaf.marks)) {
              invalid = true;
              cache.set(0, firstLeaf.set('text', '' + leaf.text + firstLeaf.text));
              return;
            }

            // If the cached leaf is empty, drop the empty leaf with the upcoming leaf
            if (firstLeaf.text === '') {
              invalid = true;
              cache.set(0, leaf);
              return;
            }

            // If the current leaf is empty, drop the leaf
            if (leaf.text === '') {
              invalid = true;
              return;
            }
          }

          cache.unshift(leaf);
        });
      });

      if (!invalid) return leaves;
      return result;
    }

    /**
     * Split a list of leaves to two lists; if the leaves are valid leaves, the returned leaves are also valid
     * Corner Cases:
     *   1. if offset is smaller than 0, then return [List(), leaves]
     *   2. if offset is bigger than the text length, then return [leaves, List()]
     *
     * @param {List<Leaf> leaves
     * @return {Array<List<Leaf>>}
     */

  }, {
    key: 'splitLeaves',
    value: function splitLeaves(leaves, offset) {
      if (offset < 0) return [immutable.List(), leaves];

      if (leaves.size === 0) {
        return [immutable.List(), immutable.List()];
      }

      var endOffset = 0;
      var index = -1;
      var left = void 0,
          right = void 0;

      leaves.find(function (leaf) {
        index++;
        var startOffset = endOffset;
        var text = leaf.text;

        endOffset += text.length;

        if (endOffset < offset) return false;
        if (startOffset > offset) return false;

        var length = offset - startOffset;
        left = leaf.set('text', text.slice(0, length));
        right = leaf.set('text', text.slice(length));
        return true;
      });

      if (!left) return [leaves, immutable.List()];

      if (left.text === '') {
        if (index === 0) {
          return [immutable.List.of(left), leaves];
        }

        return [leaves.take(index), leaves.skip(index)];
      }

      if (right.text === '') {
        if (index === leaves.size - 1) {
          return [leaves, immutable.List.of(right)];
        }

        return [leaves.take(index + 1), leaves.skip(index + 1)];
      }

      return [leaves.take(index).push(left), leaves.skip(index + 1).unshift(right)];
    }

    /**
     * Create a `Leaf` list from `attrs`.
     *
     * @param {Array<Leaf|Object>|List<Leaf|Object>} attrs
     * @return {List<Leaf>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(attrs) || Array.isArray(attrs)) {
        var list = new immutable.List(attrs.map(Leaf.create));
        return list;
      }

      throw new Error('`Leaf.createList` only accepts arrays or lists, but you passed it: ' + attrs);
    }

    /**
     * Create a `Leaf` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Leaf}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$text = object.text,
          text = _object$text === undefined ? '' : _object$text,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? [] : _object$marks;


      var leaf = new Leaf({
        text: text,
        marks: immutable.Set(marks.map(Mark.fromJSON))
      });

      return leaf;
    }

    /**
     * Check if `any` is a list of leaves.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isLeafList',
    value: function isLeafList(any) {
      return immutable.List.isList(any) && any.every(function (item) {
        return Leaf.isLeaf(item);
      });
    }
  }]);
  return Leaf;
}(immutable.Record(DEFAULTS$3));

/* global WeakMap, Map, Symbol */

/**
 * GLOBAL: True if memoization should is enabled.
 *
 * @type {Boolean}
 */

var ENABLED = true;

/**
 * The leaf node of a cache tree. Used to support variable argument length. A
 * unique object, so that native Maps will key it by reference.
 *
 * @type {Symbol}
 */

var LEAF = Symbol('LEAF');

/**
 * The node of a cache tree for a WeakMap to store cache visited by objects
 *
 * @type {Symbol}
 */

var STORE_KEY = Symbol('STORE_KEY');

/**
 * Values to represent a memoized undefined and null value. Allows efficient value
 * retrieval using Map.get only.
 *
 * @type {Symbol}
 */

var UNDEFINED = Symbol('undefined');
var NULL = Symbol('null');

/**
 * Default value for unset keys in native Maps
 *
 * @type {Undefined}
 */

var UNSET = undefined;

/**
 * Global Store for all cached values
 *
 * @type {WeakMap}
 */

var memoizeStore = new WeakMap();

/**
 * Memoize all of the `properties` on a `object`.
 *
 * @param {Object} object
 * @param {Array} properties
 * @return {Record}
 */

function memoize(object, properties) {
  var _loop = function _loop(property) {
    var original = object[property];

    if (!original) {
      throw new Error('Object does not have a property named "' + property + '".');
    }

    object[property] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // If memoization is disabled, call into the original method.
      if (!ENABLED) return original.apply(this, args);

      if (!memoizeStore.has(this)) {
        memoizeStore.set(this, {
          noArgs: {},
          hasArgs: {}
        });
      }

      var _memoizeStore$get = memoizeStore.get(this),
          noArgs = _memoizeStore$get.noArgs,
          hasArgs = _memoizeStore$get.hasArgs;

      var takesArguments = args.length !== 0;

      var cachedValue = void 0;
      var keys = void 0;

      if (takesArguments) {
        keys = [property].concat(args);
        cachedValue = getIn(hasArgs, keys);
      } else {
        cachedValue = noArgs[property];
      }

      // If we've got a result already, return it.
      if (cachedValue !== UNSET) {
        return cachedValue === UNDEFINED ? undefined : cachedValue;
      }

      // Otherwise calculate what it should be once and cache it.
      var value = original.apply(this, args);
      var v = value === undefined ? UNDEFINED : value;

      if (takesArguments) {
        setIn(hasArgs, keys, v);
      } else {
        noArgs[property] = v;
      }

      return value;
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      _loop(property);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Get a value at a key path in a tree of Map.
 *
 * If not set, returns UNSET.
 * If the set value is undefined, returns UNDEFINED.
 *
 * @param {Map} map
 * @param {Array} keys
 * @return {Any|UNSET|UNDEFINED}
 */

function getIn(map, keys) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      if (key === undefined) {
        key = UNDEFINED;
      } else if (key == null) {
        key = NULL;
      }

      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        map = map[STORE_KEY] && map[STORE_KEY].get(key);
      } else {
        map = map[key];
      }

      if (map === UNSET) return UNSET;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return map[LEAF];
}

/**
 * Set a value at a key path in a tree of Map, creating Maps on the go.
 *
 * @param {Map} map
 * @param {Array} keys
 * @param {Any} value
 * @return {Map}
 */

function setIn(map, keys, value) {
  var child = map;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      if (key === undefined) {
        key = UNDEFINED;
      } else if (key == null) {
        key = NULL;
      }

      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== 'object') {
        if (!child[key]) {
          child[key] = {};
        }

        child = child[key];
        continue;
      }

      if (!child[STORE_KEY]) {
        child[STORE_KEY] = new WeakMap();
      }

      if (!child[STORE_KEY].has(key)) {
        var newChild = {};
        child[STORE_KEY].set(key, newChild);
        child = newChild;
        continue;
      }

      child = child[STORE_KEY].get(key);
    }

    // The whole path has been created, so set the value to the bottom most map.
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  child[LEAF] = value;
  return map;
}

/**
 * In DEV mode, clears the previously memoized values, globally.
 *
 * @return {Void}
 */

function resetMemoization() {
  memoizeStore = new WeakMap();
}

/**
 * In DEV mode, enable or disable the use of memoize values, globally.
 *
 * @param {Boolean} enabled
 * @return {Void}
 */

function useMemoization(enabled) {
  ENABLED = enabled;
}

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$4 = {
  leaves: undefined,
  key: undefined

  /**
   * Text.
   *
   * @type {Text}
   */

};
var Text = function (_Record) {
  inherits(Text, _Record);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'searchLeafAtOffset',


    /**
     * Find the 'first' leaf at offset; By 'first' the alorighthm prefers `endOffset === offset` than `startOffset === offset`
     * Corner Cases:
     *   1. if offset is negative, return the first leaf;
     *   2. if offset is larger than text length, the leaf is null, startOffset, endOffset and index is of the last leaf
     *
     * @param {number}
     * @returns {Object}
     *   @property {number} startOffset
     *   @property {number} endOffset
     *   @property {number} index
     *   @property {Leaf} leaf
     */

    value: function searchLeafAtOffset(offset) {
      var endOffset = 0;
      var startOffset = 0;
      var index$$1 = -1;

      var leaf = this.leaves.find(function (l) {
        index$$1++;
        startOffset = endOffset;
        endOffset = startOffset + l.text.length;
        return endOffset >= offset;
      });

      return {
        leaf: leaf,
        endOffset: endOffset,
        index: index$$1,
        startOffset: startOffset
      };
    }

    /**
     * Add a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */

  }, {
    key: 'addMark',
    value: function addMark(index$$1, length, mark) {
      var marks = immutable.Set.of(mark);
      return this.addMarks(index$$1, length, marks);
    }

    /**
     * Add a `set` of marks at `index` and `length`.
     * Corner Cases:
     *   1. If empty text, and if length === 0 and index === 0, will make sure the text contain an empty leaf with the given mark.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Set<Mark>} set
     * @return {Text}
     */

  }, {
    key: 'addMarks',
    value: function addMarks(index$$1, length, set$$1) {
      if (this.text === '' && length === 0 && index$$1 === 0) {
        var _leaves = this.leaves;

        var first = _leaves.first();

        if (!first) {
          return this.set('leaves', immutable.List.of(Leaf.fromJSON({ text: '', marks: set$$1 })));
        }

        var newFirst = first.addMarks(set$$1);
        if (newFirst === first) return this;
        return this.set('leaves', immutable.List.of(newFirst));
      }

      if (this.text === '') return this;
      if (length === 0) return this;
      if (index$$1 >= this.text.length) return this;

      var _Leaf$splitLeaves = Leaf.splitLeaves(this.leaves, index$$1),
          _Leaf$splitLeaves2 = slicedToArray(_Leaf$splitLeaves, 2),
          before = _Leaf$splitLeaves2[0],
          bundle = _Leaf$splitLeaves2[1];

      var _Leaf$splitLeaves3 = Leaf.splitLeaves(bundle, length),
          _Leaf$splitLeaves4 = slicedToArray(_Leaf$splitLeaves3, 2),
          middle = _Leaf$splitLeaves4[0],
          after = _Leaf$splitLeaves4[1];

      var leaves = before.concat(middle.map(function (x) {
        return x.addMarks(set$$1);
      }), after);
      return this.setLeaves(leaves);
    }

    /**
     * Derive the leaves for a list of `decorations`.
     *
     * @param {List} decorations (optional)
     * @return {List<Leaf>}
     */

  }, {
    key: 'getLeaves',
    value: function getLeaves(decorations) {
      var leaves = this.leaves;

      // PERF: We can exit early without decorations.

      if (!decorations || decorations.size === 0) return leaves;

      // HACK: We shouldn't need this, because text nodes should never be in a
      // position of not having any leaves...
      if (leaves.size === 0) {
        var marks = decorations.map(function (d) {
          return d.mark;
        });
        var leaf = Leaf.create({ marks: marks });
        return immutable.List([leaf]);
      }

      // HACK: this shouldn't be necessary, because the loop below should handle
      // the `0` case without failures. It may already even, not sure.
      if (this.text.length === 0) {
        var _marks = decorations.map(function (d) {
          return d.mark;
        });
        var _leaf = Leaf.create({ marks: _marks });
        return immutable.List([_leaf]);
      }

      var key = this.key,
          text = this.text;


      decorations.forEach(function (dec) {
        var start = dec.start,
            end = dec.end,
            mark = dec.mark;

        var hasStart = start.key === key;
        var hasEnd = end.key === key;

        if (hasStart && hasEnd) {
          var index$$1 = hasStart ? start.offset : 0;
          var length = hasEnd ? end.offset - index$$1 : text.length - index$$1;

          if (length < 1) return;
          if (index$$1 >= text.length) return;

          if (index$$1 !== 0 || length < text.length) {
            var _Leaf$splitLeaves5 = Leaf.splitLeaves(leaves, index$$1),
                _Leaf$splitLeaves6 = slicedToArray(_Leaf$splitLeaves5, 2),
                before = _Leaf$splitLeaves6[0],
                bundle = _Leaf$splitLeaves6[1];

            var _Leaf$splitLeaves7 = Leaf.splitLeaves(bundle, length),
                _Leaf$splitLeaves8 = slicedToArray(_Leaf$splitLeaves7, 2),
                middle = _Leaf$splitLeaves8[0],
                after = _Leaf$splitLeaves8[1];

            leaves = before.concat(middle.map(function (x) {
              return x.addMark(mark);
            }), after);
            return;
          }
        }

        leaves = leaves.map(function (x) {
          return x.addMark(mark);
        });
      });

      if (leaves === this.leaves) return leaves;
      return Leaf.createLeaves(leaves);
    }

    /**
     * Get all of the active marks on between two offsets
     * Corner Cases:
     *   1. if startOffset is equal or bigger than endOffset, then return Set();
     *   2. If no text is selected between start and end, then return Set()
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarksBetweenOffsets',
    value: function getActiveMarksBetweenOffsets(startOffset, endOffset) {
      if (startOffset <= 0 && endOffset >= this.text.length) {
        return this.getActiveMarks();
      }

      if (startOffset >= endOffset) return immutable.Set();
      // For empty text in a paragraph, use getActiveMarks;
      if (this.text === '') return this.getActiveMarks();

      var result = null;
      var leafEnd = 0;

      this.leaves.forEach(function (leaf) {
        var leafStart = leafEnd;
        leafEnd = leafStart + leaf.text.length;

        if (leafEnd <= startOffset) return;
        if (leafStart >= endOffset) return false;

        if (!result) {
          result = leaf.marks;
          return;
        }

        result = result.intersect(leaf.marks);
        if (result && result.size === 0) return false;
        return false;
      });

      return result || immutable.Set();
    }

    /**
     * Get all of the active marks on the text
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarks',
    value: function getActiveMarks() {
      var _this2 = this;

      if (this.leaves.size === 0) return immutable.Set();

      var result = this.leaves.first().marks;
      if (result.size === 0) return result;

      return result.toOrderedSet().withMutations(function (x) {
        _this2.leaves.forEach(function (c) {
          x.intersect(c.marks);
          if (x.size === 0) return false;
        });
      });
    }

    /**
     * Get all of the marks on between two offsets
     * Corner Cases:
     *   1. if startOffset is equal or bigger than endOffset, then return Set();
     *   2. If no text is selected between start and end, then return Set()
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getMarksBetweenOffsets',
    value: function getMarksBetweenOffsets(startOffset, endOffset) {
      if (startOffset <= 0 && endOffset >= this.text.length) {
        return this.getMarks();
      }

      if (startOffset >= endOffset) return immutable.Set();
      // For empty text in a paragraph, use getActiveMarks;
      if (this.text === '') return this.getActiveMarks();

      var result = null;
      var leafEnd = 0;

      this.leaves.forEach(function (leaf) {
        var leafStart = leafEnd;
        leafEnd = leafStart + leaf.text.length;

        if (leafEnd <= startOffset) return;
        if (leafStart >= endOffset) return false;

        if (!result) {
          result = leaf.marks;
          return;
        }

        result = result.union(leaf.marks);
      });

      return result || immutable.Set();
    }

    /**
     * Get all of the marks on the text.
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getMarks',
    value: function getMarks() {
      var array = this.getMarksAsArray();
      return new immutable.OrderedSet(array);
    }

    /**
     * Get all of the marks on the text as an array
     *
     * @return {Array}
     */

  }, {
    key: 'getMarksAsArray',
    value: function getMarksAsArray() {
      if (this.leaves.size === 0) return [];
      var first = this.leaves.first().marks;
      if (this.leaves.size === 1) return first.toArray();

      var result = [];

      this.leaves.forEach(function (leaf) {
        result.push(leaf.marks.toArray());
      });

      return Array.prototype.concat.apply(first.toArray(), result);
    }

    /**
     * Get the marks on the text at `index`.
     * Corner Cases:
     *   1. if no text is before the index, and index !== 0, then return Set()
     *   2. (for insert after split node or mark at range) if index === 0, and text === '', then return the leaf.marks
     *   3. if index === 0, text !== '', return Set()
     *
     *
     * @param {Number} index
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksAtIndex',
    value: function getMarksAtIndex(index$$1) {
      var _searchLeafAtOffset = this.searchLeafAtOffset(index$$1),
          leaf = _searchLeafAtOffset.leaf;

      if (!leaf) return immutable.Set();
      return leaf.marks;
    }

    /**
     * Insert `text` at `index`.
     *
     * @param {Numbder} offset
     * @param {String} text
     * @param {Set} marks (optional)
     * @return {Text}
     */

  }, {
    key: 'insertText',
    value: function insertText(offset, text, marks) {
      if (this.text === '') {
        return this.set('leaves', immutable.List.of(Leaf.create({ text: text, marks: marks })));
      }

      if (text.length === 0) return this;
      if (!marks) marks = immutable.Set();

      var _searchLeafAtOffset2 = this.searchLeafAtOffset(offset),
          startOffset = _searchLeafAtOffset2.startOffset,
          leaf = _searchLeafAtOffset2.leaf,
          index$$1 = _searchLeafAtOffset2.index;

      var delta = offset - startOffset;
      var beforeText = leaf.text.slice(0, delta);
      var afterText = leaf.text.slice(delta);
      var leaves = this.leaves;


      if (leaf.marks.equals(marks)) {
        return this.set('leaves', leaves.set(index$$1, leaf.set('text', beforeText + text + afterText)));
      }

      var nextLeaves = leaves.splice(index$$1, 1, leaf.set('text', beforeText), Leaf.create({ text: text, marks: marks }), leaf.set('text', afterText));

      return this.setLeaves(nextLeaves);
    }

    /**
     * Remove a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(index$$1, length, mark) {
      if (this.text === '' && index$$1 === 0 && length === 0) {
        var first = this.leaves.first();
        if (!first) return this;
        var newFirst = first.removeMark(mark);
        if (newFirst === first) return this;
        return this.set('leaves', immutable.List.of(newFirst));
      }

      if (length <= 0) return this;
      if (index$$1 >= this.text.length) return this;

      var _Leaf$splitLeaves9 = Leaf.splitLeaves(this.leaves, index$$1),
          _Leaf$splitLeaves10 = slicedToArray(_Leaf$splitLeaves9, 2),
          before = _Leaf$splitLeaves10[0],
          bundle = _Leaf$splitLeaves10[1];

      var _Leaf$splitLeaves11 = Leaf.splitLeaves(bundle, length),
          _Leaf$splitLeaves12 = slicedToArray(_Leaf$splitLeaves11, 2),
          middle = _Leaf$splitLeaves12[0],
          after = _Leaf$splitLeaves12[1];

      var leaves = before.concat(middle.map(function (x) {
        return x.removeMark(mark);
      }), after);
      return this.setLeaves(leaves);
    }

    /**
     * Remove text from the text node at `start` for `length`.
     *
     * @param {Number} start
     * @param {Number} length
     * @return {Text}
     */

  }, {
    key: 'removeText',
    value: function removeText(start, length) {
      if (length <= 0) return this;
      if (start >= this.text.length) return this;

      // PERF: For simple backspace, we can operate directly on the leaf
      if (length === 1) {
        var _searchLeafAtOffset3 = this.searchLeafAtOffset(start + 1),
            leaf = _searchLeafAtOffset3.leaf,
            index$$1 = _searchLeafAtOffset3.index,
            startOffset = _searchLeafAtOffset3.startOffset;

        var offset = start - startOffset;

        if (leaf) {
          if (leaf.text.length === 1) {
            var _leaves2 = this.leaves.remove(index$$1);
            return this.setLeaves(_leaves2);
          }

          var beforeText = leaf.text.slice(0, offset);
          var afterText = leaf.text.slice(offset + length);
          var text = beforeText + afterText;

          if (text.length > 0) {
            return this.set('leaves', this.leaves.set(index$$1, leaf.set('text', text)));
          }
        }
      }

      var _Leaf$splitLeaves13 = Leaf.splitLeaves(this.leaves, start),
          _Leaf$splitLeaves14 = slicedToArray(_Leaf$splitLeaves13, 2),
          before = _Leaf$splitLeaves14[0],
          bundle = _Leaf$splitLeaves14[1];

      var after = Leaf.splitLeaves(bundle, length)[1];
      var leaves = Leaf.createLeaves(before.concat(after));

      if (leaves.size === 1) {
        var first = leaves.first();

        if (first.text === '') {
          return this.set('leaves', immutable.List.of(first.set('marks', this.getActiveMarks())));
        }
      }

      return this.set('leaves', leaves);
    }

    /**
     * Return a JSON representation of the text.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        leaves: this.getLeaves().toArray().map(function (r) {
          return r.toJSON();
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }

    /**
     * Update a `mark` at `index` and `length` with `properties`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Object} properties
     * @param {Object} newProperties
     * @return {Text}
     */

  }, {
    key: 'updateMark',
    value: function updateMark(index$$1, length, properties, newProperties) {
      var mark = Mark.create(properties);
      var newMark = mark.merge(newProperties);

      if (this.text === '' && length === 0 && index$$1 === 0) {
        var _leaves3 = this.leaves;

        var first = _leaves3.first();
        if (!first) return this;
        var newFirst = first.updateMark(mark, newMark);
        if (newFirst === first) return this;
        return this.set('leaves', immutable.List.of(newFirst));
      }

      if (length <= 0) return this;
      if (index$$1 >= this.text.length) return this;

      var _Leaf$splitLeaves15 = Leaf.splitLeaves(this.leaves, index$$1),
          _Leaf$splitLeaves16 = slicedToArray(_Leaf$splitLeaves15, 2),
          before = _Leaf$splitLeaves16[0],
          bundle = _Leaf$splitLeaves16[1];

      var _Leaf$splitLeaves17 = Leaf.splitLeaves(bundle, length),
          _Leaf$splitLeaves18 = slicedToArray(_Leaf$splitLeaves17, 2),
          middle = _Leaf$splitLeaves18[0],
          after = _Leaf$splitLeaves18[1];

      var leaves = before.concat(middle.map(function (x) {
        return x.updateMark(mark, newMark);
      }), after);

      return this.setLeaves(leaves);
    }

    /**
     * Split this text and return two different texts
     * @param {Number} position
     * @returns {Array<Text>}
     */

  }, {
    key: 'splitText',
    value: function splitText(offset) {
      var splitted = Leaf.splitLeaves(this.leaves, offset);
      var one = this.set('leaves', splitted[0]);
      var two = this.set('leaves', splitted[1]).regenerateKey();
      return [one, two];
    }

    /**
     * merge this text and another text at the end
     * @param {Text} text
     * @returns {Text}
     */

  }, {
    key: 'mergeText',
    value: function mergeText(text) {
      var leaves = this.leaves.concat(text.leaves);
      return this.setLeaves(leaves);
    }

    /**
     * Set leaves with normalized `leaves`
     *
     * @param {List} leaves
     * @returns {Text}
     */

  }, {
    key: 'setLeaves',
    value: function setLeaves(leaves) {
      leaves = Leaf.createLeaves(leaves);

      if (leaves.size === 1) {
        var first = leaves.first();

        if (!first.marks || first.marks.size === 0) {
          if (first.text === '') {
            return this.set('leaves', immutable.List([Leaf.create()]));
          }
        }
      }

      if (leaves.size === 0) {
        leaves = leaves.push(Leaf.create());
      }

      return this.set('leaves', leaves);
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Text` with `attrs`.
     *
     * @param {Object|Array|List|String|Text} attrs
     * @return {Text}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (Text.isText(attrs)) {
        return attrs;
      }

      if (typeof attrs === 'string') {
        attrs = { leaves: [{ text: attrs }] };
      }

      if (isPlainObject(attrs)) {
        if (attrs.text) {
          var _attrs = attrs,
              text = _attrs.text,
              marks = _attrs.marks,
              key = _attrs.key;

          attrs = { key: key, leaves: [{ text: text, marks: marks }] };
        }

        return Text.fromJSON(attrs);
      }

      throw new Error('`Text.create` only accepts objects, arrays, strings or texts, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Texts` from `elements`.
     *
     * @param {Array<Text|Object>|List<Text|Object>} elements
     * @return {List<Text>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(elements) || Array.isArray(elements)) {
        var list = new immutable.List(elements.map(Text.create));
        return list;
      }

      throw new Error('`Text.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Text` from a JSON `object`.
     *
     * @param {Object|Text} object
     * @return {Text}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Text.isText(object)) {
        return object;
      }

      var _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key;
      var leaves = object.leaves;


      if (!leaves) {
        if (object.ranges) {
          index(false, 'As of slate@0.27.0, the `ranges` property of Slate objects has been renamed to `leaves`.');

          leaves = object.ranges;
        } else {
          leaves = immutable.List();
        }
      }

      if (Array.isArray(leaves)) {
        leaves = immutable.List(leaves.map(function (x) {
          return Leaf.create(x);
        }));
      } else if (immutable.List.isList(leaves)) {
        leaves = leaves.map(function (x) {
          return Leaf.create(x);
        });
      } else {
        throw new Error('leaves must be either Array or Immutable.List');
      }

      if (leaves.size === 0) {
        leaves = leaves.push(Leaf.create());
      }

      var node = new Text({
        leaves: Leaf.createLeaves(leaves),
        key: key
      });

      return node;
    }

    /**
     * Check if `any` is a list of texts.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isTextList',
    value: function isTextList(any) {
      return immutable.List.isList(any) && any.every(function (item) {
        return Text.isText(item);
      });
    }
  }]);
  return Text;
}(immutable.Record(DEFAULTS$4));

/**
 * Memoize read methods.
 */

memoize(Text.prototype, ['getActiveMarks', 'getMarks', 'getMarksAsArray']);

/**
 * A pseudo-model that is used for its static methods only.
 *
 * @type {Node}
 */

var Node = function () {
  function Node() {
    classCallCheck(this, Node);
  }

  createClass(Node, null, [{
    key: 'create',

    /**
     * Create a new `Node` with `attrs`.
     *
     * @param {Object|Node} attrs
     * @return {Node}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Node.isNode(attrs)) {
        return attrs;
      }

      if (isPlainObject(attrs)) {
        var object = attrs.object;


        if (!object && attrs.kind) {
          index(false, 'As of slate@0.32.0, the `kind` property of Slate objects has been renamed to `object`.');

          object = attrs.kind;
        }

        switch (object) {
          case 'block':
            return Block.create(attrs);
          case 'document':
            return Document.create(attrs);
          case 'inline':
            return Inline.create(attrs);
          case 'text':
            return Text.create(attrs);

          default:
            {
              throw new Error('`Node.create` requires a `object` string.');
            }
        }
      }

      throw new Error('`Node.create` only accepts objects or nodes but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Nodes` from an array.
     *
     * @param {Array<Object|Node>} elements
     * @return {List<Node>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(elements) || Array.isArray(elements)) {
        var list = immutable.List(elements.map(Node.create));
        return list;
      }

      throw new Error('`Node.createList` only accepts lists or arrays, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable node properties from `attrs`.
     *
     * @param {Object|String|Node} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Block.isBlock(attrs) || Inline.isInline(attrs)) {
        return {
          data: attrs.data,
          type: attrs.type
        };
      }

      if (typeof attrs === 'string') {
        return { type: attrs };
      }

      if (isPlainObject(attrs)) {
        var props = {};
        if ('type' in attrs) props.type = attrs.type;
        if ('data' in attrs) props.data = Data.create(attrs.data);
        return props;
      }

      throw new Error('`Node.createProperties` only accepts objects, strings, blocks or inlines, but you passed it: ' + attrs);
    }

    /**
     * Create a `Node` from a JSON `value`.
     *
     * @param {Object} value
     * @return {Node}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(value) {
      var object = value.object;


      if (!object && value.kind) {
        index(false, 'As of slate@0.32.0, the `kind` property of Slate objects has been renamed to `object`.');

        object = value.kind;
      }

      switch (object) {
        case 'block':
          return Block.fromJSON(value);
        case 'document':
          return Document.fromJSON(value);
        case 'inline':
          return Inline.fromJSON(value);
        case 'text':
          return Text.fromJSON(value);

        default:
          {
            throw new Error('`Node.fromJSON` requires an `object` of either \'block\', \'document\', \'inline\' or \'text\', but you passed: ' + value);
          }
      }
    }

    /**
     * Check if `any` is a `Node`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isNode',
    value: function isNode(any) {
      return Block.isBlock(any) || Document.isDocument(any) || Inline.isInline(any) || Text.isText(any);
    }

    /**
     * Check if `any` is a list of nodes.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isNodeList',
    value: function isNodeList(any) {
      return immutable.List.isList(any) && any.every(function (item) {
        return Node.isNode(item);
      });
    }
  }]);
  return Node;
}();

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$5 = {
  data: undefined,
  key: undefined,
  nodes: undefined,
  type: undefined

  /**
   * Block.
   *
   * @type {Block}
   */

};
var Block = function (_Record) {
  inherits(Block, _Record);

  function Block() {
    classCallCheck(this, Block);
    return possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  createClass(Block, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the block.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Block` from `attrs`.
     *
     * @param {Object|String|Block} attrs
     * @return {Block}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Block.isBlock(attrs)) {
        return attrs;
      }

      if (typeof attrs === 'string') {
        attrs = { type: attrs };
      }

      if (isPlainObject(attrs)) {
        return Block.fromJSON(attrs);
      }

      throw new Error('`Block.create` only accepts objects, strings or blocks, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Blocks` from `attrs`.
     *
     * @param {Array<Block|Object>|List<Block|Object>} attrs
     * @return {List<Block>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(attrs) || Array.isArray(attrs)) {
        var list = new immutable.List(attrs.map(Block.create));
        return list;
      }

      throw new Error('`Block.createList` only accepts arrays or lists, but you passed it: ' + attrs);
    }

    /**
     * Create a `Block` from a JSON `object`.
     *
     * @param {Object|Block} object
     * @return {Block}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Block.isBlock(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes,
          type = object.type;


      if (typeof type !== 'string') {
        throw new Error('`Block.fromJSON` requires a `type` string.');
      }

      var block = new Block({
        key: key,
        type: type,
        data: immutable.fromJS(data),
        nodes: Node.createList(nodes)
      });

      return block;
    }

    /**
     * Check if `any` is a block list.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isBlockList',
    value: function isBlockList(any) {
      return immutable.List.isList(any) && any.every(function (item) {
        return Block.isBlock(item);
      });
    }
  }]);
  return Block;
}(immutable.Record(DEFAULTS$5));

/**
 * Compare paths `path` and `target` to see which is before or after.
 *
 * @param {List} path
 * @param {List} target
 * @return {Number|Null}
 */

function compare(path, target) {
  var m = min(path, target);

  for (var i = 0; i < m; i++) {
    var pv = path.get(i);
    var tv = target.get(i);

    // If the path's value is ever less than the target's, it's before.
    if (pv < tv) return -1;

    // If the target's value is ever less than the path's, it's after.
    if (pv > tv) return 1;
  }

  // Paths should now be equal, otherwise something is wrong
  return path.size === target.size ? 0 : null;
}

/**
 * Create a path from `attrs`.
 *
 * @param {Array|List} attrs
 * @return {List}
 */

function create$1(attrs) {
  if (attrs == null) {
    return null;
  }

  if (immutable.List.isList(attrs)) {
    return attrs;
  }

  if (Array.isArray(attrs)) {
    return immutable.List(attrs);
  }

  throw new Error('Paths can only be created from arrays or lists, but you passed: ' + attrs);
}

/**
 * Crop paths `a` and `b` to an equal size, defaulting to the shortest.
 *
 * @param {List} a
 * @param {List} b
 */

function crop(a, b) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : min(a, b);

  var ca = a.slice(0, size);
  var cb = b.slice(0, size);
  return [ca, cb];
}

/**
 * Decrement a `path` by `n` at `index`, defaulting to the last index.
 *
 * @param {List} path
 * @param {Number} n
 * @param {Number} index
 */

function decrement(path) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.size - 1;

  return increment(path, 0 - n, index);
}

/**
 * Get all ancestor paths of th given path.
 *
 * @param {List} path
 * @returns {List}
 */

function getAncestors(path) {
  var ancestors = immutable.List().withMutations(function (list) {
    for (var i = 0; i < path.size; i++) {
      list.push(path.slice(0, i));
    }
  });

  return ancestors;
}

/**
 * Increment a `path` by `n` at `index`, defaulting to the last index.
 *
 * @param {List} path
 * @param {Number} n
 * @param {Number} index
 */

function increment(path) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.size - 1;

  var value = path.get(index);
  var newValue = value + n;
  var newPath = path.set(index, newValue);
  return newPath;
}

/**
 * Is a `path` above another `target` path?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isAbove(path, target) {
  var _crop = crop(path, target),
      _crop2 = slicedToArray(_crop, 2),
      p = _crop2[0],
      t = _crop2[1];

  return path.size < target.size && compare(p, t) === 0;
}

/**
 * Is a `path` after another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isAfter(path, target) {
  var _crop3 = crop(path, target),
      _crop4 = slicedToArray(_crop3, 2),
      p = _crop4[0],
      t = _crop4[1];

  return compare(p, t) === 1;
}

/**
 * Is a `path` before another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isBefore(path, target) {
  var _crop5 = crop(path, target),
      _crop6 = slicedToArray(_crop5, 2),
      p = _crop6[0],
      t = _crop6[1];

  return compare(p, t) === -1;
}

/**
 * Is a `path` equal to another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isEqual(path, target) {
  return path.equals(target);
}

/**
 * Is a `path` older than a `target` path? Meaning that it ends as an older
 * sibling of one of the indexes in the target.
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isOlder(path, target) {
  var index = path.size - 1;

  var _crop7 = crop(path, target, index),
      _crop8 = slicedToArray(_crop7, 2),
      p = _crop8[0],
      t = _crop8[1];

  var pl = path.get(index);
  var tl = target.get(index);
  return isEqual(p, t) && pl > tl;
}

/**
 * Is a `path` a sibling of a `target` path?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isSibling(path, target) {
  if (path.size !== target.size) return false;
  var p = path.butLast();
  var t = target.butLast();
  return p.equals(t);
}

/**
 * Is a `path` younger than a `target` path? Meaning that it ends as a younger
 * sibling of one of the indexes in the target.
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isYounger(path, target) {
  var index = path.size - 1;

  var _crop9 = crop(path, target, index),
      _crop10 = slicedToArray(_crop9, 2),
      p = _crop10[0],
      t = _crop10[1];

  var pl = path.get(index);
  var tl = target.get(index);
  return isEqual(p, t) && pl < tl;
}

/**
 * Lift a `path` to refer to its parent.
 *
 * @param {List} path
 * @return {List}
 */

function lift(path) {
  var parent = path.slice(0, -1);
  return parent;
}

/**
 * Drop a `path`, returning the path from the first child.
 *
 * @param {List} path
 * @return {List}
 */

function drop(path) {
  var relative = path.slice(1);
  return relative;
}

/**
 * Get the maximum length of paths `a` and `b`.
 *
 * @param {List} path
 * @param {List} path
 * @return {Number}
 */

function max(a, b) {
  var n = Math.max(a.size, b.size);
  return n;
}

/**
 * Get the minimum length of paths `a` and `b`.
 *
 * @param {List} path
 * @param {List} path
 * @return {Number}
 */

function min(a, b) {
  var n = Math.min(a.size, b.size);
  return n;
}

/**
 * Get the common ancestor path of path `a` and path `b`.
 *
 * @param {List} a
 * @param {List} b
 * @return {List}
 */

function relate(a, b) {
  var array = [];

  for (var i = 0; i < a.size && i < b.size; i++) {
    var av = a.get(i);
    var bv = b.get(i);

    // If the values aren't equal, they've diverged and don't share an ancestor.
    if (av !== bv) break;

    // Otherwise, the current value is still a common ancestor.
    array.push(av);
  }

  var path = create$1(array);
  return path;
}

/**
 * Transform a `path` by an `operation`, adjusting it to stay current.
 *
 * @param {List} path
 * @param {Operation} operation
 * @return {List<List>}
 */

function transform(path, operation) {
  var type = operation.type,
      position = operation.position,
      p = operation.path;


  if (type === 'add_mark' || type === 'insert_text' || type === 'remove_mark' || type === 'remove_text' || type === 'set_mark' || type === 'set_node' || type === 'set_selection' || type === 'set_value' || path.size === 0) {
    return immutable.List([path]);
  }

  var pIndex = p.size - 1;
  var pEqual = isEqual(p, path);
  var pYounger = isYounger(p, path);
  var pAbove = isAbove(p, path);

  if (type === 'insert_node') {
    if (pEqual || pYounger || pAbove) {
      path = increment(path, 1, pIndex);
    }
  }

  if (type === 'remove_node') {
    if (pYounger) {
      path = decrement(path, 1, pIndex);
    } else if (pEqual || pAbove) {
      path = [];
    }
  }

  if (type === 'merge_node') {
    if (pEqual || pYounger) {
      path = decrement(path, 1, pIndex);
    } else if (pAbove) {
      path = decrement(path, 1, pIndex);
      path = increment(path, position, pIndex + 1);
    }
  }

  if (type === 'split_node') {
    if (pEqual) {
      path = [path, increment(path)];
    } else if (pYounger) {
      path = increment(path, 1, pIndex);
    } else if (pAbove) {
      if (path.get(pIndex + 1) >= position) {
        path = increment(path, 1, pIndex);
        path = decrement(path, position, pIndex + 1);
      }
    }
  }

  if (type === 'move_node') {
    var np = operation.newPath;


    if (isEqual(p, np)) {
      return immutable.List([path]);
    }

    if (pAbove || pEqual) {
      // We are comparing something that was moved
      // The new path is unaffected unless the old path was the left-sibling of an ancestor
      if (isYounger(p, np) && p.size < np.size) {
        path = decrement(np, 1, min(np, p) - 1).concat(path.slice(p.size));
      } else {
        path = np.concat(path.slice(p.size));
      }
    } else {
      // This is equivalent logic to remove_node for path
      if (pYounger) {
        path = decrement(path, 1, pIndex);
      }

      // This is the equivalent logic to insert_node for newPath
      if (isYounger(np, path) || isEqual(np, path) || isAbove(np, path)) {
        path = increment(path, 1, np.size - 1);
      }
    }
  }

  var paths = Array.isArray(path) ? path : [path];
  return immutable.List(paths);
}

/**
 * Export.
 *
 * @type {Object}
 */

var PathUtils = {
  compare: compare,
  create: create$1,
  crop: crop,
  decrement: decrement,
  getAncestors: getAncestors,
  increment: increment,
  isAbove: isAbove,
  isAfter: isAfter,
  isBefore: isBefore,
  isEqual: isEqual,
  isOlder: isOlder,
  isSibling: isSibling,
  isYounger: isYounger,
  lift: lift,
  drop: drop,
  max: max,
  min: min,
  relate: relate,
  transform: transform
};

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$6 = {
  key: undefined,
  offset: undefined,
  path: undefined

  /**
   * Point.
   *
   * @type {Point}
   */

};
var Point = function (_Record) {
  inherits(Point, _Record);

  function Point() {
    classCallCheck(this, Point);
    return possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).apply(this, arguments));
  }

  createClass(Point, [{
    key: 'isAfterPoint',


    /**
     * Check whether the point is after another `point`.
     *
     * @return {Boolean}
     */

    value: function isAfterPoint(point) {
      if (this.isUnset) return false;
      var is = this.key === point.key && this.offset > point.offset || PathUtils.compare(this.path, point.path) === 1;
      return is;
    }

    /**
     * Check whether the point is after a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isAfterRange',
    value: function isAfterRange(range) {
      if (this.isUnset) return false;
      var is = this.isAfterPoint(range.end);
      return is;
    }

    /**
     * Check whether the point is at the end of a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isAtEndOfRange',
    value: function isAtEndOfRange(range) {
      if (this.isUnset) return false;
      var is = this.equals(range.end);
      return is;
    }

    /**
     * Check whether the point is at the start of a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isAtStartOfRange',
    value: function isAtStartOfRange(range) {
      if (this.isUnset) return false;
      var is = this.equals(range.start);
      return is;
    }

    /**
     * Check whether the point is before another `point`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBeforePoint',
    value: function isBeforePoint(point) {
      if (this.isUnset) return false;
      var is = this.key === point.key && this.offset < point.offset || PathUtils.compare(this.path, point.path) === -1;
      return is;
    }

    /**
     * Check whether the point is before a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBeforeRange',
    value: function isBeforeRange(range) {
      if (this.isUnset) return false;
      var is = this.isBeforePoint(range.start);
      return is;
    }

    /**
     * Check whether the point is inside a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isInRange',
    value: function isInRange(range) {
      if (this.isUnset) return false;
      var is = this.equals(range.start) || this.equals(range.end) || this.isAfterPoint(range.start) && this.isBeforePoint(range.end);
      return is;
    }

    /**
     * Check whether the point is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isAtEndOfNode',
    value: function isAtEndOfNode(node) {
      if (this.isUnset) return false;
      var last = node.getLastText();
      var is = this.key === last.key && this.offset === last.text.length;
      return is;
    }

    /**
     * Check whether the point is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isAtStartOfNode',
    value: function isAtStartOfNode(node) {
      if (this.isUnset) return false;

      // PERF: Do a check for a `0` offset first since it's quickest.
      if (this.offset !== 0) return false;

      var first = node.getFirstText();
      var is = this.key === first.key;
      return is;
    }

    /**
     * Check whether the point is in a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isInNode',
    value: function isInNode(node) {
      if (this.isUnset) return false;
      if (node.object === 'text' && node.key === this.key) return true;
      if (node.hasNode(this.key)) return true;
      return false;
    }

    /**
     * Move the point's offset backward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Point}
     */

  }, {
    key: 'moveBackward',
    value: function moveBackward() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (n === 0) return this;
      if (n < 0) return this.moveForward(-n);
      var point = this.setOffset(this.offset - n);
      return point;
    }

    /**
     * Move the point's offset forward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Point}
     */

  }, {
    key: 'moveForward',
    value: function moveForward() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (n === 0) return this;
      if (n < 0) return this.moveBackward(-n);
      var point = this.setOffset(this.offset + n);
      return point;
    }

    /**
     * Move the point's anchor point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String|Number} path
     * @param {Number} offset
     * @return {Point}
     */

  }, {
    key: 'moveTo',
    value: function moveTo(path) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this.key;

      if (typeof path === 'number') {
        offset = path;
        path = this.path;
      } else if (typeof path === 'string') {
        key = path;
        path = key === this.key ? this.path : null;
      } else {
        key = path.equals(this.path) ? this.key : null;
      }

      var point = this.merge({ key: key, path: path, offset: offset });
      return point;
    }

    /**
     * Move the point's anchor point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Point}
     */

  }, {
    key: 'moveToStartOfNode',
    value: function moveToStartOfNode(node) {
      var first = node.getFirstText();
      var point = this.moveTo(first.key, 0);
      return point;
    }

    /**
     * Move the point's anchor point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Point}
     */

  }, {
    key: 'moveToEndOfNode',
    value: function moveToEndOfNode(node) {
      var last = node.getLastText();
      var point = this.moveTo(last.key, last.text.length);
      return point;
    }

    /**
     * Normalize the point relative to a `node`, ensuring that its key and path
     * reference a text node, or that it gets unset.
     *
     * @param {Node} node
     * @return {Point}
     */

  }, {
    key: 'normalize',
    value: function normalize(node) {
      // If both the key and path are null, there's no reference to a node, so
      // make sure it is entirely unset.
      if (this.key == null && this.path == null) {
        return this.setOffset(null);
      }

      var key = this.key,
          offset = this.offset,
          path = this.path;

      // PERF: this function gets called a lot.
      // to avoid creating the key -> path lookup table, we attempt to look up by path first.

      var target = path && node.getNode(path);

      if (!target) {
        target = node.getNode(key);

        if (target) {
          // There is a misalignment of path and key
          var _point = this.merge({
            path: node.getPath(key)
          });

          return _point;
        }
      }

      if (!target) {
        index(false, "A point's `path` or `key` invalid and was reset!");

        var text = node.getFirstText();
        if (!text) return Point.create();

        var _point2 = this.merge({
          key: text.key,
          offset: 0,
          path: node.getPath(text.key)
        });

        return _point2;
      }

      if (target.object !== 'text') {
        index(false, 'A point should not reference a non-text node!');

        var _text = target.getTextAtOffset(offset);
        var before = target.getOffset(_text.key);
        var _point3 = this.merge({
          offset: offset - before,
          key: _text.key,
          path: node.getPath(_text.key)
        });

        return _point3;
      }

      if (target && path && key && key !== target.key) {
        index(false, "A point's `key` did not match its `path`!");

        // TODO: if we look up by path above and it differs by key, do we want to reset it to looking up by key?
      }

      var point = this.merge({
        key: target.key,
        path: path == null ? node.getPath(target.key) : path,
        offset: offset == null ? 0 : Math.min(offset, target.text.length)
      });

      return point;
    }

    /**
     * Set the point's key to a new `key`.
     *
     * @param {String} key
     * @return {Point}
     */

  }, {
    key: 'setKey',
    value: function setKey(key) {
      if (key != null) {
        key = KeyUtils.create(key);
      }

      var point = this.set('key', key);
      return point;
    }

    /**
     * Set the point's offset to a new `offset`.
     *
     * @param {Number} offset
     * @return {Point}
     */

  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      var point = this.set('offset', offset);
      return point;
    }

    /**
     * Set the point's path to a new `path`.
     *
     * @param {List|Array} path
     * @return {Point}
     */

  }, {
    key: 'setPath',
    value: function setPath(path) {
      if (path != null) {
        path = PathUtils.create(path);
      }

      var point = this.set('path', path);
      return point;
    }

    /**
     * Return a JSON representation of the point.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        key: this.key,
        offset: this.offset,
        path: this.path && this.path.toArray()
      };

      if (!options.preserveKeys) {
        delete object.key;
      }

      return object;
    }

    /**
     * Unset the point.
     *
     * @return {Point}
     */

  }, {
    key: 'unset',
    value: function unset() {
      return this.merge({
        key: null,
        offset: null,
        path: null
      });
    }
  }, {
    key: 'isSet',


    /**
     * Check whether all properties of the point are set.
     *
     * @return {Boolean}
     */

    get: function get$$1() {
      return this.key != null && this.offset != null && this.path != null;
    }

    /**
     * Check whether any property of the point is not set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isUnset',
    get: function get$$1() {
      return !this.isSet;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Point` with `attrs`.
     *
     * @param {Object|Point} attrs
     * @return {Point}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Point.isPoint(attrs)) {
        return attrs;
      }

      if (isPlainObject(attrs)) {
        return Point.fromJSON(attrs);
      }

      throw new Error('`Point.create` only accepts objects or points, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable point properties from `attrs`.
     *
     * @param {Object|Point} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Point.isPoint(a)) {
        return {
          key: a.key,
          offset: a.offset,
          path: a.path
        };
      }

      if (isPlainObject(a)) {
        var p = {};
        if ('key' in a) p.key = a.key;
        if ('offset' in a) p.offset = a.offset;
        if ('path' in a) p.path = PathUtils.create(a.path);

        // If only a path is set, or only a key is set, ensure that the other is
        // set to null so that it can be normalized back to the right value.
        // Otherwise we won't realize that the path and key don't match anymore.
        if ('path' in a && !('key' in a)) p.key = null;
        if ('key' in a && !('path' in a)) p.path = null;

        return p;
      }

      throw new Error('`Point.createProperties` only accepts objects or points, but you passed it: ' + a);
    }

    /**
     * Create a `Point` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Point}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$key = object.key,
          key = _object$key === undefined ? null : _object$key,
          _object$offset = object.offset,
          offset = _object$offset === undefined ? null : _object$offset,
          _object$path = object.path,
          path = _object$path === undefined ? null : _object$path;


      var point = new Point({
        key: key,
        offset: offset,
        path: PathUtils.create(path)
      });

      return point;
    }
  }]);
  return Point;
}(immutable.Record(DEFAULTS$6));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$7 = {
  anchor: undefined,
  focus: undefined,
  mark: undefined

  /**
   * Decoration.
   *
   * @type {Decoration}
   */

};
var Decoration = function (_Record) {
  inherits(Decoration, _Record);

  function Decoration() {
    classCallCheck(this, Decoration);
    return possibleConstructorReturn(this, (Decoration.__proto__ || Object.getPrototypeOf(Decoration)).apply(this, arguments));
  }

  createClass(Decoration, [{
    key: 'setProperties',


    /**
     * Set new `properties` on the decoration.
     *
     * @param {Object|Range|Selection} properties
     * @return {Range}
     */

    value: function setProperties(properties) {
      properties = Decoration.createProperties(properties);
      var _properties = properties,
          anchor = _properties.anchor,
          focus = _properties.focus,
          mark = _properties.mark;

      var props = {};

      if (anchor) {
        props.anchor = Point.create(anchor);
      }

      if (focus) {
        props.focus = Point.create(focus);
      }

      if (mark) {
        props.mark = Mark.create(mark);
      }

      var decoration = this.merge(props);
      return decoration;
    }

    /**
     * Return a JSON representation of the decoration.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options),
        mark: this.mark.toJSON(options)
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Decoration` with `attrs`.
     *
     * @param {Object|Decoration} attrs
     * @return {Decoration}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Decoration.isDecoration(attrs)) {
        return attrs;
      }

      if (Range.isRange(attrs)) {
        return Decoration.fromJSON(Range.createProperties(attrs));
      }

      if (isPlainObject(attrs)) {
        return Decoration.fromJSON(attrs);
      }

      throw new Error('`Decoration.create` only accepts objects or decorations, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Ranges` from `elements`.
     *
     * @param {Array<Decoration|Object>|List<Decoration|Object>} elements
     * @return {List<Decoration>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(elements) || Array.isArray(elements)) {
        var list = new immutable.List(elements.map(Decoration.create));
        return list;
      }

      throw new Error('`Decoration.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable decoration properties from `attrs`.
     *
     * @param {Object|String|Decoration} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Decoration.isDecoration(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus),
          mark: Mark.create(a.mark)
        };
      }

      if (isPlainObject(a)) {
        var p = {};
        if ('anchor' in a) p.anchor = Point.create(a.anchor);
        if ('focus' in a) p.focus = Point.create(a.focus);
        if ('mark' in a) p.mark = Mark.create(a.mark);
        return p;
      }

      throw new Error('`Decoration.createProperties` only accepts objects or decorations, but you passed it: ' + a);
    }

    /**
     * Create a `Decoration` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Decoration}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var anchor = object.anchor,
          focus = object.focus,
          mark = object.mark;


      if (!mark) {
        throw new Error('Decorations must be created with a `mark`, but you passed: ' + JSON.stringify(object));
      }

      var decoration = new Decoration({
        anchor: Point.fromJSON(anchor || {}),
        focus: Point.fromJSON(focus || {}),
        mark: Mark.fromJSON(mark)
      });

      return decoration;
    }
  }]);
  return Decoration;
}(immutable.Record(DEFAULTS$7));

/**
 * Slate-specific object types.
 *
 * @type {Object}
 */

var TYPES = {
  block: '@@__SLATE_BLOCK__@@',
  change: '@@__SLATE_CHANGE__@@',
  decoration: '@@__SLATE_DECORATION__@@',
  document: '@@__SLATE_DOCUMENT__@@',
  editor: '@@__SLATE_EDITOR__@@',
  inline: '@@__SLATE_INLINE__@@',
  leaf: '@@__SLATE_LEAF__@@',
  mark: '@@__SLATE_MARK__@@',
  operation: '@@__SLATE_OPERATION__@@',
  point: '@@__SLATE_POINT__@@',
  range: '@@__SLATE_RANGE__@@',
  selection: '@@__SLATE_SELECTION__@@',
  text: '@@__SLATE_TEXT__@@',
  value: '@@__SLATE_VALUE__@@'

  /**
   * Determine whether a `value` is of `type`.
   *
   * @param {string} type
   * @param {any} value
   * @return {boolean}
   */

};function isObject$1(type, value) {
  return !!(value && value[TYPES[type]]);
}

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$8 = {
  anchor: undefined,
  focus: undefined

  /**
   * Range.
   *
   * @type {Range}
   */

};
var Range = function (_Record) {
  inherits(Range, _Record);

  function Range() {
    classCallCheck(this, Range);
    return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
  }

  createClass(Range, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the range.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options)
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Range` with `attrs`.
     *
     * @param {Object|Range} attrs
     * @return {Range}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Range.isRange(attrs)) {
        if (attrs.object === 'range') {
          return attrs;
        } else {
          return Range.fromJSON(Range.createProperties(attrs));
        }
      }

      if (isPlainObject(attrs)) {
        return Range.fromJSON(attrs);
      }

      throw new Error('`Range.create` only accepts objects or ranges, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Ranges` from `elements`.
     *
     * @param {Array<Range|Object>|List<Range|Object>} elements
     * @return {List<Range>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(elements) || Array.isArray(elements)) {
        var list = new immutable.List(elements.map(Range.create));
        return list;
      }

      throw new Error('`Range.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable range properties from `attrs`.
     *
     * @param {Object|String|Range} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Range.isRange(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus)
        };
      }

      if (isPlainObject(a)) {
        var p = {};
        if ('anchor' in a) p.anchor = Point.create(a.anchor);
        if ('focus' in a) p.focus = Point.create(a.focus);
        return p;
      }

      throw new Error('`Range.createProperties` only accepts objects, decorations, ranges or selections, but you passed it: ' + a);
    }

    /**
     * Create a `Range` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Range}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var anchor = object.anchor,
          focus = object.focus;

      var range = new Range({
        anchor: Point.fromJSON(anchor || {}),
        focus: Point.fromJSON(focus || {})
      });

      return range;
    }

    /**
     * Check if a `value` is a `Range`, or is range-like.
     *
     * @param {Any} value
     * @return {Boolean}
     */

  }, {
    key: 'isRange',
    value: function isRange(value) {
      return isObject$1('range', value) || Decoration.isDecoration(value) || Selection.isSelection(value);
    }
  }]);
  return Range;
}(immutable.Record(DEFAULTS$8));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$9 = {
  anchor: undefined,
  focus: undefined,
  isFocused: undefined,
  marks: undefined

  /**
   * Selection.
   *
   * @type {Selection}
   */

};
var Selection = function (_Record) {
  inherits(Selection, _Record);

  function Selection() {
    classCallCheck(this, Selection);
    return possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).apply(this, arguments));
  }

  createClass(Selection, [{
    key: 'setIsFocused',


    /**
     * Set the `isFocused` property to a new `value`.
     *
     * @param {Boolean} value
     * @return {Selection}
     */

    value: function setIsFocused(value) {
      var selection = this.set('isFocused', value);
      return selection;
    }

    /**
     * Set the `marks` property to a new set of `marks`.
     *
     * @param {Set} marks
     * @return {Selection}
     */

  }, {
    key: 'setMarks',
    value: function setMarks(marks) {
      var selection = this.set('marks', marks);
      return selection;
    }

    /**
     * Set new `properties` on the selection.
     *
     * @param {Object|Range|Selection} properties
     * @return {Range}
     */

  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      properties = Selection.createProperties(properties);
      var _properties = properties,
          anchor = _properties.anchor,
          focus = _properties.focus,
          props = objectWithoutProperties(_properties, ['anchor', 'focus']);


      if (anchor) {
        props.anchor = Point.create(anchor);
      }

      if (focus) {
        props.focus = Point.create(focus);
      }

      var selection = this.merge(props);
      return selection;
    }

    /**
     * Return a JSON representation of the selection.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options),
        isFocused: this.isFocused,
        marks: this.marks == null ? null : this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }
  }, {
    key: 'isBlurred',


    /**
     * Check whether the selection is blurred.
     *
     * @return {Boolean}
     */

    get: function get$$1() {
      return !this.isFocused;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Selection` with `attrs`.
     *
     * @param {Object|Selection} attrs
     * @return {Selection}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Selection.isSelection(attrs)) {
        return attrs;
      }

      if (Range.isRange(attrs)) {
        return Selection.fromJSON(Range.createProperties(attrs));
      }

      if (isPlainObject(attrs)) {
        return Selection.fromJSON(attrs);
      }

      throw new Error('`Selection.create` only accepts objects, ranges or selections, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable selection properties from `attrs`.
     *
     * @param {Object|String|Selection} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Selection.isSelection(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus),
          isFocused: a.isFocused,
          marks: a.marks
        };
      }

      if (Range.isRange(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus)
        };
      }

      if (isPlainObject(a)) {
        var p = {};
        if ('anchor' in a) p.anchor = Point.create(a.anchor);
        if ('focus' in a) p.focus = Point.create(a.focus);
        if ('isFocused' in a) p.isFocused = a.isFocused;
        if ('marks' in a) p.marks = a.marks == null ? null : Mark.createSet(a.marks);
        return p;
      }

      throw new Error('`Selection.createProperties` only accepts objects, ranges or selections, but you passed it: ' + a);
    }

    /**
     * Create a `Selection` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Selection}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var anchor = object.anchor,
          focus = object.focus,
          _object$isFocused = object.isFocused,
          isFocused = _object$isFocused === undefined ? false : _object$isFocused,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? null : _object$marks;

      var selection = new Selection({
        anchor: Point.fromJSON(anchor || {}),
        focus: Point.fromJSON(focus || {}),
        isFocused: isFocused,
        marks: marks == null ? null : new immutable.Set(marks.map(Mark.fromJSON))
      });

      return selection;
    }
  }]);
  return Selection;
}(immutable.Record(DEFAULTS$9));

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';
var index$1 = (function (condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
});

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$10 = {
  data: undefined,
  decorations: undefined,
  document: undefined,
  selection: undefined

  /**
   * Value.
   *
   * @type {Value}
   */

};
var Value = function (_Record) {
  inherits(Value, _Record);

  function Value() {
    classCallCheck(this, Value);
    return possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).apply(this, arguments));
  }

  createClass(Value, [{
    key: 'addMark',


    /**
     * Add mark to text at `offset` and `length` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Value}
     */

    value: function addMark(path, offset, length, mark) {
      var value = this;
      var _value = value,
          document = _value.document;

      document = document.addMark(path, offset, length, mark);
      value = this.set('document', document);
      return value;
    }

    /**
     * Insert a `node`.
     *
     * @param {List|String} path
     * @param {Node} node
     * @return {Value}
     */

  }, {
    key: 'insertNode',
    value: function insertNode(path, node) {
      var value = this;
      var _value2 = value,
          document = _value2.document;

      document = document.insertNode(path, node);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          return point.setPath(null);
        });
      });

      return value;
    }

    /**
     * Insert `text` at `offset` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {String} text
     * @param {Set} marks
     * @return {Value}
     */

  }, {
    key: 'insertText',
    value: function insertText(path, offset, text, marks) {
      var value = this;
      var _value3 = value,
          document = _value3.document;

      var node = document.assertNode(path);
      document = document.insertText(path, offset, text, marks);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          return point.key === node.key && point.offset >= offset ? point.setOffset(point.offset + text.length) : point;
        });
      });

      return value;
    }

    /**
     * Merge a node backwards its previous sibling.
     *
     * @param {List|Key} path
     * @return {Value}
     */

  }, {
    key: 'mergeNode',
    value: function mergeNode(path) {
      var value = this;
      var _value4 = value,
          document = _value4.document;

      var newDocument = document.mergeNode(path);
      path = document.resolvePath(path);
      var withPath = PathUtils.decrement(path);
      var one = document.getNode(withPath);
      var two = document.getNode(path);
      value = value.set('document', newDocument);

      value = value.mapRanges(function (range) {
        if (two.object === 'text') {
          var max = one.text.length;

          if (range.anchor.key === two.key) {
            range = range.moveAnchorTo(one.key, max + range.anchor.offset);
          }

          if (range.focus.key === two.key) {
            range = range.moveFocusTo(one.key, max + range.focus.offset);
          }
        }

        range = range.updatePoints(function (point) {
          return point.setPath(null);
        });

        return range;
      });

      return value;
    }

    /**
     * Move a node by `path` to `newPath`.
     *
     * A `newIndex` can be provided when move nodes by `key`, to account for not
     * being able to have a key for a location in the tree that doesn't exist yet.
     *
     * @param {List|Key} path
     * @param {List|Key} newPath
     * @param {Number} newIndex
     * @return {Value}
     */

  }, {
    key: 'moveNode',
    value: function moveNode(path, newPath) {
      var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var value = this;
      var _value5 = value,
          document = _value5.document;

      document = document.moveNode(path, newPath, newIndex);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          return point.setPath(null);
        });
      });

      return value;
    }

    /**
     * Remove mark from text at `offset` and `length` in node.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Value}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(path, offset, length, mark) {
      var value = this;
      var _value6 = value,
          document = _value6.document;

      document = document.removeMark(path, offset, length, mark);
      value = this.set('document', document);
      return value;
    }

    /**
     * Remove a node by `path`.
     *
     * @param {List|String} path
     * @return {Value}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(path) {
      var value = this;
      var _value7 = value,
          document = _value7.document;

      var node = document.assertNode(path);
      var first = node.object === 'text' ? node : node.getFirstText() || node;
      var last = node.object === 'text' ? node : node.getLastText() || node;
      var prev = document.getPreviousText(first.key);
      var next = document.getNextText(last.key);

      document = document.removeNode(path);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        var _range = range,
            start = _range.start,
            end = _range.end;


        if (node.hasNode(start.key)) {
          range = prev ? range.moveStartTo(prev.key, prev.text.length) : next ? range.moveStartTo(next.key, 0) : range.unset();
        }

        if (node.hasNode(end.key)) {
          range = prev ? range.moveEndTo(prev.key, prev.text.length) : next ? range.moveEndTo(next.key, 0) : range.unset();
        }

        range = range.updatePoints(function (point) {
          return point.setPath(null);
        });

        return range;
      });

      return value;
    }

    /**
     * Remove `text` at `offset` in node by `path`.
     *
     * @param {List|Key} path
     * @param {Number} offset
     * @param {String} text
     * @return {Value}
     */

  }, {
    key: 'removeText',
    value: function removeText(path, offset, text) {
      var value = this;
      var _value8 = value,
          document = _value8.document;

      var node = document.assertNode(path);
      document = document.removeText(path, offset, text);
      value = value.set('document', document);

      var length = text.length;

      var start = offset;
      var end = offset + length;

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          if (point.key !== node.key) {
            return point;
          }

          if (point.offset >= end) {
            return point.setOffset(point.offset - length);
          }

          if (point.offset > start) {
            return point.setOffset(start);
          }

          return point;
        });
      });

      return value;
    }

    /**
     * Set `properties` on a node.
     *
     * @param {List|String} path
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'setNode',
    value: function setNode(path, properties) {
      var value = this;
      var _value9 = value,
          document = _value9.document;

      document = document.setNode(path, properties);
      value = value.set('document', document);
      return value;
    }

    /**
     * Set `properties` on `mark` on text at `offset` and `length` in node.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'setMark',
    value: function setMark(path, offset, length, mark, properties) {
      var value = this;
      var _value10 = value,
          document = _value10.document;

      document = document.setMark(path, offset, length, mark, properties);
      value = value.set('document', document);
      return value;
    }

    /**
     * Set `properties` on the value.
     *
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      var value = this;
      var _value11 = value,
          document = _value11.document;
      var data = properties.data,
          decorations = properties.decorations;

      var props = {};

      if (data) {
        props.data = data;
      }

      if (decorations) {
        props.decorations = decorations.map(function (d) {
          return d.isSet ? d : document.resolveDecoration(d);
        });
      }

      value = value.merge(props);
      return value;
    }

    /**
     * Set `properties` on the selection.
     *
     * @param {Value} value
     * @param {Operation} operation
     * @return {Value}
     */

  }, {
    key: 'setSelection',
    value: function setSelection(properties) {
      var value = this;
      var _value12 = value,
          document = _value12.document,
          selection = _value12.selection;

      var next = selection.setProperties(properties);
      selection = document.resolveSelection(next);
      value = value.set('selection', selection);
      return value;
    }

    /**
     * Split a node by `path` at `position` with optional `properties` to apply
     * to the newly split node.
     *
     * @param {List|String} path
     * @param {Number} position
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'splitNode',
    value: function splitNode(path, position, properties) {
      var value = this;
      var _value13 = value,
          document = _value13.document;

      var newDocument = document.splitNode(path, position, properties);
      var node = document.assertNode(path);
      value = value.set('document', newDocument);

      value = value.mapRanges(function (range) {
        var next = newDocument.getNextText(node.key);
        var _range2 = range,
            start = _range2.start,
            end = _range2.end;

        // If the start was after the split, move it to the next node.

        if (node.key === start.key && position <= start.offset) {
          range = range.moveStartTo(next.key, start.offset - position);
        }

        // If the end was after the split, move it to the next node.
        if (node.key === end.key && position <= end.offset) {
          range = range.moveEndTo(next.key, end.offset - position);
        }

        range = range.updatePoints(function (point) {
          return point.setPath(null);
        });

        return range;
      });

      return value;
    }

    /**
     * Map all range objects to apply adjustments with an `iterator`.
     *
     * @param {Function} iterator
     * @return {Value}
     */

  }, {
    key: 'mapRanges',
    value: function mapRanges(iterator) {
      var value = this;
      var _value14 = value,
          document = _value14.document,
          selection = _value14.selection,
          decorations = _value14.decorations;


      var sel = selection.isSet ? iterator(selection) : selection;
      if (!sel) sel = selection.unset();
      if (sel !== selection) sel = document.createSelection(sel);
      value = value.set('selection', sel);

      var decs = decorations.map(function (decoration) {
        var n = decoration.isSet ? iterator(decoration) : decoration;
        if (n && n !== decoration) n = document.createDecoration(n);
        return n;
      });

      decs = decs.filter(function (decoration) {
        return !!decoration;
      });
      value = value.set('decorations', decs);
      return value;
    }

    /**
     * Return a JSON representation of the value.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        document: this.document.toJSON(options)
      };

      if (options.preserveData) {
        object.data = this.data.toJSON(options);
      }

      if (options.preserveDecorations) {
        object.decorations = this.decorations.toArray().map(function (d) {
          return d.toJSON(options);
        });
      }

      if (options.preserveSelection) {
        object.selection = this.selection.toJSON(options);
      }

      return object;
    }

    /**
     * Deprecated.
     */

  }, {
    key: 'change',
    value: function change() {
      index$1(false, 'As of Slate 0.42.0, value object are no longer schema-aware, and the `value.change()` method is no longer available. Use the `editor.change()` method on the new `Editor` controller instead.');
    }
  }, {
    key: 'startBlock',


    /**
     * Get the current start text node's closest block parent.
     *
     * @return {Block}
     */

    get: function get$$1() {
      return this.selection.start.key && this.document.getClosestBlock(this.selection.start.key);
    }

    /**
     * Get the current end text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'endBlock',
    get: function get$$1() {
      return this.selection.end.key && this.document.getClosestBlock(this.selection.end.key);
    }

    /**
     * Get the current anchor text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'anchorBlock',
    get: function get$$1() {
      return this.selection.anchor.key && this.document.getClosestBlock(this.selection.anchor.key);
    }

    /**
     * Get the current focus text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'focusBlock',
    get: function get$$1() {
      return this.selection.focus.key && this.document.getClosestBlock(this.selection.focus.key);
    }

    /**
     * Get the current start text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'startInline',
    get: function get$$1() {
      return this.selection.start.key && this.document.getClosestInline(this.selection.start.key);
    }

    /**
     * Get the current end text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'endInline',
    get: function get$$1() {
      return this.selection.end.key && this.document.getClosestInline(this.selection.end.key);
    }

    /**
     * Get the current anchor text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'anchorInline',
    get: function get$$1() {
      return this.selection.anchor.key && this.document.getClosestInline(this.selection.anchor.key);
    }

    /**
     * Get the current focus text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'focusInline',
    get: function get$$1() {
      return this.selection.focus.key && this.document.getClosestInline(this.selection.focus.key);
    }

    /**
     * Get the current start text node.
     *
     * @return {Text}
     */

  }, {
    key: 'startText',
    get: function get$$1() {
      return this.selection.start.key && this.document.getDescendant(this.selection.start.key);
    }

    /**
     * Get the current end node.
     *
     * @return {Text}
     */

  }, {
    key: 'endText',
    get: function get$$1() {
      return this.selection.end.key && this.document.getDescendant(this.selection.end.key);
    }

    /**
     * Get the current anchor node.
     *
     * @return {Text}
     */

  }, {
    key: 'anchorText',
    get: function get$$1() {
      return this.selection.anchor.key && this.document.getDescendant(this.selection.anchor.key);
    }

    /**
     * Get the current focus node.
     *
     * @return {Text}
     */

  }, {
    key: 'focusText',
    get: function get$$1() {
      return this.selection.focus.key && this.document.getDescendant(this.selection.focus.key);
    }

    /**
     * Get the next block node.
     *
     * @return {Block}
     */

  }, {
    key: 'nextBlock',
    get: function get$$1() {
      return this.selection.end.key && this.document.getNextBlock(this.selection.end.key);
    }

    /**
     * Get the previous block node.
     *
     * @return {Block}
     */

  }, {
    key: 'previousBlock',
    get: function get$$1() {
      return this.selection.start.key && this.document.getPreviousBlock(this.selection.start.key);
    }

    /**
     * Get the next inline node.
     *
     * @return {Inline}
     */

  }, {
    key: 'nextInline',
    get: function get$$1() {
      return this.selection.end.key && this.document.getNextInline(this.selection.end.key);
    }

    /**
     * Get the previous inline node.
     *
     * @return {Inline}
     */

  }, {
    key: 'previousInline',
    get: function get$$1() {
      return this.selection.start.key && this.document.getPreviousInline(this.selection.start.key);
    }

    /**
     * Get the next text node.
     *
     * @return {Text}
     */

  }, {
    key: 'nextText',
    get: function get$$1() {
      return this.selection.end.key && this.document.getNextText(this.selection.end.key);
    }

    /**
     * Get the previous text node.
     *
     * @return {Text}
     */

  }, {
    key: 'previousText',
    get: function get$$1() {
      return this.selection.start.key && this.document.getPreviousText(this.selection.start.key);
    }

    /**
     * Get the marks of the current selection.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'marks',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable.Set() : this.selection.marks || this.document.getMarksAtRange(this.selection);
    }

    /**
     * Get the active marks of the current selection.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'activeMarks',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable.Set() : this.selection.marks || this.document.getActiveMarksAtRange(this.selection);
    }

    /**
     * Get the block nodes in the current selection.
     *
     * @return {List<Block>}
     */

  }, {
    key: 'blocks',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable.List() : this.document.getLeafBlocksAtRange(this.selection);
    }

    /**
     * Get the fragment of the current selection.
     *
     * @return {Document}
     */

  }, {
    key: 'fragment',
    get: function get$$1() {
      return this.selection.isUnset ? Document.create() : this.document.getFragmentAtRange(this.selection);
    }

    /**
     * Get the bottom-most inline nodes in the current selection.
     *
     * @return {List<Inline>}
     */

  }, {
    key: 'inlines',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable.List() : this.document.getLeafInlinesAtRange(this.selection);
    }

    /**
     * Get the text nodes in the current selection.
     *
     * @return {List<Text>}
     */

  }, {
    key: 'texts',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable.List() : this.document.getTextsAtRange(this.selection);
    }
  }, {
    key: 'history',
    get: function get$$1() {
      index$1(false, 'As of Slate 0.42.0, the `value.history` model no longer exists, and the history is stored in `value.data` instead using plugins.');
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Value` with `attrs`.
     *
     * @param {Object|Value} attrs
     * @param {Object} options
     * @return {Value}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Value.isValue(attrs)) {
        return attrs;
      }

      if (isPlainObject(attrs)) {
        return Value.fromJSON(attrs, options);
      }

      throw new Error('`Value.create` only accepts objects or values, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable value properties from `attrs`.
     *
     * @param {Object|Value} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Value.isValue(a)) {
        return {
          data: a.data,
          decorations: a.decorations
        };
      }

      if (isPlainObject(a)) {
        var p = {};
        if ('data' in a) p.data = Data.create(a.data);
        if ('decorations' in a) p.decorations = Decoration.createList(a.decorations);
        return p;
      }

      throw new Error('`Value.createProperties` only accepts objects or values, but you passed it: ' + a);
    }

    /**
     * Create a `Value` from a JSON `object`.
     *
     * @param {Object} object
     * @param {Object} options
     *   @property {Boolean} normalize
     *   @property {Array} plugins
     * @return {Value}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$decorations = object.decorations,
          decorations = _object$decorations === undefined ? [] : _object$decorations,
          _object$document = object.document,
          document = _object$document === undefined ? {} : _object$document,
          _object$selection = object.selection,
          selection = _object$selection === undefined ? {} : _object$selection;

      data = Data.fromJSON(data);
      document = Document.fromJSON(document);
      selection = document.createSelection(selection);
      decorations = immutable.List(decorations.map(function (d) {
        return Decoration.fromJSON(d);
      }));

      if (selection.isUnset) {
        var text = document.getFirstText();
        if (text) selection = selection.moveToStartOfNode(text);
        selection = document.createSelection(selection);
      }

      var value = new Value({
        data: data,
        decorations: decorations,
        document: document,
        selection: selection
      });

      return value;
    }
  }]);
  return Value;
}(immutable.Record(DEFAULTS$10));

var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {}

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug = createCommonjsModule(function (module, exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = ms;

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms$$1 = curr - (prevTime || curr);
    self.diff = ms$$1;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
});

var debug_1 = debug.coerce;
var debug_2 = debug.disable;
var debug_3 = debug.enable;
var debug_4 = debug.enabled;
var debug_5 = debug.humanize;
var debug_6 = debug.instances;
var debug_7 = debug.names;
var debug_8 = debug.skips;
var debug_9 = debug.formatters;

var browser$1 = createCommonjsModule(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
});

var browser_1 = browser$1.log;
var browser_2 = browser$1.formatArgs;
var browser_3 = browser$1.save;
var browser_4 = browser$1.load;
var browser_5 = browser$1.useColors;
var browser_6 = browser$1.storage;
var browser_7 = browser$1.colors;

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$2 = browser$1('slate:operation:apply');

/**
 * Apply an `op` to a `value`.
 *
 * @param {Value} value
 * @param {Object|Operation} op
 * @return {Value} value
 */

function applyOperation(value, op) {
  op = Operation.create(op);
  var _op = op,
      type = _op.type;

  debug$2(type, op);

  switch (type) {
    case 'add_mark':
      {
        var _op2 = op,
            path = _op2.path,
            offset = _op2.offset,
            length = _op2.length,
            mark = _op2.mark;

        var next = value.addMark(path, offset, length, mark);
        return next;
      }

    case 'insert_node':
      {
        var _op3 = op,
            _path = _op3.path,
            node = _op3.node;

        var _next = value.insertNode(_path, node);
        return _next;
      }

    case 'insert_text':
      {
        var _op4 = op,
            _path2 = _op4.path,
            _offset = _op4.offset,
            text = _op4.text,
            marks = _op4.marks;

        var _next2 = value.insertText(_path2, _offset, text, marks);
        return _next2;
      }

    case 'merge_node':
      {
        var _op5 = op,
            _path3 = _op5.path;

        var _next3 = value.mergeNode(_path3);
        return _next3;
      }

    case 'move_node':
      {
        var _op6 = op,
            _path4 = _op6.path,
            newPath = _op6.newPath;


        if (PathUtils.isEqual(_path4, newPath)) {
          return value;
        }

        var _next4 = value.moveNode(_path4, newPath);
        return _next4;
      }

    case 'remove_mark':
      {
        var _op7 = op,
            _path5 = _op7.path,
            _offset2 = _op7.offset,
            _length = _op7.length,
            _mark = _op7.mark;

        var _next5 = value.removeMark(_path5, _offset2, _length, _mark);
        return _next5;
      }

    case 'remove_node':
      {
        var _op8 = op,
            _path6 = _op8.path;

        var _next6 = value.removeNode(_path6);
        return _next6;
      }

    case 'remove_text':
      {
        var _op9 = op,
            _path7 = _op9.path,
            _offset3 = _op9.offset,
            _text = _op9.text;

        var _next7 = value.removeText(_path7, _offset3, _text);
        return _next7;
      }

    case 'set_mark':
      {
        var _op10 = op,
            _path8 = _op10.path,
            _offset4 = _op10.offset,
            _length2 = _op10.length,
            properties = _op10.properties,
            newProperties = _op10.newProperties;

        var _next8 = value.setMark(_path8, _offset4, _length2, properties, newProperties);
        return _next8;
      }

    case 'set_node':
      {
        var _op11 = op,
            _path9 = _op11.path,
            _newProperties = _op11.newProperties;

        var _next9 = value.setNode(_path9, _newProperties);
        return _next9;
      }

    case 'set_selection':
      {
        var _op12 = op,
            _newProperties2 = _op12.newProperties;

        var _next10 = value.setSelection(_newProperties2);
        return _next10;
      }

    case 'set_value':
      {
        var _op13 = op,
            _newProperties3 = _op13.newProperties;

        var _next11 = value.setProperties(_newProperties3);
        return _next11;
      }

    case 'split_node':
      {
        var _op14 = op,
            _path10 = _op14.path,
            position = _op14.position,
            _properties = _op14.properties;

        var _next12 = value.splitNode(_path10, position, _properties);
        return _next12;
      }

    default:
      {
        throw new Error('Unknown operation type: "' + type + '".');
      }
  }
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$3 = browser$1('slate:operation:invert');

/**
 * Invert an `op`.
 *
 * @param {Object} op
 * @return {Object}
 */

function invertOperation(op) {
  op = Operation.create(op);
  var _op = op,
      type = _op.type;

  debug$3(type, op);

  switch (type) {
    case 'insert_node':
      {
        var inverse = op.set('type', 'remove_node');
        return inverse;
      }

    case 'remove_node':
      {
        var _inverse = op.set('type', 'insert_node');
        return _inverse;
      }

    case 'move_node':
      {
        var _op2 = op,
            newPath = _op2.newPath,
            path = _op2.path;


        if (PathUtils.isEqual(newPath, path)) {
          return op;
        }

        // Get the true path that the moved node ended up at
        var inversePath = PathUtils.transform(path, op).first();

        // Get the true path we are trying to move back to
        // We transform the right-sibling of the path
        // This will end up at the operation.path most of the time
        // But if the newPath is a left-sibling or left-ancestor-sibling, this will account for it
        var transformedSibling = PathUtils.transform(PathUtils.increment(path), op).first();

        var _inverse2 = op.set('path', inversePath).set('newPath', transformedSibling);
        return _inverse2;
      }

    case 'merge_node':
      {
        var _op3 = op,
            _path = _op3.path;

        var _inversePath = PathUtils.decrement(_path);
        var _inverse3 = op.set('type', 'split_node').set('path', _inversePath);
        return _inverse3;
      }

    case 'split_node':
      {
        var _op4 = op,
            _path2 = _op4.path;

        var _inversePath2 = PathUtils.increment(_path2);
        var _inverse4 = op.set('type', 'merge_node').set('path', _inversePath2);
        return _inverse4;
      }

    case 'set_node':
    case 'set_value':
    case 'set_selection':
    case 'set_mark':
      {
        var _op5 = op,
            properties = _op5.properties,
            newProperties = _op5.newProperties;

        var _inverse5 = op.set('properties', newProperties).set('newProperties', properties);
        return _inverse5;
      }

    case 'insert_text':
      {
        var _inverse6 = op.set('type', 'remove_text');
        return _inverse6;
      }

    case 'remove_text':
      {
        var _inverse7 = op.set('type', 'insert_text');
        return _inverse7;
      }

    case 'add_mark':
      {
        var _inverse8 = op.set('type', 'remove_mark');
        return _inverse8;
      }

    case 'remove_mark':
      {
        var _inverse9 = op.set('type', 'add_mark');
        return _inverse9;
      }

    default:
      {
        throw new Error('Unknown operation type: "' + type + '".');
      }
  }
}

/**
 * Operation attributes.
 *
 * @type {Array}
 */

var OPERATION_ATTRIBUTES = {
  add_mark: ['path', 'offset', 'length', 'mark', 'data'],
  insert_node: ['path', 'node', 'data'],
  insert_text: ['path', 'offset', 'text', 'marks', 'data'],
  merge_node: ['path', 'position', 'properties', 'target', 'data'],
  move_node: ['path', 'newPath', 'data'],
  remove_mark: ['path', 'offset', 'length', 'mark', 'data'],
  remove_node: ['path', 'node', 'data'],
  remove_text: ['path', 'offset', 'text', 'marks', 'data'],
  set_mark: ['path', 'offset', 'length', 'properties', 'newProperties', 'data'],
  set_node: ['path', 'properties', 'newProperties', 'data'],
  set_selection: ['properties', 'newProperties', 'data'],
  set_value: ['properties', 'newProperties', 'data'],
  split_node: ['path', 'position', 'properties', 'target', 'data']

  /**
   * Default properties.
   *
   * @type {Object}
   */

};var DEFAULTS$11 = {
  length: undefined,
  mark: undefined,
  marks: undefined,
  newPath: undefined,
  node: undefined,
  offset: undefined,
  path: undefined,
  position: undefined,
  properties: undefined,
  newProperties: undefined,
  target: undefined,
  text: undefined,
  type: undefined,
  data: undefined

  /**
   * Operation.
   *
   * @type {Operation}
   */

};
var Operation = function (_Record) {
  inherits(Operation, _Record);

  function Operation() {
    classCallCheck(this, Operation);
    return possibleConstructorReturn(this, (Operation.__proto__ || Object.getPrototypeOf(Operation)).apply(this, arguments));
  }

  createClass(Operation, [{
    key: 'apply',


    /**
     * Apply the operation to a `value`.
     *
     * @param {Value} value
     * @return {Value}
     */

    value: function apply(value) {
      var next = applyOperation(value, this);
      return next;
    }

    /**
     * Invert the operation.
     *
     * @return {Operation}
     */

  }, {
    key: 'invert',
    value: function invert() {
      var inverted = invertOperation(this);
      return inverted;
    }

    /**
     * Return a JSON representation of the operation.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = this.object,
          type = this.type;

      var json = { object: object, type: type };
      var ATTRIBUTES = OPERATION_ATTRIBUTES[type];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ATTRIBUTES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var value = this[key];

          if (key === 'mark' || key === 'marks' || key === 'node' || key === 'path' || key === 'newPath') {
            value = value.toJSON();
          }

          if (key === 'properties' && type === 'merge_node') {
            var v = {};
            if ('data' in value) v.data = value.data.toJS();
            if ('type' in value) v.type = value.type;
            value = v;
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_mark') {
            var _v = {};
            if ('data' in value) _v.data = value.data.toJS();
            if ('type' in value) _v.type = value.type;
            value = _v;
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_node') {
            var _v2 = {};
            if ('data' in value) _v2.data = value.data.toJS();
            if ('type' in value) _v2.type = value.type;
            value = _v2;
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_selection') {
            var _v3 = {};
            if ('anchor' in value) _v3.anchor = value.anchor.toJSON();
            if ('focus' in value) _v3.focus = value.focus.toJSON();
            if ('isFocused' in value) _v3.isFocused = value.isFocused;
            if ('marks' in value) _v3.marks = value.marks && value.marks.toJSON();
            value = _v3;
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_value') {
            var _v4 = {};
            if ('data' in value) _v4.data = value.data.toJS();
            if ('decorations' in value) _v4.decorations = value.decorations.toJS();
            value = _v4;
          }

          if (key === 'properties' && type === 'split_node') {
            var _v5 = {};
            if ('data' in value) _v5.data = value.data.toJS();
            if ('type' in value) _v5.type = value.type;
            value = _v5;
          }

          if (key === 'data') {
            value = value.toJSON();
          }

          json[key] = value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return json;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Operation` with `attrs`.
     *
     * @param {Object|Array|List|String|Operation} attrs
     * @return {Operation}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Operation.isOperation(attrs)) {
        return attrs;
      }

      if (isPlainObject(attrs)) {
        return Operation.fromJSON(attrs);
      }

      throw new Error('`Operation.create` only accepts objects or operations, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Operations` from `elements`.
     *
     * @param {Array<Operation|Object>|List<Operation|Object>} elements
     * @return {List<Operation>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable.List.isList(elements) || Array.isArray(elements)) {
        var list = new immutable.List(elements.map(Operation.create));
        return list;
      }

      throw new Error('`Operation.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Operation` from a JSON `object`.
     *
     * @param {Object|Operation} object
     * @return {Operation}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Operation.isOperation(object)) {
        return object;
      }

      var type = object.type;

      var ATTRIBUTES = OPERATION_ATTRIBUTES[type];
      var attrs = { type: type };

      if (!ATTRIBUTES) {
        throw new Error('`Operation.fromJSON` was passed an unrecognized operation type: "' + type + '"');
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = ATTRIBUTES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          var v = object[key];

          // Default `data` to an empty object.
          if (key === 'data' && v === undefined) {
            v = {};
          }

          if (v === undefined) {
            throw new Error('`Operation.fromJSON` was passed a "' + type + '" operation without the required "' + key + '" attribute.');
          }

          if (key === 'path' || key === 'newPath') {
            v = PathUtils.create(v);
          }

          if (key === 'mark') {
            v = Mark.create(v);
          }

          if (key === 'marks' && v != null) {
            v = Mark.createSet(v);
          }

          if (key === 'node') {
            v = Node.create(v);
          }

          if (key === 'properties' && type === 'merge_node') {
            v = Node.createProperties(v);
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_mark') {
            v = Mark.createProperties(v);
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_node') {
            v = Node.createProperties(v);
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_selection') {
            v = Selection.createProperties(v);
          }

          if ((key === 'properties' || key === 'newProperties') && type === 'set_value') {
            v = Value.createProperties(v);
          }

          if (key === 'properties' && type === 'split_node') {
            v = Node.createProperties(v);
          }

          if (key === 'data') {
            v = immutable.Map(v);
          }

          attrs[key] = v;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var node = new Operation(attrs);
      return node;
    }

    /**
     * Check if `any` is a list of operations.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isOperationList',
    value: function isOperationList(any) {
      return immutable.List.isList(any) && any.every(function (item) {
        return Operation.isOperation(item);
      });
    }
  }]);
  return Operation;
}(immutable.Record(DEFAULTS$11));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$12 = {
  operations: undefined,
  value: undefined

  /**
   * Change.
   *
   * @type {Change}
   */

};
var Change = function (_Record) {
  inherits(Change, _Record);

  function Change() {
    classCallCheck(this, Change);
    return possibleConstructorReturn(this, (Change.__proto__ || Object.getPrototypeOf(Change)).apply(this, arguments));
  }

  createClass(Change, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the change.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        value: this.value.toJSON(options),
        operations: this.operations.toArray().map(function (o) {
          return o.toJSON(options);
        })
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Change` with `attrs`.
     *
     * @param {Object|Change} attrs
     * @return {Change}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Change.isChange(attrs)) {
        return attrs;
      }

      if (isPlainObject(attrs)) {
        return Change.fromJSON(attrs);
      }

      throw new Error('`Change.create` only accepts objects or changes, but you passed it: ' + attrs);
    }

    /**
     * Create a `Change` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Change}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var value = object.value,
          _object$operations = object.operations,
          operations = _object$operations === undefined ? [] : _object$operations;


      var change = new Change({
        value: Value.create(value),
        operations: Operation.createList(operations)
      });

      return change;
    }
  }]);
  return Change;
}(immutable.Record(DEFAULTS$12));

/**
 * A plugin that adds a set of commands to the editor.
 *
 * @param {Object} commands
 * @return {Object}
 */

function CommandsPlugin() {
  var commands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * On command, if it exists in our list of commands, call it.
   *
   * @param {Object} command
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCommand(command, editor, next) {
    var type = command.type,
        args = command.args;

    var fn = commands[type];
    if (!fn) return next();
    editor.command.apply(editor, [fn].concat(toConsumableArray(args)));
  }

  /**
   * On construct, register all the commands.
   *
   * @param {Editor} editor
   * @param {Function} next
   */

  function onConstruct(editor, next) {
    for (var command in commands) {
      editor.registerCommand(command);
    }

    return next();
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onCommand: onCommand,
    onConstruct: onConstruct
  };
}

var esrever = createCommonjsModule(function (module, exports) {
/*! https://mths.be/esrever v0.2.0 by @mathias */
(function(root) {

	// Detect free variables `exports`
	var freeExports = 'object' == 'object' && exports;

	// Detect free variable `module`
	var freeModule = 'object' == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
	var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

	var reverse = function(string) {
		// Step 1: deal with combining marks and astral symbols (surrogate pairs)
		string = string
			// Swap symbols with their combining marks so the combining marks go first
			.replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
				// Reverse the combining marks so they will end up in the same order
				// later on (after another round of reversing)
				return reverse($2) + $1;
			})
			// Swap high and low surrogates so the low surrogates go first
			.replace(regexSurrogatePair, '$2$1');
		// Step 2: reverse the code units in the string
		var result = '';
		var index = string.length;
		while (index--) {
			result += string.charAt(index);
		}
		return result;
	};

	/*--------------------------------------------------------------------------*/

	var esrever = {
		'version': '0.2.0',
		'reverse': reverse
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof undefined == 'function' &&
		typeof undefined.amd == 'object' &&
		undefined.amd
	) {
		undefined(function() {
			return esrever;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = esrever;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in esrever) {
				esrever.hasOwnProperty(key) && (freeExports[key] = esrever[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.esrever = esrever;
	}

}(commonjsGlobal));
});

var esrever_1 = esrever.reverse;

/**
 * Surrogate pair start and end points.
 *
 * @type {Number}
 */

var SURROGATE_START = 0xd800;
var SURROGATE_END = 0xdfff;

/**
 * A regex to match space characters.
 *
 * @type {RegExp}
 */

var SPACE = /\s/;

/**
 * A regex to match chameleon characters, that count as word characters as long
 * as they are inside of a word.
 *
 * @type {RegExp}
 */

var CHAMELEON = /['\u2018\u2019]/;

/**
 * A regex that matches punctuation.
 *
 * @type {RegExp}
 */

var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

/**
 * Is a character `code` in a surrogate character.
 *
 * @param {Number} code
 * @return {Boolean}
 */

function isSurrogate(code) {
  return SURROGATE_START <= code && code <= SURROGATE_END;
}

/**
 * Is a character a word character? Needs the `remaining` characters too.
 *
 * @param {String} char
 * @param {String|Void} remaining
 * @return {Boolean}
 */

function isWord(char, remaining) {
  if (SPACE.test(char)) return false;

  // If it's a chameleon character, recurse to see if the next one is or not.
  if (CHAMELEON.test(char)) {
    var next = remaining.charAt(0);
    var length = getCharLength(next);
    next = remaining.slice(0, length);
    var rest = remaining.slice(length);
    if (isWord(next, rest)) return true;
  }

  if (PUNCTUATION.test(char)) return false;
  return true;
}

/**
 * Get the length of a `character`.
 *
 * @param {String} char
 * @return {Number}
 */

function getCharLength(char) {
  return isSurrogate(char.charCodeAt(0)) ? 2 : 1;
}

/**
 * Get the offset to the end of the first character in `text`.
 *
 * @param {String} text
 * @return {Number}
 */

function getCharOffset(text) {
  var char = text.charAt(0);
  return getCharLength(char);
}

/**
 * Get the offset to the end of the character before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getCharOffsetBackward(text, offset) {
  text = text.slice(0, offset);
  text = esrever_1(text);
  return getCharOffset(text);
}

/**
 * Get the offset to the end of the character after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getCharOffsetForward(text, offset) {
  text = text.slice(offset);
  return getCharOffset(text);
}

/**
 * Get the offset to the end of the first word in `text`.
 *
 * @param {String} text
 * @return {Number}
 */

function getWordOffset(text) {
  var length = 0;
  var i = 0;
  var started = false;
  var char = void 0;

  while (char = text.charAt(i)) {
    var l = getCharLength(char);
    char = text.slice(i, i + l);
    var rest = text.slice(i + l);

    if (isWord(char, rest)) {
      started = true;
      length += l;
    } else if (!started) {
      length += l;
    } else {
      break;
    }

    i += l;
  }

  return length;
}

/**
 * Get the offset to the end of the word before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getWordOffsetBackward(text, offset) {
  text = text.slice(0, offset);
  text = esrever_1(text);
  var o = getWordOffset(text);
  return o;
}

/**
 * Get the offset to the end of the word after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getWordOffsetForward(text, offset) {
  text = text.slice(offset);
  var o = getWordOffset(text);
  return o;
}

/**
 * Export.
 *
 * @type {Object}
 */

var TextUtils = {
  getCharLength: getCharLength,
  getCharOffset: getCharOffset,
  getCharOffsetBackward: getCharOffsetBackward,
  getCharOffsetForward: getCharOffsetForward,
  getWordOffset: getWordOffset,
  getWordOffsetBackward: getWordOffsetBackward,
  getWordOffsetForward: getWordOffsetForward,
  isSurrogate: isSurrogate,
  isWord: isWord
};

/**
 * Ensure that an expanded selection is deleted first, and return the updated
 * range to account for the deleted part.
 *
 * @param {Editor}
 */

function deleteExpandedAtRange(editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
  }

  var value = editor.value;
  var document = value.document;
  var _range = range,
      start = _range.start,
      end = _range.end;


  if (document.hasDescendant(start.key)) {
    range = range.moveToStart();
  } else {
    range = range.moveTo(end.key, 0).normalize(document);
  }

  return range;
}

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$1 = {};

/**
 * Add a new `mark` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mixed} mark
 */

Commands$1.addMarkAtRange = function (editor, range, mark) {
  if (range.isCollapsed) return;

  var value = editor.value;
  var document = value.document;
  var start = range.start,
      end = range.end;

  var texts = document.getTextsAtRange(range);

  editor.withoutNormalizing(function () {
    texts.forEach(function (node) {
      var key = node.key;

      var index = 0;
      var length = node.text.length;

      if (key === start.key) index = start.offset;
      if (key === end.key) length = end.offset;
      if (key === start.key && key === end.key) length = end.offset - start.offset;

      editor.addMarkByKey(key, index, length, mark);
    });
  });
};

/**
 * Add a list of `marks` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Array<Mixed>} mark
 */

Commands$1.addMarksAtRange = function (editor, range, marks) {
  marks.forEach(function (mark) {
    return editor.addMarkAtRange(range, mark);
  });
};

/**
 * Delete everything in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteAtRange = function (editor, range) {
  // Snapshot the selection, which creates an extra undo save point, so that
  // when you undo a delete, the expanded selection will be retained.
  editor.snapshotSelection();

  var value = editor.value;
  var start = range.start,
      end = range.end;

  var startKey = start.key;
  var startOffset = start.offset;
  var endKey = end.key;
  var endOffset = end.offset;
  var document = value.document;

  var isStartVoid = document.hasVoidParent(startKey, editor);
  var isEndVoid = document.hasVoidParent(endKey, editor);
  var startBlock = document.getClosestBlock(startKey);
  var endBlock = document.getClosestBlock(endKey);

  // Check if we have a "hanging" selection case where the even though the
  // selection extends into the start of the end node, we actually want to
  // ignore that for UX reasons.
  var isHanging = startOffset === 0 && endOffset === 0 && isStartVoid === false && startKey === startBlock.getFirstText().key && endKey === endBlock.getFirstText().key;

  // If it's a hanging selection, nudge it back to end in the previous text.
  if (isHanging && isEndVoid) {
    var prevText = document.getPreviousText(endKey);
    endKey = prevText.key;
    endOffset = prevText.text.length;
    isEndVoid = document.hasVoidParent(endKey, editor);
  }

  editor.withoutNormalizing(function () {
    // If the start node is inside a void node, remove the void node and update
    // the starting point to be right after it, continuously until the start point
    // is not a void, or until the entire range is handled.
    while (isStartVoid) {
      var startVoid = document.getClosestVoid(startKey, editor);
      var nextText = document.getNextText(startKey);
      editor.removeNodeByKey(startVoid.key);

      // If the start and end keys are the same, we're done.
      if (startKey === endKey) return;

      // If there is no next text node, we're done.
      if (!nextText) return;

      // Continue...
      document = editor.value.document;
      startKey = nextText.key;
      startOffset = 0;
      isStartVoid = document.hasVoidParent(startKey, editor);
    }

    // If the end node is inside a void node, do the same thing but backwards. But
    // we don't need any aborting checks because if we've gotten this far there
    // must be a non-void node that will exit the loop.
    while (isEndVoid) {
      var endVoid = document.getClosestVoid(endKey, editor);
      var _prevText = document.getPreviousText(endKey);
      editor.removeNodeByKey(endVoid.key);

      // Continue...
      document = editor.value.document;
      endKey = _prevText.key;
      endOffset = _prevText.text.length;
      isEndVoid = document.hasVoidParent(endKey, editor);
    }

    // If the start and end key are the same, and it was a hanging selection, we
    // can just remove the entire block.
    if (startKey === endKey && isHanging) {
      editor.removeNodeByKey(startBlock.key);
      return;
    } else if (startKey === endKey) {
      // Otherwise, if it wasn't hanging, we're inside a single text node, so we can
      // simply remove the text in the range.
      var index = startOffset;
      var length = endOffset - startOffset;
      editor.removeTextByKey(startKey, index, length);
      return;
    } else {
      // Otherwise, we need to recursively remove text and nodes inside the start
      // block after the start offset and inside the end block before the end
      // offset. Then remove any blocks that are in between the start and end
      // blocks. Then finally merge the start and end nodes.
      startBlock = document.getClosestBlock(startKey);
      endBlock = document.getClosestBlock(endKey);
      var startText = document.getNode(startKey);
      var endText = document.getNode(endKey);
      var startLength = startText.text.length - startOffset;
      var endLength = endOffset;

      var ancestor = document.getCommonAncestor(startKey, endKey);
      var startChild = ancestor.getFurthestAncestor(startKey);
      var endChild = ancestor.getFurthestAncestor(endKey);

      var startParent = document.getParent(startBlock.key);
      var startParentIndex = startParent.nodes.indexOf(startBlock);
      var endParentIndex = startParent.nodes.indexOf(endBlock);

      var child = void 0;

      // Iterate through all of the nodes in the tree after the start text node
      // but inside the end child, and remove them.
      child = startText;

      while (child.key !== startChild.key) {
        var parent = document.getParent(child.key);
        var _index = parent.nodes.indexOf(child);
        var afters = parent.nodes.slice(_index + 1);

        afters.reverse().forEach(function (node) {
          editor.removeNodeByKey(node.key);
        });

        child = parent;
      }

      // Remove all of the middle children.
      var startChildIndex = ancestor.nodes.indexOf(startChild);
      var endChildIndex = ancestor.nodes.indexOf(endChild);
      var middles = ancestor.nodes.slice(startChildIndex + 1, endChildIndex);

      middles.reverse().forEach(function (node) {
        editor.removeNodeByKey(node.key);
      });

      // Remove the nodes before the end text node in the tree.
      child = endText;

      while (child.key !== endChild.key) {
        var _parent = document.getParent(child.key);
        var _index2 = _parent.nodes.indexOf(child);
        var befores = _parent.nodes.slice(0, _index2);

        befores.reverse().forEach(function (node) {
          editor.removeNodeByKey(node.key);
        });

        child = _parent;
      }

      // Remove any overlapping text content from the leaf text nodes.
      if (startLength !== 0) {
        editor.removeTextByKey(startKey, startOffset, startLength);
      }

      if (endLength !== 0) {
        editor.removeTextByKey(endKey, 0, endOffset);
      }

      // If the start and end blocks aren't the same, move and merge the end block
      // into the start block.
      if (startBlock.key !== endBlock.key) {
        document = editor.value.document;
        var lonely = document.getFurthestOnlyChildAncestor(endBlock.key);

        // Move the end block to be right after the start block.
        if (endParentIndex !== startParentIndex + 1) {
          editor.moveNodeByKey(endBlock.key, startParent.key, startParentIndex + 1);
        }

        // If the selection is hanging, just remove the start block, otherwise
        // merge the end block into it.
        if (isHanging) {
          editor.removeNodeByKey(startBlock.key);
        } else {
          editor.mergeNodeByKey(endBlock.key);
        }

        // If nested empty blocks are left over above the end block, remove them.
        if (lonely) {
          editor.removeNodeByKey(lonely.key);
        }
      }
    }
  });
};

/**
 * Delete backward `n` characters at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} n (optional)
 */

Commands$1.deleteBackwardAtRange = function (editor, range) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  var value = editor.value;
  var document = value.document;
  var _range2 = range,
      start = _range2.start,
      focus = _range2.focus;

  // If the range is expanded, perform a regular delete instead.

  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var voidParent = document.getClosestVoid(start.key, editor);

  // If there is a void parent, delete it.
  if (voidParent) {
    editor.removeNodeByKey(voidParent.key);
    return;
  }

  // If the range is at the start of the document, abort.
  if (start.isAtStartOfNode(document)) {
    return;
  }

  var block = document.getClosestBlock(start.key);

  // PERF: If the closest block is empty, remove it. This is just a shortcut,
  // since merging it would result in the same outcome.
  if (document.nodes.size !== 1 && block && block.text === '' && block.nodes.size === 1) {
    editor.removeNodeByKey(block.key);
    return;
  }

  // If the range is at the start of the text node, we need to figure out what
  // is behind it to know how to delete...
  var text = document.getDescendant(start.key);

  if (start.isAtStartOfNode(text)) {
    var prev = document.getPreviousText(text.key);
    var inline = document.getClosestInline(text.key);

    // If the range is at the start of the inline node, and previous text node
    // is empty, take the text node before that, or "prevBlock" would be the
    // same node as "block"
    if (inline && prev.text === '') {
      prev = document.getPreviousText(prev.key);
    }

    var prevBlock = document.getClosestBlock(prev.key);
    var prevVoid = document.getClosestVoid(prev.key, editor);

    // If the previous text node has a void parent, remove it.
    if (prevVoid) {
      editor.removeNodeByKey(prevVoid.key);
      return;
    }

    // If we're deleting by one character and the previous text node is not
    // inside the current block, we need to merge the two blocks together.
    if (n === 1 && prevBlock !== block) {
      range = range.moveAnchorTo(prev.key, prev.text.length);
      editor.deleteAtRange(range);
      return;
    }
  }

  // If the focus offset is farther than the number of characters to delete,
  // just remove the characters backwards inside the current node.
  if (n < focus.offset) {
    range = range.moveFocusBackward(n);
    editor.deleteAtRange(range);
    return;
  }

  // Otherwise, we need to see how many nodes backwards to go.
  var node = text;
  var offset = 0;
  var traversed = focus.offset;

  while (n > traversed) {
    node = document.getPreviousText(node.key);
    var next = traversed + node.text.length;

    if (n <= next) {
      offset = next - n;
      break;
    } else {
      traversed = next;
    }
  }

  range = range.moveAnchorTo(node.key, offset);
  editor.deleteAtRange(range);
};

/**
 * Delete backward until the character boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteCharBackwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var n = TextUtils.getCharOffsetBackward(text, o);
  editor.deleteBackwardAtRange(range, n);
};

/**
 * Delete forward until the character boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteCharForwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var n = TextUtils.getCharOffsetForward(text, o);
  editor.deleteForwardAtRange(range, n);
};

/**
 * Delete forward `n` characters at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} n (optional)
 */

Commands$1.deleteForwardAtRange = function (editor, range) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  var value = editor.value;
  var document = value.document;
  var _range3 = range,
      start = _range3.start,
      focus = _range3.focus;

  // If the range is expanded, perform a regular delete instead.

  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var voidParent = document.getClosestVoid(start.key, editor);

  // If the node has a void parent, delete it.
  if (voidParent) {
    editor.removeNodeByKey(voidParent.key);
    return;
  }

  var block = document.getClosestBlock(start.key);

  // If the closest is not void, but empty, remove it
  if (block && !editor.isVoid(block) && block.text === '' && document.nodes.size !== 1) {
    var nextBlock = document.getNextBlock(block.key);
    editor.removeNodeByKey(block.key);

    if (nextBlock && nextBlock.key) {
      editor.moveToStartOfNode(nextBlock);
    }

    return;
  }

  // If the range is at the start of the document, abort.
  if (start.isAtEndOfNode(document)) {
    return;
  }

  // If the range is at the start of the text node, we need to figure out what
  // is behind it to know how to delete...
  var text = document.getDescendant(start.key);

  if (start.isAtEndOfNode(text)) {
    var next = document.getNextText(text.key);
    var _nextBlock = document.getClosestBlock(next.key);
    var nextVoid = document.getClosestVoid(next.key, editor);

    // If the next text node has a void parent, remove it.
    if (nextVoid) {
      editor.removeNodeByKey(nextVoid.key);
      return;
    }

    // If we're deleting by one character and the previous text node is not
    // inside the current block, we need to merge the two blocks together.
    if (n === 1 && _nextBlock !== block) {
      range = range.moveFocusTo(next.key, 0);
      editor.deleteAtRange(range);
      return;
    }
  }

  // If the remaining characters to the end of the node is greater than or equal
  // to the number of characters to delete, just remove the characters forwards
  // inside the current node.
  if (n <= text.text.length - focus.offset) {
    range = range.moveFocusForward(n);
    editor.deleteAtRange(range);
    return;
  }

  // Otherwise, we need to see how many nodes forwards to go.
  var node = text;
  var offset = focus.offset;
  var traversed = text.text.length - focus.offset;

  while (n > traversed) {
    node = document.getNextText(node.key);
    var _next = traversed + node.text.length;

    if (n <= _next) {
      offset = n - traversed;
      break;
    } else {
      traversed = _next;
    }
  }

  range = range.moveFocusTo(node.key, offset);
  editor.deleteAtRange(range);
};

/**
 * Delete backward until the line boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteLineBackwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  editor.deleteBackwardAtRange(range, o);
};

/**
 * Delete forward until the line boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteLineForwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  editor.deleteForwardAtRange(range, startBlock.text.length - o);
};

/**
 * Delete backward until the word boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteWordBackwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var n = o === 0 ? 1 : TextUtils.getWordOffsetBackward(text, o);
  editor.deleteBackwardAtRange(range, n);
};

/**
 * Delete forward until the word boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteWordForwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var wordOffset = TextUtils.getWordOffsetForward(text, o);
  var n = wordOffset === 0 ? 1 : wordOffset;
  editor.deleteForwardAtRange(range, n);
};

/**
 * Insert a `block` node at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Block|String|Object} block
 */

Commands$1.insertBlockAtRange = function (editor, range, block) {
  range = deleteExpandedAtRange(editor, range);
  block = Block.create(block);

  var value = editor.value;
  var document = value.document;
  var _range4 = range,
      start = _range4.start;

  var startKey = start.key;
  var startOffset = start.offset;
  var startBlock = document.getClosestBlock(startKey);
  var startInline = document.getClosestInline(startKey);
  var parent = document.getParent(startBlock.key);
  var index = parent.nodes.indexOf(startBlock);

  if (editor.isVoid(startBlock)) {
    var extra = start.isAtEndOfNode(startBlock) ? 1 : 0;
    editor.insertNodeByKey(parent.key, index + extra, block);
  } else if (!startInline && startBlock.text === '') {
    editor.insertNodeByKey(parent.key, index + 1, block);
  } else if (start.isAtStartOfNode(startBlock)) {
    editor.insertNodeByKey(parent.key, index, block);
  } else if (start.isAtEndOfNode(startBlock)) {
    editor.insertNodeByKey(parent.key, index + 1, block);
  } else {
    if (startInline && editor.isVoid(startInline)) {
      var atEnd = start.isAtEndOfNode(startInline);
      var siblingText = atEnd ? document.getNextText(startKey) : document.getPreviousText(startKey);

      var splitRange = atEnd ? range.moveToStartOfNode(siblingText) : range.moveToEndOfNode(siblingText);

      startKey = splitRange.start.key;
      startOffset = splitRange.start.offset;
    }

    editor.withoutNormalizing(function () {
      editor.splitDescendantsByKey(startBlock.key, startKey, startOffset);
      editor.insertNodeByKey(parent.key, index + 1, block);
    });
  }
};

/**
 * Insert a `fragment` at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Document} fragment
 */

Commands$1.insertFragmentAtRange = function (editor, range, fragment) {
  editor.withoutNormalizing(function () {
    range = deleteExpandedAtRange(editor, range);

    // If the fragment is empty, there's nothing to do after deleting.
    if (!fragment.nodes.size) return;

    // Regenerate the keys for all of the fragments nodes, so that they're
    // guaranteed not to collide with the existing keys in the document. Otherwise
    // they will be rengerated automatically and we won't have an easy way to
    // reference them.
    fragment = fragment.mapDescendants(function (child) {
      return child.regenerateKey();
    });

    // Calculate a few things...
    var _range5 = range,
        start = _range5.start;
    var value = editor.value;
    var document = value.document;

    var startText = document.getDescendant(start.key);
    var startBlock = document.getClosestBlock(startText.key);
    var startChild = startBlock.getFurthestAncestor(startText.key);
    var isAtStart = start.isAtStartOfNode(startBlock);
    var parent = document.getParent(startBlock.key);
    var index = parent.nodes.indexOf(startBlock);
    var blocks = fragment.getBlocks();
    var firstChild = fragment.nodes.first();
    var lastChild = fragment.nodes.last();
    var firstBlock = blocks.first();
    var lastBlock = blocks.last();
    var insertionNode = findInsertionNode(fragment, document, startBlock.key);

    // If the fragment only contains a void block, use `insertBlock` instead.
    if (firstBlock === lastBlock && editor.isVoid(firstBlock)) {
      editor.insertBlockAtRange(range, firstBlock);
      return;
    }

    // If inserting the entire fragment and it starts or ends with a single
    // nested block, e.g. a table, we do not merge it with existing blocks.
    if (insertionNode === fragment && (firstChild.hasBlockChildren() || lastChild.hasBlockChildren())) {
      fragment.nodes.reverse().forEach(function (node) {
        editor.insertBlockAtRange(range, node);
      });
      return;
    }

    // If the first and last block aren't the same, we need to insert all of the
    // nodes after the insertion node's first block at the index.
    if (firstBlock !== lastBlock) {
      var lonelyParent = insertionNode.getFurthest(firstBlock.key, function (p) {
        return p.nodes.size === 1;
      });
      var lonelyChild = lonelyParent || firstBlock;

      var startIndex = parent.nodes.indexOf(startBlock);
      var excludingLonelyChild = insertionNode.removeNode(lonelyChild.key);

      excludingLonelyChild.nodes.forEach(function (node, i) {
        var newIndex = startIndex + i + 1;
        editor.insertNodeByKey(parent.key, newIndex, node);
      });
    }

    // Check if we need to split the node.
    if (start.offset !== 0) {
      editor.splitDescendantsByKey(startChild.key, start.key, start.offset);
    }

    // Update our variables with the new value.
    document = editor.value.document;
    startText = document.getDescendant(start.key);
    startBlock = document.getClosestBlock(start.key);
    startChild = startBlock.getFurthestAncestor(startText.key);

    // If the first and last block aren't the same, we need to move any of the
    // starting block's children after the split into the last block of the
    // fragment, which has already been inserted.
    if (firstBlock !== lastBlock) {
      var nextChild = isAtStart ? startChild : startBlock.getNextSibling(startChild.key);
      var nextNodes = nextChild ? startBlock.nodes.skipUntil(function (n) {
        return n.key === nextChild.key;
      }) : immutable.List();
      var lastIndex = lastBlock.nodes.size;

      nextNodes.forEach(function (node, i) {
        var newIndex = lastIndex + i;
        editor.moveNodeByKey(node.key, lastBlock.key, newIndex);
      });
    }

    // If the starting block is empty, we replace it entirely with the first block
    // of the fragment, since this leads to a more expected behavior for the user.
    if (!editor.isVoid(startBlock) && startBlock.text === '' && !startBlock.findDescendant(function (n) {
      return editor.isVoid(n);
    })) {
      editor.removeNodeByKey(startBlock.key);
      editor.insertNodeByKey(parent.key, index, firstBlock);
    } else {
      // Otherwise, we maintain the starting block, and insert all of the first
      // block's inline nodes into it at the split point.
      var inlineChild = startBlock.getFurthestAncestor(startText.key);
      var inlineIndex = startBlock.nodes.indexOf(inlineChild);

      firstBlock.nodes.forEach(function (inline, i) {
        var o = start.offset === 0 ? 0 : 1;
        var newIndex = inlineIndex + i + o;
        editor.insertNodeByKey(startBlock.key, newIndex, inline);
      });
    }
  });
};

var findInsertionNode = function findInsertionNode(fragment, document, startKey) {
  var hasSingleNode = function hasSingleNode(object) {
    if (!object || object.object === 'text') return;
    return object.nodes.size === 1;
  };

  var firstNode = function firstNode(object) {
    return object && object.nodes.first();
  };
  var node = fragment;

  if (hasSingleNode(fragment)) {
    var fragmentInner = firstNode(fragment);

    var matches = function matches(documentNode) {
      return documentNode.type === fragmentInner.type;
    };
    var documentInner = document.getFurthest(startKey, matches);

    if (documentInner === document.getParent(startKey)) node = fragmentInner;

    while (hasSingleNode(fragmentInner) && hasSingleNode(documentInner)) {
      fragmentInner = firstNode(fragmentInner);
      documentInner = firstNode(documentInner);

      if (fragmentInner.type === documentInner.type) {
        node = fragmentInner;
      } else {
        break;
      }
    }
  }

  return node;
};

/**
 * Insert an `inline` node at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Inline|String|Object} inline
 */

Commands$1.insertInlineAtRange = function (editor, range, inline) {
  inline = Inline.create(inline);

  editor.withoutNormalizing(function () {
    range = deleteExpandedAtRange(editor, range);

    var value = editor.value;
    var document = value.document;
    var _range6 = range,
        start = _range6.start;

    var parent = document.getParent(start.key);
    var startText = document.assertDescendant(start.key);
    var index = parent.nodes.indexOf(startText);

    if (editor.isVoid(parent)) return;

    editor.splitNodeByKey(start.key, start.offset);
    editor.insertNodeByKey(parent.key, index + 1, inline);
  });
};

/**
 * Insert `text` at a `range`, with optional `marks`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$1.insertTextAtRange = function (editor, range, text, marks) {
  range = deleteExpandedAtRange(editor, range);

  var value = editor.value;
  var document = value.document;
  var _range7 = range,
      start = _range7.start;

  var offset = start.offset;
  var parent = document.getParent(start.key);

  if (editor.isVoid(parent)) {
    return;
  }

  editor.insertTextByKey(start.key, offset, text, marks);
};

/**
 * Remove an existing `mark` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mark|String} mark (optional)
 */

Commands$1.removeMarkAtRange = function (editor, range, mark) {
  if (range.isCollapsed) return;

  var value = editor.value;
  var document = value.document;

  var texts = document.getTextsAtRange(range);
  var start = range.start,
      end = range.end;


  editor.withoutNormalizing(function () {
    texts.forEach(function (node) {
      var key = node.key;

      var index = 0;
      var length = node.text.length;

      if (key === start.key) index = start.offset;
      if (key === end.key) length = end.offset;
      if (key === start.key && key === end.key) length = end.offset - start.offset;

      editor.removeMarkByKey(key, index, length, mark);
    });
  });
};

/**
 * Set the `properties` of block nodes in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Object|String} properties
 */

Commands$1.setBlocksAtRange = function (editor, range, properties) {
  var value = editor.value;
  var document = value.document;

  var blocks = document.getLeafBlocksAtRange(range);

  var start = range.start,
      end = range.end,
      isCollapsed = range.isCollapsed;

  var isStartVoid = document.hasVoidParent(start.key, editor);
  var startBlock = document.getClosestBlock(start.key);
  var endBlock = document.getClosestBlock(end.key);

  // Check if we have a "hanging" selection case where the even though the
  // selection extends into the start of the end node, we actually want to
  // ignore that for UX reasons.
  var isHanging = isCollapsed === false && start.offset === 0 && end.offset === 0 && isStartVoid === false && start.key === startBlock.getFirstText().key && end.key === endBlock.getFirstText().key;

  // If it's a hanging selection, ignore the last block.
  var sets = isHanging ? blocks.slice(0, -1) : blocks;

  editor.withoutNormalizing(function () {
    sets.forEach(function (block) {
      editor.setNodeByKey(block.key, properties);
    });
  });
};

/**
 * Set the `properties` of inline nodes in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Object|String} properties
 */

Commands$1.setInlinesAtRange = function (editor, range, properties) {
  var value = editor.value;
  var document = value.document;

  var inlines = document.getLeafInlinesAtRange(range);

  editor.withoutNormalizing(function () {
    inlines.forEach(function (inline) {
      editor.setNodeByKey(inline.key, properties);
    });
  });
};

/**
 * Split the block nodes at a `range`, to optional `height`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} height (optional)
 */

Commands$1.splitBlockAtRange = function (editor, range) {
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  range = deleteExpandedAtRange(editor, range);

  var _range8 = range,
      start = _range8.start,
      end = _range8.end;
  var value = editor.value;
  var _value = value,
      document = _value.document;

  var node = document.assertDescendant(start.key);
  var parent = document.getClosestBlock(node.key);
  var h = 0;

  while (parent && parent.object === 'block' && h < height) {
    node = parent;
    parent = document.getClosestBlock(parent.key);
    h++;
  }

  editor.withoutNormalizing(function () {
    editor.splitDescendantsByKey(node.key, start.key, start.offset);

    value = editor.value;
    document = value.document;

    if (range.isExpanded) {
      if (range.isBackward) range = range.flip();
      var nextBlock = document.getNextBlock(node.key);
      range = range.moveAnchorToStartOfNode(nextBlock);
      range = range.setFocus(range.focus.setPath(null));

      if (start.key === end.key) {
        range = range.moveFocusTo(range.anchor.key, end.offset - start.offset);
      }

      range = document.resolveRange(range);
      editor.deleteAtRange(range);
    }
  });
};

/**
 * Split the inline nodes at a `range`, to optional `height`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} height (optional)
 */

Commands$1.splitInlineAtRange = function (editor, range) {
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

  range = deleteExpandedAtRange(editor, range);

  var _range9 = range,
      start = _range9.start;
  var value = editor.value;
  var document = value.document;

  var node = document.assertDescendant(start.key);
  var parent = document.getClosestInline(node.key);
  var h = 0;

  while (parent && parent.object === 'inline' && h < height) {
    node = parent;
    parent = document.getClosestInline(parent.key);
    h++;
  }

  editor.splitDescendantsByKey(node.key, start.key, start.offset);
};

/**
 * Add or remove a `mark` from the characters at `range`, depending on whether
 * it's already there.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mixed} mark
 */

Commands$1.toggleMarkAtRange = function (editor, range, mark) {
  if (range.isCollapsed) return;

  mark = Mark.create(mark);

  var value = editor.value;
  var document = value.document;

  var marks = document.getActiveMarksAtRange(range);
  var exists = marks.some(function (m) {
    return m.equals(mark);
  });

  if (exists) {
    editor.removeMarkAtRange(range, mark);
  } else {
    editor.addMarkAtRange(range, mark);
  }
};

/**
 * Unwrap all of the block nodes in a `range` from a block with `properties`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String|Object} properties
 */

Commands$1.unwrapBlockAtRange = function (editor, range, properties) {
  properties = Node.createProperties(properties);

  var value = editor.value;
  var document = value.document;

  var blocks = document.getLeafBlocksAtRange(range);
  var wrappers = blocks.map(function (block) {
    return document.getClosest(block.key, function (parent) {
      if (parent.object !== 'block') return false;
      if (properties.type != null && parent.type !== properties.type) return false;
      if (properties.data != null && !parent.data.isSuperset(properties.data)) return false;
      return true;
    });
  }).filter(function (exists) {
    return exists;
  }).toOrderedSet().toList();

  editor.withoutNormalizing(function () {
    wrappers.forEach(function (block) {
      var first = block.nodes.first();
      var last = block.nodes.last();
      var parent = editor.value.document.getParent(block.key);
      var index = parent.nodes.indexOf(block);

      var children = block.nodes.filter(function (child) {
        return blocks.some(function (b) {
          return child === b || child.hasDescendant(b.key);
        });
      });

      var firstMatch = children.first();
      var lastMatch = children.last();

      if (first === firstMatch && last === lastMatch) {
        block.nodes.forEach(function (child, i) {
          editor.moveNodeByKey(child.key, parent.key, index + i);
        });

        editor.removeNodeByKey(block.key);
      } else if (last === lastMatch) {
        block.nodes.skipUntil(function (n) {
          return n === firstMatch;
        }).forEach(function (child, i) {
          editor.moveNodeByKey(child.key, parent.key, index + 1 + i);
        });
      } else if (first === firstMatch) {
        block.nodes.takeUntil(function (n) {
          return n === lastMatch;
        }).push(lastMatch).forEach(function (child, i) {
          editor.moveNodeByKey(child.key, parent.key, index + i);
        });
      } else {
        var firstText = firstMatch.getFirstText();

        editor.splitDescendantsByKey(block.key, firstText.key, 0);

        document = editor.value.document;

        children.forEach(function (child, i) {
          if (i === 0) {
            var extra = child;
            child = document.getNextBlock(child.key);
            editor.removeNodeByKey(extra.key);
          }

          editor.moveNodeByKey(child.key, parent.key, index + 1 + i);
        });
      }
    });
  });
};

/**
 * Unwrap the inline nodes in a `range` from an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String|Object} properties
 */

Commands$1.unwrapInlineAtRange = function (editor, range, properties) {
  properties = Node.createProperties(properties);

  var value = editor.value;
  var document = value.document;

  var texts = document.getTextsAtRange(range);
  var inlines = texts.map(function (text) {
    return document.getClosest(text.key, function (parent) {
      if (parent.object !== 'inline') return false;
      if (properties.type != null && parent.type !== properties.type) return false;
      if (properties.data != null && !parent.data.isSuperset(properties.data)) return false;
      return true;
    });
  }).filter(function (exists) {
    return exists;
  }).toOrderedSet().toList();

  editor.withoutNormalizing(function () {
    inlines.forEach(function (inline) {
      var parent = editor.value.document.getParent(inline.key);
      var index = parent.nodes.indexOf(inline);

      inline.nodes.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, parent.key, index + i);
      });

      editor.removeNodeByKey(inline.key);
    });
  });
};

/**
 * Wrap all of the blocks in a `range` in a new `block`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Block|Object|String} block
 */

Commands$1.wrapBlockAtRange = function (editor, range, block) {
  block = Block.create(block);
  block = block.set('nodes', block.nodes.clear());

  var value = editor.value;
  var document = value.document;


  var blocks = document.getLeafBlocksAtRange(range);
  var firstblock = blocks.first();
  var lastblock = blocks.last();
  var parent = void 0,
      siblings = void 0,
      index = void 0;

  // If there is only one block in the selection then we know the parent and
  // siblings.
  if (blocks.length === 1) {
    parent = document.getParent(firstblock.key);
    siblings = blocks;
  } else {
    // Determine closest shared parent to all blocks in selection.
    parent = document.getClosest(firstblock.key, function (p1) {
      return !!document.getClosest(lastblock.key, function (p2) {
        return p1 === p2;
      });
    });
  }

  // If no shared parent could be found then the parent is the document.
  if (parent == null) parent = document;

  // Create a list of direct children siblings of parent that fall in the
  // selection.
  if (siblings == null) {
    var indexes = parent.nodes.reduce(function (ind, node, i) {
      if (node === firstblock || node.hasDescendant(firstblock.key)) ind[0] = i;
      if (node === lastblock || node.hasDescendant(lastblock.key)) ind[1] = i;
      return ind;
    }, []);

    index = indexes[0];
    siblings = parent.nodes.slice(indexes[0], indexes[1] + 1);
  }

  // Get the index to place the new wrapped node at.
  if (index == null) {
    index = parent.nodes.indexOf(siblings.first());
  }

  editor.withoutNormalizing(function () {
    // Inject the new block node into the parent.
    editor.insertNodeByKey(parent.key, index, block);

    // Move the sibling nodes into the new block node.
    siblings.forEach(function (node, i) {
      editor.moveNodeByKey(node.key, block.key, i);
    });
  });
};

/**
 * Wrap the text and inlines in a `range` in a new `inline`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Inline|Object|String} inline
 */

Commands$1.wrapInlineAtRange = function (editor, range, inline) {
  var value = editor.value;
  var document = value.document;
  var start = range.start,
      end = range.end;


  if (range.isCollapsed) {
    // Wrapping an inline void
    var inlineParent = document.getClosestInline(start.key);

    if (!inlineParent) {
      return;
    }

    if (!editor.isVoid(inlineParent)) {
      return;
    }

    return editor.wrapInlineByKey(inlineParent.key, inline);
  }

  inline = Inline.create(inline);
  inline = inline.set('nodes', inline.nodes.clear());

  var blocks = document.getLeafBlocksAtRange(range);
  var startBlock = document.getClosestBlock(start.key);
  var endBlock = document.getClosestBlock(end.key);
  var startInline = document.getClosestInline(start.key);
  var endInline = document.getClosestInline(end.key);
  var startChild = startBlock.getFurthestAncestor(start.key);
  var endChild = endBlock.getFurthestAncestor(end.key);

  editor.withoutNormalizing(function () {
    if (!startInline || startInline !== endInline) {
      editor.splitDescendantsByKey(endChild.key, end.key, end.offset);
      editor.splitDescendantsByKey(startChild.key, start.key, start.offset);
    }

    document = editor.value.document;
    startBlock = document.getDescendant(startBlock.key);
    endBlock = document.getDescendant(endBlock.key);
    startChild = startBlock.getFurthestAncestor(start.key);
    endChild = endBlock.getFurthestAncestor(end.key);
    var startIndex = startBlock.nodes.indexOf(startChild);
    var endIndex = endBlock.nodes.indexOf(endChild);

    if (startInline && startInline === endInline) {
      var text = startBlock.getTextsAtRange(range).get(0).splitText(start.offset)[1].splitText(end.offset - start.offset)[0];

      inline = inline.set('nodes', immutable.List([text]));
      editor.insertInlineAtRange(range, inline);

      var inlinekey = inline.getFirstText().key;
      var rng = {
        anchor: {
          key: inlinekey,
          offset: 0
        },
        focus: {
          key: inlinekey,
          offset: end.offset - start.offset
        },
        isFocused: true
      };
      editor.select(rng);
    } else if (startBlock === endBlock) {
      document = editor.value.document;
      startBlock = document.getClosestBlock(start.key);
      startChild = startBlock.getFurthestAncestor(start.key);

      var startInner = document.getNextSibling(startChild.key);
      var startInnerIndex = startBlock.nodes.indexOf(startInner);
      var endInner = start.key === end.key ? startInner : startBlock.getFurthestAncestor(end.key);
      var inlines = startBlock.nodes.skipUntil(function (n) {
        return n === startInner;
      }).takeUntil(function (n) {
        return n === endInner;
      }).push(endInner);

      var node = inline.regenerateKey();

      editor.insertNodeByKey(startBlock.key, startInnerIndex, node);

      inlines.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, node.key, i);
      });
    } else {
      var startInlines = startBlock.nodes.slice(startIndex + 1);
      var endInlines = endBlock.nodes.slice(0, endIndex + 1);
      var startNode = inline.regenerateKey();
      var endNode = inline.regenerateKey();

      editor.insertNodeByKey(startBlock.key, startIndex + 1, startNode);
      editor.insertNodeByKey(endBlock.key, endIndex, endNode);

      startInlines.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, startNode.key, i);
      });

      endInlines.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, endNode.key, i);
      });

      blocks.slice(1, -1).forEach(function (block) {
        var node = inline.regenerateKey();
        editor.insertNodeByKey(block.key, 0, node);

        block.nodes.forEach(function (child, i) {
          editor.moveNodeByKey(child.key, node.key, i);
        });
      });
    }
  });
};

/**
 * Wrap the text in a `range` in a prefix/suffix.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String} prefix
 * @param {String} suffix (optional)
 */

Commands$1.wrapTextAtRange = function (editor, range, prefix) {
  var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : prefix;
  var start = range.start,
      end = range.end;

  var startRange = range.moveToStart();
  var endRange = range.moveToEnd();

  if (start.key === end.key) {
    endRange = endRange.moveForward(prefix.length);
  }

  editor.withoutNormalizing(function () {
    editor.insertTextAtRange(startRange, prefix, []);
    editor.insertTextAtRange(endRange, suffix, []);
  });
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$2(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$2.Cache = _MapCache;

var memoize_1 = memoize$2;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

var defineProperty$1 = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$1;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value, path) {
    return hasIn_1(object, path);
  });
}

var _basePick = basePick;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply$1 = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply$1(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = _flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});

var pick_1 = pick;

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$2 = {};

/**
 * Add mark to text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mixed} mark
 */

Commands$2.addMarkByPath = function (editor, path, offset, length, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var leaves = node.getLeaves();

  var operations = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the operation, continue on.
    if (ay < bx || by < ax) return;

    // If the leaf already has the mark, continue on.
    if (leaf.marks.has(mark)) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);

    operations.push({
      type: 'add_mark',
      path: path,
      offset: start,
      length: end - start,
      mark: mark
    });
  });

  operations.forEach(function (op) {
    return editor.applyOperation(op);
  });
};

/**
 * Insert a `fragment` at `index` in a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} index
 * @param {Fragment} fragment
 */

Commands$2.insertFragmentByPath = function (editor, path, index, fragment) {
  fragment.nodes.forEach(function (node, i) {
    editor.insertNodeByPath(path, index + i, node);
  });
};

/**
 * Insert a `node` at `index` in a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} index
 * @param {Node} node
 */

Commands$2.insertNodeByPath = function (editor, path, index, node) {
  editor.applyOperation({
    type: 'insert_node',
    path: path.concat(index),
    node: node
  });
};

/**
 * Insert `text` at `offset` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$2.insertTextByPath = function (editor, path, offset, text, marks) {
  var value = editor.value;
  var decorations = value.decorations,
      document = value.document;

  var node = document.assertNode(path);
  marks = marks || node.getMarksAtIndex(offset);

  var updated = false;
  var key = node.key;


  var decs = decorations.filter(function (dec) {
    var start = dec.start,
        end = dec.end,
        mark = dec.mark;

    var isAtomic = editor.isAtomic(mark);
    if (!isAtomic) return true;
    if (start.key !== key) return true;

    if (start.offset < offset && (end.key !== key || end.offset > offset)) {
      updated = true;
      return false;
    }

    return true;
  });

  if (updated) {
    editor.setDecorations(decs);
  }

  editor.applyOperation({
    type: 'insert_text',
    path: path,
    offset: offset,
    text: text,
    marks: marks
  });
};

/**
 * Merge a node by `path` with the previous node.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.mergeNodeByPath = function (editor, path) {
  var value = editor.value;
  var document = value.document;

  var original = document.getDescendant(path);
  var previous = document.getPreviousSibling(path);

  if (!previous) {
    throw new Error('Unable to merge node with path "' + path + '", because it has no previous sibling.');
  }

  var position = previous.object === 'text' ? previous.text.length : previous.nodes.size;

  editor.applyOperation({
    type: 'merge_node',
    path: path,
    position: position,
    // for undos to succeed we only need the type and data because
    // these are the only properties that get changed in the merge operation
    properties: {
      type: original.type,
      data: original.data
    },
    target: null
  });
};

/**
 * Move a node by `path` to a new parent by `newParentPath` and `newIndex`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {String} newParentPath
 * @param {Number} newIndex
 */

Commands$2.moveNodeByPath = function (editor, path, newParentPath, newIndex) {
  // If the operation path and newParentPath are the same,
  // this should be considered a NOOP
  if (PathUtils.isEqual(path, newParentPath)) {
    return editor;
  }

  var newPath = newParentPath.concat(newIndex);

  if (PathUtils.isEqual(path, newPath)) {
    return editor;
  }

  editor.applyOperation({
    type: 'move_node',
    path: path,
    newPath: newPath
  });
};

/**
 * Remove mark from text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mark} mark
 */

Commands$2.removeMarkByPath = function (editor, path, offset, length, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var leaves = node.getLeaves();

  var operations = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the operation, continue on.
    if (ay < bx || by < ax) return;

    // If the leaf already has the mark, continue on.
    if (!leaf.marks.has(mark)) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);

    operations.push({
      type: 'remove_mark',
      path: path,
      offset: start,
      length: end - start,
      mark: mark
    });
  });

  operations.forEach(function (op) {
    return editor.applyOperation(op);
  });
};

/**
 * Remove all `marks` from node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.removeAllMarksByPath = function (editor, path) {
  var state = editor.state;
  var document = state.document;

  var node = document.assertNode(path);
  var texts = node.object === 'text' ? [node] : node.getTextsAsArray();

  texts.forEach(function (text) {
    text.getMarksAsArray().forEach(function (mark) {
      editor.removeMarkByKey(text.key, 0, text.text.length, mark);
    });
  });
};

/**
 * Remove a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.removeNodeByPath = function (editor, path) {
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);

  editor.applyOperation({
    type: 'remove_node',
    path: path,
    node: node
  });
};

/**
 * Remove text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 */

Commands$2.removeTextByPath = function (editor, path, offset, length) {
  var value = editor.value;
  var decorations = value.decorations,
      document = value.document;

  var node = document.assertNode(path);
  var leaves = node.getLeaves();
  var text = node.text;


  var updated = false;
  var key = node.key;

  var from = offset;
  var to = offset + length;

  var decs = decorations.filter(function (dec) {
    var start = dec.start,
        end = dec.end,
        mark = dec.mark;

    var isAtomic = editor.isAtomic(mark);
    if (!isAtomic) return true;
    if (start.key !== key) return true;

    if (start.offset < from && (end.key !== key || end.offset > from)) {
      updated = true;
      return false;
    }

    if (start.offset < to && (end.key !== key || end.offset > to)) {
      updated = true;
      return null;
    }

    return true;
  });

  if (updated) {
    editor.setDecorations(decs);
  }

  var removals = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the removal, continue on.
    if (ay < bx || by < ax) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);
    var string = text.slice(start, end);

    removals.push({
      type: 'remove_text',
      path: path,
      offset: start,
      text: string,
      marks: leaf.marks
    });
  });

  // Apply in reverse order, so subsequent removals don't impact previous ones.
  removals.reverse().forEach(function (op) {
    return editor.applyOperation(op);
  });
};

/**
`* Replace a `node` with another `node`
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|Node} node
 */

Commands$2.replaceNodeByPath = function (editor, path, newNode) {
  newNode = Node.create(newNode);
  var index = path.last();
  var parentPath = PathUtils.lift(path);

  editor.withoutNormalizing(function () {
    editor.removeNodeByPath(path);
    editor.insertNodeByPath(parentPath, index, newNode);
  });
};

/**
 * Replace A Length of Text with another string or text
 * @param {Editor} editor
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {string} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$2.replaceTextByPath = function (editor, path, offset, length, text, marks) {
  var document = editor.value.document;

  var node = document.assertNode(path);

  if (length + offset > node.text.length) {
    length = node.text.length - offset;
  }

  var range = document.createRange({
    anchor: { path: path, offset: offset },
    focus: { path: path, offset: offset + length }
  });

  var activeMarks = document.getActiveMarksAtRange(range);

  editor.withoutNormalizing(function () {
    editor.removeTextByPath(path, offset, length);

    if (!marks) {
      // Do not use mark at index when marks and activeMarks are both empty
      marks = activeMarks ? activeMarks : [];
    } else if (activeMarks) {
      // Do not use `has` because we may want to reset marks like font-size with
      // an updated data;
      activeMarks = activeMarks.filter(function (activeMark) {
        return !marks.find(function (m) {
          return activeMark.type === m.type;
        });
      });

      marks = activeMarks.merge(marks);
    }

    editor.insertTextByPath(path, offset, text, marks);
  });
};

/**
 * Set `newProperties` on mark on text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Object|Mark} properties
 * @param {Object} newProperties
 */

Commands$2.setMarkByPath = function (editor, path, offset, length, properties, newProperties) {
  // we call Mark.create() here because we need the complete previous mark instance
  properties = Mark.create(properties);
  newProperties = Mark.createProperties(newProperties);

  editor.applyOperation({
    type: 'set_mark',
    path: path,
    offset: offset,
    length: length,
    properties: properties,
    newProperties: newProperties
  });
};

/**
 * Set `properties` on a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} newProperties
 */

Commands$2.setNodeByPath = function (editor, path, newProperties) {
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  newProperties = Node.createProperties(newProperties);
  var prevProperties = pick_1(node, Object.keys(newProperties));

  editor.applyOperation({
    type: 'set_node',
    path: path,
    properties: prevProperties,
    newProperties: newProperties
  });
};

/**
 * Insert `text` at `offset` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$2.setTextByPath = function (editor, path, text, marks) {
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var end = node.text.length;
  editor.replaceTextByPath(path, 0, end, text, marks);
};

/**
 * Split a node by `path` at `position`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} position
 * @param {Object} options
 */

Commands$2.splitNodeByPath = function (editor, path, position) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$target = options.target,
      target = _options$target === undefined ? null : _options$target;
  var value = editor.value;
  var document = value.document;

  var node = document.getDescendant(path);

  editor.applyOperation({
    type: 'split_node',
    path: path,
    position: position,
    target: target,
    properties: {
      type: node.type,
      data: node.data
    }
  });
};

/**
 * Split a node deeply down the tree by `path`, `textPath` and `textOffset`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Array} textPath
 * @param {Number} textOffset
 */

Commands$2.splitDescendantsByPath = function (editor, path, textPath, textOffset) {
  if (path.equals(textPath)) {
    editor.splitNodeByPath(textPath, textOffset);
    return;
  }

  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var text = document.assertNode(textPath);
  var ancestors = document.getAncestors(textPath);
  var nodes = ancestors.skipUntil(function (a) {
    return a.key === node.key;
  }).reverse().unshift(text);

  var previous = void 0;
  var index = void 0;

  editor.withoutNormalizing(function () {
    nodes.forEach(function (n) {
      var prevIndex = index == null ? null : index;
      index = previous ? n.nodes.indexOf(previous) + 1 : textOffset;
      previous = n;
      editor.splitNodeByKey(n.key, index, { target: prevIndex });
    });
  });
};

/**
 * Unwrap content from an inline parent with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */

Commands$2.unwrapInlineByPath = function (editor, path, properties) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var node = document.assertNode(path);
  var first = node.getFirstText();
  var last = node.getLastText();
  var range = selection.moveToRangeOfNode(first, last);
  editor.unwrapInlineAtRange(range, properties);
};

/**
 * Unwrap content from a block parent with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */

Commands$2.unwrapBlockByPath = function (editor, path, properties) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var node = document.assertNode(path);
  var first = node.getFirstText();
  var last = node.getLastText();
  var range = selection.moveToRangeOfNode(first, last);
  editor.unwrapBlockAtRange(range, properties);
};

/**
 * Unwrap a single node from its parent.
 *
 * If the node is surrounded with siblings, its parent will be
 * split. If the node is the only child, the parent is removed, and
 * simply replaced by the node itself.  Cannot unwrap a root node.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.unwrapNodeByPath = function (editor, path) {
  var value = editor.value;
  var document = value.document;

  document.assertNode(path);

  var parentPath = PathUtils.lift(path);
  var parent = document.assertNode(parentPath);
  var index = path.last();
  var parentIndex = parentPath.last();
  var grandPath = PathUtils.lift(parentPath);
  var isFirst = index === 0;
  var isLast = index === parent.nodes.size - 1;

  editor.withoutNormalizing(function () {
    if (parent.nodes.size === 1) {
      editor.moveNodeByPath(path, grandPath, parentIndex + 1);
      editor.removeNodeByPath(parentPath);
    } else if (isFirst) {
      editor.moveNodeByPath(path, grandPath, parentIndex);
    } else if (isLast) {
      editor.moveNodeByPath(path, grandPath, parentIndex + 1);
    } else {
      var updatedPath = PathUtils.increment(path, 1, parentPath.size - 1);
      updatedPath = updatedPath.set(updatedPath.size - 1, 0);
      editor.splitNodeByPath(parentPath, index);
      editor.moveNodeByPath(updatedPath, grandPath, parentIndex + 1);
    }
  });
};

/**
 * Unwrap all of the children of a node, by removing the node and replacing it
 * with the children in the tree.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.unwrapChildrenByPath = function (editor, path) {
  path = PathUtils.create(path);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var parentPath = PathUtils.lift(path);
  var index = path.last();
  var nodes = node.nodes;


  editor.withoutNormalizing(function () {
    nodes.reverse().forEach(function (child, i) {
      var childIndex = nodes.size - i - 1;
      var childPath = path.push(childIndex);
      editor.moveNodeByPath(childPath, parentPath, index + 1);
    });

    editor.removeNodeByPath(path);
  });
};

/**
 * Wrap a node in a block with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Block|Object|String} block
 */

Commands$2.wrapBlockByPath = function (editor, path, block) {
  block = Block.create(block);
  block = block.set('nodes', block.nodes.clear());
  var parentPath = PathUtils.lift(path);
  var index = path.last();
  var newPath = PathUtils.increment(path);

  editor.withoutNormalizing(function () {
    editor.insertNodeByPath(parentPath, index, block);
    editor.moveNodeByPath(newPath, path, 0);
  });
};

/**
 * Wrap a node in an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Block|Object|String} inline
 */

Commands$2.wrapInlineByPath = function (editor, path, inline) {
  inline = Inline.create(inline);
  inline = inline.set('nodes', inline.nodes.clear());
  var parentPath = PathUtils.lift(path);
  var index = path.last();
  var newPath = PathUtils.increment(path);

  editor.withoutNormalizing(function () {
    editor.insertNodeByPath(parentPath, index, inline);
    editor.moveNodeByPath(newPath, path, 0);
  });
};

/**
 * Wrap a node by `path` with `node`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Node|Object} node
 */

Commands$2.wrapNodeByPath = function (editor, path, node) {
  node = Node.create(node);

  if (node.object === 'block') {
    editor.wrapBlockByPath(path, node);
  } else if (node.object === 'inline') {
    editor.wrapInlineByPath(path, node);
  }
};

/**
 * Mix in `*ByKey` variants.
 */

var COMMANDS = ['addMark', 'insertFragment', 'insertNode', 'insertText', 'mergeNode', 'removeAllMarks', 'removeMark', 'removeNode', 'removeText', 'replaceNode', 'replaceText', 'setMark', 'setNode', 'setText', 'splitNode', 'unwrapBlock', 'unwrapChildren', 'unwrapInline', 'unwrapNode', 'wrapBlock', 'wrapInline', 'wrapNode'];

var _loop = function _loop(method) {
  Commands$2[method + 'ByKey'] = function (editor, key) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    var value = editor.value;
    var document = value.document;

    var path = document.assertPath(key);
    editor[method + 'ByPath'].apply(editor, [path].concat(args));
  };
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = COMMANDS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var method = _step.value;

    _loop(method);
  }

  // Moving nodes takes two keys, so it's slightly different.
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

Commands$2.moveNodeByKey = function (editor, key, newKey) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var value = editor.value;
  var document = value.document;

  var path = document.assertPath(key);
  var newPath = document.assertPath(newKey);
  editor.moveNodeByPath.apply(editor, [path, newPath].concat(args));
};

// Splitting descendants takes two keys, so it's slightly different.
Commands$2.splitDescendantsByKey = function (editor, key, textKey) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var value = editor.value;
  var document = value.document;

  var path = document.assertPath(key);
  var textPath = document.assertPath(textKey);
  editor.splitDescendantsByPath.apply(editor, [path, textPath].concat(args));
};

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$11.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]';
var objectTag$1 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$1 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (_Map && getTag(new _Map) != mapTag$1) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$1) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$12.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

var _addMapEntry = addMapEntry;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_mapToArray(map), CLONE_DEEP_FLAG) : _mapToArray(map);
  return _arrayReduce(array, _addMapEntry, new map.constructor);
}

var _cloneMap = cloneMap;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

var _addSetEntry = addSetEntry;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_setToArray(set), CLONE_DEEP_FLAG$1) : _setToArray(set);
  return _arrayReduce(array, _addSetEntry, new set.constructor);
}

var _cloneSet = cloneSet;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var mapTag$2 = '[object Map]';
var numberTag$1 = '[object Number]';
var regexpTag$1 = '[object RegExp]';
var setTag$2 = '[object Set]';
var stringTag$1 = '[object String]';
var symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$2 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return _cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return _cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$2:
      return _cloneMap(object, isDeep, cloneFunc);

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return _cloneRegExp(object);

    case setTag$2:
      return _cloneSet(object, isDeep, cloneFunc);

    case symbolTag$1:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$2 = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$2 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var objectTag$2 = '[object Object]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$2 = '[object Symbol]';
var weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$3] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$3] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$2,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;
var objectProto$13 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$2(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$10.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject$2;

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject_1(value) ? undefined : value;
}

var _customOmitClone = customOmitClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$3 = 1;
var CLONE_FLAT_FLAG$1 = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = _flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = _arrayMap(paths, function(path) {
    path = _castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _copyObject(object, _getAllKeysIn(object), result);
  if (isDeep) {
    result = _baseClone(result, CLONE_DEEP_FLAG$3 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, _customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    _baseUnset(result, paths[length]);
  }
  return result;
});

var omit_1 = omit;

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$3 = {};

/**
 * Save an `operation` into the history.
 *
 * @param {Editor} editor
 * @param {Object} operation
 */

Commands$3.save = function (editor, operation) {
  var operations = editor.operations,
      value = editor.value;
  var data = value.data;
  var _editor$tmp = editor.tmp,
      save = _editor$tmp.save,
      merge = _editor$tmp.merge;

  if (save === false) return;

  var undos = data.get('undos') || immutable.List();
  var lastBatch = undos.last();
  var lastOperation = lastBatch && lastBatch.last();

  // If `merge` is non-commital, and this is not the first operation in a new
  // editor, then merge, otherwise merge based on the last operation.
  if (merge == null) {
    if (operations.size !== 0) {
      merge = true;
    } else {
      merge = shouldMerge(operation, lastOperation);
    }
  }

  // If the `merge` flag is true, add the operation to the last batch.
  if (merge && lastBatch) {
    var batch = lastBatch.push(operation);
    undos = undos.pop();
    undos = undos.push(batch);
  } else {
    // Otherwise, create a new batch with the operation.
    var _batch = immutable.List([operation]);
    undos = undos.push(_batch);
  }

  // Constrain the history to 100 entries for memory's sake.
  if (undos.size > 100) {
    undos = undos.takeLast(100);
  }

  // Clear the redos and update the history.
  editor.withoutSaving(function () {
    var redos = immutable.List();
    var newData = data.set('undos', undos).set('redos', redos);
    editor.setData(newData);
  });
};

/**
 * Redo to the next value in the history.
 *
 * @param {Editor} editor
 */

Commands$3.redo = function (editor) {
  var value = editor.value;
  var data = value.data;

  var redos = data.get('redos') || immutable.List();
  var undos = data.get('undos') || immutable.List();
  var batch = redos.last();
  if (!batch) return;

  editor.withoutSaving(function () {
    editor.withoutNormalizing(function () {
      // Replay the batch of operations.
      batch.forEach(function (op) {
        var _op = op,
            type = _op.type,
            properties = _op.properties;

        // When the operation mutates the selection, omit its `isFocused` value to
        // prevent the editor focus from changing during redoing.

        if (type === 'set_selection') {
          op = op.set('properties', omit_1(properties, 'isFocused'));
        }

        editor.applyOperation(op);
      });

      // Shift the next value into the undo stack.
      redos = redos.pop();
      undos = undos.push(batch);
      var newData = data.set('undos', undos).set('redos', redos);
      editor.setData(newData);
    });
  });
};

/**
 * Undo the previous operations in the history.
 *
 * @param {Editor} editor
 */

Commands$3.undo = function (editor) {
  var value = editor.value;
  var data = value.data;

  var redos = data.get('redos') || immutable.List();
  var undos = data.get('undos') || immutable.List();
  var batch = undos.last();
  if (!batch) return;

  editor.withoutSaving(function () {
    editor.withoutNormalizing(function () {
      // Replay the inverse of the previous operations.
      batch.slice().reverse().map(function (op) {
        return op.invert();
      }).forEach(function (inverse) {
        var _inverse = inverse,
            type = _inverse.type,
            properties = _inverse.properties;

        // When the operation mutates the selection, omit its `isFocused` value to
        // prevent the editor focus from changing during undoing.

        if (type === 'set_selection') {
          inverse = inverse.set('properties', omit_1(properties, 'isFocused'));
        }

        editor.applyOperation(inverse);
      });

      // Shift the previous operations into the redo stack.
      redos = redos.push(batch);
      undos = undos.pop();
      var newData = data.set('undos', undos).set('redos', redos);
      editor.setData(newData);
    });
  });
};

/**
 * Apply a series of changes inside a synchronous `fn`, without merging any of
 * the new operations into previous save point in the history.
 *
 * @param {Editor} editor
 * @param {Function} fn
 */

Commands$3.withoutMerging = function (editor, fn) {
  var value = editor.tmp.merge;
  editor.tmp.merge = false;
  fn(editor);
  editor.tmp.merge = value;
};

/**
 * Apply a series of changes inside a synchronous `fn`, without saving any of
 * their operations into the history.
 *
 * @param {Editor} editor
 * @param {Function} fn
 */

Commands$3.withoutSaving = function (editor, fn) {
  var value = editor.tmp.save;
  editor.tmp.save = false;
  fn(editor);
  editor.tmp.save = value;
};

/**
 * Check whether to merge a new operation `o` into the previous operation `p`.
 *
 * @param {Object} o
 * @param {Object} p
 * @return {Boolean}
 */

function shouldMerge(o, p) {
  if (!p) return false;

  var merge = o.type === 'set_selection' && p.type === 'set_selection' || o.type === 'insert_text' && p.type === 'insert_text' && o.offset === p.offset + p.text.length && o.path.equals(p.path) || o.type === 'remove_text' && p.type === 'remove_text' && o.offset + o.text.length === p.offset && o.path.equals(p.path);

  return merge;
}

var Commands$4 = {};

Commands$4.blur = function (editor) {
  editor.select({ isFocused: false });
};

Commands$4.deselect = function (editor) {
  var range = Selection.create();
  editor.select(range);
};

Commands$4.focus = function (editor) {
  editor.select({ isFocused: true });
};

Commands$4.flip = function (editor) {
  editor.command(proxy, 'flip');
};

Commands$4.moveAnchorBackward = function (editor) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  editor.command.apply(editor, [pointBackward, 'anchor'].concat(args));
};

Commands$4.moveAnchorWordBackward = function (editor) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  editor.command.apply(editor, [pointWordBackward, 'anchor'].concat(args));
};

Commands$4.moveAnchorForward = function (editor) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  editor.command.apply(editor, [pointForward, 'anchor'].concat(args));
};

Commands$4.moveAnchorWordForward = function (editor) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  editor.command.apply(editor, [pointWordForward, 'anchor'].concat(args));
};

Commands$4.moveAnchorTo = function (editor) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  editor.command.apply(editor, [proxy, 'moveAnchorTo'].concat(args));
};

Commands$4.moveAnchorToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'end', 'block');
};

Commands$4.moveAnchorToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'end', 'inline');
};

Commands$4.moveAnchorToEndOfDocument = function (editor) {
  editor.moveAnchorToEndOfNode(editor.value.document).moveToAnchor();
};

Commands$4.moveAnchorToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'block');
};

Commands$4.moveAnchorToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'inline');
};

Commands$4.moveAnchorToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'text');
};

Commands$4.moveAnchorToEndOfNode = function (editor) {
  for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  editor.command.apply(editor, [proxy, 'moveAnchorToEndOfNode'].concat(args));
};

Commands$4.moveAnchorToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'block');
};

Commands$4.moveAnchorToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'inline');
};

Commands$4.moveAnchorToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'text');
};

Commands$4.moveAnchorToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'end', 'text');
};

Commands$4.moveAnchorToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'start', 'block');
};

Commands$4.moveAnchorToStartOfDocument = function (editor) {
  editor.moveAnchorToStartOfNode(editor.value.document).moveToAnchor();
};

Commands$4.moveAnchorToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'start', 'inline');
};

Commands$4.moveAnchorToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'block');
};

Commands$4.moveAnchorToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'inline');
};

Commands$4.moveAnchorToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'text');
};

Commands$4.moveAnchorToStartOfNode = function (editor) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  editor.command.apply(editor, [proxy, 'moveAnchorToStartOfNode'].concat(args));
};

Commands$4.moveAnchorToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'block');
};

Commands$4.moveAnchorToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'inline');
};

Commands$4.moveAnchorToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'text');
};

Commands$4.moveAnchorToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'start', 'text');
};

Commands$4.moveBackward = function (editor) {
  var _editor$moveAnchorBac;

  for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    args[_key8 - 1] = arguments[_key8];
  }

  (_editor$moveAnchorBac = editor.moveAnchorBackward.apply(editor, args)).moveFocusBackward.apply(_editor$moveAnchorBac, args);
};

Commands$4.moveWordBackward = function (editor) {
  for (var _len9 = arguments.length, args = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
    args[_key9 - 1] = arguments[_key9];
  }

  editor.moveFocusWordBackward.apply(editor, args).moveToFocus();
};

Commands$4.moveEndBackward = function (editor) {
  for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  editor.command.apply(editor, [pointBackward, 'end'].concat(args));
};

Commands$4.moveEndWordBackward = function (editor) {
  for (var _len11 = arguments.length, args = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }

  editor.command.apply(editor, [pointWordBackward, 'end'].concat(args));
};

Commands$4.moveEndForward = function (editor) {
  for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
    args[_key12 - 1] = arguments[_key12];
  }

  editor.command.apply(editor, [pointForward, 'end'].concat(args));
};

Commands$4.moveEndWordForward = function (editor) {
  for (var _len13 = arguments.length, args = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
    args[_key13 - 1] = arguments[_key13];
  }

  editor.command.apply(editor, [pointWordForward, 'end'].concat(args));
};

Commands$4.moveEndTo = function (editor) {
  for (var _len14 = arguments.length, args = Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
    args[_key14 - 1] = arguments[_key14];
  }

  editor.command.apply(editor, [proxy, 'moveEndTo'].concat(args));
};

Commands$4.moveEndToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'end', 'end', 'block');
};

Commands$4.moveEndToEndOfDocument = function (editor) {
  editor.moveEndToEndOfNode(editor.value.document).moveToEnd();
};

Commands$4.moveEndToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'end', 'end', 'inline');
};

Commands$4.moveEndToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'block');
};

Commands$4.moveEndToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'inline');
};

Commands$4.moveEndToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'text');
};

Commands$4.moveEndToEndOfNode = function (editor) {
  for (var _len15 = arguments.length, args = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    args[_key15 - 1] = arguments[_key15];
  }

  editor.command.apply(editor, [proxy, 'moveEndToEndOfNode'].concat(args));
};

Commands$4.moveEndToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'block');
};

Commands$4.moveEndToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'inline');
};

Commands$4.moveEndToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'text');
};

Commands$4.moveEndToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'end', 'end', 'text');
};

Commands$4.moveEndToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'end', 'start', 'block');
};

Commands$4.moveEndToStartOfDocument = function (editor) {
  editor.moveEndToStartOfNode(editor.value.document).moveToEnd();
};

Commands$4.moveEndToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'end', 'start', 'inline');
};

Commands$4.moveEndToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'block');
};

Commands$4.moveEndToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'inline');
};

Commands$4.moveEndToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'text');
};

Commands$4.moveEndToStartOfNode = function (editor) {
  for (var _len16 = arguments.length, args = Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
    args[_key16 - 1] = arguments[_key16];
  }

  editor.command.apply(editor, [proxy, 'moveEndToStartOfNode'].concat(args));
};

Commands$4.moveEndToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'block');
};

Commands$4.moveEndToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'inline');
};

Commands$4.moveEndToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'text');
};

Commands$4.moveEndToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'end', 'start', 'text');
};

Commands$4.moveFocusBackward = function (editor) {
  for (var _len17 = arguments.length, args = Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
    args[_key17 - 1] = arguments[_key17];
  }

  editor.command.apply(editor, [pointBackward, 'focus'].concat(args));
};

Commands$4.moveFocusWordBackward = function (editor) {
  for (var _len18 = arguments.length, args = Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
    args[_key18 - 1] = arguments[_key18];
  }

  editor.command.apply(editor, [pointWordBackward, 'focus'].concat(args));
};

Commands$4.moveFocusForward = function (editor) {
  for (var _len19 = arguments.length, args = Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
    args[_key19 - 1] = arguments[_key19];
  }

  editor.command.apply(editor, [pointForward, 'focus'].concat(args));
};

Commands$4.moveFocusWordForward = function (editor) {
  for (var _len20 = arguments.length, args = Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
    args[_key20 - 1] = arguments[_key20];
  }

  editor.command.apply(editor, [pointWordForward, 'focus'].concat(args));
};

Commands$4.moveFocusTo = function (editor) {
  for (var _len21 = arguments.length, args = Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
    args[_key21 - 1] = arguments[_key21];
  }

  editor.command.apply(editor, [proxy, 'moveFocusTo'].concat(args));
};

Commands$4.moveFocusToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'end', 'block');
};

Commands$4.moveFocusToEndOfDocument = function (editor) {
  editor.moveFocusToEndOfNode(editor.value.document).moveToFocus();
};

Commands$4.moveFocusToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'end', 'inline');
};

Commands$4.moveFocusToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'block');
};

Commands$4.moveFocusToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'inline');
};

Commands$4.moveFocusToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'text');
};

Commands$4.moveFocusToEndOfNode = function (editor) {
  for (var _len22 = arguments.length, args = Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
    args[_key22 - 1] = arguments[_key22];
  }

  editor.command.apply(editor, [proxy, 'moveFocusToEndOfNode'].concat(args));
};

Commands$4.moveFocusToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'block');
};

Commands$4.moveFocusToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'inline');
};

Commands$4.moveFocusToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'text');
};

Commands$4.moveFocusToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'end', 'text');
};

Commands$4.moveFocusToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'start', 'block');
};

Commands$4.moveFocusToStartOfDocument = function (editor) {
  editor.moveFocusToStartOfNode(editor.value.document).moveToFocus();
};

Commands$4.moveFocusToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'start', 'inline');
};

Commands$4.moveFocusToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'block');
};

Commands$4.moveFocusToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'inline');
};

Commands$4.moveFocusToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'text');
};

Commands$4.moveFocusToStartOfNode = function (editor) {
  for (var _len23 = arguments.length, args = Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
    args[_key23 - 1] = arguments[_key23];
  }

  editor.command.apply(editor, [proxy, 'moveFocusToStartOfNode'].concat(args));
};

Commands$4.moveFocusToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'block');
};

Commands$4.moveFocusToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'inline');
};

Commands$4.moveFocusToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'text');
};

Commands$4.moveFocusToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'start', 'text');
};

Commands$4.moveForward = function (editor) {
  var _editor$moveAnchorFor;

  for (var _len24 = arguments.length, args = Array(_len24 > 1 ? _len24 - 1 : 0), _key24 = 1; _key24 < _len24; _key24++) {
    args[_key24 - 1] = arguments[_key24];
  }

  (_editor$moveAnchorFor = editor.moveAnchorForward.apply(editor, args)).moveFocusForward.apply(_editor$moveAnchorFor, args);
};

Commands$4.moveWordForward = function (editor) {
  var _editor$moveFocusWord;

  for (var _len25 = arguments.length, args = Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
    args[_key25 - 1] = arguments[_key25];
  }

  (_editor$moveFocusWord = editor.moveFocusWordForward.apply(editor, args)).moveToFocus.apply(_editor$moveFocusWord, args);
};

Commands$4.moveStartBackward = function (editor) {
  for (var _len26 = arguments.length, args = Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
    args[_key26 - 1] = arguments[_key26];
  }

  editor.command.apply(editor, [pointBackward, 'start'].concat(args));
};

Commands$4.moveStartWordBackward = function (editor) {
  for (var _len27 = arguments.length, args = Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
    args[_key27 - 1] = arguments[_key27];
  }

  editor.command.apply(editor, [pointWordBackward, 'start'].concat(args));
};

Commands$4.moveStartForward = function (editor) {
  for (var _len28 = arguments.length, args = Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
    args[_key28 - 1] = arguments[_key28];
  }

  editor.command.apply(editor, [pointForward, 'start'].concat(args));
};

Commands$4.moveStartWordForward = function (editor) {
  for (var _len29 = arguments.length, args = Array(_len29 > 1 ? _len29 - 1 : 0), _key29 = 1; _key29 < _len29; _key29++) {
    args[_key29 - 1] = arguments[_key29];
  }

  editor.command.apply(editor, [pointWordForward, 'start'].concat(args));
};

Commands$4.moveStartTo = function (editor) {
  for (var _len30 = arguments.length, args = Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
    args[_key30 - 1] = arguments[_key30];
  }

  editor.command.apply(editor, [proxy, 'moveStartTo'].concat(args));
};

Commands$4.moveStartToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'start', 'end', 'block');
};

Commands$4.moveStartToEndOfDocument = function (editor) {
  editor.moveStartToEndOfNode(editor.value.document).moveToStart();
};

Commands$4.moveStartToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'start', 'end', 'inline');
};

Commands$4.moveStartToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'block');
};

Commands$4.moveStartToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'inline');
};

Commands$4.moveStartToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'text');
};

Commands$4.moveStartToEndOfNode = function (editor) {
  for (var _len31 = arguments.length, args = Array(_len31 > 1 ? _len31 - 1 : 0), _key31 = 1; _key31 < _len31; _key31++) {
    args[_key31 - 1] = arguments[_key31];
  }

  editor.command.apply(editor, [proxy, 'moveStartToEndOfNode'].concat(args));
};

Commands$4.moveStartToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'block');
};

Commands$4.moveStartToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'inline');
};

Commands$4.moveStartToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'text');
};

Commands$4.moveStartToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'start', 'end', 'text');
};

Commands$4.moveStartToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'start', 'start', 'block');
};

Commands$4.moveStartToStartOfDocument = function (editor) {
  editor.moveStartToStartOfNode(editor.value.document).moveToStart();
};

Commands$4.moveStartToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'start', 'start', 'inline');
};

Commands$4.moveStartToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'block');
};

Commands$4.moveStartToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'inline');
};

Commands$4.moveStartToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'text');
};

Commands$4.moveStartToStartOfNode = function (editor) {
  for (var _len32 = arguments.length, args = Array(_len32 > 1 ? _len32 - 1 : 0), _key32 = 1; _key32 < _len32; _key32++) {
    args[_key32 - 1] = arguments[_key32];
  }

  editor.command.apply(editor, [proxy, 'moveStartToStartOfNode'].concat(args));
};

Commands$4.moveStartToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'block');
};

Commands$4.moveStartToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'inline');
};

Commands$4.moveStartToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'text');
};

Commands$4.moveStartToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'start', 'start', 'text');
};

Commands$4.moveTo = function (editor) {
  for (var _len33 = arguments.length, args = Array(_len33 > 1 ? _len33 - 1 : 0), _key33 = 1; _key33 < _len33; _key33++) {
    args[_key33 - 1] = arguments[_key33];
  }

  editor.command.apply(editor, [proxy, 'moveTo'].concat(args));
};

Commands$4.moveToAnchor = function (editor) {
  editor.command(proxy, 'moveToAnchor');
};

Commands$4.moveToEnd = function (editor) {
  editor.command(proxy, 'moveToEnd');
};

Commands$4.moveToEndOfBlock = function (editor) {
  editor.moveEndToEndOfBlock().moveToEnd();
};

Commands$4.moveToEndOfDocument = function (editor) {
  editor.moveEndToEndOfNode(editor.value.document).moveToEnd();
};

Commands$4.moveToEndOfInline = function (editor) {
  editor.moveEndToEndOfInline().moveToEnd();
};

Commands$4.moveToEndOfNextBlock = function (editor) {
  editor.moveEndToEndOfNextBlock().moveToEnd();
};

Commands$4.moveToEndOfNextInline = function (editor) {
  editor.moveEndToEndOfNextInline().moveToEnd();
};

Commands$4.moveToEndOfNextText = function (editor) {
  editor.moveEndToEndOfNextText().moveToEnd();
};

Commands$4.moveToEndOfNode = function (editor) {
  for (var _len34 = arguments.length, args = Array(_len34 > 1 ? _len34 - 1 : 0), _key34 = 1; _key34 < _len34; _key34++) {
    args[_key34 - 1] = arguments[_key34];
  }

  editor.command.apply(editor, [proxy, 'moveToEndOfNode'].concat(args));
};

Commands$4.moveToEndOfPreviousBlock = function (editor) {
  editor.moveStartToEndOfPreviousBlock().moveToStart();
};

Commands$4.moveToEndOfPreviousInline = function (editor) {
  editor.moveStartToEndOfPreviousInline().moveToStart();
};

Commands$4.moveToEndOfPreviousText = function (editor) {
  editor.moveStartToEndOfPreviousText().moveToStart();
};

Commands$4.moveToEndOfText = function (editor) {
  editor.moveEndToEndOfText().moveToEnd();
};

Commands$4.moveToFocus = function (editor) {
  editor.command(proxy, 'moveToFocus');
};

Commands$4.moveToRangeOfDocument = function (editor) {
  editor.moveToRangeOfNode(editor.value.document);
};

Commands$4.moveToRangeOfNode = function (editor) {
  for (var _len35 = arguments.length, args = Array(_len35 > 1 ? _len35 - 1 : 0), _key35 = 1; _key35 < _len35; _key35++) {
    args[_key35 - 1] = arguments[_key35];
  }

  editor.command.apply(editor, [proxy, 'moveToRangeOfNode'].concat(args));
};

Commands$4.moveToStart = function (editor) {
  editor.command(proxy, 'moveToStart');
};

Commands$4.moveToStartOfBlock = function (editor) {
  editor.moveStartToStartOfBlock().moveToStart();
};

Commands$4.moveToStartOfDocument = function (editor) {
  editor.moveStartToStartOfNode(editor.value.document).moveToStart();
};

Commands$4.moveToStartOfInline = function (editor) {
  editor.moveStartToStartOfInline().moveToStart();
};

Commands$4.moveToStartOfNextBlock = function (editor) {
  editor.moveEndToStartOfNextBlock().moveToEnd();
};

Commands$4.moveToStartOfNextInline = function (editor) {
  editor.moveEndToStartOfNextInline().moveToEnd();
};

Commands$4.moveToStartOfNextText = function (editor) {
  editor.moveEndToStartOfNextText().moveToEnd();
};

Commands$4.moveToStartOfNode = function (editor) {
  for (var _len36 = arguments.length, args = Array(_len36 > 1 ? _len36 - 1 : 0), _key36 = 1; _key36 < _len36; _key36++) {
    args[_key36 - 1] = arguments[_key36];
  }

  editor.command.apply(editor, [proxy, 'moveToStartOfNode'].concat(args));
};

Commands$4.moveToStartOfPreviousBlock = function (editor) {
  editor.moveStartToStartOfPreviousBlock().moveToStart();
};

Commands$4.moveToStartOfPreviousInline = function (editor) {
  editor.moveStartToStartOfPreviousInline().moveToStart();
};

Commands$4.moveToStartOfPreviousText = function (editor) {
  editor.moveStartToStartOfPreviousText().moveToStart();
};

Commands$4.moveToStartOfText = function (editor) {
  editor.moveStartToStartOfText().moveToStart();
};

Commands$4.select = function (editor, properties) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  properties = Selection.createProperties(properties);
  var _options$snapshot = options.snapshot,
      snapshot = _options$snapshot === undefined ? false : _options$snapshot;
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var newProperties = {};
  var next = selection.setProperties(properties);
  next = document.resolveSelection(next);

  // Re-compute the properties, to ensure that we get their normalized values.
  properties = pick_1(next, Object.keys(properties));

  // Remove any properties that are already equal to the current selection. And
  // create a dictionary of the previous values for all of the properties that
  // are being changed, for the inverse operation.
  for (var k in properties) {
    if (snapshot === true || !immutable.is(properties[k], selection[k])) {
      newProperties[k] = properties[k];
    }
  }

  // If the selection moves, clear any marks, unless the new selection
  // properties change the marks in some way.
  if (selection.marks && !newProperties.marks && (newProperties.anchor || newProperties.focus)) {
    newProperties.marks = null;
  }

  // If there are no new properties to set, abort to avoid extra operations.
  if (Object.keys(newProperties).length === 0) {
    return;
  }

  // TODO: for some reason toJSON() is required here (it breaks selections between blocks)? - 2018-10-10
  var prevProperties = pick_1(selection.toJSON(), Object.keys(newProperties));

  editor.applyOperation({
    type: 'set_selection',
    value: value,
    properties: prevProperties,
    newProperties: newProperties
  }, snapshot ? { skip: false, merge: false } : {});
};

Commands$4.setAnchor = function (editor) {
  for (var _len37 = arguments.length, args = Array(_len37 > 1 ? _len37 - 1 : 0), _key37 = 1; _key37 < _len37; _key37++) {
    args[_key37 - 1] = arguments[_key37];
  }

  editor.command.apply(editor, [proxy, 'setAnchor'].concat(args));
};

Commands$4.setEnd = function (editor) {
  for (var _len38 = arguments.length, args = Array(_len38 > 1 ? _len38 - 1 : 0), _key38 = 1; _key38 < _len38; _key38++) {
    args[_key38 - 1] = arguments[_key38];
  }

  editor.command.apply(editor, [proxy, 'setEnd'].concat(args));
};

Commands$4.setFocus = function (editor) {
  for (var _len39 = arguments.length, args = Array(_len39 > 1 ? _len39 - 1 : 0), _key39 = 1; _key39 < _len39; _key39++) {
    args[_key39 - 1] = arguments[_key39];
  }

  editor.command.apply(editor, [proxy, 'setFocus'].concat(args));
};

Commands$4.setStart = function (editor) {
  for (var _len40 = arguments.length, args = Array(_len40 > 1 ? _len40 - 1 : 0), _key40 = 1; _key40 < _len40; _key40++) {
    args[_key40 - 1] = arguments[_key40];
  }

  editor.command.apply(editor, [proxy, 'setStart'].concat(args));
};

Commands$4.snapshotSelection = function (editor) {
  editor.withoutMerging(function () {
    editor.select(editor.value.selection, { snapshot: true });
  });
};

/**
 * Helpers.
 */

function proxy(editor, method) {
  var _editor$value$selecti;

  for (var _len41 = arguments.length, args = Array(_len41 > 2 ? _len41 - 2 : 0), _key41 = 2; _key41 < _len41; _key41++) {
    args[_key41 - 2] = arguments[_key41];
  }

  var range = (_editor$value$selecti = editor.value.selection)[method].apply(_editor$value$selecti, args);
  editor.select(range);
}

function pointEdgeObject(editor, point, edge, object) {
  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var Edge = edge.slice(0, 1).toUpperCase() + edge.slice(1);
  var Object = object.slice(0, 1).toUpperCase() + object.slice(1);
  var method = 'move' + Point + 'To' + Edge + 'OfNode';
  var getNode = object === 'text' ? 'getNode' : 'getClosest' + Object;
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var node = document[getNode](p.key);
  if (!node) return;
  editor[method](node);
}

function pointEdgeSideObject(editor, point, edge, side, object) {
  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var Edge = edge.slice(0, 1).toUpperCase() + edge.slice(1);
  var Side = side.slice(0, 1).toUpperCase() + side.slice(1);
  var Object = object.slice(0, 1).toUpperCase() + object.slice(1);
  var method = 'move' + Point + 'To' + Edge + 'OfNode';
  var getNode = object === 'text' ? 'getNode' : 'getClosest' + Object;
  var getDirectionNode = 'get' + Side + Object;
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var node = document[getNode](p.key);
  if (!node) return;
  var target = document[getDirectionNode](node.key);
  if (!target) return;
  editor[method](target);
}

function pointBackward(editor, point) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  if (n < 0) return pointForward(editor, point, -n);

  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var hasVoidParent = document.hasVoidParent(p.path, editor);

  // what is this?
  if (!hasVoidParent && p.offset - n >= 0) {
    var range = selection['move' + Point + 'Backward'](n);
    editor.select(range);
    return;
  }

  var previous = document.getPreviousText(p.path);
  if (!previous) return;

  var block = document.getClosestBlock(p.path);
  var isInBlock = block.hasNode(previous.key);
  var isPreviousInVoid = previous && document.hasVoidParent(previous.key, editor);
  editor['move' + Point + 'ToEndOfNode'](previous);

  // when is this called?
  if (!hasVoidParent && !isPreviousInVoid && isInBlock) {
    var _range = editor.value.selection['move' + Point + 'Backward'](n);
    editor.select(_range);
  }
}

function pointForward(editor, point) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  if (n < 0) return pointBackward(editor, point, -n);

  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var text = document.getNode(p.path);
  var hasVoidParent = document.hasVoidParent(p.path, editor);

  // what is this?
  if (!hasVoidParent && p.offset + n <= text.text.length) {
    var range = selection['move' + Point + 'Forward'](n);
    editor.select(range);
    return;
  }

  var next = document.getNextText(p.path);
  if (!next) return;

  var block = document.getClosestBlock(p.path);
  var isInBlock = block.hasNode(next.key);
  var isNextInVoid = document.hasVoidParent(next.key, editor);
  editor['move' + Point + 'ToStartOfNode'](next);

  // when is this called?
  if (!hasVoidParent && !isNextInVoid && isInBlock) {
    var _range2 = editor.value.selection['move' + Point + 'Forward'](n);
    editor.select(_range2);
  }
}

function pointWordBackward(editor, pointName) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var point = selection[pointName];
  var block = document.getClosestBlock(point.key);
  var offset = block.getOffset(point.key);
  var o = offset + point.offset;
  var text = block.text;

  var n = TextUtils.getWordOffsetBackward(text, o);
  editor.command(pointBackward, pointName, n > 0 ? n : 1);
}

function pointWordForward(editor, pointName) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var point = selection[pointName];
  var block = document.getClosestBlock(point.key);
  var offset = block.getOffset(point.key);
  var o = offset + point.offset;
  var text = block.text;

  var n = TextUtils.getWordOffsetForward(text, o);
  editor.command(pointForward, pointName, n > 0 ? n : 1);
}

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$5 = {};

/**
 * Set `properties` on the value.
 *
 * @param {Editor} editor
 * @param {Object|Value} properties
 */

Commands$5.setData = function (editor) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = editor.value;

  var newProperties = Value.createProperties({ data: data });
  var prevProperties = pick_1(value, Object.keys(newProperties));

  editor.applyOperation({
    type: 'set_value',
    properties: prevProperties,
    newProperties: newProperties
  });
};

/**
 * Set `properties` on the value.
 *
 * @param {Editor} editor
 * @param {Object|Value} properties
 */

Commands$5.setDecorations = function (editor) {
  var decorations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var value = editor.value;

  var newProperties = Value.createProperties({ decorations: decorations });
  var prevProperties = pick_1(value, Object.keys(newProperties));

  editor.applyOperation({
    type: 'set_value',
    properties: prevProperties,
    newProperties: newProperties
  });
};

/**
 * A plugin that adds a set of queries to the editor.
 *
 * @param {Object} queries
 * @return {Object}
 */

function QueriesPlugin() {
  var queries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * On construct, register all the queries.
   *
   * @param {Editor} editor
   * @param {Function} next
   */

  function onConstruct(editor, next) {
    for (var query in queries) {
      editor.registerQuery(query);
    }

    return next();
  }

  /**
   * On query, if it exists in our list of queries, call it.
   *
   * @param {Object} query
   * @param {Editor} editor
   * @param {Function} next
   */

  function onQuery(query, editor, next) {
    var type = query.type,
        args = query.args;

    var fn = queries[type];
    if (!fn) return next();
    var ret = fn.apply(undefined, [editor].concat(toConsumableArray(args)));
    return ret === undefined ? next() : ret;
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onConstruct: onConstruct,
    onQuery: onQuery
  };
}

/**
 * Define a Slate error.
 *
 * @type {SlateError}
 */

var SlateError = function (_Error) {
  inherits(SlateError, _Error);

  function SlateError(code) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, SlateError);

    var _this = possibleConstructorReturn(this, (SlateError.__proto__ || Object.getPrototypeOf(SlateError)).call(this, code));

    _this.code = code;

    for (var key in attrs) {
      _this[key] = attrs[key];
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, _this.constructor);
    } else {
      _this.stack = new Error().stack;
    }
    return _this;
  }

  return SlateError;
}(Error);

/**
 * Create a plugin from a `schema` definition.
 *
 * @param {Object} schema
 * @return {Object}
 */

function SchemaPlugin(schema) {
  var rules = schema.rules,
      document = schema.document,
      blocks = schema.blocks,
      inlines = schema.inlines,
      marks = schema.marks;

  var schemaRules = [];

  if (rules) {
    schemaRules = schemaRules.concat(rules);
  }

  if (document) {
    schemaRules.push(_extends({
      match: [{ object: 'document' }]
    }, document));
  }

  if (blocks) {
    for (var key in blocks) {
      schemaRules.push(_extends({
        match: [{ object: 'block', type: key }]
      }, blocks[key]));
    }
  }

  if (inlines) {
    for (var _key in inlines) {
      schemaRules.push(_extends({
        match: [{ object: 'inline', type: _key }]
      }, inlines[_key]));
    }
  }

  if (marks) {
    for (var _key2 in marks) {
      schemaRules.push(_extends({
        match: [{ object: 'mark', type: _key2 }]
      }, marks[_key2]));
    }
  }

  /**
   * Check if a `mark` is void based on the schema rules.
   *
   * @param {Editor} editor
   * @param {Mark} mark
   * @return {Boolean}
   */

  function isAtomic(editor, mark) {
    var rule = schemaRules.find(function (r) {
      return 'isAtomic' in r && testRules(mark, r.match);
    });

    return rule && rule.isAtomic;
  }

  /**
   * Check if a `node` is void based on the schema rules.
   *
   * @param {Editor} editor
   * @param {Node} node
   * @return {Boolean}
   */

  function isVoid(editor, node) {
    var rule = schemaRules.find(function (r) {
      return 'isVoid' in r && testRules(node, r.match);
    });

    return rule && rule.isVoid;
  }

  /**
   * Normalize a `node` with the schema rules, returning a function that will
   * fix the invalid node, or void if the node is valid.
   *
   * @param {Node} node
   * @param {Editor} editor
   * @param {Function} next
   * @return {Function|Void}
   */

  function normalizeNode(node, editor, next) {
    var error = validateNode(node, editor, function () {});
    if (!error) return next();

    return function () {
      var rule = error.rule;
      var size = editor.operations.size;

      // First run the user-provided `normalize` function if one exists...

      if (rule.normalize) {
        rule.normalize(editor, error);
      }

      // If the `normalize` function did not add any operations to the editor
      // object, it can't have normalized, so run the default one.
      if (editor.operations.size === size) {
        defaultNormalize(editor, error);
      }
    };
  }

  /**
   * Validate a `node` with the schema rules, returning a `SlateError` if it's
   * invalid.
   *
   * @param {Node} node
   * @param {Editor} editor
   * @param {Function} next
   * @return {Error|Void}
   */

  function validateNode(node, editor, next) {
    var matches = schemaRules.filter(function (r) {
      return testRules(node, r.match);
    });
    var failure = validateRules(node, matches, schemaRules, { every: true });
    if (!failure) return next();
    var error = new SlateError(failure.code, failure);
    return error;
  }

  /**
   * On schema-related queries, respond if we can.
   *
   * @param {Object} query
   * @param {Function} next
   */

  var queries = QueriesPlugin({ isAtomic: isAtomic, isVoid: isVoid });

  /**
   * Return the plugins.
   *
   * @type {Object}
   */

  return [{ normalizeNode: normalizeNode, validateNode: validateNode }, queries];
}

/**
 * Normalize an invalid value with `error` with default remedies.
 *
 * @param {Editor} editor
 * @param {SlateError} error
 */

function defaultNormalize(editor, error) {
  var code = error.code,
      node = error.node,
      child = error.child,
      next = error.next,
      previous = error.previous,
      key = error.key,
      mark = error.mark;


  switch (code) {
    case 'child_max_invalid':
    case 'child_object_invalid':
    case 'child_type_invalid':
    case 'child_unknown':
    case 'first_child_object_invalid':
    case 'first_child_type_invalid':
    case 'last_child_object_invalid':
    case 'last_child_type_invalid':
      {
        return child.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(child.key);
      }

    case 'previous_sibling_object_invalid':
    case 'previous_sibling_type_invalid':
      {
        return previous.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(previous.key);
      }

    case 'next_sibling_object_invalid':
    case 'next_sibling_type_invalid':
      {
        return next.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(next.key);
      }

    case 'child_min_invalid':
    case 'node_text_invalid':
    case 'parent_object_invalid':
    case 'parent_type_invalid':
      {
        return node.object === 'document' ? node.nodes.forEach(function (n) {
          return editor.removeNodeByKey(n.key);
        }) : editor.removeNodeByKey(node.key);
      }

    case 'node_data_invalid':
      {
        return node.data.get(key) === undefined && node.object !== 'document' ? editor.removeNodeByKey(node.key) : editor.setNodeByKey(node.key, { data: node.data.delete(key) });
      }

    case 'node_mark_invalid':
      {
        return node.getTexts().forEach(function (t) {
          return editor.removeMarkByKey(t.key, 0, t.text.length, mark);
        });
      }

    default:
      {
        return editor.removeNodeByKey(node.key);
      }
  }
}

/**
 * Check that an `object` matches one of a set of `rules`.
 *
 * @param {Mixed} object
 * @param {Object|Array} rules
 * @return {Boolean}
 */

function testRules(object, rules) {
  var error = validateRules(object, rules);
  return !error;
}

/**
 * Validate that a `object` matches a `rule` object or array.
 *
 * @param {Mixed} object
 * @param {Object|Array} rule
 * @param {Array|Void} rules
 * @return {Error|Void}
 */

function validateRules(object, rule, rules) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$every = options.every,
      every = _options$every === undefined ? false : _options$every;


  if (Array.isArray(rule)) {
    var array = rule.length ? rule : [{}];
    var first = void 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var r = _step.value;

        var _error = validateRules(object, r, rules);
        first = first || _error;
        if (every && _error) return _error;
        if (!every && !_error) return;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return first;
  }

  var error = validateObject(object, rule) || validateType(object, rule) || validateData(object, rule) || validateMarks(object, rule) || validateText(object, rule) || validateFirst(object, rule) || validateLast(object, rule) || validateNodes(object, rule, rules);

  return error;
}

function validateObject(node, rule) {
  if (rule.object == null) return;
  if (rule.object === node.object) return;
  if (typeof rule.object === 'function' && rule.object(node.object)) return;
  return fail('node_object_invalid', { rule: rule, node: node });
}

function validateType(node, rule) {
  if (rule.type == null) return;
  if (rule.type === node.type) return;
  if (typeof rule.type === 'function' && rule.type(node.type)) return;
  return fail('node_type_invalid', { rule: rule, node: node });
}

function validateData(node, rule) {
  if (rule.data == null) return;
  if (node.data == null) return;

  if (typeof rule.data === 'function') {
    if (rule.data(node.data)) return;
    return fail('node_data_invalid', { rule: rule, node: node });
  }

  for (var key in rule.data) {
    var fn = rule.data[key];
    var value = node.data && node.data.get(key);
    var valid = typeof fn === 'function' ? fn(value) : fn === value;
    if (valid) continue;
    return fail('node_data_invalid', { rule: rule, node: node, key: key, value: value });
  }
}

function validateMarks(node, rule) {
  if (rule.marks == null) return;
  var marks = node.getMarks().toArray();

  var _loop = function _loop(mark) {
    var valid = rule.marks.some(function (def) {
      return typeof def.type === 'function' ? def.type(mark.type) : def.type === mark.type;
    });
    if (valid) return 'continue';
    return {
      v: fail('node_mark_invalid', { rule: rule, node: node, mark: mark })
    };
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = marks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var mark = _step2.value;

      var _ret = _loop(mark);

      switch (_ret) {
        case 'continue':
          continue;

        default:
          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function validateText(node, rule) {
  if (rule.text == null) return;
  var text = node.text;

  var valid = typeof rule.text === 'function' ? rule.text(text) : rule.text.test(text);
  if (valid) return;
  return fail('node_text_invalid', { rule: rule, node: node, text: text });
}

function validateFirst(node, rule) {
  if (rule.first == null) return;
  var first = node.nodes.first();
  if (!first) return;
  var error = validateRules(first, rule.first);
  if (!error) return;
  error.rule = rule;
  error.node = node;
  error.child = first;
  error.code = error.code.replace('node_', 'first_child_');
  return error;
}

function validateLast(node, rule) {
  if (rule.last == null) return;
  var last = node.nodes.last();
  if (!last) return;
  var error = validateRules(last, rule.last);
  if (!error) return;
  error.rule = rule;
  error.node = node;
  error.child = last;
  error.code = error.code.replace('node_', 'last_child_');
  return error;
}

function validateNodes(node, rule) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (node.nodes == null) return;

  var children = node.nodes;
  var defs = rule.nodes != null ? rule.nodes.slice() : [];
  var count = 0;
  var lastCount = 0;
  var min = null;
  var index = -1;
  var def = null;
  var max = null;
  var child = null;
  var previous = null;
  var next = null;

  function nextDef() {
    if (defs.length === 0) return false;
    def = defs.shift();
    lastCount = count;
    count = 0;
    min = def.min || null;
    max = def.max || null;
    return true;
  }

  function nextChild() {
    index += 1;
    previous = index ? children.get(index - 1) : null;
    child = children.get(index);
    next = children.get(index + 1);
    if (!child) return false;
    lastCount = count;
    count += 1;
    return true;
  }

  function rewind() {
    if (index > 0) {
      index -= 1;
      count = lastCount;
    }
  }

  if (rule.nodes != null) {
    nextDef();
  }

  while (nextChild()) {
    var err = validateParent(node, child, rules) || validatePrevious(node, child, previous, index, rules) || validateNext(node, child, next, index, rules);

    if (err) return err;

    if (rule.nodes != null) {
      if (!def) {
        return fail('child_unknown', { rule: rule, node: node, child: child, index: index });
      }

      if (def.match) {
        var error = validateRules(child, def.match);

        if (error) {
          // Since we want to report overflow on last matching child we don't
          // immediately check for count > max, but instead do so once we find
          // a child that doesn't match.
          if (max != null && count - 1 > max) {
            rewind();
            return fail('child_max_invalid', {
              rule: rule,
              node: node,
              index: index,
              child: children.get(index),
              count: count,
              limit: max
            });
          }

          var lastMin = min;

          // If there are more groups after this one then child might actually
          // be valid.
          if (nextDef()) {
            // If we've already satisfied the minimum for the current group,
            // then we can rewind and proceed to the next group.
            if (lastCount - 1 >= lastMin) {
              index -= 1;
              continue;
            }

            // Otherwise we know that current value is underflowing. There are
            // three possible causes for this...

            // 1. There might just not be enough elements for current group, and
            // current child is in fact the first of the next group. If so, the
            // next def will not report errors, in which case we can rewind and
            // report an minimum error.
            if (validateRules(child, def.match) == null) {
              rewind();
              return fail('child_min_invalid', {
                rule: rule,
                node: node,
                index: index,
                count: lastCount - 1,
                limit: lastMin
              });
            }

            // 2. The current group is underflowing, but there is also an
            // invalid child before the next group.
            // 3. Or the current group is not underflowing but it appears so
            // because there's an invalid child between its members.
            // It's either the second or third case. If it's the second then
            // we could report an underflow, but presence of an invalid child
            // is arguably more important, so we report it first. It also lets
            // us avoid checking for which case exactly is it.
            error.rule = rule;
            error.node = node;
            error.child = child;
            error.index = index;
            error.code = error.code.replace('node_', 'child_');
            return error;
          }

          // Otherwise either we exhausted the last group, in which case it's
          // an unknown child, ...
          if (max != null && count > max) {
            return fail('child_unknown', { rule: rule, node: node, child: child, index: index });
          }

          // ... or it's an invalid child for the last group.
          error.rule = rule;
          error.node = node;
          error.child = child;
          error.index = index;
          error.code = error.code.replace('node_', 'child_');
          return error;
        }
      }
    }
  }

  // Since we want to report overflow on last matching child we don't
  // immediately check for count > max, but do so after processing all nodes.
  if (max != null && count > max) {
    return fail('child_max_invalid', {
      rule: rule,
      node: node,
      index: index - 1,
      count: count,
      child: children.get(index - 1),
      limit: max
    });
  }

  if (rule.nodes != null) {
    do {
      if (count < min) {
        return fail('child_min_invalid', {
          rule: rule,
          node: node,
          index: index,
          count: count,
          limit: min
        });
      }
    } while (nextDef());
  }
}

function validateParent(node, child, rules) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = rules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var rule = _step3.value;

      if (rule.parent == null) continue;
      if (!testRules(child, rule.match)) continue;

      var error = validateRules(node, rule.parent);
      if (!error) continue;

      error.rule = rule;
      error.parent = node;
      error.node = child;
      error.code = error.code.replace('node_', 'parent_');
      return error;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function validatePrevious(node, child, previous, index, rules) {
  if (!previous) return;

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = rules[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var rule = _step4.value;

      if (rule.previous == null) continue;
      if (!testRules(child, rule.match)) continue;

      var error = validateRules(previous, rule.previous);
      if (!error) continue;

      error.rule = rule;
      error.node = node;
      error.child = child;
      error.index = index;
      error.previous = previous;
      error.code = error.code.replace('node_', 'previous_sibling_');
      return error;
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function validateNext(node, child, next, index, rules) {
  if (!next) return;

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = rules[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var rule = _step5.value;

      if (rule.next == null) continue;
      if (!testRules(child, rule.match)) continue;

      var error = validateRules(next, rule.next);
      if (!error) continue;

      error.rule = rule;
      error.node = node;
      error.child = child;
      error.index = index;
      error.next = next;
      error.code = error.code.replace('node_', 'next_sibling_');
      return error;
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
}

/**
 * Create an interim failure object with `code` and `attrs`.
 *
 * @param {String} code
 * @param {Object} attrs
 * @return {Object}
 */

function fail(code, attrs) {
  return _extends({ code: code }, attrs);
}

/**
 * Ensure that an expanded selection is deleted first using the `editor.delete`
 * command. This guarantees that it uses the proper semantic "intent" instead of
 * using `deleteAtRange` under the covers and skipping `delete`.
 *
 * @param {Editor}
 */

function deleteExpanded(editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  }
}

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$6 = {};

/**
 * Add a `mark` to the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */

Commands$6.addMark = function (editor, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;


  if (selection.isExpanded) {
    editor.addMarkAtRange(selection, mark);
  } else if (selection.marks) {
    var marks = selection.marks.add(mark);
    var sel = selection.set('marks', marks);
    editor.select(sel);
  } else {
    var _marks = document.getActiveMarksAtRange(selection).add(mark);
    var _sel = selection.set('marks', _marks);
    editor.select(_sel);
  }
};

/**
 * Add a list of `marks` to the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Set<Mark>|Array<Object>} marks
 */

Commands$6.addMarks = function (editor, marks) {
  marks.forEach(function (mark) {
    return editor.addMark(mark);
  });
};

/**
 * Delete at the current selection.
 *
 * @param {Editor} editor
 */

Commands$6.delete = function (editor) {
  var value = editor.value;
  var selection = value.selection;

  editor.deleteAtRange(selection);

  // COMPAT: Ensure that the selection is collapsed, because in certain cases
  // when deleting across inline nodes, when splitting the inline node the end
  // point of the selection will end up after the split point.
  editor.moveToFocus();
};

/**
 * Delete backward `n` characters.
 *
 * @param {Editor} editor
 * @param {Number} n (optional)
 */

Commands$6.deleteBackward = function (editor) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteBackwardAtRange(selection, n);
  }
};

/**
 * Delete backward one character.
 *
 * @param {Editor} editor
 */

Commands$6.deleteCharBackward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteCharBackwardAtRange(selection);
  }
};

/**
 * Delete backward one line.
 *
 * @param {Editor} editor
 */

Commands$6.deleteLineBackward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteLineBackwardAtRange(selection);
  }
};

/**
 * Delete backward one word.
 *
 * @param {Editor} editor
 */

Commands$6.deleteWordBackward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteWordBackwardAtRange(selection);
  }
};

/**
 * Delete backward `n` characters.
 *
 * @param {Editor} editor
 * @param {Number} n (optional)
 */

Commands$6.deleteForward = function (editor) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteForwardAtRange(selection, n);
  }
};

/**
 * Delete backward one character.
 *
 * @param {Editor} editor
 */

Commands$6.deleteCharForward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteCharForwardAtRange(selection);
  }
};

/**
 * Delete backward one line.
 *
 * @param {Editor} editor
 */

Commands$6.deleteLineForward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteLineForwardAtRange(selection);
  }
};

/**
 * Delete backward one word.
 *
 * @param {Editor} editor
 */

Commands$6.deleteWordForward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteWordForwardAtRange(selection);
  }
};

/**
 * Insert a `block` at the current selection.
 *
 * @param {Editor} editor
 * @param {String|Object|Block} block
 */

Commands$6.insertBlock = function (editor, block) {
  deleteExpanded(editor);

  block = Block.create(block);
  var value = editor.value;
  var selection = value.selection;

  editor.insertBlockAtRange(selection, block);

  // If the node was successfully inserted, update the selection.
  var node = editor.value.document.getNode(block.key);
  if (node) editor.moveToEndOfNode(node);
};

/**
 * Insert a `fragment` at the current selection.
 *
 * @param {Editor} editor
 * @param {Document} fragment
 */

Commands$6.insertFragment = function (editor, fragment) {
  if (!fragment.nodes.size) return;

  deleteExpanded(editor);

  var value = editor.value;
  var _value = value,
      document = _value.document,
      selection = _value.selection;
  var start = selection.start,
      end = selection.end;
  var _value2 = value,
      startText = _value2.startText,
      endText = _value2.endText,
      startInline = _value2.startInline;

  var lastText = fragment.getLastText();
  var lastInline = fragment.getClosestInline(lastText.key);
  var lastBlock = fragment.getClosestBlock(lastText.key);
  var firstChild = fragment.nodes.first();
  var lastChild = fragment.nodes.last();
  var keys = document.getTexts().map(function (text) {
    return text.key;
  });
  var isAppending = !startInline || start.isAtStartOfNode(startText) || end.isAtStartOfNode(startText) || start.isAtEndOfNode(endText) || end.isAtEndOfNode(endText);

  var isInserting = firstChild.hasBlockChildren() || lastChild.hasBlockChildren();

  editor.insertFragmentAtRange(selection, fragment);
  value = editor.value;
  document = value.document;

  var newTexts = document.getTexts().filter(function (n) {
    return !keys.includes(n.key);
  });
  var newText = isAppending ? newTexts.last() : newTexts.takeLast(2).first();

  if (newText && (lastInline || isInserting)) {
    editor.moveToEndOfNode(newText);
  } else if (newText) {
    editor.moveToStartOfNode(newText).moveForward(lastBlock.text.length);
  }
};

/**
 * Insert an `inline` at the current selection.
 *
 * @param {Editor} editor
 * @param {String|Object|Inline} inline
 */

Commands$6.insertInline = function (editor, inline) {
  deleteExpanded(editor);

  inline = Inline.create(inline);
  var value = editor.value;
  var selection = value.selection;

  editor.insertInlineAtRange(selection, inline);

  // If the node was successfully inserted, update the selection.
  var node = editor.value.document.getNode(inline.key);
  if (node) editor.moveToEndOfNode(node);
};

/**
 * Insert a string of `text` with optional `marks` at the current selection.
 *
 * @param {Editor} editor
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$6.insertText = function (editor, text, marks) {
  deleteExpanded(editor);

  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  marks = marks || selection.marks || document.getInsertMarksAtRange(selection);
  editor.insertTextAtRange(selection, text, marks);

  // If the text was successfully inserted, and the selection had marks on it,
  // unset the selection's marks.
  if (selection.marks && document !== editor.value.document) {
    editor.select({ marks: null });
  }
};

/**
 * Remove a `mark` from the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */

Commands$6.removeMark = function (editor, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;


  if (selection.isExpanded) {
    editor.removeMarkAtRange(selection, mark);
  } else if (selection.marks) {
    var marks = selection.marks.remove(mark);
    var sel = selection.set('marks', marks);
    editor.select(sel);
  } else {
    var _marks2 = document.getActiveMarksAtRange(selection).remove(mark);
    var _sel2 = selection.set('marks', _marks2);
    editor.select(_sel2);
  }
};

/**
 * Replace an `oldMark` with a `newMark` in the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} oldMark
 * @param {Mark} newMark
 */

Commands$6.replaceMark = function (editor, oldMark, newMark) {
  editor.removeMark(oldMark);
  editor.addMark(newMark);
};

/**
 * Set the `properties` of block nodes.
 *
 * @param {Editor} editor
 * @param {Object|String} properties
 */

Commands$6.setBlocks = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.setBlocksAtRange(selection, properties);
};

/**
 * Set the `properties` of inline nodes.
 *
 * @param {Editor} editor
 * @param {Object|String} properties
 */

Commands$6.setInlines = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.setInlinesAtRange(selection, properties);
};

/**
 * Split the block node at the current selection, to optional `depth`.
 *
 * @param {Editor} editor
 * @param {Number} depth (optional)
 */

Commands$6.splitBlock = function (editor) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  deleteExpanded(editor);

  var value = editor.value;
  var selection = value.selection,
      document = value.document;

  var marks = selection.marks || document.getInsertMarksAtRange(selection);
  editor.splitBlockAtRange(selection, depth).moveToEnd();

  if (marks && marks.size !== 0) {
    editor.select({ marks: marks });
  }
};

/**
 * Split the inline nodes to optional `height`.
 *
 * @param {Editor} editor
 * @param {Number} height (optional)
 */

Commands$6.splitInline = function (editor, height) {
  deleteExpanded(editor);
  var value = editor.value;
  var selection = value.selection;

  editor.splitInlineAtRange(selection, height);
};

/**
 * Add or remove a `mark` from the characters in the current selection,
 * depending on whether it's already there.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */

Commands$6.toggleMark = function (editor, mark) {
  mark = Mark.create(mark);
  var value = editor.value;

  var exists = value.activeMarks.has(mark);

  if (exists) {
    editor.removeMark(mark);
  } else {
    editor.addMark(mark);
  }
};

/**
 * Unwrap nodes from a block with `properties`.
 *
 * @param {Editor} editor
 * @param {String|Object} properties
 */

Commands$6.unwrapBlock = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.unwrapBlockAtRange(selection, properties);
};

/**
 * Unwrap nodes from an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {String|Object} properties
 */

Commands$6.unwrapInline = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.unwrapInlineAtRange(selection, properties);
};

/**
 * Wrap nodes in a new `block`.
 *
 * @param {Editor} editor
 * @param {Block|Object|String} block
 */

Commands$6.wrapBlock = function (editor, block) {
  var value = editor.value;
  var selection = value.selection;

  editor.wrapBlockAtRange(selection, block);
};

/**
 * Wrap nodes in a new `inline`.
 *
 * @param {Editor} editor
 * @param {Inline|Object|String} inline
 */

Commands$6.wrapInline = function (editor, inline) {
  var value = editor.value;
  var selection = value.selection;

  editor.wrapInlineAtRange(selection, inline);
};

/**
 * Wrap the current selection with prefix/suffix.
 *
 * @param {Editor} editor
 * @param {String} prefix
 * @param {String} suffix
 */

Commands$6.wrapText = function (editor, prefix) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : prefix;
  var value = editor.value;
  var selection = value.selection;

  editor.wrapTextAtRange(selection, prefix, suffix);

  // If the selection was collapsed, it will have moved the start offset too.
  if (selection.isCollapsed) {
    editor.moveStartBackward(prefix.length);
  }

  // Adding the suffix will have pushed the end of the selection further on, so
  // we need to move it back to account for this.
  editor.moveEndBackward(suffix.length);

  // There's a chance that the selection points moved "through" each other,
  // resulting in a now-incorrect selection direction.
  if (selection.isForward !== editor.value.selection.isForward) {
    editor.flip();
  }
};

/**
 * A plugin that defines the core Slate logic.
 *
 * @param {Object} options
 * @return {Object}
 */

function CorePlugin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$plugins = options.plugins,
      plugins = _options$plugins === undefined ? [] : _options$plugins;

  /**
   * The core Slate commands.
   *
   * @type {Object}
   */

  var commands = CommandsPlugin(_extends({}, Commands$1, Commands$2, Commands$3, Commands$4, Commands$5, Commands$6));

  /**
   * The core Slate queries.
   *
   * @type {Object}
   */

  var queries = QueriesPlugin({
    isAtomic: function isAtomic() {
      return false;
    },
    isVoid: function isVoid() {
      return false;
    }
  });

  /**
   * The core Slate schema.
   *
   * @type {Object}
   */

  var schema = SchemaPlugin({
    rules: [
    // Only allow block nodes in documents.
    {
      match: { object: 'document' },
      nodes: [{
        match: { object: 'block' }
      }]
    },

    // Only allow block nodes or inline and text nodes in blocks.
    {
      match: {
        object: 'block',
        first: { object: 'block' }
      },
      nodes: [{
        match: { object: 'block' }
      }]
    }, {
      match: {
        object: 'block',
        first: [{ object: 'inline' }, { object: 'text' }]
      },
      nodes: [{
        match: [{ object: 'inline' }, { object: 'text' }]
      }]
    },

    // Only allow inline and text nodes in inlines.
    {
      match: { object: 'inline' },
      nodes: [{ match: [{ object: 'inline' }, { object: 'text' }] }]
    },

    // Ensure that block and inline nodes have at least one text child.
    {
      match: [{ object: 'block' }, { object: 'inline' }],
      nodes: [{ min: 1 }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            node = error.node;


        if (code === 'child_min_invalid' && node.nodes.isEmpty()) {
          editor.insertNodeByKey(node.key, 0, Text.create());
        }
      }
    },

    // Ensure that inline nodes are surrounded by text nodes.
    {
      match: { object: 'block' },
      first: [{ object: 'block' }, { object: 'text' }],
      last: [{ object: 'block' }, { object: 'text' }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            node = error.node;

        var text = Text.create();
        var i = void 0;

        if (code === 'first_child_object_invalid') {
          i = 0;
        } else if (code === 'last_child_object_invalid') {
          i = node.nodes.size;
        } else {
          return;
        }

        editor.insertNodeByKey(node.key, i, text);
      }
    }, {
      match: { object: 'inline' },
      first: [{ object: 'block' }, { object: 'text' }],
      last: [{ object: 'block' }, { object: 'text' }],
      previous: [{ object: 'block' }, { object: 'text' }],
      next: [{ object: 'block' }, { object: 'text' }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            node = error.node,
            index = error.index;

        var text = Text.create();
        var i = void 0;

        if (code === 'first_child_object_invalid') {
          i = 0;
        } else if (code === 'last_child_object_invalid') {
          i = node.nodes.size;
        } else if (code === 'previous_sibling_object_invalid') {
          i = index;
        } else if (code === 'next_sibling_object_invalid') {
          i = index + 1;
        } else {
          return;
        }

        editor.insertNodeByKey(node.key, i, text);
      }
    },

    // Merge adjacent text nodes.
    {
      match: { object: 'text' },
      next: [{ object: 'block' }, { object: 'inline' }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            next = error.next;


        if (code === 'next_sibling_object_invalid') {
          editor.mergeNodeByKey(next.key);
        }
      }
    }]
  });

  /**
   * Return the plugins.
   *
   * @type {Array}
   */

  return [schema].concat(toConsumableArray(plugins), [commands, queries]);
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$4 = browser$1('slate:editor');

/**
 * Editor.
 *
 * @type {Editor}
 */

var Editor = function () {
  /**
   * Create a new `Editor` with `attrs`.
   *
   * @param {Object} attrs
   * @param {Object} options
   */

  function Editor() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Editor);
    var _options$controller = options.controller,
        controller = _options$controller === undefined ? this : _options$controller,
        _options$construct = options.construct,
        construct = _options$construct === undefined ? true : _options$construct;
    var _attrs$onChange = attrs.onChange,
        onChange = _attrs$onChange === undefined ? function () {} : _attrs$onChange,
        _attrs$plugins = attrs.plugins,
        plugins = _attrs$plugins === undefined ? [] : _attrs$plugins,
        _attrs$readOnly = attrs.readOnly,
        readOnly = _attrs$readOnly === undefined ? false : _attrs$readOnly,
        _attrs$value = attrs.value,
        value = _attrs$value === undefined ? Value.create() : _attrs$value;


    this.controller = controller;
    this.middleware = {};
    this.onChange = onChange;
    this.operations = immutable.List();
    this.readOnly = null;
    this.value = null;

    this.tmp = {
      dirty: [],
      flushing: false,
      merge: null,
      normalize: true,
      save: true
    };

    var core = CorePlugin({ plugins: plugins });
    registerPlugin(this, core);

    if (construct) {
      this.run('onConstruct');
      this.setReadOnly(readOnly);
      this.setValue(value, options);
    }
  }

  /**
   * Apply an `operation` to the editor, updating its value.
   *
   * @param {Operation|Object} operation
   * @return {Editor}
   */

  createClass(Editor, [{
    key: 'applyOperation',
    value: function applyOperation(operation) {
      var _this = this;

      var operations = this.operations,
          controller = this.controller;

      var value = this.value;

      // Add in the current `value` in case the operation was serialized.
      if (isPlainObject(operation)) {
        operation = _extends({}, operation, { value: value });
      }

      operation = Operation.create(operation);

      // Save the operation into the history. Since `save` is a command, we need
      // to do it without normalizing, since it would have side effects.
      this.withoutNormalizing(function () {
        controller.save(operation);
        value = _this.value;
      });

      // Apply the operation to the value.
      debug$4('apply', { operation: operation });
      this.value = operation.apply(value);
      this.operations = operations.push(operation);

      // Get the paths of the affected nodes, and mark them as dirty.
      var newDirtyPaths = getDirtyPaths(operation);
      var dirty = this.tmp.dirty.reduce(function (memo, path) {
        path = PathUtils.create(path);
        var transformed = PathUtils.transform(path, operation);
        memo = memo.concat(transformed.toArray());
        return memo;
      }, newDirtyPaths);

      this.tmp.dirty = dirty;

      // If we're not already, queue the flushing process on the next tick.
      if (!this.tmp.flushing) {
        this.tmp.flushing = true;
        Promise.resolve().then(function () {
          return _this.flush();
        });
      }

      return controller;
    }

    /**
     * Flush the editor's current change.
     *
     * @return {Editor}
     */

  }, {
    key: 'flush',
    value: function flush() {
      this.run('onChange');
      var value = this.value,
          operations = this.operations,
          controller = this.controller;

      var change = { value: value, operations: operations };
      this.operations = immutable.List();
      this.tmp.flushing = false;
      this.onChange(change);
      return controller;
    }

    /**
     * Trigger a command by `type` with `...args`.
     *
     * @param {String|Function} type
     * @param {Any} ...args
     * @return {Editor}
     */

  }, {
    key: 'command',
    value: function command(type) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var controller = this.controller;


      if (typeof type === 'function') {
        type.apply(undefined, [controller].concat(args));
        normalizeDirtyPaths(this);
        return controller;
      }

      debug$4('command', { type: type, args: args });
      var obj = { type: type, args: args };
      this.run('onCommand', obj);
      normalizeDirtyPaths(this);
      return controller;
    }

    /**
     * Checks if a command by `type` has been registered.
     *
     * @param {String} type
     * @return {Boolean}
     */

  }, {
    key: 'hasCommand',
    value: function hasCommand(type) {
      var controller = this.controller;

      var has = type in controller && controller[type].__command;

      return has;
    }

    /**
     * Checks if a query by `type` has been registered.
     *
     * @param {String} type
     * @return {Boolean}
     */

  }, {
    key: 'hasQuery',
    value: function hasQuery(type) {
      var controller = this.controller;

      var has = type in controller && controller[type].__query;

      return has;
    }

    /**
     * Normalize all of the nodes in the document from scratch.
     *
     * @return {Editor}
     */

  }, {
    key: 'normalize',
    value: function normalize() {
      var value = this.value,
          controller = this.controller;
      var document = value.document;

      var table = document.getKeysToPathsTable();
      var paths = Object.values(table).map(PathUtils.create);
      this.tmp.dirty = this.tmp.dirty.concat(paths);
      normalizeDirtyPaths(this);

      var selection = value.selection;

      document = value.document;

      if (selection.isUnset && document.nodes.size) {
        controller.moveToStartOfDocument();
      }

      return controller;
    }

    /**
     * Ask a query by `type` with `...args`.
     *
     * @param {String|Function} type
     * @param {Any} ...args
     * @return {Any}
     */

  }, {
    key: 'query',
    value: function query(type) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var controller = this.controller;


      if (typeof type === 'function') {
        return type.apply(undefined, [controller].concat(args));
      }

      debug$4('query', { type: type, args: args });
      var obj = { type: type, args: args };
      return this.run('onQuery', obj);
    }

    /**
     * Register a command `type` with the editor.
     *
     * @param {String} type
     * @return {Editor}
     */

  }, {
    key: 'registerCommand',
    value: function registerCommand(type) {
      var _this2 = this;

      var controller = this.controller;


      if (type in controller && controller[type].__command) {
        return controller;
      }

      index$1(!(type in controller), 'You cannot register a `' + type + '` command because it would overwrite an existing property of the `Editor`.');

      var method = function method() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _this2.command.apply(_this2, [type].concat(args));
      };
      controller[type] = method;
      method.__command = true;
      return controller;
    }

    /**
     * Register a query `type` with the editor.
     *
     * @param {String} type
     * @return {Editor}
     */

  }, {
    key: 'registerQuery',
    value: function registerQuery(type) {
      var _this3 = this;

      var controller = this.controller;


      if (type in controller && controller[type].__query) {
        return controller;
      }

      index$1(!(type in controller), 'You cannot register a `' + type + '` query because it would overwrite an existing property of the `Editor`.');

      var method = function method() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _this3.query.apply(_this3, [type].concat(args));
      };
      controller[type] = method;
      method.__query = true;
      return controller;
    }

    /**
     * Run through the middleware stack by `key` with `args`.
     *
     * @param {String} key
     * @param {Any} ...args
     * @return {Any}
     */

  }, {
    key: 'run',
    value: function run(key) {
      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      var controller = this.controller,
          middleware = this.middleware;

      var fns = middleware[key] || [];
      var i = 0;

      function next() {
        var fn = fns[i++];
        if (!fn) return;

        for (var _len6 = arguments.length, overrides = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          overrides[_key6] = arguments[_key6];
        }

        if (overrides.length) {
          args = overrides;
        }

        var ret = fn.apply(undefined, toConsumableArray(args).concat([controller, next]));
        return ret;
      }

      Object.defineProperty(next, 'change', {
        get: function get$$1() {
          index$1(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'onChange', {
        get: function get$$1() {
          index$1(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'props', {
        get: function get$$1() {
          index$1(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'schema', {
        get: function get$$1() {
          index$1(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'stack', {
        get: function get$$1() {
          index$1(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      return next();
    }

    /**
     * Set the `readOnly` flag.
     *
     * @param {Boolean} readOnly
     * @return {Editor}
     */

  }, {
    key: 'setReadOnly',
    value: function setReadOnly(readOnly) {
      this.readOnly = readOnly;
      return this;
    }

    /**
     * Set the editor's `value`.
     *
     * @param {Value} value
     * @param {Options} options
     * @return {Editor}
     */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$normalize = options.normalize,
          normalize = _options$normalize === undefined ? value !== this.value : _options$normalize;

      this.value = value;

      if (normalize) {
        this.normalize();
      }

      return this;
    }

    /**
     * Apply a series of changes inside a synchronous `fn`, deferring
     * normalization until after the function has finished executing.
     *
     * @param {Function} fn
     * @return {Editor}
     */

  }, {
    key: 'withoutNormalizing',
    value: function withoutNormalizing(fn) {
      var controller = this.controller;

      var value = this.tmp.normalize;
      this.tmp.normalize = false;
      fn(controller);
      this.tmp.normalize = value;
      normalizeDirtyPaths(this);
      return controller;
    }

    /**
     * Deprecated.
     */

  }, {
    key: 'change',
    value: function change(fn) {
      index(false, 'As of Slate 0.43 the `change` object has been replaced with `editor`, so the `editor.change()` method is deprecated.`');

      for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
      }

      fn.apply(undefined, [this.controller].concat(args));
    }
  }, {
    key: 'call',
    value: function call(fn) {
      index(false, 'As of Slate 0.43 the `editor.call(fn)` method has been deprecated, please use `editor.command(fn)` instead.');

      for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        args[_key8 - 1] = arguments[_key8];
      }

      fn.apply(undefined, [this.controller].concat(args));
      return this.controller;
    }
  }, {
    key: 'applyOperations',
    value: function applyOperations(operations) {
      var _this4 = this;

      index(false, 'As of Slate 0.43 the `applyOperations` method is deprecated, please apply each operation in a loop instead.');

      operations.forEach(function (op) {
        return _this4.applyOperation(op);
      });
      return this.controller;
    }
  }, {
    key: 'setOperationFlag',
    value: function setOperationFlag(key, value) {
      index(false, 'As of slate@0.41 the `change.setOperationFlag` method has been deprecated.');

      this.tmp[key] = value;
      return this;
    }
  }, {
    key: 'getFlag',
    value: function getFlag(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      index(false, 'As of slate@0.41 the `change.getFlag` method has been deprecated.');

      return options[key] !== undefined ? options[key] : this.tmp[key];
    }
  }, {
    key: 'unsetOperationFlag',
    value: function unsetOperationFlag(key) {
      index(false, 'As of slate@0.41 the `change.unsetOperationFlag` method has been deprecated.');

      delete this.tmp[key];
      return this;
    }
  }, {
    key: 'withoutNormalization',
    value: function withoutNormalization(fn) {
      index(false, 'As of slate@0.41 the `change.withoutNormalization` helper has been renamed to `change.withoutNormalizing`.');

      return this.withoutNormalizing(fn);
    }
  }, {
    key: 'editor',
    get: function get$$1() {
      index(false, "As of Slate 0.43 the `change` object has been replaced with `editor`, so you don't need to access `change.editor`.");

      return this.controller;
    }
  }]);
  return Editor;
}();

/**
 * Get the "dirty" paths for a given `operation`.
 *
 * @param {Operation} operation
 * @return {Array}
 */

function getDirtyPaths(operation) {
  var type = operation.type,
      node = operation.node,
      path = operation.path,
      newPath = operation.newPath;


  switch (type) {
    case 'add_mark':
    case 'insert_text':
    case 'remove_mark':
    case 'remove_text':
    case 'set_mark':
    case 'set_node':
      {
        var ancestors = PathUtils.getAncestors(path).toArray();
        return [].concat(toConsumableArray(ancestors), [path]);
      }

    case 'insert_node':
      {
        var table = node.getKeysToPathsTable();
        var paths = Object.values(table).map(function (p) {
          return path.concat(p);
        });
        var _ancestors = PathUtils.getAncestors(path).toArray();
        return [].concat(toConsumableArray(_ancestors), [path], toConsumableArray(paths));
      }

    case 'split_node':
      {
        var _ancestors2 = PathUtils.getAncestors(path).toArray();
        var nextPath = PathUtils.increment(path);
        return [].concat(toConsumableArray(_ancestors2), [path, nextPath]);
      }

    case 'merge_node':
      {
        var _ancestors3 = PathUtils.getAncestors(path).toArray();
        var previousPath = PathUtils.decrement(path);
        return [].concat(toConsumableArray(_ancestors3), [previousPath]);
      }

    case 'move_node':
      {
        if (PathUtils.isEqual(path, newPath)) {
          return [];
        }

        var oldAncestors = PathUtils.getAncestors(path).reduce(function (arr, p) {
          arr.push.apply(arr, toConsumableArray(PathUtils.transform(p, operation).toArray()));
          return arr;
        }, []);

        var newAncestors = PathUtils.getAncestors(newPath).reduce(function (arr, p) {
          arr.push.apply(arr, toConsumableArray(PathUtils.transform(p, operation).toArray()));
          return arr;
        }, []);

        return [].concat(toConsumableArray(oldAncestors), toConsumableArray(newAncestors));
      }

    case 'remove_node':
      {
        var _ancestors4 = PathUtils.getAncestors(path).toArray();
        return [].concat(toConsumableArray(_ancestors4));
      }

    default:
      {
        return [];
      }
  }
}

/**
 * Normalize any new "dirty" paths that have been added to the change.
 *
 * @param {Editor}
 */

function normalizeDirtyPaths(editor) {
  if (!editor.tmp.normalize) {
    return;
  }

  if (!editor.tmp.dirty.length) {
    return;
  }

  editor.withoutNormalizing(function () {
    while (editor.tmp.dirty.length) {
      var path = editor.tmp.dirty.pop();
      normalizeNodeByPath(editor, path);
    }
  });
}

/**
 * Normalize the node at a specific `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

function normalizeNodeByPath(editor, path) {
  var controller = editor.controller;
  var value = editor.value;
  var _value = value,
      document = _value.document;

  var node = document.assertNode(path);
  var iterations = 0;
  var max = 100 + (node.object === 'text' ? 1 : node.nodes.size);

  while (node) {
    var fn = node.normalize(controller);

    if (!fn) {
      break;
    }

    // Run the normalize `fn` to fix the node.
    fn(controller);

    // Attempt to re-find the node by path, or by key if it has changed
    // locations in the tree continue iterating.
    value = editor.value;
    document = value.document;
    var _node = node,
        key = _node.key;

    var found = document.getDescendant(path);

    if (found && found.key === key) {
      node = found;
    } else {
      found = document.getDescendant(key);

      if (found) {
        node = found;
        path = document.getPath(key);
      } else {
        // If it no longer exists by key, it was removed, so we're done.
        break;
      }
    }

    // Increment the iterations counter, and check to make sure that we haven't
    // exceeded the max. Without this check, it's easy for the `normalize`
    // function of a schema rule to be written incorrectly and for an infinite
    // invalid loop to occur.
    iterations++;

    if (iterations > max) {
      throw new Error('A schema rule could not be normalized after sufficient iterations. This is usually due to a `rule.normalize` or `plugin.normalizeNode` function of a schema being incorrectly written, causing an infinite loop.');
    }
  }
}

/**
 * Register a `plugin` with the editor.
 *
 * @param {Editor} editor
 * @param {Object|Array} plugin
 */

function registerPlugin(editor, plugin) {
  if (Array.isArray(plugin)) {
    plugin.forEach(function (p) {
      return registerPlugin(editor, p);
    });
    return;
  }

  var commands = plugin.commands,
      queries = plugin.queries,
      schema = plugin.schema,
      rest = objectWithoutProperties(plugin, ['commands', 'queries', 'schema']);


  if (commands) {
    var commandsPlugin = CommandsPlugin(commands);
    registerPlugin(editor, commandsPlugin);
  }

  if (queries) {
    var queriesPlugin = QueriesPlugin(queries);
    registerPlugin(editor, queriesPlugin);
  }

  if (schema) {
    var schemaPlugin = SchemaPlugin(schema);
    registerPlugin(editor, schemaPlugin);
  }

  for (var key in rest) {
    var fn = rest[key];
    var middleware = editor.middleware[key] = editor.middleware[key] || [];
    middleware.push(fn);
  }
}

/**
 * Mix in an `Interface` to a `Class`.
 *
 * @param {Class} Interface
 * @param {Class} Class
 */

function mixin(Interface, Classes) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var Class = _step.value;

      // Copy static properties from the interface.
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.getOwnPropertyNames(Interface)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var name = _step2.value;

          if (Class.hasOwnProperty(name)) continue;
          var desc = Object.getOwnPropertyDescriptor(Interface, name);
          Object.defineProperty(Class, name, desc);
        }

        // Copy instance properties from the interface.
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.getOwnPropertyNames(Interface.prototype)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _name = _step3.value;

          if (Class.prototype.hasOwnProperty(_name)) continue;
          var desc = Object.getOwnPropertyDescriptor(Interface.prototype, _name);
          Object.defineProperty(Class.prototype, _name, desc);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * A factory for the interface that all Slate objects implement.
 *
 * @type {Function}
 */

function create$2(type) {
  var TYPE = TYPES[type];
  var camel = '' + type.charAt(0).toUpperCase() + type.slice(1);
  var is = 'is' + camel;

  var ObjectInterface = function () {
    function ObjectInterface() {
      classCallCheck(this, ObjectInterface);
    }

    createClass(ObjectInterface, [{
      key: 'object',

      /**
       * Return the type of the object.
       *
       * @return {String}
       */

      get: function get$$1() {
        return type;
      }
    }]);
    return ObjectInterface;
  }();

  ObjectInterface[is] = isObject$1.bind(null, type);
  ObjectInterface.prototype[TYPE] = true;
  return ObjectInterface;
}

/**
 * Mix in the object interfaces.
 */

Object.entries({
  Block: Block,
  Change: Change,
  Decoration: Decoration,
  Document: Document,
  Editor: Editor,
  Inline: Inline,
  Leaf: Leaf,
  Mark: Mark,
  Node: Node,
  Operation: Operation,
  Point: Point,
  Range: Range,
  Selection: Selection,
  Text: Text,
  Value: Value
}).forEach(function (_ref) {
  var _ref2 = slicedToArray(_ref, 2),
      camel = _ref2[0],
      obj = _ref2[1];

  return mixin(create$2(camel.toLowerCase()), [obj]);
});

/**
 * The interface that all Slate models implement.
 *
 * @type {Class}
 */

var ModelInterface = function () {
  function ModelInterface() {
    classCallCheck(this, ModelInterface);
  }

  createClass(ModelInterface, [{
    key: 'toJS',


    /**
     * Alias `toJS`.
     */

    value: function toJS() {
      return this.toJSON.apply(this, arguments);
    }
  }], [{
    key: 'fromJS',

    /**
     * Alias `fromJS`.
     */

    value: function fromJS() {
      return this.fromJSON.apply(this, arguments);
    }
  }]);
  return ModelInterface;
}();

/**
 * Mix in the common interface.
 *
 * @param {Record}
 */

mixin(ModelInterface, [Block, Decoration, Document, Inline, Leaf, Mark, Node, Operation, Point, Range, Selection, Text, Value]);

/**
 * The interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Class}
 */

var NodeInterface = function () {
  function NodeInterface() {
    classCallCheck(this, NodeInterface);
  }

  createClass(NodeInterface, [{
    key: 'getFirstText',


    /**
     * Get the first text node of a node, or the node itself.
     *
     * @return {Node|Null}
     */

    value: function getFirstText() {
      if (this.object === 'text') {
        return this;
      }

      var descendant = null;

      var found = this.nodes.find(function (node) {
        if (node.object === 'text') return true;
        descendant = node.getFirstText();
        return !!descendant;
      });

      return descendant || found;
    }

    /**
     * Get an object mapping all the keys in the node to their paths.
     *
     * @return {Object}
     */

  }, {
    key: 'getKeysToPathsTable',
    value: function getKeysToPathsTable() {
      var ret = defineProperty({}, this.key, []);

      if (this.nodes) {
        this.nodes.forEach(function (node, i) {
          var nested = node.getKeysToPathsTable();

          for (var key in nested) {
            var path = nested[key];

            index(!(key in ret), 'A node with a duplicate key of "' + key + '" was found! Duplicate keys are not allowed, you should use `node.regenerateKey` before inserting if you are reusing an existing node.');

            ret[key] = [i].concat(toConsumableArray(path));
          }
        });
      }

      return ret;
    }

    /**
     * Get the last text node of a node, or the node itself.
     *
     * @return {Node|Null}
     */

  }, {
    key: 'getLastText',
    value: function getLastText() {
      if (this.object === 'text') {
        return this;
      }

      var descendant = null;

      var found = this.nodes.findLast(function (node) {
        if (node.object === 'text') return true;
        descendant = node.getLastText();
        return descendant;
      });

      return descendant || found;
    }

    /**
     * Get a node in the tree, or the node itself.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNode',
    value: function getNode(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (this.object === 'text' && path.size) return null;
      var node = path.size ? this.getDescendant(path) : this;
      return node;
    }

    /**
     * Find the path to a node.
     *
     * @param {String|List} key
     * @return {List}
     */

  }, {
    key: 'getPath',
    value: function getPath(key) {
      // Handle the case of passing in a path directly, to match other methods.
      if (immutable.List.isList(key)) return key;

      var dict = this.getKeysToPathsTable();
      var path = dict[key];
      return path ? immutable.List(path) : null;
    }

    /**
     * Get the concatenated text string of a node.
     *
     * @return {String}
     */

  }, {
    key: 'getText',
    value: function getText() {
      var children = this.object === 'text' ? this.leaves : this.nodes;
      var text = children.reduce(function (memo, c) {
        return memo + c.text;
      }, '');
      return text;
    }

    /**
     * Check if a node exists.
     *
     * @param {List|String} path
     * @return {Boolean}
     */

  }, {
    key: 'hasNode',
    value: function hasNode(path) {
      var node = this.getNode(path);
      return !!node;
    }

    /**
     * Normalize the text node with an `editor`.
     *
     * @param {Editor} editor
     * @return {Function|Void}
     */

  }, {
    key: 'normalize',
    value: function normalize(editor) {
      var normalizer = editor.run('normalizeNode', this);
      return normalizer;
    }

    /**
     * Regenerate the node's key.
     *
     * @return {Node}
     */

  }, {
    key: 'regenerateKey',
    value: function regenerateKey() {
      var key = KeyUtils.create();
      var node = this.set('key', key);
      return node;
    }

    /**
     * Resolve a path from a path list or key string.
     *
     * An `index` can be provided, in which case paths created from a key string
     * will have the index pushed onto them. This is helpful in cases where you
     * want to accept either a `path` or a `key, index` combination for targeting
     * a location in the tree that doesn't exist yet, like when inserting.
     *
     * @param {List|String} value
     * @param {Number} index
     * @return {List}
     */

  }, {
    key: 'resolvePath',
    value: function resolvePath(path, index$$1) {
      if (typeof path === 'string') {
        path = this.getPath(path);

        if (index$$1 != null) {
          path = path.concat(index$$1);
        }
      } else {
        path = PathUtils.create(path);
      }

      return path;
    }

    /**
     * Validate the node with an `editor`.
     *
     * @param {Editor} editor
     * @return {Error|Void}
     */

  }, {
    key: 'validate',
    value: function validate(editor) {
      var error = editor.run('validateNode', this);
      return error;
    }
  }, {
    key: 'text',

    /**
     * Get the concatenated text of the node.
     *
     * @return {String}
     */

    get: function get$$1() {
      return this.getText();
    }
  }]);
  return NodeInterface;
}();

/**
 * Memoize read methods.
 */

memoize(NodeInterface.prototype, ['getFirstText', 'getKeysToPathsTable', 'getLastText', 'getText', 'normalize', 'validate']);

/**
 * Mix in the node interface.
 */

mixin(NodeInterface, [Block, Document, Inline, Text]);

var GROUP_LEFT_TO_RIGHT;
var GROUP_RIGHT_TO_LEFT;
var EXPRESSION_LEFT_TO_RIGHT;
var EXPRESSION_RIGHT_TO_LEFT;

/*
 * Character ranges of left-to-right characters.
 */

GROUP_LEFT_TO_RIGHT = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
    '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
    '\uFE00-\uFE6F\uFEFD-\uFFFF';

/*
 * Character ranges of right-to-left characters.
 */

GROUP_RIGHT_TO_LEFT = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';

/*
 * Expression to match a left-to-right string.
 *
 * Matches the start of a string, followed by zero or
 * more non-right-to-left characters, followed by a
 * left-to-right character.
 */

EXPRESSION_LEFT_TO_RIGHT = new RegExp(
    '^[^' + GROUP_RIGHT_TO_LEFT + ']*[' + GROUP_LEFT_TO_RIGHT + ']'
);

/*
 * Expression to match a right-to-left string.
 *
 * Matches the start of a string, followed by zero or
 * more non-left-to-right characters, followed by a
 * right-to-left character.
 */

EXPRESSION_RIGHT_TO_LEFT = new RegExp(
    '^[^' + GROUP_LEFT_TO_RIGHT + ']*[' + GROUP_RIGHT_TO_LEFT + ']'
);

/**
 * Detect the direction of text.
 *
 * @param {string} value - value to stringify and check.
 * @return {string} - One of `"rtl"`, `"ltr"`, or
 *   `"neutral"`.
 */
function direction(value) {
    value = value.toString();

    if (EXPRESSION_RIGHT_TO_LEFT.test(value)) {
        return 'rtl';
    }

    if (EXPRESSION_LEFT_TO_RIGHT.test(value)) {
        return 'ltr';
    }

    return 'neutral';
}

/*
 * Expose `direction`.
 */

var direction_1 = direction;

/**
 * The interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Class}
 */

var ElementInterface = function () {
  function ElementInterface() {
    classCallCheck(this, ElementInterface);
  }

  createClass(ElementInterface, [{
    key: 'addMark',

    /**
     * Add mark to text at `offset` and `length` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Node}
     */

    value: function addMark(path, offset, length, mark) {
      var node = this.assertDescendant(path);
      path = this.resolvePath(path);
      node = node.addMark(offset, length, mark);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Create a decoration with `properties` relative to the node.
     *
     * @param {Object|Decoration} properties
     * @return {Decoration}
     */

  }, {
    key: 'createDecoration',
    value: function createDecoration(properties) {
      properties = Decoration.createProperties(properties);
      var decoration = this.resolveDecoration(properties);
      return decoration;
    }

    /**
     * Create a point with `properties` relative to the node.
     *
     * @param {Object|Point} properties
     * @return {Range}
     */

  }, {
    key: 'createPoint',
    value: function createPoint(properties) {
      properties = Point.createProperties(properties);
      var point = this.resolvePoint(properties);
      return point;
    }

    /**
     * Create a range with `properties` relative to the node.
     *
     * @param {Object|Range} properties
     * @return {Range}
     */

  }, {
    key: 'createRange',
    value: function createRange(properties) {
      properties = Range.createProperties(properties);
      var range = this.resolveRange(properties);
      return range;
    }

    /**
     * Create a selection with `properties` relative to the node.
     *
     * @param {Object|Selection} properties
     * @return {Selection}
     */

  }, {
    key: 'createSelection',
    value: function createSelection(properties) {
      properties = Selection.createProperties(properties);
      var selection = this.resolveSelection(properties);
      return selection;
    }

    /**
     * Recursively filter all descendant nodes with `iterator`.
     *
     * @param {Function} iterator
     * @return {List<Node>}
     */

  }, {
    key: 'filterDescendants',
    value: function filterDescendants(iterator) {
      var matches = [];

      this.forEachDescendant(function (node, i, nodes) {
        if (iterator(node, i, nodes)) matches.push(node);
      });

      return immutable.List(matches);
    }

    /**
     * Recursively find a descendant node by `iterator`.
     *
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'findDescendant',
    value: function findDescendant(iterator) {
      var found = null;

      this.forEachDescendant(function (node, i, nodes) {
        if (iterator(node, i, nodes)) {
          found = node;
          return false;
        }
      });

      return found;
    }

    /**
     * Recursively find a descendant node and its path by `iterator`.
     *
     * @param {Function} iterator
     * @return {Null|[Node, List]}
     */

  }, {
    key: 'findDescendantAndPath',
    value: function findDescendantAndPath(iterator) {
      var pathToThisNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PathUtils.create([]);
      var findLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var found = void 0;
      var foundPath = void 0;

      this.forEachDescendantWithPath(function (node, path, nodes) {
        if (iterator(node, path, nodes)) {
          found = node;
          foundPath = path;
          return false;
        }
      }, pathToThisNode, findLast);

      return found ? [found, foundPath] : null;
    }

    // Easy helpers to avoid needing to pass findLast boolean

  }, {
    key: 'findFirstDescendantAndPath',
    value: function findFirstDescendantAndPath(iterator, pathToThisNode) {
      return this.findDescendantAndPath(iterator, pathToThisNode, false);
    }
  }, {
    key: 'findLastDescendantAndPath',
    value: function findLastDescendantAndPath(iterator, pathToThisNode) {
      return this.findDescendantAndPath(iterator, pathToThisNode, true);
    }

    /**
     * Recursively iterate over all descendant nodes with `iterator`. If the
     * iterator returns false it will break the loop.
     *
     * @param {Function} iterator
     */

  }, {
    key: 'forEachDescendant',
    value: function forEachDescendant(iterator) {
      var ret = void 0;

      this.nodes.forEach(function (child, i, nodes) {
        if (iterator(child, i, nodes) === false) {
          ret = false;
          return false;
        }

        if (child.object !== 'text') {
          ret = child.forEachDescendant(iterator);
          return ret;
        }
      });

      return ret;
    }

    /**
     * Recursively iterate over all descendant nodes with `iterator`. If the
     * iterator returns false it will break the loop.
     * Calls iterator with node and path.
     *
     * @param {Function} iterator
     * @param {List} path
     * @param {Boolean} findLast - whether to iterate in reverse order
     */

  }, {
    key: 'forEachDescendantWithPath',
    value: function forEachDescendantWithPath(iterator) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PathUtils.create([]);
      var findLast = arguments[2];

      var nodes = this.nodes;
      var ret = void 0;

      if (findLast) nodes = nodes.reverse();

      nodes.forEach(function (child, i) {
        var childPath = path.concat(i);

        if (iterator(child, childPath, nodes) === false) {
          ret = false;
          return false;
        }

        if (child.object !== 'text') {
          ret = child.forEachDescendantWithPath(iterator, childPath, findLast);
          return ret;
        }
      });

      return ret;
    }

    /**
     * Get a set of the active marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarksAtRange',
    value: function getActiveMarksAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return immutable.Set();

      if (range.isCollapsed) {
        var _range = range,
            _start = _range.start;

        return this.getMarksAtPosition(_start.path, _start.offset).toSet();
      }

      var _range2 = range,
          start = _range2.start,
          end = _range2.end;

      var startPath = start.path;
      var startOffset = start.offset;
      var endPath = end.path;
      var endOffset = end.offset;
      var startText = this.getDescendant(startPath);
      var endText = this.getDescendant(endPath);

      if (!PathUtils.isEqual(startPath, endPath)) {
        while (!PathUtils.isEqual(startPath, endPath) && endOffset === 0) {
          
          var _getPreviousTextAndPa = this.getPreviousTextAndPath(endPath);

          var _getPreviousTextAndPa2 = slicedToArray(_getPreviousTextAndPa, 2);

          endText = _getPreviousTextAndPa2[0];
          endPath = _getPreviousTextAndPa2[1];

          endOffset = endText.text.length;
        }

        while (!PathUtils.isEqual(startPath, endPath) && startOffset === startText.text.length) {
          
          var _getNextTextAndPath = this.getNextTextAndPath(startPath);

          var _getNextTextAndPath2 = slicedToArray(_getNextTextAndPath, 2);

          startText = _getNextTextAndPath2[0];
          startPath = _getNextTextAndPath2[1];

          startOffset = 0;
        }
      }

      if (PathUtils.isEqual(startPath, endPath)) {
        return startText.getActiveMarksBetweenOffsets(startOffset, endOffset);
      }

      var startMarks = startText.getActiveMarksBetweenOffsets(startOffset, startText.text.length);
      if (startMarks.size === 0) return immutable.Set();
      var endMarks = endText.getActiveMarksBetweenOffsets(0, endOffset);
      var marks = startMarks.intersect(endMarks);

      // If marks is already empty, the active marks is empty
      if (marks.size === 0) {
        return marks;
      }

      
      var _getNextTextAndPath3 = this.getNextTextAndPath(startPath);

      var _getNextTextAndPath4 = slicedToArray(_getNextTextAndPath3, 2);

      startText = _getNextTextAndPath4[0];
      startPath = _getNextTextAndPath4[1];


      while (!PathUtils.isEqual(startPath, endPath)) {
        if (startText.text.length !== 0) {
          marks = marks.intersect(startText.getActiveMarks());
          if (marks.size === 0) return immutable.Set();
        }

        
        var _getNextTextAndPath5 = this.getNextTextAndPath(startPath);

        var _getNextTextAndPath6 = slicedToArray(_getNextTextAndPath5, 2);

        startText = _getNextTextAndPath6[0];
        startPath = _getNextTextAndPath6[1];
      }
      return marks;
    }

    /**
     * Get a list of the ancestors of a descendant.
     *
     * @param {List|String} path
     * @return {List<Node>|Null}
     */

  }, {
    key: 'getAncestors',
    value: function getAncestors(path) {
      var _this = this;

      path = this.resolvePath(path);
      if (!path) return null;

      var ancestors = [];

      path.forEach(function (p, i) {
        var current = path.slice(0, i);
        var parent = _this.getNode(current);
        ancestors.push(parent);
      });

      return immutable.List(ancestors);
    }

    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocks',
    value: function getBlocks() {
      var array = this.getBlocksAsArray();
      return immutable.List(array);
    }

    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksAsArray',
    value: function getBlocksAsArray() {
      return this.nodes.reduce(function (array, child) {
        if (child.object !== 'block') return array;
        if (!child.isLeafBlock()) return array.concat(child.getBlocksAsArray());
        array.push(child);
        return array;
      }, []);
    }

    /**
     * Get the leaf block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksAtRange',
    value: function getBlocksAtRange(range) {
      index(false, 'As of slate@0.44 the `node.getBlocksAtRange` method has been renamed to `getLeafBlocksAtRange`.');

      return this.getLeafBlocksAtRange(range);
    }

    /**
     * Get the bottom-most block descendants in a `range` as an array
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getBlocksAtRangeAsArray',
    value: function getBlocksAtRangeAsArray(range) {
      index(false, 'As of slate@0.44 the `node.getBlocksAtRangeAsArray` method has been renamed to `getLeafBlocksAtRangeAsArray`.');

      return this.getLeafBlocksAtRangeAsArray(range);
    }

    /**
     * Get all of the leaf blocks that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksByType',
    value: function getBlocksByType(type) {
      var array = this.getBlocksByTypeAsArray(type);
      return immutable.List(array);
    }

    /**
     * Get all of the leaf blocks that match a `type` as an array
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getBlocksByTypeAsArray',
    value: function getBlocksByTypeAsArray(type) {
      return this.nodes.reduce(function (array, node) {
        if (node.object !== 'block') {
          return array;
        } else if (node.isLeafBlock() && node.type === type) {
          array.push(node);
          return array;
        } else {
          return array.concat(node.getBlocksByTypeAsArray(type));
        }
      }, []);
    }

    /**
     * Get a child node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getChild',
    value: function getChild(path) {
      path = this.resolvePath(path);
      if (!path || path.size > 1) return null;
      var child = this.nodes.get(path.first());
      return child;
    }

    /**
     * Get closest parent of node that matches an `iterator`.
     *
     * @param {List|String} path
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getClosest',
    value: function getClosest(path, iterator) {
      var _this2 = this;

      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var closest = ancestors.findLast(function (node) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // We never want to include the top-level node.
        if (node === _this2) return false;
        return iterator.apply(undefined, [node].concat(args));
      });

      return closest || null;
    }

    /**
     * Get the closest block parent of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestBlock',
    value: function getClosestBlock(path) {
      var closest = this.getClosest(path, function (n) {
        return n.object === 'block';
      });
      return closest;
    }

    /**
     * Get the closest inline parent of a node by `path`.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestInline',
    value: function getClosestInline(path) {
      var closest = this.getClosest(path, function (n) {
        return n.object === 'inline';
      });
      return closest;
    }

    /**
     * Get the closest void parent of a node by `path`.
     *
     * @param {List|String} path
     * @param {Editor} editor
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestVoid',
    value: function getClosestVoid(path, editor) {
      index$1(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.getClosestVoid` method takes an `editor` instead of a `value`.');

      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var ancestor = ancestors.findLast(function (a) {
        return editor.query('isVoid', a);
      });
      return ancestor;
    }

    /**
     * Get the common ancestor of nodes `a` and `b`.
     *
     * @param {List} a
     * @param {List} b
     * @return {Node}
     */

  }, {
    key: 'getCommonAncestor',
    value: function getCommonAncestor(a, b) {
      a = this.resolvePath(a);
      b = this.resolvePath(b);
      if (!a || !b) return null;

      var path = PathUtils.relate(a, b);
      var node = this.getNode(path);
      return node;
    }

    /**
     * Get the decorations for the node from an `editor`.
     *
     * @param {Editor} editor
     * @return {List}
     */

  }, {
    key: 'getDecorations',
    value: function getDecorations(editor) {
      index$1(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.getDecorations` method takes an `editor` instead of a `value`.');

      var array = editor.run('decorateNode', this);
      var decorations = Decoration.createList(array);
      return decorations;
    }

    /**
     * Get the depth of a descendant, with optional `startAt`.
     *
     * @param {List|String} path
     * @param {Number} startAt
     * @return {Number|Null}
     */

  }, {
    key: 'getDepth',
    value: function getDepth(path) {
      var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      path = this.resolvePath(path);
      if (!path) return null;

      var node = this.getNode(path);
      var depth = node ? path.size - 1 + startAt : null;
      return depth;
    }

    /**
     * Get a descendant node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getDescendant',
    value: function getDescendant(path) {
      path = this.resolvePath(path);
      if (!path || !path.size) return null;

      var node = this;

      path.forEach(function (index$$1) {
        node = node.getIn(['nodes', index$$1]);
        return !!node;
      });

      return node;
    }

    /**
     * Get a fragment of the node at a `range`.
     *
     * @param {Range} range
     * @return {Document}
     */

  }, {
    key: 'getFragmentAtRange',
    value: function getFragmentAtRange(range) {
      range = this.resolveRange(range);

      if (range.isUnset) {
        return Document.create();
      }

      var _range3 = range,
          start = _range3.start,
          end = _range3.end;

      var node = this;
      var targetPath = end.path;
      var targetPosition = end.offset;
      var mode = 'end';

      while (targetPath.size) {
        var index$$1 = targetPath.last();
        node = node.splitNode(targetPath, targetPosition);
        targetPosition = index$$1 + 1;
        targetPath = PathUtils.lift(targetPath);

        if (!targetPath.size && mode === 'end') {
          targetPath = start.path;
          targetPosition = start.offset;
          mode = 'start';
        }
      }

      var startIndex = start.path.first() + 1;
      var endIndex = end.path.first() + 2;
      var nodes = node.nodes.slice(startIndex, endIndex);
      var fragment = Document.create({ nodes: nodes });
      return fragment;
    }

    /**
     * Get the furthest parent of a node that matches an `iterator`.
     *
     * @param {Path} path
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthest',
    value: function getFurthest(path, iterator) {
      var _this3 = this;

      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var furthest = ancestors.find(function (node) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        // We never want to include the top-level node.
        if (node === _this3) return false;
        return iterator.apply(undefined, [node].concat(args));
      });

      return furthest || null;
    }

    /**
     * Get the furthest ancestor of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestAncestor',
    value: function getFurthestAncestor(path) {
      path = this.resolvePath(path);
      if (!path || !path.size) return null;
      var furthest = this.nodes.get(path.first());
      return furthest;
    }

    /**
     * Get the furthest block parent of a node.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestBlock',
    value: function getFurthestBlock(path) {
      var furthest = this.getFurthest(path, function (n) {
        return n.object === 'block';
      });
      return furthest;
    }

    /**
     * Get the furthest inline parent of a node.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestInline',
    value: function getFurthestInline(path) {
      var furthest = this.getFurthest(path, function (n) {
        return n.object === 'inline';
      });
      return furthest;
    }

    /**
     * Get the furthest ancestor of a node, where all ancestors to that point only have one child.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestOnlyChildAncestor',
    value: function getFurthestOnlyChildAncestor(path) {
      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var furthest = ancestors.rest().reverse().takeUntil(function (p) {
        return p.nodes.size > 1;
      }).last();

      return furthest || null;
    }

    /**
     * Get the closest inline nodes for each text node in the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getInlines',
    value: function getInlines() {
      var array = this.getInlinesAsArray();
      var list = immutable.List(array);
      return list;
    }

    /**
     * Get the closest inline nodes for each text node in the node, as an array.
     *
     * @return {Array<Node>}
     */

  }, {
    key: 'getInlinesAsArray',
    value: function getInlinesAsArray() {
      var array = [];

      this.nodes.forEach(function (child) {
        if (child.object === 'text') return;

        if (child.isLeafInline()) {
          array.push(child);
        } else {
          array = array.concat(child.getInlinesAsArray());
        }
      });

      return array;
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesAtRange',
    value: function getInlinesAtRange(range) {
      index(false, 'As of slate@0.44 the `node.getInlinesAtRange` method has been renamed to `getLeafInlinesAtRange`.');

      return this.getLeafInlinesAtRange(range);
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getInlinesAtRangeAsArray',
    value: function getInlinesAtRangeAsArray(range) {
      index(false, 'As of slate@0.44 the `node.getInlinesAtRangeAsArray` method has been renamed to `getLeafInlinesAtRangeAsArray`.');

      return this.getLeafInlinesAtRangeAsArray(range);
    }

    /**
     * Get all of the leaf inline nodes that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesByType',
    value: function getInlinesByType(type) {
      var array = this.getInlinesByTypeAsArray(type);
      var list = immutable.List(array);
      return list;
    }

    /**
     * Get all of the leaf inline nodes that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getInlinesByTypeAsArray',
    value: function getInlinesByTypeAsArray(type) {
      var array = this.nodes.reduce(function (inlines, node) {
        if (node.object === 'text') {
          return inlines;
        } else if (node.isLeafInline() && node.type === type) {
          inlines.push(node);
          return inlines;
        } else {
          return inlines.concat(node.getInlinesByTypeAsArray(type));
        }
      }, []);

      return array;
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getInsertMarksAtRange',
    value: function getInsertMarksAtRange(range) {
      range = this.resolveRange(range);
      var _range4 = range,
          start = _range4.start;


      if (range.isUnset) {
        return immutable.Set();
      }

      if (range.isCollapsed) {
        // PERF: range is not cachable, use key and offset as proxies for cache
        return this.getMarksAtPosition(start.path, start.offset);
      }

      var text = this.getDescendant(start.path);
      var marks = text.getMarksAtIndex(start.offset + 1);
      return marks;
    }

    /**
     * Get the bottom-most block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getLeafBlocksAtRange',
    value: function getLeafBlocksAtRange(range) {
      var array = this.getLeafBlocksAtRangeAsArray(range);
      // Eliminate duplicates by converting to an `OrderedSet` first.
      return immutable.List(immutable.OrderedSet(array));
    }

    /**
     * Get the bottom-most descendants in a `range` as an array
     *
     * @param {Range} range
     * @return {Array<Node>}
     */

  }, {
    key: 'getLeafBlocksAtRangeAsArray',
    value: function getLeafBlocksAtRangeAsArray(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return [];

      var _range5 = range,
          start = _range5.start,
          end = _range5.end;


      return this.getLeafBlocksBetweenPathPositionsAsArray(start.path, end.path);
    }

    /**
     * Get the bottom-most descendants between two paths as an array
     *
     * @param {List|Null} startPath
     * @param {List|Null} endPath
     * @return {Array<Node>}
     */

  }, {
    key: 'getLeafBlocksBetweenPathPositionsAsArray',
    value: function getLeafBlocksBetweenPathPositionsAsArray(startPath, endPath) {
      // PERF: the most common case is when the range is in a single block node,
      // where we can avoid a lot of iterating of the tree.
      if (startPath && endPath && PathUtils.isEqual(startPath, endPath)) {
        return [this.getClosestBlock(startPath)];
      } else if (!startPath && !endPath) {
        return this.getBlocksAsArray();
      }

      var startIndex = startPath ? startPath.get(0, 0) : 0;
      var endIndex = endPath ? endPath.get(0, this.nodes.size - 1) : this.nodes.size - 1;

      var array = [];

      this.nodes.slice(startIndex, endIndex + 1).forEach(function (node, i) {
        if (node.object !== 'block') {
          return;
        } else if (node.isLeafBlock()) {
          array.push(node);
        } else {
          var childStartPath = startPath && i === 0 ? PathUtils.drop(startPath) : null;
          var childEndPath = endPath && i === endIndex - startIndex ? PathUtils.drop(endPath) : null;

          array = array.concat(node.getLeafBlocksBetweenPathPositionsAsArray(childStartPath, childEndPath));
        }
      });

      return array;
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getLeafInlinesAtRange',
    value: function getLeafInlinesAtRange(range) {
      var array = this.getLeafInlinesAtRangeAsArray(range);
      // Remove duplicates by converting it to an `OrderedSet` first.
      var list = immutable.List(immutable.OrderedSet(array));
      return list;
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array<Node>}
     */

  }, {
    key: 'getLeafInlinesAtRangeAsArray',
    value: function getLeafInlinesAtRangeAsArray(range) {
      var _this4 = this;

      range = this.resolveRange(range);
      if (range.isUnset) return [];

      var array = this.getTextsAtRangeAsArray(range).map(function (text) {
        return _this4.getClosestInline(text.key);
      }).filter(function (exists) {
        return exists;
      });

      return array;
    }

    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarks',
    value: function getMarks() {
      var array = this.getMarksAsArray();
      return immutable.Set(array);
    }

    /**
     * Get all of the marks as an array.
     *
     * @return {Array}
     */

  }, {
    key: 'getMarksAsArray',
    value: function getMarksAsArray() {
      var _ref;

      var result = [];

      this.nodes.forEach(function (node) {
        result.push(node.getMarksAsArray());
      });

      // PERF: use only one concat rather than multiple for speed.
      var array = (_ref = []).concat.apply(_ref, result);
      return array;
    }

    /**
     * Get a set of marks in a `position`, the equivalent of a collapsed range
     *
     * @param {List|string} key
     * @param {number} offset
     * @return {Set}
     */

  }, {
    key: 'getMarksAtPosition',
    value: function getMarksAtPosition(path, offset) {
      path = this.resolvePath(path);
      var text = this.getDescendant(path);
      var currentMarks = text.getMarksAtIndex(offset);
      if (offset !== 0) return currentMarks;
      var closestBlock = this.getClosestBlock(path);

      if (closestBlock.text === '') {
        // insert mark for empty block; the empty block are often created by split node or add marks in a range including empty blocks
        return currentMarks;
      }

      var previous = this.getPreviousTextAndPath(path);
      if (!previous) return immutable.Set();

      var _previous = slicedToArray(previous, 2),
          previousText = _previous[0],
          previousPath = _previous[1];

      if (closestBlock.hasDescendant(previousPath)) {
        return previous.getMarksAtIndex(previousText.text.length);
      }

      return currentMarks;
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksAtRange',
    value: function getMarksAtRange(range) {
      var marks = immutable.Set(this.getOrderedMarksAtRange(range));
      return marks;
    }

    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksByType',
    value: function getMarksByType(type) {
      var array = this.getMarksByTypeAsArray(type);
      return immutable.Set(array);
    }

    /**
     * Get all of the marks that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getMarksByTypeAsArray',
    value: function getMarksByTypeAsArray(type) {
      var array = this.nodes.reduce(function (memo, node) {
        return node.object === 'text' ? memo.concat(node.getMarksAsArray().filter(function (m) {
          return m.type === type;
        })) : memo.concat(node.getMarksByTypeAsArray(type));
      }, []);

      return array;
    }

    /**
     * Get the block node after a descendant text node by `path`.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextBlock',
    value: function getNextBlock(path) {
      path = this.resolvePath(path);
      var match = this.getNextDeepMatchingNodeAndPath(path, function (n) {
        return n.object === 'block';
      });

      return match ? match[0] : null;
    }

    /**
     * Get the next node in the tree from a node.
     *
     * This will not only check for siblings but instead move up the tree
     * returning the next ancestor if no sibling is found.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextNode',
    value: function getNextNode(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;

      for (var i = path.size; i > 0; i--) {
        var p = path.slice(0, i);
        var target = PathUtils.increment(p);
        var node = this.getNode(target);
        if (node) return node;
      }

      return null;
    }

    /**
     * Get the next node in the tree from a node that matches iterator
     *
     * This will not only check for siblings but instead move up the tree
     * returning the next ancestor if no sibling is found.
     *
     * @param {List} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextMatchingNodeAndPath',
    value: function getNextMatchingNodeAndPath(path) {
      var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return true;
      };

      if (!path) return null;

      for (var i = path.size; i > 0; i--) {
        var p = path.slice(0, i);

        var nextPath = PathUtils.increment(p);
        var nextNode = this.getNode(nextPath);

        while (nextNode && !iterator(nextNode)) {
          nextPath = PathUtils.increment(nextPath);
          nextNode = this.getNode(nextPath);
        }

        if (nextNode) return [nextNode, nextPath];
      }

      return null;
    }

    /**
     * Get the next, deepest node in the tree from a node that matches iterator
     *
     * This will not only check for siblings but instead move up the tree
     * returning the next ancestor if no sibling is found.
     *
     * @param {List} path
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getNextDeepMatchingNodeAndPath',
    value: function getNextDeepMatchingNodeAndPath(path) {
      var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return true;
      };

      var match = this.getNextMatchingNodeAndPath(path);

      if (!match) return null;

      var _match = slicedToArray(match, 2),
          nextNode = _match[0],
          nextPath = _match[1];

      var childMatch = void 0;

      var assign = function assign() {
        childMatch = nextNode.object !== 'text' && nextNode.findFirstDescendantAndPath(iterator, nextPath);
        return childMatch;
      };

      while (assign(childMatch)) {
        var _childMatch = childMatch;

        var _childMatch2 = slicedToArray(_childMatch, 2);

        nextNode = _childMatch2[0];
        nextPath = _childMatch2[1];
      }

      if (!nextNode) return null;

      return iterator(nextNode) ? [nextNode, nextPath] : this.getNextDeepMatchingNodeAndPath(match[1], iterator);
    }

    /**
     * Get the next sibling of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextSibling',
    value: function getNextSibling(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var p = PathUtils.increment(path);
      var sibling = this.getNode(p);
      return sibling;
    }

    /**
     * Get the text node after a descendant text node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextText',
    value: function getNextText(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var next = this.getNextNode(path);
      if (!next) return null;
      var text = next.getFirstText();
      return text;
    }
  }, {
    key: 'getNextTextAndPath',
    value: function getNextTextAndPath(path) {
      if (!path) return null;
      if (!path.size) return null;
      var match = this.getNextDeepMatchingNodeAndPath(path, function (n) {
        return n.object === 'text';
      });
      return match;
    }

    /**
     * Get all of the nodes in a `range`. This includes all of the
     * text nodes inside the range and all ancestors of those text
     * nodes up to this node.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getNodesAtRange',
    value: function getNodesAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return immutable.List();
      var _range6 = range,
          start = _range6.start,
          end = _range6.end;

      // Do a depth-first stack-based search for all nodes in the range
      // Nodes that are pushed to the stack are inside the range

      // Start with the nodes that are on the highest level in the tree

      var stack = immutable.Stack(this.nodes.slice(start.path.get(0), end.path.get(0) + 1).map(function (node, index$$1) {
        return {
          node: node,
          onStartEdge: index$$1 === 0,
          onEndEdge: index$$1 === end.path.get(0) - start.path.get(0),
          relativeStartPath: start.path.slice(1),
          relativeEndPath: end.path.slice(1)
        };
      }));

      var result = [];

      var _loop = function _loop() {
        var _stack$peek = stack.peek(),
            node = _stack$peek.node,
            onStartEdge = _stack$peek.onStartEdge,
            onEndEdge = _stack$peek.onEndEdge,
            relativeStartPath = _stack$peek.relativeStartPath,
            relativeEndPath = _stack$peek.relativeEndPath;

        stack = stack.shift();
        result.push(node);

        if (node.object === 'text') return 'continue';

        // Modify indexes to exclude children that are outside of the range
        var startIndex = onStartEdge ? relativeStartPath.get(0) : 0;
        var endIndex = onEndEdge ? relativeEndPath.get(0) : node.nodes.size - 1;

        // Push children that are inside the range to the stack
        stack = stack.pushAll(node.nodes.slice(startIndex, endIndex + 1).map(function (n, i) {
          return {
            node: n,
            onStartEdge: onStartEdge && i === 0,
            onEndEdge: onEndEdge && i === endIndex - startIndex,
            relativeStartPath: onStartEdge && i === 0 ? relativeStartPath.slice(1) : null,
            relativeEndPath: onEndEdge && i === endIndex - startIndex ? relativeEndPath.slice(1) : null
          };
        }));
      };

      while (stack.size > 0) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
      }

      return immutable.List(result);
    }

    /**
     * Get the offset for a descendant text node by `path` or `key`.
     *
     * @param {List|string} path
     * @return {Number}
     */

  }, {
    key: 'getOffset',
    value: function getOffset(path) {
      path = this.resolvePath(path);
      this.assertDescendant(path);

      // Calculate the offset of the nodes before the highest child.
      var index$$1 = path.first();

      var offset = this.nodes.slice(0, index$$1).reduce(function (memo, n) {
        return memo + n.text.length;
      }, 0);

      // Recurse if need be.
      var ret = path.size === 1 ? offset : offset + this.nodes.get(index$$1).getOffset(PathUtils.drop(path));
      return ret;
    }

    /**
     * Get the offset from a `range`.
     *
     * @param {Range} range
     * @return {Number}
     */

  }, {
    key: 'getOffsetAtRange',
    value: function getOffsetAtRange(range) {
      range = this.resolveRange(range);

      if (range.isUnset) {
        throw new Error('The range cannot be unset to calculcate its offset.');
      }

      if (range.isExpanded) {
        throw new Error('The range must be collapsed to calculcate its offset.');
      }

      var _range7 = range,
          start = _range7.start;

      var offset = this.getOffset(start.path) + start.offset;
      return offset;
    }

    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarks',
    value: function getOrderedMarks() {
      var array = this.getMarksAsArray();
      return immutable.OrderedSet(array);
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksAtRange',
    value: function getOrderedMarksAtRange(range) {
      range = this.resolveRange(range);
      var _range8 = range,
          start = _range8.start,
          end = _range8.end;


      if (range.isUnset) {
        return immutable.OrderedSet();
      }

      if (range.isCollapsed) {
        // PERF: range is not cachable, use path? and offset as proxies for cache
        return this.getMarksAtPosition(start.path, start.offset);
      }

      var marks = this.getOrderedMarksBetweenPositions(start.path, start.offset, end.path, end.offset);

      return marks;
    }

    /**
     * Get a set of the marks in a `range`.
     * PERF: arguments use key and offset for utilizing cache
     *
     * @param {List|string} startPath
     * @param {number} startOffset
     * @param {List|string} endPath
     * @param {number} endOffset
     * @returns {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksBetweenPositions',
    value: function getOrderedMarksBetweenPositions(startPath, startOffset, endPath, endOffset) {
      startPath = this.resolvePath(startPath);
      endPath = this.resolvePath(endPath);

      var startText = this.getDescendant(startPath);

      if (PathUtils.isEqual(startPath, endPath)) {
        return startText.getMarksBetweenOffsets(startOffset, endOffset);
      }

      var endText = this.getDescendant(endPath);

      var texts = this.getTextsBetweenPathPositionsAsArray(startPath, endPath);

      return immutable.OrderedSet().withMutations(function (result) {
        texts.forEach(function (text) {
          if (text.key === startText.key) {
            result.union(text.getMarksBetweenOffsets(startOffset, text.text.length));
          } else if (text.key === endText.key) {
            result.union(text.getMarksBetweenOffsets(0, endOffset));
          } else {
            result.union(text.getMarks());
          }
        });
      });
    }

    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksByType',
    value: function getOrderedMarksByType(type) {
      var array = this.getMarksByTypeAsArray(type);
      return immutable.OrderedSet(array);
    }

    /**
     * Get the parent of a descendant node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getParent',
    value: function getParent(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var parentPath = PathUtils.lift(path);
      var parent = this.getNode(parentPath);
      return parent;
    }

    /**
     * Get the block node before a descendant text node by `path`.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousBlock',
    value: function getPreviousBlock(path) {
      path = this.resolvePath(path);
      var match = this.getPreviousDeepMatchingNodeAndPath(path, function (n) {
        return n.object === 'block';
      });

      return match ? match[0] : null;
    }

    /**
     * Get the highest block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getRootBlocksAtRange',
    value: function getRootBlocksAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return immutable.List();

      var _range9 = range,
          start = _range9.start,
          end = _range9.end;


      return this.nodes.slice(start.path.first(), end.path.first() + 1);
    }

    /**
     * Get the top-most inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getRootInlinesAtRange',
    value: function getRootInlinesAtRange(range) {
      var array = this.getRootInlinesAtRangeAsArray(range);
      // Remove duplicates by converting it to an `OrderedSet` first.
      var list = immutable.List(immutable.OrderedSet(array));
      return list;
    }

    /**
     * Get the top-most inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getRootInlinesAtRangeAsArray',
    value: function getRootInlinesAtRangeAsArray(range) {
      var _this5 = this;

      range = this.resolveRange(range);
      if (range.isUnset) return immutable.List();

      var array = this.getTextsAtRangeAsArray(range).map(function (text) {
        return _this5.getFurthestInline(text.key);
      }).filter(function (exists) {
        return exists;
      });

      return array;
    }

    /**
     * Get the previous node from a node in the tree.
     *
     * This will not only check for siblings but instead move up the tree
     * returning the previous ancestor if no sibling is found.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousNode',
    value: function getPreviousNode(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;

      for (var i = path.size; i > 0; i--) {
        var p = path.slice(0, i);
        if (p.last() === 0) continue;

        var target = PathUtils.decrement(p);
        var node = this.getNode(target);
        if (node) return node;
      }

      return null;
    }

    /**
     * Get the previous node in the tree from a node that matches iterator
     *
     * This will not only check for siblings but instead move up the tree
     * returning the previous ancestor if no sibling is found.
     *
     * @param {List} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousMatchingNodeAndPath',
    value: function getPreviousMatchingNodeAndPath(path) {
      var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return true;
      };

      if (!path) return null;

      for (var i = path.size; i > 0; i--) {
        var p = path.slice(0, i);
        if (p.last() === 0) continue;

        var previousPath = PathUtils.decrement(p);
        var previousNode = this.getNode(previousPath);

        while (previousNode && !iterator(previousNode)) {
          previousPath = PathUtils.decrement(previousPath);
          previousNode = this.getNode(previousPath);
        }

        if (previousNode) return [previousNode, previousPath];
      }

      return null;
    }

    /**
     * Get the next previous in the tree from a node that matches iterator
     *
     * This will not only check for siblings but instead move up the tree
     * returning the previous ancestor if no sibling is found.
     * Once a node is found, the last deepest child matching is returned
     *
     * @param {List} path
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousDeepMatchingNodeAndPath',
    value: function getPreviousDeepMatchingNodeAndPath(path) {
      var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return true;
      };

      var match = this.getPreviousMatchingNodeAndPath(path);

      if (!match) return null;

      var _match2 = slicedToArray(match, 2),
          previousNode = _match2[0],
          previousPath = _match2[1];

      var childMatch = void 0;

      var assign = function assign() {
        childMatch = previousNode.object !== 'text' && previousNode.findLastDescendantAndPath(iterator, previousPath);
        return childMatch;
      };

      while (assign(childMatch)) {
        var _childMatch3 = childMatch;

        var _childMatch4 = slicedToArray(_childMatch3, 2);

        previousNode = _childMatch4[0];
        previousPath = _childMatch4[1];
      }

      if (!previousNode) return null;

      return iterator(previousNode) ? [previousNode, previousPath] : this.getPreviousDeepMatchingNodeAndPath(match[1], iterator);
    }

    /**
     * Get the previous sibling of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousSibling',
    value: function getPreviousSibling(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      if (path.last() === 0) return null;
      var p = PathUtils.decrement(path);
      var sibling = this.getNode(p);
      return sibling;
    }

    /**
     * Get the text node before a descendant text node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousText',
    value: function getPreviousText(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var previous = this.getPreviousNode(path);
      if (!previous) return null;
      var match = previous.getLastText();
      return match;
    }
  }, {
    key: 'getPreviousTextAndPath',
    value: function getPreviousTextAndPath(path) {
      if (!path) return null;
      if (!path.size) return null;
      var match = this.getPreviousDeepMatchingNodeAndPath(path, function (n) {
        return n.object === 'text';
      });
      return match;
    }

    /**
     * Get the indexes of the selection for a `range`, given an extra flag for
     * whether the node `isSelected`, to determine whether not finding matches
     * means everything is selected or nothing is.
     *
     * @param {Range} range
     * @param {Boolean} isSelected
     * @return {Object|Null}
     */

  }, {
    key: 'getSelectionIndexes',
    value: function getSelectionIndexes(range) {
      var isSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var start = range.start,
          end = range.end;

      // PERF: if we're not selected, we can exit early.

      if (!isSelected) {
        return null;
      }

      // if we've been given an invalid selection we can exit early.
      if (range.isUnset) {
        return null;
      }

      // PERF: if the start and end keys are the same, just check for the child
      // that contains that single key.
      if (start.key === end.key) {
        var child = this.getFurthestAncestor(start.key);
        var index$$1 = child ? this.nodes.indexOf(child) : null;
        return { start: index$$1, end: index$$1 + 1 };
      }

      // Otherwise, check all of the children...
      var startIndex = null;
      var endIndex = null;

      this.nodes.forEach(function (child, i) {
        if (child.object === 'text') {
          if (startIndex == null && child.key === start.key) startIndex = i;
          if (endIndex == null && child.key === end.key) endIndex = i + 1;
        } else {
          if (startIndex == null && child.hasDescendant(start.key)) startIndex = i;
          if (endIndex == null && child.hasDescendant(end.key)) endIndex = i + 1;
        }

        // PERF: exit early if both start and end have been found.
        return startIndex == null || endIndex == null;
      });

      if (isSelected && startIndex == null) startIndex = 0;
      if (isSelected && endIndex == null) endIndex = this.nodes.size;
      return startIndex == null ? null : { start: startIndex, end: endIndex };
    }

    /**
     * Get the descendent text node at an `offset`.
     *
     * @param {String} offset
     * @return {Node|Null}
     */

  }, {
    key: 'getTextAtOffset',
    value: function getTextAtOffset(offset) {
      // PERF: Add a few shortcuts for the obvious cases.
      if (offset === 0) return this.getFirstText();
      if (offset === this.text.length) return this.getLastText();
      if (offset < 0 || offset > this.text.length) return null;

      var length = 0;
      var text = this.getTexts().find(function (node, i, nodes) {
        length += node.text.length;
        return length > offset;
      });

      return text;
    }

    /**
     * Get the direction of the node's text.
     *
     * @return {String}
     */

  }, {
    key: 'getTextDirection',
    value: function getTextDirection() {
      var dir = direction_1(this.text);
      return dir === 'neutral' ? null : dir;
    }

    /**
     * Recursively get all of the child text nodes in order of appearance.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getTexts',
    value: function getTexts() {
      var array = this.getTextsAsArray();
      return immutable.List(array);
    }

    /**
     * Recursively get all the leaf text nodes in order of appearance, as array.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getTextsAsArray',
    value: function getTextsAsArray() {
      var array = [];

      this.nodes.forEach(function (node) {
        if (node.object === 'text') {
          array.push(node);
        } else {
          array = array.concat(node.getTextsAsArray());
        }
      });

      return array;
    }

    /**
     * Get all of the text nodes in a `range` as a List.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getTextsAtRange',
    value: function getTextsAtRange(range) {
      var arr = this.getTextsAtRangeAsArray(range);
      return immutable.List(arr);
    }

    /**
     * Get all of the text nodes in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array<Node>}
     */

  }, {
    key: 'getTextsAtRangeAsArray',
    value: function getTextsAtRangeAsArray(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return [];
      var _range10 = range,
          start = _range10.start,
          end = _range10.end;

      var texts = this.getTextsBetweenPathPositionsAsArray(start.path, end.path);
      return texts;
    }

    /**
     * Get all of the text nodes in a `range` as an array.
     * PERF: use key / path in arguments for cache
     *
     * @param {List|string} startPath
     * @param {List|string} endPath
     * @returns {Array}
     */

  }, {
    key: 'getTextsBetweenPositionsAsArray',
    value: function getTextsBetweenPositionsAsArray(startPath, endPath) {
      startPath = this.resolvePath(startPath);
      endPath = this.resolvePath(endPath);

      return this.getTextsBetweenPathPositionsAsArray(startPath, endPath);
    }

    /**
     * Get all of the text nodes in a `range` as an array.
     *
     * @param {List|falsey} startPath
     * @param {List|falsey} endPath
     * @returns {Array}
     */

  }, {
    key: 'getTextsBetweenPathPositionsAsArray',
    value: function getTextsBetweenPathPositionsAsArray(startPath, endPath) {
      // PERF: the most common case is when the range is in a single text node,
      // where we can avoid a lot of iterating of the tree.
      if (startPath && endPath && PathUtils.isEqual(startPath, endPath)) {
        return [this.getDescendant(startPath)];
      } else if (!startPath && !endPath) {
        return this.getTextsAsArray();
      }

      var startIndex = startPath ? startPath.get(0, 0) : 0;
      var endIndex = endPath ? endPath.get(0, this.nodes.size - 1) : this.nodes.size - 1;

      var array = [];

      this.nodes.slice(startIndex, endIndex + 1).forEach(function (node, i) {
        if (node.object === 'text') {
          array.push(node);
        } else {
          // For the node at start and end of this list, we want to provide a start and end path
          // For other nodes, we can just get all their text nodes, they are between the paths
          var childStartPath = startPath && i === 0 ? PathUtils.drop(startPath) : null;
          var childEndPath = endPath && i === endIndex - startIndex ? PathUtils.drop(endPath) : null;

          array = array.concat(node.getTextsBetweenPathPositionsAsArray(childStartPath, childEndPath));
        }
      });

      return array;
    }

    /**
     * Check if the node has block children.
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasBlockChildren',
    value: function hasBlockChildren() {
      return !!(this.nodes && this.nodes.find(function (n) {
        return n.object === 'block';
      }));
    }

    /**
     * Check if a child node exists.
     *
     * @param {List|String} path
     * @return {Boolean}
     */

  }, {
    key: 'hasChild',
    value: function hasChild(path) {
      var child = this.getChild(path);
      return !!child;
    }

    /**
     * Check if a node has inline children.
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasInlineChildren',
    value: function hasInlineChildren() {
      return !!(this.nodes && this.nodes.find(function (n) {
        return n.object === 'inline' || n.object === 'text';
      }));
    }

    /**
     * Recursively check if a child node exists.
     *
     * @param {List|String} path
     * @return {Boolean}
     */

  }, {
    key: 'hasDescendant',
    value: function hasDescendant(path) {
      var descendant = this.getDescendant(path);
      return !!descendant;
    }

    /**
     * Check if a node has a void parent.
     *
     * @param {List|String} path
     * @param {Editor} editor
     * @return {Boolean}
     */

  }, {
    key: 'hasVoidParent',
    value: function hasVoidParent(path, editor) {
      index$1(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.hasVoidParent` method takes an `editor` instead of a `value`.');

      var closest = this.getClosestVoid(path, editor);
      return !!closest;
    }

    /**
     * Insert a `node`.
     *
     * @param {List|String} path
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: 'insertNode',
    value: function insertNode(path, node) {
      path = this.resolvePath(path);
      var index$$1 = path.last();
      var parentPath = PathUtils.lift(path);
      var parent = this.assertNode(parentPath);
      var nodes = parent.nodes.splice(index$$1, 0, node);
      parent = parent.set('nodes', nodes);
      var ret = this.replaceNode(parentPath, parent);
      return ret;
    }

    /**
     * Insert `text` at `offset` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {String} text
     * @param {Set} marks
     * @return {Node}
     */

  }, {
    key: 'insertText',
    value: function insertText(path, offset, text, marks) {
      var node = this.assertDescendant(path);
      path = this.resolvePath(path);
      node = node.insertText(offset, text, marks);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Check whether the node is a leaf block.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLeafBlock',
    value: function isLeafBlock() {
      var object = this.object,
          nodes = this.nodes;

      if (object !== 'block') return false;
      if (!nodes.size) return true;

      return nodes.first().object !== 'block';
    }

    /**
     * Check whether the node is a leaf inline.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLeafInline',
    value: function isLeafInline() {
      var object = this.object,
          nodes = this.nodes;

      if (object !== 'inline') return false;
      if (!nodes.size) return true;

      return nodes.first().object !== 'inline';
    }

    /**
     * Check whether a descendant node is inside a range. This will return true for all
     * text nodes inside the range and all ancestors of those text nodes up to this node.
     *
     * @param {List|string} path
     * @param {Range} range
     * @return {Node}
     */

  }, {
    key: 'isNodeInRange',
    value: function isNodeInRange(path, range) {
      this.assertDescendant(path);
      path = this.resolvePath(path);
      range = this.resolveRange(range);
      if (range.isUnset) return false;

      var toStart = PathUtils.compare(path, range.start.path);
      var toEnd = range.start.key === range.end.key ? toStart : PathUtils.compare(path, range.end.path);

      var is = toStart !== -1 && toEnd !== 1;
      return is;
    }

    /**
     * Map all child nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */

  }, {
    key: 'mapChildren',
    value: function mapChildren(iterator) {
      var _this6 = this;

      var nodes = this.nodes;


      nodes.forEach(function (node, i) {
        var ret = iterator(node, i, _this6.nodes);
        if (ret !== node) nodes = nodes.set(ret.key, ret);
      });

      var ret = this.set('nodes', nodes);
      return ret;
    }

    /**
     * Map all descendant nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */

  }, {
    key: 'mapDescendants',
    value: function mapDescendants(iterator) {
      var _this7 = this;

      var nodes = this.nodes;


      nodes.forEach(function (node, index$$1) {
        var ret = node;
        if (ret.object !== 'text') ret = ret.mapDescendants(iterator);
        ret = iterator(ret, index$$1, _this7.nodes);
        if (ret === node) return;

        nodes = nodes.set(index$$1, ret);
      });

      var ret = this.set('nodes', nodes);
      return ret;
    }

    /**
     * Merge a node backwards its previous sibling.
     *
     * @param {List|Key} path
     * @return {Node}
     */

  }, {
    key: 'mergeNode',
    value: function mergeNode(path) {
      var b = this.assertNode(path);
      path = this.resolvePath(path);

      if (path.last() === 0) {
        throw new Error('Unable to merge node because it has no previous sibling: ' + b);
      }

      var withPath = PathUtils.decrement(path);
      var a = this.assertNode(withPath);

      if (a.object !== b.object) {
        throw new Error('Unable to merge two different kinds of nodes: ' + a + ' and ' + b);
      }

      var newNode = a.object === 'text' ? a.mergeText(b) : a.set('nodes', a.nodes.concat(b.nodes));

      var ret = this;
      ret = ret.removeNode(path);
      ret = ret.removeNode(withPath);
      ret = ret.insertNode(withPath, newNode);
      return ret;
    }

    /**
     * Move a node by `path` to `newPath`.
     *
     * A `newIndex` can be provided when move nodes by `key`, to account for not
     * being able to have a key for a location in the tree that doesn't exist yet.
     *
     * @param {List|Key} path
     * @param {List|Key} newPath
     * @param {Number} newIndex
     * @return {Node}
     */

  }, {
    key: 'moveNode',
    value: function moveNode(path, newPath) {
      var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var node = this.assertNode(path);
      path = this.resolvePath(path);
      newPath = this.resolvePath(newPath, newIndex);

      var newParentPath = PathUtils.lift(newPath);
      this.assertNode(newParentPath);

      // TODO: this is a bit hacky, re-creating the operation that led to this method being called
      // Alternative 1: pass the operation through from apply -> value.moveNode
      // Alternative 2: add a third property to the operation called "transformedNewPath", pass that through
      var op = Operation.create({
        type: 'move_node',
        path: path,
        newPath: newPath
      });
      newPath = PathUtils.transform(path, op).first();

      var ret = this;
      ret = ret.removeNode(path);
      ret = ret.insertNode(newPath, node);
      return ret;
    }

    /**
     * Remove mark from text at `offset` and `length` in node.
     *
     * @param {List} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Node}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(path, offset, length, mark) {
      var node = this.assertDescendant(path);
      path = this.resolvePath(path);
      node = node.removeMark(offset, length, mark);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Remove a node.
     *
     * @param {List|String} path
     * @return {Node}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(path) {
      this.assertDescendant(path);
      path = this.resolvePath(path);
      var deep = path.flatMap(function (x) {
        return ['nodes', x];
      });
      var ret = this.deleteIn(deep);
      return ret;
    }

    /**
     * Remove `text` at `offset` in node.
     *
     * @param {List|Key} path
     * @param {Number} offset
     * @param {String} text
     * @return {Node}
     */

  }, {
    key: 'removeText',
    value: function removeText(path, offset, text) {
      var node = this.assertDescendant(path);
      node = node.removeText(offset, text.length);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Replace a `node` in the tree.
     *
     * @param {List|Key} path
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: 'replaceNode',
    value: function replaceNode(path, node) {
      path = this.resolvePath(path);

      if (!path) {
        throw new Error('Unable to replace a node because it could not be found in the first place: ' + path);
      }

      if (!path.size) return node;
      this.assertNode(path);
      var deep = path.flatMap(function (x) {
        return ['nodes', x];
      });
      var ret = this.setIn(deep, node);
      return ret;
    }

    /**
     * Resolve a `decoration`, relative to the node, ensuring that the keys and
     * offsets in the decoration exist and that they are synced with the paths.
     *
     * @param {Decoration|Object} decoration
     * @return {Decoration}
     */

  }, {
    key: 'resolveDecoration',
    value: function resolveDecoration(decoration) {
      decoration = Decoration.create(decoration);
      decoration = decoration.normalize(this);
      return decoration;
    }

    /**
     * Resolve a `point`, relative to the node, ensuring that the keys and
     * offsets in the point exist and that they are synced with the paths.
     *
     * @param {Point|Object} point
     * @return {Point}
     */

  }, {
    key: 'resolvePoint',
    value: function resolvePoint(point) {
      point = Point.create(point);
      point = point.normalize(this);
      return point;
    }

    /**
     * Resolve a `range`, relative to the node, ensuring that the keys and
     * offsets in the range exist and that they are synced with the paths.
     *
     * @param {Range|Object} range
     * @return {Range}
     */

  }, {
    key: 'resolveRange',
    value: function resolveRange(range) {
      range = Range.create(range);
      range = range.normalize(this);
      return range;
    }

    /**
     * Resolve a `selection`, relative to the node, ensuring that the keys and
     * offsets in the selection exist and that they are synced with the paths.
     *
     * @param {Selection|Object} selection
     * @return {Selection}
     */

  }, {
    key: 'resolveSelection',
    value: function resolveSelection(selection) {
      selection = Selection.create(selection);
      selection = selection.normalize(this);
      return selection;
    }

    /**
     * Set `properties` on a node.
     *
     * @param {List|String} path
     * @param {Object} properties
     * @return {Node}
     */

  }, {
    key: 'setNode',
    value: function setNode(path, properties) {
      var node = this.assertNode(path);
      node = node.merge(properties);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Set `properties` on `mark` on text at `offset` and `length` in node.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Node}
     */

  }, {
    key: 'setMark',
    value: function setMark(path, offset, length, properties, newProperties) {
      var node = this.assertNode(path);
      node = node.updateMark(offset, length, properties, newProperties);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Split a node by `path` at `position` with optional `properties` to apply
     * to the newly split node.
     *
     * @param {List|String} path
     * @param {Number} position
     * @param {Object} properties
     * @return {Node}
     */

  }, {
    key: 'splitNode',
    value: function splitNode(path, position, properties) {
      var child = this.assertNode(path);
      path = this.resolvePath(path);
      var a = void 0;
      var b = void 0;

      if (child.object === 'text') {
        
        var _child$splitText = child.splitText(position);

        var _child$splitText2 = slicedToArray(_child$splitText, 2);

        a = _child$splitText2[0];
        b = _child$splitText2[1];
      } else {
        var befores = child.nodes.take(position);
        var afters = child.nodes.skip(position);
        a = child.set('nodes', befores);
        b = child.set('nodes', afters).regenerateKey();
      }

      if (properties && child.object !== 'text') {
        b = b.merge(properties);
      }

      var ret = this;
      ret = ret.removeNode(path);
      ret = ret.insertNode(path, b);
      ret = ret.insertNode(path, a);
      return ret;
    }
  }]);
  return ElementInterface;
}();

/**
 * Mix in assertion variants.
 */

var ASSERTS = ['Child', 'Depth', 'Descendant', 'Node', 'Parent', 'Path'];

var _loop2 = function _loop2(method) {
  ElementInterface.prototype['assert' + method] = function (path) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var ret = this['get' + method].apply(this, [path].concat(args));

    if (ret == null) {
      throw new Error('`Node.assert' + method + '` could not find node with path or key: ' + path);
    }

    return ret;
  };
};

var _iteratorNormalCompletion$1 = true;
var _didIteratorError$1 = false;
var _iteratorError$1 = undefined;

try {
  for (var _iterator$1 = ASSERTS[Symbol.iterator](), _step$1; !(_iteratorNormalCompletion$1 = (_step$1 = _iterator$1.next()).done); _iteratorNormalCompletion$1 = true) {
    var method$1 = _step$1.value;

    _loop2(method$1);
  }

  /**
   * Memoize read methods.
   */
} catch (err) {
  _didIteratorError$1 = true;
  _iteratorError$1 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion$1 && _iterator$1.return) {
      _iterator$1.return();
    }
  } finally {
    if (_didIteratorError$1) {
      throw _iteratorError$1;
    }
  }
}

memoize(ElementInterface.prototype, ['getBlocksAsArray', 'getLeafBlocksAtRangeAsArray', 'getBlocksByTypeAsArray', 'getDecorations', 'getFragmentAtRange', 'getInlinesAsArray', 'getInlinesByTypeAsArray', 'getLeafBlocksAtRangeAsArray', 'getLeafInlinesAtRangeAsArray', 'getMarksAsArray', 'getMarksAtPosition', 'getNodesAtRange', 'getOrderedMarksBetweenPositions', 'getInsertMarksAtRange', 'getMarksByTypeAsArray', 'getNextBlock', 'getOffset', 'getOffsetAtRange', 'getPreviousBlock', 'getRootBlocksAtRange', 'getRootInlinesAtRangeAsArray', 'getTextAtOffset', 'getTextDirection', 'getTextsAsArray', 'getTextsBetweenPathPositionsAsArray']);

/**
 * Mix in the element interface.
 */

mixin(ElementInterface, [Block, Document, Inline]);

/**
 * The interface that `Decoration`, `Range` and `Selection` all implement, to make
 * working anchor and focus points easier.
 *
 * @type {Class}
 */

var RangeInterface = function () {
  function RangeInterface() {
    classCallCheck(this, RangeInterface);
  }

  createClass(RangeInterface, [{
    key: 'flip',


    /**
     * Flip the range.
     *
     * @return {Range}
     */

    value: function flip() {
      var range = this.setPoints([this.focus, this.anchor]);
      return range;
    }

    /**
     * Move the anchor and focus offsets forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveForward',
    value: function moveForward(n) {
      return this.updatePoints(function (point) {
        return point.moveForward(n);
      });
    }

    /**
     * Move the anchor and focus offsets backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveBackward',
    value: function moveBackward(n) {
      return this.updatePoints(function (point) {
        return point.moveBackward(n);
      });
    }

    /**
     * Move the anchor offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveAnchorBackward',
    value: function moveAnchorBackward(n) {
      var range = this.setAnchor(this.anchor.moveBackward(n));
      return range;
    }

    /**
     * Move the anchor offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveAnchorForward',
    value: function moveAnchorForward(n) {
      var range = this.setAnchor(this.anchor.moveForward(n));
      return range;
    }

    /**
     * Move the range's anchor point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveAnchorTo',
    value: function moveAnchorTo(path, offset) {
      var range = this.setAnchor(this.anchor.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's anchor point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveAnchorToStartOfNode',
    value: function moveAnchorToStartOfNode(node) {
      var range = this.setAnchor(this.anchor.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's anchor point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveAnchorToEndOfNode',
    value: function moveAnchorToEndOfNode(node) {
      var range = this.setAnchor(this.anchor.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move the end offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveEndBackward',
    value: function moveEndBackward(n) {
      var range = this.setEnd(this.end.moveBackward(n));
      return range;
    }

    /**
     * Move the end offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveEndForward',
    value: function moveEndForward(n) {
      var range = this.setEnd(this.end.moveForward(n));
      return range;
    }

    /**
     * Move the range's end point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveEndTo',
    value: function moveEndTo(path, offset) {
      var range = this.setEnd(this.end.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's end point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveEndToStartOfNode',
    value: function moveEndToStartOfNode(node) {
      var range = this.setEnd(this.end.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's end point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveEndToEndOfNode',
    value: function moveEndToEndOfNode(node) {
      var range = this.setEnd(this.end.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move the focus offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveFocusBackward',
    value: function moveFocusBackward(n) {
      var range = this.setFocus(this.focus.moveBackward(n));
      return range;
    }

    /**
     * Move the focus offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveFocusForward',
    value: function moveFocusForward(n) {
      var range = this.setFocus(this.focus.moveForward(n));
      return range;
    }

    /**
     * Move the range's focus point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveFocusTo',
    value: function moveFocusTo(path, offset) {
      var range = this.setFocus(this.focus.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's focus point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveFocusToStartOfNode',
    value: function moveFocusToStartOfNode(node) {
      var range = this.setFocus(this.focus.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's focus point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveFocusToEndOfNode',
    value: function moveFocusToEndOfNode(node) {
      var range = this.setFocus(this.focus.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move the start offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveStartBackward',
    value: function moveStartBackward(n) {
      var range = this.setStart(this.start.moveBackward(n));
      return range;
    }

    /**
     * Move the start offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveStartForward',
    value: function moveStartForward(n) {
      var range = this.setStart(this.start.moveForward(n));
      return range;
    }

    /**
     * Move the range's start point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveStartTo',
    value: function moveStartTo(path, offset) {
      var range = this.setStart(this.start.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's start point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveStartToStartOfNode',
    value: function moveStartToStartOfNode(node) {
      var range = this.setStart(this.start.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's start point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveStartToEndOfNode',
    value: function moveStartToEndOfNode(node) {
      var range = this.setStart(this.start.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move range's points to a new `path` and `offset`.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveTo',
    value: function moveTo(path, offset) {
      return this.updatePoints(function (point) {
        return point.moveTo(path, offset);
      });
    }

    /**
     * Move the focus point to the anchor point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToAnchor',
    value: function moveToAnchor() {
      var range = this.setFocus(this.anchor);
      return range;
    }

    /**
     * Move the start point to the end point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToEnd',
    value: function moveToEnd() {
      var range = this.setStart(this.end);
      return range;
    }

    /**
     * Move the range's points to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveToEndOfNode',
    value: function moveToEndOfNode(node) {
      return this.updatePoints(function (point) {
        return point.moveToEndOfNode(node);
      });
    }

    /**
     * Move the anchor point to the focus point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToFocus',
    value: function moveToFocus() {
      var range = this.setAnchor(this.focus);
      return range;
    }

    /**
     * Move to the entire range of `start` and `end` nodes.
     *
     * @param {Node} start
     * @param {Node} end (optional)
     * @return {Range}
     */

  }, {
    key: 'moveToRangeOfNode',
    value: function moveToRangeOfNode(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;

      var range = this.setPoints([this.anchor.moveToStartOfNode(start), this.focus.moveToEndOfNode(end)]);

      return range;
    }

    /**
     * Move the end point to the start point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToStart',
    value: function moveToStart() {
      var range = this.setEnd(this.start);
      return range;
    }

    /**
     * Move the range's points to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveToStartOfNode',
    value: function moveToStartOfNode(node) {
      return this.updatePoints(function (point) {
        return point.moveToStartOfNode(node);
      });
    }

    /**
     * Normalize the range, relative to a `node`, ensuring that the anchor
     * and focus nodes of the range always refer to leaf text nodes.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'normalize',
    value: function normalize(node) {
      return this.updatePoints(function (point) {
        return point.normalize(node);
      });
    }

    /**
     * Set the anchor point to a new `anchor`.
     *
     * @param {Point} anchor
     * @return {Range}
     */

  }, {
    key: 'setAnchor',
    value: function setAnchor(anchor) {
      var range = this.set('anchor', anchor);
      return range;
    }

    /**
     * Set the end point to a new `point`.
     *
     * @param {Point} point
     * @return {Range}
     */

  }, {
    key: 'setEnd',
    value: function setEnd(point) {
      var range = this.isBackward ? this.setAnchor(point) : this.setFocus(point);
      return range;
    }

    /**
     * Set the focus point to a new `focus`.
     *
     * @param {Point} focus
     * @return {Range}
     */

  }, {
    key: 'setFocus',
    value: function setFocus(focus) {
      var range = this.set('focus', focus);
      return range;
    }

    /**
     * Set the anchor and focus points to new `values`.
     *
     * @param {Array<Point>} values
     * @return {Range}
     */

  }, {
    key: 'setPoints',
    value: function setPoints(values) {
      var _values = slicedToArray(values, 2),
          anchor = _values[0],
          focus = _values[1];

      var range = this.set('anchor', anchor).set('focus', focus);
      return range;
    }

    /**
     * Set the anchor and focus points with `updater` callback
     *
     * @param {Function} updater
     * @return {Range}
     */

  }, {
    key: 'updatePoints',
    value: function updatePoints(updater) {
      var anchor = this.anchor,
          focus = this.focus;

      anchor = updater(anchor);
      focus = updater(focus);
      return this.merge({ anchor: anchor, focus: focus });
    }

    /**
     * Set the start point to a new `point`.
     *
     * @param {Point} point
     * @return {Range}
     */

  }, {
    key: 'setStart',
    value: function setStart(point) {
      var range = this.isBackward ? this.setFocus(point) : this.setAnchor(point);
      return range;
    }

    /**
     * Set new `properties` on the range.
     *
     * @param {Object|Range} properties
     * @return {Range}
     */

  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      properties = Range.createProperties(properties);
      var _properties = properties,
          anchor = _properties.anchor,
          focus = _properties.focus,
          props = objectWithoutProperties(_properties, ['anchor', 'focus']);


      if (anchor) {
        props.anchor = Point.create(anchor);
      }

      if (focus) {
        props.focus = Point.create(focus);
      }

      var range = this.merge(props);
      return range;
    }

    /**
     * Return a JSON representation of the range.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options)
      };

      return object;
    }

    /**
     * Return a `Range` instance from any range-like instance.
     *
     * @return {Range}
     */

  }, {
    key: 'toRange',
    value: function toRange() {
      var properties = Range.createProperties(this);
      var range = Range.create(properties);
      return range;
    }

    /**
     * Unset the range.
     *
     * @return {Range}
     */

  }, {
    key: 'unset',
    value: function unset() {
      var range = this.updatePoints(function (p) {
        return p.unset();
      });
      return range;
    }
  }, {
    key: 'isCollapsed',

    /**
     * Check whether the range is collapsed.
     *
     * @return {Boolean}
     */

    get: function get$$1() {
      return this.anchor === this.focus || this.anchor.key === this.focus.key && this.anchor.offset === this.focus.offset;
    }

    /**
     * Check whether the range is expanded.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isExpanded',
    get: function get$$1() {
      return !this.isCollapsed;
    }

    /**
     * Check whether the range is backward.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBackward',
    get: function get$$1() {
      var isUnset = this.isUnset,
          anchor = this.anchor,
          focus = this.focus;


      if (isUnset) {
        return null;
      }

      if (anchor.key === focus.key) {
        return anchor.offset > focus.offset;
      }

      var isBackward = PathUtils.isBefore(focus.path, anchor.path);
      return isBackward;
    }

    /**
     * Check whether the range is forward.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isForward',
    get: function get$$1() {
      var isBackward = this.isBackward;

      var isForward = isBackward == null ? null : !isBackward;
      return isForward;
    }

    /**
     * Check whether the range isn't set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isUnset',
    get: function get$$1() {
      var anchor = this.anchor,
          focus = this.focus;

      var isUnset = anchor.isUnset || focus.isUnset;
      return isUnset;
    }

    /**
     * Check whether the range is set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isSet',
    get: function get$$1() {
      return !this.isUnset;
    }

    /**
     * Get the start point.
     *
     * @return {String}
     */

  }, {
    key: 'start',
    get: function get$$1() {
      return this.isBackward ? this.focus : this.anchor;
    }

    /**
     * Get the end point.
     *
     * @return {String}
     */

  }, {
    key: 'end',
    get: function get$$1() {
      return this.isBackward ? this.anchor : this.focus;
    }
  }]);
  return RangeInterface;
}();

/**
 * Mix in the range interface.
 *
 * @param {Record}
 */

mixin(RangeInterface, [Decoration, Range, Selection]);

var index$2 = {
  Block: Block,
  Change: Change,
  Data: Data,
  Decoration: Decoration,
  Document: Document,
  Editor: Editor,
  Inline: Inline,
  KeyUtils: KeyUtils,
  Leaf: Leaf,
  Mark: Mark,
  Node: Node,
  Operation: Operation,
  PathUtils: PathUtils,
  Point: Point,
  Range: Range,
  resetMemoization: resetMemoization,
  Selection: Selection,
  Text: Text,
  TextUtils: TextUtils,
  useMemoization: useMemoization,
  Value: Value
};

exports.Block = Block;
exports.Change = Change;
exports.Data = Data;
exports.Decoration = Decoration;
exports.Document = Document;
exports.Editor = Editor;
exports.Inline = Inline;
exports.KeyUtils = KeyUtils;
exports.Leaf = Leaf;
exports.Mark = Mark;
exports.Node = Node;
exports.Operation = Operation;
exports.PathUtils = PathUtils;
exports.Point = Point;
exports.Range = Range;
exports.resetMemoization = resetMemoization;
exports.Selection = Selection;
exports.Text = Text;
exports.TextUtils = TextUtils;
exports.useMemoization = useMemoization;
exports.Value = Value;
exports.default = index$2;

Object.defineProperty(exports, '__esModule', { value: true });

})));
