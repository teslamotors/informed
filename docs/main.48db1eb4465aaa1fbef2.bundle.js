/*! For license information please see main.48db1eb4465aaa1fbef2.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Form', function() {
          return components_Form;
        }),
        __webpack_require__.d(__webpack_exports__, 'FormProvider', function() {
          return components_FormProvider;
        }),
        __webpack_require__.d(__webpack_exports__, 'withFormApi', function() {
          return HOC_withFormApi;
        }),
        __webpack_require__.d(__webpack_exports__, 'withFormState', function() {
          return HOC_withFormState;
        }),
        __webpack_require__.d(__webpack_exports__, 'withFieldApi', function() {
          return HOC_withFieldApi;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'withFieldState',
          function() {
            return HOC_withFieldState;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'withRadioGroup',
          function() {
            return HOC_withRadioGroup;
          }
        ),
        __webpack_require__.d(__webpack_exports__, 'asField', function() {
          return HOC_asField;
        }),
        __webpack_require__.d(__webpack_exports__, 'useForm', function() {
          return hooks_useForm;
        }),
        __webpack_require__.d(__webpack_exports__, 'useField', function() {
          return hooks_useField;
        }),
        __webpack_require__.d(__webpack_exports__, 'useFieldApi', function() {
          return hooks_useFieldApi;
        }),
        __webpack_require__.d(__webpack_exports__, 'useFieldState', function() {
          return hooks_useFieldState;
        }),
        __webpack_require__.d(__webpack_exports__, 'useFormApi', function() {
          return hooks_useFormApi;
        }),
        __webpack_require__.d(__webpack_exports__, 'useFormState', function() {
          return useFormState.a;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'useMultistepState',
          function() {
            return hooks_useMultistepState;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'useMultistepApi',
          function() {
            return hooks_useMultistepApi;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'useArrayFieldApi',
          function() {
            return hooks_useArrayFieldApi;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'useArrayFieldItemApi',
          function() {
            return hooks_useArrayFieldItemApi;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'useCursorPosition',
          function() {
            return hooks_useCursorPosition;
          }
        ),
        __webpack_require__.d(__webpack_exports__, 'Text', function() {
          return form_fields_Text;
        }),
        __webpack_require__.d(__webpack_exports__, 'Input', function() {
          return Input;
        }),
        __webpack_require__.d(__webpack_exports__, 'Radio', function() {
          return form_fields_Radio;
        }),
        __webpack_require__.d(__webpack_exports__, 'TextArea', function() {
          return form_fields_TextArea;
        }),
        __webpack_require__.d(__webpack_exports__, 'Select', function() {
          return form_fields_Select;
        }),
        __webpack_require__.d(__webpack_exports__, 'Option', function() {
          return form_fields_Option;
        }),
        __webpack_require__.d(__webpack_exports__, 'Checkbox', function() {
          return form_fields_Checkbox;
        }),
        __webpack_require__.d(__webpack_exports__, 'RadioGroup', function() {
          return form_fields_RadioGroup;
        }),
        __webpack_require__.d(__webpack_exports__, 'BasicText', function() {
          return Text_Text;
        }),
        __webpack_require__.d(__webpack_exports__, 'BasicRadio', function() {
          return Radio_Radio;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'BasicRadioGroup',
          function() {
            return RadioGroup_RadioGroup;
          }
        ),
        __webpack_require__.d(__webpack_exports__, 'BasicTextArea', function() {
          return TextArea_TextArea;
        }),
        __webpack_require__.d(__webpack_exports__, 'BasicSelect', function() {
          return Select_Select;
        }),
        __webpack_require__.d(__webpack_exports__, 'BasicCheckbox', function() {
          return Checkbox_Checkbox;
        }),
        __webpack_require__.d(__webpack_exports__, 'Scope', function() {
          return components_Scope;
        }),
        __webpack_require__.d(__webpack_exports__, 'ArrayField', function() {
          return components_ArrayField;
        }),
        __webpack_require__.d(__webpack_exports__, 'useArrayField', function() {
          return hooks_useArrayField;
        }),
        __webpack_require__.d(__webpack_exports__, 'FormState', function() {
          return FormState.a;
        }),
        __webpack_require__.d(__webpack_exports__, 'Relevant', function() {
          return components_Relevant;
        }),
        __webpack_require__.d(__webpack_exports__, 'Multistep', function() {
          return Multistep;
        }),
        __webpack_require__.d(__webpack_exports__, 'FormField', function() {
          return components_FormField;
        }),
        __webpack_require__.d(__webpack_exports__, 'SchemaFields', function() {
          return components_SchemaFields;
        }),
        __webpack_require__.d(__webpack_exports__, 'FormFields', function() {
          return components_FormFields;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'FormComponents',
          function() {
            return components_FormComponents;
          }
        ),
        __webpack_require__.d(__webpack_exports__, 'utils', function() {
          return utils_namespaceObject;
        });
      var utils_namespaceObject = {};
      __webpack_require__.r(utils_namespaceObject),
        __webpack_require__.d(
          utils_namespaceObject,
          'getChildDisplayName',
          function() {
            return getChildDisplayName;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'yupToFormErrors',
          function() {
            return utils_yupToFormErrors;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'validateYupSchema',
          function() {
            return validateYupSchema;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'yupToFormError',
          function() {
            return yupToFormError;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'validateYupField',
          function() {
            return validateYupField;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'validateAjvSchema',
          function() {
            return utils_validateAjvSchema;
          }
        ),
        __webpack_require__.d(utils_namespaceObject, 'uuidv4', function() {
          return uuidv4;
        }),
        __webpack_require__.d(utils_namespaceObject, 'debounce', function() {
          return debounce;
        }),
        __webpack_require__.d(
          utils_namespaceObject,
          'computeFieldFromProperty',
          function() {
            return computeFieldFromProperty;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'computeFieldsFromSchema',
          function() {
            return computeFieldsFromSchema;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'getSchemaPathFromJsonPath',
          function() {
            return getSchemaPathFromJsonPath;
          }
        ),
        __webpack_require__.d(
          utils_namespaceObject,
          'informedFormat',
          function() {
            return informedFormat;
          }
        );
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src_debug = __webpack_require__(25),
        debug_default = __webpack_require__.n(src_debug);
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      var ObjectMap_debug = debug_default()('informed:ObjMap\t'),
        ldtoPath = function ldtoPath() {
          var path =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          return String.prototype.replace
            .call(path, /\['(.+?)'\]/g, '.$1')
            .split(/[,[\].]+?/)
            .filter(Boolean);
        },
        ldget = function ldget(obj) {
          var path =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            defaultValue = arguments.length > 2 ? arguments[2] : void 0,
            result = String.prototype.replace
              .call(path, /\['(.+?)'\]/g, '.$1')
              .split(/[,[\].]+?/)
              .filter(Boolean)
              .reduce(function(res, key) {
                return null != res ? res[key] : res;
              }, obj);
          return void 0 === result || result === obj ? defaultValue : result;
        },
        parentPath = function parentPath(path) {
          return '.'
            .concat(path)
            .replace(/(.*)[.[].*/, '$1')
            .replace(/\./, '');
        },
        ldhas = function ldhas(obj, path) {
          var pPath = parentPath(path),
            key = (function pathKey(path) {
              return path.replace(parentPath(path), '').replace(/\./, '');
            })(path),
            parentObj = pPath ? get(obj, pPath) : obj;
          return !(
            !parentObj ||
            !Object.hasOwnProperty.call(
              parentObj,
              key.replace(/\[(.*)\]/, '$1')
            )
          );
        },
        ldset = function ldset(obj) {
          var path =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            val = arguments.length > 2 ? arguments[2] : void 0;
          String.prototype.replace
            .call(path, /\['(.+?)'\]/g, '.$1')
            .split(/[,[\].]+?/)
            .filter(Boolean)
            .reduce(function(res, key, i, arr) {
              return i === arr.length - 1
                ? ((res[key] = val), res[key])
                : void 0 === res[key]
                  ? (Number.isInteger(+arr[i + 1])
                      ? (res[key] = [])
                      : (res[key] = {}),
                    res[key])
                  : (Number.isInteger(+arr[i + 1]) &&
                      !Array.isArray(res[key]) &&
                      (res[key] = []),
                    res[key]);
            }, obj);
        },
        ldunset = function ldunset(obj) {
          var path =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            found = !1;
          return (
            String.prototype.replace
              .call(path, /\['(.+?)'\]/g, '.$1')
              .split(/[,[\].]+?/)
              .filter(Boolean)
              .reduce(function(res, key, i, arr) {
                return void 0 === res
                  ? res
                  : i === arr.length - 1
                    ? (delete res[key], (found = !0), res[key])
                    : res[key];
              }, obj),
            found
          );
        },
        pathToArrayElem = function pathToArrayElem(path) {
          var pathArray = ldtoPath(path);
          return Number.isInteger(+pathArray[pathArray.length - 1]);
        };
      function cleanup(obj, path) {
        if (0 !== path.length) {
          var object = ldget(obj, path);
          (Array.isArray(object)
            ? object.every(function(e) {
                return null == e;
              })
            : '{}' === JSON.stringify(object)) && ldunset(obj, path),
            cleanup(obj, path.slice(0, path.length - 1));
        }
      }
      var src_ObjectMap = (function() {
          function ObjectMap() {
            !(function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, ObjectMap);
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(ObjectMap, null, [
              {
                key: 'empty',
                value: function empty(object) {
                  return (
                    0 ===
                    (function ldvalues() {
                      var obj =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        props = Object.keys(obj);
                      return props.map(function(key) {
                        return obj[key];
                      });
                    })(object).length
                  );
                }
              },
              {
                key: 'get',
                value: function get(object, path) {
                  return ldget(object, path);
                }
              },
              {
                key: 'has',
                value: function has(object, path) {
                  return ldhas(object, path);
                }
              },
              {
                key: 'set',
                value: function set(object, path, value) {
                  if (void 0 !== value)
                    ObjectMap_debug('SETTING', path, value),
                      ldset(object, path, value);
                  else if (
                    pathToArrayElem(path) &&
                    void 0 !== ObjectMap.get(object, path)
                  ) {
                    ObjectMap_debug(
                      'Special case SETTING',
                      path,
                      'to undefined'
                    ),
                      ldset(object, path, void 0);
                    var pathArray = ldtoPath(path);
                    cleanup(
                      object,
                      (pathArray = pathArray.slice(0, pathArray.length - 1)),
                      !1
                    );
                  } else
                    pathToArrayElem(path) ||
                      void 0 === ObjectMap.get(object, path) ||
                      (ObjectMap_debug(
                        'Special case REMOVING',
                        path,
                        'from object completley'
                      ),
                      ObjectMap.delete(object, path));
                }
              },
              {
                key: 'delete',
                value: function _delete(object, path) {
                  ObjectMap_debug('DELETE', path),
                    pathToArrayElem(path)
                      ? (ObjectMap_debug('ARRAY', path),
                        this.pullOut(object, path))
                      : ldunset(object, path);
                  var pathArray = ldtoPath(path);
                  cleanup(
                    object,
                    (pathArray = pathArray.slice(0, pathArray.length - 1))
                  );
                }
              },
              {
                key: 'pullOut',
                value: function pullOut(object, path) {
                  var pathArray = ldtoPath(path),
                    index = pathArray[pathArray.length - 1];
                  (pathArray = pathArray.slice(0, pathArray.length - 1)),
                    ObjectMap_debug('Pulling out:', pathArray, 'index', index);
                  var arr = ldget(object, pathArray);
                  ObjectMap_debug('Array', arr),
                    Array.isArray(arr) &&
                      (function ldpullAt(obj) {
                        var pulled,
                          path =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : '';
                        String.prototype.replace
                          .call(path, /\['(.+?)'\]/g, '.$1')
                          .split(/[,[\].]+?/)
                          .filter(Boolean)
                          .reduce(function(res, key, i, arr) {
                            return void 0 === res
                              ? res
                              : i === arr.length - 1 && Array.isArray(res)
                                ? ((pulled = res.splice(key, 1)), res[key])
                                : res[key];
                          }, obj);
                      })(arr, index),
                    cleanup(object, pathArray);
                }
              }
            ]),
            ObjectMap
          );
        })(),
        events = __webpack_require__(491),
        Context = __webpack_require__(6);
      var hooks_useFormApi = function useFormApi() {
        return Object(react.useContext)(Context.e);
      };
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var hooks_useStateWithGetter = function useStateWithGetter(initial) {
        var ref = Object(react.useRef)(),
          mounted = Object(react.useRef)(!0),
          _useState2 = _slicedToArray(Object(react.useState)(initial), 2),
          state = _useState2[0],
          setState = _useState2[1];
        return (
          (ref.current = state),
          Object(react.useEffect)(function() {
            return function() {
              mounted.current = !1;
            };
          }, []),
          [
            state,
            function set(value) {
              (ref.current = value), mounted.current && setState(value);
            },
            function get() {
              return ref.current;
            }
          ]
        );
      };
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return utils_arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
              return Array.from(iter);
          })(arr) ||
          utils_unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function utils_unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return utils_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? utils_arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function utils_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var getChildDisplayName = function getChildDisplayName(WrappedComponent) {
          return WrappedComponent.type && WrappedComponent.type.name
            ? WrappedComponent.type.name
            : WrappedComponent.displayName ||
                WrappedComponent.name ||
                'Component';
        },
        utils_yupToFormErrors = function yupToFormErrors(yupError) {
          var errors = {};
          if (yupError.inner) {
            if (0 === yupError.inner.length)
              return void src_ObjectMap.set(
                errors,
                yupError.path,
                yupError.message
              );
            var _step,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it;
                if (
                  'undefined' == typeof Symbol ||
                  null == o[Symbol.iterator]
                ) {
                  if (
                    Array.isArray(o) ||
                    (it = utils_unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && 'number' == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e) {
                        throw _e;
                      },
                      f: F
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = o[Symbol.iterator]();
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e2) {
                    (didErr = !0), (err = _e2);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  }
                };
              })(yupError.inner);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var err = _step.value;
                src_ObjectMap.get(errors, err.path) ||
                  src_ObjectMap.set(errors, err.path, err.message);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          return errors;
        },
        validateYupSchema = function validateYupSchema(schema, values) {
          try {
            schema.validateSync(values, { abortEarly: !1 });
          } catch (e) {
            return utils_yupToFormErrors(e);
          }
        },
        yupToFormError = function yupToFormError(yupError) {
          if (yupError.inner) {
            if (0 === yupError.inner.length) return;
            return yupError.inner[0].message;
          }
        },
        validateYupField = function validateYupField(schema, value) {
          try {
            schema.validateSync(value, { abortEarly: !1 });
          } catch (e) {
            return yupToFormError(e);
          }
        },
        utils_validateAjvSchema = function validateAjvSchema(validate, data) {
          validate(data);
          var errors = {};
          return (
            validate.errors &&
              validate.errors.forEach(function(_ref) {
                var message = _ref.message,
                  dataPath = _ref.dataPath,
                  keyword = _ref.keyword,
                  params = _ref.params,
                  path = dataPath;
                'required' === keyword &&
                  (path = ''.concat(path, '.').concat(params.missingProperty)),
                  (path = path.replace('.', '')),
                  src_ObjectMap.set(errors, path, message);
              }),
            errors
          );
        },
        uuidv4 = function uuidv4() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function(c) {
              var r = (16 * Math.random()) | 0;
              return ('x' == c ? r : (3 & r) | 8).toString(16);
            }
          );
        },
        debounce = function debounce(func, wait) {
          var timeout;
          return function executedFunction() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            var later = function later() {
              clearTimeout(timeout), func.apply(void 0, args);
            };
            clearTimeout(timeout), (timeout = setTimeout(later, wait));
          };
        },
        computeFieldFromProperty = function computeFieldFromProperty(
          propertyName,
          property,
          prefix
        ) {
          var uiControl = property['ui:control'],
            informedProps = property['informed:props'],
            inputProps = property['input:props'],
            uiBefore = property['ui:before'],
            uiAfter = property['ui:after'],
            oneOf = property.oneOf,
            items = property.items,
            schemaEnum = property.enum,
            label = property.title,
            min = property.minimum,
            max = property.maximum,
            minLength = property.minLength,
            maxLength = property.maxLength,
            pattern = property.pattern,
            type = property.type,
            subProperties = property.properties,
            id = uuidv4();
          inputProps && inputProps.id && (id = inputProps.id);
          var field = {
            componentType: uiControl,
            field: prefix
              ? ''.concat(prefix, '.').concat(propertyName)
              : propertyName,
            type: type,
            uiBefore: uiBefore,
            uiAfter: uiAfter,
            properties: 'object' === type ? subProperties : void 0,
            items: 'array' === type ? items : void 0,
            props: _objectSpread(
              _objectSpread(
                {
                  label: label,
                  id: id,
                  min: min,
                  max: max,
                  minLength: minLength,
                  maxLength: maxLength,
                  pattern: pattern
                },
                informedProps
              ),
              inputProps
            )
          };
          if (oneOf) {
            var options = property.oneOf.map(function(option) {
              var _option$inputProps = option['input:props'],
                inputProps =
                  void 0 === _option$inputProps ? {} : _option$inputProps;
              return _objectSpread(
                { value: option.const, label: option.title },
                inputProps
              );
            });
            field.props.options = options;
          }
          if (schemaEnum) {
            var _options = property.enum.map(function(val) {
              return { value: val, label: val };
            });
            field.props.options = _options;
          }
          if (items && items.oneOf) {
            var _options2 = items.oneOf.map(function(option) {
              var _option$inputProps2 = option['input:props'],
                inputProps =
                  void 0 === _option$inputProps2 ? {} : _option$inputProps2;
              return _objectSpread(
                { value: option.const, label: option.title },
                inputProps
              );
            });
            field.props.options = _options2;
          }
          return field;
        },
        computeFieldsFromSchema = function computeFieldsFromSchema(
          schema,
          onlyValidateSchema,
          prefix
        ) {
          if (!schema || onlyValidateSchema) return [];
          var _schema$properties = schema.properties,
            properties =
              void 0 === _schema$properties ? {} : _schema$properties,
            allOf = schema.allOf,
            _schema$propertyOrder = schema.propertyOrder,
            propertyOrder =
              void 0 === _schema$propertyOrder ? [] : _schema$propertyOrder;
          if (Object.keys(properties).length > 0) {
            var fields = Object.keys(properties)
              .sort(function(a, b) {
                var aIndex = propertyOrder.indexOf(a),
                  bIndex = propertyOrder.indexOf(b);
                return (
                  (aIndex > -1 ? aIndex : propertyOrder.length + 1) -
                  (bIndex > -1 ? bIndex : propertyOrder.length + 1)
                );
              })
              .map(function(propertyName) {
                var property = properties[propertyName];
                return computeFieldFromProperty(propertyName, property, prefix);
              });
            return (
              allOf &&
                fields.push({ componentType: 'conditionals', allOf: allOf }),
              fields
            );
          }
          return [];
        },
        getSchemaPathFromJsonPath = function getSchemaPathFromJsonPath(
          jsonPath
        ) {
          var schemaPath = jsonPath
            .replace(/\./g, '.properties.')
            .replace(/\[/g, '.itmes[');
          return (schemaPath = 'properties.'.concat(schemaPath));
        },
        informedFormat = function informedFormat(value, frmtr) {
          if (!value) return { value: value, offset: 0 };
          var formatter = (function getFormatter(formatter, value) {
              if ('string' == typeof formatter)
                return formatter.split('').map(function(_char) {
                  return '#' === _char ? /\d/ : '*' === _char ? /[\w]/ : _char;
                });
              if ('function' == typeof formatter) return formatter(value);
              if (Array.isArray(formatter)) return formatter;
              throw new Error('Formatter must be string, array, or function');
            })(frmtr, value),
            prefixLength = formatter.findIndex(function(v) {
              return 'string' != typeof v;
            }),
            suffixStart =
              formatter.length -
              _toConsumableArray(formatter)
                .reverse()
                .findIndex(function(v) {
                  return 'string' != typeof v;
                }),
            formatted = [],
            chars = value.split(''),
            vIndex = 0,
            start = 0,
            matchIndex = (function matchingIndex(a, b) {
              for (
                var i = 0, mi = -1, matching = !0;
                matching && i < a.length;

              )
                a[i] == b[i] ? (mi = i) : (matching = !1), (i += 1);
              return mi;
            })(formatter.slice(0, prefixLength), chars.slice(0, prefixLength));
          matchIndex > -1 &&
            ((vIndex = matchIndex + 1),
            (formatted = formatted.concat(formatter.slice(0, matchIndex + 1))),
            (start = matchIndex + 1)),
            matchIndex < 0 &&
              ((formatted = formatted.concat(formatter.slice(0, prefixLength))),
              (start = prefixLength));
          for (var pastPrefix = !1, i = start; i < formatter.length; i++) {
            var matcher = formatter[i];
            if (
              (pastPrefix || 'string' == typeof matcher || (pastPrefix = !0),
              vIndex != chars.length)
            ) {
              var curChar = chars[vIndex],
                match =
                  'string' == typeof matcher
                    ? matcher === curChar
                    : matcher.test(curChar);
              match && 'string' == typeof matcher
                ? (formatted.push(matcher), (vIndex += 1))
                : match || 'string' != typeof matcher
                  ? match && 'string' != typeof matcher
                    ? (formatted.push(curChar), (vIndex += 1))
                    : match ||
                      'string' == typeof matcher ||
                      ((vIndex += 1), (i -= 1))
                  : vIndex != chars.length && formatted.push(matcher);
            } else {
              if (!('string' == typeof matcher && i >= suffixStart)) break;
              formatted.push(matcher);
            }
          }
          return {
            value: formatted.join(''),
            offset: value ? formatted.length - value.length : 0
          };
        },
        hooks_useIsomorphicLayoutEffect =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? react.useLayoutEffect
            : react.useEffect;
      function useField_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function useField_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? useField_ownKeys(Object(source), !0).forEach(function(key) {
                useField_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : useField_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function useField_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function useField_toConsumableArray(arr) {
        return (
          (function useField_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return useField_arrayLikeToArray(arr);
          })(arr) ||
          (function useField_iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
              return Array.from(iter);
          })(arr) ||
          useField_unsupportedIterableToArray(arr) ||
          (function useField_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useField_slicedToArray(arr, i) {
        return (
          (function useField_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useField_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          useField_unsupportedIterableToArray(arr, i) ||
          (function useField_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useField_unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return useField_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? useField_arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function useField_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var logger = debug_default()('informed:useField\t'),
        useField_initializeValue = function initializeValue(
          value,
          mask,
          formatter,
          parser,
          initialize
        ) {
          if (null != value)
            return initialize
              ? initialize(value)
              : mask
                ? mask(value)
                : formatter && !parser
                  ? informedFormat(value, formatter).value
                  : value;
        },
        useField_initializeMask = function initializeMask(
          value,
          format,
          parse,
          formatter
        ) {
          return format && parse
            ? format(value)
            : formatter
              ? informedFormat(value, formatter).value
              : value;
        },
        useField_generateValidationFunction = function generateValidationFunction(
          validationFunc,
          validationSchema,
          _ref
        ) {
          var required = _ref.required;
          return validationFunc || validationSchema
            ? function(val, values) {
                return validationSchema
                  ? validateYupField(validationSchema, val)
                  : validationFunc
                    ? validationFunc(val, values)
                    : void 0;
              }
            : required
              ? function(val) {
                  return validateRequired(val, required);
                }
              : void 0;
        },
        generateOnChange = function generateOnChange(_ref2) {
          var fieldType = _ref2.fieldType,
            setValue = _ref2.setValue,
            onChange = _ref2.onChange,
            multiple = _ref2.multiple,
            ref = _ref2.ref,
            setter = function setter(val) {
              return setValue(val);
            };
          return (
            ('text' !== fieldType &&
              'textArea' !== fieldType &&
              'number' !== fieldType) ||
              (setter = function setter(e) {
                return setValue(e.target.value, e);
              }),
            'select' === fieldType &&
              (setter = function setter() {
                var selected = Array.from(ref.current)
                  .filter(function(option) {
                    return option.selected;
                  })
                  .map(function(option) {
                    return option.value;
                  });
                setValue(multiple ? selected : selected[0] || '');
              }),
            'checkbox' === fieldType &&
              (setter = function setter(e) {
                setValue(e.target.checked), onChange && onChange(e);
              }),
            function(val) {
              setter(val), onChange && onChange(val);
            }
          );
        },
        generateOnBlur = function generateOnBlur(_ref3) {
          var setTouched = _ref3.setTouched,
            onBlur = _ref3.onBlur;
          return function(e) {
            setTouched(!0), onBlur && onBlur(e);
          };
        },
        generateValue = function generateValue(_ref4) {
          var fieldType = _ref4.fieldType,
            maskedValue = _ref4.maskedValue,
            multiple = _ref4.multiple,
            value = _ref4.value;
          switch (fieldType) {
            case 'text':
            case 'number':
              return maskedValue || 0 === maskedValue ? maskedValue : '';
            case 'textArea':
              return maskedValue || '';
            case 'select':
              return value || (multiple ? [] : '');
            case 'checkbox':
              return !!value;
            default:
              return value;
          }
        },
        generateFieldType = function generateFieldType(fieldType) {
          switch (fieldType) {
            case 'text':
            case 'number':
            case 'checkbox':
              return fieldType;
            default:
              return;
          }
        },
        validateRequired = function validateRequired(value, required) {
          if (required && (null == value || '' === value))
            return 'string' == typeof required
              ? required
              : 'This field is required';
        };
      var hooks_useField = function useField() {
        var fieldProps =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          userRef = arguments.length > 1 ? arguments[1] : void 0,
          field = fieldProps.field,
          validationFunc = fieldProps.validate,
          asyncValidate = fieldProps.asyncValidate,
          validationSchema = fieldProps.validationSchema,
          mask = fieldProps.mask,
          maskWithCursorOffset = fieldProps.maskWithCursorOffset,
          format = fieldProps.format,
          parse = fieldProps.parse,
          formatter = fieldProps.formatter,
          parser = fieldProps.parser,
          initialValue = fieldProps.initialValue,
          validateOnChange = fieldProps.validateOnChange,
          validateOnBlur = fieldProps.validateOnBlur,
          validateOnMount = fieldProps.validateOnMount,
          asyncValidateOnBlur = fieldProps.asyncValidateOnBlur,
          maskOnBlur = fieldProps.maskOnBlur,
          allowEmptyString = fieldProps.allowEmptyString,
          onValueChange = fieldProps.onValueChange,
          notify = fieldProps.notify,
          keepState = fieldProps.keepState,
          maintainCursor = fieldProps.maintainCursor,
          debug = fieldProps.debug,
          shadow = fieldProps.shadow,
          step = fieldProps.step,
          fieldType = fieldProps.fieldType,
          multiple = fieldProps.multiple,
          onChange = fieldProps.onChange,
          onBlur = fieldProps.onBlur,
          formController = fieldProps.formController,
          userRelevant = fieldProps.relevant,
          required = fieldProps.required,
          keepStateIfRelevant = fieldProps.keepStateIfRelevant,
          initialize = fieldProps.initialize,
          userProps = _objectWithoutProperties(fieldProps, [
            'field',
            'validate',
            'asyncValidate',
            'validationSchema',
            'mask',
            'maskWithCursorOffset',
            'format',
            'parse',
            'formatter',
            'parser',
            'initialValue',
            'validateOnChange',
            'validateOnBlur',
            'validateOnMount',
            'asyncValidateOnBlur',
            'maskOnBlur',
            'allowEmptyString',
            'onValueChange',
            'notify',
            'keepState',
            'maintainCursor',
            'debug',
            'shadow',
            'step',
            'fieldType',
            'multiple',
            'onChange',
            'onBlur',
            'formController',
            'relevant',
            'required',
            'keepStateIfRelevant',
            'initialize'
          ]),
          _useState = Object(react.useState)(uuidv4()),
          _useState2 = useField_slicedToArray(_useState, 1),
          fieldId = _useState2[0],
          updater = Object(react.useContext)(Context.f),
          multistepContext = Object(react.useContext)(Context.k),
          inMultistep = multistepContext || keepStateIfRelevant,
          formApi = hooks_useFormApi(),
          fieldApiRef = Object(react.useRef)(),
          initialRenerRef = Object(react.useRef)(!0),
          fieldObjectRef = Object(react.useRef)();
        formController &&
          ((updater = formController.updater),
          (formApi = formController.getFormApi()));
        var initVal,
          initTouched,
          validate = useField_generateValidationFunction(
            validationFunc,
            validationSchema,
            { required: required }
          ),
          _useState3 = Object(react.useState)(function() {
            return updater.getInitialValue(field);
          }),
          _useState4 = useField_slicedToArray(_useState3, 1),
          formInitialValue = _useState4[0],
          savedState = formApi.getSavedValue(field);
        (keepState || inMultistep) && savedState
          ? (logger('Setting field '.concat(name, "'s kept state"), savedState),
            (initVal = savedState.value),
            (initTouched = savedState.touched),
            formApi.removeSavedState(name))
          : (initVal = null != initialValue ? initialValue : formInitialValue);
        var _useStateWithGetter = hooks_useStateWithGetter(
            useField_initializeValue(
              initVal,
              mask,
              formatter,
              parser,
              initialize
            )
          ),
          _useStateWithGetter2 = useField_slicedToArray(_useStateWithGetter, 3),
          value = _useStateWithGetter2[0],
          setVal = _useStateWithGetter2[1],
          getTheVal = _useStateWithGetter2[2],
          _useStateWithGetter3 = hooks_useStateWithGetter(
            validateOnMount ? validate(value) : void 0
          ),
          _useStateWithGetter4 = useField_slicedToArray(
            _useStateWithGetter3,
            3
          ),
          error = _useStateWithGetter4[0],
          setErr = _useStateWithGetter4[1],
          getErr = _useStateWithGetter4[2],
          _useStateWithGetter5 = hooks_useStateWithGetter(initTouched),
          _useStateWithGetter6 = useField_slicedToArray(
            _useStateWithGetter5,
            3
          ),
          touched = _useStateWithGetter6[0],
          setTouch = _useStateWithGetter6[1],
          getTouch = _useStateWithGetter6[2],
          _useStateWithGetter7 = hooks_useStateWithGetter(0),
          _useStateWithGetter8 = useField_slicedToArray(
            _useStateWithGetter7,
            3
          ),
          setCursor = (_useStateWithGetter8[0], _useStateWithGetter8[1]),
          getCursor = _useStateWithGetter8[2],
          _useStateWithGetter9 = hooks_useStateWithGetter(0),
          _useStateWithGetter10 = useField_slicedToArray(
            _useStateWithGetter9,
            3
          ),
          setCursorOffset = (_useStateWithGetter10[0],
          _useStateWithGetter10[1]),
          getCursorOffset = _useStateWithGetter10[2],
          _useState5 = Object(react.useState)(function() {
            return useField_initializeMask(value, format, parse, formatter);
          }),
          _useState6 = useField_slicedToArray(_useState5, 2),
          maskedValue = _useState6[0],
          setMaskedValue = _useState6[1],
          initialValueRef = Object(react.useRef)(initialValue),
          fieldRef = Object(react.useRef)(field),
          prevFieldRef = Object(react.useRef)();
        (initialValueRef.current = initialValue), (fieldRef.current = field);
        var relevantFunc = function relevantFunc() {
            return !0;
          },
          relevant = function relevant(params) {
            var rel = userRelevant || relevantFunc,
              ff = formApi.getFullField(fieldRef.current) || fieldRef.current,
              args = {
                path: ff,
                parentPath: ff.replace(/(.*)[.[].*/, '$1'),
                get: function get(values, path) {
                  return src_ObjectMap.get(values, path);
                }
              };
            return multistepContext && multistepContext.relevant
              ? rel(params, args) && multistepContext.relevant(params, args)
              : rel(params, args);
          },
          _useStateWithGetter11 = hooks_useStateWithGetter(
            relevant(formApi.getValues())
          ),
          _useStateWithGetter12 = useField_slicedToArray(
            _useStateWithGetter11,
            3
          ),
          isRelevant = _useStateWithGetter12[0],
          setIsRelevant = _useStateWithGetter12[1],
          getIsRelevant = _useStateWithGetter12[2],
          multistepRelevant = function multistepRelevant(params) {
            return (
              !multistepContext ||
              !multistepContext.relevant ||
              multistepContext.relevant(params)
            );
          },
          checkRelevant = function checkRelevant() {
            var newRel = relevant(formApi.getValues());
            return newRel != getIsRelevant() && setIsRelevant(newRel), newRel;
          };
        Object(react.useEffect)(
          function() {
            isRelevant || keepState || fieldApiRef.current.reset();
          },
          [isRelevant]
        );
        var getVal = function getVal() {
            return shadow ? formApi.getDerrivedValue(field) : getTheVal();
          },
          setError = function setError(val) {
            var _ref5 =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              preventUpdate = _ref5.preventUpdate;
            step && formApi.getStep() < step
              ? (logger(
                  'Setting '.concat(
                    field,
                    "'s error to undefined as we are not at that step"
                  )
                ),
                setErr(void 0),
                updater.setError(fieldId, void 0, !preventUpdate))
              : (logger('Setting '.concat(field, "'s error to ").concat(val)),
                setErr(val),
                updater.setError(fieldId, val, !preventUpdate));
          },
          setValue = function setValue(val, e) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            logger('Setting '.concat(field, ' to ').concat(val));
            var formOptions = formApi.getOptions(),
              maskedVal = val;
            if (
              ('' !== val ||
                allowEmptyString ||
                options.allowEmptyString ||
                formOptions.allowEmptyStrings ||
                (val = void 0),
              ('number' !== fieldProps.type && 'number' !== fieldType) ||
                void 0 === val ||
                (val = +val),
              e &&
                e.target &&
                e.target.selectionStart &&
                setCursor(e.target.selectionStart),
              mask &&
                !maskOnBlur &&
                ((maskedVal = mask(val, getCursor())),
                (val = mask(val, getCursor()))),
              maskWithCursorOffset && !maskOnBlur)
            ) {
              var res = maskWithCursorOffset(val, getCursor());
              (maskedVal = res.value),
                (val = res.value),
                setCursorOffset(res.offset);
            }
            if (
              (format &&
                parse &&
                ((val = parse(val)), (maskedVal = format(val))),
              formatter)
            ) {
              var _res = informedFormat(val, formatter);
              setCursorOffset(_res.offset), (val = maskedVal = _res.value);
            }
            parser && (val = null != val ? parser(val) : val),
              validate &&
                validateOnChange &&
                !options.initial &&
                (logger(
                  'Validating after change '.concat(field, ' ').concat(val)
                ),
                setError(validate(val, formApi.getValues()))),
              setVal(val),
              setMaskedValue(maskedVal),
              onValueChange && onValueChange(val),
              updater.setValue(fieldId, val, !options.preventUpdate);
          },
          setTouched = function setTouched(val, reset) {
            var _ref6 =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              preventUpdate = _ref6.preventUpdate;
            if (
              (logger('Field '.concat(field, ' has been touched')),
              validate &&
                validateOnBlur &&
                !reset &&
                val &&
                (logger(
                  'Validating after blur '.concat(field, ' ').concat(getVal())
                ),
                setError(validate(getVal(), formApi.getValues()))),
              asyncValidate &&
                asyncValidateOnBlur &&
                !reset &&
                val &&
                (logger(
                  'Validating async after blur '
                    .concat(field, ' ')
                    .concat(getVal())
                ),
                asyncValidate(getVal(), formApi.getValues())),
              mask && maskOnBlur)
            ) {
              var maskedVal = mask(getVal());
              setVal(maskedVal),
                setMaskedValue(maskedVal),
                onValueChange && onValueChange(maskedVal),
                updater.setValue(fieldId, maskedVal, !preventUpdate);
            }
            if (maskWithCursorOffset && maskOnBlur) {
              var res = maskWithCursorOffset(getVal());
              setCursorOffset(res.offset),
                setVal(res.value),
                setMaskedValue(res.value),
                onValueChange && onValueChange(res.value),
                updater.setValue(fieldId, res.value, !preventUpdate);
            }
            setTouch(val), updater.setTouched(fieldId, val, !preventUpdate);
          },
          reset = function reset() {
            var _ref7 =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              preventUpdate = _ref7.preventUpdate,
              initVal = useField_initializeValue(
                initialValueRef.current ||
                  updater.getInitialValue(fieldRef.current),
                mask,
                formatter,
                parser,
                initialize
              );
            setValue(initVal, null, {
              initial: !0,
              preventUpdate: preventUpdate
            }),
              setError(validateOnMount ? validate(initVal) : void 0, {
                preventUpdate: preventUpdate
              }),
              setTouched(void 0, !0, { preventUpdate: preventUpdate });
          },
          fieldValidate = function fieldValidate(values) {
            validate &&
              (logger('Field validating '.concat(field, ' ').concat(getVal())),
              setError(validate(getVal(), values || formApi.getValues())));
          },
          fieldAsyncValidate = function fieldAsyncValidate(values) {
            asyncValidate &&
              (logger(
                'Field async validating '.concat(field, ' ').concat(getVal())
              ),
              asyncValidate(getVal(), values || formApi.getValues()));
          },
          fieldApi = {
            setValue: setValue,
            setTouched: setTouched,
            setError: setError,
            reset: reset,
            validate: fieldValidate,
            asyncValidate: fieldAsyncValidate,
            getValue: getVal,
            getTouched: getTouch,
            getError: getErr,
            getIsRelevant: getIsRelevant,
            getFieldState: function getFieldState() {
              return { value: getVal(), touched: getTouch() };
            },
            relevant: relevant,
            multistepRelevant: multistepRelevant,
            checkRelevant: checkRelevant
          };
        fieldApiRef.current = fieldApi;
        var fieldState = {
          value: value,
          error: error,
          touched: touched,
          maskedValue: maskedValue,
          isRelevant: isRelevant
        };
        shadow && (fieldState = { error: error, touched: touched }),
          logger('Render', formApi.getFullField(field), fieldState);
        var internalRef = Object(react.useRef)(null),
          ref = react_default.a.useMemo(function() {
            return userRef || internalRef;
          }, []);
        hooks_useIsomorphicLayoutEffect(function() {
          var fullField = formApi.getFullField(fieldRef.current);
          return (
            logger('Register', fieldId, fieldRef.current),
            (fieldObjectRef.current = {
              field: fullField,
              fieldId: fieldId,
              fieldApi: fieldApi,
              fieldState: fieldState,
              notify: notify,
              keepState: keepState,
              inMultistep: inMultistep,
              shadow: shadow
            }),
            updater.register(fieldId, fieldObjectRef.current),
            function() {
              var fullField = formApi.getFullField(fieldRef.current);
              logger('Deregister', fieldId, fullField),
                updater.deregister(fieldId);
            }
          );
        }, []),
          Object(react.useEffect)(
            function() {
              var fullField = formApi.getFullField(field);
              return (
                initialRenerRef.current
                  ? (initialRenerRef.current = !1)
                  : (logger('Update', field, inMultistep),
                    (fieldObjectRef.current.field = fullField),
                    updater.update(
                      fieldId,
                      fieldObjectRef.current,
                      prevFieldRef.current
                    )),
                function() {
                  prevFieldRef.current = fullField;
                }
              );
            },
            [field]
          ),
          hooks_useIsomorphicLayoutEffect(
            function() {
              maintainCursor &&
                null != ref.current &&
                getCursor() &&
                (ref.current.selectionEnd = getCursor() + getCursorOffset());
            },
            [value]
          ),
          hooks_useIsomorphicLayoutEffect(function() {
            debug &&
              ref &&
              ((ref.current.style.border = '5px solid orange'),
              setTimeout(function() {
                (ref.current.style.borderWidth = '2px'),
                  (ref.current.style.borderStyle = 'inset'),
                  (ref.current.style.borderColor = 'initial'),
                  (ref.current.style.borderImage = 'initial');
              }, 500));
          });
        var shouldUpdate = [].concat(
            useField_toConsumableArray(Object.values(fieldState)),
            useField_toConsumableArray(Object.values(fieldProps)),
            useField_toConsumableArray(Object.values(userProps))
          ),
          render = function render(children) {
            return Object(react.useMemo)(function() {
              return isRelevant ? children : null;
            }, useField_toConsumableArray(shouldUpdate));
          },
          name = field,
          changeHandler = generateOnChange({
            fieldType: fieldType,
            setValue: setValue,
            onChange: onChange,
            multiple: multiple,
            ref: ref
          }),
          blurHandler = generateOnBlur({
            setTouched: setTouched,
            onBlur: onBlur
          }),
          hookedValue = generateValue({
            fieldType: fieldType,
            maskedValue: maskedValue,
            multiple: multiple,
            value: value
          }),
          type = generateFieldType(fieldType);
        return {
          fieldState: fieldState,
          fieldApi: fieldApi,
          render: render,
          ref: ref,
          userProps: useField_objectSpread(
            useField_objectSpread({}, userProps),
            {},
            {
              multiple: multiple,
              onChange: onChange,
              onBlur: onBlur,
              id: userProps.id || fieldId
            }
          ),
          informed: useField_objectSpread(
            {
              name: name,
              multiple: multiple,
              onChange: changeHandler,
              onBlur: blurHandler,
              value: hookedValue,
              ref: ref,
              type: type,
              id: userProps.id || fieldId
            },
            userProps
          )
        };
      };
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var HOC_asField = function asField(Component) {
        var forwardRef = react_default.a.forwardRef(function(props, userRef) {
          var _useField = hooks_useField(props, userRef),
            fieldState = _useField.fieldState,
            fieldApi = _useField.fieldApi,
            render = _useField.render,
            ref = _useField.ref,
            userProps = _useField.userProps;
          return render(
            react_default.a.createElement(
              Component,
              _extends(
                {
                  fieldApi: fieldApi,
                  fieldState: fieldState,
                  field: props.field,
                  forwardedRef: ref,
                  debug: props.debug,
                  type: props.type
                },
                userProps
              )
            )
          );
        });
        return (
          (forwardRef.displayName = 'asField('.concat(
            getChildDisplayName(Component),
            ')'
          )),
          forwardRef
        );
      };
      function Text_extends() {
        return (Text_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Text_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Text_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Text_logger = debug_default()('informed:Text\t'),
        Text_Text = function Text(_ref) {
          var fieldApi = _ref.fieldApi,
            fieldState = _ref.fieldState,
            props = Text_objectWithoutProperties(_ref, [
              'fieldApi',
              'fieldState'
            ]),
            maskedValue = fieldState.maskedValue,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            field = props.field,
            forwardedRef = (props.initialValue, props.forwardedRef),
            debug = props.debug,
            label = props.label,
            id = (props.title, props.id),
            rest = Text_objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef',
              'debug',
              'label',
              'title',
              'id'
            ]);
          return (
            Text_logger('Render', field),
            hooks_useIsomorphicLayoutEffect(function() {
              debug &&
                forwardedRef &&
                ((forwardedRef.current.style.background = 'red'),
                setTimeout(function() {
                  forwardedRef.current.style.background = 'white';
                }, 500));
            }),
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              label
                ? react_default.a.createElement(
                    'label',
                    { htmlFor: id },
                    ' ',
                    label,
                    ' '
                  )
                : null,
              react_default.a.createElement(
                'input',
                Text_extends({}, rest, {
                  id: id,
                  name: field,
                  ref: forwardedRef,
                  value: maskedValue || 0 === maskedValue ? maskedValue : '',
                  onChange: function onChange(e) {
                    setValue(e.target.value, e), _onChange && _onChange(e);
                  },
                  onBlur: function onBlur(e) {
                    setTouched(!0), _onBlur && _onBlur(e);
                  }
                })
              )
            )
          );
        },
        form_fields_Text = HOC_asField(Text_Text);
      function TextArea_extends() {
        return (TextArea_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function TextArea_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function TextArea_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var TextArea_TextArea = function TextArea(_ref) {
          var fieldApi = _ref.fieldApi,
            fieldState = _ref.fieldState,
            props = TextArea_objectWithoutProperties(_ref, [
              'fieldApi',
              'fieldState'
            ]),
            maskedValue = fieldState.maskedValue,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            field = props.field,
            forwardedRef = (props.initialValue, props.forwardedRef),
            debug = props.debug,
            label = props.label,
            id = props.id,
            rest = TextArea_objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef',
              'debug',
              'label',
              'id'
            ]);
          return (
            hooks_useIsomorphicLayoutEffect(function() {
              debug &&
                forwardedRef &&
                ((forwardedRef.current.style.background = 'red'),
                setTimeout(function() {
                  forwardedRef.current.style.background = 'white';
                }, 500));
            }),
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              label
                ? react_default.a.createElement(
                    'label',
                    { htmlFor: id },
                    ' ',
                    label,
                    ' '
                  )
                : null,
              react_default.a.createElement(
                'textarea',
                TextArea_extends({}, rest, {
                  id: id,
                  name: field,
                  ref: forwardedRef,
                  value: maskedValue || '',
                  onChange: function onChange(e) {
                    setValue(e.target.value, e), _onChange && _onChange(e);
                  },
                  onBlur: function onBlur(e) {
                    setTouched(!0), _onBlur && _onBlur(e);
                  }
                })
              )
            )
          );
        },
        form_fields_TextArea = HOC_asField(TextArea_TextArea);
      function Select_extends() {
        return (Select_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Select_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Select_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Select_logger = debug_default()('informed:Select\t'),
        Select_Select = function Select(_ref) {
          var fieldApi = _ref.fieldApi,
            fieldState = _ref.fieldState,
            props = Select_objectWithoutProperties(_ref, [
              'fieldApi',
              'fieldState'
            ]),
            value = fieldState.value,
            setTouched = fieldApi.setTouched,
            onChange = props.onChange,
            _onBlur = props.onBlur,
            field = props.field,
            options = (props.initialValue, props.options),
            children = props.children,
            forwardedRef = props.forwardedRef,
            debug = props.debug,
            multiple = props.multiple,
            label = props.label,
            id = props.id,
            rest = Select_objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'options',
              'children',
              'forwardedRef',
              'debug',
              'multiple',
              'label',
              'id'
            ]),
            selectRef = Object(react.useRef)();
          return (
            hooks_useIsomorphicLayoutEffect(function() {
              debug &&
                forwardedRef &&
                ((forwardedRef.current.style.background = 'red'),
                setTimeout(function() {
                  forwardedRef.current.style.background = 'white';
                }, 500));
            }),
            Select_logger('Render', field, value),
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              label
                ? react_default.a.createElement(
                    'label',
                    { htmlFor: id },
                    ' ',
                    label,
                    ' '
                  )
                : null,
              react_default.a.createElement(
                'select',
                Select_extends({}, rest, {
                  id: id,
                  multiple: multiple,
                  name: field,
                  ref: forwardedRef || selectRef,
                  value: value || (multiple ? [] : ''),
                  onChange: function handleChange(e) {
                    var selected = Array.from(
                      (forwardedRef || selectRef).current
                    )
                      .filter(function(option) {
                        return option.selected;
                      })
                      .map(function(option) {
                        return option.value;
                      });
                    fieldApi.setValue(multiple ? selected : selected[0] || ''),
                      onChange && e && onChange(e);
                  },
                  onBlur: function onBlur(e) {
                    setTouched(!0), _onBlur && _onBlur(e);
                  }
                }),
                options
                  ? options.map(function(option) {
                      return react_default.a.createElement(
                        'option',
                        {
                          key: option.value,
                          value: option.value,
                          disabled: option.disabled
                        },
                        option.label
                      );
                    })
                  : children
              )
            )
          );
        },
        form_fields_Select = HOC_asField(Select_Select);
      function Checkbox_extends() {
        return (Checkbox_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Checkbox_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Checkbox_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Checkbox_Checkbox = function Checkbox(_ref) {
          var fieldApi = _ref.fieldApi,
            fieldState = _ref.fieldState,
            props = Checkbox_objectWithoutProperties(_ref, [
              'fieldApi',
              'fieldState'
            ]),
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            field = props.field,
            forwardedRef = (props.initialValue,
            props.debug,
            props.forwardedRef),
            id = props.id,
            label = props.label,
            rest = Checkbox_objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'debug',
              'forwardedRef',
              'id',
              'label'
            ]);
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            label
              ? react_default.a.createElement(
                  'label',
                  { htmlFor: id },
                  ' ',
                  label,
                  ' '
                )
              : null,
            react_default.a.createElement(
              'input',
              Checkbox_extends({}, rest, {
                id: id,
                name: field,
                ref: forwardedRef,
                checked: !!value,
                onChange: function onChange(e) {
                  setValue(e.target.checked), _onChange && _onChange(e);
                },
                onBlur: function onBlur(e) {
                  setTouched(!0), _onBlur && _onBlur(e);
                },
                type: 'checkbox'
              })
            )
          );
        },
        form_fields_Checkbox = HOC_asField(Checkbox_Checkbox);
      function withRadioGroup_extends() {
        return (withRadioGroup_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var HOC_withRadioGroup = function withRadioGroup(Component) {
        return react_default.a.forwardRef(function(props, ref) {
          return react_default.a.createElement(
            Context.h.Consumer,
            null,
            function(_ref) {
              var radioGroupApi = _ref.radioGroupApi,
                radioGroupState = _ref.radioGroupState;
              return react_default.a.createElement(
                Component,
                withRadioGroup_extends(
                  {
                    radioGroupApi: radioGroupApi,
                    radioGroupState: radioGroupState,
                    ref: ref
                  },
                  props
                )
              );
            }
          );
        });
      };
      function Radio_extends() {
        return (Radio_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Radio_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Radio_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Radio_Radio = function Radio(_ref) {
          var radioGroupApi = _ref.radioGroupApi,
            radioGroupState = _ref.radioGroupState,
            props = Radio_objectWithoutProperties(_ref, [
              'radioGroupApi',
              'radioGroupState'
            ]),
            groupValue = radioGroupState.value,
            setValue = radioGroupApi.setValue,
            setTouched = radioGroupApi.setTouched,
            groupOnChange = radioGroupApi.onChange,
            groupOnBlur = radioGroupApi.onBlur,
            value = props.value,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            field = props.field,
            forwardedRef = (props.initialValue, props.forwardedRef),
            rest = Radio_objectWithoutProperties(props, [
              'value',
              'onChange',
              'onBlur',
              'field',
              'initialValue',
              'forwardedRef'
            ]);
          return react_default.a.createElement(
            'input',
            Radio_extends({}, rest, {
              name: field,
              ref: forwardedRef,
              value: value,
              checked: groupValue === value,
              onChange: function onChange(e) {
                e.target.checked &&
                  (setValue(value),
                  _onChange && _onChange(e),
                  groupOnChange && groupOnChange(e));
              },
              onBlur: function onBlur(e) {
                setTouched(!0),
                  _onBlur && _onBlur(e),
                  groupOnBlur && groupOnBlur(e);
              },
              type: 'radio'
            })
          );
        },
        form_fields_Radio = HOC_withRadioGroup(Radio_Radio);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function RadioGroup_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function RadioGroup_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? RadioGroup_ownKeys(Object(source), !0).forEach(function(key) {
                RadioGroup_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : RadioGroup_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function RadioGroup_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function RadioGroup_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function RadioGroup_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var RadioGroup_RadioGroup = (function(_Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(RadioGroup, _Component);
          var _super = _createSuper(RadioGroup);
          function RadioGroup() {
            return (
              RadioGroup_classCallCheck(this, RadioGroup),
              _super.apply(this, arguments)
            );
          }
          return (
            (function RadioGroup_createClass(
              Constructor,
              protoProps,
              staticProps
            ) {
              return (
                protoProps &&
                  RadioGroup_defineProperties(
                    Constructor.prototype,
                    protoProps
                  ),
                staticProps &&
                  RadioGroup_defineProperties(Constructor, staticProps),
                Constructor
              );
            })(RadioGroup, [
              {
                key: 'render',
                value: function render() {
                  var _this$props = this.props,
                    options = _this$props.options,
                    children = _this$props.children;
                  return react_default.a.createElement(
                    Context.h.Provider,
                    { value: this.groupContext },
                    options
                      ? options.map(function(option) {
                          return react_default.a.createElement(
                            'label',
                            { key: option.value },
                            option.label,
                            ' ',
                            react_default.a.createElement(form_fields_Radio, {
                              value: option.value
                            })
                          );
                        })
                      : children
                  );
                }
              },
              {
                key: 'groupContext',
                get: function get() {
                  return {
                    radioGroupApi: RadioGroup_objectSpread(
                      RadioGroup_objectSpread({}, this.props.fieldApi),
                      {},
                      {
                        onChange: this.props.onChange,
                        onBlur: this.props.onBlur
                      }
                    ),
                    radioGroupState: this.props.fieldState
                  };
                }
              }
            ]),
            RadioGroup
          );
        })(react.Component),
        form_fields_RadioGroup = HOC_asField(RadioGroup_RadioGroup);
      var hooks_useArrayFieldApi = function useArrayFieldApi() {
          return Object(react.useContext)(Context.a);
        },
        form_fields_AddButton = function AddButton() {
          var add = hooks_useArrayFieldApi().add;
          return react_default.a.createElement(
            'button',
            {
              onClick: function onClick() {
                add();
              },
              type: 'button'
            },
            'Add'
          );
        };
      var hooks_useArrayFieldItemApi = function useArrayFieldItemApi() {
          return Object(react.useContext)(Context.b);
        },
        RemoveButton = function AddButton() {
          var remove = hooks_useArrayFieldItemApi().remove;
          return react_default.a.createElement(
            'button',
            {
              onClick: function onClick() {
                remove();
              },
              type: 'button'
            },
            'Remove'
          );
        };
      function useArrayField_toConsumableArray(arr) {
        return (
          (function useArrayField_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return useArrayField_arrayLikeToArray(arr);
          })(arr) ||
          (function useArrayField_iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
              return Array.from(iter);
          })(arr) ||
          useArrayField_unsupportedIterableToArray(arr) ||
          (function useArrayField_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useArrayField_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function useArrayField_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? useArrayField_ownKeys(Object(source), !0).forEach(function(key) {
                useArrayField_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : useArrayField_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function useArrayField_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function useArrayField_slicedToArray(arr, i) {
        return (
          (function useArrayField_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useArrayField_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          useArrayField_unsupportedIterableToArray(arr, i) ||
          (function useArrayField_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useArrayField_unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o)
            return useArrayField_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? useArrayField_arrayLikeToArray(o, minLen)
                : void 0
          );
        }
      }
      function useArrayField_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useArrayField_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function useArrayField_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var useArrayField_logger = debug_default()('informed:useArrayField\t'),
        hooks_useArrayField = function useArrayField(_ref) {
          var field = _ref.field,
            initialValue = _ref.initialValue,
            validate = _ref.validate,
            arrayFieldApiRef = _ref.arrayFieldApiRef,
            props = useArrayField_objectWithoutProperties(_ref, [
              'field',
              'initialValue',
              'validate',
              'arrayFieldApiRef'
            ]),
            formApi = hooks_useFormApi(),
            fieldsById = useArrayField_slicedToArray(
              Object(react.useState)(new Map()),
              1
            )[0],
            updater = Object(react.useContext)(Context.f),
            fullField = formApi.getFullField(field),
            initialVals = updater.getInitialValue(field) || initialValue || [],
            keptValues =
              formApi.getSavedValue(fullField) &&
              formApi.getSavedValue(fullField).value,
            _useStateWithGetter2 = useArrayField_slicedToArray(
              hooks_useStateWithGetter(keptValues || initialVals),
              3
            ),
            initialValues = _useStateWithGetter2[0],
            setInitialValues = _useStateWithGetter2[1],
            getInitialValues = _useStateWithGetter2[2],
            initialKeys = initialValues
              ? initialValues.map(function() {
                  return uuidv4();
                })
              : [],
            _useStateWithGetter4 = useArrayField_slicedToArray(
              hooks_useStateWithGetter(initialKeys),
              3
            ),
            keys = _useStateWithGetter4[0],
            setKeys = _useStateWithGetter4[1],
            getKeys = _useStateWithGetter4[2],
            validateWithLength = Object(react.useMemo)(function() {
              return function(value, values) {
                var length = null == getKeys() ? 0 : getKeys().length;
                return validate ? validate(value, length, values) : void 0;
              };
            }),
            fieldApi = hooks_useField(
              useArrayField_objectSpread(
                {
                  field: field,
                  validate: validate ? validateWithLength : void 0,
                  shadow: !0
                },
                props
              )
            ).fieldApi;
          hooks_useIsomorphicLayoutEffect(
            function() {
              var onChangeHandler = function onChangeHandler(fieldName) {
                fieldName !== fullField &&
                  (useArrayField_logger(''.concat(fullField, ' changed')),
                  RegExp(''.concat(fullField, '\\[[0-9]+\\]')).test(
                    fieldName
                  ) && fieldApi.validate());
              };
              return (
                formApi.emitter.on('value', onChangeHandler),
                function() {
                  formApi.emitter.removeListener('value', onChangeHandler);
                }
              );
            },
            [field]
          );
          var swap = function swap(a, b) {
              useArrayField_logger(
                'Swapping',
                ''
                  .concat(field, '[')
                  .concat(a, '] and ')
                  .concat(field, '[')
                  .concat(b, ']')
              );
              var newKeys = useArrayField_toConsumableArray(keys);
              keys[a] && keys[b]
                ? ((newKeys[a] = keys[b]), (newKeys[b] = keys[a]))
                : console.warn(
                    'Attempted to swap '
                      .concat(a, ' with ')
                      .concat(b, ' but one of them does not exist :(')
                  ),
                setKeys(newKeys);
            },
            add = function add() {
              keys.push(uuidv4()),
                setKeys(useArrayField_toConsumableArray(keys));
            },
            addWithInitialValue = function addWithInitialValue(initialValue) {
              keys.push(uuidv4()),
                setKeys(useArrayField_toConsumableArray(keys));
              var newInitialValues = useArrayField_toConsumableArray(
                getInitialValues()
              );
              (newInitialValues[keys.length - 1] = initialValue),
                setInitialValues(newInitialValues);
            },
            fields = keys.map(function(key, i) {
              var arrayFieldItemApi = {
                  remove: function remove() {
                    return (function remove(i) {
                      useArrayField_logger(
                        'EXPECTING REMOVAL OF',
                        ''
                          .concat(field, '[')
                          .concat(i, '] and ')
                          .concat(field, '[')
                          .concat(keys.length - 1, ']')
                      ),
                        updater.expectRemoval(
                          ''.concat(field, '[').concat(i, ']')
                        ),
                        updater.expectRemoval(
                          ''.concat(field, '[').concat(keys.length - 1, ']')
                        );
                      var newKeys = keys
                        .slice(0, i)
                        .concat(keys.slice(i + 1, keys.length));
                      setKeys(newKeys);
                      var initVals = getInitialValues(),
                        newInitialValues = initVals
                          .slice(0, i)
                          .concat(initVals.slice(i + 1, initVals.length));
                      setInitialValues(newInitialValues);
                    })(i);
                  }
                },
                arrayFieldItemState = {
                  initialValue: initialValues && initialValues[i],
                  key: key,
                  field: ''.concat(field, '[').concat(i, ']'),
                  index: i
                };
              return useArrayField_objectSpread(
                useArrayField_objectSpread(
                  {
                    arrayFieldItemApi: arrayFieldItemApi,
                    arrayFieldItemState: arrayFieldItemState
                  },
                  arrayFieldItemApi
                ),
                arrayFieldItemState
              );
            }),
            arrayFieldApi = {
              add: add,
              swap: swap,
              addWithInitialValue: addWithInitialValue,
              reset: function reset() {
                var initVals =
                  updater.getInitialValue(field) || initialValue || [];
                setInitialValues(initVals);
                var resetKeys = initVals
                  ? initVals.map(function() {
                      return uuidv4();
                    })
                  : [];
                setKeys(resetKeys);
              }
            };
          arrayFieldApiRef && (arrayFieldApiRef.current = arrayFieldApi);
          var arrayFieldState = { fields: fields, field: field },
            wrappedUpdator = useArrayField_objectSpread(
              useArrayField_objectSpread({}, updater),
              {},
              {
                register: function register(id, fld) {
                  fieldsById.set(id, fld);
                  for (
                    var _len = arguments.length,
                      args = new Array(_len > 2 ? _len - 2 : 0),
                      _key = 2;
                    _key < _len;
                    _key++
                  )
                    args[_key - 2] = arguments[_key];
                  updater.register.apply(updater, [id, fld].concat(args));
                },
                deregister: function deregister(id) {
                  fieldsById.delete(id);
                  for (
                    var _len2 = arguments.length,
                      args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                      _key2 = 1;
                    _key2 < _len2;
                    _key2++
                  )
                    args[_key2 - 1] = arguments[_key2];
                  updater.deregister.apply(updater, [id].concat(args));
                },
                getInitialValue: function getInitialValue(fieldName) {
                  if (
                    RegExp(''.concat(fullField, '\\[[0-9]+\\]')).test(fieldName)
                  ) {
                    var path = fieldName.replace(field, ''),
                      v = src_ObjectMap.get(getInitialValues(), path);
                    return (
                      useArrayField_logger(
                        'Resetting '.concat(path, ' to ').concat(v)
                      ),
                      v
                    );
                  }
                  return updater.getInitialValue(fieldName);
                }
              }
            );
          return {
            render: function render(children) {
              return react_default.a.createElement(
                Context.f.Provider,
                { value: wrappedUpdator },
                react_default.a.createElement(
                  Context.a.Provider,
                  { value: arrayFieldApi },
                  react_default.a.createElement(
                    Context.d.Provider,
                    { value: arrayFieldState },
                    children
                  )
                )
              );
            },
            add: add,
            swap: swap,
            addWithInitialValue: addWithInitialValue,
            fields: fields,
            arrayFieldState: arrayFieldState,
            arrayFieldApi: arrayFieldApi,
            field: field
          };
        };
      function useScopedApi_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function useScopedApi_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? useScopedApi_ownKeys(Object(source), !0).forEach(function(key) {
                useScopedApi_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : useScopedApi_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function useScopedApi_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var hooks_useScopedApi = function useScopedApi(scope) {
          var formApi = hooks_useFormApi();
          return Object(react.useMemo)(
            function() {
              return (function buildScopedFormApi(scope, formApi) {
                return useScopedApi_objectSpread(
                  useScopedApi_objectSpread({}, formApi),
                  {},
                  {
                    getValue: function getValue(field) {
                      return formApi.getValue(
                        ''.concat(scope, '.').concat(field)
                      );
                    },
                    getTouched: function getTouched(field) {
                      return formApi.getTouched(
                        ''.concat(scope, '.').concat(field)
                      );
                    },
                    getError: function getError(field) {
                      return formApi.getError(
                        ''.concat(scope, '.').concat(field)
                      );
                    },
                    setValue: function setValue(field, value) {
                      return formApi.setValue(
                        ''.concat(scope, '.').concat(field),
                        value
                      );
                    },
                    setTouched: function setTouched(field, value) {
                      return formApi.setTouched(
                        ''.concat(scope, '.').concat(field),
                        value
                      );
                    },
                    setError: function setError(field, value) {
                      return formApi.setError(
                        ''.concat(scope, '.').concat(field),
                        value
                      );
                    },
                    getInitialValue: function getInitialValue(field) {
                      return formApi.getInitialValue(
                        ''.concat(scope, '.').concat(field)
                      );
                    },
                    getFullField: function getFullField(field) {
                      return ''
                        .concat(formApi.getFullField(scope), '.')
                        .concat(field);
                    }
                  }
                );
              })(scope, formApi);
            },
            [scope]
          );
        },
        useFormState = __webpack_require__(40),
        components_Relevant = function Relevant(_ref) {
          var when = _ref.when,
            children = _ref.children;
          return when(Object(useFormState.a)()) ? children : null;
        };
      function ArrayField_slicedToArray(arr, i) {
        return (
          (function ArrayField_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function ArrayField_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function ArrayField_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return ArrayField_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ArrayField_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function ArrayField_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ArrayField_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function ArrayField_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function ArrayField_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ArrayField_ownKeys(Object(source), !0).forEach(function(key) {
                ArrayField_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ArrayField_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function ArrayField_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function ArrayField_extends() {
        return (ArrayField_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function ArrayField_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function ArrayField_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ArrayField_ArrayField = function ArrayField(_ref) {
          var relevant = _ref.relevant,
            field = _ref.field,
            props = ArrayField_objectWithoutProperties(_ref, [
              'relevant',
              'field'
            ]),
            formApi = hooks_useFormApi();
          if (relevant) {
            var ff = formApi.getFullField(field),
              args = {
                path: ff,
                parentPath: ff.replace(/(.*)[.[].*/, '$1'),
                get: function get(values, path) {
                  return src_ObjectMap.get(values, path);
                }
              };
            return react_default.a.createElement(
              components_Relevant,
              {
                when: function when(_ref2) {
                  var values = _ref2.values;
                  return relevant(values, args);
                }
              },
              react_default.a.createElement(
                ArrayField_ArrayFieldWrapper,
                ArrayField_extends({ field: field }, props)
              )
            );
          }
          return react_default.a.createElement(
            ArrayField_ArrayFieldWrapper,
            ArrayField_extends({ field: field }, props)
          );
        },
        ArrayField_ArrayFieldWrapper = function ArrayFieldWrapper(_ref3) {
          var children = _ref3.children,
            props = ArrayField_objectWithoutProperties(_ref3, ['children']),
            _useArrayField = hooks_useArrayField(props),
            render = _useArrayField.render,
            arrayFieldState = _useArrayField.arrayFieldState,
            arrayFieldApi = _useArrayField.arrayFieldApi,
            field = _useArrayField.field;
          return render(
            'function' == typeof children
              ? children(
                  ArrayField_objectSpread(
                    ArrayField_objectSpread(
                      {
                        field: field,
                        arrayFieldApi: arrayFieldApi,
                        arrayFieldState: arrayFieldState
                      },
                      arrayFieldApi
                    ),
                    arrayFieldState
                  )
                )
              : children
          );
        },
        ArrayField_ArrayFieldItem = function ArrayFieldItem(_ref4) {
          var arrayFieldItemState = _ref4.arrayFieldItemState,
            arrayFieldItemApi = _ref4.arrayFieldItemApi,
            children = _ref4.children,
            updater = Object(react.useContext)(Context.f),
            formApi = hooks_useFormApi(),
            _useState2 = ArrayField_slicedToArray(Object(react.useState)(0), 2),
            setState = (_useState2[0], _useState2[1]),
            fieldsById = ArrayField_slicedToArray(
              Object(react.useState)(new Map()),
              1
            )[0],
            field = arrayFieldItemState.field,
            scopedApi = hooks_useScopedApi(field);
          Object(react.useEffect)(
            function() {
              var onChangeHandler = function onChangeHandler(fieldName) {
                fieldName.slice(
                  0,
                  -1 != fieldName.lastIndexOf('[')
                    ? fieldName.lastIndexOf(']') + 1
                    : fieldName.length
                ) === field && setState(Math.random());
              };
              return (
                formApi.emitter.on('value', onChangeHandler),
                function() {
                  formApi.emitter.removeListener('value', onChangeHandler);
                }
              );
            },
            [field]
          );
          var itemState = (function getState() {
              var _formApi$getState = formApi.getState(),
                values = _formApi$getState.values,
                errors = _formApi$getState.errors,
                touched = _formApi$getState.touched;
              return {
                values: src_ObjectMap.get(values, field),
                errors: src_ObjectMap.get(errors, field),
                touched: src_ObjectMap.get(touched, field)
              };
            })(),
            wrappedUpdator = ArrayField_objectSpread(
              ArrayField_objectSpread({}, updater),
              {},
              {
                register: function register(id, fld, initialRender) {
                  fieldsById.set(id, fld),
                    updater.register(id, fld, initialRender);
                },
                deregister: function deregister(id) {
                  fieldsById.delete(id);
                  for (
                    var _len = arguments.length,
                      args = new Array(_len > 1 ? _len - 1 : 0),
                      _key = 1;
                    _key < _len;
                    _key++
                  )
                    args[_key - 1] = arguments[_key];
                  updater.deregister.apply(updater, [id].concat(args));
                }
              }
            ),
            arrayFieldItemApiValue = ArrayField_objectSpread(
              ArrayField_objectSpread(
                ArrayField_objectSpread({}, arrayFieldItemApi),
                scopedApi
              ),
              {},
              {
                reset: function reset() {
                  fieldsById.forEach(function(fld) {
                    fld.fieldApi.reset();
                  });
                }
              }
            ),
            arrayFieldItemStateValue = ArrayField_objectSpread(
              ArrayField_objectSpread({}, arrayFieldItemState),
              itemState
            );
          return 'function' == typeof children
            ? react_default.a.createElement(
                Context.f.Provider,
                { value: wrappedUpdator },
                react_default.a.createElement(
                  Context.b.Provider,
                  { value: arrayFieldItemApiValue },
                  react_default.a.createElement(
                    Context.c.Provider,
                    { value: arrayFieldItemStateValue },
                    children(
                      ArrayField_objectSpread(
                        ArrayField_objectSpread(
                          {
                            arrayFieldItemApi: arrayFieldItemApiValue,
                            arrayFieldItemState: arrayFieldItemStateValue
                          },
                          arrayFieldItemApiValue
                        ),
                        arrayFieldItemStateValue
                      )
                    )
                  )
                )
              )
            : react_default.a.createElement(
                Context.f.Provider,
                { value: wrappedUpdator },
                react_default.a.createElement(
                  Context.b.Provider,
                  { value: arrayFieldItemApiValue },
                  react_default.a.createElement(
                    Context.c.Provider,
                    { value: arrayFieldItemStateValue },
                    children
                  )
                )
              );
        };
      ArrayField_ArrayField.Items = function(_ref5) {
        var children = _ref5.children;
        return Object(react.useContext)(Context.d).fields.map(function(_ref6) {
          var arrayFieldItemState = _ref6.arrayFieldItemState,
            arrayFieldItemApi = _ref6.arrayFieldItemApi,
            key = arrayFieldItemState.key;
          return react_default.a.createElement(
            ArrayField_ArrayFieldItem,
            {
              key: key,
              arrayFieldItemApi: arrayFieldItemApi,
              arrayFieldItemState: arrayFieldItemState
            },
            children
          );
        });
      };
      var components_ArrayField = ArrayField_ArrayField,
        components_FormComponents = function FormComponents(_ref) {
          var components = _ref.components,
            fieldMap = Object(react.useContext)(Context.f).fieldMap;
          return components
            ? components.map(function(comp, i) {
                var componentType = comp['ui:control'],
                  Component = fieldMap[componentType];
                return react_default.a.createElement(Component, {
                  key: 'ui-comp-'.concat(i)
                });
              })
            : null;
        };
      function FormFields_extends() {
        return (FormFields_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var FormFields_logger = debug_default()('informed:FormFields\t'),
        components_FormFields = function FormFields(_ref) {
          var schema = _ref.schema,
            prefix = _ref.prefix,
            onlyValidateSchema = _ref.onlyValidateSchema,
            fieldMap = Object(react.useContext)(Context.f).fieldMap;
          return Object(react.useMemo)(
            function() {
              return computeFieldsFromSchema(
                schema,
                onlyValidateSchema,
                prefix
              ).map(function(schemaField, i) {
                var field = schemaField.field,
                  props = schemaField.props,
                  type = schemaField.type,
                  properties = schemaField.properties,
                  items = schemaField.items,
                  componentType = schemaField.componentType,
                  uiBefore = schemaField.uiBefore,
                  uiAfter = schemaField.uiAfter,
                  allOf = schemaField.allOf,
                  Component = fieldMap[componentType];
                return (
                  FormFields_logger('Rendering Field', field, schemaField),
                  !Component && 'object' === type && properties
                    ? react_default.a.createElement(FormFields, {
                        schema: schemaField,
                        prefix: field,
                        key: 'ScheamField-'.concat(i)
                      })
                    : !Component && 'array' === type && items
                      ? react_default.a.createElement(
                          form_fields_ArrayField,
                          FormFields_extends(
                            {
                              key: 'ScheamField-'.concat(i),
                              field: field,
                              items: items,
                              uiBefore: uiBefore,
                              uiAfter: uiAfter
                            },
                            props
                          )
                        )
                      : Component &&
                        'array' === componentType &&
                        items &&
                        'array' === type
                        ? react_default.a.createElement(
                            Component,
                            FormFields_extends(
                              {
                                key: 'ScheamField-'.concat(i),
                                field: field,
                                items: items,
                                uiBefore: uiBefore,
                                uiAfter: uiAfter
                              },
                              props
                            )
                          )
                        : 'conditionals' === componentType
                          ? allOf.map(function(conditional) {
                              var subSchema = conditional.then,
                                conditions = conditional.if.properties;
                              return react_default.a.createElement(
                                components_Relevant,
                                {
                                  key: 'ScheamField-'.concat(i),
                                  when: function when(_ref2) {
                                    var values = _ref2.values;
                                    return Object.keys(conditions).every(
                                      function(key) {
                                        var condition = conditions[key];
                                        return values[key] === condition.const;
                                      }
                                    );
                                  }
                                },
                                react_default.a.createElement(FormFields, {
                                  schema: subSchema
                                })
                              );
                            })
                          : Component
                            ? react_default.a.createElement(
                                Component,
                                FormFields_extends(
                                  {
                                    key: 'ScheamField-'.concat(i),
                                    field: field
                                  },
                                  props
                                )
                              )
                            : null
                );
              });
            },
            [schema, prefix]
          );
        };
      function form_fields_ArrayField_extends() {
        return (form_fields_ArrayField_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function form_fields_ArrayField_objectWithoutProperties(
        source,
        excluded
      ) {
        if (null == source) return {};
        var key,
          i,
          target = (function form_fields_ArrayField_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var form_fields_ArrayField = function ArrayField(_ref) {
          var field = _ref.field,
            items = _ref.items,
            uiBefore = _ref.uiBefore,
            uiAfter = _ref.uiAfter,
            props = form_fields_ArrayField_objectWithoutProperties(_ref, [
              'field',
              'items',
              'uiBefore',
              'uiAfter'
            ]);
          return react_default.a.createElement(
            components_ArrayField,
            form_fields_ArrayField_extends({ field: field }, props),
            react_default.a.createElement(components_FormComponents, {
              components: uiBefore
            }),
            react_default.a.createElement(
              components_ArrayField.Items,
              null,
              function(_ref2) {
                var field = _ref2.field;
                return react_default.a.createElement(
                  react_default.a.Fragment,
                  null,
                  react_default.a.createElement(components_FormComponents, {
                    components: items['ui:before']
                  }),
                  react_default.a.createElement(components_FormFields, {
                    schema: items,
                    prefix: field
                  }),
                  react_default.a.createElement(components_FormComponents, {
                    components: items['ui:after']
                  })
                );
              }
            ),
            react_default.a.createElement(components_FormComponents, {
              components: uiAfter
            })
          );
        },
        src_fieldMap = {
          select: form_fields_Select,
          input: form_fields_Text,
          textarea: form_fields_TextArea,
          checkbox: form_fields_Checkbox,
          radio: form_fields_RadioGroup,
          add: form_fields_AddButton,
          remove: RemoveButton,
          array: form_fields_ArrayField
        };
      function FormController_typeof(obj) {
        return (FormController_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function FormController_slicedToArray(arr, i) {
        return (
          (function FormController_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function FormController_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function FormController_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return FormController_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return FormController_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function FormController_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function FormController_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function FormController_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function FormController_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? FormController_ownKeys(Object(source), !0).forEach(function(key) {
                FormController_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : FormController_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function FormController_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function FormController_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function FormController_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function FormController_setPrototypeOf(o, p) {
        return (FormController_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function FormController_createSuper(Derived) {
        var hasNativeReflectConstruct = (function FormController_isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = FormController_getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = FormController_getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return FormController_possibleConstructorReturn(this, result);
        };
      }
      function FormController_possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== FormController_typeof(call) &&
            'function' != typeof call)
          ? FormController_assertThisInitialized(self)
          : call;
      }
      function FormController_assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function FormController_getPrototypeOf(o) {
        return (FormController_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var FormController_debug = debug_default()('informed:Controller\t'),
        noop = function noop() {},
        src_FormController = (function(_EventEmitter) {
          !(function FormController_inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && FormController_setPrototypeOf(subClass, superClass);
          })(FormController, _EventEmitter);
          var _super = FormController_createSuper(FormController);
          function FormController() {
            var _this,
              options =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            FormController_classCallCheck(this, FormController),
              ((_this = _super.call(this)).options = options);
            var ajv = options.ajv,
              schema = options.schema,
              fieldMap = options.fieldMap;
            return (
              (_this.ajv = ajv ? new ajv({ allErrors: !0 }) : null),
              (_this.ajvValidate = ajv ? _this.ajv.compile(schema) : null),
              (_this.fieldMap = fieldMap || src_fieldMap),
              (_this.fieldsById = new Map()),
              (_this.fieldsByName = {
                get: function get(name) {
                  var fieldByName;
                  return (
                    _this.fieldsById.forEach(function(value) {
                      value && value.field === name && (fieldByName = value);
                    }),
                    fieldByName
                  );
                }
              }),
              (_this.onScreen = {}),
              (_this.expectedRemovals = {}),
              (_this.pulledOut = {}),
              (_this.savedValues = {}),
              (_this.state = {
                pristine: !0,
                dirty: !1,
                invalid: !1,
                submits: 0,
                step: 0,
                validating: 0,
                submitting: !1,
                values: {},
                errors: {},
                touched: {}
              }),
              (_this.dummyField = {
                fieldApi: {
                  setValue: noop,
                  setTouched: noop,
                  setError: noop,
                  reset: noop,
                  validate: noop,
                  getValue: noop,
                  getTouched: noop,
                  getError: noop,
                  getFieldState: noop,
                  checkRelevant: noop
                }
              }),
              (_this.deregister = _this.deregister.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.register = _this.register.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getValue = _this.getValue.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getTouched = _this.getTouched.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getError = _this.getError.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getErrors = _this.getErrors.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setValue = _this.setValue.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getValues = _this.getValues.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getStep = _this.getStep.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setStep = _this.setStep.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.back = _this.back.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.next = _this.next.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setCurrent = _this.setCurrent.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setTouched = _this.setTouched.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setError = _this.setError.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setFormError = _this.setFormError.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.submitForm = _this.submitForm.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.reset = _this.reset.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.update = _this.update.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.validate = _this.validate.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.screenValid = _this.screenValid.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.keyDown = _this.keyDown.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getField = _this.getField.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getInitialValue = _this.getInitialValue.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setInitialValue = _this.setInitialValue.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getOptions = _this.getOptions.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getFormState = _this.getFormState.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.expectRemoval = _this.expectRemoval.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getSavedValue = _this.getSavedValue.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.removeSavedState = _this.removeSavedState.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.getDerrivedValue = _this.getDerrivedValue.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.setValues = _this.setValues.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.resetField = _this.resetField.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.fieldExists = _this.fieldExists.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.validateField = _this.validateField.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.notify = _this.notify.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.validating = _this.validating.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.validated = _this.validated.bind(
                FormController_assertThisInitialized(_this)
              )),
              (_this.updater = {
                register: _this.register,
                deregister: _this.deregister,
                getField: _this.getField,
                update: _this.update,
                fieldMap: _this.fieldMap,
                setValue: function setValue(fieldId, value) {
                  var emit =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    field = _this.fieldsById.get(fieldId);
                  field.shadow ||
                    src_ObjectMap.set(
                      _this.state.values,
                      field.field,
                      field.fieldApi.getValue()
                    ),
                    field.fieldApi.relevant(_this.state.values) ||
                      src_ObjectMap.delete(_this.state.values, field.field),
                    _this.fieldsById.forEach(function(f) {
                      var newRel = f.fieldApi.checkRelevant();
                      (f.fieldApi.multistepRelevant(_this.state.values) &&
                        (newRel || f.keepState)) ||
                        (src_ObjectMap.delete(_this.state.values, f.field),
                        src_ObjectMap.delete(_this.state.touched, f.field),
                        src_ObjectMap.delete(_this.state.errors, f.field));
                    }),
                    emit &&
                      (_this.emit('change'),
                      _this.emit('value', field.field, value));
                },
                setTouched: function setTouched(fieldId, touch) {
                  var emit =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    field = _this.fieldsById.get(fieldId);
                  !field.shadow &&
                    field.fieldApi.getIsRelevant() &&
                    src_ObjectMap.set(
                      _this.state.touched,
                      field.field,
                      field.fieldApi.getTouched()
                    ),
                    field.shadow &&
                      null != field.fieldApi.getError() &&
                      field.fieldApi.relevant(_this.state.values) &&
                      src_ObjectMap.set(
                        _this.state.touched,
                        field.field,
                        field.fieldApi.getTouched()
                      ),
                    emit && _this.emit('change');
                },
                setError: function setError(fieldId, error) {
                  var emit =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    field = _this.fieldsById.get(fieldId);
                  !field.shadow &&
                    field.fieldApi.getIsRelevant() &&
                    src_ObjectMap.set(
                      _this.state.errors,
                      field.field,
                      field.fieldApi.getError()
                    );
                  var currentError = src_ObjectMap.get(
                    _this.state.errors,
                    field.field
                  );
                  ((field.shadow &&
                    null != field.fieldApi.getError() &&
                    field.fieldApi.relevant(_this.state.values)) ||
                    (field.shadow &&
                      void 0 === field.fieldApi.getError() &&
                      field.fieldApi.relevant(_this.state.values) &&
                      'string' == typeof currentError)) &&
                    src_ObjectMap.set(
                      _this.state.errors,
                      field.field,
                      field.fieldApi.getError()
                    ),
                    emit && _this.emit('change');
                },
                expectRemoval: _this.expectRemoval,
                getInitialValue: _this.getInitialValue
              }),
              (_this.formApi = {
                setValue: _this.setValue,
                setTouched: _this.setTouched,
                setError: _this.setError,
                setFormError: _this.setFormError,
                setValues: _this.setValues,
                setInitialValue: _this.setInitialValue,
                getValue: _this.getValue,
                getTouched: _this.getTouched,
                getError: _this.getError,
                reset: _this.reset,
                submitForm: _this.submitForm,
                getState: _this.getFormState,
                getValues: _this.getValues,
                getFullField: _this.getFullField,
                fieldExists: _this.fieldExists,
                getInitialValue: _this.getInitialValue,
                validate: _this.validate,
                validateField: _this.validateField,
                screenValid: _this.screenValid,
                resetField: _this.resetField,
                getOptions: _this.getOptions,
                emitter: FormController_assertThisInitialized(_this),
                getSavedValue: _this.getSavedValue,
                removeSavedState: _this.removeSavedState,
                getDerrivedValue: _this.getDerrivedValue,
                getStep: _this.getStep,
                setStep: _this.setStep,
                next: _this.next,
                back: _this.back,
                setCurrent: _this.setCurrent,
                validated: _this.validated,
                validating: _this.validating
              }),
              _this.on('value', function(field) {
                delete _this.state.error, _this.notify(field);
              }),
              _this
            );
          }
          return (
            (function FormController_createClass(
              Constructor,
              protoProps,
              staticProps
            ) {
              return (
                protoProps &&
                  FormController_defineProperties(
                    Constructor.prototype,
                    protoProps
                  ),
                staticProps &&
                  FormController_defineProperties(Constructor, staticProps),
                Constructor
              );
            })(FormController, [
              {
                key: 'setOptions',
                value: function setOptions(options) {
                  this.options = options;
                }
              },
              {
                key: 'setValue',
                value: function setValue(name, value, options) {
                  this.getField(name).fieldApi.setValue(
                    value,
                    null,
                    FormController_objectSpread(
                      { allowEmptyString: this.options.allowEmptyStrings },
                      options
                    )
                  );
                }
              },
              {
                key: 'setTouched',
                value: function setTouched(name, value) {
                  this.getField(name).fieldApi.setTouched(value);
                }
              },
              {
                key: 'setError',
                value: function setError(name, value) {
                  this.getField(name).fieldApi.setError(value);
                }
              },
              {
                key: 'setFormError',
                value: function setFormError(value) {
                  (this.state.error = value), this.emit('change');
                }
              },
              {
                key: 'validating',
                value: function validating() {
                  (this.state.validating = this.state.validating + 1),
                    this.emit('change');
                }
              },
              {
                key: 'validated',
                value: function validated(name, error) {
                  (this.state.validating = this.state.validating - 1),
                    this.getError(name) || this.setError(name, error),
                    this.state.validating > 0 ||
                      (this.state.submitting &&
                        (this.valid()
                          ? (FormController_debug('Submit', this.state),
                            this.emit('submit'))
                          : (FormController_debug('Submit', this.state),
                            this.emit('failure')),
                        (this.state.submitting = !1))),
                    this.emit('change');
                }
              },
              {
                key: 'setStep',
                value: function setStep(value) {
                  (this.state.step = value), this.emit('change');
                }
              },
              {
                key: 'setCurrent',
                value: function setCurrent(component) {
                  (this.state.Current = component), this.emit('change');
                }
              },
              {
                key: 'back',
                value: function back(prevComponent) {
                  (this.state.step = this.state.step - 1),
                    (this.state.Current = prevComponent),
                    this.emit('change');
                }
              },
              {
                key: 'next',
                value: function next(nextComponent) {
                  this.validate(),
                    this.screenValid() &&
                      ((this.state.step = this.state.step + 1),
                      (this.state.Current = nextComponent)),
                    this.emit('change');
                }
              },
              {
                key: 'setInitialValue',
                value: function setInitialValue(field, value) {
                  src_ObjectMap.set(this.options.initialValues, field, value);
                }
              },
              {
                key: 'getFormState',
                value: function getFormState() {
                  return (
                    FormController_debug('Returning form state'),
                    FormController_objectSpread(
                      FormController_objectSpread({}, this.state),
                      {},
                      {
                        pristine: this.pristine(),
                        dirty: this.dirty(),
                        invalid: this.invalid()
                      }
                    )
                  );
                }
              },
              {
                key: 'getFormApi',
                value: function getFormApi() {
                  return this.formApi;
                }
              },
              {
                key: 'getDerrivedValue',
                value: function getDerrivedValue(name) {
                  var values = this.getValues();
                  return src_ObjectMap.get(values, name);
                }
              },
              {
                key: 'getValue',
                value: function getValue(name) {
                  var value = this.getField(name).fieldApi.getValue();
                  return (
                    FormController_debug('Getting value for', name, value),
                    value
                  );
                }
              },
              {
                key: 'getTouched',
                value: function getTouched(field) {
                  var touched = this.getField(field).fieldApi.getTouched();
                  return (
                    FormController_debug('Getting touched for', field, touched),
                    touched
                  );
                }
              },
              {
                key: 'getError',
                value: function getError(field) {
                  var error = this.getField(field).fieldApi.getError();
                  return (
                    FormController_debug('Getting error for', field, error),
                    error
                  );
                }
              },
              {
                key: 'getValues',
                value: function getValues() {
                  return (
                    FormController_debug('Gettings values'), this.state.values
                  );
                }
              },
              {
                key: 'getAllTouched',
                value: function getAllTouched() {
                  return (
                    FormController_debug('Gettings touched'), this.state.touched
                  );
                }
              },
              {
                key: 'getErrors',
                value: function getErrors() {
                  return (
                    FormController_debug('Gettings errors'), this.state.errors
                  );
                }
              },
              {
                key: 'getOptions',
                value: function getOptions() {
                  return this.options;
                }
              },
              {
                key: 'getStep',
                value: function getStep() {
                  return this.state.step;
                }
              },
              {
                key: 'getSavedValue',
                value: function getSavedValue(name) {
                  var field = this.fieldsByName.get(name);
                  return field && field.shadow
                    ? src_ObjectMap.get(
                        this.savedValues,
                        'shadow-'.concat(name)
                      )
                    : src_ObjectMap.get(this.savedValues, name);
                }
              },
              {
                key: 'removeSavedState',
                value: function removeSavedState(name) {
                  var field = this.fieldsByName.get(name);
                  return field && field.shadow
                    ? src_ObjectMap.delete(
                        this.savedValues,
                        'shadow-'.concat(name)
                      )
                    : src_ObjectMap.delete(this.savedValues, name);
                }
              },
              {
                key: 'getFullField',
                value: function getFullField(field) {
                  return field;
                }
              },
              {
                key: 'getInitialValue',
                value: function getInitialValue(field) {
                  return src_ObjectMap.get(this.options.initialValues, field);
                }
              },
              {
                key: 'getField',
                value: function getField(name) {
                  FormController_debug('Getting Field', name);
                  var field = this.fieldsByName.get(name);
                  return (
                    field ||
                    (console.warn(
                      'Attempting to get field '.concat(
                        name,
                        ' but it does not exist'
                      )
                    ),
                    this.dummyField)
                  );
                }
              },
              {
                key: 'notify',
                value: function notify(field) {
                  var _this2 = this,
                    notifier = this.getField(field);
                  notifier &&
                    notifier.notify &&
                    notifier.notify.forEach(function(fieldName) {
                      var JSPAN = '.'.concat(field),
                        path = ''
                          .concat(JSPAN.replace(/(.*)[.[].*/, '$1'), '.')
                          .concat(fieldName)
                          .slice(1),
                        toNotify = _this2.getField(path);
                      toNotify &&
                        (FormController_debug('Notifying', toNotify.field),
                        toNotify.fieldApi.validate(),
                        toNotify.fieldApi.checkRelevant());
                    });
                }
              },
              {
                key: 'validateField',
                value: function validateField(field) {
                  this.getField(field).fieldApi.validate();
                }
              },
              {
                key: 'resetField',
                value: function resetField(field) {
                  this.getField(field).fieldApi.reset();
                }
              },
              {
                key: 'fieldExists',
                value: function fieldExists(field) {
                  return null != this.fieldsByName.get(field);
                }
              },
              {
                key: 'valid',
                value: function valid() {
                  var errors = this.getErrors();
                  return !(!src_ObjectMap.empty(errors) || this.state.error);
                }
              },
              {
                key: 'screenValid',
                value: function screenValid() {
                  return !Object.entries(this.onScreen).some(function(_ref) {
                    return FormController_slicedToArray(
                      _ref,
                      2
                    )[1].fieldApi.getError();
                  });
                }
              },
              {
                key: 'invalid',
                value: function invalid() {
                  var errors = this.getErrors();
                  return !(src_ObjectMap.empty(errors) && !this.state.error);
                }
              },
              {
                key: 'pristine',
                value: function pristine() {
                  var touched = this.getAllTouched(),
                    values = this.getValues();
                  return (
                    src_ObjectMap.empty(touched) && src_ObjectMap.empty(values)
                  );
                }
              },
              {
                key: 'dirty',
                value: function dirty() {
                  return !this.pristine();
                }
              },
              {
                key: 'reset',
                value: function reset() {
                  FormController_debug('Resetting'),
                    this.fieldsById.forEach(function(field) {
                      field.fieldApi.reset({ preventUpdate: !0 });
                    }),
                    this.emit('reset'),
                    this.emit('change');
                }
              },
              {
                key: 'setValues',
                value: function setValues(values) {
                  FormController_debug('Setting values'),
                    this.fieldsById.forEach(function(field) {
                      var value = src_ObjectMap.get(values, field.field);
                      void 0 !== value &&
                        field.fieldApi.setValue(value, null, {
                          preventUpdate: !0
                        });
                    }),
                    this.emit('change');
                }
              },
              {
                key: 'validate',
                value: function validate() {
                  var _this3 = this;
                  FormController_debug('Validating all fields');
                  var values = this.getValues();
                  if (this.options.validationSchema) {
                    var errors = validateYupSchema(
                      this.options.validationSchema,
                      values
                    );
                    this.fieldsById.forEach(function(field) {
                      if (src_ObjectMap.has(errors, field.field)) {
                        var error = src_ObjectMap.get(errors, field.field);
                        _this3.setError(field.field, error);
                      } else _this3.setError(field.field, void 0);
                    });
                  }
                  if (this.options.schema && this.options.ajv) {
                    var _errors = utils_validateAjvSchema(
                      this.ajvValidate,
                      values
                    );
                    this.fieldsById.forEach(function(field) {
                      if (src_ObjectMap.has(_errors, field.field)) {
                        var error = src_ObjectMap.get(_errors, field.field);
                        _this3.setError(field.field, error);
                      } else _this3.setError(field.field, void 0);
                    });
                  }
                  if (
                    (this.fieldsById.forEach(function(field) {
                      field.fieldApi.validate(values),
                        field.fieldApi.setTouched(!0, !0);
                    }),
                    this.options.validate)
                  ) {
                    var res = this.options.validate(values);
                    this.setFormError(res);
                  }
                  if (this.options.validateFields) {
                    var _errors2 = this.options.validateFields(values);
                    this.fieldsById.forEach(function(field) {
                      if (src_ObjectMap.has(_errors2, field.field)) {
                        var error = src_ObjectMap.get(_errors2, field.field);
                        _this3.setError(field.field, error);
                      }
                    });
                  }
                }
              },
              {
                key: 'asyncValidate',
                value: function asyncValidate() {
                  FormController_debug('Async Validating all fields');
                  var values = this.getValues();
                  this.fieldsById.forEach(function(field) {
                    field.fieldApi.asyncValidate(values);
                  });
                }
              },
              {
                key: 'keyDown',
                value: function keyDown(e) {
                  if (13 == e.keyCode && this.options.preventEnter)
                    return e.preventDefault(e), !1;
                }
              },
              {
                key: 'submitForm',
                value: function submitForm(e) {
                  (this.state.submits = this.state.submits + 1),
                    (this.state.submitting = !0),
                    !this.options.dontPreventDefault &&
                      e &&
                      e.preventDefault(e),
                    this.validate(),
                    this.emit('change'),
                    this.asyncValidate(),
                    this.state.validating > 0 ||
                      (this.valid()
                        ? (FormController_debug('Submit', this.state),
                          this.emit('submit'))
                        : (FormController_debug('Submit', this.state),
                          this.emit('failure')),
                      (this.state.submitting = !1),
                      this.emit('change'));
                }
              },
              {
                key: 'register',
                value: function register(id, field, initialRender) {
                  var name = field.field,
                    state = field.state;
                  FormController_debug(
                    'Register ID:',
                    id,
                    'Name:',
                    name,
                    state,
                    'Initial',
                    initialRender
                  );
                  var alreadyRegistered,
                    magicValue = name.slice(
                      0,
                      -1 != name.lastIndexOf('[')
                        ? name.lastIndexOf(']') + 1
                        : name.length
                    );
                  this.fieldsById.forEach(function(value, key) {
                    value && value.field === name && (alreadyRegistered = key);
                  }),
                    alreadyRegistered && (field.keepState || field.inMultistep)
                      ? (FormController_debug('Already Registered', name),
                        this.fieldsById.delete(alreadyRegistered))
                      : !alreadyRegistered ||
                        (field.keepState && field.inMultistep) ||
                        console.warn(
                          'Check to make sure you have not registered two fields with the fieldName',
                          name
                        ),
                    FormController_debug(
                      'Fields Registered',
                      this.fieldsById.size
                    ),
                    (this.onScreen[id] = field),
                    this.fieldsById.set(id, field),
                    FormController_debug(
                      'clearing expected removal',
                      magicValue
                    ),
                    delete this.expectedRemovals[magicValue],
                    delete this.pulledOut[magicValue],
                    field.shadow ||
                      (this.updater.setValue(id, field.fieldApi.getValue(), !1),
                      this.updater.setError(id, field.fieldApi.getError(), !1),
                      this.updater.setTouched(
                        id,
                        field.fieldApi.getTouched(),
                        !1
                      ),
                      initialRender || this.emit('change'));
                }
              },
              {
                key: 'deregister',
                value: function deregister(id) {
                  var field = this.fieldsById.get(id),
                    name = field.field;
                  FormController_debug('Deregister', id, name),
                    delete this.onScreen[id];
                  var expectedRemoval = (function isExpected(
                      path,
                      expectedRemovals
                    ) {
                      var includedKey = Object.keys(expectedRemovals).find(
                        function(key) {
                          return path.includes(key);
                        }
                      );
                      if (includedKey)
                        return (
                          path.slice(0, includedKey.length) === includedKey
                        );
                    })(name, this.expectedRemovals),
                    magicValue = name.slice(
                      0,
                      -1 != name.lastIndexOf('[')
                        ? name.lastIndexOf(']') + 1
                        : name.length
                    );
                  (!field.keepState && !field.inMultistep) ||
                    expectedRemoval ||
                    (FormController_debug(
                      'Saving field '.concat(name, "'s value"),
                      field.fieldApi.getFieldState()
                    ),
                    field.shadow
                      ? src_ObjectMap.set(
                          this.savedValues,
                          'shadow-'.concat(name),
                          field.fieldApi.getFieldState()
                        )
                      : src_ObjectMap.set(
                          this.savedValues,
                          name,
                          field.fieldApi.getFieldState()
                        )),
                    (expectedRemoval ||
                      (!field.keepState && !field.inMultistep) ||
                      (!field.fieldApi.getIsRelevant() && !field.keepState)) &&
                      (FormController_debug('Removing field', name),
                      this.fieldsById.delete(id),
                      expectedRemoval ||
                        (src_ObjectMap.delete(this.state.values, name),
                        src_ObjectMap.delete(this.state.touched, name),
                        src_ObjectMap.delete(this.state.errors, name),
                        field.shadow
                          ? src_ObjectMap.delete(
                              this.savedValues,
                              'shadow-'.concat(name)
                            )
                          : src_ObjectMap.delete(this.savedValues, name)),
                      expectedRemoval &&
                        this.pulledOut[magicValue] &&
                        (FormController_debug(
                          'Pulling out',
                          name,
                          'with magic value',
                          magicValue
                        ),
                        src_ObjectMap.pullOut(this.state.values, magicValue),
                        src_ObjectMap.pullOut(this.state.touched, magicValue),
                        src_ObjectMap.pullOut(this.state.errors, magicValue),
                        src_ObjectMap.pullOut(this.savedValues, magicValue),
                        delete this.pulledOut[magicValue])),
                    this.emit('change');
                }
              },
              {
                key: 'expectRemoval',
                value: function expectRemoval(name) {
                  FormController_debug('Expecting removal of', name),
                    (this.expectedRemovals[name] = !0),
                    (this.pulledOut[name] = !0);
                }
              },
              {
                key: 'update',
                value: function update(id, field, oldName) {
                  FormController_debug(
                    'Update',
                    id,
                    field.field,
                    oldName,
                    field.fieldState.value
                  );
                  var value = field.fieldApi.getValue(),
                    error = field.fieldApi.getError(),
                    t = field.fieldApi.getTouched(),
                    oldField = this.fieldsByName.get(oldName);
                  oldName &&
                    !oldField &&
                    (src_ObjectMap.set(this.state.values, oldName),
                    src_ObjectMap.set(this.state.errors, oldName),
                    src_ObjectMap.set(this.state.touched, oldName)),
                    src_ObjectMap.set(this.state.values, field.field, value),
                    src_ObjectMap.set(this.state.errors, field.field, error),
                    src_ObjectMap.set(this.state.touched, field.field, t),
                    this.emit('change');
                }
              }
            ]),
            FormController
          );
        })(events.EventEmitter);
      function FormProvider_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function FormProvider_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var FormProvider_logger = debug_default()('informed:FormProvider\t\t'),
        components_FormProvider = function FormProvider(_ref) {
          var children = _ref.children,
            formApi = _ref.formApi,
            formController = _ref.formController,
            formState = _ref.formState,
            rest = FormProvider_objectWithoutProperties(_ref, [
              'children',
              'formApi',
              'formController',
              'formState'
            ]);
          if ((FormProvider_logger('Render FormProvider'), formApi))
            return (
              FormProvider_logger('Render FormProvider with given values'),
              react_default.a.createElement(
                Context.f.Provider,
                { value: formController.updater },
                react_default.a.createElement(
                  Context.e.Provider,
                  { value: formApi },
                  react_default.a.createElement(
                    Context.g.Provider,
                    { value: formState },
                    children
                  )
                )
              )
            );
          FormProvider_logger('Render FormProvider with generated values');
          var value = hooks_useForm(rest);
          return react_default.a.createElement(
            Context.f.Provider,
            { value: value.formController.updater },
            react_default.a.createElement(
              Context.e.Provider,
              { value: value.formApi },
              react_default.a.createElement(
                Context.g.Provider,
                { value: value.formState },
                children
              )
            )
          );
        };
      function useForm_slicedToArray(arr, i) {
        return (
          (function useForm_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useForm_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useForm_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return useForm_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return useForm_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useForm_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useForm_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useForm_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function useForm_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var useForm_logger = debug_default()('informed:useForm\t\t'),
        hooks_useForm = function useForm(_ref) {
          var dontPreventDefault = _ref.dontPreventDefault,
            initialValues = _ref.initialValues,
            validate = _ref.validate,
            validateFields = _ref.validateFields,
            allowEmptyStrings = _ref.allowEmptyStrings,
            preventEnter = _ref.preventEnter,
            getApi = _ref.getApi,
            apiRef = _ref.apiRef,
            onChange = _ref.onChange,
            onReset = _ref.onReset,
            onSubmit = _ref.onSubmit,
            onValueChange = _ref.onValueChange,
            onSubmitFailure = _ref.onSubmitFailure,
            validationSchema = _ref.validationSchema,
            schema = _ref.schema,
            ajv = _ref.ajv,
            fieldMap = _ref.fieldMap,
            onlyValidateSchema = _ref.onlyValidateSchema,
            userProps = useForm_objectWithoutProperties(_ref, [
              'dontPreventDefault',
              'initialValues',
              'validate',
              'validateFields',
              'allowEmptyStrings',
              'preventEnter',
              'getApi',
              'apiRef',
              'onChange',
              'onReset',
              'onSubmit',
              'onValueChange',
              'onSubmitFailure',
              'validationSchema',
              'schema',
              'ajv',
              'fieldMap',
              'onlyValidateSchema'
            ]);
          useForm_logger('Render useForm');
          var formControllerOptions = Object(react.useMemo)(
              function() {
                return {
                  dontPreventDefault: dontPreventDefault,
                  initialValues: initialValues,
                  validate: validate,
                  validateFields: validateFields,
                  allowEmptyStrings: allowEmptyStrings,
                  preventEnter: preventEnter,
                  validationSchema: validationSchema,
                  schema: schema,
                  ajv: ajv,
                  fieldMap: fieldMap
                };
              },
              [
                dontPreventDefault,
                initialValues,
                validate,
                validateFields,
                allowEmptyStrings,
                preventEnter,
                validationSchema,
                schema,
                ajv,
                fieldMap
              ]
            ),
            formController = useForm_slicedToArray(
              Object(react.useState)(function() {
                return new src_FormController(formControllerOptions);
              }),
              1
            )[0];
          Object(react.useEffect)(
            function() {
              formController.setOptions(formControllerOptions);
            },
            [formControllerOptions]
          );
          var _useState4 = useForm_slicedToArray(
              Object(react.useState)(function() {
                return formController.getFormState();
              }),
              2
            ),
            formState = _useState4[0],
            setFormState = _useState4[1];
          hooks_useIsomorphicLayoutEffect(
            function() {
              var onChangeHandler = function onChangeHandler() {
                  return onChange && onChange(formController.getFormState());
                },
                onResetHandler = function onResetHandler() {
                  return onReset && onReset();
                },
                onSubmitHandler = function onSubmitHandler() {
                  return (
                    onSubmit && onSubmit(formController.getFormState().values)
                  );
                },
                onValueHandler = function onValueHandler() {
                  return (
                    onValueChange &&
                    onValueChange(formController.getFormState().values)
                  );
                },
                onFailureHandler = function onFailureHandler() {
                  return (
                    onSubmitFailure &&
                    onSubmitFailure(formController.getFormState().errors)
                  );
                };
              return (
                formController.on('change', onChangeHandler),
                formController.on('reset', onResetHandler),
                formController.on('submit', onSubmitHandler),
                formController.on('value', onValueHandler),
                formController.on('failure', onFailureHandler),
                function() {
                  formController.removeListener('change', onChangeHandler),
                    formController.removeListener('reset', onResetHandler),
                    formController.removeListener('submit', onSubmitHandler),
                    formController.removeListener('value', onValueHandler),
                    formController.removeListener('failure', onFailureHandler);
                }
              );
            },
            [onChange, onReset, onSubmit, onValueChange, onSubmitFailure]
          ),
            Object(react.useState)(function() {
              formController.on('change', function onChangeHandlerRerender() {
                useForm_logger('Setting form state'),
                  setFormState(formController.getFormState());
              }),
                getApi && getApi(formController.getFormApi()),
                apiRef && (apiRef.current = formController.getFormApi());
            });
          var formApi = useForm_slicedToArray(
            Object(react.useState)(function() {
              return formController.getFormApi();
            }),
            1
          )[0];
          return {
            formApi: formApi,
            formState: formState,
            formController: formController,
            render: function render(children) {
              return react_default.a.createElement(
                components_FormProvider,
                {
                  formApi: formApi,
                  formState: formState,
                  formController: formController
                },
                react_default.a.createElement(
                  react_default.a.Fragment,
                  null,
                  children ||
                    react_default.a.createElement(components_FormFields, {
                      schema: schema,
                      onlyValidateSchema: onlyValidateSchema
                    })
                )
              );
            },
            userProps: userProps
          };
        };
      function Form_extends() {
        return (Form_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Form_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Form_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Form_debug = debug_default()('informed:Form\t\t'),
        components_Form = function Form(_ref) {
          var children = _ref.children,
            renderProp = _ref.render,
            component = _ref.component,
            rest = Form_objectWithoutProperties(_ref, [
              'children',
              'render',
              'component'
            ]);
          Form_debug('Render FORM');
          var _useForm = hooks_useForm(rest),
            formApi = _useForm.formApi,
            formController = _useForm.formController,
            formState = _useForm.formState,
            render = _useForm.render,
            userProps = _useForm.userProps;
          return render(
            react_default.a.createElement(
              'form',
              Form_extends({}, userProps, {
                onReset: formController.reset,
                onSubmit: formController.submitForm,
                onKeyDown: formController.keyDown
              }),
              (function getContent() {
                var props = { formState: formState, formApi: formApi };
                return component
                  ? react_default.a.createElement(component, props, children)
                  : renderProp
                    ? renderProp(props)
                    : 'function' == typeof children
                      ? children(props)
                      : children;
              })()
            )
          );
        };
      function Scope_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function Scope_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Scope_ownKeys(Object(source), !0).forEach(function(key) {
                Scope_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : Scope_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function Scope_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var components_Scope = function Scope(_ref) {
          var scope = _ref.scope,
            children = _ref.children,
            formRegister = Object(react.useContext)(Context.f),
            formApi = hooks_useFormApi(),
            formState = Object(useFormState.a)(),
            scopedFormApi = Object(react.useMemo)(
              function() {
                return (function buildScopedFormApi(scope, formApi) {
                  return Scope_objectSpread(
                    Scope_objectSpread({}, formApi),
                    {},
                    {
                      getValue: function getValue(field) {
                        return formApi.getValue(
                          ''.concat(scope, '.').concat(field)
                        );
                      },
                      getTouched: function getTouched(field) {
                        return formApi.getTouched(
                          ''.concat(scope, '.').concat(field)
                        );
                      },
                      getError: function getError(field) {
                        return formApi.getError(
                          ''.concat(scope, '.').concat(field)
                        );
                      },
                      setValue: function setValue(field, value) {
                        return formApi.setValue(
                          ''.concat(scope, '.').concat(field),
                          value
                        );
                      },
                      setTouched: function setTouched(field, value) {
                        return formApi.setTouched(
                          ''.concat(scope, '.').concat(field),
                          value
                        );
                      },
                      setError: function setError(field, value) {
                        return formApi.setError(
                          ''.concat(scope, '.').concat(field),
                          value
                        );
                      },
                      getInitialValue: function getInitialValue(field) {
                        return formApi.getInitialValue(
                          ''.concat(scope, '.').concat(field)
                        );
                      },
                      getFullField: function getFullField(field) {
                        return ''
                          .concat(formApi.getFullField(scope), '.')
                          .concat(field);
                      }
                    }
                  );
                })(scope, formApi);
              },
              [scope]
            ),
            scopedRegister = Object(react.useMemo)(
              function() {
                return (function buildScopedRegister(scope, formRegister) {
                  var _register = formRegister.register,
                    _deregister = formRegister.deregister,
                    _setValue = formRegister.setValue,
                    _setTouched = formRegister.setTouched,
                    _setError = formRegister.setError,
                    _update = formRegister.update,
                    _getField = formRegister.getField,
                    _expectRemoval = formRegister.expectRemoval,
                    _getInitialValue = formRegister.getInitialValue;
                  return {
                    register: function register(field) {
                      for (
                        var _len = arguments.length,
                          args = new Array(_len > 1 ? _len - 1 : 0),
                          _key = 1;
                        _key < _len;
                        _key++
                      )
                        args[_key - 1] = arguments[_key];
                      return _register.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    deregister: function deregister(field) {
                      for (
                        var _len2 = arguments.length,
                          args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                          _key2 = 1;
                        _key2 < _len2;
                        _key2++
                      )
                        args[_key2 - 1] = arguments[_key2];
                      return _deregister.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    update: function update(field) {
                      for (
                        var _len3 = arguments.length,
                          args = new Array(_len3 > 1 ? _len3 - 1 : 0),
                          _key3 = 1;
                        _key3 < _len3;
                        _key3++
                      )
                        args[_key3 - 1] = arguments[_key3];
                      return _update.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    setValue: function setValue(field) {
                      for (
                        var _len4 = arguments.length,
                          args = new Array(_len4 > 1 ? _len4 - 1 : 0),
                          _key4 = 1;
                        _key4 < _len4;
                        _key4++
                      )
                        args[_key4 - 1] = arguments[_key4];
                      return _setValue.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    setTouched: function setTouched(field) {
                      for (
                        var _len5 = arguments.length,
                          args = new Array(_len5 > 1 ? _len5 - 1 : 0),
                          _key5 = 1;
                        _key5 < _len5;
                        _key5++
                      )
                        args[_key5 - 1] = arguments[_key5];
                      return _setTouched.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    setError: function setError(field) {
                      for (
                        var _len6 = arguments.length,
                          args = new Array(_len6 > 1 ? _len6 - 1 : 0),
                          _key6 = 1;
                        _key6 < _len6;
                        _key6++
                      )
                        args[_key6 - 1] = arguments[_key6];
                      return _setError.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    getField: function getField(field) {
                      for (
                        var _len7 = arguments.length,
                          args = new Array(_len7 > 1 ? _len7 - 1 : 0),
                          _key7 = 1;
                        _key7 < _len7;
                        _key7++
                      )
                        args[_key7 - 1] = arguments[_key7];
                      return _getField.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    expectRemoval: function expectRemoval(field) {
                      for (
                        var _len8 = arguments.length,
                          args = new Array(_len8 > 1 ? _len8 - 1 : 0),
                          _key8 = 1;
                        _key8 < _len8;
                        _key8++
                      )
                        args[_key8 - 1] = arguments[_key8];
                      return _expectRemoval.apply(
                        void 0,
                        [''.concat(scope, '.').concat(field)].concat(args)
                      );
                    },
                    getInitialValue: function getInitialValue(field) {
                      return _getInitialValue(
                        ''.concat(scope, '.').concat(field)
                      );
                    },
                    fieldMap: formRegister.fieldMap
                  };
                })(scope, formRegister);
              },
              [scope]
            );
          return react_default.a.createElement(
            Context.f.Provider,
            { value: scopedRegister },
            react_default.a.createElement(
              Context.e.Provider,
              { value: scopedFormApi },
              react_default.a.createElement(
                Context.g.Provider,
                { value: formState },
                children
              )
            )
          );
        },
        FormState = __webpack_require__(189);
      function useMultistep_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function useMultistep_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? useMultistep_ownKeys(Object(source), !0).forEach(function(key) {
                useMultistep_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : useMultistep_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function useMultistep_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function useMultistep_slicedToArray(arr, i) {
        return (
          (function useMultistep_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useMultistep_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useMultistep_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return useMultistep_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return useMultistep_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useMultistep_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useMultistep_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var hooks_useMultistep = function useMultistep(_ref) {
        var initialStep = _ref.initialStep,
          multistepApiRef = _ref.multistepApiRef,
          _useFormApi = hooks_useFormApi(),
          getValues = _useFormApi.getValues,
          validate = _useFormApi.validate,
          screenValid = _useFormApi.screenValid,
          stepsByName = useMultistep_slicedToArray(
            Object(react.useState)(new Map()),
            1
          )[0],
          _useStateWithGetter2 = useMultistep_slicedToArray(
            hooks_useStateWithGetter({ current: initialStep, steps: [] }),
            3
          ),
          multistepState = _useStateWithGetter2[0],
          setMultistepState = _useStateWithGetter2[1],
          getMultistepState = _useStateWithGetter2[2],
          multistepApi = useMultistep_slicedToArray(
            Object(react.useState)(function() {
              var getCurrentStep = function getCurrentStep() {
                  var current = getMultistepState().current;
                  return stepsByName.get(current);
                },
                api = {
                  getState: function getState() {
                    return getMultistepState();
                  },
                  getCurrentStep: getCurrentStep,
                  getStep: function getStep(name) {
                    return stepsByName.get(name);
                  },
                  next: function next() {
                    if ((validate(), screenValid())) {
                      var next = (0, getCurrentStep().getNext)(),
                        nextStep =
                          'function' == typeof next ? next(getValues()) : next;
                      nextStep &&
                        setMultistepState(function(prev) {
                          return useMultistep_objectSpread(
                            useMultistep_objectSpread({}, prev),
                            {},
                            { current: nextStep }
                          );
                        });
                    }
                  },
                  back: function back() {
                    var previous = (0, getCurrentStep().getPrevious)(),
                      previousStep =
                        'function' == typeof previous
                          ? previous(getValues())
                          : previous;
                    previousStep &&
                      setMultistepState(function(prev) {
                        return useMultistep_objectSpread(
                          useMultistep_objectSpread({}, prev),
                          {},
                          { current: previousStep }
                        );
                      });
                  },
                  setCurrent: function setCurrent(next) {
                    next &&
                      setMultistepState(function(prev) {
                        return useMultistep_objectSpread(
                          useMultistep_objectSpread({}, prev),
                          {},
                          { current: next }
                        );
                      });
                  },
                  register: function register(name, step, initial) {
                    stepsByName.set(name, step),
                      initial ||
                        setMultistepState(function(prev) {
                          return useMultistep_objectSpread(
                            useMultistep_objectSpread({}, prev),
                            {},
                            { steps: Array.from(stepsByName.keys()) }
                          );
                        });
                  },
                  deregister: function deregister(name) {
                    stepsByName.delete(name),
                      setMultistepState(function(prev) {
                        return useMultistep_objectSpread(
                          useMultistep_objectSpread({}, prev),
                          {},
                          { steps: Array.from(stepsByName.keys()) }
                        );
                      });
                  }
                };
              return multistepApiRef && (multistepApiRef.current = api), api;
            }),
            1
          )[0];
        return useMultistep_objectSpread(
          useMultistep_objectSpread(
            useMultistep_objectSpread({}, multistepApi),
            multistepState
          ),
          {},
          {
            render: function render(children) {
              return react_default.a.createElement(
                Context.i.Provider,
                { value: multistepApi },
                react_default.a.createElement(
                  Context.j.Provider,
                  { value: multistepState },
                  children
                )
              );
            }
          }
        );
      };
      var hooks_useMultistepState = function useMultistepState() {
        return Object(react.useContext)(Context.j);
      };
      var hooks_useMultistepApi = function useMultistepApi() {
          return Object(react.useContext)(Context.i);
        },
        hooks_useMultistepStep = function useMultistepStep(_ref) {
          var step = _ref.step,
            next = _ref.next,
            previous = _ref.previous,
            relevant = _ref.relevant,
            values = Object(useFormState.a)().values,
            current = hooks_useMultistepState().current,
            _useMultistepApi = hooks_useMultistepApi(),
            register = _useMultistepApi.register,
            deregister = _useMultistepApi.deregister,
            isCurrent = step === current,
            isRelevant = !relevant || relevant(values),
            nextRef = Object(react.useRef)(next),
            prevRef = Object(react.useRef)(previous),
            relevantRef = Object(react.useRef)();
          (nextRef.current = next),
            (prevRef.current = previous),
            (relevantRef.current = relevant),
            Object(react.useState)(function() {
              register(
                step,
                {
                  name: step,
                  getNext: function getNext() {
                    return nextRef.current;
                  },
                  getPrevious: function getPrevious() {
                    return prevRef.current;
                  }
                },
                !0
              );
            }),
            Object(react.useEffect)(
              function() {
                return (
                  register(step, {
                    name: step,
                    getNext: function getNext() {
                      return nextRef.current;
                    },
                    getPrevious: function getPrevious() {
                      return prevRef.current;
                    }
                  }),
                  function() {
                    deregister(step);
                  }
                );
              },
              [step]
            );
          return {
            isCurrent: isCurrent,
            isRelevant: isRelevant,
            step: step,
            render: function render(children) {
              return react_default.a.createElement(
                Context.k.Provider,
                {
                  value: {
                    relevant: function relevant(params) {
                      return (
                        !relevantRef.current || relevantRef.current(params)
                      );
                    },
                    multistep: !0
                  }
                },
                isCurrent && isRelevant ? children : null
              );
            }
          };
        };
      function Multistep_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Multistep_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function Multistep(_ref) {
        var children = _ref.children,
          props = Multistep_objectWithoutProperties(_ref, ['children']),
          _useMultistep = hooks_useMultistep(props),
          render = _useMultistep.render,
          context = Multistep_objectWithoutProperties(_useMultistep, [
            'render'
          ]);
        return render(
          'function' == typeof children ? children(context) : children
        );
      }
      function FormField_extends() {
        return (FormField_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      Multistep.Step = function MultistepStep(_ref2) {
        var children = _ref2.children,
          props = Multistep_objectWithoutProperties(_ref2, ['children']);
        return (0, hooks_useMultistepStep(props).render)(children);
      };
      var components_FormField = function FormField(_ref) {
          var field = _ref.field,
            fieldMap = Object(react.useContext)(Context.f).fieldMap,
            _useFormApi = hooks_useFormApi(),
            getFullField = _useFormApi.getFullField,
            getOptions = _useFormApi.getOptions,
            fullField = getFullField(field),
            schema = getOptions().schema,
            path = getSchemaPathFromJsonPath(fullField),
            property = src_ObjectMap.get(schema, path);
          if (!property) return null;
          var schemaField = computeFieldFromProperty(field, property),
            props = schemaField.props,
            Component = fieldMap[schemaField.componentType];
          return react_default.a.createElement(
            Component,
            FormField_extends({ field: field }, props)
          );
        },
        components_SchemaFields = function SchemaFields() {
          var schema = (0, hooks_useFormApi().getOptions)().schema;
          return react_default.a.createElement(components_FormFields, {
            schema: schema
          });
        };
      function withFormApi_extends() {
        return (withFormApi_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var HOC_withFormApi = function withFormApi(Component) {
        return react_default.a.forwardRef(function(props, ref) {
          return react_default.a.createElement(
            Context.e.Consumer,
            null,
            function(formApi) {
              return react_default.a.createElement(
                Component,
                withFormApi_extends({ formApi: formApi, ref: ref }, props)
              );
            }
          );
        });
      };
      function withFormState_extends() {
        return (withFormState_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var HOC_withFormState = function withFormState(Component) {
        return react_default.a.forwardRef(function(props, ref) {
          return react_default.a.createElement(
            Context.g.Consumer,
            null,
            function(formState) {
              return react_default.a.createElement(
                Component,
                withFormState_extends({ formState: formState, ref: ref }, props)
              );
            }
          );
        });
      };
      var hooks_useFieldApi = function useFieldApi(field) {
        var formApi = hooks_useFormApi();
        return Object(react.useMemo)(
          function() {
            return (function buildFieldApi(formApi, field) {
              return {
                getValue: function getValue() {
                  return formApi.getValue(field);
                },
                setValue: function setValue(value) {
                  return formApi.setValue(field, value);
                },
                getTouched: function getTouched() {
                  return formApi.getTouched(field);
                },
                setTouched: function setTouched(value) {
                  return formApi.setTouched(field, value);
                },
                getError: function getError() {
                  return formApi.getError(field);
                },
                setError: function setError(value) {
                  return formApi.setError(field, value);
                },
                reset: function reset() {
                  return formApi.resetField(field);
                },
                validate: function validate() {
                  return formApi.validateField(field);
                },
                exists: function exists() {
                  return formApi.fieldExists(field);
                }
              };
            })(formApi, field);
          },
          [field]
        );
      };
      var hooks_useFieldState = function useFieldState(field) {
        var fieldApi = hooks_useFieldApi(field);
        return (
          Object(useFormState.a)(),
          (function buildFieldState(fieldApi) {
            return {
              value: fieldApi.getValue(),
              touched: fieldApi.getTouched(),
              error: fieldApi.getError()
            };
          })(fieldApi)
        );
      };
      function withFieldState_extends() {
        return (withFieldState_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var HOC_withFieldState = function withFieldState(field) {
        return function(Component) {
          return function(props) {
            var fieldState = hooks_useFieldState(field);
            return react_default.a.createElement(
              Component,
              withFieldState_extends({ fieldState: fieldState }, props)
            );
          };
        };
      };
      function withFieldApi_extends() {
        return (withFieldApi_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var HOC_withFieldApi = function withFieldApi(field) {
        return function(Component) {
          return function(props) {
            var fieldApi = hooks_useFieldApi(field);
            return react_default.a.createElement(
              Component,
              withFieldApi_extends({ fieldApi: fieldApi }, props)
            );
          };
        };
      };
      function useCursorPosition_slicedToArray(arr, i) {
        return (
          (function useCursorPosition_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useCursorPosition_iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useCursorPosition_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return useCursorPosition_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return useCursorPosition_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useCursorPosition_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useCursorPosition_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var hooks_useCursorPosition = function useCursorPosition(_ref) {
        var value = _ref.value,
          inputRef = _ref.inputRef,
          _useStateWithGetter2 = useCursorPosition_slicedToArray(
            hooks_useStateWithGetter(0),
            3
          ),
          cursor = _useStateWithGetter2[0],
          setCursor = _useStateWithGetter2[1],
          getCursor = _useStateWithGetter2[2],
          _useStateWithGetter4 = useCursorPosition_slicedToArray(
            hooks_useStateWithGetter(0),
            3
          ),
          cursorOffset = _useStateWithGetter4[0],
          setCursorOffset = _useStateWithGetter4[1],
          getCursorOffset = _useStateWithGetter4[2];
        return (
          Object(react.useLayoutEffect)(
            function() {
              null != inputRef.current &&
                getCursor() &&
                (inputRef.current.selectionEnd =
                  getCursor() + getCursorOffset());
            },
            [value]
          ),
          {
            setCursorOffset: setCursorOffset,
            setCursor: setCursor,
            cursor: cursor,
            getCursor: getCursor,
            cursorOffset: cursorOffset
          }
        );
      };
      function Option_extends() {
        return (Option_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Option_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Option_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var form_fields_Option = function Option(_ref) {
          var value = _ref.value,
            forwardedRef = _ref.forwardedRef,
            children = _ref.children,
            rest = Option_objectWithoutProperties(_ref, [
              'value',
              'forwardedRef',
              'children'
            ]);
          return react_default.a.createElement(
            'option',
            Option_extends(
              { ref: forwardedRef, value: value, key: value },
              rest
            ),
            children
          );
        },
        Input = form_fields_Text;
    },
    1217: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            20
          );
          (module._StorybookPreserveDecorators = !0),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
              [__webpack_require__(1218)],
              module
            );
        }.call(this, __webpack_require__(140)(module));
    },
    1218: function(module, exports, __webpack_require__) {
      var map = { './index.js': 1219 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1218);
    },
    1219: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              20
            ),
            storybook_readme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              87
            ),
            _utils_StoryWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              489
            ),
            _Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(501),
            _TLDR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503),
            _Form_Basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(506),
            _Form_Dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              281
            ),
            _Schema_Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              507
            ),
            _Schema_FormattedSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              508
            ),
            _Schema_NestedSchema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              509
            ),
            _Schema_ArrayFieldSchema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              510
            ),
            _Schema_ArrayFieldSchemaRelevant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
              511
            ),
            _Schema_ArrayFieldSchemaNested__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
              512
            ),
            _Schema_CustomSchema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
              513
            ),
            _Form_Complex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
              196
            ),
            _Form_Big__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(514),
            _Form_State__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
              515
            ),
            _Debugging_FormState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
              516
            ),
            _Form_Props__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
              517
            ),
            _Form_Api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(518),
            _Multistep_Complex__WEBPACK_IMPORTED_MODULE_22__ = (__webpack_require__(
              1701
            ),
            __webpack_require__(519)),
            _Validation_SimpleValidation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
              520
            ),
            _Validation_YupValidation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
              521
            ),
            _Validation_FieldLevelYupValidation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
              522
            ),
            _Validation_ComplexValidation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
              523
            ),
            _Validation_ValidationControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
              524
            ),
            _Validation_ArrayFieldValidation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
              525
            ),
            _Validation_ComplexArrayFieldValidation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
              526
            ),
            _Validation_Notifications__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
              527
            ),
            _Validation_FormLevelValidation__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
              528
            ),
            _Validation_AjvValidation__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
              529
            ),
            _Validation_AjvValidationNoRender__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
              530
            ),
            _Validation_AsyncValidation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
              531
            ),
            _Playground_Format__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
              532
            ),
            _Playground_Schema__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
              533
            ),
            _Playground_RickRoll__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
              500
            ),
            _Formatting_Formatter__WEBPACK_IMPORTED_MODULE_39__ = (__webpack_require__(
              1702
            ),
            __webpack_require__(534)),
            _Formatting_Mask__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
              535
            ),
            _Gotchas_UnnecessaryRendering__WEBPACK_IMPORTED_MODULE_42__ = (__webpack_require__(
              1703
            ),
            __webpack_require__(504)),
            _Gotchas_Scope__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
              505
            ),
            _Gotchas_Optimization__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
              536
            ),
            _Dynamic_DynamicFields__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
              282
            ),
            _CustomInputs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
              502
            ),
            _Inputs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(76),
            _Arrays__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(142),
            _HOC__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(143),
            _Hooks__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(89),
            _Schema_ConditionalSchema__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
              537
            ),
            _Form_FormatDependent__WEBPACK_IMPORTED_MODULE_53__ = (__webpack_require__(
              1704
            ),
            __webpack_require__(538)),
            _CustomInputs_FormattedObjectInput__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
              539
            ),
            _CustomInputs_ObjectInput__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
              540
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
            _utils_StoryWrapper__WEBPACK_IMPORTED_MODULE_3__.a
          ),
            Object(
              storybook_readme__WEBPACK_IMPORTED_MODULE_2__.configureReadme
            )({
              StoryPreview: function StoryPreview(_ref) {
                var children = _ref.children;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { marginTop: '2rem', marginBottom: '2rem' } },
                  children
                );
              },
              DocPreview: function DocPreview(_ref2) {
                var children = _ref2.children;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  ' ',
                  children
                );
              },
              HeaderPreview: function HeaderPreview(_ref3) {
                var children = _ref3.children;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  children
                );
              },
              FooterPreview: function FooterPreview(_ref4) {
                var children = _ref4.children;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  null,
                  children
                );
              },
              header: '',
              footer: ''
            }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Introduction',
              module
            )
              .add('Getting Started', _Intro__WEBPACK_IMPORTED_MODULE_4__.a)
              .add('TLDR', _TLDR__WEBPACK_IMPORTED_MODULE_5__.a),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Form',
              module
            )
              .add('Basic', _Form_Basic__WEBPACK_IMPORTED_MODULE_6__.a)
              .add('Complex', _Form_Complex__WEBPACK_IMPORTED_MODULE_15__.a)
              .add('State', _Form_State__WEBPACK_IMPORTED_MODULE_17__.a)
              .add('Api', _Form_Api__WEBPACK_IMPORTED_MODULE_20__.a)
              .add('Props', _Form_Props__WEBPACK_IMPORTED_MODULE_19__.a)
              .add(
                'Dynamic',
                _Dynamic_DynamicFields__WEBPACK_IMPORTED_MODULE_45__.a
              )
              .add(
                'Dependent Fields',
                _Form_FormatDependent__WEBPACK_IMPORTED_MODULE_53__.a
              )
              .add(
                'Dynamic Fields',
                _Form_Dynamic__WEBPACK_IMPORTED_MODULE_7__.a
              )
              .add('Big', _Form_Big__WEBPACK_IMPORTED_MODULE_16__.a),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Inputs',
              module
            )
              .add('Intro', _Inputs__WEBPACK_IMPORTED_MODULE_47__.b)
              .add('Text', _Inputs__WEBPACK_IMPORTED_MODULE_47__.h)
              .add('Text Area', _Inputs__WEBPACK_IMPORTED_MODULE_47__.g)
              .add('Radio Input', _Inputs__WEBPACK_IMPORTED_MODULE_47__.e)
              .add('Checkbox Input', _Inputs__WEBPACK_IMPORTED_MODULE_47__.a)
              .add('Select Input', _Inputs__WEBPACK_IMPORTED_MODULE_47__.f)
              .add(
                'Multi Select Input',
                _Inputs__WEBPACK_IMPORTED_MODULE_47__.c
              )
              .add('Number Input', _Inputs__WEBPACK_IMPORTED_MODULE_47__.d),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'CustomInputs',
              module
            )
              .add(
                'Creating Custom Inputs',
                _CustomInputs__WEBPACK_IMPORTED_MODULE_46__.a
              )
              .add(
                'Creating Object Inputs',
                _CustomInputs_ObjectInput__WEBPACK_IMPORTED_MODULE_55__.a
              )
              .add(
                'Creating Formatted Object Inputs',
                _CustomInputs_FormattedObjectInput__WEBPACK_IMPORTED_MODULE_54__.a
              ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Arrays',
              module
            )
              .add('Dynamic Arrays', _Arrays__WEBPACK_IMPORTED_MODULE_48__.a)
              .add('Nested Form', _Arrays__WEBPACK_IMPORTED_MODULE_48__.c)
              .add('Swap', _Arrays__WEBPACK_IMPORTED_MODULE_48__.d)
              .add('Huge Array Form', _Arrays__WEBPACK_IMPORTED_MODULE_48__.b),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Validation',
              module
            )
              .add(
                'Simple Validation',
                _Validation_SimpleValidation__WEBPACK_IMPORTED_MODULE_23__.a
              )
              .add(
                'Complex Validation',
                _Validation_ComplexValidation__WEBPACK_IMPORTED_MODULE_26__.a
              )
              .add(
                'Validation Control',
                _Validation_ValidationControl__WEBPACK_IMPORTED_MODULE_27__.a
              )
              .add(
                'Form Level Validation',
                _Validation_FormLevelValidation__WEBPACK_IMPORTED_MODULE_31__.a
              )
              .add(
                'Notifications',
                _Validation_Notifications__WEBPACK_IMPORTED_MODULE_30__.a
              )
              .add(
                'Array Field Validation',
                _Validation_ArrayFieldValidation__WEBPACK_IMPORTED_MODULE_28__.a
              )
              .add(
                'Complex Array Field Validation',
                _Validation_ComplexArrayFieldValidation__WEBPACK_IMPORTED_MODULE_29__.a
              )
              .add(
                'Yup Validation',
                _Validation_YupValidation__WEBPACK_IMPORTED_MODULE_24__.a
              )
              .add(
                'Field Level + Yup Validation',
                _Validation_FieldLevelYupValidation__WEBPACK_IMPORTED_MODULE_25__.a
              )
              .add(
                'JSON Schema Validation + Rendering',
                _Validation_AjvValidation__WEBPACK_IMPORTED_MODULE_32__.a
              )
              .add(
                'Only JSON Schema Validation',
                _Validation_AjvValidationNoRender__WEBPACK_IMPORTED_MODULE_33__.a
              )
              .add(
                'Async Validation',
                _Validation_AsyncValidation__WEBPACK_IMPORTED_MODULE_34__.a
              ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Schema',
              module
            )
              .add('Schema', _Schema_Intro__WEBPACK_IMPORTED_MODULE_8__.a)
              .add(
                'Nested Schema',
                _Schema_NestedSchema__WEBPACK_IMPORTED_MODULE_10__.a
              )
              .add(
                'Formatted Schema',
                _Schema_FormattedSchema__WEBPACK_IMPORTED_MODULE_9__.a
              )
              .add(
                'Array Field Schema',
                _Schema_ArrayFieldSchema__WEBPACK_IMPORTED_MODULE_11__.a
              )
              .add(
                'Conditional Schema',
                _Schema_ConditionalSchema__WEBPACK_IMPORTED_MODULE_51__.a
              )
              .add(
                'Custom Schema',
                _Schema_CustomSchema__WEBPACK_IMPORTED_MODULE_14__.a
              )
              .add(
                'Nested Array Fields',
                _Schema_ArrayFieldSchemaNested__WEBPACK_IMPORTED_MODULE_13__.a
              )
              .add(
                'Relevant ArrayField Schema',
                _Schema_ArrayFieldSchemaRelevant__WEBPACK_IMPORTED_MODULE_12__.a
              ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Debugging',
              module
            ).add(
              'Form State',
              _Debugging_FormState__WEBPACK_IMPORTED_MODULE_18__.a
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Formatting',
              module
            )
              .add('Mask', _Formatting_Mask__WEBPACK_IMPORTED_MODULE_40__.a)
              .add(
                'Formatter',
                _Formatting_Formatter__WEBPACK_IMPORTED_MODULE_39__.a
              ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Hooks!',
              module
            )
              .add('useFormApi', _Hooks__WEBPACK_IMPORTED_MODULE_50__.f)
              .add('useFormState', _Hooks__WEBPACK_IMPORTED_MODULE_50__.g)
              .add('useFieldApi', _Hooks__WEBPACK_IMPORTED_MODULE_50__.c)
              .add('useFieldState', _Hooks__WEBPACK_IMPORTED_MODULE_50__.d)
              .add('useArrayField', _Hooks__WEBPACK_IMPORTED_MODULE_50__.a)
              .add('useForm', _Hooks__WEBPACK_IMPORTED_MODULE_50__.e)
              .add('useField', _Hooks__WEBPACK_IMPORTED_MODULE_50__.b),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'High Order Components',
              module
            )
              .add('withFormApi', _HOC__WEBPACK_IMPORTED_MODULE_49__.c)
              .add('withFormState', _HOC__WEBPACK_IMPORTED_MODULE_49__.d)
              .add('withFieldApi', _HOC__WEBPACK_IMPORTED_MODULE_49__.a)
              .add('withFieldState', _HOC__WEBPACK_IMPORTED_MODULE_49__.b),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Multistep Forms',
              module
            ).add(
              'Dynamic Multistep',
              _Multistep_Complex__WEBPACK_IMPORTED_MODULE_22__.a
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Gotchas',
              module
            )
              .add(
                'Unnecessary Rendering',
                _Gotchas_UnnecessaryRendering__WEBPACK_IMPORTED_MODULE_42__.a
              )
              .add(
                'Optimization',
                _Gotchas_Optimization__WEBPACK_IMPORTED_MODULE_44__.a
              )
              .add('Scope', _Gotchas_Scope__WEBPACK_IMPORTED_MODULE_43__.a),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Dynamic Forms',
              module
            )
              .add(
                'Dynamic Fields',
                _Dynamic_DynamicFields__WEBPACK_IMPORTED_MODULE_45__.a
              )
              .add(
                'Dynamic Rendering',
                _Form_Dynamic__WEBPACK_IMPORTED_MODULE_7__.a
              ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Playground',
              module
            )
              .add(
                'Format Example',
                _Playground_Format__WEBPACK_IMPORTED_MODULE_35__.a
              )
              .add(
                'Schema Example',
                _Playground_Schema__WEBPACK_IMPORTED_MODULE_36__.a
              ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Cool Examples',
              module
            ).add(
              'Cool Example',
              _Playground_RickRoll__WEBPACK_IMPORTED_MODULE_37__.a
            );
        }.call(this, __webpack_require__(140)(module));
    },
    1265: function(module, exports, __webpack_require__) {
      var map = {
        './Binary_Property/ASCII.js': 1266,
        './Binary_Property/ASCII_Hex_Digit.js': 1267,
        './Binary_Property/Alphabetic.js': 1268,
        './Binary_Property/Any.js': 1269,
        './Binary_Property/Assigned.js': 1270,
        './Binary_Property/Bidi_Control.js': 1271,
        './Binary_Property/Bidi_Mirrored.js': 1272,
        './Binary_Property/Case_Ignorable.js': 1273,
        './Binary_Property/Cased.js': 1274,
        './Binary_Property/Changes_When_Casefolded.js': 1275,
        './Binary_Property/Changes_When_Casemapped.js': 1276,
        './Binary_Property/Changes_When_Lowercased.js': 1277,
        './Binary_Property/Changes_When_NFKC_Casefolded.js': 1278,
        './Binary_Property/Changes_When_Titlecased.js': 1279,
        './Binary_Property/Changes_When_Uppercased.js': 1280,
        './Binary_Property/Dash.js': 1281,
        './Binary_Property/Default_Ignorable_Code_Point.js': 1282,
        './Binary_Property/Deprecated.js': 1283,
        './Binary_Property/Diacritic.js': 1284,
        './Binary_Property/Emoji.js': 1285,
        './Binary_Property/Emoji_Component.js': 1286,
        './Binary_Property/Emoji_Modifier.js': 1287,
        './Binary_Property/Emoji_Modifier_Base.js': 1288,
        './Binary_Property/Emoji_Presentation.js': 1289,
        './Binary_Property/Extended_Pictographic.js': 1290,
        './Binary_Property/Extender.js': 1291,
        './Binary_Property/Grapheme_Base.js': 1292,
        './Binary_Property/Grapheme_Extend.js': 1293,
        './Binary_Property/Hex_Digit.js': 1294,
        './Binary_Property/IDS_Binary_Operator.js': 1295,
        './Binary_Property/IDS_Trinary_Operator.js': 1296,
        './Binary_Property/ID_Continue.js': 1297,
        './Binary_Property/ID_Start.js': 1298,
        './Binary_Property/Ideographic.js': 1299,
        './Binary_Property/Join_Control.js': 1300,
        './Binary_Property/Logical_Order_Exception.js': 1301,
        './Binary_Property/Lowercase.js': 1302,
        './Binary_Property/Math.js': 1303,
        './Binary_Property/Noncharacter_Code_Point.js': 1304,
        './Binary_Property/Pattern_Syntax.js': 1305,
        './Binary_Property/Pattern_White_Space.js': 1306,
        './Binary_Property/Quotation_Mark.js': 1307,
        './Binary_Property/Radical.js': 1308,
        './Binary_Property/Regional_Indicator.js': 1309,
        './Binary_Property/Sentence_Terminal.js': 1310,
        './Binary_Property/Soft_Dotted.js': 1311,
        './Binary_Property/Terminal_Punctuation.js': 1312,
        './Binary_Property/Unified_Ideograph.js': 1313,
        './Binary_Property/Uppercase.js': 1314,
        './Binary_Property/Variation_Selector.js': 1315,
        './Binary_Property/White_Space.js': 1316,
        './Binary_Property/XID_Continue.js': 1317,
        './Binary_Property/XID_Start.js': 1318,
        './General_Category/Cased_Letter.js': 1319,
        './General_Category/Close_Punctuation.js': 1320,
        './General_Category/Connector_Punctuation.js': 1321,
        './General_Category/Control.js': 1322,
        './General_Category/Currency_Symbol.js': 1323,
        './General_Category/Dash_Punctuation.js': 1324,
        './General_Category/Decimal_Number.js': 1325,
        './General_Category/Enclosing_Mark.js': 1326,
        './General_Category/Final_Punctuation.js': 1327,
        './General_Category/Format.js': 1328,
        './General_Category/Initial_Punctuation.js': 1329,
        './General_Category/Letter.js': 1330,
        './General_Category/Letter_Number.js': 1331,
        './General_Category/Line_Separator.js': 1332,
        './General_Category/Lowercase_Letter.js': 1333,
        './General_Category/Mark.js': 1334,
        './General_Category/Math_Symbol.js': 1335,
        './General_Category/Modifier_Letter.js': 1336,
        './General_Category/Modifier_Symbol.js': 1337,
        './General_Category/Nonspacing_Mark.js': 1338,
        './General_Category/Number.js': 1339,
        './General_Category/Open_Punctuation.js': 1340,
        './General_Category/Other.js': 1341,
        './General_Category/Other_Letter.js': 1342,
        './General_Category/Other_Number.js': 1343,
        './General_Category/Other_Punctuation.js': 1344,
        './General_Category/Other_Symbol.js': 1345,
        './General_Category/Paragraph_Separator.js': 1346,
        './General_Category/Private_Use.js': 1347,
        './General_Category/Punctuation.js': 1348,
        './General_Category/Separator.js': 1349,
        './General_Category/Space_Separator.js': 1350,
        './General_Category/Spacing_Mark.js': 1351,
        './General_Category/Surrogate.js': 1352,
        './General_Category/Symbol.js': 1353,
        './General_Category/Titlecase_Letter.js': 1354,
        './General_Category/Unassigned.js': 1355,
        './General_Category/Uppercase_Letter.js': 1356,
        './Script/Adlam.js': 1357,
        './Script/Ahom.js': 1358,
        './Script/Anatolian_Hieroglyphs.js': 1359,
        './Script/Arabic.js': 1360,
        './Script/Armenian.js': 1361,
        './Script/Avestan.js': 1362,
        './Script/Balinese.js': 1363,
        './Script/Bamum.js': 1364,
        './Script/Bassa_Vah.js': 1365,
        './Script/Batak.js': 1366,
        './Script/Bengali.js': 1367,
        './Script/Bhaiksuki.js': 1368,
        './Script/Bopomofo.js': 1369,
        './Script/Brahmi.js': 1370,
        './Script/Braille.js': 1371,
        './Script/Buginese.js': 1372,
        './Script/Buhid.js': 1373,
        './Script/Canadian_Aboriginal.js': 1374,
        './Script/Carian.js': 1375,
        './Script/Caucasian_Albanian.js': 1376,
        './Script/Chakma.js': 1377,
        './Script/Cham.js': 1378,
        './Script/Cherokee.js': 1379,
        './Script/Chorasmian.js': 1380,
        './Script/Common.js': 1381,
        './Script/Coptic.js': 1382,
        './Script/Cuneiform.js': 1383,
        './Script/Cypriot.js': 1384,
        './Script/Cyrillic.js': 1385,
        './Script/Deseret.js': 1386,
        './Script/Devanagari.js': 1387,
        './Script/Dives_Akuru.js': 1388,
        './Script/Dogra.js': 1389,
        './Script/Duployan.js': 1390,
        './Script/Egyptian_Hieroglyphs.js': 1391,
        './Script/Elbasan.js': 1392,
        './Script/Elymaic.js': 1393,
        './Script/Ethiopic.js': 1394,
        './Script/Georgian.js': 1395,
        './Script/Glagolitic.js': 1396,
        './Script/Gothic.js': 1397,
        './Script/Grantha.js': 1398,
        './Script/Greek.js': 1399,
        './Script/Gujarati.js': 1400,
        './Script/Gunjala_Gondi.js': 1401,
        './Script/Gurmukhi.js': 1402,
        './Script/Han.js': 1403,
        './Script/Hangul.js': 1404,
        './Script/Hanifi_Rohingya.js': 1405,
        './Script/Hanunoo.js': 1406,
        './Script/Hatran.js': 1407,
        './Script/Hebrew.js': 1408,
        './Script/Hiragana.js': 1409,
        './Script/Imperial_Aramaic.js': 1410,
        './Script/Inherited.js': 1411,
        './Script/Inscriptional_Pahlavi.js': 1412,
        './Script/Inscriptional_Parthian.js': 1413,
        './Script/Javanese.js': 1414,
        './Script/Kaithi.js': 1415,
        './Script/Kannada.js': 1416,
        './Script/Katakana.js': 1417,
        './Script/Kayah_Li.js': 1418,
        './Script/Kharoshthi.js': 1419,
        './Script/Khitan_Small_Script.js': 1420,
        './Script/Khmer.js': 1421,
        './Script/Khojki.js': 1422,
        './Script/Khudawadi.js': 1423,
        './Script/Lao.js': 1424,
        './Script/Latin.js': 1425,
        './Script/Lepcha.js': 1426,
        './Script/Limbu.js': 1427,
        './Script/Linear_A.js': 1428,
        './Script/Linear_B.js': 1429,
        './Script/Lisu.js': 1430,
        './Script/Lycian.js': 1431,
        './Script/Lydian.js': 1432,
        './Script/Mahajani.js': 1433,
        './Script/Makasar.js': 1434,
        './Script/Malayalam.js': 1435,
        './Script/Mandaic.js': 1436,
        './Script/Manichaean.js': 1437,
        './Script/Marchen.js': 1438,
        './Script/Masaram_Gondi.js': 1439,
        './Script/Medefaidrin.js': 1440,
        './Script/Meetei_Mayek.js': 1441,
        './Script/Mende_Kikakui.js': 1442,
        './Script/Meroitic_Cursive.js': 1443,
        './Script/Meroitic_Hieroglyphs.js': 1444,
        './Script/Miao.js': 1445,
        './Script/Modi.js': 1446,
        './Script/Mongolian.js': 1447,
        './Script/Mro.js': 1448,
        './Script/Multani.js': 1449,
        './Script/Myanmar.js': 1450,
        './Script/Nabataean.js': 1451,
        './Script/Nandinagari.js': 1452,
        './Script/New_Tai_Lue.js': 1453,
        './Script/Newa.js': 1454,
        './Script/Nko.js': 1455,
        './Script/Nushu.js': 1456,
        './Script/Nyiakeng_Puachue_Hmong.js': 1457,
        './Script/Ogham.js': 1458,
        './Script/Ol_Chiki.js': 1459,
        './Script/Old_Hungarian.js': 1460,
        './Script/Old_Italic.js': 1461,
        './Script/Old_North_Arabian.js': 1462,
        './Script/Old_Permic.js': 1463,
        './Script/Old_Persian.js': 1464,
        './Script/Old_Sogdian.js': 1465,
        './Script/Old_South_Arabian.js': 1466,
        './Script/Old_Turkic.js': 1467,
        './Script/Oriya.js': 1468,
        './Script/Osage.js': 1469,
        './Script/Osmanya.js': 1470,
        './Script/Pahawh_Hmong.js': 1471,
        './Script/Palmyrene.js': 1472,
        './Script/Pau_Cin_Hau.js': 1473,
        './Script/Phags_Pa.js': 1474,
        './Script/Phoenician.js': 1475,
        './Script/Psalter_Pahlavi.js': 1476,
        './Script/Rejang.js': 1477,
        './Script/Runic.js': 1478,
        './Script/Samaritan.js': 1479,
        './Script/Saurashtra.js': 1480,
        './Script/Sharada.js': 1481,
        './Script/Shavian.js': 1482,
        './Script/Siddham.js': 1483,
        './Script/SignWriting.js': 1484,
        './Script/Sinhala.js': 1485,
        './Script/Sogdian.js': 1486,
        './Script/Sora_Sompeng.js': 1487,
        './Script/Soyombo.js': 1488,
        './Script/Sundanese.js': 1489,
        './Script/Syloti_Nagri.js': 1490,
        './Script/Syriac.js': 1491,
        './Script/Tagalog.js': 1492,
        './Script/Tagbanwa.js': 1493,
        './Script/Tai_Le.js': 1494,
        './Script/Tai_Tham.js': 1495,
        './Script/Tai_Viet.js': 1496,
        './Script/Takri.js': 1497,
        './Script/Tamil.js': 1498,
        './Script/Tangut.js': 1499,
        './Script/Telugu.js': 1500,
        './Script/Thaana.js': 1501,
        './Script/Thai.js': 1502,
        './Script/Tibetan.js': 1503,
        './Script/Tifinagh.js': 1504,
        './Script/Tirhuta.js': 1505,
        './Script/Ugaritic.js': 1506,
        './Script/Vai.js': 1507,
        './Script/Wancho.js': 1508,
        './Script/Warang_Citi.js': 1509,
        './Script/Yezidi.js': 1510,
        './Script/Yi.js': 1511,
        './Script/Zanabazar_Square.js': 1512,
        './Script_Extensions/Adlam.js': 1513,
        './Script_Extensions/Ahom.js': 1514,
        './Script_Extensions/Anatolian_Hieroglyphs.js': 1515,
        './Script_Extensions/Arabic.js': 1516,
        './Script_Extensions/Armenian.js': 1517,
        './Script_Extensions/Avestan.js': 1518,
        './Script_Extensions/Balinese.js': 1519,
        './Script_Extensions/Bamum.js': 1520,
        './Script_Extensions/Bassa_Vah.js': 1521,
        './Script_Extensions/Batak.js': 1522,
        './Script_Extensions/Bengali.js': 1523,
        './Script_Extensions/Bhaiksuki.js': 1524,
        './Script_Extensions/Bopomofo.js': 1525,
        './Script_Extensions/Brahmi.js': 1526,
        './Script_Extensions/Braille.js': 1527,
        './Script_Extensions/Buginese.js': 1528,
        './Script_Extensions/Buhid.js': 1529,
        './Script_Extensions/Canadian_Aboriginal.js': 1530,
        './Script_Extensions/Carian.js': 1531,
        './Script_Extensions/Caucasian_Albanian.js': 1532,
        './Script_Extensions/Chakma.js': 1533,
        './Script_Extensions/Cham.js': 1534,
        './Script_Extensions/Cherokee.js': 1535,
        './Script_Extensions/Chorasmian.js': 1536,
        './Script_Extensions/Common.js': 1537,
        './Script_Extensions/Coptic.js': 1538,
        './Script_Extensions/Cuneiform.js': 1539,
        './Script_Extensions/Cypriot.js': 1540,
        './Script_Extensions/Cyrillic.js': 1541,
        './Script_Extensions/Deseret.js': 1542,
        './Script_Extensions/Devanagari.js': 1543,
        './Script_Extensions/Dives_Akuru.js': 1544,
        './Script_Extensions/Dogra.js': 1545,
        './Script_Extensions/Duployan.js': 1546,
        './Script_Extensions/Egyptian_Hieroglyphs.js': 1547,
        './Script_Extensions/Elbasan.js': 1548,
        './Script_Extensions/Elymaic.js': 1549,
        './Script_Extensions/Ethiopic.js': 1550,
        './Script_Extensions/Georgian.js': 1551,
        './Script_Extensions/Glagolitic.js': 1552,
        './Script_Extensions/Gothic.js': 1553,
        './Script_Extensions/Grantha.js': 1554,
        './Script_Extensions/Greek.js': 1555,
        './Script_Extensions/Gujarati.js': 1556,
        './Script_Extensions/Gunjala_Gondi.js': 1557,
        './Script_Extensions/Gurmukhi.js': 1558,
        './Script_Extensions/Han.js': 1559,
        './Script_Extensions/Hangul.js': 1560,
        './Script_Extensions/Hanifi_Rohingya.js': 1561,
        './Script_Extensions/Hanunoo.js': 1562,
        './Script_Extensions/Hatran.js': 1563,
        './Script_Extensions/Hebrew.js': 1564,
        './Script_Extensions/Hiragana.js': 1565,
        './Script_Extensions/Imperial_Aramaic.js': 1566,
        './Script_Extensions/Inherited.js': 1567,
        './Script_Extensions/Inscriptional_Pahlavi.js': 1568,
        './Script_Extensions/Inscriptional_Parthian.js': 1569,
        './Script_Extensions/Javanese.js': 1570,
        './Script_Extensions/Kaithi.js': 1571,
        './Script_Extensions/Kannada.js': 1572,
        './Script_Extensions/Katakana.js': 1573,
        './Script_Extensions/Kayah_Li.js': 1574,
        './Script_Extensions/Kharoshthi.js': 1575,
        './Script_Extensions/Khitan_Small_Script.js': 1576,
        './Script_Extensions/Khmer.js': 1577,
        './Script_Extensions/Khojki.js': 1578,
        './Script_Extensions/Khudawadi.js': 1579,
        './Script_Extensions/Lao.js': 1580,
        './Script_Extensions/Latin.js': 1581,
        './Script_Extensions/Lepcha.js': 1582,
        './Script_Extensions/Limbu.js': 1583,
        './Script_Extensions/Linear_A.js': 1584,
        './Script_Extensions/Linear_B.js': 1585,
        './Script_Extensions/Lisu.js': 1586,
        './Script_Extensions/Lycian.js': 1587,
        './Script_Extensions/Lydian.js': 1588,
        './Script_Extensions/Mahajani.js': 1589,
        './Script_Extensions/Makasar.js': 1590,
        './Script_Extensions/Malayalam.js': 1591,
        './Script_Extensions/Mandaic.js': 1592,
        './Script_Extensions/Manichaean.js': 1593,
        './Script_Extensions/Marchen.js': 1594,
        './Script_Extensions/Masaram_Gondi.js': 1595,
        './Script_Extensions/Medefaidrin.js': 1596,
        './Script_Extensions/Meetei_Mayek.js': 1597,
        './Script_Extensions/Mende_Kikakui.js': 1598,
        './Script_Extensions/Meroitic_Cursive.js': 1599,
        './Script_Extensions/Meroitic_Hieroglyphs.js': 1600,
        './Script_Extensions/Miao.js': 1601,
        './Script_Extensions/Modi.js': 1602,
        './Script_Extensions/Mongolian.js': 1603,
        './Script_Extensions/Mro.js': 1604,
        './Script_Extensions/Multani.js': 1605,
        './Script_Extensions/Myanmar.js': 1606,
        './Script_Extensions/Nabataean.js': 1607,
        './Script_Extensions/Nandinagari.js': 1608,
        './Script_Extensions/New_Tai_Lue.js': 1609,
        './Script_Extensions/Newa.js': 1610,
        './Script_Extensions/Nko.js': 1611,
        './Script_Extensions/Nushu.js': 1612,
        './Script_Extensions/Nyiakeng_Puachue_Hmong.js': 1613,
        './Script_Extensions/Ogham.js': 1614,
        './Script_Extensions/Ol_Chiki.js': 1615,
        './Script_Extensions/Old_Hungarian.js': 1616,
        './Script_Extensions/Old_Italic.js': 1617,
        './Script_Extensions/Old_North_Arabian.js': 1618,
        './Script_Extensions/Old_Permic.js': 1619,
        './Script_Extensions/Old_Persian.js': 1620,
        './Script_Extensions/Old_Sogdian.js': 1621,
        './Script_Extensions/Old_South_Arabian.js': 1622,
        './Script_Extensions/Old_Turkic.js': 1623,
        './Script_Extensions/Oriya.js': 1624,
        './Script_Extensions/Osage.js': 1625,
        './Script_Extensions/Osmanya.js': 1626,
        './Script_Extensions/Pahawh_Hmong.js': 1627,
        './Script_Extensions/Palmyrene.js': 1628,
        './Script_Extensions/Pau_Cin_Hau.js': 1629,
        './Script_Extensions/Phags_Pa.js': 1630,
        './Script_Extensions/Phoenician.js': 1631,
        './Script_Extensions/Psalter_Pahlavi.js': 1632,
        './Script_Extensions/Rejang.js': 1633,
        './Script_Extensions/Runic.js': 1634,
        './Script_Extensions/Samaritan.js': 1635,
        './Script_Extensions/Saurashtra.js': 1636,
        './Script_Extensions/Sharada.js': 1637,
        './Script_Extensions/Shavian.js': 1638,
        './Script_Extensions/Siddham.js': 1639,
        './Script_Extensions/SignWriting.js': 1640,
        './Script_Extensions/Sinhala.js': 1641,
        './Script_Extensions/Sogdian.js': 1642,
        './Script_Extensions/Sora_Sompeng.js': 1643,
        './Script_Extensions/Soyombo.js': 1644,
        './Script_Extensions/Sundanese.js': 1645,
        './Script_Extensions/Syloti_Nagri.js': 1646,
        './Script_Extensions/Syriac.js': 1647,
        './Script_Extensions/Tagalog.js': 1648,
        './Script_Extensions/Tagbanwa.js': 1649,
        './Script_Extensions/Tai_Le.js': 1650,
        './Script_Extensions/Tai_Tham.js': 1651,
        './Script_Extensions/Tai_Viet.js': 1652,
        './Script_Extensions/Takri.js': 1653,
        './Script_Extensions/Tamil.js': 1654,
        './Script_Extensions/Tangut.js': 1655,
        './Script_Extensions/Telugu.js': 1656,
        './Script_Extensions/Thaana.js': 1657,
        './Script_Extensions/Thai.js': 1658,
        './Script_Extensions/Tibetan.js': 1659,
        './Script_Extensions/Tifinagh.js': 1660,
        './Script_Extensions/Tirhuta.js': 1661,
        './Script_Extensions/Ugaritic.js': 1662,
        './Script_Extensions/Vai.js': 1663,
        './Script_Extensions/Wancho.js': 1664,
        './Script_Extensions/Warang_Citi.js': 1665,
        './Script_Extensions/Yezidi.js': 1666,
        './Script_Extensions/Yi.js': 1667,
        './Script_Extensions/Zanabazar_Square.js': 1668,
        './index.js': 1669,
        './unicode-version.js': 1670
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1265);
    },
    142: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'c', function() {
        return Arrays_NestedForm;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return AlternateSyntax;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return HugeArrayForm;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return Swap;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        Code = __webpack_require__(4),
        src = __webpack_require__(1),
        FormState = (Object(withDocs.a)(
          '# Array of fields\n\nFields can also be associated with an array. Here is an example where you can input three friends.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\n<Form id="array-form">\n  <label htmlFor="array-friend-1">Friend1</label>\n  <Text field="friends[0]" id="array-friend-1" />\n  <label htmlFor="array-friend-2">Friend2</label>\n  <Text field="friends[1]" id="array-friend-2" />\n  <label htmlFor="array-friend-3">Friend3</label>\n  <Text field="friends[2]" id="array-friend-3" />\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function TextInput() {
            return react_default.a.createElement(
              src.Form,
              { id: 'array-form' },
              function(_ref) {
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    'label',
                    { htmlFor: 'array-friend-1' },
                    'Friend1'
                  ),
                  react_default.a.createElement(src.Text, {
                    field: 'friends[0]',
                    id: 'array-friend-1'
                  }),
                  react_default.a.createElement(
                    'label',
                    { htmlFor: 'array-friend-2' },
                    'Friend2'
                  ),
                  react_default.a.createElement(src.Text, {
                    field: 'friends[1]',
                    id: 'array-friend-2'
                  }),
                  react_default.a.createElement(
                    'label',
                    { htmlFor: 'array-friend-3' },
                    'Friend3'
                  ),
                  react_default.a.createElement(src.Text, {
                    field: 'friends[2]',
                    id: 'array-friend-3'
                  }),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.values, null, 2)
                  )
                );
              }
            );
          }
        ),
        Object(withDocs.a)(
          '# Array of scopes\n\nScopes can also be associated with an array. Here is an example where you can input two friends.\nwhere a friend consists of a first and last name.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, Scope } from \'informed\';\n\n<Form id="array-form">\n  <h5>Friend1</h5>\n  <Scope scope="friends[0]">\n    <label htmlFor="friend-1-firstname">Firstname</label>\n    <Text field="firstname" id="friend-1-firstname" />\n    <label htmlFor="friend-1-lastname">Lastname</label>\n    <Text field="lastname" id="friend-1-lastname" />\n  </Scope>\n  <h5>Friend2</h5>\n  <Scope scope="friends[1]">\n    <label htmlFor="friend-2-firstname">Firstname</label>\n    <Text field="firstname" id="friend-2-firstname" />\n    <label htmlFor="friend-2-lastname">Lastname</label>\n    <Text field="lastname" id="friend-2-lastname" />\n  </Scope>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function ArrayOfScopes() {
            return react_default.a.createElement(
              src.Form,
              { id: 'scope-array-form' },
              function(_ref) {
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement('h5', null, 'Friend1'),
                  react_default.a.createElement(
                    src.Scope,
                    { scope: 'friends[0]' },
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'friend-1-firstname' },
                      'Firstname'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'firstname',
                      id: 'friend-1-firstname'
                    }),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'friend-1-lastname' },
                      'Lastname'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'lastname',
                      id: 'friend-1-lastname'
                    })
                  ),
                  react_default.a.createElement('h5', null, 'Friend2'),
                  react_default.a.createElement(
                    src.Scope,
                    { scope: 'friends[1]' },
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'friend-2-firstname' },
                      'Firstname'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'firstname',
                      id: 'friend-2-firstname'
                    }),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'friend-2-lastname' },
                      'Lastname'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'lastname',
                      id: 'friend-2-lastname'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.values, null, 2)
                  )
                );
              }
            );
          }
        ),
        __webpack_require__(190),
        __webpack_require__(5)),
        initialValues = {
          friends: [{ name: 'Joe', age: '20' }, { name: 'Jane', age: '20' }]
        },
        Arrays_NestedForm = Object(withDocs.a)(
          "# Nested form\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, ArrayField } from 'informed';\n\nconst initialValues = {\n  friends: [\n    {\n      name: 'Joe',\n      age: '20'\n    },\n    {\n      name: 'Jane',\n      age: '20'\n    }\n  ]\n};\n\nconst NestedForm = () => {\n  return (\n    <div>\n      <Form initialValues={initialValues}>\n        <ArrayField field=\"siblings\">\n          {({ add, reset }) => (\n            <>\n              <button\n                onClick={() => {\n                  reset();\n                }}\n                type=\"button\">\n                Reset\n              </button>\n              <button\n                onClick={() => {\n                  add();\n                }}\n                type=\"button\">\n                Add\n              </button>\n\n              <button\n                onClick={() => {\n                  addWithInitialValue({ name: 'test' });\n                }}>\n                Add with initialValue\n              </button>\n\n              <button\n                onClick={() => {\n                  formApi.setValue('friends[0].name', 'Test');\n                }}\n                type=\"button\">\n                set friends[0].name to test\n              </button>\n\n              <ArrayField.Items>\n                {({ remove, field, reset, values, setValue }) => (\n                  <label>\n                    <h5>{field}</h5>\n                    <Text field={`${field}.name`} />\n                    <Text field={`${field}.age`} />\n                    <button type=\"button\" onClick={reset}>\n                      Reset\n                    </button>\n                    <button type=\"button\" onClick={remove}>\n                      Remove\n                    </button>\n                    <button\n                      type=\"button\"\n                      onClick={() => setValue('name', 'Elon')}>\n                      Set Name to \"Elon\"\n                    </button>\n                    <pre>\n                      <code>{JSON.stringify(values, null, 2)}</code>\n                    </pre>\n                  </label>\n                )}\n              </ArrayField.Items>\n            </>\n          )}\n        </ArrayField>\n        <button type=\"submit\">Submit</button>\n      </Form>\n    </div>\n  );\n};\n```\n",
          function NestedForm() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { initialValues: initialValues },
                function(_ref) {
                  _ref.formApi, _ref.formState;
                  return react_default.a.createElement(
                    'div',
                    { style: { display: 'flex', flexWrap: 'wrap' } },
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 1, marginRight: '2rem' } },
                      react_default.a.createElement(
                        src.ArrayField,
                        { field: 'friends' },
                        function(_ref2) {
                          var add = _ref2.add,
                            addWithInitialValue = _ref2.addWithInitialValue,
                            reset = _ref2.reset;
                          return react_default.a.createElement(
                            react_default.a.Fragment,
                            null,
                            react_default.a.createElement(
                              'button',
                              {
                                onClick: function onClick() {
                                  reset();
                                },
                                type: 'button'
                              },
                              'Reset'
                            ),
                            react_default.a.createElement(
                              'button',
                              {
                                onClick: function onClick() {
                                  add();
                                },
                                type: 'button'
                              },
                              'Add'
                            ),
                            react_default.a.createElement(
                              'button',
                              {
                                onClick: function onClick() {
                                  addWithInitialValue({ name: 'test' });
                                }
                              },
                              'Add with initialValue'
                            ),
                            react_default.a.createElement(
                              src.ArrayField.Items,
                              null,
                              function(_ref3) {
                                var remove = _ref3.remove,
                                  field = _ref3.field,
                                  reset = _ref3.reset,
                                  values = _ref3.values,
                                  setValue = _ref3.setValue;
                                return react_default.a.createElement(
                                  'label',
                                  null,
                                  react_default.a.createElement(
                                    'h5',
                                    null,
                                    field
                                  ),
                                  react_default.a.createElement(src.Text, {
                                    field: ''.concat(field, '.name')
                                  }),
                                  react_default.a.createElement(src.Text, {
                                    field: ''.concat(field, '.age')
                                  }),
                                  react_default.a.createElement(
                                    'button',
                                    { type: 'button', onClick: reset },
                                    'Reset'
                                  ),
                                  react_default.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      onClick: function onClick() {
                                        return setValue('name', 'Elon');
                                      }
                                    },
                                    'Set Name to "Elon"'
                                  ),
                                  react_default.a.createElement(
                                    'button',
                                    { type: 'button', onClick: remove },
                                    'Remove'
                                  ),
                                  react_default.a.createElement(
                                    'pre',
                                    null,
                                    react_default.a.createElement(
                                      'code',
                                      null,
                                      JSON.stringify(values, null, 2)
                                    )
                                  )
                                );
                              }
                            )
                          );
                        }
                      )
                    ),
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 2, minWidth: '300px' } },
                      react_default.a.createElement(FormState.a, null)
                    )
                  );
                }
              )
            );
          }
        ),
        AlternateSyntax = Object(withDocs.a)(
          '# Dynamic Array of fields\n\nFields can also be associated with an dynamic array. Here is an example where you can add many siblings!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, ArrayField } from \'informed\';\n\nconst DynamicArrays = () => {\n  return (\n    <div>\n      <Form initialValues={{ siblings: [\'foo\', \'bar\', \'baz\'] }}>\n        <h5>You:</h5>\n        <label>\n          Your Name: <Text field="name" />\n        </label>\n        <h5>Siblings:</h5>\n        <ArrayField field="siblings">\n          {({ add, reset }) => (\n            <>\n              <button type="button" onClick={add}>\n                Add Sibling\n              </button>\n              <button type="button" onClick={reset}>\n                Reset Siblings\n              </button>\n              <ArrayField.Items>\n                {({ remove, field, index }) => (\n                  <label>\n                    Sibling {index}:<Text field={field} />\n                    <button type="button" onClick={remove}>\n                      Remove\n                    </button>\n                  </label>\n                )}\n              </ArrayField.Items>\n            </>\n          )}\n        </ArrayField>\n        <button type="submit">Submit</button>\n      </Form>\n    </div>\n  );\n};\n```\n',
          function ArrayFieldExample() {
            return react_default.a.createElement(
              src.Form,
              { initialValues: { siblings: ['foo', 'bar', 'baz'] } },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '1rem' } },
                  react_default.a.createElement('h5', null, 'You:'),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Your Name: ',
                    react_default.a.createElement(src.Text, { field: 'name' })
                  ),
                  react_default.a.createElement('h5', null, 'Siblings:'),
                  react_default.a.createElement(
                    src.ArrayField,
                    { field: 'siblings' },
                    function(_ref) {
                      var add = _ref.add,
                        reset = _ref.reset;
                      return react_default.a.createElement(
                        react_default.a.Fragment,
                        null,
                        react_default.a.createElement(
                          'button',
                          { type: 'button', onClick: add },
                          'Add Sibling'
                        ),
                        react_default.a.createElement(
                          'button',
                          { onClick: reset, type: 'button' },
                          'Reset Siblings'
                        ),
                        react_default.a.createElement(
                          src.ArrayField.Items,
                          null,
                          function(_ref2) {
                            var remove = _ref2.remove,
                              field = _ref2.field,
                              index = _ref2.index;
                            return react_default.a.createElement(
                              'label',
                              null,
                              'Sibling ',
                              index,
                              ':',
                              react_default.a.createElement(src.Text, {
                                field: field
                              }),
                              react_default.a.createElement(
                                'button',
                                { type: 'button', onClick: remove },
                                'Remove'
                              )
                            );
                          }
                        )
                      );
                    }
                  ),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2 } },
                  react_default.a.createElement(FormState.a, { values: !0 })
                )
              )
            );
          }
        ),
        HugeArrayForm_initialValues = {
          friends: Array.from(Array(50)).map(function(e) {
            return { name: 'Joe', age: 26 };
          })
        },
        HugeArrayForm = Object(withDocs.a)(
          '# Huge Array form\n\n```jsx\nimport { Form, Text, ArrayField } from \'informed\';\n\nconst friends = Array.from(Array(50)).map(e => {\n  return { name: \'Joe\', age: 26 };\n});\n\nconst initialValues = {\n  friends\n};\n\nconst HugeArrayForm = () => {\n  return (\n    <div>\n      <Form initialValues={initialValues}>\n        <ArrayField field="siblings">\n          {({ add, reset }) => (\n            <>\n              <button\n                onClick={() => {\n                  reset();\n                }}\n                type="button">\n                Reset\n              </button>\n              <button\n                onClick={() => {\n                  add();\n                }}\n                type="button">\n                Add\n              </button>\n              <ArrayField.Items>\n                {({ remove, field, reset, initialValue, values, setValue }) => (\n                  <label>\n                    <h5>{field}</h5>\n                    <Text\n                      field={`${field}.name`}\n                      initialValue={initialValue && initialValue.name}\n                    />\n                    <Text field={`${field}.age`} />\n                    <Text\n                        field={`${field}.name`}\n                        initialValue={initialValue && initialValue.name}\n                      />\n                    <Text field={`${field}.age`} />\n                    <Text field={`${field}.a`} />\n                    <Text field={`${field}.b`} />\n                    <Text field={`${field}.c`} />\n                    <Text field={`${field}.d`} />\n                    <Text field={`${field}.e`} />\n                    <Text field={`${field}.f`} />\n                    <Text field={`${field}.g`} />\n                    <Text field={`${field}.h`} />\n                    <Text field={`${field}.i`} />\n                    <Text field={`${field}.j`} />\n                    <Text field={`${field}.k`} />\n                    <Text field={`${field}.l`} />\n                    <Text field={`${field}.m`} />\n                    <button type="button" onClick={reset}>\n                      Reset\n                    </button>\n                    <button type="button" onClick={remove}>\n                      Remove\n                    </button>\n                    <button\n                      type="button"\n                      onClick={() => setValue(\'name\', \'Elon\')}>\n                      Set Name to "Elon"\n                    </button>\n                  </label>\n                )}\n              </ArrayField.Items>\n            </>\n          )}\n        </ArrayField>\n        <button type="submit">Submit</button>\n      </Form>\n    </div>\n  );\n};\n```\n\n\x3c!-- STORY --\x3e',
          function NestedForm() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                {
                  initialValues: HugeArrayForm_initialValues,
                  onSubmit: function onSubmit(values) {
                    return console.log(values);
                  }
                },
                react_default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    ),
                    react_default.a.createElement(
                      src.ArrayField,
                      { field: 'friends' },
                      function(_ref) {
                        var add = _ref.add,
                          addWithInitialValue = _ref.addWithInitialValue,
                          reset = _ref.reset;
                        return react_default.a.createElement(
                          react_default.a.Fragment,
                          null,
                          react_default.a.createElement(
                            'button',
                            {
                              onClick: function onClick() {
                                reset();
                              },
                              type: 'button'
                            },
                            'Reset'
                          ),
                          react_default.a.createElement(
                            'button',
                            {
                              onClick: function onClick() {
                                add();
                              },
                              type: 'button'
                            },
                            'Add'
                          ),
                          react_default.a.createElement(
                            'button',
                            {
                              onClick: function onClick() {
                                addWithInitialValue({ name: 'test' });
                              }
                            },
                            'Add with initialValue'
                          ),
                          react_default.a.createElement(
                            src.ArrayField.Items,
                            null,
                            function(_ref2) {
                              var remove = _ref2.remove,
                                field = _ref2.field,
                                reset = _ref2.reset,
                                initialValue = _ref2.initialValue,
                                setValue = (_ref2.values, _ref2.setValue);
                              return react_default.a.createElement(
                                'label',
                                null,
                                react_default.a.createElement(
                                  'h5',
                                  null,
                                  field
                                ),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.name'),
                                  initialValue:
                                    initialValue && initialValue.name
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.age')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.a')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.b')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.c')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.d')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.e')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.f')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.g')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.h')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.i')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.j')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.k')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.l')
                                }),
                                react_default.a.createElement(src.Text, {
                                  field: ''.concat(field, '.m')
                                }),
                                react_default.a.createElement(
                                  'button',
                                  { type: 'button', onClick: reset },
                                  'Reset'
                                ),
                                react_default.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    onClick: function onClick() {
                                      return setValue('name', 'Elon');
                                    }
                                  },
                                  'Set Name to "Elon"'
                                ),
                                react_default.a.createElement(
                                  'button',
                                  { type: 'button', onClick: remove },
                                  'Remove'
                                )
                              );
                            }
                          )
                        );
                      }
                    )
                  ),
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 2, minWidth: '300px' } },
                    react_default.a.createElement(FormState.a, null)
                  )
                )
              )
            );
          }
        ),
        Swap_initialValues = {
          friends: [{ name: 'Joe', age: '20' }, { name: 'Jane', age: '20' }]
        },
        Swap = Object(withDocs.a)(
          '# Nested form\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, ArrayField } from \'informed\';\n\nconst initialValues = {\n  friends: [\n    {\n      name: \'Joe\',\n      age: \'20\'\n    },\n    {\n      name: \'Jane\',\n      age: \'20\'\n    }\n  ]\n};\n\nconst NestedForm = () => {\n  return (\n    <div>\n      <Form initialValues={initialValues}>\n        <ArrayField field="siblings">\n          {({ add, reset, swap }) => (\n            <>\n              <button\n                onClick={() => {\n                  reset();\n                }}\n                type="button">\n                Reset\n              </button>\n              <button\n                onClick={() => {\n                  add();\n                }}\n                type="button">\n                Add\n              </button>\n              <button\n                onClick={() => {\n                  formApi.setValue(\'friends[0].name\', \'Test\');\n                }}\n                type="button">\n                set friends[0].name to test\n              </button>\n\n              <ArrayField.Items>\n                {({ remove, field, reset, values, setValue }) => (\n                  <label>\n                    <h5>{field}</h5>\n                    <Text field={`${field}.name`} />\n                    <Text field={`${field}.age`} />\n                    <button type="button" onClick={reset}>\n                      Reset\n                    </button>\n                    <button type="button" onClick={remove}>\n                      Remove\n                    </button>\n                    <button\n                      type="button"\n                      onClick={() => setValue(\'name\', \'Elon\')}>\n                      Set Name to "Elon"\n                    </button>\n                    <button\n                      type="button"\n                      onClick={() => swap(index, index + 1)}>\n                      Swap\n                    </button>\n                    <pre>\n                      <code>{JSON.stringify(values, null, 2)}</code>\n                    </pre>\n                  </label>\n                )}\n              </ArrayField.Items>\n            </>\n          )}\n        </ArrayField>\n        <button type="submit">Submit</button>\n      </Form>\n    </div>\n  );\n};\n```\n',
          function NestedForm() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { initialValues: Swap_initialValues },
                function(_ref) {
                  _ref.formApi, _ref.formState;
                  return react_default.a.createElement(
                    'div',
                    { style: { display: 'flex', flexWrap: 'wrap' } },
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 1, marginRight: '2rem' } },
                      react_default.a.createElement(
                        src.ArrayField,
                        { field: 'friends' },
                        function(_ref2) {
                          var add = _ref2.add,
                            reset = _ref2.reset,
                            swap = _ref2.swap;
                          return react_default.a.createElement(
                            react_default.a.Fragment,
                            null,
                            react_default.a.createElement(
                              'button',
                              {
                                onClick: function onClick() {
                                  reset();
                                },
                                type: 'button'
                              },
                              'Reset'
                            ),
                            react_default.a.createElement(
                              'button',
                              {
                                onClick: function onClick() {
                                  add();
                                },
                                type: 'button'
                              },
                              'Add'
                            ),
                            react_default.a.createElement(
                              src.ArrayField.Items,
                              null,
                              function(_ref3) {
                                var remove = _ref3.remove,
                                  field = _ref3.field,
                                  reset = _ref3.reset,
                                  values = _ref3.values,
                                  setValue = _ref3.setValue,
                                  index = _ref3.index;
                                return react_default.a.createElement(
                                  'label',
                                  null,
                                  react_default.a.createElement(
                                    'h5',
                                    null,
                                    field
                                  ),
                                  react_default.a.createElement(src.Text, {
                                    field: ''.concat(field, '.name')
                                  }),
                                  react_default.a.createElement(src.Text, {
                                    field: ''.concat(field, '.age')
                                  }),
                                  react_default.a.createElement(
                                    'button',
                                    { type: 'button', onClick: reset },
                                    'Reset'
                                  ),
                                  react_default.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      onClick: function onClick() {
                                        return setValue('name', 'Elon');
                                      }
                                    },
                                    'Set Name to "Elon"'
                                  ),
                                  react_default.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      onClick: function onClick() {
                                        return swap(index, index + 1);
                                      }
                                    },
                                    'Swap'
                                  ),
                                  react_default.a.createElement(
                                    'button',
                                    { type: 'button', onClick: remove },
                                    'Remove'
                                  ),
                                  react_default.a.createElement(
                                    'pre',
                                    null,
                                    react_default.a.createElement(
                                      'code',
                                      null,
                                      JSON.stringify(values, null, 2)
                                    )
                                  )
                                );
                              }
                            )
                          );
                        }
                      )
                    ),
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 2, minWidth: '300px' } },
                      react_default.a.createElement(FormState.a, null)
                    )
                  );
                }
              )
            );
          }
        );
    },
    143: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'c', function() {
        return HOC_WithFormApi;
      }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return HOC_WithFormState;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return HOC_WithFieldApi;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return HOC_WithFieldState;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        ComponentWithFormApi = Object(src.withFormApi)(function SomeComponent(
          props
        ) {
          return react_default.a.createElement(
            'button',
            {
              type: 'button',
              onClick: function onClick() {
                return props.formApi.setValue(
                  'name',
                  Math.floor(
                    Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)
                  )
                );
              }
            },
            'Random'
          );
        }),
        HOC_WithFormApi = Object(withDocs.a)(
          '# With Form Api\n\nThe `withFormApi` HOC will allow you to gain access to the formApi.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, withFormApi } from \'informed\';\n\nconst SomeComponent = props => (\n  <button type="button" onClick={()=>\n    props.formApi.setValue(\n      \'name\', \n      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>\n    Random\n  </button>\n);\n\nconst ComponentWithFormApi = withFormApi(SomeComponent);\n\n<Form>\n  <div>\n    <label>Name:<Text field="name"/></label>\n    <button type="submit">Submit</button>\n    <h5>Component with formApi:</h5>\n    <ComponentWithFormApi />\n  </div>\n</Form>\n```\n',
          function WithFormApi() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Name:',
                  react_default.a.createElement(src.Text, { field: 'name' })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement(
                  'h5',
                  null,
                  'Component with formApi:'
                ),
                react_default.a.createElement(ComponentWithFormApi, null)
              )
            );
          }
        ),
        ComponentWithFormState = Object(src.withFormState)(
          function SomeComponent(props) {
            return react_default.a.createElement(
              'pre',
              null,
              react_default.a.createElement(
                'code',
                null,
                JSON.stringify(props.formState, null, 2)
              )
            );
          }
        ),
        HOC_WithFormState = Object(withDocs.a)(
          '# With Form State\n\nThe `withFormState` HOC will allow you to gain access to the formState.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, withFormState } from \'informed\';\n\nconst SomeComponent = props => (\n  <pre>\n    <code>{JSON.stringify(props.formState, null, 2)}</code>\n  </pre>\n);\n\nconst ComponentWithFormState = withFormState(SomeComponent);\n\n<Form>\n  <label>Name:<Text field="name"/></label>\n  <button type="submit">Submit</button>\n  <h5>Component with formState:</h5>\n  <ComponentWithFormState />\n</Form>\n```\n',
          function WithFormState() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'label',
                null,
                'Name:',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(
                'h5',
                null,
                'Component with formState:'
              ),
              react_default.a.createElement(ComponentWithFormState, null)
            );
          }
        ),
        ComponentWithFieldApi = Object(src.withFieldApi)('name')(
          function SomeComponent(props) {
            return react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return props.fieldApi.setValue(
                    Math.floor(
                      Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)
                    )
                  );
                }
              },
              'Random'
            );
          }
        ),
        HOC_WithFieldApi = Object(withDocs.a)(
          '# With Field Api\n\nThe `withFieldApi` HOC will allow you to gain access to a fields api.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, withFieldApi } from \'informed\';\n\nconst SomeComponent = props => (\n  <button type="button" onClick={()=>\n    props.fieldApi.setValue(\n      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>\n    Random\n  </button>\n);\n\nconst ComponentWithFieldApi = withFieldApi(\'name\')(SomeComponent);\n\n<Form>\n  <label>Name: <Text field="name"/></label>\n  <button type="submit">Submit</button>\n  <h5>Component with fieldApi:</h5>\n  <ComponentWithFieldApi />\n</Form>\n```\n',
          function WithFieldApi() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'label',
                null,
                'Name: ',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(
                'h5',
                null,
                'Component with fieldApi:'
              ),
              react_default.a.createElement(ComponentWithFieldApi, null)
            );
          }
        ),
        ComponentWithFieldState = Object(src.withFieldState)('name')(
          function SomeComponent(props) {
            return react_default.a.createElement(
              'pre',
              null,
              react_default.a.createElement(
                'code',
                null,
                JSON.stringify(props.fieldState, null, 2)
              )
            );
          }
        ),
        HOC_WithFieldState = Object(withDocs.a)(
          '# With Field State\n\nThe `withFieldState` HOC will allow you to gain access to a fields state.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, withFieldState } from \'informed\';\n\nconst SomeComponent = props => (\n <pre>\n   <code>\n     {JSON.stringify(props.fieldState, null, 2)}\n   </code>\n </pre>\n);\n\nconst ComponentWithFieldState = withFieldState(\'name\')(SomeComponent);\n\n<Form id="withFieldState-form">\n  <label>Name:<Text field="name"/></label>\n  <button type="submit">Submit</button>\n  <h5>Component with fieldState:</h5>\n  <ComponentWithFieldState />\n</Form>\n```\n',
          function WithFieldState() {
            return react_default.a.createElement(
              src.Form,
              { id: 'withFieldState-form' },
              react_default.a.createElement(
                'label',
                null,
                'Name:',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(
                'h5',
                null,
                'Component with fieldState:'
              ),
              react_default.a.createElement(ComponentWithFieldState, null)
            );
          }
        );
    },
    1701: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        Basic_Step1 = function Step1(_ref) {
          var next = _ref.next;
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'label',
              null,
              'Please enter your first name:',
              react_default.a.createElement(src.Text, {
                field: 'first',
                validate: validate,
                keepState: !0
              })
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: next },
              'Next'
            )
          );
        },
        Basic_Step2 = function Step2(_ref2) {
          var back = _ref2.back,
            next = _ref2.next;
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'label',
              null,
              'Please enter your last name:',
              react_default.a.createElement(src.Text, {
                field: 'last',
                validate: validate,
                keepState: !0
              })
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: next },
              'Next'
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: back },
              'Back'
            )
          );
        },
        Basic_Step3 = function Step3(_ref3) {
          var back = _ref3.back;
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'label',
              null,
              'Please enter your favorite color:',
              react_default.a.createElement(src.Text, {
                field: 'color',
                validate: validate,
                keepState: !0
              })
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: back },
              'Back'
            ),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            )
          );
        },
        Basic_Step = function Step() {
          var _useFormApi = Object(src.useFormApi)(),
            next = _useFormApi.next,
            back = _useFormApi.back,
            step = Object(src.useFormState)().step;
          return 0 === step
            ? react_default.a.createElement(Basic_Step1, { next: next })
            : 1 === step
              ? react_default.a.createElement(Basic_Step2, {
                  next: next,
                  back: back
                })
              : 2 === step
                ? react_default.a.createElement(Basic_Step3, { back: back })
                : void 0;
        };
      Object(withDocs.a)(
        '# Multistep Form\n\nSomtimes you need to create a form with multiple steps. This can easliy be done with informed. \nBelow is an example of a form that has three steps. It will not proceed to the next step, \nunless the previous step is valid! It will also clear out errors from proceeding steps when \nyou go back :) \n\nNote one very important thing in this example.\n\n1. the use of the `keepState` prop\n\nThe keep state guarentees that the state is kept from step to step when the fields are "unrendered". \n\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFormApi, useFormState } from \'informed\';\n\nconst validate = (value) => {\n  return !value || value.length < 5 ? \'Field must be at least five characters\' : undefined;\n};\n\nconst Step1 = ({ next }) => {\n  return (\n    <div>\n      <label>\n        Please enter your first name:\n        <Text field="first" validate={validate} keepState />\n      </label>\n      <button type="button" onClick={next}>Next</button>\n    </div>\n  );\n};\n\nconst Step2 = ({ back, next }) => {\n  return (\n    <div>\n      <label>\n        Please enter your last name:\n        <Text field="last" validate={validate} keepState />\n      </label>\n      <button type="button" onClick={next}>Next</button>\n      <button type="button" onClick={back}>Back</button>\n    </div>\n  );\n};\n\nconst Step3 = ({ back }) => {\n  return (\n    <div>\n      <label>\n        Please enter your favorite color:\n        <Text field="color" validate={validate} keepState />\n      </label>\n      <button type="button" onClick={back}>Back</button>\n      <button type="submit" >Submit</button>\n    </div>\n  );\n};\n\nconst Step = () => {\n\n  const { next, back } = useFormApi();\n  const { step } = useFormState();\n\n  if (step === 0) return <Step1 next={next} />;\n  if (step === 1) return <Step2 next={next} back={back} />;\n  if (step === 2) return <Step3 back={back} />;\n\n};\n\n<Form>\n  <Step />\n</Form>\n```\n',
        function Basic() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { id: 'basic-form' },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(Basic_Step, null)
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, {
                    errors: !0,
                    values: !0
                  })
                )
              )
            )
          );
        }
      );
    },
    1702: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        format = function format(value) {
          return null != value ? '$'.concat(value) : value;
        },
        parse = function parse(value) {
          return null != value ? value.replace('$', '') : value;
        };
      Object(withDocs.a)(
        "# Format and Parse\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from 'informed';\n\nconst format = value => value != null ? `$${value}` : value;\nconst parse = value => value != null ? value.replace('$','') : value;\n\n<Form>\n  <label>\n  First name:\n  <Text field=\"name\" format={format} parse={parse} />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
        function FormatParse() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                'label',
                null,
                'First name:',
                react_default.a.createElement(src.Text, {
                  field: 'name',
                  format: format,
                  parse: parse
                })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(FormState.a, null)
            )
          );
        }
      );
    },
    1703: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        mask = function mask(value) {
          if (null == value) return { offset: 0, value: value };
          var sections = value.replace(/[^0-9/]/g, '').split(/(\/)/),
            offset = 0,
            v = ''.concat(sections[0].slice(0, 2));
          return (
            2 == sections[0].length &&
              '/' != sections[1] &&
              ((v = ''.concat(v, '/')), (offset += 1)),
            sections[1] && (v = ''.concat(v).concat(sections[1])),
            sections[2] && (v = ''.concat(v).concat(sections[2].slice(0, 2))),
            sections[2] &&
              2 == sections[2].length &&
              '/' != sections[3] &&
              ((v = ''.concat(v, '/')), (offset += 1)),
            sections[3] && (v = ''.concat(v).concat(sections[3])),
            sections[4] && (v = ''.concat(v).concat(sections[4].slice(0, 4))),
            { value: v, offset: offset }
          );
        };
      Object(withDocs.a)(
        "# Mask With Cursor Offset\n\nMasking values and offseting the cursor is made simple with the use of the `maskWithCursorOffset` function. Please NOTE! \nthe use of the `maintainCursor` prop. This is not always necessary, but in the following\nexample was needed! If you remove it the cursor will jump to the end every time the user types.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from 'informed';\n\n/**\n * Goal: Mask the input depending on where the user is typing\n * \n * M M / D D / Y Y Y Y\n */\nconst mask = value => {\n\n  if (value == null) return { offset: 0, value };\n\n  // Take the current value and blow it into sections\n  // M M / D D / Y Y Y Y ------\x3e [ M M, /, D D, /, Y Y Y Y ]\n  // M / D D / Y Y Y Y   ------\x3e [ M, /, D D, /, Y Y Y Y ]\n  // M                   ------\x3e [ M ]\n  // M M                 ------\x3e [ M M ]\n  // / D D / Y Y Y Y     ------\x3e [ /, D D, /, Y Y Y Y ]\n  const sections = value.replace(/[^0-9/]/g, '').split(/(\\/)/);\n\n  // Fill in sections\n  let offset = 0;\n  let v = `${sections[0].slice(0, 2)}`;\n\n  // Add slash after first section if it needs to be added\n  if (sections[0].length == 2 && sections[1] != '/') {\n    v = `${v}/`;\n    offset += 1;\n  }\n\n  // Add next section\n  if (sections[1]) v = `${v}${sections[1]}`;\n\n  // Add next section\n  if (sections[2]) v = `${v}${sections[2].slice(0, 2)}`;\n\n  // Add slash after third section if it needs to be added\n  if (sections[2] && sections[2].length == 2 && sections[3] != '/') {\n    v = `${v}/`;\n    offset += 1;\n  }\n\n  // Add next section\n  if (sections[3]) v = `${v}${sections[3]}`;\n\n  // Add next section\n  if (sections[4]) v = `${v}${sections[4]}`;\n\n  return { value: v, offset };\n};\n\n<Form>\n  <label>\n  Date:\n  <Text \n    field=\"date\" \n    maxLength=\"10\"\n    maskWithCursorOffset={mask} \n    maintainCursor/>\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
        function Mask() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                'label',
                null,
                'Date:',
                react_default.a.createElement(src.Text, {
                  field: 'date',
                  maxLength: '10',
                  maskWithCursorOffset: mask,
                  maintainCursor: !0
                })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(FormState.a, null)
            )
          );
        }
      );
    },
    1704: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        schema = {};
      Object(withDocs.a)(
        '# Huge Schema\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from \'informed\';\n\nconst Schema = () => (\n  <Form schema={schema}>\n    <SchemaFields />\n    <button type="submit">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n',
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            { schema: schema },
            react_default.a.createElement(src.SchemaFields, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(FormState.a, null)
          );
        }
      );
    },
    189: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _hooks_useFormState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          40
        );
      __webpack_exports__.a = function FormState(props) {
        var formState = Object(
            _hooks_useFormState__WEBPACK_IMPORTED_MODULE_1__.a
          )(),
          displayState = {};
        Object.keys(props).length > 0
          ? Object.keys(props).forEach(function(key) {
              displayState[key] = formState[key];
            })
          : (displayState = formState);
        var _displayState = displayState,
          pristine = _displayState.pristine,
          dirty = _displayState.dirty,
          invalid = _displayState.invalid,
          values = _displayState.values,
          errors = _displayState.errors,
          touched = _displayState.touched,
          validating = _displayState.validating,
          submitting = _displayState.submitting;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'pre',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'code',
            null,
            JSON.stringify(
              {
                pristine: pristine,
                dirty: dirty,
                invalid: invalid,
                values: values,
                errors: errors,
                touched: touched,
                validating: validating,
                submitting: submitting
              },
              null,
              2
            )
          )
        );
      };
    },
    190: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1);
      var DynamicArrays_DynamicArraysContent = function DynamicArraysContent() {
        return react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            src.Form,
            { initialValues: { siblings: ['foo', 'bar', 'baz'] } },
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { flex: 1, marginRight: '1rem' } },
                react_default.a.createElement('h5', null, 'You:'),
                react_default.a.createElement(
                  'label',
                  null,
                  'Your Name: ',
                  react_default.a.createElement(src.Text, { field: 'name' })
                ),
                react_default.a.createElement('h5', null, 'Siblings:'),
                react_default.a.createElement(
                  src.ArrayField,
                  { field: 'siblings' },
                  function(_ref) {
                    var add = _ref.add,
                      fields = _ref.fields,
                      reset = _ref.reset;
                    return react_default.a.createElement(
                      react_default.a.Fragment,
                      null,
                      react_default.a.createElement(
                        'button',
                        { onClick: add, type: 'button' },
                        'Add Sibling'
                      ),
                      react_default.a.createElement(
                        'button',
                        { onClick: reset, type: 'button' },
                        'Reset Siblings'
                      ),
                      fields.map(function(_ref2, i) {
                        var field = _ref2.field,
                          key = _ref2.key,
                          remove = _ref2.remove;
                        return react_default.a.createElement(
                          'label',
                          { key: key },
                          'Sibling ',
                          i,
                          ':',
                          react_default.a.createElement(src.Text, {
                            field: field
                          }),
                          react_default.a.createElement(
                            'button',
                            { type: 'button', onClick: remove },
                            'Remove'
                          )
                        );
                      })
                    );
                  }
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              ),
              react_default.a.createElement(
                'div',
                { style: { flex: 2 } },
                react_default.a.createElement(FormState.a, { values: !0 })
              )
            )
          )
        );
      };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Dynamic Array of fields\n\nFields can also be associated with an dynamic array. Here is an example where you can add many siblings!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, ArrayField } from \'informed\';\n\nconst DynamicArrays = () => {\n\n  return (\n    <div>\n      <Form initialValues={{ siblings: [\'foo\', \'bar\', \'baz\']}}>\n        <ArrayField field="siblings">\n          {({ add, fields }) => (\n            <>\n              <button onClick={add} type="button">\n                Add Sibling\n              </button>\n              {fields.map(({ field, key, remove }, i) => (\n                <label key={key}>\n                  Sibling {i}:\n                  <Text field={field} />\n                  <button type="button" onClick={remove}>\n                    Remove\n                  </button>\n                </label>\n              ))}\n            </>\n          )}\n        </ArrayField>\n        <button type="submit">Submit</button>\n      </Form>\n    </div>\n  );\n};\n```\n',
        function DynamicArrays() {
          return react_default.a.createElement(
            DynamicArrays_DynamicArraysContent,
            null
          );
        }
      );
    },
    196: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Complex Form\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, TextArea, RadioGroup, Radio, Checkbox, Select, Option, Scope } from \'informed\';\n\n<Form>\n  <label>First name:<Text field="name"/></label>\n  <Scope scope="favorite">\n    <label>Favorite color:<Text field="color"/></label>\n    <label>Favorite food:<Text field="food"/></label>\n  </Scope>\n  <label>Friend 1:<Text field="friends[0]" /></label>\n  <label>Friend 2:<Text field="friends[1]" /></label>\n  <label>Friend 3:<Text field="friends[2]" /></label>\n  <label>Bio:<TextArea field="bio"/></label>\n  <RadioGroup field="gender">\n    <label>Male <Radio value="male"/></label>            \n    <label>Female <Radio value="female"/></label>\n  </RadioGroup>\n  <label>\n    Relationship status:\n    <Select field="status">\n      <Option value="" disabled>\n      Select One...\n      </Option>\n      <Option value="single">Single</Option>\n      <Option value="relationship">Relationship</Option>\n      <Option value="complicated">Complicated</Option>\n    </Select>\n  </label>\n  <label>\n    Colors:\n    <Select\n      field="colors"\n      multiple>\n      <Option value="red">Red</Option>\n      <Option value="green">Green</Option>\n      <Option value="blue">Blue</Option>\n      <Option value="yellow">Yellow</Option>\n      <Option value="orange">Orange</Option>\n      <Option value="purple">Purple</Option>\n    </Select>\n  </label>\n  <label>Authorize: <Checkbox field="authorize"/></label>\n  <button type="submit">Submit</button>\n</Form>\n```\n',
        function Complex() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(src.Text, { field: 'name' })
                  ),
                  react_default.a.createElement(
                    src.Scope,
                    { scope: 'favorite' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Favorite color:',
                      react_default.a.createElement(src.Text, {
                        field: 'color'
                      })
                    ),
                    react_default.a.createElement(
                      'label',
                      null,
                      'Favorite food:',
                      react_default.a.createElement(src.Text, { field: 'food' })
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend 1:',
                    react_default.a.createElement(src.Text, {
                      field: 'friends[0]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend 2:',
                    react_default.a.createElement(src.Text, {
                      field: 'friends[1]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend 3:',
                    react_default.a.createElement(src.Text, {
                      field: 'friends[2]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Bio:',
                    react_default.a.createElement(src.TextArea, {
                      field: 'bio'
                    })
                  ),
                  react_default.a.createElement(
                    src.RadioGroup,
                    { field: 'gender' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Male: ',
                      react_default.a.createElement(src.Radio, {
                        value: 'male'
                      })
                    ),
                    react_default.a.createElement(
                      'label',
                      null,
                      'Female: ',
                      react_default.a.createElement(src.Radio, {
                        value: 'female'
                      })
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Relationship status:',
                    react_default.a.createElement(
                      src.Select,
                      { field: 'status' },
                      react_default.a.createElement(
                        src.Option,
                        { value: '', disabled: !0 },
                        'Select One...'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'single' },
                        'Single'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'relationship' },
                        'Relationship'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'complicated' },
                        'Complicated'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Colors:',
                    react_default.a.createElement(
                      src.Select,
                      {
                        field: 'colors',
                        multiple: !0,
                        style: { height: '100px', width: '200px' }
                      },
                      react_default.a.createElement(
                        src.Option,
                        { value: 'red' },
                        'Red'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'green' },
                        'Green'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'blue' },
                        'Blue'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'yellow' },
                        'Yellow'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'orange' },
                        'Orange'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'purple' },
                        'Purple'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Authorize: ',
                    react_default.a.createElement(src.Checkbox, {
                      field: 'authorize'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, null)
                )
              )
            )
          );
        }
      );
    },
    25: function(module, exports, __webpack_require__) {
      (function(process) {
        function selectColor(namespace, colors) {
          for (var hash = 0, i = 0; i < namespace.length; i++)
            (hash = (hash << 5) - hash + namespace.charCodeAt(i)), (hash |= 0);
          return colors[Math.abs(hash) % colors.length];
        }
        function formatNodeArgs(args, config) {
          var name = config.namespace;
          if (config.useColors) {
            var c = config.color,
              prefix = '  '
                .concat('[3' + (c < 8 ? c : '8;5;' + c), ';1m')
                .concat(name, ' [0m');
            args[0] = prefix + args[0].split('\n').join('\n' + prefix);
          } else args[0] = name + ' ' + args[0];
        }
        function formatBrowserArgs(args, config) {
          if (
            ((args[0] = (config.useColors ? '%c' : '') + config.namespace),
            config.useColors)
          ) {
            var c = 'color: ' + config.color,
              index = 0,
              lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, function(match) {
              '%%' !== match && (index++, '%c' === match && (lastC = index));
            }),
              args.splice(lastC, 0, c);
          }
        }
        var browserColors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33'
        ];
        function createLogger() {
          var prefix =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            config = arguments.length > 1 ? arguments[1] : void 0;
          return function() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            prefix && args.unshift(prefix);
            var matches = config.namespaces.split(',').map(function(namespace) {
              return '*' === namespace[namespace.length - 1]
                ? new RegExp(
                    '^' + namespace.slice(0, namespace.length - 1) + '.*$'
                  )
                : new RegExp('^' + namespace + '$');
            });
            matches.some(function(regex) {
              return regex.test(prefix);
            }),
              selectColor(prefix, config.colors),
              config.useColors;
          };
        }
        void 0 === process ||
        'renderer' === process.type ||
        !0 === process.browser ||
        process.__nwjs
          ? (module.exports = function browserLogger(prefix) {
              return createLogger(
                prefix,
                (function loadBrowser() {
                  var namespaces;
                  try {
                    namespaces = localStorage.getItem('debug');
                  } catch (error) {}
                  return (
                    !namespaces &&
                      void 0 !== process &&
                      'env' in process &&
                      (namespaces = Object({
                        NODE_ENV: 'production',
                        NODE_PATH: '',
                        PUBLIC_URL: '.'
                      }).DEBUG),
                    {
                      namespaces: namespaces || '',
                      colors: browserColors,
                      useColors: !0,
                      formatArgs: formatBrowserArgs
                    }
                  );
                })()
              );
            })
          : (module.exports = function nodeLogger(prefix) {
              return createLogger(
                prefix,
                (function loadNode() {
                  return {
                    namespaces:
                      Object({
                        NODE_ENV: 'production',
                        NODE_PATH: '',
                        PUBLIC_URL: '.'
                      }).DEBUG || '',
                    colors: [6, 2, 3, 4, 5, 1],
                    useColors: !0,
                    formatArgs: formatNodeArgs
                  };
                })()
              );
            });
      }.call(this, __webpack_require__(144)));
    },
    281: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Dynamic_JoesState = function JoesState() {
          var fieldState = Object(src.useFieldState)('joe');
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement('strong', null, 'Joes State'),
            react_default.a.createElement(
              'pre',
              null,
              react_default.a.createElement(
                'code',
                null,
                JSON.stringify(fieldState, null, 2)
              )
            )
          );
        },
        Dynamic_ElonsState = function ElonsState() {
          var fieldState = Object(src.useFieldState)('elon');
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement('strong', null, 'Elons State'),
            react_default.a.createElement(
              'pre',
              null,
              react_default.a.createElement(
                'code',
                null,
                JSON.stringify(fieldState, null, 2)
              )
            )
          );
        },
        Dynamic_DynamicContent = function DynamicContent() {
          var _useState2 = _slicedToArray(Object(react.useState)('foo'), 2),
            field1 = _useState2[0],
            setField1 = _useState2[1],
            _useState4 = _slicedToArray(Object(react.useState)('baz'), 2),
            field2 = _useState4[0],
            setField2 = _useState4[1],
            _useState6 = _slicedToArray(Object(react.useState)('boo'), 2),
            field3 = _useState6[0],
            setField3 = _useState6[1],
            _useState8 = _slicedToArray(Object(react.useState)(!0), 2),
            disabled = _useState8[0],
            setDisabled = _useState8[1],
            _useState10 = _slicedToArray(Object(react.useState)('joe'), 2),
            field5 = _useState10[0],
            setField5 = _useState10[1];
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                { style: { display: 'flex' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1 } },
                  react_default.a.createElement(
                    'label',
                    { htmlFor: 'field1', key: field1 },
                    field1,
                    ':',
                    react_default.a.createElement(src.Text, {
                      field: field1,
                      id: 'field1'
                    })
                  ),
                  'baz' === field2
                    ? react_default.a.createElement(
                        'label',
                        { htmlFor: 'baz', key: 'baz' },
                        'baz:',
                        react_default.a.createElement(src.Text, {
                          field: 'baz',
                          id: 'baz'
                        })
                      )
                    : react_default.a.createElement(
                        'label',
                        { htmlFor: 'taz', key: 'taz' },
                        'taz:',
                        react_default.a.createElement(src.Text, {
                          field: 'taz',
                          id: 'taz'
                        })
                      ),
                  react_default.a.createElement(
                    'label',
                    { htmlFor: 'field3', key: field3 },
                    field3,
                    ':',
                    react_default.a.createElement(src.Text, {
                      field: field3,
                      id: 'field3',
                      keepState: !0
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    { key: 'diabled' },
                    'Diabled:',
                    react_default.a.createElement(src.Text, {
                      field: 'disabled',
                      disabled: disabled
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    field5,
                    ':',
                    react_default.a.createElement(src.Text, { field: field5 })
                  ),
                  react_default.a.createElement(Dynamic_JoesState, null),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(Dynamic_ElonsState, null),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1 } },
                  react_default.a.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick: function toggle1() {
                        setField1('foo' === field1 ? 'bar' : 'foo');
                      }
                    },
                    'Toggle Foo ',
                    '<->',
                    ' Bar'
                  ),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick: function toggle2() {
                        setField2('baz' === field2 ? 'taz' : 'baz');
                      }
                    },
                    'Toggle Baz ',
                    '<->',
                    ' Taz'
                  ),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick: function toggle3() {
                        setField3('boo' === field3 ? 'far' : 'boo');
                      }
                    },
                    'Toggle Boo ',
                    '<->',
                    ' Far'
                  ),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick: function toggle4() {
                        setDisabled(function(dis) {
                          return !dis;
                        });
                      }
                    },
                    'Toggle Disabled'
                  ),
                  react_default.a.createElement('br', null),
                  react_default.a.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick: function toggle5() {
                        setField5('joe' === field5 ? 'elon' : 'joe');
                      }
                    },
                    'Toggle Joe ',
                    '<->',
                    ' Elon'
                  )
                )
              ),
              react_default.a.createElement(FormState.a, null)
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Dynamic Form\n\nOften you need to \"pull the rug\" out from under a form and dynamically change\nthe contents. This is easily achieved with informed. Below is an example of three\ninputs, and three toggle buttons. The first two inputs are basically the same but are\nsimply toggled in two different ways ( same result different code ). The third one\nis special because it has an additional \"keep-state\" prop.\n\nDo this! Enter somthing in the first and second fields, then hit the first two toggle buttons.\nNotice how the old values are removed from the form state, and the fields are updated. Sometimes,\nthis is what a developer wants! When they change the field they want the old value to go away. BUT!\nsometimes this is not what a developer wants. Instead, they may want a fields value to stick around.\nIn order to achive this, you simply tell informed to \"keep the state\".\n\nDo this now! Enter somthing in the third field and hit the third toggle button. Enter a new value in the empty field,\nand then toggle again! You can see how the value persisted!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport React, { useState } from 'react';\nimport { Form, Text, useFieldState } from 'informed';\n\nconst JoesState = () => {\n  const fieldState = useFieldState('joe');\n  return (\n    <>\n      <strong>Joes State</strong>\n      <pre>\n        <code>{JSON.stringify(fieldState, null, 2)}</code>\n      </pre>\n    </>\n  );\n};\n\nconst ElonsState = () => {\n  const fieldState = useFieldState('elon');\n  return (\n    <>\n      <strong>Elons State</strong>\n      <pre>\n        <code>{JSON.stringify(fieldState, null, 2)}</code>\n      </pre>\n    </>\n  );\n};\n\nconst DynamicForm = () => {\n  const [field1, setField1] = useState('foo');\n  const [field2, setField2] = useState('baz');\n  const [field3, setField3] = useState('boo');\n  const [disabled, setDisabled] = useState(true);\n  const [field5, setField5] = useState('joe');\n\n  const toggle1 = () => {\n    setField1(field1 === 'foo' ? 'bar' : 'foo');\n  };\n\n  const toggle2 = () => {\n    setField2(field2 === 'baz' ? 'taz' : 'baz');\n  };\n\n  const toggle3 = () => {\n    setField3(field3 === 'boo' ? 'far' : 'boo');\n  };\n\n  const toggle4 = () => {\n    setDisabled(dis => !dis);\n  };\n\n  const toggle5 = () => {\n    setField5(field5 === 'joe' ? 'elon' : 'joe');\n  };\n\n  return (\n    <div>\n      <Form>\n        <label htmlFor=\"field1\" key={field1}>\n          {field1}:<Text field={field1} id=\"field1\" />\n        </label>\n\n        {field2 === 'baz' ? (\n          <label htmlFor=\"baz\" key=\"baz\">\n            baz:\n            <Text field=\"baz\" id=\"baz\" />\n          </label>\n        ) : (\n          <label htmlFor=\"taz\" key=\"taz\">\n            taz:\n            <Text field=\"taz\" id=\"taz\" />\n          </label>\n        )}\n\n        <label htmlFor=\"field3\" key={field3}>\n          {field3}:<Text field={field3} id=\"field3\" keepState />\n        </label>\n\n        <label key=\"diabled\">\n          Diabled:\n          <Text field=\"disabled\" disabled={disabled} />\n        </label>\n\n        <label>\n          {field5}:<Text field={field5} />\n        </label>\n\n        <JoesState />\n        <br />\n        <ElonsState />\n\n        <button type=\"submit\">Submit</button>\n      </Form>\n      <button type=\"button\" onClick={toggle1}>\n        Toggle Foo {'<->'} Bar\n      </button>\n      <br />\n      <button type=\"button\" onClick={toggle2}>\n        Toggle Baz {'<->'} Taz\n      </button>\n      <br />\n      <button type=\"button\" onClick={toggle3}>\n        Toggle Boo {'<->'} Far\n      </button>\n      <br />\n      <button type=\"button\" onClick={toggle4}>\n        Toggle Disabled\n      </button>\n      <br />\n\n      <button type=\"button\" onClick={toggle5}>\n        Toggle Joe {'<->'} Elon\n      </button>\n    </div>\n  );\n};\n```\n",
        function Dynamic() {
          return react_default.a.createElement(Dynamic_DynamicContent, null);
        }
      );
    },
    282: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Dynamic Fields\n\nSometimes you need to conditionally render fields. Below is a simple\nexample the shows or hides a spouce depending on the radio selected!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, RadioGroup, Radio, Relevant } from \'informed\';\n\n<Form>\n  <label>First name:<Text field="name"/></label>\n  <label>Are you married?</label>\n  <RadioGroup field="married">\n    <label>Yes <Radio value="yes"/></label>\n    <label>No <Radio value="no"/></label>\n  </RadioGroup>\n  <Relevant when={({ values }) => values.married === \'yes\'}>\n    <label>Spouse name:<Text field="spouse" /></label>\n  </Relevant>\n  <button type="submit">Submit</button>\n</Form>\n```',
        function DynamicFields() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(src.Text, { field: 'name' })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Are you married?'
                  ),
                  react_default.a.createElement(
                    src.RadioGroup,
                    { field: 'married' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Yes ',
                      react_default.a.createElement(src.Radio, { value: 'yes' })
                    ),
                    react_default.a.createElement(
                      'label',
                      null,
                      'No ',
                      react_default.a.createElement(src.Radio, { value: 'no' })
                    )
                  ),
                  react_default.a.createElement(
                    src.Relevant,
                    {
                      when: function when(_ref) {
                        return 'yes' === _ref.values.married;
                      }
                    },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Spouse name:',
                      react_default.a.createElement(src.Text, {
                        field: 'spouse'
                      })
                    )
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, null)
                )
              )
            )
          );
        }
      );
    },
    3: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(0);
      var storybook_readme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        87
      );
      __webpack_exports__.a =
        storybook_readme__WEBPACK_IMPORTED_MODULE_1__.withDocs;
    },
    37: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? _assertThisInitialized(self)
          : call;
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var Modal = (function(_Component) {
        !(function _inherits(subClass, superClass) {
          if ('function' != typeof superClass && null !== superClass)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (subClass.prototype = Object.create(
            superClass && superClass.prototype,
            { constructor: { value: subClass, writable: !0, configurable: !0 } }
          )),
            superClass && _setPrototypeOf(subClass, superClass);
        })(Modal, _Component);
        var _super = _createSuper(Modal);
        function Modal(props) {
          var _this;
          return (
            (function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Modal),
            _defineProperty(
              _assertThisInitialized((_this = _super.call(this, props))),
              'open',
              function() {
                _this.setState({ open: !0 });
              }
            ),
            _defineProperty(_assertThisInitialized(_this), 'close', function() {
              _this.setState({ open: !1 });
            }),
            (_this.state = { open: !1 }),
            _this
          );
        }
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Constructor
            );
          })(Modal, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.props.getControl && this.props.getControl(this.controller);
              }
            },
            {
              key: 'render',
              value: function render() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                  null,
                  this.state.open
                    ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            style: {
                              position: 'fixed',
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              backgroundColor: 'rgba(0,0,0,0.7)'
                            }
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            style: {
                              minHeight: '50px',
                              minWidth: '400px',
                              position: 'fixed',
                              paddingBottom: '2.5rem',
                              top: '50%',
                              left: '50%',
                              backgroundColor: 'white',
                              transform: 'translate(-50%, -50%)',
                              borderRadius: '6px',
                              boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                              display: 'flex',
                              flexDirection: 'column'
                            }
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            {
                              style: {
                                flex: 1,
                                textAlign: 'right',
                                color: 'rgb(167, 26, 21)',
                                fontSize: '1.8rem'
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'span',
                              {
                                style: {
                                  marginRight: '1rem',
                                  cursor: 'pointer'
                                },
                                onClick: this.close
                              },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'strong',
                                null,
                                'x'
                              )
                            )
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            { style: { flex: 4, textAlign: 'center' } },
                            this.props.children
                          )
                        )
                      )
                    : null
                );
              }
            },
            {
              key: 'controller',
              get: function get() {
                return { open: this.open, close: this.close };
              }
            }
          ]),
          Modal
        );
      })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
      __webpack_exports__.a = Modal;
    },
    4: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        react_prism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(490);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var Code = (function(_Component) {
        !(function _inherits(subClass, superClass) {
          if ('function' != typeof superClass && null !== superClass)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (subClass.prototype = Object.create(
            superClass && superClass.prototype,
            { constructor: { value: subClass, writable: !0, configurable: !0 } }
          )),
            superClass && _setPrototypeOf(subClass, superClass);
        })(Code, _Component);
        var _super = _createSuper(Code);
        function Code() {
          return _classCallCheck(this, Code), _super.apply(this, arguments);
        }
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Constructor
            );
          })(Code, [
            {
              key: 'render',
              value: function render() {
                var _this$props = this.props,
                  children = _this$props.children,
                  language = _this$props.language,
                  rest = _objectWithoutProperties(_this$props, [
                    'children',
                    'language'
                  ]);
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'pre',
                  rest,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_prism__WEBPACK_IMPORTED_MODULE_1__.PrismCode,
                    { className: language },
                    children
                  )
                );
              }
            }
          ]),
          Code
        );
      })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
      __webpack_exports__.a = Code;
    },
    40: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
      __webpack_exports__.a = function useFormState() {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
          _Context__WEBPACK_IMPORTED_MODULE_1__.g
        );
      };
    },
    488: function(module) {
      module.exports = JSON.parse('{"a":"3.29.0"}');
    },
    489: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
      __webpack_exports__.a = function(story) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { class: 'informed-container' },
          story()
        );
      };
    },
    5: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(0), __webpack_require__(4);
      var _src_components_FormState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        189
      );
      __webpack_exports__.a =
        _src_components_FormState__WEBPACK_IMPORTED_MODULE_2__.a;
    },
    500: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
      __webpack_exports__.a = function RickRoll() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h1',
            null,
            'Got Ya!'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('iframe', {
            width: '100%',
            height: '600px',
            src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
            frameborder: '0',
            allow:
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen: !0
          })
        );
      };
    },
    501: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        utils_FormState = __webpack_require__(5),
        validate = function validate(value) {
          if (!value || value.length < 5)
            return 'Field must be at least five characters';
        },
        GettingStarted_submit = function submit(values) {
          return window.alert(
            'Form successfully submitted with '.concat(JSON.stringify(values))
          );
        },
        Intro_GettingStarted = Object(withDocs.a)(
          '## Having Fun\n\nAlright its time to have some fun! The code below is all you need to get\nstarted. Go ahead and play around with the form below, check out the code\nsnippet, and then you can read about what the heck is going on.\n\n**Hint:** type 2 or three characters and click submit and take a look at the state represented on the right.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validate = value => {\n  if (!value || value.length < 5)\n    return \'Field must be at least five characters\';\n};\n\nconst submit = values =>\n  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);\n\n<Form onSubmit={submit}>\n  <Text field="name" label="First name" validate={validate} />\n  <button type="submit">Submit</button>\n</Form>;\n```\n\n### Explanation\n\n**Ok so what the Foo is going on?**\n\nIts actually pretty simple!\n\n`Informed` takes care of managing form state so you don\'t have to! Basically\nit hooks up the native `onChange`, `onBlur`, and `onSubmit` functions and keeps track of\nall sorts of stuff based on those changes. This example uses the `<Text>` and `<Form>` components\nfrom informed, but under the hood they are literally just `<input>` and `<form>` dom elements.\nSo you can pass anything down to them as usual! **For example:** `<Text field="name" style={{color: \'green\'}}>`\n\n<br/>\n',
          function GettingStarted() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'intro-form', onSubmit: GettingStarted_submit },
                react_default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    react_default.a.createElement(src.Text, {
                      field: 'name',
                      label: 'First name',
                      validate: validate
                    }),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  ),
                  react_default.a.createElement(
                    'div',
                    {
                      style: {
                        flex: 2,
                        flexDirection: 'column',
                        display: 'flex',
                        minWidth: '300px'
                      }
                    },
                    react_default.a.createElement(utils_FormState.a, {
                      errors: !0,
                      values: !0
                    })
                  )
                )
              )
            );
          }
        ),
        Intro_FormState = Object(withDocs.a)(
          '## Form State\n\n**"Ok so informed takes care of state so I dont have to.. but how do i get my hands\non this \'awesome stuff\'??"**\n\nThats a great question! There are many ways so lets take a look at a few!\n\nBelow is a similar example, except this time, we show you how to access\nthe form state and render out the values that are changing.\n\n**Note: for a full list of the available values within formState go to the\nformState section of these docs**\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\n<Form>\n  {({ formState }) => (\n    <div>\n      <label>\n        First name:\n        <Text field="name" />\n      </label>\n      <button type="submit">Submit</button>\n      <label>Values:</label>\n      <code>{JSON.stringify(formState.values)}</code>\n      <label>Touched:</label>\n      <code>{JSON.stringify(formState.touched)}</code>\n    </div>\n  )}\n</Form>;\n```\n\n### What is this magic?\n\nIts not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)\n\nThere are a few ways you can get access to `Informed`s form state.\n\n1. By accessing the `formState` as a parameter to a child render function.\n\n```jsx\n<Form>\n  {({ formState }) => (\n    <div>\n      <Text field="hello" />\n      <button type="submit">Submit</button>\n      <label>Values:</label>\n      <code>{JSON.stringify(formState.values)}</code>\n      <label>Touched:</label>\n      <code>{JSON.stringify(formState.touched)}</code>\n    </div>\n  )}\n</Form>\n```\n\n<br/>\n2) By accessing the `formState` as a prop via a HOC ( High Order Component ).\n\n```jsx\nconst FormState = withFormState(({ formState }) => (\n  <label>Values:</label>\n  <code>{JSON.stringify(formState.values)}</code>\n  <label>Touched:</label>\n  <code>{JSON.stringify(formState.touched)}</code>\n));\n\n<Form>\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <FormState />\n  </div>\n</Form>\n```\n\n<br/>\n3) By accessing the `formState` via Hooks!\n\n```jsx\nconst FormState = () => {\n  const formState = useFormState();\n  return (\n    <label>Values:</label>\n    <code>{JSON.stringify(formState.values)}</code>\n    <label>Touched:</label>\n    <code>{JSON.stringify(formState.touched)}</code>\n  );\n};\n\n<Form>\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <FormState />\n  </div>\n</Form>\n```\n\n<br/>\nSo if you do need access to the form state, any of these methods will work.\n\n### Ok so what if i need the state outside of the `<Form />` ??\n\nDon\'t fret! This is also very simple. You have two options:\n\n1. Use the Forms `onChange` prop.\n\n```jsx\n<Form onChange={formState => console.log(formState)}>\n  <Text field="hello" />\n  <button type="submit">Submit</button>\n</Form>\n```\n\n<br/>\n2) Use the Forms `apiRef` prop, and then use the apis `getState` function.\n\n```jsx\nimport React, { useRef } from \'react\';\nimport { Form, Text } from \'informed\';\n\nconst MyAwesomeForm = () => {\n  const apiRef = useRef();\n\n  const handleClick = () => {\n    console.log(apiRef.current.getState());\n  };\n\n  return (\n    <div>\n      <Form apiRef={apiRef}>\n        <Text field="hello" />\n        <button type="submit">Submit</button>\n      </Form>\n      <button onClick={handleClick}>Print Form State</button>\n    </div>\n  );\n};\n```\n',
          function FormState() {
            return react_default.a.createElement(
              src.Form,
              { id: 'state-form' },
              function(_ref) {
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(src.Text, { field: 'name' })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement('label', null, 'Values:'),
                  react_default.a.createElement(
                    'code',
                    null,
                    JSON.stringify(formState.values, null, 2)
                  ),
                  react_default.a.createElement('label', null, 'Touched:'),
                  react_default.a.createElement(
                    'code',
                    null,
                    JSON.stringify(formState.touched, null, 2)
                  )
                );
              }
            );
          }
        ),
        FormApi_RandomSetterButton = function RandomSetterButton() {
          var formApi = Object(src.useFormApi)();
          return react_default.a.createElement(
            'button',
            {
              type: 'button',
              onClick: function onClick() {
                return formApi.setValue(
                  'name',
                  Math.floor(
                    Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)
                  )
                );
              }
            },
            'Random'
          );
        },
        Intro_FormApi = Object(withDocs.a)(
          '### Form Api ??\n\n**Yes what a beautiful segue into the formApi!**\n\n`Informed` also gives you access to a `formApi`. This api allows you to grab\nand manipulate values using getters and setters. In the previous example, we\nactually used a prop called `apiRef` in order to getAccess to informed\'s api\nexternally. Then we used the `getState` function to log out the state when\nour external button was clicked.\n\nBelow is an example where you can access the formApi via hooks. Then use it\nto change the value of the field when the random button is clicked!\n\n**Note: for a full list of the available functions within formApi go to the\nformApi section of these docs**\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFormApi } from \'informed\';\n\nconst RandomSetterButton = () => {\n  const formApi = useFormApi();\n  return (\n    <button\n      type="button"\n      onClick={() =>\n        formApi.setValue(\n          \'name\',\n          Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))\n        )\n      }>\n      Random\n    </button>\n  );\n};\n\n<Form>\n  <label>\n    Name:\n    <Text field="name" />\n  </label>\n  <button type="submit">Submit</button>\n  <RandomSetterButton />\n</Form>;\n```\n\nThere are a few ways you can get access to `Informed`s form api.\n\n1. By accessing the `formApi` as a parameter to a child render function.\n\n```jsx\n<Form>\n  {({ formApi }) => (\n    <div>\n      <Text field="hello" />\n      <button\n        type="button"\n        onClick={() => formApi.setValue(\'hello\', \'world!\')}\n      />\n      <button type="submit">Submit</button>\n    </div>\n  )}\n</Form>\n```\n\n<br/>\n2) By accessing the `formApi` as a prop via a HOC ( High Order Component ).\n\n```jsx\nconst ComponentWithFormApi = withFormApi(({ formApi }) => (\n  return <button type="button" onClick={()=>formApi.setValue(\'hello\', \'world!\')}/>\n));\n\n<Form>\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <ComponentWithFormApi />\n  </div>\n</Form>\n```\n\n<br/>\n3) By accessing the `formApi` via Hooks!\n\n```jsx\nconst ComponentWithFormApi = () => {\n  const formApi = useFormApi();\n  return (\n    <button type="button" onClick={() => formApi.setValue(\'hello\', \'world!\')} />\n  );\n};\n\n<Form>\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <ComponentWithFormApi />\n  </div>\n</Form>;\n```\n\n<br/>\nSo if you do need access to the form api, any of these methods will work.\n',
          function FormApi() {
            return react_default.a.createElement(
              src.Form,
              { id: 'state-form' },
              react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'First name:',
                  react_default.a.createElement(src.Text, { field: 'name' })
                ),
                react_default.a.createElement(FormApi_RandomSetterButton, null),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              )
            );
          }
        ),
        Complex = __webpack_require__(196),
        DynamicArrays = __webpack_require__(190);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var CustomInputs_validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        ErrorText = Object(src.asField)(function(_ref) {
          var fieldState = _ref.fieldState,
            fieldApi = _ref.fieldApi,
            props = _objectWithoutProperties(_ref, ['fieldState', 'fieldApi']),
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            forwardedRef = (props.initialValue, props.forwardedRef),
            rest = _objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'initialValue',
              'forwardedRef'
            ]);
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'input',
              _extends({}, rest, {
                ref: forwardedRef,
                value: value || 0 === value ? value : '',
                onChange: function onChange(e) {
                  setValue(e.target.value), _onChange && _onChange(e);
                },
                onBlur: function onBlur(e) {
                  setTouched(!0), _onBlur && _onBlur(e);
                },
                style: fieldState.error ? { border: 'solid 1px red' } : null
              })
            ),
            fieldState.error
              ? react_default.a.createElement(
                  'small',
                  { style: { color: 'red' } },
                  fieldState.error
                )
              : null
          );
        }),
        WhatElse_CustomInputs = Object(withDocs.a)(
          "# You can easily create your own input components!\n\nLets say you like `informed`'s text input but you want to show an error and turn\nit red when there is an error. You could achieve this with the following code.\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, BasicText, asField } from 'informed';\n\nconst ErrorText = asField(({ fieldState, fieldApi, ...props }) => {\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;\n  return (\n    <React.Fragment>\n      <input\n        {...rest}\n        ref={forwardedRef}\n        value={!value && value !== 0 ? '' : value}\n        onChange={e => {\n          setValue(e.target.value);\n          if (onChange) {\n            onChange(e);\n          }\n        }}\n        onBlur={e => {\n          setTouched(true);\n          if (onBlur) {\n            onBlur(e);\n          }\n        }}\n        style={fieldState.error ? { border: 'solid 1px red' } : null}\n      />\n      {fieldState.error ? (\n        <small style={{ color: 'red' }}>{fieldState.error}</small>\n      ) : null}\n    </React.Fragment>\n  );\n});\n\nconst validate = value => {\n  return !value || value.length < 5\n    ? 'Field must be at least five characters'\n    : undefined;\n};\n\n<Form>\n  <label>\n    First name:\n    <ErrorText\n      field=\"name\"\n      validate={validate}\n      validateOnChange\n      validateOnBlur\n    />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n\n\x3c!-- STORY --\x3e\n\n**Note: this is one of a few ways to create custom inputs. See the custom input section in the docs for more details!**\n",
          function FromScratch() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'custom-form-2' },
                function(_ref2) {
                  _ref2.formApi;
                  var formState = _ref2.formState;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(
                      'label',
                      null,
                      'First name:',
                      react_default.a.createElement(ErrorText, {
                        field: 'name',
                        validate: CustomInputs_validate,
                        validateOnChange: !0,
                        validateOnBlur: !0
                      })
                    ),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    ),
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    ),
                    react_default.a.createElement('label', null, 'Errors:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.errors, null, 2)
                    )
                  );
                }
              )
            );
          }
        ),
        Intro_WhatElse = Object(withDocs.a)(
          '### Whate Else?\n\n**This is sick! What else can I do???**\n\nSoo much!!!\n\n\x3c!-- STORY --\x3e\n\n# Where should I go next?\n\nTo see all of the available stuff in informed. I would recoomend you check out the `Form > Props`, `Form > State`, `Form > Api`, and `Inputs > Intro` sections of the docs.',
          function WhatElse() {
            return react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement(Complex.a, null),
              react_default.a.createElement('br', null),
              react_default.a.createElement(DynamicArrays.a, null),
              react_default.a.createElement('br', null),
              react_default.a.createElement(WhatElse_CustomInputs, null)
            );
          }
        ),
        UseForm_validate = function validate(value) {
          if (!value || value.length < 5)
            return 'Field must be at least five characters';
        },
        onSubmit = function onSubmit(values) {
          return window.alert(
            'Form successfully submitted with '.concat(JSON.stringify(values))
          );
        },
        Intro_UseForm = Object(withDocs.a)(
          '### useForm Hook\n\nHooks are all the rage these days, and some people want to "hook things up themselves" :)\nHere is an example where you can use the `useFormHook`.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validate = value => {\n  if (!value || value.length < 5)\n    return \'Field must be at least five characters\';\n};\n\nconst onSubmit = values =>\n  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);\n\nconst UseFormExample = () => {\n  const { formController, formState, render } = useForm({\n    onSubmit\n  });\n\n  return render(\n    <form\n      onReset={formController.reset}\n      onSubmit={formController.submitForm}\n      onKeyDown={formController.keyDown}>\n      <label>\n        First name:\n        <Text field="name" validate={validate} />\n        <small style={{ color: \'red\' }}>{formState.errors.name}</small>\n      </label>\n      <button type="submit">Submit</button>\n      <pre>\n        <code>{JSON.stringify(formState, null, 2)}</code>\n      </pre>\n    </form>\n  );\n};\n```\n\n<br/>\n',
          function UseForm() {
            var _useForm = Object(src.useForm)({ onSubmit: onSubmit }),
              formController = _useForm.formController,
              formState = _useForm.formState;
            return (0, _useForm.render)(
              react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'form',
                  {
                    onReset: formController.reset,
                    onSubmit: formController.submitForm,
                    onKeyDown: formController.keyDown
                  },
                  react_default.a.createElement(
                    'div',
                    { style: { display: 'flex', flexWrap: 'wrap' } },
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 1, marginRight: '2rem' } },
                      react_default.a.createElement(
                        'label',
                        null,
                        'First name:',
                        react_default.a.createElement(src.Text, {
                          field: 'name',
                          validate: UseForm_validate
                        }),
                        react_default.a.createElement(
                          'small',
                          { style: { color: 'red' } },
                          formState.errors.name
                        )
                      ),
                      react_default.a.createElement(
                        'button',
                        { type: 'submit' },
                        'Submit'
                      )
                    ),
                    react_default.a.createElement(
                      'div',
                      {
                        style: {
                          flex: 2,
                          flexDirection: 'column',
                          display: 'flex',
                          minWidth: '300px'
                        }
                      },
                      react_default.a.createElement(
                        'pre',
                        null,
                        react_default.a.createElement(
                          'code',
                          null,
                          JSON.stringify(formState, null, 2)
                        )
                      )
                    )
                  )
                )
              )
            );
          }
        ),
        Intro_onSubmit = function onSubmit(data) {
          return console.log(data);
        },
        Intro_Intro = Object(withDocs.a)(
          '# Intro\n\nSay hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, and much much more!\n\nOh and YES WE USE HOOKS!\n\nCheck out our [GitHub](https://github.com/joepuzzo/informed)!\n\n[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)\n[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)\n[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)\n[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/A_swsdEUI24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n## Getting Started\n\n##### Install with npm\n\n```\nnpm install --save informed\n```\n\n#### What Can it do ?\n\nSee for yourself.\n\nBy default it comes with native dom inputs that are controlled by informed.\n\n```jsx\nimport { Form, Input, Select, Checkbox, Relevant, FormState } from \'informed\';\n\nconst onSubmit = data => console.log(data);\n\nconst ExampleForm = () => (\n  <Form onSubmit={onSubmit}>\n    <Input field="name" label="Name" placeholder="Elon" />\n    <Input field="age" type="number" label="Age" required="Age Required" />\n    <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />\n    <Select field="car" label="Car" initialValue="ms">\n      <option value="ms">Model S</option>\n      <option value="m3">Model 3</option>\n      <option value="mx">Model X</option>\n      <option value="my">Model Y</option>\n    </Select>\n    <Checkbox field="married" label="Married?" />\n    <Relevant when={({ values }) => values.married}>\n      <Input field="spouse" label="Spouse" />\n    </Relevant>\n    <button type="submit">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n\n\x3c!-- STORY --\x3e\n',
          function GettingStarted() {
            return react_default.a.createElement(
              src.Form,
              { onSubmit: Intro_onSubmit },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  react_default.a.createElement(src.Input, {
                    field: 'name',
                    label: 'Name',
                    placeholder: 'Elon'
                  }),
                  react_default.a.createElement(src.Input, {
                    field: 'age',
                    type: 'number',
                    label: 'Age',
                    required: 'Age Required'
                  }),
                  react_default.a.createElement(src.Input, {
                    field: 'phone',
                    label: 'Phone',
                    formatter: '+1 (###)-###-####'
                  }),
                  react_default.a.createElement(
                    src.Select,
                    { field: 'car', label: 'Car', initialValue: 'ms' },
                    react_default.a.createElement(
                      'option',
                      { value: 'ms' },
                      'Model S'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'm3' },
                      'Model 3'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'mx' },
                      'Model X'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'my' },
                      'Model Y'
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Married: ',
                    react_default.a.createElement(src.Checkbox, {
                      field: 'married'
                    })
                  ),
                  react_default.a.createElement(
                    src.Relevant,
                    {
                      when: function when(_ref) {
                        return _ref.values.married;
                      }
                    },
                    react_default.a.createElement(src.Input, {
                      field: 'spouse',
                      label: 'Spouse'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  react_default.a.createElement(src.FormState, null)
                )
              )
            );
          }
        );
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function CustomIntro_extends() {
        return (CustomIntro_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function CustomIntro_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function CustomIntro_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var CustomIntro_Form = function Form(_ref) {
          var children = _ref.children,
            rest = CustomIntro_objectWithoutProperties(_ref, ['children']),
            _useForm = Object(src.useForm)(rest),
            formController = _useForm.formController,
            render = _useForm.render,
            userProps = _useForm.userProps;
          return render(
            react_default.a.createElement(
              'form',
              CustomIntro_extends({}, userProps, {
                onSubmit: formController.submitForm
              }),
              children
            )
          );
        },
        CustomIntro_Input = function Input(_ref2) {
          var label = _ref2.label,
            props = CustomIntro_objectWithoutProperties(_ref2, ['label']),
            _useField = Object(src.useField)(
              _objectSpread({ fieldType: 'text' }, props)
            ),
            render = _useField.render,
            informed = _useField.informed;
          return render(
            react_default.a.createElement(
              'label',
              null,
              label,
              react_default.a.createElement('input', informed)
            )
          );
        },
        CustomIntro_Checkbox = function Checkbox(_ref3) {
          var label = _ref3.label,
            props = CustomIntro_objectWithoutProperties(_ref3, ['label']),
            _useField2 = Object(src.useField)(
              _objectSpread({ fieldType: 'checkbox' }, props)
            ),
            render = _useField2.render,
            informed = _useField2.informed;
          return render(
            react_default.a.createElement(
              'label',
              null,
              label,
              react_default.a.createElement('input', informed)
            )
          );
        },
        CustomIntro_ErrorInput = function ErrorInput(props) {
          var _useField3 = Object(src.useField)(
              _objectSpread({ fieldType: 'text' }, props)
            ),
            render = _useField3.render,
            informed = _useField3.informed,
            fieldState = _useField3.fieldState;
          return render(
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement(
                'input',
                CustomIntro_extends({}, informed, {
                  style: fieldState.error ? { border: 'solid 1px red' } : null
                })
              ),
              fieldState.error
                ? react_default.a.createElement(
                    'small',
                    { style: { color: 'red' } },
                    fieldState.error
                  )
                : null
            )
          );
        },
        CustomIntro_Select = function Select(_ref4) {
          var label = _ref4.label,
            children = _ref4.children,
            props = CustomIntro_objectWithoutProperties(_ref4, [
              'label',
              'children'
            ]),
            _useField4 = Object(src.useField)(
              _objectSpread({ fieldType: 'select' }, props)
            ),
            render = _useField4.render,
            informed = _useField4.informed;
          return render(
            react_default.a.createElement(
              'label',
              null,
              label,
              react_default.a.createElement('select', informed, children)
            )
          );
        },
        CustomIntro_onSubmit = function onSubmit(data) {
          return console.log(data);
        },
        CustomIntro = Object(withDocs.a)(
          '# Creating Your Own Fields\n\nBut what if you dont want the out of the box stuff??\n\nNo problem, see example below!\n\n```jsx\nimport { useForm, useField, Relevant, FormState } from \'informed\';\n\n// Step 1. Build your form component ---------------------\n\nconst Form = ({ children, ...props }) => {\n  const { formController, render, userProps } = useForm(props);\n\n  return render(\n    <form {...userProps} onSubmit={formController.submitForm}>\n      {children}\n    </form>\n  );\n};\n\n// Step 2. Build your input components --------------------\n\nconst Input = ({ label, ...props }) => {\n  const { render, informed } = useField({ fieldType: \'text\', ...props });\n\n  return render(\n    <label>\n      {label}\n      <input {...informed} />\n    </label>\n  );\n};\n\nconst ErrorInput = props => {\n  const { render, informed, fieldState } = useField({\n    fieldType: \'text\',\n    ...props\n  });\n\n  return render(\n    <>\n      <input\n        {...informed}\n        style={fieldState.error ? { border: \'solid 1px red\' } : null}\n      />\n      {fieldState.error ? (\n        <small style={{ color: \'red\' }}>{fieldState.error}</small>\n      ) : null}\n    </>\n  );\n};\n\nconst Checkbox = ({ label, ...props }) => {\n  const { render, informed } = useField({ fieldType: \'checkbox\', ...props });\n\n  return render(\n    <label>\n      {label}\n      <input {...informed} />\n    </label>\n  );\n};\n\nconst Select = ({ label, children, ...props }) => {\n  const { render, informed } = useField({ fieldType: \'select\', ...props });\n\n  return render(\n    <label>\n      {label}\n      <select {...informed}>{children}</select>\n    </label>\n  );\n};\n\n// Step 3. Build your forms! ---------------------------\n\nconst onSubmit = data => console.log(data);\n\nconst ExampleForm = () => (\n  <Form onSubmit={onSubmit}>\n    <Input field="name" label="Name" placeholder="Elon" />\n    <ErrorInput field="age" type="number" label="Age" required="Age Required" />\n    <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />\n    <Select field="car" label="Car" initialValue="ms">\n      <option value="ms">Model S</option>\n      <option value="m3">Model 3</option>\n      <option value="mx">Model X</option>\n      <option value="my">Model Y</option>\n    </Select>\n    <Checkbox field="married" label="Married?" />\n    <Relevant when={({ values }) => values.married}>\n      <Input field="spouse" label="Spouse" />\n    </Relevant>\n    <button type="submit">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n\n\x3c!-- STORY --\x3e\n',
          function GettingStarted() {
            return react_default.a.createElement(
              CustomIntro_Form,
              { onSubmit: CustomIntro_onSubmit },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  react_default.a.createElement(CustomIntro_Input, {
                    field: 'name',
                    label: 'Name',
                    placeholder: 'Elon'
                  }),
                  react_default.a.createElement(CustomIntro_ErrorInput, {
                    field: 'age',
                    type: 'number',
                    label: 'Age',
                    required: 'Age Required'
                  }),
                  react_default.a.createElement(CustomIntro_Input, {
                    field: 'phone',
                    label: 'Phone',
                    formatter: '+1 (###)-###-####'
                  }),
                  react_default.a.createElement(
                    CustomIntro_Select,
                    { field: 'car', label: 'Car', initialValue: 'ms' },
                    react_default.a.createElement(
                      'option',
                      { value: 'ms' },
                      'Model S'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'm3' },
                      'Model 3'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'mx' },
                      'Model X'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'my' },
                      'Model Y'
                    )
                  ),
                  react_default.a.createElement(CustomIntro_Checkbox, {
                    field: 'married',
                    label: 'Married: '
                  }),
                  react_default.a.createElement(
                    src.Relevant,
                    {
                      when: function when(_ref5) {
                        return _ref5.values.married;
                      }
                    },
                    react_default.a.createElement(CustomIntro_Input, {
                      field: 'spouse',
                      label: 'Spouse'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  react_default.a.createElement(src.FormState, null)
                )
              )
            );
          }
        );
      __webpack_exports__.a = function Intro() {
        return react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(Intro_Intro, null),
          react_default.a.createElement(CustomIntro, null),
          react_default.a.createElement(Intro_GettingStarted, null),
          react_default.a.createElement(Intro_FormState, null),
          react_default.a.createElement(Intro_FormApi, null),
          react_default.a.createElement(Intro_UseForm, null),
          react_default.a.createElement(Intro_WhatElse, null)
        );
      };
    },
    502: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        ErrorTextField = Object(src.asField)(function ErrorText(_ref) {
          var fieldState = _ref.fieldState,
            props = _objectWithoutProperties(_ref, ['fieldState']);
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              src.BasicText,
              _extends({ fieldState: fieldState }, props, {
                style: fieldState.error ? { border: 'solid 1px red' } : null
              })
            ),
            fieldState.error
              ? react_default.a.createElement(
                  'small',
                  { style: { color: 'red' } },
                  fieldState.error
                )
              : null
          );
        });
      Object(withDocs.a)(
        "# Custom Inputs\n\nSometimes the inputs `informed` provides are not good enough. So we decided to\nhelp you out with that! Informed also gives you access to an asField HOC\n( High Order Component ). We also expose the internal input fields such that you\ncan simply add on to them without writing all of the code again. You will see this\nin one of the following examples.\n\n## Custom Text Input\n\nLets say you like `informed`'s text input but you want to show an error and turn\nit red when there is an error. You could achieve this with the following code.\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, BasicText, asField } from 'informed';\n\nconst validate = value => {\n  return !value || value.length < 5\n    ? 'Field must be at least five characters'\n    : undefined;\n};\n\nconst ErrorText = ({ fieldState, ...props }) => (\n  <React.Fragment>\n    <BasicText\n      fieldState={fieldState}\n      {...props}\n      style={fieldState.error ? { border: 'solid 1px red' } : null}\n    />\n    {fieldState.error ? (\n      <small style={{ color: 'red' }}>{fieldState.error}</small>\n    ) : null}\n  </React.Fragment>\n));\n\nconst ErrorTextField = asField(ErrorText);\n\n<Form>\n  <label>\n    First name:\n    <ErrorTextField\n      field=\"name\"\n      validate={validate}\n      validateOnChange\n      validateOnBlur\n    />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n\n\x3c!-- STORY --\x3e\n\n## I need an explanation!\n\nOk so what did we just do? We took advantage of two parts of `informed`.\n\n1. The `asField` HOC that turns a Component into an InformedField.\n2. The internal `BasicText` Component.\n\n`asField` is a HOC that will turn your Component into an `informed` Field Component by\ngiving your component access to the fieldApi and fieldState, and wrapping it in some magic!\nIf you wanted to you could hook up all the functions yourself, but for convenience we\nexpose our internal input definitions for you!\n",
        function Intro() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(src.Form, null, function(_ref2) {
              var formState = _ref2.formState;
              return react_default.a.createElement(
                react_default.a.Fragment,
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'First name:',
                  react_default.a.createElement(ErrorTextField, {
                    field: 'name',
                    validate: validate,
                    validateOnChange: !0,
                    validateOnBlur: !0
                  })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement('label', null, 'Values:'),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                ),
                react_default.a.createElement('label', null, 'Errors:'),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.errors, null, 2)
                )
              );
            })
          );
        }
      );
      function FromScratch_extends() {
        return (FromScratch_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function FromScratch_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function FromScratch_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var FromScratch_validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        FromScratch_ErrorText = Object(src.asField)(function(_ref) {
          var fieldState = _ref.fieldState,
            fieldApi = _ref.fieldApi,
            props = FromScratch_objectWithoutProperties(_ref, [
              'fieldState',
              'fieldApi'
            ]),
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            forwardedRef = (props.initialValue, props.forwardedRef),
            rest = FromScratch_objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'initialValue',
              'forwardedRef'
            ]);
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'input',
              FromScratch_extends({}, rest, {
                ref: forwardedRef,
                value: value || 0 === value ? value : '',
                onChange: function onChange(e) {
                  setValue(e.target.value), _onChange && _onChange(e);
                },
                onBlur: function onBlur(e) {
                  setTouched(!0), _onBlur && _onBlur(e);
                },
                style: fieldState.error ? { border: 'solid 1px red' } : null
              })
            ),
            fieldState.error
              ? react_default.a.createElement(
                  'small',
                  { style: { color: 'red' } },
                  fieldState.error
                )
              : null
          );
        });
      Object(withDocs.a)(
        "## So what if i do want to hook it all up myself?\n\n**Dont Fret!** Check out the example below:\n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, asField } from 'informed';\n\nconst validate = value => {\n  return !value || value.length < 5\n    ? 'Field must be at least five characters'\n    : undefined;\n};\n\nconst ErrorText = asField(({ fieldState, fieldApi, ...props }) => {\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;\n  return (\n    <React.Fragment>\n      <input\n        {...rest}\n        ref={forwardedRef}\n        value={!value && value !== 0 ? '' : value}\n        onChange={e => {\n          setValue(e.target.value);\n          if (onChange) {\n            onChange(e);\n          }\n        }}\n        onBlur={e => {\n          setTouched(true);\n          if (onBlur) {\n            onBlur(e);\n          }\n        }}\n        style={fieldState.error ? { border: 'solid 1px red' } : null}\n      />\n      {fieldState.error ? (\n        <small style={{ color: 'red' }}>{fieldState.error}</small>\n      ) : null}\n    </React.Fragment>\n  );\n});\n\n<Form id=\"custom-form\">\n  <label>\n    First name:\n    <ErrorText\n      field=\"name\"\n      validate={validate}\n      validateOnChange\n      validateOnBlur\n    />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
        function FromScratch() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { id: 'custom-form-2' },
              function(_ref2) {
                _ref2.formApi;
                var formState = _ref2.formState;
                return react_default.a.createElement(
                  react_default.a.Fragment,
                  null,
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(FromScratch_ErrorText, {
                      field: 'name',
                      validate: FromScratch_validate,
                      validateOnChange: !0,
                      validateOnBlur: !0
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement('label', null, 'Values:'),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.values, null, 2)
                  ),
                  react_default.a.createElement('label', null, 'Errors:'),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.errors, null, 2)
                  )
                );
              }
            )
          );
        }
      );
      function UseField_extends() {
        return (UseField_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function UseField_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function UseField_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var UseField_validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        UseField_ErrorText = function ErrorText(props) {
          var _useField = Object(src.useField)(
              _objectSpread(
                _objectSpread({}, props),
                {},
                { validate: UseField_validate }
              )
            ),
            fieldState = _useField.fieldState,
            fieldApi = _useField.fieldApi,
            render = _useField.render,
            ref = _useField.ref,
            userProps = _useField.userProps,
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = userProps.onChange,
            _onBlur = userProps.onBlur,
            rest = UseField_objectWithoutProperties(userProps, [
              'onChange',
              'onBlur'
            ]);
          return render(
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement(
                'input',
                UseField_extends({}, rest, {
                  ref: ref,
                  value: value || 0 === value ? value : '',
                  onChange: function onChange(e) {
                    setValue(e.target.value), _onChange && _onChange(e);
                  },
                  onBlur: function onBlur(e) {
                    setTouched(!0), _onBlur && _onBlur(e);
                  },
                  style: fieldState.error ? { border: 'solid 1px red' } : null
                })
              ),
              fieldState.error
                ? react_default.a.createElement(
                    'small',
                    { style: { color: 'red' } },
                    fieldState.error
                  )
                : null
            )
          );
        },
        UseField = Object(withDocs.a)(
          "# Custom Inputs\n\nSometimes the inputs `informed` provides are not good enough. So we decided to\nhelp you out with that! Informed also gives you access to an useField Hook.\n\n## Custom Text Input\n\nLets say you like `informed`'s text input but you want to show an error and turn\nit red when there is an error. You could achieve this with the following code.\n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, useField } from 'informed';\n\nconst ErrorText = props => {\n  const { fieldState, fieldApi, render, ref, userProps } = useField(props);\n\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, ...rest } = userProps;\n  return render(\n    <React.Fragment>\n      <input\n        {...rest}\n        ref={ref}\n        value={!value && value !== 0 ? '' : value}\n        onChange={e => {\n          setValue(e.target.value);\n          if (onChange) {\n            onChange(e);\n          }\n        }}\n        onBlur={e => {\n          setTouched(true);\n          if (onBlur) {\n            onBlur(e);\n          }\n        }}\n        style={fieldState.error ? { border: 'solid 1px red' } : null}\n      />\n      {fieldState.error ? (\n        <small style={{ color: 'red' }}>{fieldState.error}</small>\n      ) : null}\n    </React.Fragment>\n  );\n};\n\nconst validate = value => {\n  return !value || value.length < 5\n    ? 'Field must be at least five characters'\n    : undefined;\n};\n\n<Form id=\"custom-form\">\n  <label>\n    First name:\n    <ErrorText field=\"name\" validateOnChange validateOnBlur />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
          function FromScratch() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'custom-form-2' },
                function(_ref) {
                  _ref.formApi;
                  var formState = _ref.formState;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(
                      'label',
                      null,
                      'First name:',
                      react_default.a.createElement(UseField_ErrorText, {
                        field: 'name',
                        validateOnChange: !0,
                        validateOnBlur: !0
                      })
                    ),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    ),
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    ),
                    react_default.a.createElement('label', null, 'Errors:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.errors, null, 2)
                    )
                  );
                }
              )
            );
          }
        );
      function Slider_extends() {
        return (Slider_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Slider_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Slider_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Slider = Object(src.asField)(function(_ref) {
          var fieldState = _ref.fieldState,
            fieldApi = _ref.fieldApi,
            props = Slider_objectWithoutProperties(_ref, [
              'fieldState',
              'fieldApi'
            ]),
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = props.onChange,
            _onBlur = props.onBlur,
            initialValue = props.initialValue,
            forwardedRef = props.forwardedRef,
            rest = Slider_objectWithoutProperties(props, [
              'onChange',
              'onBlur',
              'initialValue',
              'forwardedRef'
            ]);
          return react_default.a.createElement(
            'input',
            Slider_extends({}, rest, {
              type: 'range',
              min: 0,
              max: 100,
              step: 5,
              ref: forwardedRef,
              value: value || initialValue || '0',
              onChange: function onChange(e) {
                setValue(e.target.value), _onChange && _onChange(e);
              },
              onBlur: function onBlur(e) {
                setTouched(!0), _onBlur && _onBlur(e);
              }
            })
          );
        }),
        CustomInputs_Slider = Object(withDocs.a)(
          '## Endless Possibilities\n\nBecause of this design, you can add your very own custom inputs! Below is an example of a slider!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, asField } from \'informed\';\n\nconst Slider = asField(({ fieldState, fieldApi, ...props }) => {\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;\n  return (\n    <input\n      {...rest}\n      type="range"\n      min={0}\n      max={100}\n      step={5}\n      ref={forwardedRef}\n      value={value || initialValue || \'0\'}\n      onChange={e => {\n        setValue(e.target.value);\n        if (onChange) {\n          onChange(e);\n        }\n      }}\n      onBlur={e => {\n        setTouched(true);\n        if (onBlur) {\n          onBlur(e);\n        }\n      }}\n    />\n  );\n});\n\n<Form id="custom-form">\n  <label htmlFor="custom-range">Range:</label>\n  <Slider field="range" id="custom-range" initialValue={50} />\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function SliderExample() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'custom-form-3' },
                function(_ref2) {
                  var formState = _ref2.formState;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'custom-3-range' },
                      'Range:'
                    ),
                    react_default.a.createElement(Slider, {
                      field: 'range',
                      initialValue: '50',
                      id: 'custom-3-range'
                    }),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    ),
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    )
                  );
                }
              )
            );
          }
        );
      function UseFieldHooked_extends() {
        return (UseFieldHooked_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function UseFieldHooked_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function UseFieldHooked_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var UseFieldHooked_validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        UseFieldHooked_ErrorText = function ErrorText(props) {
          var _useField = Object(src.useField)(
              (function UseFieldHooked_objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? UseFieldHooked_ownKeys(Object(source), !0).forEach(
                        function(key) {
                          UseFieldHooked_defineProperty(
                            target,
                            key,
                            source[key]
                          );
                        }
                      )
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          target,
                          Object.getOwnPropertyDescriptors(source)
                        )
                      : UseFieldHooked_ownKeys(Object(source)).forEach(function(
                          key
                        ) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key)
                          );
                        });
                }
                return target;
              })(
                { fieldType: 'text', validate: UseFieldHooked_validate },
                props
              )
            ),
            render = _useField.render,
            informed = _useField.informed,
            fieldState = _useField.fieldState;
          return render(
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement(
                'input',
                UseFieldHooked_extends({}, informed, {
                  style: fieldState.error ? { border: 'solid 1px red' } : null
                })
              ),
              fieldState.error
                ? react_default.a.createElement(
                    'small',
                    { style: { color: 'red' } },
                    fieldState.error
                  )
                : null
            )
          );
        },
        UseFieldHooked = Object(withDocs.a)(
          "## But it gets easier!\n\nHere we use the hook `useField`, BUT, instead of hooking it all up ourselves, \nwe just spread the informed object onto the input. Its important to note the use of fieldType, \nwhen you want to use the informed object, you need to tell the hook what type of input \nyour dealing with so it knows how to handle the dom or native event. \n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, useField } from 'informed';\n\nconst validate = value => {\n  return !value || value.length < 5\n    ? 'Field must be at least five characters'\n    : undefined;\n};\n\nconst ErrorText = (props) => {\n\n  const { render, informed, fieldState } = useField({ fieldType: 'text', validate, ...props });\n\n  return render(\n    <>\n      <input\n        {...informed}\n        style={fieldState.error ? { border: 'solid 1px red' } : null}\n      />\n      {fieldState.error ? (\n        <small style={{ color: 'red' }}>{fieldState.error}</small>\n      ) : null}\n    </>\n  );\n};\n\n<Form id=\"custom-form\">\n  <label>\n    First name:\n    <ErrorText\n      field=\"name\"\n      validateOnChange\n      validateOnBlur\n    />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
          function FromScratch() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'custom-form-2' },
                function(_ref) {
                  _ref.formApi;
                  var formState = _ref.formState;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(
                      'label',
                      null,
                      'First name:',
                      react_default.a.createElement(UseFieldHooked_ErrorText, {
                        field: 'name',
                        validateOnChange: !0,
                        validateOnBlur: !0
                      })
                    ),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    ),
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    ),
                    react_default.a.createElement('label', null, 'Errors:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.errors, null, 2)
                    )
                  );
                }
              )
            );
          }
        );
      __webpack_exports__.a = function CreatingCustomInputs() {
        return react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(UseField, null),
          react_default.a.createElement('br', null),
          react_default.a.createElement(UseFieldHooked, null),
          react_default.a.createElement('br', null),
          react_default.a.createElement(CustomInputs_Slider, null)
        );
      };
    },
    503: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = (__webpack_require__(4), __webpack_require__(3)),
        src = __webpack_require__(1);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var GettingStarted_Form = function Form(_ref) {
          var children = _ref.children,
            rest = _objectWithoutProperties(_ref, ['children']),
            _useForm = Object(src.useForm)(rest),
            formController = _useForm.formController,
            render = _useForm.render,
            userProps = _useForm.userProps;
          return render(
            react_default.a.createElement(
              'form',
              _extends({}, userProps, { onSubmit: formController.submitForm }),
              children
            )
          );
        },
        GettingStarted_Input = function Input(_ref2) {
          var label = _ref2.label,
            props = _objectWithoutProperties(_ref2, ['label']),
            _useField = Object(src.useField)(
              _objectSpread({ fieldType: 'text' }, props)
            ),
            render = _useField.render,
            informed = _useField.informed;
          return render(
            react_default.a.createElement(
              'label',
              null,
              label,
              react_default.a.createElement('input', informed)
            )
          );
        },
        GettingStarted_Checkbox = function Checkbox(_ref3) {
          var label = _ref3.label,
            props = _objectWithoutProperties(_ref3, ['label']),
            _useField2 = Object(src.useField)(
              _objectSpread({ fieldType: 'checkbox' }, props)
            ),
            render = _useField2.render,
            informed = _useField2.informed;
          return render(
            react_default.a.createElement(
              'label',
              null,
              label,
              react_default.a.createElement('input', informed)
            )
          );
        },
        GettingStarted_Select = function Select(_ref4) {
          var label = _ref4.label,
            children = _ref4.children,
            props = _objectWithoutProperties(_ref4, ['label', 'children']),
            _useField3 = Object(src.useField)(
              _objectSpread({ fieldType: 'select' }, props)
            ),
            render = _useField3.render,
            informed = _useField3.informed;
          return render(
            react_default.a.createElement(
              'label',
              null,
              label,
              react_default.a.createElement('select', informed, children)
            )
          );
        },
        onSubmit = function onSubmit(data) {
          return console.log(data);
        },
        TLDR_GettingStarted = Object(withDocs.a)(
          '# TLDR\n\n[GitHub](https://github.com/joepuzzo/informed)\n\n[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)\n[![Discord](https://img.shields.io/discord/676066734746370058)](https://discord.gg/zpF5wA)\n[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)\n[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)\n[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)\n\n##### Install\n\n```\nnpm install --save informed\n```\n\n```jsx\nimport { useForm, useField, Relevant, FormState } from \'informed\';\n\n// Step 1. Build your form component ---------------------\n\nconst Form = ({ children, ...props }) => {\n  const { formController, render, userProps } = useForm(props);\n\n  return render(\n    <form {...userProps} onSubmit={formController.submitForm}>\n      {children}\n    </form>\n  );\n};\n\n// Step 2. Build your input components --------------------\n\nconst Input = ({ label, ...props }) => {\n  const { render, informed } = useField({ fieldType: \'text\', ...props });\n\n  return render(\n    <label>\n      {label}\n      <input {...informed} />\n    </label>\n  );\n};\n\nconst Checkbox = ({ label, ...props }) => {\n  const { render, informed } = useField({ fieldType: \'checkbox\', ...props });\n\n  return render(\n    <label>\n      {label}\n      <input {...informed} />\n    </label>\n  );\n};\n\nconst Select = ({ label, children, ...props }) => {\n  const { render, informed } = useField({ fieldType: \'select\', ...props });\n\n  return render(\n    <label>\n      {label}\n      <select {...informed}>{children}</select>\n    </label>\n  );\n};\n\n// Step 3. Build your forms! ---------------------------\n\nconst onSubmit = data => console.log(data);\n\nconst ExampleForm = () => (\n  <Form onSubmit={onSubmit}>\n    <Input field="name" label="Name" placeholder="Elon" />\n    <Input field="age" type="number" label="Age" required="Age Required" />\n    <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />\n    <Select field="car" label="Car" initialValue="ms">\n      <option value="ms">Model S</option>\n      <option value="m3">Model 3</option>\n      <option value="mx">Model X</option>\n      <option value="my">Model Y</option>\n    </Select>\n    <Checkbox field="married" label="Married?" />\n    <Relevant when={({ values }) => values.married}>\n      <Input field="spouse" label="Spouse" />\n    </Relevant>\n    <button type="submit">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n\n\x3c!-- STORY --\x3e\n',
          function GettingStarted() {
            return react_default.a.createElement(
              GettingStarted_Form,
              { onSubmit: onSubmit },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  react_default.a.createElement(GettingStarted_Input, {
                    field: 'name',
                    label: 'Name',
                    placeholder: 'Elon'
                  }),
                  react_default.a.createElement(GettingStarted_Input, {
                    field: 'age',
                    type: 'number',
                    label: 'Age',
                    required: 'Age Required'
                  }),
                  react_default.a.createElement(GettingStarted_Input, {
                    field: 'phone',
                    label: 'Phone',
                    formatter: '+1 (###)-###-####'
                  }),
                  react_default.a.createElement(
                    GettingStarted_Select,
                    { field: 'car', label: 'Car', initialValue: 'ms' },
                    react_default.a.createElement(
                      'option',
                      { value: 'ms' },
                      'Model S'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'm3' },
                      'Model 3'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'mx' },
                      'Model X'
                    ),
                    react_default.a.createElement(
                      'option',
                      { value: 'my' },
                      'Model Y'
                    )
                  ),
                  react_default.a.createElement(GettingStarted_Checkbox, {
                    field: 'married',
                    label: 'Married? '
                  }),
                  react_default.a.createElement(
                    src.Relevant,
                    {
                      when: function when(_ref5) {
                        return _ref5.values.married;
                      }
                    },
                    react_default.a.createElement(GettingStarted_Input, {
                      field: 'spouse',
                      label: 'Spouse'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  react_default.a.createElement(src.FormState, null)
                )
              )
            );
          }
        );
      __webpack_exports__.a = function TLDR() {
        return react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(TLDR_GettingStarted, null)
        );
      };
    },
    504: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        FormState = (__webpack_require__(4), __webpack_require__(5)),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        validate = function validate(value) {
          return 'Field is not valid';
        },
        Gotchas_UnnecessaryRendering_InlineFunctions = Object(withDocs.a)(
          '# Unnecessary Rendering\n\nSometimes your components will re-render when they don\'t need to. Below are some\nexamples where this can occur.\n\n## InlineFunctions:\n\nBelow is the same example that is found in Validation Control accept for one\ndifference! The validation functions that are passed in were declared inline.\nThis will unfortunately result in a re-render of every text field every time the\nparent re-renders :(\n\nThe form on the left results in excess re-rendering while the form on the rights\nfields only re-render when they need to. To visualize this, the fields turn red\nevery time the input re-renders.\n\n**Hint:** click on the submit button a few times.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validate = value => \'Field is not valid\';\n\n  /* ---------------- BAD!! ---------------- */}\n  <Form>\n    {({ formState }) => (\n      <label htmlFor="gotcha-color-1">Color:</label>\n      <small>Validate on blur</small>\n      <Text\n        field="color"\n        id="gotcha-color-1"\n        validateOnBlur\n        debug\n        validate={value => \'Field is not valid\'}\n      /> {/* BAD!! */}\n      <label htmlFor="gotcha-food-1">Food:</label>\n      <small>Validate on change</small>\n      <Text\n        field="food"\n        id="gotcha-food-1"\n        validateOnChange\n        debug\n        validate={value => \'Field is not valid\'}\n      />\n      {/* BAD!! */}\n      <label htmlFor="gotcha-car-1">Car:</label>\n      <small>Validate on blur and change</small>\n      <Text\n        field="car"\n        id="gotcha-car-1"\n        validateOnBlur\n        validateOnChange\n        debug\n        validate={value => \'Field is not valid\'}\n      /> {/* BAD!! */}\n      <button type="submit">Submit</button>\n    )}\n  </Form>\n  {/* ---------------- Better!! ---------------- */}\n  <Form>\n    {({ formState }) => (\n      <label htmlFor="gotcha-color-2">Color:</label>\n      <small>Validate on blur</small>\n      <Text\n        field="color"\n        id="gotcha-color-2"\n        validateOnBlur\n        debug\n        validate={validate}\n      />\n      {/* GOOD!! */}\n      <label htmlFor="gotcha-food-2">Food:</label>\n      <small>Validate on change</small>\n      <Text\n        field="food"\n        id="gotcha-food-2"\n        validateOnChange\n        debug\n        validate={validate}\n      /> {/* GOOD!! */}\n      <label htmlFor="gotcha-car-2">Car:</label>\n      <small>Validate on blur and change</small>\n      <Text\n        field="car"\n        id="gotcha-car-2"\n        validateOnBlur\n        validateOnChange\n        debug\n        validate={validate}\n      />\n      {/* GOOD!! */}\n      <button type="submit">Submit</button>\n    )}\n  </Form>\n  {/* ---------------- Best!! ---------------- */}\n  <Form>\n    <label htmlFor="gotcha-color-2">Color:</label>\n    <small>Validate on blur</small>\n    <Text\n      field="color"\n      id="gotcha-color-2"\n      validateOnBlur\n      debug\n      validate={validate}\n      autoComplete="off"\n    />\n    <label htmlFor="gotcha-food-2">Food:</label>\n    <small>Validate on change</small>\n    <Text\n      field="food"\n      id="gotcha-food-2"\n      validateOnChange\n      debug\n      validate={validate}\n      autoComplete="off"\n    />\n    <label htmlFor="gotcha-car-2">Car:</label>\n    <small>Validate on blur and change</small>\n    <Text\n      field="car"\n      id="gotcha-car-2"\n      validateOnBlur\n      validateOnChange\n      debug\n      validate={validate}\n      autoComplete="off"\n    />\n    <button type="submit">Submit</button>\n  </Form>\n \n\n```\n',
          function InlineFunctions() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'gotcha-render-form-1' },
                function(_ref) {
                  _ref.formState;
                  return react_default.a.createElement(
                    'div',
                    { style: { display: 'flex', flexWrap: 'wrap' } },
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 1, marginRight: '2rem' } },
                      react_default.a.createElement('h5', null, 'Bad Form'),
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'gotcha-color-1' },
                        'Color:'
                      ),
                      react_default.a.createElement(
                        'small',
                        null,
                        'Validate on blur'
                      ),
                      react_default.a.createElement(src.Text, {
                        field: 'color',
                        id: 'gotcha-color-1',
                        validateOnBlur: !0,
                        debug: !0,
                        validate: function validate(value) {
                          return 'Field is not valid';
                        },
                        autoComplete: 'off'
                      }),
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'gotcha-food-1' },
                        'Food:'
                      ),
                      react_default.a.createElement(
                        'small',
                        null,
                        'Validate on change'
                      ),
                      react_default.a.createElement(src.Text, {
                        field: 'food',
                        id: 'gotcha-food-1',
                        validateOnChange: !0,
                        debug: !0,
                        validate: function validate(value) {
                          return 'Field is not valid';
                        },
                        autoComplete: 'off'
                      }),
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'gotcha-car-1' },
                        'Car:'
                      ),
                      react_default.a.createElement(
                        'small',
                        null,
                        'Validate on blur and change'
                      ),
                      react_default.a.createElement(src.Text, {
                        field: 'car',
                        id: 'gotcha-car-1',
                        validateOnBlur: !0,
                        validateOnChange: !0,
                        debug: !0,
                        validate: function validate(value) {
                          return 'Field is not valid';
                        },
                        autoComplete: 'off'
                      }),
                      react_default.a.createElement(
                        'button',
                        { type: 'submit' },
                        'Submit'
                      )
                    ),
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 2, minWidth: '300px' } },
                      react_default.a.createElement(FormState.a, {
                        errors: !0,
                        values: !0
                      })
                    )
                  );
                }
              ),
              react_default.a.createElement(
                src.Form,
                { id: 'gotcha-render-form-2' },
                function(_ref2) {
                  _ref2.formState;
                  return react_default.a.createElement(
                    'div',
                    { style: { display: 'flex', flexWrap: 'wrap' } },
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 1, marginRight: '2rem' } },
                      react_default.a.createElement('h5', null, 'Better Form'),
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'gotcha-color-2' },
                        'Color:'
                      ),
                      react_default.a.createElement(
                        'small',
                        null,
                        'Validate on blur'
                      ),
                      react_default.a.createElement(src.Text, {
                        field: 'color',
                        id: 'gotcha-color-2',
                        validateOnBlur: !0,
                        debug: !0,
                        validate: validate,
                        autoComplete: 'off'
                      }),
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'gotcha-food-2' },
                        'Food:'
                      ),
                      react_default.a.createElement(
                        'small',
                        null,
                        'Validate on change'
                      ),
                      react_default.a.createElement(src.Text, {
                        field: 'food',
                        id: 'gotcha-food-2',
                        validateOnChange: !0,
                        debug: !0,
                        validate: validate,
                        autoComplete: 'off'
                      }),
                      react_default.a.createElement(
                        'label',
                        { htmlFor: 'gotcha-car-2' },
                        'Car:'
                      ),
                      react_default.a.createElement(
                        'small',
                        null,
                        'Validate on blur and change'
                      ),
                      react_default.a.createElement(src.Text, {
                        field: 'car',
                        id: 'gotcha-car-2',
                        validateOnBlur: !0,
                        validateOnChange: !0,
                        debug: !0,
                        validate: validate,
                        autoComplete: 'off'
                      }),
                      react_default.a.createElement(
                        'button',
                        { type: 'submit' },
                        'Submit'
                      )
                    ),
                    react_default.a.createElement(
                      'div',
                      { style: { flex: 2, minWidth: '300px' } },
                      react_default.a.createElement(FormState.a, {
                        errors: !0,
                        values: !0
                      })
                    )
                  );
                }
              ),
              react_default.a.createElement(
                src.Form,
                { id: 'gotcha-render-form-3' },
                react_default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    react_default.a.createElement('h5', null, 'Best Form'),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'gotcha-color-2' },
                      'Color:'
                    ),
                    react_default.a.createElement(
                      'small',
                      null,
                      'Validate on blur'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'color',
                      id: 'gotcha-color-2',
                      validateOnBlur: !0,
                      debug: !0,
                      validate: validate,
                      autoComplete: 'off'
                    }),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'gotcha-food-2' },
                      'Food:'
                    ),
                    react_default.a.createElement(
                      'small',
                      null,
                      'Validate on change'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'food',
                      id: 'gotcha-food-2',
                      validateOnChange: !0,
                      debug: !0,
                      validate: validate,
                      autoComplete: 'off'
                    }),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'gotcha-car-2' },
                      'Car:'
                    ),
                    react_default.a.createElement(
                      'small',
                      null,
                      'Validate on blur and change'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'car',
                      id: 'gotcha-car-2',
                      validateOnBlur: !0,
                      validateOnChange: !0,
                      debug: !0,
                      validate: validate,
                      autoComplete: 'off'
                    }),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  ),
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 2, minWidth: '300px' } },
                    react_default.a.createElement(FormState.a, {
                      errors: !0,
                      values: !0
                    })
                  )
                )
              )
            );
          }
        );
      __webpack_exports__.a = function() {
        return react_default.a.createElement(
          Gotchas_UnnecessaryRendering_InlineFunctions,
          null
        );
      };
    },
    505: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        WithField_FieldInfo = function FieldInfo(_ref) {
          var fieldState = _ref.fieldState;
          return react_default.a.createElement('code', null, fieldState.value);
        },
        WithFavoriteColorInfo = Object(src.withFieldState)('favorite.color')(
          WithField_FieldInfo
        ),
        WithColorInfo = Object(src.withFieldState)('color')(
          WithField_FieldInfo
        ),
        Gotchas_Scope_WithField = Object(withDocs.a)(
          '# Scope\n\nScope is a very useful tool for simplifying your code but you can easily make\nmistakes when using it.\n\n## WithField:\n\nBelow is an example where you could misuse the `withFieldState` high order\ncomponent.\n\n**\nType into the field and Note how the text next to `color:` gets upated while nothing\nchanges next to `favorite.color:`\n**\n\n\x3c!-- STORY --\x3e\n\n**\nWhy? Lets take a look at the code below:\n**\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, Text, Scope, withFieldState } from \'informed\';\n\nconst FieldInfo = ({ fieldState }) => <code>{fieldState.value}</code>;\n\nconst WithFavoriteColorInfo = withFieldState(\'favorite.color\')(FieldInfo);\nconst WithColorInfo = withFieldState(\'color\')(FieldInfo);\n\n<Form id="gotcha-form-2">\n  <Scope scope="favorite">\n    <Text field="color" />\n    <div>\n      favorite.color: <WithFavoriteColorInfo />\n    </div>\n    <div>\n      color: <WithColorInfo />\n    </div>\n  </Scope>\n</Form>;\n```\n\n<br/>\nRemember that the result of high order components is affected just like `Text`\nfields. In other words when you write `<Text field="color" />` within a\n`<Scope scope="favorite" />` the result in the values is `favorite.color`.\nPutting a component that is wrapped with `withFieldState` or `withFieldApi` is\naffected in the exact same way!\n',
          function WithField() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'gotcha-form-2' },
                function(_ref2) {
                  _ref2.formApi;
                  var formState = _ref2.formState;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Scope,
                      { scope: 'favorite' },
                      react_default.a.createElement(src.Text, {
                        field: 'color'
                      }),
                      react_default.a.createElement(
                        'div',
                        null,
                        'favorite.color: ',
                        react_default.a.createElement(
                          WithFavoriteColorInfo,
                          null
                        )
                      ),
                      react_default.a.createElement(
                        'div',
                        null,
                        'color: ',
                        react_default.a.createElement(WithColorInfo, null)
                      )
                    ),
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    )
                  );
                }
              )
            );
          }
        );
      __webpack_exports__.a = function() {
        return react_default.a.createElement(Gotchas_Scope_WithField, null);
      };
    },
    506: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Basic Form\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\n<Form>\n  <label>\n    First name:\n    <Text field="name"/>\n  </label>\n  <button type="submit">Submit</button>\n</Form>\n```\n',
        function Basic() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { id: 'basic-form' },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(src.Text, { field: 'name' })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, { values: !0 })
                )
              )
            )
          );
        }
      );
    },
    507: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input',
              'informed:props': {
                validate: function validate(v) {
                  return null == v ? 'Required' : void 0;
                }
              },
              'informed:validate': {}
            },
            age: {
              type: 'number',
              title: 'Age',
              'ui:control': 'input',
              'input:props': { type: 'number' }
            },
            bio: { type: 'string', title: 'Bio', 'ui:control': 'textarea' },
            authorize: {
              type: 'string',
              title: 'Authorize',
              'ui:control': 'checkbox'
            },
            color: {
              type: 'string',
              title: 'Color',
              'ui:control': 'select',
              oneOf: [
                {
                  const: '',
                  title: '- Select -',
                  'input:props': { disabled: !0 }
                },
                { const: 'red', title: 'Red' },
                { const: 'black', title: 'Black' },
                { const: 'white', title: 'White' }
              ]
            },
            model: {
              type: 'string',
              title: 'Model',
              'ui:control': 'radio',
              oneOf: [
                { const: 'ms', title: 'Model S' },
                { const: 'm3', title: 'Model 3' },
                { const: 'mx', title: 'Model X' },
                { const: 'my', title: 'Model Y' }
              ],
              default: null,
              'informed:props': { initialValue: 'm3' }
            },
            cars: {
              type: 'array',
              title: 'Cars',
              'ui:control': 'select',
              'input:props': {
                multiple: !0,
                style: { height: '100px', width: '200px' }
              },
              items: {
                oneOf: [
                  { const: 'tesla', title: 'Tesla' },
                  { const: 'volvo', title: 'Volvo' },
                  { const: 'audi', title: 'Audi' },
                  { const: 'jeep', title: 'Jeep' }
                ]
              },
              'informed:props': { initialValue: ['jeep', 'tesla'] }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# JSON Schema Form\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields, FormState } from 'informed';\n\nconst schema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input',\n      'informed:props': {\n        validate: v => (v == null ? 'Required' : undefined)\n      }\n    },\n    age: {\n      type: 'number',\n      title: 'First name',\n      'ui:control': 'input',\n      'input:props': {\n        type: 'number'\n      }\n    },\n    bio: {\n      type: 'string',\n      title: 'Bio',\n      'ui:control': 'textarea'\n    },\n    authorize: {\n      type: 'string',\n      title: 'Authorize',\n      'ui:control': 'checkbox'\n    },\n    color: {\n      type: 'string',\n      title: 'Color',\n      'ui:control': 'select',\n      oneOf: [\n        {\n          const: '',\n          title: '- Select -',\n          'input:props': {\n            disabled: true\n          }\n        },\n        { const: 'red', title: 'Red' },\n        { const: 'black', title: 'Black' },\n        { const: 'white', title: 'White' }\n      ]\n    },\n    model: {\n      type: 'string',\n      title: 'Model',\n      'ui:control': 'radio',\n      oneOf: [\n        { const: 'ms', title: 'Model S' },\n        { const: 'm3', title: 'Model 3' },\n        { const: 'mx', title: 'Model X' },\n        { const: 'my', title: 'Model Y' }\n      ],\n      default: null,\n      'informed:props': {\n        initialValue: 'm3'\n      }\n    },\n    cars: {\n      type: 'array',\n      title: 'Cars',\n      'ui:control': 'select',\n      'input:props': {\n        multiple: true,\n        style: { height: '100px', width: '200px' }\n      },\n      items: {\n        oneOf: [\n          { const: 'tesla', title: 'Tesla' },\n          { const: 'volvo', title: 'Volvo' },\n          { const: 'audi', title: 'Audi' },\n          { const: 'jeep', title: 'Jeep' }\n        ]\n      },\n      'informed:props': {\n        initialValue: ['jeep', 'tesla']\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form schema={schema}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            { schema: schema },
            react_default.a.createElement(src.SchemaFields, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(FormState.a, null)
          );
        }
      );
    },
    508: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            brother: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  title: 'Brother name',
                  'ui:control': 'input'
                },
                age: {
                  type: 'number',
                  title: 'Brother age',
                  'ui:control': 'input',
                  'input:props': { type: 'number' }
                }
              }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Formatted Schema\n\nSometimes you want to control where the fields will end up in the dom.\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from '../../../src';\n\nconst schema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    brother: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          title: 'Brother name',\n          'ui:control': 'input'\n        },\n        age: {\n          type: 'number',\n          title: 'Brother age',\n          'ui:control': 'input',\n          'input:props': {\n            type: 'number'\n          }\n        }\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form schema={schema}>\n    <h5>Your Info:</h5>\n    <FormField field=\"name\" />\n    <br />\n    <h5>Brothers Info:</h5>\n    <Scope scope=\"brother\">\n      <FormField field=\"name\" />\n      <FormField field=\"age\" />\n    </Scope>\n    <button type=\"submit\">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            { schema: schema },
            react_default.a.createElement('h5', null, 'Your Info:'),
            react_default.a.createElement(src.FormField, { field: 'name' }),
            react_default.a.createElement('br', null),
            react_default.a.createElement('h5', null, 'Brothers Info:'),
            react_default.a.createElement(
              src.Scope,
              { scope: 'brother' },
              react_default.a.createElement(src.FormField, { field: 'name' }),
              react_default.a.createElement(src.FormField, { field: 'age' })
            ),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(FormState.a, null)
          );
        }
      );
    },
    509: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            brother: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  title: 'Brother name',
                  'ui:control': 'input'
                },
                age: {
                  type: 'number',
                  title: 'Brother age',
                  'ui:control': 'input',
                  'input:props': { type: 'number' }
                }
              }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Nested Schema\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\n\nconst schema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    brother: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          title: 'Brother name',\n          'ui:control': 'input'\n        },\n        age: {\n          type: 'number',\n          title: 'Brother age',\n          'ui:control': 'input',\n          'input:props': {\n            type: 'number'\n          }\n        }\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form schema={schema}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            { schema: schema },
            react_default.a.createElement(src.SchemaFields, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(FormState.a, null)
          );
        }
      );
    },
    510: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        ajv = __webpack_require__(58),
        ajv_default = __webpack_require__.n(ajv),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          required: ['name', 'siblings'],
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            siblings: {
              type: 'array',
              minItems: 2,
              'ui:control': 'array',
              'ui:before': [{ 'ui:control': 'add' }],
              'informed:props': {
                initialValue: [
                  { name: 'Joe', age: '26' },
                  { name: 'Elon', age: '49' }
                ]
              },
              items: {
                type: 'object',
                'ui:after': [{ 'ui:control': 'remove' }],
                required: ['name', 'age'],
                properties: {
                  name: {
                    type: 'string',
                    title: 'Sibling name',
                    'ui:control': 'input'
                  },
                  age: {
                    type: 'number',
                    title: 'Sibling age',
                    minimum: 0,
                    'ui:control': 'input',
                    'input:props': { type: 'number' }
                  },
                  married: {
                    type: 'string',
                    title: 'Are you married?',
                    enum: ['yes', 'no'],
                    'ui:control': 'radio'
                  },
                  spouse: {
                    type: 'string',
                    title: 'Spouse name',
                    'ui:control': 'input',
                    'informed:props': {
                      relevant: function relevant(values, _ref) {
                        var parentPath = _ref.parentPath;
                        return (
                          'yes' ===
                          (0, _ref.get)(
                            values,
                            ''.concat(parentPath, '.married')
                          )
                        );
                      }
                    }
                  }
                }
              }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Array Field in Schema !!!\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\nimport Ajv from 'ajv';\n\nconst initialValue = [\n  {\n    name: 'Joe',\n    age: '26'\n  },\n  {\n    name: 'Elon',\n    age: '49'\n  }\n];\n\nconst schema = {\n  type: 'object',\n  required: ['name', 'siblings'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    siblings: {\n      type: 'array',\n      minItems: 2,\n      'ui:control': 'array',\n      'ui:before': [{ 'ui:control': 'add' }],\n      'informed:props': {\n        initialValue\n      },\n      items: {\n        type: 'object',\n        'ui:after': [{ 'ui:control': 'remove' }],\n        required: ['name', 'age'],\n        properties: {\n          name: {\n            type: 'string',\n            title: 'Sibling name',\n            'ui:control': 'input'\n          },\n          age: {\n            type: 'number',\n            title: 'Sibling age',\n            minimum: 0,\n            'ui:control': 'input',\n            'input:props': {\n              type: 'number'\n            }\n          },\n          married: {\n            type: 'string',\n            title: 'Are you married?',\n            enum: ['yes', 'no'],\n            'ui:control': 'radio',\n            'informed:props': {\n              notify: ['spouse']\n            }\n          },\n          spouse: {\n            type: 'string',\n            title: 'Spouse name',\n            'ui:control': 'input',\n            'informed:props': {\n              relevant: (values, { parentPath, get }) => {\n                const married = get(values, `${parentPath}.married`);\n                return married === 'yes';\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form\n    ajv={Ajv}\n    schema={schema}\n    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            {
              ajv: ajv_default.a,
              schema: schema,
              onSubmit: function onSubmit(values) {
                return window.alert(JSON.stringify(values, null, 2));
              }
            },
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(src.SchemaFields, null),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              ),
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(FormState.a, {
                  errors: !0,
                  values: !0
                })
              )
            )
          );
        }
      );
    },
    511: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        ajv = __webpack_require__(58),
        ajv_default = __webpack_require__.n(ajv),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          required: ['name', 'siblings'],
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            siblings: {
              type: 'array',
              minItems: 2,
              'ui:control': 'array',
              'ui:before': [{ 'ui:control': 'add' }],
              'informed:props': {
                initialValue: [
                  { name: 'Joe', age: '26' },
                  { name: 'Elon', age: '49' }
                ],
                relevant: function relevant(values) {
                  var name = values.name;
                  return !name || name.length < 10;
                },
                keepState: !0
              },
              items: {
                type: 'object',
                'ui:after': [{ 'ui:control': 'remove' }],
                required: ['name', 'age'],
                properties: {
                  name: {
                    type: 'string',
                    title: 'Sibling name',
                    'ui:control': 'input',
                    'informed:props': { keepState: !0 }
                  },
                  age: {
                    type: 'number',
                    title: 'Sibling age',
                    minimum: 0,
                    'ui:control': 'input',
                    'input:props': { type: 'number' },
                    'informed:props': { keepState: !0 }
                  },
                  married: {
                    type: 'string',
                    title: 'Are you married?',
                    enum: ['yes', 'no'],
                    'ui:control': 'radio',
                    'informed:props': { keepState: !0 }
                  },
                  spouse: {
                    type: 'string',
                    title: 'Spouse name',
                    'ui:control': 'input',
                    'informed:props': {
                      relevant: function relevant(values, _ref) {
                        var parentPath = _ref.parentPath;
                        return (
                          'yes' ===
                          (0, _ref.get)(
                            values,
                            ''.concat(parentPath, '.married')
                          )
                        );
                      },
                      keepStateIfRelevant: !0
                    }
                  }
                }
              }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Array Field in Schema !!!\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\nimport Ajv from 'ajv';\n\nconst initialValue = [\n  {\n    name: 'Joe',\n    age: '26'\n  },\n  {\n    name: 'Elon',\n    age: '49'\n  }\n];\n\nconst schema = {\n  type: 'object',\n  required: ['name', 'siblings'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    siblings: {\n      type: 'array',\n      minItems: 2,\n      'ui:control': 'array',\n      'ui:before': [{ 'ui:control': 'add' }],\n      'informed:props': {\n        initialValue,\n        relevant: values => {\n          const { name } = values;\n          return !name || name.length < 10;\n        },\n        keepState: true\n      },\n      items: {\n        type: 'object',\n        'ui:after': [{ 'ui:control': 'remove' }],\n        required: ['name', 'age'],\n\n        properties: {\n          name: {\n            type: 'string',\n            title: 'Sibling name',\n            'ui:control': 'input',\n            'informed:props': {\n              keepState: true\n            }\n          },\n          age: {\n            type: 'number',\n            title: 'Sibling age',\n            minimum: 0,\n            'ui:control': 'input',\n            'input:props': {\n              type: 'number'\n            },\n            'informed:props': {\n              keepState: true\n            }\n          },\n          married: {\n            type: 'string',\n            title: 'Are you married?',\n            enum: ['yes', 'no'],\n            'ui:control': 'radio',\n            'informed:props': {\n              keepState: true\n            }\n          },\n          spouse: {\n            type: 'string',\n            title: 'Spouse name',\n            'ui:control': 'input',\n            'informed:props': {\n              relevant: (values, { parentPath, get }) => {\n                const married = get(values, `${parentPath}.married`);\n                return married === 'yes';\n              },\n              keepStateIfRelevant: true\n            }\n          }\n        }\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form\n    ajv={Ajv}\n    schema={schema}\n    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            {
              ajv: ajv_default.a,
              schema: schema,
              onSubmit: function onSubmit(values) {
                return window.alert(JSON.stringify(values, null, 2));
              }
            },
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(src.SchemaFields, null),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              ),
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(FormState.a, {
                  errors: !0,
                  values: !0
                })
              )
            )
          );
        }
      );
    },
    512: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        ajv = __webpack_require__(58),
        ajv_default = __webpack_require__.n(ajv),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          required: ['name', 'siblings'],
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            siblings: {
              type: 'array',
              minItems: 2,
              'ui:control': 'array',
              'ui:before': [{ 'ui:control': 'add' }],
              'informed:props': {
                initialValue: [
                  { name: 'Joe', age: '26', friends: [{ name: 'Andres' }] },
                  { name: 'Elon', age: '49', friends: [{ name: 'Kimbal' }] }
                ]
              },
              items: {
                type: 'object',
                'ui:after': [{ 'ui:control': 'remove' }],
                required: ['name', 'age'],
                properties: {
                  name: {
                    type: 'string',
                    title: 'Sibling name',
                    'ui:control': 'input'
                  },
                  married: {
                    type: 'string',
                    title: 'Are you married?',
                    enum: ['yes', 'no'],
                    'ui:control': 'radio'
                  },
                  spouse: {
                    type: 'string',
                    title: 'Spouse name',
                    'ui:control': 'input',
                    'informed:props': {
                      relevant: function relevant(values, _ref) {
                        var parentPath = _ref.parentPath;
                        return (
                          'yes' ===
                          (0, _ref.get)(
                            values,
                            ''.concat(parentPath, '.married')
                          )
                        );
                      }
                    }
                  },
                  friends: {
                    type: 'array',
                    minItems: 2,
                    'ui:control': 'array',
                    'ui:before': [{ 'ui:control': 'add' }],
                    items: {
                      type: 'object',
                      'ui:after': [{ 'ui:control': 'remove' }],
                      required: ['name', 'age'],
                      properties: {
                        name: {
                          type: 'string',
                          title: 'Friends name',
                          'ui:control': 'input'
                        },
                        married: {
                          type: 'string',
                          title: 'Married?',
                          enum: ['yes', 'no'],
                          'ui:control': 'radio'
                        },
                        spouse: {
                          type: 'string',
                          title: 'Spouse',
                          'ui:control': 'input',
                          'informed:props': {
                            relevant: function relevant(values, _ref2) {
                              var parentPath = _ref2.parentPath;
                              return (
                                'yes' ===
                                (0, _ref2.get)(
                                  values,
                                  ''.concat(parentPath, '.married')
                                )
                              );
                            },
                            keepState: !0
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Array Field in Schema !!!\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\nimport Ajv from 'ajv';\n\nconst initialValue = [\n  {\n    name: 'Joe',\n    age: '26',\n    friends: [\n      {\n        name: 'Andres'\n      }\n    ]\n  },\n  {\n    name: 'Elon',\n    age: '49',\n    friends: [\n      {\n        name: 'Kimbal'\n      }\n    ]\n  }\n];\n\nconst schema = {\n  type: 'object',\n  required: ['name', 'siblings'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    siblings: {\n      type: 'array',\n      minItems: 2,\n      'ui:control': 'array',\n      'ui:before': [{ 'ui:control': 'add' }],\n      'informed:props': {\n        initialValue\n      },\n      items: {\n        type: 'object',\n        'ui:after': [{ 'ui:control': 'remove' }],\n        required: ['name', 'age'],\n        properties: {\n          name: {\n            type: 'string',\n            title: 'Sibling name',\n            'ui:control': 'input'\n          },\n          married: {\n            type: 'string',\n            title: 'Are you married?',\n            enum: ['yes', 'no'],\n            'ui:control': 'radio'\n          },\n          spouse: {\n            type: 'string',\n            title: 'Spouse name',\n            'ui:control': 'input',\n            'informed:props': {\n              relevant: (values, { parentPath, get }) => {\n                const married = get(values, `${parentPath}.married`);\n                return married === 'yes';\n              }\n            }\n          },\n          friends: {\n            type: 'array',\n            minItems: 2,\n            'ui:control': 'array',\n            'ui:before': [{ 'ui:control': 'add' }],\n            items: {\n              type: 'object',\n              'ui:after': [{ 'ui:control': 'remove' }],\n              required: ['name', 'age'],\n              properties: {\n                name: {\n                  type: 'string',\n                  title: 'Friends name',\n                  'ui:control': 'input'\n                },\n                married: {\n                  type: 'string',\n                  title: 'Married?',\n                  enum: ['yes', 'no'],\n                  'ui:control': 'radio'\n                },\n                spouse: {\n                  type: 'string',\n                  title: 'Spouse',\n                  'ui:control': 'input',\n                  'informed:props': {\n                    relevant: (values, { parentPath, get }) => {\n                      const married = get(values, `${parentPath}.married`);\n                      return married === 'yes';\n                    },\n                    keepState: true\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form\n    ajv={Ajv}\n    schema={schema}\n    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            {
              ajv: ajv_default.a,
              schema: schema,
              onSubmit: function onSubmit(values) {
                return window.alert(JSON.stringify(values, null, 2));
              }
            },
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(src.SchemaFields, null),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              ),
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(FormState.a, {
                  errors: !0,
                  values: !0
                })
              )
            )
          );
        }
      );
    },
    513: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var CustomSchema_Form = function Form(_ref) {
          var children = _ref.children,
            rest = _objectWithoutProperties(_ref, ['children']),
            _useForm = Object(src.useForm)(rest),
            formController = _useForm.formController,
            render = _useForm.render,
            userProps = _useForm.userProps;
          return render(
            react_default.a.createElement(
              'form',
              _extends({}, userProps, { onSubmit: formController.submitForm }),
              children
            )
          );
        },
        fieldMap = {
          select: function Select(_ref4) {
            var label = _ref4.label,
              children = _ref4.children,
              options = _ref4.options,
              props = _objectWithoutProperties(_ref4, [
                'label',
                'children',
                'options'
              ]),
              _useField3 = Object(src.useField)(
                _objectSpread({ fieldType: 'select' }, props)
              ),
              render = _useField3.render,
              informed = _useField3.informed;
            return render(
              react_default.a.createElement(
                'label',
                null,
                label,
                react_default.a.createElement(
                  'select',
                  informed,
                  options
                    ? options.map(function(option) {
                        return react_default.a.createElement(
                          'option',
                          {
                            key: option.value,
                            value: option.value,
                            disabled: option.disabled
                          },
                          option.label
                        );
                      })
                    : children
                )
              )
            );
          },
          input: function Input(_ref2) {
            var label = _ref2.label,
              props = _objectWithoutProperties(_ref2, ['label']),
              _useField = Object(src.useField)(
                _objectSpread({ fieldType: 'text' }, props)
              ),
              render = _useField.render,
              informed = _useField.informed;
            return render(
              react_default.a.createElement(
                'label',
                null,
                label,
                react_default.a.createElement('input', informed)
              )
            );
          },
          checkbox: function Checkbox(_ref3) {
            var label = _ref3.label,
              props = _objectWithoutProperties(_ref3, ['label']),
              _useField2 = Object(src.useField)(
                _objectSpread({ fieldType: 'checkbox' }, props)
              ),
              render = _useField2.render,
              informed = _useField2.informed;
            return render(
              react_default.a.createElement(
                'label',
                null,
                label,
                react_default.a.createElement('input', informed)
              )
            );
          },
          add: function AddButton() {
            var add = Object(src.useArrayFieldApi)().add;
            return react_default.a.createElement(
              'button',
              {
                onClick: function onClick() {
                  add();
                },
                type: 'button'
              },
              'Add'
            );
          },
          remove: function RemoveButton() {
            var remove = Object(src.useArrayFieldItemApi)().remove;
            return react_default.a.createElement(
              'button',
              {
                onClick: function onClick() {
                  remove();
                },
                type: 'button'
              },
              'Remove'
            );
          },
          array: function MyArrayField(_ref5) {
            var field = _ref5.field,
              items = _ref5.items,
              uiBefore = _ref5.uiBefore,
              uiAfter = _ref5.uiAfter,
              props = _objectWithoutProperties(_ref5, [
                'field',
                'items',
                'uiBefore',
                'uiAfter'
              ]);
            return react_default.a.createElement(
              src.ArrayField,
              _extends({ field: field }, props),
              react_default.a.createElement(src.FormComponents, {
                components: uiBefore
              }),
              react_default.a.createElement(
                src.ArrayField.Items,
                null,
                function(_ref6) {
                  var field = _ref6.field;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(src.FormComponents, {
                      components: items['ui:before']
                    }),
                    react_default.a.createElement(src.FormFields, {
                      schema: items,
                      prefix: field
                    }),
                    react_default.a.createElement(src.FormComponents, {
                      components: items['ui:after']
                    })
                  );
                }
              ),
              react_default.a.createElement(src.FormComponents, {
                components: uiAfter
              })
            );
          }
        },
        schema = {
          type: 'object',
          required: ['name', 'siblings'],
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            authorize: {
              type: 'string',
              title: 'Authorize',
              'ui:control': 'checkbox'
            },
            model: {
              type: 'string',
              title: 'Model',
              'ui:control': 'select',
              oneOf: [
                { const: 'ms', title: 'Model S' },
                { const: 'm3', title: 'Model 3' },
                { const: 'mx', title: 'Model X' },
                { const: 'my', title: 'Model Y' }
              ],
              'informed:props': { initialValue: 'm3' }
            },
            siblings: {
              type: 'array',
              minItems: 2,
              'ui:control': 'array',
              'ui:before': [{ 'ui:control': 'add' }],
              'informed:props': {
                initialValue: [
                  { name: 'Joe', age: '26' },
                  { name: 'Elon', age: '49' }
                ]
              },
              items: {
                type: 'object',
                'ui:after': [{ 'ui:control': 'remove' }],
                required: ['name', 'age'],
                properties: {
                  name: {
                    type: 'string',
                    title: 'Sibling name',
                    'ui:control': 'input'
                  },
                  age: {
                    type: 'number',
                    title: 'Sibling age',
                    minimum: 0,
                    'ui:control': 'input',
                    'input:props': { type: 'number' }
                  }
                }
              }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Custom Schema\n\nInformed comes with a custom schema adapter that maps field types to actual JSX elements.\n\nWhenever you create your own inputs, you have to create or add to informds `fieldMap`.\n\n```jsx\nimport {\n  useForm,\n  useField,\n  useArrayFieldApi,\n  useArrayFieldItemApi,\n  ArrayField,\n  FormComponents,\n  FormFields,\n  Relevant,\n  FormState\n} from 'informed';\n\n// Step 1. Build your form component ---------------------\n\nconst Form = ({ children, ...rest }) => {\n  const { formController, render, userProps } = useForm(rest);\n\n  return render(\n    <form {...userProps} onSubmit={formController.submitForm}>\n      {children}\n    </form>\n  );\n};\n\n// Step 2. Build your input components --------------------\n\nconst Input = ({ label, ...props }) => {\n  const { render, informed } = useField({ fieldType: 'text', ...props });\n\n  return render(\n    <label>\n      {label}\n      <input {...informed} />\n    </label>\n  );\n};\n\nconst Checkbox = ({ label, ...props }) => {\n  const { render, informed } = useField({ fieldType: 'checkbox', ...props });\n\n  return render(\n    <label>\n      {label}\n      <input {...informed} />\n    </label>\n  );\n};\n\nconst Select = ({ label, children, options, ...props }) => {\n  const { render, informed } = useField({ fieldType: 'select', ...props });\n\n  return render(\n    <label>\n      {label}\n      <select {...informed}>\n        {options\n          ? options.map(option => (\n              <option\n                key={option.value}\n                value={option.value}\n                disabled={option.disabled}>\n                {option.label}\n              </option>\n            ))\n          : children}\n      </select>\n    </label>\n  );\n};\n\nconst AddButton = () => {\n  const { add } = useArrayFieldApi();\n\n  return (\n    <button\n      onClick={() => {\n        add();\n      }}\n      type=\"button\">\n      Add\n    </button>\n  );\n};\n\nconst RemoveButton = () => {\n  const { remove } = useArrayFieldItemApi();\n\n  return (\n    <button\n      onClick={() => {\n        remove();\n      }}\n      type=\"button\">\n      Remove\n    </button>\n  );\n};\n\nconst MyArrayField = ({ field, items, uiBefore, uiAfter, ...props }) => {\n  return (\n    <ArrayField field={field} {...props}>\n      <FormComponents components={uiBefore} />\n      <ArrayField.Items>\n        {({ field }) => (\n          <React.Fragment>\n            <FormComponents components={items['ui:before']} />\n            <FormFields schema={items} prefix={field} />\n            <FormComponents components={items['ui:after']} />\n          </React.Fragment>\n        )}\n      </ArrayField.Items>\n      <FormComponents components={uiAfter} />\n    </ArrayField>\n  );\n};\n\n// Step 3. Define your field map --------------------\n\nconst fieldMap = {\n  select: Select,\n  input: Input,\n  checkbox: Checkbox,\n  add: AddButton,\n  remove: RemoveButton,\n  array: MyArrayField\n};\n\n// Step 4. Build your forms!! -----------------------\n\nconst initialValue = [\n  {\n    name: 'Joe',\n    age: '26'\n  },\n  {\n    name: 'Elon',\n    age: '49'\n  }\n];\n\nconst schema = {\n  type: 'object',\n  required: ['name', 'siblings'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    authorize: {\n      type: 'string',\n      title: 'Authorize',\n      'ui:control': 'checkbox'\n    },\n    model: {\n      type: 'string',\n      title: 'Model',\n      'ui:control': 'select',\n      oneOf: [\n        { const: 'ms', title: 'Model S' },\n        { const: 'm3', title: 'Model 3' },\n        { const: 'mx', title: 'Model X' },\n        { const: 'my', title: 'Model Y' }\n      ],\n      'informed:props': {\n        initialValue: 'm3'\n      }\n    },\n    siblings: {\n      type: 'array',\n      minItems: 2,\n      'ui:control': 'array',\n      'ui:before': [{ 'ui:control': 'add' }],\n      'informed:props': {\n        initialValue\n      },\n      items: {\n        type: 'object',\n        'ui:after': [{ 'ui:control': 'remove' }],\n        required: ['name', 'age'],\n        properties: {\n          name: {\n            type: 'string',\n            title: 'Sibling name',\n            'ui:control': 'input'\n          },\n          age: {\n            type: 'number',\n            title: 'Sibling age',\n            minimum: 0,\n            'ui:control': 'input',\n            'input:props': {\n              type: 'number'\n            }\n          }\n        }\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form schema={schema} fieldMap={fieldMap}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n\n\x3c!-- STORY --\x3e\n",
        function Schema() {
          return react_default.a.createElement(
            CustomSchema_Form,
            { schema: schema, fieldMap: fieldMap },
            react_default.a.createElement(src.SchemaFields, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(src.FormState, null)
          );
        }
      );
    },
    514: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        Big_MyButton = function MyButton() {
          var formApi = Object(src.useFormApi)();
          return react_default.a.createElement(
            'button',
            { type: 'button', onClick: formApi.reset },
            'Reset'
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Complex Form\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFormApi } from 'informed';\n```\n",
        function Big() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(Big_MyButton, null),
                Array.from(Array(250)).map(function(_, i) {
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(
                      'label',
                      { key: 'big-'.concat(i) },
                      'First name:',
                      react_default.a.createElement(src.Text, {
                        field: 'field-'.concat(i)
                      })
                    )
                  );
                }),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              ),
              react_default.a.createElement(
                'div',
                { style: { flex: '1' } },
                react_default.a.createElement(src.FormState, null)
              )
            )
          );
        }
      );
    },
    515: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        validate = function validate(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        validateForm = function validateForm(values) {
          return 'Joseph' === values.name
            ? 'Username is already taken!'
            : void 0;
        };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Form State\n\n**`Informed` takes care of state so you don\'t have to!**\n\nBelow is a table that describes each value within a forms state.\n\n**Note:** Initial value is the default value for an attribute, and derived describes\nwhether or not the attribute is derived from other attributes. For example,\ninvalid is derived from the errors attribute and therefore cannot be set directly.\n\n| Attribute | Example            | Initial Value | Derived | Description                                                                                                                                                                                        |\n| --------- | ------------------ | ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| values    | `{name:\'Joe\'}`     | `{}`          | NO      | Key value pair where key is the form field and value is the value entered or selected.                                                                                                             |\n| touched   | `{name:true}`      | `{}`          | NO      | Key value pair where key is the form field and value is true or undefined ( touched or untouched ). Submitting form will cause all fields to be touched.                                           |\n| errors    | `{name:\'Invalid\'}` | `{}`          | NO      | Key value pair where key is the form field and value is the error associated with that field. If a validate function is provided to an input, then when it is called this object will be modified. |\n| invalid   | `true`             | `false`       | YES     | Boolean that is true when form is invalid. A form is invalid when any of its inputs fails its validation function ( if there are errors ).                                                         |\n| pristine  | `true`             | `true`        | YES     | Boolean that is true when form is pristine. A form is pristine when it has not been touched && no values have been entered in any field                                                            |\n| dirty     | `true`             | `false`       | YES     | Boolean that is true when pristine is false                                                                                                                                                        |\n| submits   | `1`                | `0`           | YES     | Number of times the form was submitted. ( Successful or Unsuccessful )                                                                                                                             |\n| error     | `Invalid form`     | undefined     | NO      | Result of the form level validation function                                                                                                                                                       |\n\n**"Ok so informed takes care of state so I dont have to.. but how do i get my hands\non this state??**\n\nThats a great question! There are many ways so lets take a look at a few!\n\nBelow is an example that shows you how to access the form state and render out\nthe values that are changing.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validate = value => {\n  return !value || value.length < 5\n    ? \'Field must be longer than five characters\'\n    : undefined;\n};\n\nconst validateForm = values => {\n  return values.name === \'Joseph\' ? \'Username is already taken!\' : undefined;\n};\n\n<Form validate={validateForm}>\n  {({ formState }) => (\n    <div>\n      <label>\n        First name:\n        <Text field="name" validate={validate} />\n      </label>\n      <button type="submit">Submit</button>\n      <label>Values:</label>\n      <code>{JSON.stringify(formState.values)}</code>\n      <label>Touched:</label>\n      <code>{JSON.stringify(formState.touched)}</code>\n      <label>Errors:</label>\n      <code>{JSON.stringify(formState.errors)}</code>\n      <label>Invalid:</label>\n      <code>{JSON.stringify(formState.invalid)}</code>\n      <label>Pristine:</label>\n      <code>{JSON.stringify(formState.pristine)}</code>\n      <label>Dirty:</label>\n      <code>{JSON.stringify(formState.dirty)}</code>\n      <label>Submits:</label>\n      <code>{JSON.stringify(formState.submits)}</code>\n      <label>Error:</label>\n      <code>{JSON.stringify(formState.error)}</code>\n    </div>\n  )}\n</Form>;\n```\n\n### What is this magic?\n\nIts not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)\n\nThere are five ways you can get access to `Informed`s form state.\n\n1. By accessing the `formState` as a parameter to a child render function.\n\n```jsx\n<Form>\n  {({ formState }) => (\n    <div>\n      <Text field="hello" />\n      <button type="submit">Submit</button>\n      <label>Values:</label>\n      <code>{JSON.stringify(formState.values)}</code>\n      <label>Touched:</label>\n      <code>{JSON.stringify(formState.touched)}</code>\n    </div>\n  )}\n</Form>\n```\n\n<br/>\n2) By accessing the `formState` as a parameter to a render prop.\n\n```jsx\n<Form\n  render={({ formState }) => (\n    <div>\n      <Text field="hello" />\n      <button type="submit">Submit</button>\n      <label>Values:</label>\n      <code>{JSON.stringify(formState.values)}</code>\n      <label>Touched:</label>\n      <code>{JSON.stringify(formState.touched)}</code>\n    </div>\n  )}\n/>\n```\n\n<br/>\n3) By accessing the `formState` as a prop to a component prop.\n\n```jsx\nconst FormContent = ({ formState }) => (\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <label>Values:</label>\n    <code>{JSON.stringify(formState.values)}</code>\n    <label>Touched:</label>\n    <code>{JSON.stringify(formState.touched)}</code>\n  </div>\n);\n\n<Form component={FormContent} />;\n```\n\n<br/>\n4) By accessing the `formState` as a prop via a HOC ( High Order Component ).\n\n```jsx\nconst FormState = withFormState(({ formState }) => (\n  <label>Values:</label>\n  <code>{JSON.stringify(formState.values)}</code>\n  <label>Touched:</label>\n  <code>{JSON.stringify(formState.touched)}</code>\n));\n\n<Form>\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <FormState />\n  </div>\n</Form>\n```\n\n<br/>\n5) By accessing the `formState` via Hooks!\n\n```jsx\nconst FormState = () => {\n  const formState = useFormState();\n  return (\n    <label>Values:</label>\n    <code>{JSON.stringify(formState.values)}</code>\n    <label>Touched:</label>\n    <code>{JSON.stringify(formState.touched)}</code>\n  );\n};\n\n<Form>\n  <div>\n    <Text field="hello" />\n    <button type="submit">Submit</button>\n    <FormState />\n  </div>\n</Form>\n```\n\n<br/>\nSo if you do need access to the form state, any of these methods will work.\n\n### Ok so what if i need the state outside of the `<Form />` ??\n\nDon\'t fret! This is also very simple. You have two options:\n\n1. Use the Forms `onChange` prop.\n\n```jsx\n<Form onChange={formState => console.log(formState)}>\n  <Text field="hello" />\n  <button type="submit">Submit</button>\n</Form>\n```\n\n  <br/>\n  2) Use the Forms `apiRef` prop, and then use the apis `getState` function.\n\n```jsx\nimport React, { useRef } from \'react\';\nimport { Form, Text } from \'informed\';\n\nconst MyAwesomeForm = () => {\n  const apiRef = useRef();\n\n  const handleClick = () => {\n    console.log(apiRef.current.getState());\n  };\n\n  return (\n    <div>\n      <Form apiRef={apiRef}>\n        <Text field="hello" />\n        <button type="submit">Submit</button>\n      </Form>\n      <button onClick={handleClick}>Print Form State</button>\n    </div>\n  );\n};\n```\n',
        function FormState() {
          return react_default.a.createElement(
            src.Form,
            { id: 'form-state-form', validate: validateForm },
            function(_ref) {
              var formState = _ref.formState;
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'First name:',
                  react_default.a.createElement(src.Text, {
                    field: 'name',
                    validate: validate
                  })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement('label', null, 'Values:'),
                react_default.a.createElement(
                  'code',
                  null,
                  JSON.stringify(formState.values)
                ),
                react_default.a.createElement('label', null, 'Touched:'),
                react_default.a.createElement(
                  'code',
                  null,
                  JSON.stringify(formState.touched)
                ),
                react_default.a.createElement('label', null, 'Errors:'),
                react_default.a.createElement(
                  'code',
                  null,
                  JSON.stringify(formState.errors)
                ),
                react_default.a.createElement('label', null, 'Invalid:'),
                react_default.a.createElement(
                  'code',
                  null,
                  JSON.stringify(formState.invalid)
                ),
                react_default.a.createElement('label', null, 'Pristine:'),
                react_default.a.createElement(
                  'code',
                  null,
                  JSON.stringify(formState.pristine)
                ),
                react_default.a.createElement('label', null, 'Dirty:'),
                react_default.a.createElement(
                  'code',
                  null,
                  JSON.stringify(formState.dirty)
                ),
                react_default.a.createElement('label', null, 'Submits:'),
                react_default.a.createElement('code', null, formState.submits),
                react_default.a.createElement('label', null, 'Error:'),
                react_default.a.createElement('code', null, formState.error)
              );
            }
          );
        }
      );
    },
    516: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Form State Component\n\nSometimes you just want to see whats going on with the form state.\nThis can easily be achived by rendering a FormState component within the `<Form>`\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, FormState } from \'informed\';\n\n<Form>\n  <label>\n  First name:\n  <Text field="name" />\n  </label>\n  <button type="submit">Submit</button>\n  <FormState />\n</Form>;\n```\n',
        function FormStateExample() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                'label',
                null,
                'First name:',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(src.FormState, null)
            )
          );
        }
      );
    },
    517: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(0);
      var storybook_readme = __webpack_require__(87);
      __webpack_exports__.a = Object(storybook_readme.doc)(
        '# Form Props\n\n`Informed`s Form element can take many props. Below is table that defines what\nprops are available and what they do.\n\n| Name               | Type         | Description                                                                                                                                                                                                                                                                                                                         |\n| ------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| children           | node OR func | A function that is given the form api and form state as props parameter FAAC ( Function As A Child ). Or normal JSX children                                                                                                                                                                                                        |\n| component          | node         | A React component that is given the `formApi` and `formState` as props                                                                                                                                                                                                                                                              |\n| render             | func         | A render function that is given the `formApi` and `formState` as props                                                                                                                                                                                                                                                              |\n| onSubmit           | func         | A function that gets called when form is submitted successfully. The function receives the values as a parameter                                                                                                                                                                                                                    |\n| initialValues      | obj          | Use this if you want to populate the form with initial values.                                                                                                                                                                                                                                                                      |\n| onChange           | func         | Function that gets called when form updates. Function receives the formState as a parameter.                                                                                                                                                                                                                                        |\n| onValueChange      | func         | Function that gets called when forms values change. Function receives the values as a parameter.                                                                                                                                                                                                                                    |\n| dontPreventDefault | bool         | The default is to always "preventDefault" when a form submits. Pass this to disable "preventingDefault". You would, for example, pass this in when you want to use a good old form submission using action="/foo.php" on your form.                                                                                                 |\n| getApi             | func         | To retrieve the form api as a callback, you can pass a function to the `getApi` prop. Your function will be called with the formApi as the only parameter. You can save this as a reference to easily manipulate your form from outside of the form scope. Note: this is no different then using a ref in react ( same principle ). |\n| onSubmitFailure    | func         | Function that gets called when submission fails due to errors. Function will receive the errors.                                                                                                                                                                         |\n| validate           | func         | Function that gets called when form is attempting to submit. Function accepts the values as a parameter and must return either an error or undefined.                                                                                                                                                                         |\n| validateFields     | func         | Function that gets called when form is attempting to submit. Function accepts the values as a parameter and must return an object where the key is the field and the value is an error or undefined                                                                                                                                                                         |\n| validationSchema     | yup schema   |    A yup schema to perform validation |\n| allowEmptyStrings     | bool         | Enable empty strings in the form values ( by default when you backspace everything in a text field it will remove the value from the values )                                                                                                                                                             |\n| preventEnter     | bool         |    Prevents the enter key from submitting the form |\n| onReset | func | Function that gets called when form is reset.'
      );
    },
    518: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1);
      __webpack_exports__.a = Object(withDocs.a)(
        "# Form Api\n\n**`Informed` gives you access to a `formApi`!**\n\nThis api allows you to grab and manipulate values using getters and setters. Below is a table that describes each function available within the formApi.\n\n| Function     | Example                                 | Description                                                                                                                                                                                                                                                                                                               |\n| ------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| submitForm   | `submitForm()`                          | This function will submit the form and trigger some lifecycle events. 1. It will set all the fields to touched. 2. It will call all validators. 3. It will call onSubmit if the form is valid. This function can be called manually however it is also called if you have a `<button type='submit'>` within the `<Form>`. |\n| setValue     | `setValue('greeting', 'Hello')`         | Function that takes two parameters, the first is the field name, and the second is the value you want to set it to.                                                                                                                                                                                                       |\n| getValue     | `getValue('greeting')`                  | Function that when given a field name will return its value.                                                                                                                                                                                                                                                              |\n| setTouched   | `setTouched('greeting', true)`          | Function that takes two parameters, the first is the field name, and the second is true or false.                                                                                                                                                                                                                         |\n| getTouched   | `getTouched('greeting')`                | Function that when given a field name will return whether or not its touched.                                                                                                                                                                                                                                             |\n| setError     | `setError('greeting', 'Error message')` | Function that takes two parameters, the first is the field name, and the second is the error message you want to set it to.                                                                                                                                                                                               |\n| getError     | `getError('greeting')`                  | Function that when given a field name will return its error.                                                                                                                                                                                                                                                              |\n| getState     | `getState()`                            | Function that returns the formState. Note this will only return the state as it existed when the function was called.                                                                                                                                                                                                     |\n| reset        | `reset()`                               | Function that will reset the form to its initial state.                                                                                                                                                                                                                                                                   |\n| setValues    | `setValues({ greeting: 'hello'})`       | Function that will set the fields values.                                                                                                                                                                                                                                                                                 |\n| setValues    | `setValues({ greeting: 'hello'})`       | Function that will set the fields values.                                                                                                                                                                                                                                                                                 |\n| setFormError | `setFormError('There was an error!')`   | Function that will set the forms error manually.                                                                                                                                                                                                                                                                          |\n| validate     | `validate()`                            | Function that will trigger the forms validation manually.                                                                                                                                                                                                                                                                 |\n\n**\"Ok so informed gives us access to this formApi.. but how do i get my hands\non it??**\n\nThats a great question! There are many ways so lets take a look at a few!\n\nBelow is an example that shows you how to access the form api and use some of\nits functions.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from 'informed';\n\n<Form id=\"form-api-form\">\n  {({ formApi }) => (\n    <div>\n      <label>\n        First name:\n        <Text field=\"name\" validate={validate} />\n      </label>\n      <button type=\"button\" onClick={() => formApi.setValue('name', 'Joe')}>\n        Set Name to \"Joe\"\n      </button>\n      <button type=\"button\" onClick={() => formApi.setValue('name', 'Kevin')}>\n        Set Name to \"Kevin\"\n      </button>\n      <button type=\"button\" onClick={() => formApi.reset()}>\n        Reset\n      </button>\n      <button type=\"submit\">Submit</button>\n    </div>\n  )}\n</Form>;\n```\n\n### What is this magic?\n\nIts not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)\n\nThere are five ways you can get access to `Informed`s form api.\n\n1. By accessing the `formApi` as a parameter to a child render function.\n\n```jsx\n<Form>\n  {({ formApi }) => (\n    <div>\n      <Text field=\"hello\" />\n      <button\n        type=\"button\"\n        onClick={() => formApi.setValue('hello', 'world!')}\n      />\n      <button type=\"submit\">Submit</button>\n    </div>\n  )}\n</Form>\n```\n\n<br/>\n2) By accessing the `formApi` as a parameter to a render prop.\n\n```jsx\n<Form\n  render={({ formApi }) => (\n    <div>\n      <Text field=\"hello\" />\n      <button\n        type=\"button\"\n        onClick={() => formApi.setValue('hello', 'world!')}\n      />\n      <button type=\"submit\">Submit</button>\n    </div>\n  )}\n/>\n```\n\n<br/>\n3) By accessing the `formApi` as a prop to a component prop.\n\n```jsx\nconst FormContent = ({ formApi }) => (\n  <div>\n    <Text field=\"hello\" />\n    <button type=\"button\" onClick={() => formApi.setValue('hello', 'world!')} />\n    <button type=\"submit\">Submit</button>\n  </div>\n);\n\n<Form component={FormContent} />;\n```\n\n<br/>\n4) By accessing the `formApi` as a prop via a HOC ( High Order Component ).\n\n```jsx\nconst ComponentWithFormApi = withFormApi(({ formApi }) => (\n  return <button type=\"button\" onClick={()=>formApi.setValue('hello', 'world!')}/>\n));\n\n<Form>\n  <div>\n    <Text field=\"hello\" />\n    <button type=\"submit\">Submit</button>\n    <ComponentWithFormApi />\n  </div>\n</Form>\n```\n\n<br/>\n5) By accessing the `formApi` via Hooks!\n\n```jsx\nconst ComponentWithFormApi = () => {\n  const formApi = useFormApi();\n  return (\n    <button type=\"button\" onClick={() => formApi.setValue('hello', 'world!')} />\n  );\n};\n\n<Form>\n  <div>\n    <Text field=\"hello\" />\n    <button type=\"submit\">Submit</button>\n    <ComponentWithFormApi />\n  </div>\n</Form>;\n```\n\n<br/>\nSo if you do need access to the form api, any of these methods will work.\n",
        function FormApi() {
          return react_default.a.createElement(
            src.Form,
            { id: 'form-api-form' },
            function(_ref) {
              var formApi = _ref.formApi;
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  { htmlFor: 'form-state-name' },
                  'First name:'
                ),
                react_default.a.createElement(src.Text, {
                  field: 'name',
                  id: 'form-api-name'
                }),
                react_default.a.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function onClick() {
                      return formApi.setValue('name', 'Joe');
                    }
                  },
                  'Set Name to "Joe"'
                ),
                react_default.a.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function onClick() {
                      return formApi.setValue('name', 'Kevin');
                    }
                  },
                  'Set Name to "Kevin"'
                ),
                react_default.a.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function onClick() {
                      return formApi.reset();
                    }
                  },
                  'Reset'
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                )
              );
            }
          );
        }
      );
    },
    519: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var validate = function validate(value) {
          return null == value ? 'This field is required' : void 0;
        },
        Complex_Info = function Info() {
          var next = Object(src.useMultistepApi)().next;
          return react_default.a.createElement(
            src.Multistep.Step,
            { step: 'info', next: 'allergies' },
            react_default.a.createElement(
              'label',
              null,
              'Please enter your first name:',
              react_default.a.createElement(src.Text, {
                field: 'first',
                validate: validate
              })
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: next },
              'Next'
            )
          );
        },
        Complex_Allergic = function Allergic(_ref) {
          _ref.state;
          var _useMultistepApi2 = Object(src.useMultistepApi)(),
            next = _useMultistepApi2.next,
            back = _useMultistepApi2.back;
          return react_default.a.createElement(
            src.Multistep.Step,
            {
              step: 'allergies',
              next: function next(values) {
                return values.allergic ? 'epipen' : 'color';
              },
              previous: 'info'
            },
            react_default.a.createElement(
              'label',
              null,
              'Are you alergic to penut butter?:',
              react_default.a.createElement(src.Checkbox, {
                field: 'allergic',
                validate: validate
              })
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: next },
              'Next'
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: back },
              'Back'
            )
          );
        },
        Complex_EpiPen = function EpiPen() {
          var _useMultistepApi3 = Object(src.useMultistepApi)(),
            next = _useMultistepApi3.next,
            back = _useMultistepApi3.back;
          return react_default.a.createElement(
            src.Multistep.Step,
            {
              step: 'epipen',
              next: 'color',
              previous: 'allergies',
              relevant: function relevant(_ref2) {
                return _ref2.allergic;
              }
            },
            react_default.a.createElement(
              'label',
              null,
              'Do you have an epipen?:',
              react_default.a.createElement(
                src.RadioGroup,
                { field: 'epipen', validate: validate },
                react_default.a.createElement(
                  'label',
                  null,
                  'Yes ',
                  react_default.a.createElement(src.Radio, { value: 'yes' })
                ),
                react_default.a.createElement(
                  'label',
                  null,
                  'No ',
                  react_default.a.createElement(src.Radio, { value: 'no' })
                )
              )
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: next },
              'Next'
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: back },
              'Back'
            )
          );
        },
        Complex_Color = function Color() {
          var _useMultistepApi4 = Object(src.useMultistepApi)(),
            back = _useMultistepApi4.back,
            next = _useMultistepApi4.next;
          return react_default.a.createElement(
            src.Multistep.Step,
            {
              step: 'color',
              next: 'dog',
              previous: function previous(values) {
                return values.allergic ? 'epipen' : 'allergies';
              }
            },
            react_default.a.createElement(
              'label',
              null,
              'Please enter your favorite color:',
              react_default.a.createElement(src.Text, {
                field: 'color',
                validate: validate
              })
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: next },
              'Next'
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: back },
              'Back'
            ),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            )
          );
        },
        Complex_Dog = function Dog() {
          var back = Object(src.useMultistepApi)().back;
          return react_default.a.createElement(
            src.Multistep.Step,
            { step: 'dog', previous: 'color' },
            react_default.a.createElement(
              'label',
              null,
              'Do you have a dog? ',
              react_default.a.createElement(src.Checkbox, { field: 'hasDog' })
            ),
            react_default.a.createElement(
              src.Relevant,
              {
                when: function when(_ref3) {
                  return _ref3.values.hasDog;
                }
              },
              react_default.a.createElement(
                'label',
                null,
                'Whats your dogs name?:',
                react_default.a.createElement(src.Text, {
                  field: 'dogName',
                  validate: validate,
                  relevant: function relevant(values) {
                    return values.hasDog;
                  }
                })
              )
            ),
            react_default.a.createElement(
              'button',
              { type: 'button', onClick: back },
              'Back'
            ),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            )
          );
        },
        Complex_Buttons = function Buttons() {
          var setCurrent = Object(src.useMultistepApi)().setCurrent;
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return setCurrent('info');
                }
              },
              'Jump2 Info'
            ),
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return setCurrent('allergies');
                }
              },
              'Jump2 Allergic'
            ),
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return setCurrent('epipen');
                }
              },
              'Jump2 EpiPen'
            ),
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return setCurrent('color');
                }
              },
              'Jump2 Color'
            ),
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return setCurrent('dog');
                }
              },
              'Jump2 Dog'
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Multistep Forms\n\nSomtimes you need to create a form with multiple steps and the steps are dynamic, meaning the next\nsteps depend on the previous steps. This can easliy be done with informed.\nBelow is an example of a form that has four steps. It will not proceed to the next step,\nunless the previous step is valid. In addition it will only validate relevant fields where a fields "relevance"\ncan be defined by a `relevant` function.\n\nThis is hard to describe in words so hopefully the example below helps!\n\n**Hint:** Perform the user flow described below.\n\n1. Type a name into the name field and click next\n2. Select the checkbox because you\'re allergic to penut butter :( then click next\n3. Select yes becauese you have an epipen\n4. Type in a color DONT CLICK SUBMIT\n5. You just remembered that you actually are NOT allergic to penut butter! So Jump back to the allergy question.\n6. Uncheck the checkbox and note how the form state changes! The epipen question goes away!\n7. Click next and note how you go to the color question instead of the epi pen question.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFormApi, useFormState } from \'informed\';\n\nconst validate = value =>\n  value == null ? \'This field is required\' : undefined;\n\n/**\n *\n * At any point in time the form is in a state, and the following questions\n * need to be answered\n * 1. What is the next quesion\n * 2. What is the previous quesion\n * 3. Am I a relevant quesion\n *\n * Example: Suppose this user flow\n *\n * Name\n *   ^\n * User types name and clicks the next button\n *\n * Name ------\x3e Allergic\n *                 ^\n * User selects yes and clicks the next button\n *\n * Name ------\x3e Allergic( yes ) -------\x3e EpiPen\n *                                          ^\n * User selects yes and clicks the next button\n *\n * Name ------\x3e Allergic( yes ) -------\x3e EpiPen( yes ) ------\x3e Color\n *                                                               ^\n * User decides to jump back to the Allergic quesion\n *\n * Name ------\x3e Allergic( yes ) -------\x3e EpiPen ------\x3e Color\n *                 ^\n * User selects No and clicks the next button\n *\n * Name ------\x3e Allergic( no ) ------\x3e Color\n *                                       ^\n * At this point Allergic Component decides his next is color and epi pen decides he is No longer relevant\n *\n **/\n\nconst Info = () => {\n  const { next } = useMultistepApi();\n  return (\n    <Multistep.Step step="info" next="allergies">\n      <label>\n        Please enter your first name:\n        <Text field="first" validate={validate} />\n      </label>\n      <button type="button" onClick={next}>\n        Next\n      </button>\n    </Multistep.Step>\n  );\n};\n\nconst Allergic = () => {\n  const { next, back } = useMultistepApi();\n  return (\n    <Multistep.Step\n      step="allergies"\n      next={values => (values.allergic ? \'epipen\' : \'color\')}\n      previous="info">\n      <label>\n        Are you alergic to penut butter?:\n        <Checkbox field="allergic" validate={validate} />\n      </label>\n      <button type="button" onClick={next}>\n        Next\n      </button>\n      <button type="button" onClick={back}>\n        Back\n      </button>\n    </Multistep.Step>\n  );\n};\n\nconst EpiPen = () => {\n  const { next, back } = useMultistepApi();\n\n  // Only relevant if the person is allergic\n  const relevant = ({ allergic }) => allergic;\n\n  return (\n    <Multistep.Step\n      step="epipen"\n      next="color"\n      previous="allergies"\n      relevant={relevant}>\n      <label>\n        Do you have an epipen?:\n        <RadioGroup field="epipen" validate={validate}>\n          <label>\n            Yes <Radio value="yes" />\n          </label>\n          <label>\n            No <Radio value="no" />\n          </label>\n        </RadioGroup>\n      </label>\n      <button type="button" onClick={next}>\n        Next\n      </button>\n      <button type="button" onClick={back}>\n        Back\n      </button>\n    </Multistep.Step>\n  );\n};\n\nconst Color = () => {\n  const { back, next } = useMultistepApi();\n\n  return (\n    <Multistep.Step\n      step="color"\n      next="dog"\n      previous={values => (values.allergic ? \'epipen\' : \'allergies\')}>\n      <label>\n        Please enter your favorite color:\n        <Text field="color" validate={validate} />\n      </label>\n      <button type="button" onClick={next}>\n        Next\n      </button>\n      <button type="button" onClick={back}>\n        Back\n      </button>\n      <button type="submit">Submit</button>\n    </Multistep.Step>\n  );\n};\n\nconst Dog = () => {\n  const { back } = useMultistepApi();\n\n  return (\n    <Multistep.Step step="dog" previous="color">\n      <label>\n        Do you have a dog? <Checkbox field="hasDog" />\n      </label>\n      <Relevant when={({ values }) => values.hasDog}>\n        <label>\n          Whats your dogs name?:\n          <Text\n            field="dogName"\n            validate={validate}\n            relevant={values => values.hasDog}\n          />\n        </label>\n      </Relevant>\n      <button type="button" onClick={back}>\n        Back\n      </button>\n      <button type="submit">Submit</button>\n    </Multistep.Step>\n  );\n};\n\nconst Buttons = () => {\n  const { setCurrent } = useMultistepApi();\n\n  return (\n    <div>\n      <button type="button" onClick={() => setCurrent(\'info\')}>\n        Jump2 Info\n      </button>\n      <button type="button" onClick={() => setCurrent(\'allergies\')}>\n        Jump2 Allergic\n      </button>\n      <button type="button" onClick={() => setCurrent(\'epipen\')}>\n        Jump2 EpiPen\n      </button>\n      <button type="button" onClick={() => setCurrent(\'color\')}>\n        Jump2 Color\n      </button>\n      <button type="button" onClick={() => setCurrent(\'dog\')}>\n        Jump2 Dog\n      </button>\n    </div>\n  );\n};\n\n<Form>\n  <Multistep initialStep="info">\n    <div\n      style={{\n        border: \'solid 1px\',\n        padding: \'10px\',\n        marginBottom: \'10px\'\n      }}>\n      <Info />\n      <Allergic />\n      <EpiPen />\n      <Color />\n      <Dog />\n    <Buttons />\n  </Multistep>\n</Form>;\n```\n',
        function Basic() {
          var _useState2 = _slicedToArray(Object(react.useState)(0), 2),
            state = _useState2[0],
            multistepApiRef = (_useState2[1], Object(react.useRef)());
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { id: 'basic-form' },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    src.Multistep,
                    { initialStep: 'info', multistepApiRef: multistepApiRef },
                    react_default.a.createElement(
                      'div',
                      {
                        style: {
                          border: 'solid 1px',
                          padding: '10px',
                          marginBottom: '10px'
                        }
                      },
                      react_default.a.createElement(Complex_Info, null),
                      react_default.a.createElement(Complex_Allergic, {
                        state: state
                      }),
                      react_default.a.createElement(Complex_EpiPen, null),
                      react_default.a.createElement(Complex_Color, null),
                      react_default.a.createElement(Complex_Dog, null)
                    ),
                    react_default.a.createElement(Complex_Buttons, null)
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, {
                    errors: !0,
                    values: !0
                  })
                )
              )
            )
          );
        }
      );
    },
    520: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        Modal = __webpack_require__(37),
        src = __webpack_require__(1);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var validate = function validate(value) {
          if (!value || value.length < 5)
            return 'Field must be at least five characters';
        },
        SimpleValidation_SimpleValidation = (function(_Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(SimpleValidation, _Component);
          var _super = _createSuper(SimpleValidation);
          function SimpleValidation() {
            return (
              _classCallCheck(this, SimpleValidation),
              _super.apply(this, arguments)
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(SimpleValidation, [
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Form,
                      {
                        onSubmit: function onSubmit() {
                          return _this.modal.open();
                        },
                        id: 'validate-form'
                      },
                      function(_ref) {
                        _ref.formApi;
                        var formState = _ref.formState;
                        return react_default.a.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Color:',
                              react_default.a.createElement(src.Text, {
                                field: 'color',
                                validate: validate
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Food:',
                              react_default.a.createElement(src.Text, {
                                field: 'food',
                                validate: validate
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Car:',
                              react_default.a.createElement(src.Text, {
                                field: 'car',
                                validate: validate
                              })
                            ),
                            react_default.a.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Values:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.values, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Errors:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.errors, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Invalid:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.invalid, null, 2)
                            )
                          ),
                          react_default.a.createElement(
                            Modal.a,
                            {
                              getControl: function getControl(model) {
                                return (_this.modal = model);
                              }
                            },
                            react_default.a.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            SimpleValidation
          );
        })(react.Component);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Simple Validation\n\nSimple validation can be achieved by passing a validation function to the input.\nBelow is an example form that has validation functions. The function defined\nwill return an error when the input has less than five characters, or there is\nno value at all, and undefined otherwise. We pass this validation function to every\ninput and validation will **occur on submission**.\n\n**Try clicking the submit button and see what happens:**\n\n\x3c!-- STORY --\x3e\n\nWhat just happened? When you clicked on the submit button all of the validation\nfunctions were triggered for each field. Because every validation failed, the\nform never actually called onSubmit. In other words, informed will only\nsubmit a valid form.\n\n**Get rid of the errors by typing at least 5 characters in each field and\nclick the submit button again and see what happens:**\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validate = value => {\n  if (!value || value.length < 5) return \'Field must be at least five characters\';\n}\n\n<Form>\n  <label>Color:<Text field="color" validate={validate}/></label>\n  <label>Food:<Text field="food" validate={validate}/></label>\n  <label>Car:<Text field="car" validate={validate}/></label>\n  <button type="submit">Submit</button>\n</Form>\n```\n',
        function() {
          return react_default.a.createElement(
            SimpleValidation_SimpleValidation,
            null
          );
        }
      );
    },
    521: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        Modal = __webpack_require__(37),
        src = __webpack_require__(1),
        es = __webpack_require__(63);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var SignupSchema = es.a().shape({
          firstName: es
            .b()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          lastName: es
            .b()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          email: es
            .b()
            .email('Invalid email')
            .required('Required')
        }),
        YupValidation_SimpleValidation = (function(_Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(SimpleValidation, _Component);
          var _super = _createSuper(SimpleValidation);
          function SimpleValidation() {
            return (
              _classCallCheck(this, SimpleValidation),
              _super.apply(this, arguments)
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(SimpleValidation, [
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Form,
                      {
                        onSubmit: function onSubmit() {
                          return _this.modal.open();
                        },
                        validationSchema: SignupSchema,
                        id: 'validate-form'
                      },
                      function(_ref) {
                        _ref.formApi;
                        var formState = _ref.formState;
                        return react_default.a.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'First Name:',
                              react_default.a.createElement(src.Text, {
                                field: 'firstName'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Last Name:',
                              react_default.a.createElement(src.Text, {
                                field: 'lastName'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Email:',
                              react_default.a.createElement(src.Text, {
                                field: 'email'
                              })
                            ),
                            react_default.a.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Values:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.values, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Errors:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.errors, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Invalid:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.invalid, null, 2)
                            )
                          ),
                          react_default.a.createElement(
                            Modal.a,
                            {
                              getControl: function getControl(model) {
                                return (_this.modal = model);
                              }
                            },
                            react_default.a.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            SimpleValidation
          );
        })(react.Component);
      __webpack_exports__.a = Object(withDocs.a)(
        "# Yup Validation\n\nValidation via yup can be achieved by passing a validationSchema to the form.\n\n**Try clicking the submit button and see what happens:**\n\n\x3c!-- STORY --\x3e\n\nWhat just happened? When you clicked on the submit button informed triggered validate on the yup schema.\n\n**Get rid of the errors by typing at least 2 characters in each name field and a valid email, then\nclick the submit button again and see what happens:**\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, Text } from 'informed';\nimport * as Yup from 'yup'; \n\nconst SignupSchema = Yup.object().shape({\n  firstName: Yup.string()\n    .min(2, 'Too Short!')\n    .max(50, 'Too Long!')\n    .required('Required'),\n  lastName: Yup.string()\n    .min(2, 'Too Short!')\n    .max(50, 'Too Long!')\n    .required('Required'),\n  email: Yup.string()\n    .email('Invalid email')\n    .required('Required'),\n});\n\n<Form validationSchema={SignupSchema}>\n  <label>First Name:<Text field=\"firstName\" /></label>\n  <label>Last Name:<Text field=\"lastName\" /></label>\n  <label>Email:<Text field=\"email\" /></label>\n  <button type=\"submit\">Submit</button>\n</Form>\n```\n",
        function() {
          return react_default.a.createElement(
            YupValidation_SimpleValidation,
            null
          );
        }
      );
    },
    522: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        Modal = __webpack_require__(37),
        src = __webpack_require__(1),
        es = __webpack_require__(63);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var SignupSchema = es.a().shape({
          firstName: es
            .b()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          email: es
            .b()
            .email('Invalid email')
            .required('Required')
        }),
        lastNameSchema = es
          .b()
          .min(2, 'Last Name Too Short!')
          .max(50, 'Last Name Too Long!')
          .required('Last Name Required'),
        FieldLevelYupValidation_SimpleValidation = (function(_Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(SimpleValidation, _Component);
          var _super = _createSuper(SimpleValidation);
          function SimpleValidation() {
            return (
              _classCallCheck(this, SimpleValidation),
              _super.apply(this, arguments)
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(SimpleValidation, [
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Form,
                      {
                        onSubmit: function onSubmit() {
                          return _this.modal.open();
                        },
                        validationSchema: SignupSchema,
                        id: 'validate-form'
                      },
                      function(_ref) {
                        _ref.formApi;
                        var formState = _ref.formState;
                        return react_default.a.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'First Name:',
                              react_default.a.createElement(src.Text, {
                                field: 'firstName'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Last Name:',
                              react_default.a.createElement(src.Text, {
                                field: 'lastName',
                                validationSchema: lastNameSchema
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Email:',
                              react_default.a.createElement(src.Text, {
                                field: 'email'
                              })
                            ),
                            react_default.a.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Values:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.values, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Errors:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.errors, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Invalid:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.invalid, null, 2)
                            )
                          ),
                          react_default.a.createElement(
                            Modal.a,
                            {
                              getControl: function getControl(model) {
                                return (_this.modal = model);
                              }
                            },
                            react_default.a.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            SimpleValidation
          );
        })(react.Component);
      __webpack_exports__.a = Object(withDocs.a)(
        "# Field Level Yup Validation\n\nValidation via yup can be achieved at the field level by passing a validationSchema to a field.\n\n**Try clicking the submit button and see what happens:**\n\n\x3c!-- STORY --\x3e\n\nWhat just happened? When you clicked on the submit button informed triggered validate on the yup schema. \nThen it triggered validation at the field level. How cool is that!\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, Text } from 'informed';\nimport * as Yup from 'yup'; \n\nconst SignupSchema = Yup.object().shape({\n  firstName: Yup.string()\n    .min(2, 'Too Short!')\n    .max(50, 'Too Long!')\n    .required('Required'),\n  email: Yup.string()\n    .email('Invalid email')\n    .required('Required'),\n});\n\nconst lastNameSchema = Yup.string()\n  .min(2, 'Last Name Too Short!')\n  .max(50, 'Last Name Too Long!')\n  .required('Last Name Required');\n\n<Form validationSchema={SignupSchema}>\n  <label>First Name:<Text field=\"firstName\" /></label>\n  <label>Last Name:<Text field=\"lastName\" validationSchema={lastNameSchema}/></label>\n  <label>Email:<Text field=\"email\" /></label>\n  <button type=\"submit\">Submit</button>\n</Form>\n```\n",
        function() {
          return react_default.a.createElement(
            FieldLevelYupValidation_SimpleValidation,
            null
          );
        }
      );
    },
    523: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        Modal = __webpack_require__(37),
        src = __webpack_require__(1);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var basicValidation = function basicValidation(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        friendValidation = function friendValidation(value, values) {
          return (
            basicValidation(value) ||
            (function duplicateValidation(value, values) {
              return values.filter(function(v) {
                return v === value;
              }).length > 1
                ? 'This field must be unique.'
                : void 0;
            })(value, values.friends)
          );
        },
        ComplexValidation_ComplexValidation = (function(_React$Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(ComplexValidation, _React$Component);
          var _super = _createSuper(ComplexValidation);
          function ComplexValidation() {
            return (
              _classCallCheck(this, ComplexValidation),
              _super.apply(this, arguments)
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(ComplexValidation, [
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Form,
                      {
                        onSubmit: function onSubmit() {
                          return _this.modal.open();
                        },
                        id: 'complex-validation-form'
                      },
                      function(_ref) {
                        _ref.formApi;
                        var formState = _ref.formState;
                        return react_default.a.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            react_default.a.createElement(
                              'label',
                              { htmlFor: 'complex-name' },
                              'First name:'
                            ),
                            react_default.a.createElement(src.Text, {
                              field: 'name',
                              id: 'complex-name',
                              validate: basicValidation
                            }),
                            react_default.a.createElement(
                              src.Scope,
                              { scope: 'favorite' },
                              react_default.a.createElement(
                                'label',
                                { htmlFor: 'complex-color' },
                                'Favorite color:'
                              ),
                              react_default.a.createElement(src.Text, {
                                field: 'color',
                                id: 'complex-color',
                                validate: basicValidation
                              }),
                              react_default.a.createElement(
                                'label',
                                { htmlFor: 'complex-food' },
                                'Favorite food:'
                              ),
                              react_default.a.createElement(src.Text, {
                                field: 'food',
                                id: 'complex-food',
                                validate: basicValidation
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              { htmlFor: 'complex-friend-0' },
                              'Friend 1:'
                            ),
                            react_default.a.createElement(src.Text, {
                              field: 'friends[0]',
                              id: 'complex-friend-0',
                              validate: friendValidation
                            }),
                            react_default.a.createElement(
                              'label',
                              { htmlFor: 'complex-friend-1' },
                              'Friend 2:'
                            ),
                            react_default.a.createElement(src.Text, {
                              field: 'friends[1]',
                              id: 'complex-friend-1',
                              validate: friendValidation
                            }),
                            react_default.a.createElement(
                              'label',
                              { htmlFor: 'complex-friend-2' },
                              'Friend 3:'
                            ),
                            react_default.a.createElement(src.Text, {
                              field: 'friends[2]',
                              id: 'complex-friend-2',
                              validate: friendValidation
                            }),
                            react_default.a.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Values:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.values, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Errors:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.errors, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Invalid:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.invalid, null, 2)
                            )
                          ),
                          react_default.a.createElement(
                            Modal.a,
                            {
                              getControl: function getControl(model) {
                                return (_this.modal = model);
                              }
                            },
                            react_default.a.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            ComplexValidation
          );
        })(react_default.a.Component);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Complex Validation\n\nComplex validation can be achieved by passing a validation function to an input,\nthat also accepts all the values in the form. Below is an example form\nthat has validation functions on each input. The Basic validation function will\nreturn an error when the input has less than five characters, or there is no\nvalue at all, and undefined otherwise. The friendValidation function will show errors\nwhen basic validation fails OR two friends have the same name. We pass the input\nvalidation function to every input and the friendValidation function to the\nfriend fields. Validation will **occur on submission**.\n\n**Try clicking the submit button and see what happens:**\n\n\x3c!-- STORY --\x3e\n\nWhat just happened? When you clicked on the submit button all of the validation\nfunctions were triggered for each field. Because every validation failed, the\nform never actually called onSubmit. In other words, informed will only\nsubmit a valid form.\n\n**Get rid of the errors by typing more than 5 characters in each field and\nalso type "George" in two of the friend fields. Click the submit button again\nand see what happens:**\n\nAll of our basic level validation passed but when the form attempted to submit\nthe additional friend checks failed.\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, Text, Scope } from \'informed\';\n\nconst basicValidation = value => {\n  return !value || value.length < 5 ? \'Field must be longer than five characters\' : undefined;\n}\n\nconst duplicateValidation = ( value, values ) => {\n  return values.filter( v => v === value ).length > 1 ? \'This field must be unique.\' : undefined;\n}\n\nconst friendValidation = ( value, values ) => {\n  return basicValidation(value) || duplicateValidation( value, values.friends )\n}\n\n<Form id="complex-validate-form">\n  <label htmlFor="complex-name">First name:</label>\n  <Text field="name" id="complex-name" validate={basicValidation} />\n  <Scope scope="favorite">\n    <label htmlFor="complex-color">Favorite color:</label>\n    <Text field="color" id="complex-color" validate={basicValidation} />undefined\n    <label htmlFor="complex-food">Favorite food:</label>\n    <Text field="food" id="complex-food" validate={basicValidation} />\n  </Scope>\n  <label htmlFor="complex-friend-0">Friend 1:</label>\n  <Text field="friends[0]" id="complex-friend-0" validate={friendValidation} />\n  <label htmlFor="complex-friend-1">Friend 2:</label>\n  <Text field="friends[1]" id="complex-friend-1" validate={friendValidation} />\n  <label htmlFor="complex-friend-2">Friend 3:</label>\n  <Text field="friends[2]" id="complex-friend-2" validate={friendValidation} />\n  <button type="submit">\n    Submit\n  </button>\n</Form>\n```\n',
        function() {
          return react_default.a.createElement(
            ComplexValidation_ComplexValidation,
            null
          );
        }
      );
    },
    524: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        validate = function validate(value) {
          if (!value || value.length < 5)
            return 'Field must be at least five characters';
        };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Validation Control\n\nBy default fields will only validate when the submit button is clicked. To get\nmore granular validation ( onBlur && onChange ), simply pass in validateOnChange\nor validateOnBlur or even both!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validate = value => {\n  if (!value || value.length < 5)\n    return \'Field must be at least five characters\';\n};\n\n<Form id="validate-control-form">\n  <label htmlFor="validate-color">Color:</label>\n  <small>Validate on blur</small>\n  <Text field="color" id="validate-color" validateOnBlur validate={validate} />\n  <label htmlFor="validate-food">Food:</label>\n  <small>Validate on change</small>\n  <Text field="food" id="validate-food" validateOnChange validate={validate} />\n  <label htmlFor="validate-car">Car:</label>\n  <small>Validate on blur and change</small>\n  <Text\n    field="car"\n    id="validate-car"\n    validateOnBlur\n    validateOnChange\n    validate={validate}\n  />\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
        function ValidationControl() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { id: 'validate-control-form' },
              function(_ref) {
                _ref.formApi;
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap' } },
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 1, marginRight: '2rem' } },
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'validate-color' },
                      'Color:'
                    ),
                    react_default.a.createElement(
                      'small',
                      null,
                      'Validate on blur'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'color',
                      id: 'validate-color',
                      validateOnBlur: !0,
                      validate: validate
                    }),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'validate-food' },
                      'Food:'
                    ),
                    react_default.a.createElement(
                      'small',
                      null,
                      'Validate on change'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'food',
                      id: 'validate-food',
                      validateOnChange: !0,
                      validate: validate
                    }),
                    react_default.a.createElement(
                      'label',
                      { htmlFor: 'validate-car' },
                      'Car:'
                    ),
                    react_default.a.createElement(
                      'small',
                      null,
                      'Validate on blur and change'
                    ),
                    react_default.a.createElement(src.Text, {
                      field: 'car',
                      id: 'validate-car',
                      validateOnBlur: !0,
                      validateOnChange: !0,
                      validate: validate
                    }),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  ),
                  react_default.a.createElement(
                    'div',
                    { style: { flex: 2, minWidth: '300px' } },
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    ),
                    react_default.a.createElement('label', null, 'Errors:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.errors, null, 2)
                    ),
                    react_default.a.createElement('label', null, 'Invalid:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.invalid, null, 2)
                    )
                  )
                );
              }
            )
          );
        }
      );
    },
    525: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        validate = function validate(values, length) {
          if (length < 3) return 'You must have at least three friends.';
        },
        validateLength = function validateLength(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        ArrayFieldValidation_DynamicArraysContent = function DynamicArraysContent() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    src.ArrayField,
                    { field: 'siblings', validate: validate },
                    function(_ref) {
                      var add = _ref.add,
                        fields = _ref.fields;
                      return react_default.a.createElement(
                        react_default.a.Fragment,
                        null,
                        react_default.a.createElement(
                          'button',
                          { onClick: add, type: 'button' },
                          'Add Sibling'
                        ),
                        fields.map(function(_ref2, i) {
                          var field = _ref2.field,
                            key = _ref2.key,
                            remove = _ref2.remove;
                          return react_default.a.createElement(
                            'label',
                            { key: key },
                            'Sibling ',
                            i,
                            ':',
                            react_default.a.createElement(src.Text, {
                              field: field,
                              validate: validateLength
                            }),
                            react_default.a.createElement(
                              'button',
                              { type: 'button', onClick: remove },
                              'Remove'
                            )
                          );
                        })
                      );
                    }
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, { errors: !0 })
                )
              )
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Array field validation\n\nValidating an array field is also possible but can be tricky! Below is an example of \na dynamic array form. You will find two validation functions. The first is a validate\nfunction that executes at the field level, the second is a validation funciton that gets \nexecuted on the whole array. \n\nWhy is it tricky?? Because both the array level and field level are fighting to set \n`errors.siblings`. The field level validation wants to set `errors.siblings[i]` to a field\nlevel error, where the array level validation wants to set `errors.siblings` to an error string. \n\nPlay with the form below, clicking submit will trigger validation.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, ArrayField } from \'informed\';\n\nconst validate = ( values, length ) => {\n  if( length < 3 ){\n    return \'You must have at least three friends.\';\n  } \n};\n\nconst validateLength = value => {\n  return !value || value.length < 5 ? \'Field must be at least five characters\' : undefined;\n}\n\nconst DynamicArrays = () => {\n\n  return (\n    <div>\n      <Form >\n        <ArrayField field="siblings" validate={validate}>\n          {({ add, fields }) => (\n            <>\n              <button onClick={add} type="button">\n                Add Sibling\n              </button>\n              {fields.map(({ field, key, remove }, i) => (\n                <label key={key}>\n                  Sibling {i}:\n                  <Text field={field} valudate={validateLength}/>\n                  <button type="button" onClick={remove}>\n                    Remove\n                  </button>\n                </label>\n              ))}\n            </>\n          )}\n        </ArrayField>\n        <button type="submit">Submit</button>\n      </Form>\n    </div>\n  );\n};\n```\n',
        function DynamicArrays() {
          return react_default.a.createElement(
            ArrayFieldValidation_DynamicArraysContent,
            null
          );
        }
      );
    },
    526: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        basicValidation = function basicValidation(value) {
          return !value || value.length < 5 ? 'Minimum 5 char' : void 0;
        },
        matchValidation = function matchValidation(value, values, i, other) {
          var raccoons = values.raccoons;
          return raccoons && raccoons[i] && value === raccoons[i][other]
            ? 'Items cannot be the same'
            : void 0;
        },
        arrayValidation = function arrayValidation(values, length) {
          if (length < '3') return 'There must be at least three raccoons!';
        },
        ComplexArrayFieldValidation_initialValue = [
          { squad: '1', name: 'Sparky', item1: 'crossbow', item2: 'crossbow' }
        ],
        ComplexArrayFieldValidation_ComplexArrayValidationContent = function ComplexArrayValidationContent() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { autocomplete: 'off' },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    src.ArrayField,
                    {
                      field: 'raccoons',
                      initialValue: ComplexArrayFieldValidation_initialValue,
                      validate: arrayValidation
                    },
                    function(_ref) {
                      var add = _ref.add,
                        fields = _ref.fields;
                      return react_default.a.createElement(
                        react_default.a.Fragment,
                        null,
                        react_default.a.createElement(
                          'table',
                          null,
                          react_default.a.createElement(
                            'thead',
                            null,
                            react_default.a.createElement(
                              'tr',
                              null,
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'span',
                                  null,
                                  'Squad'
                                )
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'span',
                                  null,
                                  'Name'
                                )
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'span',
                                  null,
                                  'Item1'
                                )
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'span',
                                  null,
                                  'Item2'
                                )
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'span',
                                  null,
                                  'Remove'
                                )
                              )
                            )
                          ),
                          fields.map(function(_ref2, i) {
                            var field = _ref2.field,
                              key = _ref2.key,
                              initialValue = _ref2.initialValue,
                              remove = _ref2.remove;
                            return react_default.a.createElement(
                              'tr',
                              { key: key },
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  src.Select,
                                  {
                                    field: ''.concat(field, '.squad'),
                                    initialValue:
                                      initialValue && initialValue.squad
                                  },
                                  react_default.a.createElement(
                                    src.Option,
                                    { value: '', disabled: !0 },
                                    '-- Choose Squad --'
                                  ),
                                  react_default.a.createElement(
                                    src.Option,
                                    { value: '1' },
                                    'Blood Furs'
                                  ),
                                  react_default.a.createElement(
                                    src.Option,
                                    { value: '2' },
                                    'Raiding Rodents'
                                  ),
                                  react_default.a.createElement(
                                    src.Option,
                                    { value: '3' },
                                    'Delta Tails'
                                  )
                                )
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(src.Text, {
                                  size: '5',
                                  field: ''.concat(field, '.name'),
                                  validate: basicValidation,
                                  initialValue:
                                    initialValue && initialValue.name,
                                  validateOnBlur: !0,
                                  validateOnChange: !0,
                                  style: { minWidth: '70px' },
                                  format: function format(value) {
                                    return (
                                      value && ''.concat(value.toUpperCase())
                                    );
                                  },
                                  parse: function parse(value) {
                                    return (
                                      value && ''.concat(value.toUpperCase())
                                    );
                                  }
                                })
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(src.Text, {
                                  size: '5',
                                  field: ''.concat(field, '.item1'),
                                  validate: function validate(value, values) {
                                    return matchValidation(
                                      value,
                                      values,
                                      i,
                                      'item2'
                                    );
                                  },
                                  notify: [''.concat(field, '.item2')],
                                  initialValue:
                                    initialValue && initialValue.item1,
                                  validateOnBlur: !0,
                                  validateOnChange: !0,
                                  style: { minWidth: '70px' }
                                })
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(src.Text, {
                                  size: '5',
                                  field: ''.concat(field, '.item2'),
                                  validate: function validate(value, values) {
                                    return matchValidation(
                                      value,
                                      values,
                                      i,
                                      'item1'
                                    );
                                  },
                                  notify: [''.concat(field, '.item1')],
                                  initialValue:
                                    initialValue && initialValue.item2,
                                  validateOnBlur: !0,
                                  validateOnChange: !0,
                                  style: { minWidth: '70px' }
                                })
                              ),
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'button',
                                  { type: 'button', onClick: remove },
                                  '-'
                                )
                              )
                            );
                          }),
                          react_default.a.createElement(
                            'tfoot',
                            null,
                            react_default.a.createElement(
                              'tr',
                              null,
                              react_default.a.createElement(
                                'td',
                                null,
                                react_default.a.createElement(
                                  'button',
                                  { type: 'button', onClick: add },
                                  'Add row'
                                )
                              )
                            )
                          )
                        )
                      );
                    }
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, {
                    errors: !0,
                    values: !0
                  })
                )
              )
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Complex Array field validation\n\nWe are putting together a skilled teams of raccoon agents! We have preloaded the first member of the\nBlood Furs squad for you! Please finish creating the teams, and good luck out there!\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, ArrayField, Text, Select, Option } from 'informed';\n\nconst basicValidation = value => {\n  return !value || value.length < 5 ? 'Minimum 5 char' : undefined;\n};\n\nconst matchValidation = (value, values, i, other) => {\n  const raccoons = values.raccoons;\n\n  return raccoons &&\n    raccoons[i] &&\n    value === raccoons[i][other]\n    ? 'Items cannot be the same'\n    : undefined;\n};\n\nconst arrayValidation = ( values, length ) => {\n  if ( length < '3' ) {\n    return 'There must be at least three raccoons!';\n  }\n}\n\nconst initialValue = [{\n  squad: '1', \n  name: 'Sparky', \n  item1: 'crossbow', \n  item2: 'crossbow'\n}];\n\nconst Example = () => {\n\n  return ( \n     <Form autocomplete=\"off\">\n        <ArrayField field=\"raccoons\" initialValue={initialValue} validate={arrayValidation}>\n          {({ add, fields }) => (\n            <React.Fragment>\n              <table>\n                <thead>\n                  <tr>\n                    <td>\n                      <span>Squad</span>\n                    </td>\n                    <td>\n                      <span>Name</span>\n                    </td>\n                    <td>\n                      <span>Item1</span>\n                    </td>\n                    <td>\n                      <span>Item2</span>\n                    </td>\n                    <td>\n                      <span>Remove</span>\n                    </td>\n                  </tr>\n                </thead>\n                {fields.map(({ field, key, initialValue, remove }, i) => (\n                  <tr key={key}>\n                    <td>\n                      <Select field={`${field}.squad`} initialValue={initialValue && initialValue.squad}>\n                        <Option value=\"\" disabled>\n                        -- Choose Squad --\n                        </Option>\n                        <Option value=\"1\">Blood Furs</Option>\n                        <Option value=\"2\">Raiding Rodents</Option>\n                        <Option value=\"3\">Delta Tails</Option>\n                      </Select>\n                    </td>\n                    <td>\n                      <Text\n                        size=\"5\"\n                        field={`${field}.name`}\n                        validate={basicValidation}\n                        initialValue={initialValue && initialValue.name}\n                        validateOnBlur\n                        validateOnChange\n                        style={{minWidth: '70px'}}\n                        format={value => value && `${value.toUpperCase()}`}\n                        parse={value => value && `${value.toUpperCase()}`}\n                      />\n                    </td>\n                    <td>\n                      <Text\n                        size=\"5\"\n                        field={`${field}.item1`}\n                        validate={(value, values) =>\n                          matchValidation(value, values, i, 'item2')\n                        }                            \n                        notify={[`${field}.item2`]}\n                        initialValue={initialValue && initialValue.item1}\n                        validateOnBlur\n                        validateOnChange\n                        style={{minWidth: '70px'}}\n                      />\n                    </td>\n                    <td>\n                      <Text\n                        size=\"5\"\n                        field={`${field}.item2`}\n                        validate={(value, values) =>\n                          matchValidation(value, values, i, 'item1')\n                        }   \n                        notify={[`${field}.item1`]}\n                        initialValue={initialValue && initialValue.item2}\n                        validateOnBlur\n                        validateOnChange\n                        style={{minWidth: '70px'}}\n                      />\n                    </td>\n                    <td>\n                      <button type=\"button\" onClick={remove}>-</button>\n                    </td>\n                  </tr>\n                ))}\n                <tfoot>\n                  <tr>\n                    <td>\n                      <button type=\"button\" onClick={add}>Add row</button>\n                    </td>\n                  </tr>\n                </tfoot>\n              </table>\n            </React.Fragment>\n          )}\n        </ArrayField>\n        <button type=\"submit\">Submit</button>\n      </Form>\n  )\n\n\n}\n\n\n```\n",
        function ComplexArrayValidation() {
          return react_default.a.createElement(
            ComplexArrayFieldValidation_ComplexArrayValidationContent,
            null
          );
        }
      );
    },
    527: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        Modal = __webpack_require__(37),
        src = __webpack_require__(1);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var passwordValidation = function passwordValidation(
          password1,
          password2
        ) {
          return (
            (function basicValidation(value) {
              return !value || value.length < 5
                ? 'Password must be at least five characters'
                : void 0;
            })(password1) ||
            (function matchValidation(password1, password2) {
              return password1 !== password2 ? 'Passwords must match' : void 0;
            })(password1, password2)
          );
        },
        validatePassword = function validatePassword(value, values) {
          return passwordValidation(value, values.confirmPassword);
        },
        validateConfim = function validateConfim(value, values) {
          return passwordValidation(value, values.password);
        },
        Notifications_Notifications = (function(_React$Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Notifications, _React$Component);
          var _super = _createSuper(Notifications);
          function Notifications() {
            return (
              _classCallCheck(this, Notifications),
              _super.apply(this, arguments)
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(Notifications, [
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Form,
                      {
                        onSubmit: function onSubmit() {
                          return _this.modal.open();
                        },
                        id: 'notify-validation-form'
                      },
                      function(_ref) {
                        var formState = _ref.formState;
                        return react_default.a.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            react_default.a.createElement(
                              'label',
                              { htmlFor: 'notify-password' },
                              'Password:'
                            ),
                            react_default.a.createElement(src.Text, {
                              field: 'password',
                              id: 'notify-password',
                              validate: validatePassword,
                              validateOnChange: !0,
                              notify: ['confirmPassword']
                            }),
                            react_default.a.createElement(
                              'label',
                              { htmlFor: 'notify-confirm-password' },
                              'Confirm password:'
                            ),
                            react_default.a.createElement(src.Text, {
                              field: 'confirmPassword',
                              id: 'notify-confirm-password',
                              validate: validateConfim,
                              validateOnChange: !0,
                              notify: ['password']
                            }),
                            react_default.a.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Values:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.values, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Errors:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.errors, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Invalid:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.invalid, null, 2)
                            )
                          ),
                          react_default.a.createElement(
                            Modal.a,
                            {
                              getControl: function getControl(model) {
                                return (_this.modal = model);
                              }
                            },
                            react_default.a.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            Notifications
          );
        })(react_default.a.Component);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Complex Validation\n\nSometimes when validating you may need to notify other fields about your changes.\nA great example of this is when you have a password and confirm password field,\nand when one changes you want the other to validate as well. To achieve this, `informed`\nallows you to pass notify to an input with an array of fields to notify.\n\nTo avoid excessive message passing, `informed` only notifies other fields of changes as part of the validation process. If you\'d like to control when validation (and thus, notification) occur, you can make use of the  `validateOnChange` and `validateOnBlur` props.\n\n**The form below is an example of this scenario:**\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst basicValidation = value => {\n  return !value || value.length < 5\n    ? \'Password must be at least five characters\'\n    : undefined;\n};\n\nconst matchValidation = (password1, password2) => {\n  return password1 !== password2\n    ? \'Passwords must match\'\n    : undefined;\n};\n\nconst passwordValidation = (password1, password2) => {\n  return basicValidation(password1) || matchValidation(password1, password2);\n};\n\nconst validatePassword = (value, values) => passwordValidation( value, values.confirmPassword); \nconst validateConfim = (value, values) => passwordValidation( value, values.password); \n\n<Form id="notify-validation-form">\n  <Text\n    field="password"\n    id="notify-password"\n    validate={validatePassword}\n    validateOnChange\n    notify={[\'confirmPassword\']}/>\n  <label htmlFor="notify-confirm-password">Confirm password:</label>\n  <Text\n    field="confirmPassword"\n    id="notify-confirm-password"\n    validate={validateConfim}\n    validateOnChange\n    notify={[\'password\']}/>\n  <button type="submit">\n    Submit\n  </button>\n</Form>\n```\n',
        function() {
          return react_default.a.createElement(
            Notifications_Notifications,
            null
          );
        }
      );
    },
    528: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        Modal = __webpack_require__(37),
        src = __webpack_require__(1);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var validateLength = function validateLength(value) {
          return !value || value.length < 5
            ? 'Field must be at least five characters'
            : void 0;
        },
        validateFields = function validateFields(values) {
          return {
            color: validateLength(values.color),
            food: validateLength(values.food),
            car: validateLength(values.car)
          };
        },
        validate = function validate(values) {
          return values.a + values.b !== 4 ? 'a and b must sum to 4!' : void 0;
        },
        FormLevelValidation_SimpleValidation = (function(_Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(SimpleValidation, _Component);
          var _super = _createSuper(SimpleValidation);
          function SimpleValidation() {
            return (
              _classCallCheck(this, SimpleValidation),
              _super.apply(this, arguments)
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(SimpleValidation, [
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return react_default.a.createElement(
                    'div',
                    null,
                    react_default.a.createElement(
                      src.Form,
                      {
                        onSubmit: function onSubmit() {
                          return _this.modal.open();
                        },
                        validateFields: validateFields,
                        validate: validate
                      },
                      function(_ref) {
                        var formState = _ref.formState;
                        return react_default.a.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'wrap' } },
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 1, marginRight: '2rem' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Color:',
                              react_default.a.createElement(src.Text, {
                                field: 'color'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Food:',
                              react_default.a.createElement(src.Text, {
                                field: 'food'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Car:',
                              react_default.a.createElement(src.Text, {
                                field: 'car'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'A:',
                              react_default.a.createElement(src.Text, {
                                field: 'a',
                                type: 'number'
                              })
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'B:',
                              react_default.a.createElement(src.Text, {
                                field: 'b',
                                type: 'number'
                              })
                            ),
                            react_default.a.createElement(
                              'button',
                              { type: 'submit' },
                              'Submit'
                            )
                          ),
                          react_default.a.createElement(
                            'div',
                            { style: { flex: 2, minWidth: '300px' } },
                            react_default.a.createElement(
                              'label',
                              null,
                              'Values:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.values, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Errors:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.errors, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Error:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.error, null, 2)
                            ),
                            react_default.a.createElement(
                              'label',
                              null,
                              'Invalid:'
                            ),
                            react_default.a.createElement(
                              Code.a,
                              { language: 'language-js' },
                              JSON.stringify(formState.invalid, null, 2)
                            )
                          ),
                          react_default.a.createElement(
                            Modal.a,
                            {
                              getControl: function getControl(model) {
                                return (_this.modal = model);
                              }
                            },
                            react_default.a.createElement(
                              'strong',
                              null,
                              'Form Successfully Submitted!'
                            )
                          )
                        );
                      }
                    )
                  );
                }
              }
            ]),
            SimpleValidation
          );
        })(react.Component);
      __webpack_exports__.a = Object(withDocs.a)(
        '# Form Level Validation\n\nForm level validation can be achieved by passing a validation function to the form.\nBelow is an example form that has both types of form level validation. The validate length\nfunction defined will return an error when the value has less than five characters, or there is\nno value at all, and undefined otherwise. We use this validation function within the `validateFields`\nvalidation function which will **occur on submission**.\n\nIn additon to the `validateFields` function, you can also pass in a `validate` function that will put the whole form in an invalid state. Below is an example of one where it will make sure the two number fields sum\nto 4.\n\n**Try clicking the submit button and see what happens:**\n\n\x3c!-- STORY --\x3e\n\nWhat just happened? When you clicked on the submit button, both the validate and validateFields\nfunctions were triggered. Because validation failed, the\nform never actually called onSubmit. In other words, informed will only\nsubmit a valid form.\n\n**Get rid of the errors by typing at least 5 characters in each of the text fields field and\nclick the submit button again and see what happens:** \n\nWhat just happened? When you clicked on the submit button, both the validate and validateFields\nfunctions were triggered. Because validateFields succeeded, the errors updated.\nBut! the form still never actually called onSubmit.\n\nWhy? Because now the validate function is failing.\n\n**Get rid of the form level error by typing two values that sum to 4 and\nclick the submit button again and see what happens:** \n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst validateLength = value => {\n  return !value || value.length < 5\n    ? \'Field must be at least five characters\'\n    : undefined;\n};\n\nconst validateFields = values => {\n  return { \n    color: validateLength( values.color ),\n    food: validateLength( values.food ),\n    car: validateLength( values.car ),\n  };\n};\n\nconst validate = values => \n  values.a + values.b !== 4 ? \'a and b must sum to 4!\' : undefined;\n\n<Form validateFields={validateFields} validate={validate}>\n  <label>Color:<Text field="color" /></label>\n  <label>Food:<Text field="food" /></label>\n  <label>Car:<Text field="car" /></label>\n  <label>A:<Text field="a" type="number"/></label>\n  <label>B:<Text field="b" type="number"/></label>\n  <button type="submit">Submit</button>\n</Form>\n```\n',
        function() {
          return react_default.a.createElement(
            FormLevelValidation_SimpleValidation,
            null
          );
        }
      );
    },
    529: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        ajv = __webpack_require__(58),
        ajv_default = __webpack_require__.n(ajv),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          required: ['name', 'friend', 'age', 'bio', 'color', 'model', 'cars'],
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            friend: {
              type: 'string',
              title: 'Friend',
              'ui:control': 'input',
              oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]
            },
            age: {
              type: 'number',
              title: 'Age',
              minimum: 0,
              'ui:control': 'input',
              'input:props': { type: 'number' }
            },
            bio: {
              type: 'string',
              title: 'Bio',
              'ui:control': 'textarea',
              minLength: 10
            },
            authorize: {
              type: 'boolean',
              title: 'Authorize',
              'ui:control': 'checkbox'
            },
            color: {
              type: 'string',
              title: 'Color',
              'ui:control': 'select',
              oneOf: [
                {
                  const: '',
                  title: '- Select -',
                  'input:props': { disabled: !0 }
                },
                { const: 'red', title: 'Red' },
                { const: 'black', title: 'Black' },
                { const: 'white', title: 'White' }
              ]
            },
            model: {
              type: 'string',
              title: 'Model',
              'ui:control': 'radio',
              oneOf: [
                { const: 'ms', title: 'Model S' },
                { const: 'm3', title: 'Model 3' },
                { const: 'mx', title: 'Model X' },
                { const: 'my', title: 'Model Y' }
              ],
              'informed:props': { initialValue: 'm3' }
            },
            cars: {
              type: 'array',
              title: 'Cars',
              minItems: 3,
              'ui:control': 'select',
              'input:props': {
                multiple: !0,
                style: { height: '100px', width: '200px' }
              },
              items: {
                oneOf: [
                  { const: 'tesla', title: 'Tesla' },
                  { const: 'volvo', title: 'Volvo' },
                  { const: 'audi', title: 'Audi' },
                  { const: 'jeep', title: 'Jeep' }
                ]
              },
              'informed:props': { initialValue: ['jeep', 'tesla'] }
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# AJV Validation\n\nYou can pass a JSON schema to the form to both build and validate the form!\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\nimport Ajv from 'ajv';\n\nconst schema = {\n  type: 'object',\n  required: ['name', 'friend', 'age', 'bio', 'color', 'model', 'cars'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    friend: {\n      type: 'string',\n      title: 'Friend',\n      'ui:control': 'input',\n      oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]\n    },\n    age: {\n      type: 'number',\n      title: 'Age',\n      minimum: 0,\n      'ui:control': 'input',\n      'input:props': {\n        type: 'number'\n      }\n    },\n    bio: {\n      type: 'string',\n      title: 'Bio',\n      'ui:control': 'textarea',\n      minLength: 10\n    },\n    authorize: {\n      type: 'boolean',\n      title: 'Authorize',\n      'ui:control': 'checkbox'\n    },\n    color: {\n      type: 'string',\n      title: 'Color',\n      'ui:control': 'select',\n      oneOf: [\n        {\n          const: '',\n          title: '- Select -',\n          'input:props': {\n            disabled: true\n          }\n        },\n        { const: 'red', title: 'Red' },\n        { const: 'black', title: 'Black' },\n        { const: 'white', title: 'White' }\n      ]\n    },\n    model: {\n      type: 'string',\n      title: 'Model',\n      'ui:control': 'radio',\n      oneOf: [\n        { const: 'ms', title: 'Model S' },\n        { const: 'm3', title: 'Model 3' },\n        { const: 'mx', title: 'Model X' },\n        { const: 'my', title: 'Model Y' }\n      ],\n      'informed:props': {\n        initialValue: 'm3'\n      }\n    },\n    cars: {\n      type: 'array',\n      title: 'Cars',\n      minItems: 3,\n      'ui:control': 'select',\n      'input:props': {\n        multiple: true,\n        style: { height: '100px', width: '200px' }\n      },\n      items: {\n        oneOf: [\n          { const: 'tesla', title: 'Tesla' },\n          { const: 'volvo', title: 'Volvo' },\n          { const: 'audi', title: 'Audi' },\n          { const: 'jeep', title: 'Jeep' }\n        ]\n      },\n      'informed:props': {\n        initialValue: ['jeep', 'tesla']\n      }\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form\n    schema={schema}\n    ajv={Ajv}\n    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n    <FormState errors values />\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            {
              schema: schema,
              ajv: ajv_default.a,
              onSubmit: function onSubmit(values) {
                return window.alert(JSON.stringify(values, null, 2));
              }
            },
            react_default.a.createElement(src.SchemaFields, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(FormState.a, {
              errors: !0,
              values: !0
            })
          );
        }
      );
    },
    530: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        ajv = __webpack_require__(58),
        ajv_default = __webpack_require__.n(ajv),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          required: ['name', 'age', 'friend'],
          properties: {
            name: { type: 'string', title: 'First name' },
            age: { type: 'number', title: 'Age', minimum: 0 },
            friend: {
              type: 'string',
              title: 'Friend',
              oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]
            }
          }
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# AJV Validation\n\nYou can pass a JSON schema to the form but manually render the fields. ( Validation Only )\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\nimport Ajv from 'ajv';\n\nconst schema = {\n  type: 'object',\n  required: ['name', 'age', 'friend'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name'\n    },\n    age: {\n      type: 'number',\n      title: 'Age',\n      minimum: 0\n    },\n    friend: {\n      type: 'string',\n      title: 'Friend',\n      oneOf: [{ const: 'Elon' }, { const: 'Kimbal' }]\n    }\n  }\n};\n\nconst Schema = () => (\n  <Form\n    schema={schema}\n    ajv={Ajv}\n    onlyValidateSchema\n    onSubmit={values => window.alert(JSON.stringify(values, null, 2))}>\n    <button type=\"submit\">Submit</button>\n    <Text field=\"name\" label=\"First name:\" />\n    <Text field=\"age\" label=\"Age:\" type=\"number\" />\n    <Text field=\"friend\" label=\"Friend:\" />\n    <FormState errors values />\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            {
              schema: schema,
              ajv: ajv_default.a,
              onlyValidateSchema: !0,
              onSubmit: function onSubmit(values) {
                return window.alert(JSON.stringify(values, null, 2));
              }
            },
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(src.Text, {
              field: 'name',
              label: 'First name:'
            }),
            react_default.a.createElement(src.Text, {
              field: 'age',
              label: 'Age:',
              type: 'number'
            }),
            react_default.a.createElement(src.Text, {
              field: 'friend',
              label: 'Friend:'
            }),
            react_default.a.createElement(FormState.a, {
              errors: !0,
              values: !0
            })
          );
        }
      );
    },
    531: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = (__webpack_require__(4), __webpack_require__(3)),
        src = (__webpack_require__(37), __webpack_require__(1)),
        validate = function validate(username) {
          return username && '' !== username.trim()
            ? null
            : 'Username is a required field';
        },
        AsyncValidation_AsyncValidation = function AsyncValidation() {
          var apiRef = Object(react.useRef)();
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              {
                apiRef: apiRef,
                onSubmit: function onSubmit(values) {
                  return console.log(values);
                }
              },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(src.Text, {
                    field: 'username',
                    label: 'Username',
                    validate: validate,
                    asyncValidate: function asyncValidate(username) {
                      return new Promise(function(resolve, reject) {
                        apiRef.current.validating(),
                          setTimeout(function() {
                            return ['joe', 'tanner', 'billy', 'bob'].includes(
                              username
                            )
                              ? (apiRef.current.validated(
                                  'username',
                                  'That username is taken'
                                ),
                                resolve())
                              : 'reject' === username
                                ? (apiRef.current.validated(
                                    'username',
                                    'Unable to validate username.'
                                  ),
                                  reject())
                                : (apiRef.current.validated('username'),
                                  resolve());
                          }, 2e3);
                      });
                    }
                  }),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(src.FormState, null)
                )
              )
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Async Validation\n\n** Note: This is in beta and is subject to change! **\n\nAsync validation can be achieved by passing an asyncValidation function to the input.\nBelow is an example form that has validation functions. The synchronous function defined\nwill return an error when the input is empty, and nothing otherwise. The second asynchronous\nfunction defined will, after two seconds, resolve an error or nothing depending on what is typed.\nWe pass these validation functions to the username input and validation will **occur on submission**.\n\n**Try clicking the submit button WITH AN EMPTY FIELD! and see what happens:**\n\n\x3c!-- STORY --\x3e\n\nWhat just happened? When you clicked on the submit button the synchronous\nvalidation function was triggered. Because the field was empty ( if you left it empty )\nit failed synchronous validation, and therefore did not run the async validation or\nactually submit the form.\n\n**Get rid of the synchronous error by typing \"FooBar\" in the username field, then\nclick the submit button again, WAIT TWO SECONDS, and see what happens:**\n\nThe form submitted!! Why? Because both our synchronous and asynchronous validation passed.\nLets make our asynchronous validation fail!\n\n**Ok now type \"billy\" into the field, click on the submit button, and wait two more seconds.**\n\nThe form did NOT submit!! Why? Because asynchronous validation failed.\n\n**Ok now type \"reject\" into the field, click on the submit button, and wait two more seconds.**\n\nThe form did not submit because the \"apicall\" to validate failed.\n\n```jsx\nimport { Form, Text } from 'informed';\n\nconst validate = username =>\n  !username || username.trim() === ''\n    ? 'Username is a required field'\n    : undefined;\n\nconst ExampleForm = () => {\n  const apiRef = useRef();\n\n  const asyncValidate = username =>\n    new Promise((resolve, reject) => {\n      apiRef.current.validating();\n      setTimeout(() => {\n        // Simulate username check\n        if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {\n          apiRef.current.validated('username', 'That username is taken');\n          return resolve();\n        }\n        // Simulate request faulure\n        if (username === 'reject') {\n          apiRef.current.validated('username', 'Unable to validate username.');\n          return reject();\n        }\n        // Sumulate username success check\n        apiRef.current.validated('username');\n        return resolve();\n      }, 2000);\n    });\n\n  return (\n    <Form apiRef={apiRef} onSubmit={values => console.log(values)}>\n      <Text\n        field=\"username\"\n        label=\"Username\"\n        validate={validate}\n        asyncValidate={asyncValidate}\n      />\n      <button type=\"submit\">Submit</button>\n    </Form>\n  );\n};\n```\n\n## On Blur\n\nHey this is cool but i want to validate on blur!\n\n**Well Turns out.. you can!! wooooo!**\n\n```jsx\n//...\n\n<Form id=\"async-form\">\n  <label htmlFor=\"async-username\">Username:</label>\n  <Text\n    field=\"username\"\n    id=\"async-username\"\n    validate={validate}\n    asyncValidate={asyncValidate}\n    asyncValidateOnBlur\n  />\n  <button type=\"submit\">Submit</button>\n</Form>\n```\n",
        function() {
          return react_default.a.createElement(
            AsyncValidation_AsyncValidation,
            null
          );
        }
      );
    },
    532: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        dracula = __webpack_require__(195),
        react_live_es = __webpack_require__(64),
        scope = { imports: { informed: src } };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Playground\n\n<br/>\n<br/>\n\n\x3c!-- STORY --\x3e\n',
        function Playground() {
          return react_default.a.createElement(
            react_live_es.d,
            {
              code:
                '\nconst { Form, Text, Select, RadioGroup, Radio, FormState } = imports[\'informed\'];\n\nconst onSubmit = (values) => {\n  window.alert(JSON.stringify(values));\n}\n\nconst Component = () => {\n  return (\n    <Form onSubmit={onSubmit}>\n      <Text field="name" label="First Name" placeholder="Elon"/>\n      <Select field="color" label="Color">\n          <option value="" disabled>\n            - Select -\n          </option>\n          <option value="red">Red</option>\n          <option value="black">Black</option>\n          <option value="white">White</option>\n      </Select>\n      <RadioGroup field="model" label="Model" initialValue="m3">\n          <label>Model S <Radio value="ms" /></label>\n          <label>Model 3 <Radio value="m3" /></label>\n          <label>Model X <Radio value="mx" /></label>\n          <label>Model Y <Radio value="my" /></label>\n      </RadioGroup>\n      <button type="submit">\n        Submit\n      </button>\n      <FormState/>\n    </Form>\n  );\n};\n\nrender( <Component /> );\n',
              scope: scope,
              noInline: !0,
              theme: dracula.a
            },
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { marginRight: '2rem', flex: 2 } },
                react_default.a.createElement(react_live_es.a, null)
              ),
              react_default.a.createElement(
                'div',
                { style: { marginRight: '2rem', flex: 1 } },
                react_default.a.createElement(react_live_es.b, {
                  className: 'language-none'
                }),
                react_default.a.createElement(react_live_es.c, null)
              )
            )
          );
        }
      );
    },
    533: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        dracula = __webpack_require__(195),
        react_live_es = __webpack_require__(64),
        scope = { imports: { informed: src } };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Playground\n\n<br/>\n<br/>\n\n\x3c!-- STORY --\x3e\n',
        function Playground() {
          return react_default.a.createElement(
            react_live_es.d,
            {
              code:
                "\nconst { Form, SchemaFields, FormState } = imports['informed'];\n\nconst onSubmit = (values) => {\n  window.alert(JSON.stringify(values));\n}\n\nconst schema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First Name',\n      'ui:control': 'input',\n      'input:props': {\n        placeholder: 'Elon'\n      }\n    },\n    color: {\n      type: 'string',\n      title: 'Color',\n      'ui:control': 'select',\n      oneOf: [\n        {\n          const: '',\n          title: '- Select -',\n          'input:props': {\n            disabled: true\n          }\n        },\n        { const: 'red', title: 'Red' },\n        { const: 'black', title: 'Black' },\n        { const: 'white', title: 'White' }\n      ]\n    },\n    model: {\n      type: 'string',\n      title: 'Model',\n      'ui:control': 'radio',\n      oneOf: [\n        { const: 'ms', title: 'Model S' },\n        { const: 'm3', title: 'Model 3' },\n        { const: 'mx', title: 'Model X' },\n        { const: 'my', title: 'Model Y' }\n      ],\n      default: null,\n      'informed:props': {\n        initialValue: 'm3'\n      }\n    },\n  }\n};\n\nconst Component = () => {\n  return (\n    <Form schema={schema} onSubmit={onSubmit}>\n      <SchemaFields />\n      <button type=\"submit\">Submit</button>\n      <FormState />\n    </Form>\n  );\n};\n\nrender( <Component /> );\n",
              scope: scope,
              noInline: !0,
              theme: dracula.a
            },
            react_default.a.createElement(
              'div',
              { style: { display: 'flex' } },
              react_default.a.createElement(
                'div',
                { style: { marginRight: '2rem', flex: 2 } },
                react_default.a.createElement(react_live_es.a, null)
              ),
              react_default.a.createElement(
                'div',
                { style: { marginRight: '2rem', flex: 1 } },
                react_default.a.createElement(react_live_es.b, {
                  className: 'language-none'
                }),
                react_default.a.createElement(react_live_es.c, null)
              )
            )
          );
        }
      );
    },
    534: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        formatter = [
          '+',
          '1',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ],
        parser = function parser(value) {
          return value.replace('+1 ', '').replace(/-/g, '');
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Format and Parse\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from 'informed';\n\nconst formatter = ['+', '1', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/];\n\nconst parser = value => {\n  return value.replace('+1 ', '').replace(/-/g, '');\n};\n\n<Form>\n  <label>\n  Phone Number:\n  <Text field=\"phone\" formatter={formatter} parser={parser} maintainCursor initialValue=\"1231231234\"/>\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
        function FormatParse() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                'label',
                null,
                'Phone Number:',
                react_default.a.createElement(src.Text, {
                  field: 'phone',
                  formatter: formatter,
                  parser: parser,
                  maintainCursor: !0,
                  initialValue: '1231231234'
                })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(FormState.a, null)
            )
          );
        }
      );
    },
    535: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        mask = function mask(value) {
          return null != value ? value.toUpperCase() : value;
        };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Mask\n\nMasking values is made simple with the use of the `mask` function. Please NOTE! \nthe use of the `maintainCursor` prop. This is not always necessary, but in the following\nexample was needed! If you remove it the cursor will jump to the end every time the user types.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\nconst mask = value => value.toUpperCase();\n\n<Form>\n  <label>\n  First name:\n  <Text field="name" mask={mask} maintainCursor/>\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
        function Mask() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                'label',
                null,
                'First name:',
                react_default.a.createElement(src.Text, {
                  field: 'name',
                  mask: mask,
                  maintainCursor: !0
                })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(FormState.a, null)
            )
          );
        }
      );
    },
    536: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        passwordValidation = function passwordValidation(value, values) {
          return (
            (function basicValidation(value) {
              return !value || value.length < 5
                ? 'Password must be at least five characters'
                : void 0;
            })(value) ||
            (function matchValidation(value, values) {
              return values.password !== values.confirmPassword
                ? 'Passwords must match'
                : void 0;
            })(0, values)
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        '# Optimization\n\nInformed has been highly optomized to limit rendering. This page uses\nthe debug flag to visually represent the rendering on each input.\n\n\x3c!-- STORY --\x3e\n\n```jsx\n  <Form autoComplete="off">\n    <label>First name:<Text debug field="name"/></label>\n    <Scope scope="favorite">\n      <label>Favorite color:<Text debug field="color"/></label>\n      <label>Favorite food:<Text debug field="food"/></label>\n    </Scope>\n    <label>Friend 1:<Text debug field="friends[0]" /></label>\n    <label>Friend 2:<Text debug field="friends[1]" /></label>\n    <label>Friend 3:<Text debug field="friends[2]" /></label>\n    <label>\n      Password:\n      <Text debug field="password" notify={[\'confirmPassword\']} validateOnChange validate={passwordValidation}/>\n    </label>\n    <label>Confirm Password:\n      <Text debug field="confirmPassword" notify={[\'password\']} validateOnChange validate={passwordValidation} />\n    </label>\n    <label>Bio:<TextArea debug field="bio"/></label>\n    <RadioGroup field="gender">\n      <label>Male: <Radio debug value="male"/></label>            \n      <label>Female: <Radio debug value="female"/></label>\n    </RadioGroup>\n    <label>\n      Relationship status:\n      <Select debug field="status">\n        <Option value="" disabled>\n        Select One...\n        </Option>\n        <Option value="single">Single</Option>\n        <Option value="relationship">Relationship</Option>\n        <Option value="complicated">Complicated</Option>\n      </Select>\n    </label>\n    <label>\n      Colors:\n      <Select\n        debug\n        field="colors"\n        multiple\n        style={{ height: \'100px\', width: \'200px\' }}>\n        <Option value="red">Red</Option>\n        <Option value="green">Green</Option>\n        <Option value="blue">Blue</Option>\n        <Option value="yellow">Yellow</Option>\n        <Option value="orange">Orange</Option>\n        <Option value="purple">Purple</Option>\n      </Select>\n    </label>\n    <label>Authorize: <Checkbox debug field="authorize"/></label>\n    <button type="submit">Submit</button>\n  </Form>\n```\n\n',
        function Optimization() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { autoComplete: 'off' },
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(src.Text, {
                      debug: !0,
                      field: 'name'
                    })
                  ),
                  react_default.a.createElement(
                    src.Scope,
                    { scope: 'favorite' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Favorite color:',
                      react_default.a.createElement(src.Text, {
                        debug: !0,
                        field: 'color'
                      })
                    ),
                    react_default.a.createElement(
                      'label',
                      null,
                      'Favorite food:',
                      react_default.a.createElement(src.Text, {
                        debug: !0,
                        field: 'food'
                      })
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend 1:',
                    react_default.a.createElement(src.Text, {
                      debug: !0,
                      field: 'friends[0]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend 2:',
                    react_default.a.createElement(src.Text, {
                      debug: !0,
                      field: 'friends[1]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend 3:',
                    react_default.a.createElement(src.Text, {
                      debug: !0,
                      field: 'friends[2]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Password:',
                    react_default.a.createElement(src.Text, {
                      debug: !0,
                      field: 'password',
                      notify: ['confirmPassword'],
                      validateOnChange: !0,
                      validate: passwordValidation
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Confirm Password:',
                    react_default.a.createElement(src.Text, {
                      debug: !0,
                      field: 'confirmPassword',
                      notify: ['password'],
                      validateOnChange: !0,
                      validate: passwordValidation
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Bio:',
                    react_default.a.createElement(src.TextArea, {
                      debug: !0,
                      field: 'bio'
                    })
                  ),
                  react_default.a.createElement(
                    src.RadioGroup,
                    { field: 'gender' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Male: ',
                      react_default.a.createElement(src.Radio, {
                        debug: !0,
                        value: 'male'
                      })
                    ),
                    react_default.a.createElement(
                      'label',
                      null,
                      'Female: ',
                      react_default.a.createElement(src.Radio, {
                        debug: !0,
                        value: 'female'
                      })
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Relationship status:',
                    react_default.a.createElement(
                      src.Select,
                      { debug: !0, field: 'status' },
                      react_default.a.createElement(
                        src.Option,
                        { value: '', disabled: !0 },
                        'Select One...'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'single' },
                        'Single'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'relationship' },
                        'Relationship'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'complicated' },
                        'Complicated'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Colors:',
                    react_default.a.createElement(
                      src.Select,
                      {
                        debug: !0,
                        field: 'colors',
                        multiple: !0,
                        style: { height: '100px', width: '200px' }
                      },
                      react_default.a.createElement(
                        src.Option,
                        { value: 'red' },
                        'Red'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'green' },
                        'Green'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'blue' },
                        'Blue'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'yellow' },
                        'Yellow'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'orange' },
                        'Orange'
                      ),
                      react_default.a.createElement(
                        src.Option,
                        { value: 'purple' },
                        'Purple'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Authorize: ',
                    react_default.a.createElement(src.Checkbox, {
                      debug: !0,
                      field: 'authorize'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, { errors: !0 })
                )
              )
            )
          );
        }
      );
    },
    537: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        FormState = __webpack_require__(5),
        src = __webpack_require__(1),
        schema = {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              title: 'First name',
              'ui:control': 'input'
            },
            married: {
              type: 'string',
              title: 'Are you married?',
              enum: ['yes', 'no'],
              'ui:control': 'radio'
            }
          },
          allOf: [
            {
              if: {
                properties: { married: { const: 'yes' } },
                required: ['married']
              },
              then: {
                properties: {
                  spouse: {
                    type: 'string',
                    title: 'Spouse name',
                    'ui:control': 'input'
                  }
                }
              }
            }
          ]
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Conditional Schema\n\n** Note: This is in beta and is subject to change! **\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, SchemaFields } from 'informed';\n\nconst schema = {\n  type: 'object',\n  required: ['name'],\n  properties: {\n    name: {\n      type: 'string',\n      title: 'First name',\n      'ui:control': 'input'\n    },\n    married: {\n      type: 'string',\n      title: 'Are you married?',\n      enum: ['yes', 'no'],\n      'ui:control': 'radio'\n    }\n  },\n  allOf: [\n    {\n      if: {\n        properties: {\n          married: { const: 'yes' }\n        },\n        required: ['married']\n      },\n      then: {\n        properties: {\n          spouse: {\n            type: 'string',\n            title: 'Spouse name',\n            'ui:control': 'input'\n          }\n        }\n      }\n    }\n  ]\n};\n\nconst Schema = () => (\n  <Form schema={schema}>\n    <SchemaFields />\n    <button type=\"submit\">Submit</button>\n    <FormState />\n  </Form>\n);\n```\n",
        function Schema() {
          return react_default.a.createElement(
            src.Form,
            { schema: schema },
            react_default.a.createElement(src.SchemaFields, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(FormState.a, null)
          );
        }
      );
    },
    538: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        FormatDependent_CarOrTruck = function CarOrTruck() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'label',
              null,
              'Would you like a car or truck?'
            ),
            react_default.a.createElement(
              src.RadioGroup,
              { field: 'type', label: 'Would you like a car or truck?' },
              react_default.a.createElement(
                'label',
                null,
                'Car ',
                react_default.a.createElement(src.Radio, { value: 'car' })
              ),
              react_default.a.createElement(
                'label',
                null,
                'Truck ',
                react_default.a.createElement(src.Radio, { value: 'truck' })
              )
            )
          );
        },
        options = {
          car: [
            { value: 'modelS', label: 'Model S' },
            { value: 'model3', label: 'Model 3' },
            { value: 'modelX', label: 'Model X' },
            { value: 'modely', label: 'Model Y' }
          ],
          truck: [
            { value: 'semi', label: 'Semi Truck' },
            { value: 'cyber', label: 'Cyber Truck' }
          ]
        },
        FormatDependent_ProductSelect = function ProductSelect() {
          var value = Object(src.useFieldState)('type').value,
            reset = Object(src.useFieldApi)('product').reset,
            opts = options[value] || [];
          return (
            Object(react.useEffect)(
              function() {
                reset();
              },
              [value]
            ),
            react_default.a.createElement(
              src.Select,
              { field: 'product', label: 'Product', disabled: !value },
              react_default.a.createElement(
                'option',
                { value: '', disabled: !0 },
                '- Select -'
              ),
              opts.map(function(option) {
                return react_default.a.createElement(
                  'option',
                  { key: option.value, value: option.value },
                  option.label
                );
              })
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "# Dependent Fields\n\nSometimes fields values depend on what you input in other parts of the form.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport {\n  Form,\n  RadioGroup,\n  Radio,\n  Select,\n  FormState,\n  useFieldState,\n  useFieldApi\n} from 'informed';\n\nconst CarOrTruck = () => {\n  return (\n    <>\n      <label>Would you like a car or truck?</label>\n      <RadioGroup field=\"type\" label=\"Would you like a car or truck?\">\n        <label>\n          Car <Radio value=\"car\" />\n        </label>\n        <label>\n          Truck <Radio value=\"truck\" />\n        </label>\n      </RadioGroup>\n    </>\n  );\n};\n\nconst options = {\n  car: [\n    {\n      value: 'modelS',\n      label: 'Model S'\n    },\n    {\n      value: 'model3',\n      label: 'Model 3'\n    },\n    {\n      value: 'modelX',\n      label: 'Model X'\n    },\n    {\n      value: 'modely',\n      label: 'Model Y'\n    }\n  ],\n  truck: [\n    {\n      value: 'semi',\n      label: 'Semi Truck'\n    },\n    {\n      value: 'cyber',\n      label: 'Cyber Truck'\n    }\n  ]\n};\n\nconst ProductSelect = () => {\n  const { value } = useFieldState('type');\n  const { reset } = useFieldApi('product');\n\n  const opts = options[value] || [];\n\n  useEffect(\n    () => {\n      reset();\n    },\n    [value]\n  );\n\n  return (\n    <Select field=\"product\" label=\"Product\" disabled={!value}>\n      <option value=\"\" disabled>\n        - Select -\n      </option>\n      {opts.map(option => (\n        <option key={option.value} value={option.value}>\n          {option.label}\n        </option>\n      ))}\n    </Select>\n  );\n};\n\nconst DependentFields = () => (\n  <Form>\n    <CarOrTruck />\n    <ProductSelect />\n    <button type=\"submit\">Submit</button>\n    <FormState values />\n  </Form>\n);\n```\n",
        function DependentFields() {
          return react_default.a.createElement(
            src.Form,
            null,
            react_default.a.createElement(FormatDependent_CarOrTruck, null),
            react_default.a.createElement(FormatDependent_ProductSelect, null),
            react_default.a.createElement(
              'button',
              { type: 'submit' },
              'Submit'
            ),
            react_default.a.createElement(src.FormState, { values: !0 })
          );
        }
      );
    },
    539: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var informedFormat = src.utils.informedFormat,
        formatter = [
          '+',
          '1',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ],
        initialize = function initialize(_ref) {
          var a = _ref.a,
            b = _ref.b;
          return {
            a: informedFormat(a, formatter).value,
            b: informedFormat(b, formatter).value
          };
        },
        FormattedObjectInput_FormattedObjectInput = function FormattedObjectInput(
          props
        ) {
          var refA = Object(react.useRef)(),
            refB = Object(react.useRef)(),
            _useField = Object(src.useField)(
              _objectSpread(
                _objectSpread({}, props),
                {},
                { initialize: initialize }
              )
            ),
            fieldState = _useField.fieldState,
            fieldApi = _useField.fieldApi,
            render = _useField.render,
            userProps = _useField.userProps,
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            rest = (userProps.onChange,
            userProps.onBlur,
            _objectWithoutProperties(userProps, ['onChange', 'onBlur'])),
            v = value || {},
            _useCursorPosition = Object(src.useCursorPosition)({
              value: v.a,
              inputRef: refA
            }),
            setCursorOffsetA = _useCursorPosition.setCursorOffset,
            setCursorA = _useCursorPosition.setCursor,
            _useCursorPosition2 = Object(src.useCursorPosition)({
              value: v.b,
              inputRef: refB
            }),
            setCursorOffsetB = _useCursorPosition2.setCursorOffset,
            setCursorB = _useCursorPosition2.setCursor,
            a = v.a,
            b = v.b;
          return render(
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement(
                'input',
                _extends({}, rest, {
                  ref: refA,
                  value: a || '',
                  onChange: function aChange(e) {
                    var newVal = _objectSpread({}, v),
                      val = e.target.value;
                    e &&
                      e.target &&
                      e.target.selectionStart &&
                      setCursorA(e.target.selectionStart);
                    var res = informedFormat(val, formatter);
                    setCursorOffsetA(res.offset),
                      (newVal.a = res.value),
                      setValue(newVal);
                  },
                  onBlur: function onBlur() {
                    return setTouched;
                  }
                })
              ),
              react_default.a.createElement(
                'input',
                _extends({}, rest, {
                  ref: refB,
                  value: b || '',
                  onChange: function bChange(e) {
                    var newVal = _objectSpread({}, v),
                      val = e.target.value;
                    e &&
                      e.target &&
                      e.target.selectionStart &&
                      setCursorB(e.target.selectionStart);
                    var res = informedFormat(val, formatter);
                    setCursorOffsetB(res.offset),
                      (newVal.b = res.value),
                      setValue(newVal);
                  },
                  onBlur: function onBlur() {
                    return setTouched();
                  }
                })
              )
            )
          );
        };
      __webpack_exports__.a = Object(withDocs.a)(
        "## Formatted Object Input\n\nSometimes you need to make object inputs that also format per field.\n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport React, { useRef } from 'react';\nimport { Form, useField, useCursorPosition, utils } from 'informed';\nconst { informedFormat } = utils;\n\nconst formatter = [\n  '+',\n  '1',\n  ' ',\n  /\\d/,\n  /\\d/,\n  /\\d/,\n  '-',\n  /\\d/,\n  /\\d/,\n  /\\d/,\n  '-',\n  /\\d/,\n  /\\d/,\n  /\\d/,\n  /\\d/\n];\n\nconst initialize = ({ a, b }) => {\n  return {\n    a: informedFormat(a, formatter).value,\n    b: informedFormat(b, formatter).value\n  };\n};\n\nconst FormattedObjectInput = props => {\n  const refA = useRef();\n  const refB = useRef();\n\n  const { fieldState, fieldApi, render, userProps } = useField({\n    ...props,\n    initialize\n  });\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, ...rest } = userProps;\n\n  const v = value || {};\n\n  const {\n    setCursorOffset: setCursorOffsetA,\n    setCursor: setCursorA\n  } = useCursorPosition({ value: v.a, inputRef: refA });\n  const {\n    setCursorOffset: setCursorOffsetB,\n    setCursor: setCursorB\n  } = useCursorPosition({ value: v.b, inputRef: refB });\n\n  const aChange = e => {\n    const newVal = { ...v };\n\n    const val = e.target.value;\n\n    // Remember Cursor position!\n    if (e && e.target && e.target.selectionStart) {\n      setCursorA(e.target.selectionStart);\n    }\n\n    const res = informedFormat(val, formatter);\n    setCursorOffsetA(res.offset);\n    newVal.a = res.value;\n\n    setValue(newVal);\n  };\n\n  const bChange = e => {\n    const newVal = { ...v };\n\n    const val = e.target.value;\n\n    // Remember Cursor position!\n    if (e && e.target && e.target.selectionStart) {\n      setCursorB(e.target.selectionStart);\n    }\n\n    const res = informedFormat(val, formatter);\n    setCursorOffsetB(res.offset);\n    newVal.b = res.value;\n\n    setValue(newVal);\n  };\n\n  const { a, b } = v;\n\n  return render(\n    <React.Fragment>\n      <input\n        {...rest}\n        ref={refA}\n        value={a ? a : ''}\n        onChange={aChange}\n        onBlur={() => setTouched}\n      />\n      <input\n        {...rest}\n        ref={refB}\n        value={b ? b : ''}\n        onChange={bChange}\n        onBlur={() => setTouched()}\n      />\n    </React.Fragment>\n  );\n};\n\n<Form>\n  <label>\n    Double Phone\n    <FormattedObjectInput field=\"doublePhone\" />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
        function Example() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(src.Form, null, function(_ref2) {
              _ref2.formApi;
              var formState = _ref2.formState;
              return react_default.a.createElement(
                react_default.a.Fragment,
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Double Phone',
                  react_default.a.createElement(
                    FormattedObjectInput_FormattedObjectInput,
                    {
                      field: 'doublePhone',
                      initialValue: { a: '1231231234', b: '4324324321' }
                    }
                  )
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement('label', null, 'Values:'),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                )
              );
            })
          );
        }
      );
    },
    540: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Code = __webpack_require__(4),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ObjectInput_ObjectInput = function ObjectInput(props) {
        var _useField = Object(src.useField)(props),
          fieldState = _useField.fieldState,
          fieldApi = _useField.fieldApi,
          render = _useField.render,
          userProps = _useField.userProps,
          value = fieldState.value,
          setValue = fieldApi.setValue,
          setTouched = fieldApi.setTouched,
          rest = (userProps.onChange,
          userProps.onBlur,
          _objectWithoutProperties(userProps, ['onChange', 'onBlur'])),
          v = value || {},
          a = v.a,
          b = v.b;
        return render(
          react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'input',
              _extends({}, rest, {
                value: a || '',
                onChange: function aChange(e) {
                  var newVal = _objectSpread({}, v);
                  (newVal.a = e.target.value), setValue(newVal);
                },
                onBlur: function onBlur() {
                  return setTouched;
                }
              })
            ),
            react_default.a.createElement(
              'input',
              _extends({}, rest, {
                value: b || '',
                onChange: function bChange(e) {
                  var newVal = _objectSpread({}, v);
                  (newVal.b = e.target.value), setValue(newVal);
                },
                onBlur: function onBlur() {
                  return setTouched();
                }
              })
            )
          )
        );
      };
      __webpack_exports__.a = Object(withDocs.a)(
        "## Object Input\n\nSometimes you need to make object input. An input whos value is an object and made up of more than one phisical input element.\n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport React from 'react';\nimport { Form, useField } from 'informed';\n\nconst ObjectInput = props => {\n  const { fieldState, fieldApi, render, userProps } = useField(props);\n\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, ...rest } = userProps;\n\n  const v = value || {};\n\n  const aChange = e => {\n    const newVal = { ...v };\n\n    newVal.a = e.target.value;\n\n    setValue(newVal);\n  };\n\n  const bChange = e => {\n    const newVal = { ...v };\n\n    newVal.b = e.target.value;\n\n    setValue(newVal);\n  };\n\n  const { a, b } = v;\n\n  return render(\n    <React.Fragment>\n      <input\n        {...rest}\n        value={a ? a : ''}\n        onChange={aChange}\n        onBlur={() => setTouched}\n      />\n      <input\n        {...rest}\n        value={b ? b : ''}\n        onChange={bChange}\n        onBlur={() => setTouched()}\n      />\n    </React.Fragment>\n  );\n};\n\n<Form>\n  <label>\n    Double Input\n    <ObjectInput field=\"doubleInput\" />\n  </label>\n  <button type=\"submit\">Submit</button>\n</Form>;\n```\n",
        function Example() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(src.Form, null, function(_ref) {
              _ref.formApi;
              var formState = _ref.formState;
              return react_default.a.createElement(
                react_default.a.Fragment,
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Double Input',
                  react_default.a.createElement(ObjectInput_ObjectInput, {
                    field: 'doubleInput'
                  })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement('label', null, 'Values:'),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                )
              );
            })
          );
        }
      );
    },
    541: function(module, exports, __webpack_require__) {
      __webpack_require__(542),
        __webpack_require__(891),
        __webpack_require__(892),
        (module.exports = __webpack_require__(1217));
    },
    6: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'f', function() {
        return FormRegisterContext;
      }),
        __webpack_require__.d(__webpack_exports__, 'g', function() {
          return FormStateContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function() {
          return FormApiContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'h', function() {
          return GroupContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return ArrayFieldApiContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return ArrayFieldStateContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return ArrayFieldItemApiContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return ArrayFieldItemStateContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'j', function() {
          return MultistepStateContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'i', function() {
          return MultistepApiContext;
        }),
        __webpack_require__.d(__webpack_exports__, 'k', function() {
          return MultistepStepContext;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        FormRegisterContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
          {
            register: function register() {},
            deregister: function deregister() {},
            setValue: function setValue() {},
            setTouched: function setTouched() {},
            setError: function setError() {},
            update: function update() {},
            getField: function getField() {},
            expectRemoval: function expectRemoval() {},
            getInitialValue: function getInitialValue() {}
          }
        ),
        FormStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
          {}
        ),
        FormApiContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
          {
            getFullField: function getFullField() {},
            getValues: function getValues() {},
            getOptions: function getOptions() {
              return {};
            },
            setInitialValue: function setInitialValue() {},
            getInitialValue: function getInitialValue() {},
            getDerrivedValue: function getDerrivedValue() {},
            getSavedValue: function getSavedValue() {},
            removeSavedState: function removeSavedState() {}
          }
        ),
        GroupContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        ArrayFieldStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        ArrayFieldApiContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        ArrayFieldItemApiContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        ArrayFieldItemStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        MultistepStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        MultistepApiContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        MultistepStepContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
    },
    675: function(module, exports) {},
    76: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'h', function() {
        return Inputs_TextInput;
      }),
        __webpack_require__.d(__webpack_exports__, 'g', function() {
          return Inputs_TextAreaInput;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function() {
          return Inputs_RadioInput;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return Inputs_CheckboxInput;
        }),
        __webpack_require__.d(__webpack_exports__, 'f', function() {
          return Inputs_SelectInput;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return Inputs_MultiSelectInput;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return Inputs_Intro;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return NumberInput;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        Code = (__webpack_require__(5), __webpack_require__(4)),
        src = __webpack_require__(1),
        Inputs_TextInput = Object(withDocs.a)(
          '# Text Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\n<Form>\n  <label>\n    First name:\n    <Text field="name" />\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function TextInput() {
            return react_default.a.createElement(src.Form, null, function(
              _ref
            ) {
              var formState = _ref.formState;
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'First name:',
                  react_default.a.createElement(src.Text, { field: 'name' })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                )
              );
            });
          }
        ),
        NumberInput_FormState = function FormState() {
          var formState = Object(src.useFormState)();
          return react_default.a.createElement(
            Code.a,
            { language: 'language-js' },
            JSON.stringify(formState.values, null, 2)
          );
        },
        NumberInput = Object(withDocs.a)(
          '# Number Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\n<Form>\n  <label>\n    Age:\n    <Text field="age" type="number" />\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function Number() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Age:',
                  react_default.a.createElement(src.Text, {
                    field: 'age',
                    type: 'number'
                  })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement(NumberInput_FormState, null)
              )
            );
          }
        ),
        Inputs_TextAreaInput = Object(withDocs.a)(
          '# TextArea Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, TextArea } from \'informed\';\n\n<Form>\n  <label>\n    Bio:\n    <TextArea field="bio"/>\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function TextAreaInput() {
            return react_default.a.createElement(src.Form, null, function(
              _ref
            ) {
              var formState = _ref.formState;
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Bio:',
                  react_default.a.createElement(src.TextArea, { field: 'bio' })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                )
              );
            });
          }
        ),
        Inputs_RadioInput = Object(withDocs.a)(
          '# Radio Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, RadioGroup, Radio } from \'informed\';\n\n<Form id="radio-form">\n  <RadioGroup field="gender">\n    <label>Male <Radio value="male"/></label>\n    <label>Female <Radio value="female"/></label>\n  </RadioGroup>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function RadioInput() {
            return react_default.a.createElement(
              src.Form,
              { id: 'radio-form' },
              function(_ref) {
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    src.RadioGroup,
                    { field: 'gender' },
                    react_default.a.createElement(
                      'label',
                      null,
                      'Male ',
                      react_default.a.createElement(src.Radio, {
                        value: 'male'
                      })
                    ),
                    react_default.a.createElement(
                      'label',
                      null,
                      'Female ',
                      react_default.a.createElement(src.Radio, {
                        value: 'female'
                      })
                    )
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.values, null, 2)
                  )
                );
              }
            );
          }
        ),
        Inputs_CheckboxInput = Object(withDocs.a)(
          '# Checkbox Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Checkbox } from \'informed\';\n\n<Form id="checkbox-form">\n  <label>\n    Authorize <Checkbox field="authorize" />\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function CheckboxInput() {
            return react_default.a.createElement(
              src.Form,
              { id: 'checkbox-form' },
              function(_ref) {
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    'label',
                    null,
                    'Authorize ',
                    react_default.a.createElement(src.Checkbox, {
                      field: 'authorize'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.values, null, 2)
                  )
                );
              }
            );
          }
        ),
        Inputs_SelectInput = Object(withDocs.a)(
          '# Select Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Select, Option } from \'informed\';\n\n<Form>\n  <label>\n    Relationship status:\n    <Select field="status">\n      <Option value="" disabled>\n        Select One...\n      </Option>\n      <Option value="single">Single</Option>\n      <Option value="relationship">Relationship</Option>\n      <Option value="complicated">Complicated</Option>\n    </Select>\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function SelectInput() {
            return react_default.a.createElement(src.Form, null, function(
              _ref
            ) {
              var formState = _ref.formState;
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Relationship status:',
                  react_default.a.createElement(
                    src.Select,
                    { field: 'status' },
                    react_default.a.createElement(
                      src.Option,
                      { value: '', disabled: !0 },
                      'Select One...'
                    ),
                    react_default.a.createElement(
                      src.Option,
                      { value: 'single' },
                      'Single'
                    ),
                    react_default.a.createElement(
                      src.Option,
                      { value: 'relationship' },
                      'Relationship'
                    ),
                    react_default.a.createElement(
                      src.Option,
                      { value: 'complicated' },
                      'Complicated'
                    )
                  )
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                )
              );
            });
          }
        ),
        MultiSelectInput_FormState = function FormState() {
          var formState = Object(src.useFormState)();
          return react_default.a.createElement(
            Code.a,
            { language: 'language-js' },
            JSON.stringify(formState.values, null, 2)
          );
        },
        MultiSelectInput_MultiSelectInput = function MultiSelectInput() {
          return react_default.a.createElement(
            src.Form,
            { id: 'select-colors-form' },
            react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                'label',
                null,
                'Colors:',
                react_default.a.createElement(
                  src.Select,
                  {
                    field: 'colors',
                    id: 'select-colors',
                    multiple: !0,
                    style: { height: '100px', width: '200px' }
                  },
                  react_default.a.createElement(
                    src.Option,
                    { value: 'red' },
                    'Red'
                  ),
                  react_default.a.createElement(
                    src.Option,
                    { value: 'green' },
                    'Green'
                  ),
                  react_default.a.createElement(
                    src.Option,
                    { value: 'blue' },
                    'Blue'
                  ),
                  react_default.a.createElement(
                    src.Option,
                    { value: 'yellow' },
                    'Yellow'
                  ),
                  react_default.a.createElement(
                    src.Option,
                    { value: 'orange' },
                    'Orange'
                  ),
                  react_default.a.createElement(
                    src.Option,
                    { value: 'purple' },
                    'Purple'
                  )
                )
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(MultiSelectInput_FormState, null)
            )
          );
        },
        Inputs_MultiSelectInput = Object(withDocs.a)(
          '# MultiSelect Input\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Select, Option } from \'informed\';\n\n<Form id="text-form">\n <label>\n    Colors:\n    <Select\n      field="colors"\n      id="select-colors"\n      multiple\n      style={{ height: \'100px\', width: \'200px\' }}>\n      <Option value="red">Red</Option>\n      <Option value="green">Green</Option>\n      <Option value="blue">Blue</Option>\n      <Option value="yellow">Yellow</Option>\n      <Option value="orange">Orange</Option>\n      <Option value="purple">Purple</Option>\n    </Select>\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function MultiSelectInputWrapper() {
            return react_default.a.createElement(
              MultiSelectInput_MultiSelectInput,
              null
            );
          }
        ),
        Inputs_Intro = Object(withDocs.a)(
          '# Intro\n\nInformed comes with some basic default inputs. All inputs are built utilizing the `asField` HOC, and therefore have access to all the properties of an informed\'s field. This design allows you to define your very own Input types if the defaults don\'t suite your needs! For additional information on custom Inputs, see the custom input section. If you are just getting started, or don\'t care to create your own custom inputs, simply take a look at the included input types.\n\n## Input Props\n\nBelow are all the input props that `informed`\'s inputs accept.\n\n| Name                 | Type          | Required | Description                                                                                                                                                                                                                              |\n| -------------------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| field                | string        | YES      | Every input must have a field. This is how the form manages the state of this input. See the field syntax section below for additional details on what you can pass in for field.                                                        |\n| initialValue         | string OR num | NO       | An initial value for that field.                                                                                                                                                                                                         |\n| validate             | func          | NO       | Function that gets called when form performs validation. Function accepts the value as a parameter and must return either an error or undefined. By default it only gets called onSubmit. See Validation section for additional details. |\n| validateOnBlur       | bool          | NO       | Tells field to perform validation onBlur. By default it only validates onSubmit.                                                                                                                                                         |\n| validateOnChange     | bool          | NO       | Tells field to perform validation onChange. By default it only validates onSubmit.                                                                                                                                                       |\n| validateOnMount      | bool          | NO       | Tells field to perform validation onMount.                                                                                                                                                                                               |  |\n| keepState            | bool          | NO       | Keeps the field state around even when the input itself is unmounted ( see dynamic form docs for example )                                                                                                                               |\n| keepStateIfRelevant  | bool          | NO       | Keeps the field state around even when the input itself is not mounted ( only if its also relevant )                                                                                                                                     |\n| mask                 | func          | NO       | Function that will mask values when entered. Example `value => value + \'!!!\'` or `value => value.trim()`                                                                                                                                 |\n| maskWithCursorOffset | func          | NO       | Function that will mask values when entered and add a specified cursor offset. Example, see maskWithCursorOffset section under Formatting :)                                                                                             |\n| maskOnBlur           | bool          | NO       | Tells the field to only mask onBlur (by default it masks as the user types)                                                                                                                                                              |\n| formatter && parser  | func          | NO       | Functions that will format values when entered.                                                                                                                                                                                          |\n| maintainCursor       | bool          | NO       | format, parse, and mask functions will sometimes cause the cursor position to get lost. You can optionally pass this prop to maintain it!                                                                                                |\n| allowEmptyString     | bool          | NO       | Enable empty strings in the input value ( by default when you backspace everything in a text field it will remove the value )                                                                                                            |\n| onValueChange        | func          | NO       | Function that will get called when this fields value changes. Function takes the new value as a parameter.                                                                                                                               |\n| `<input>` props      | html-5        | NO       | All inputs can accept any props that a native html input, select, textarea, etc. can accept. For example, if you want to disable a text input, you would simply pass `disabled`.                                                         |\n\n## Field Syntax\n\nEvery input in `informed` needs an associated field name. In its simplest form, field names are just strings. However, sometimes you may have some complex forms that require special ways of organizing your fields, this is where the special syntax comes in.\n\nFields can be simple strings, strings that contain ".", and strings that contain "[ ]", much like how you access and write to objects and arrays in javascript. Below are some examples of field names and what they resolve to in the forms values object.\n\n| Field                  | Resolution               |\n| ---------------------- | ------------------------ |\n| `"username"`           | `values.username`        |\n| `"friends[0]"`         | `values.friends[0]`      |\n| `"siblings.1"`         | `values.siblings[1]`     |\n| `"siblings[\'2\']"`      | `values.siblings[2]`     |\n| `"parents[0].name"`    | `values.parents[0].name` |\n| `"parents[1][\'name\']"` | `values.parents[1].name` |\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text } from \'informed\';\n\n<Form id="syntax-form">\n  <label>\n    Username:\n    <Text field="username" />\n  </label>\n  <label>\n    Friend[0]:\n    <Text field="friends[0]" />\n  </label>\n  <label>\n    Siblings.1:\n    <Text field="siblings.1" />\n  </label>\n  <label>\n    Siblings[\'2\']\n    <Text field="siblings[\'2\']" />\n  </label>\n  <label>\n    Parents[0].name:\n    <Text field="parents[0].name" />\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function Intro() {
            return react_default.a.createElement(
              src.Form,
              { id: 'syntax-form' },
              function(_ref) {
                var formState = _ref.formState;
                return react_default.a.createElement(
                  'div',
                  null,
                  react_default.a.createElement(
                    'label',
                    null,
                    'Username:',
                    react_default.a.createElement(src.Text, {
                      field: 'username'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Friend[0]:',
                    react_default.a.createElement(src.Text, {
                      field: 'friends[0]'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Siblings.1:',
                    react_default.a.createElement(src.Text, {
                      field: 'siblings.1'
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    "Siblings['2']",
                    react_default.a.createElement(src.Text, {
                      field: "siblings['2']"
                    })
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Parents[0].name:',
                    react_default.a.createElement(src.Text, {
                      field: 'parents[0].name'
                    })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  ),
                  react_default.a.createElement('label', null, 'Values:'),
                  react_default.a.createElement(
                    Code.a,
                    { language: 'language-js' },
                    JSON.stringify(formState.values, null, 2)
                  )
                );
              }
            );
          }
        );
    },
    89: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'f', function() {
        return useFormApi;
      }),
        __webpack_require__.d(__webpack_exports__, 'g', function() {
          return useFormState;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return useFieldApi;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return useFieldState;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return useArrayField;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function() {
          return useForm;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return useField;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        withDocs = __webpack_require__(3),
        src = __webpack_require__(1),
        useFormApi_ComponentUsingFormApi = function ComponentUsingFormApi() {
          var formApi = Object(src.useFormApi)();
          return react_default.a.createElement(
            'button',
            {
              type: 'button',
              onClick: function onClick() {
                return formApi.setValue(
                  'name',
                  Math.floor(
                    Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)
                  )
                );
              }
            },
            'Random'
          );
        },
        useFormApi = Object(withDocs.a)(
          '# Use Form Api\n\nThe `useFormApi` hook will allow you to gain access to the formApi.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFormApi } from \'informed\';\n\nconst ComponentUsingFormApi = () => {\n  const formApi = useFormApi();\n  return (\n    <button type="button" onClick={()=>\n      formApi.setValue(\n        \'name\', \n        Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>\n      Random\n    </button>\n  );\n};\n  \n<Form>\n  <div>\n    <label>Name:<Text field="name"/></label>\n    <button type="submit">Submit</button>\n    <h5>Component using formApi:</h5>\n    <ComponentUsingFormApi />\n  </div>\n</Form>\n```\n',
          function UseFormApi() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  'label',
                  null,
                  'Name:',
                  react_default.a.createElement(src.Text, { field: 'name' })
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement(
                  'h5',
                  null,
                  'Component using formApi:'
                ),
                react_default.a.createElement(
                  useFormApi_ComponentUsingFormApi,
                  null
                )
              )
            );
          }
        ),
        useFormState_ComponentUsingFormState = function ComponentUsingFormState() {
          var formState = Object(src.useFormState)();
          return react_default.a.createElement(
            'pre',
            null,
            react_default.a.createElement(
              'code',
              null,
              JSON.stringify(formState, null, 2)
            )
          );
        },
        useFormState = Object(withDocs.a)(
          '# Use Form State\n\nThe `useFormState` hook will allow you to gain access to the formState.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFormState } from \'informed\';\n\nconst ComponentUsingFormState = () => {\n  const formState = useFormState();\n  return (\n    <pre>\n      <code>{JSON.stringify(formState, null, 2)}</code>\n    </pre>\n  );\n};\n\n<Form>\n  <label>Name:<Text field="name" /></label>\n  <button type="submit">Submit</button>\n  <h5>Component using formState:</h5>\n  <ComponentUsingFormState />\n</Form>\n\n```\n',
          function UseFormState() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'label',
                null,
                'Name:',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(
                'h5',
                null,
                'Component using formState:'
              ),
              react_default.a.createElement(
                useFormState_ComponentUsingFormState,
                null
              )
            );
          }
        ),
        useFieldApi_ComponentUsingFieldApi = function ComponentUsingFieldApi() {
          var fieldApi = Object(src.useFieldApi)('name');
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return fieldApi.setValue(
                    Math.floor(
                      Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)
                    )
                  );
                }
              },
              'Random'
            ),
            react_default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: function onClick() {
                  return fieldApi.reset();
                }
              },
              'Reset'
            )
          );
        },
        useFieldApi = Object(withDocs.a)(
          '# Use Field Api\n\nThe `useFieldApi` hook will allow you to gain access to a fields api.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFieldApi } from \'informed\';\n\nconst ComponentUsingFieldApi = () => {\n  const fieldApi = useFieldApi(\'name\');\n  return (\n    <button type="button" onClick={()=>\n      fieldApi.setValue(Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))\n    }>\n      Random\n    </button>\n  );\n};\n\n<Form>\n  <label>Name:<Text field="name" /></label>\n  <button type="submit">Submit</button>\n  <h5>Component using fieldApi:</h5>\n  <ComponentUsingFieldApi />\n</Form>\n```\n',
          function UseFieldApi() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'label',
                null,
                'Name:',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(
                'h5',
                null,
                'Component using fieldApi:'
              ),
              react_default.a.createElement(
                useFieldApi_ComponentUsingFieldApi,
                null
              )
            );
          }
        ),
        useFieldState_ComponentUsingFieldState = function ComponentUsingFieldState() {
          var fieldState = Object(src.useFieldState)('name');
          return react_default.a.createElement(
            'pre',
            null,
            react_default.a.createElement(
              'code',
              null,
              JSON.stringify(fieldState, null, 2)
            )
          );
        },
        useFieldState = Object(withDocs.a)(
          '# Use Field State\n\nThe `useFieldState` hook will allow you to gain access to a fields state.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useFieldState } from \'informed\';\n\nconst ComponentUsingFieldState = () => {\n  const fieldState = useFieldState(\'name\');\n  return (\n    <pre>\n      <code>{JSON.stringify(fieldState, null, 2)}</code>\n    </pre>\n  );\n};\n\n<Form>\n  <label>Name:<Text field="name"/></label>\n  <button type="submit">Submit</button>\n  <h5>Component using fieldState:</h5>\n  <ComponentUsingFieldState />\n</Form>\n```\n',
          function UseFieldState() {
            return react_default.a.createElement(
              src.Form,
              null,
              react_default.a.createElement(
                'label',
                null,
                'Name:',
                react_default.a.createElement(src.Text, { field: 'name' })
              ),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(
                'h5',
                null,
                'Component using fieldState:'
              ),
              react_default.a.createElement(
                useFieldState_ComponentUsingFieldState,
                null
              )
            );
          }
        ),
        FormState = __webpack_require__(5),
        useArrayField_Siblings = function Siblings() {
          var _useArrayField = Object(src.useArrayField)({ field: 'siblings' }),
            add = _useArrayField.add,
            fields = _useArrayField.fields;
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'button',
              { onClick: add, type: 'button' },
              'Add Sibling'
            ),
            fields.map(function(_ref, i) {
              var field = _ref.field,
                key = _ref.key,
                remove = _ref.remove;
              return react_default.a.createElement(
                'label',
                { key: key },
                'Sibling ',
                i,
                ':',
                react_default.a.createElement(src.Text, { field: field }),
                react_default.a.createElement(
                  'button',
                  { type: 'button', onClick: remove },
                  'Remove'
                )
              );
            })
          );
        },
        useArrayField_UseArrayFieldWrapper = function UseArrayFieldWrapper() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(
              src.Form,
              { initialValues: { siblings: ['foo', 'bar', 'baz'] } },
              react_default.a.createElement(useArrayField_Siblings, null),
              react_default.a.createElement(
                'button',
                { type: 'submit' },
                'Submit'
              ),
              react_default.a.createElement(FormState.a, null)
            )
          );
        },
        useArrayField = Object(withDocs.a)(
          "# Use Array Field\n\nThe `useArrayField` hook will allow you to create field arrays.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Form, Text, useArrayField } from 'informed';\n\nconst Siblings = () => {\n\n  const { add, fields } = useArrayField({field: 'siblings'});\n\n  return (\n    <React.Fragment>\n      <button onClick={add} type=\"button\">\n        Add Sibling\n      </button>\n      {fields.map(({ field, key, remove }, i) => (\n        <label key={key}>\n          Sibling {i}:\n          <Text field={field} />\n          <button type=\"button\" onClick={remove}>\n            Remove\n          </button>\n        </label>\n      ))}   \n    </React.Fragment>  \n  );\n};\n\nconst UseArrayFieldExample = () => (\n  <div>\n    <Form initialValues={{ siblings: ['foo', 'bar', 'baz']}}>\n      <Siblings />\n      <button type=\"submit\">Submit</button>\n    </Form>\n  </div>\n);\n```\n",
          function UseArrayField() {
            return react_default.a.createElement(
              useArrayField_UseArrayFieldWrapper,
              null
            );
          }
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var useForm_CustomForm = function CustomForm(_ref) {
          var children = _ref.children,
            rest = _objectWithoutProperties(_ref, ['children']),
            _useForm = Object(src.useForm)(rest),
            formController = _useForm.formController,
            render = _useForm.render,
            userProps = _useForm.userProps;
          return render(
            react_default.a.createElement(
              'form',
              _extends({}, userProps, {
                onReset: formController.reset,
                onSubmit: formController.submitForm,
                onKeyDown: formController.keyDown
              }),
              children
            )
          );
        },
        useForm = Object(withDocs.a)(
          '# Use Form\n\nThe `useForm` hook will allow you create your own form components.\n\n\x3c!-- STORY --\x3e\n\n```jsx\nimport { Text, useForm } from \'informed\';\n\nconst CustomForm = ({ \n  children, \n  ...rest }) => {\n\n  const { \n    formController,\n    render,\n    userProps\n  } = useForm(rest);\n\n  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */\n  return render(\n    <form\n      {...userProps}\n      onReset={formController.reset}\n      onSubmit={formController.submitForm}\n      onKeyDown={formController.keyDown}>\n      {children}\n    </form>  \n  );\n};\n\n<CustomForm>\n  <label>\n    First name:\n    <Text field="name"/>\n  </label>\n  <button type="submit">Submit</button>\n</CustomForm>\n```\n',
          function UseFormExample() {
            return react_default.a.createElement(
              useForm_CustomForm,
              null,
              react_default.a.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                react_default.a.createElement(
                  'div',
                  { style: { flex: 1, marginRight: '2rem' } },
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name:',
                    react_default.a.createElement(src.Text, { field: 'name' })
                  ),
                  react_default.a.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                  )
                ),
                react_default.a.createElement(
                  'div',
                  { style: { flex: 2, minWidth: '300px' } },
                  react_default.a.createElement(FormState.a, null)
                )
              )
            );
          }
        ),
        Code = __webpack_require__(4);
      function useFieldDirect_extends() {
        return (useFieldDirect_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      var onSubmit = function onSubmit(values) {
          return window.alert(
            'Form successfully submitted with '.concat(JSON.stringify(values))
          );
        },
        useFieldDirect = Object(withDocs.a)(
          '# Use Field Without Custom Input\n\nIts NOT recomended to write forms this way but its totally doable. Below we hook up each field \nvia a call to useField. \n\nThe reason I say "NOT" is due to the fact that this hook is best used in a custom input. See the [custom inputs](/?path=/story/custominputs--creating-custom-inputs) section of the docs.\n\nAlso there is a great optimization that is made when using the render function that the `useField` hook returns.\n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { useForm, useField } from \'informed\';\n\nconst onSubmit = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);\n\nconst MyForm = () => {\n  \n  const { \n    formController,\n    render,\n  } = useForm({\n    onSubmit\n  });\n\n  const { informed: informName } = useField({ formController, field: \'name\', fieldType: \'text\' });\n  const { informed: informAge } = useField({ formController, field: \'age\', fieldType: \'number\' });\n  const { informed: informStatus } = useField({ formController, field: \'status\', fieldType: \'select\' });\n  const { informed: informColors } = useField({ formController, field: \'colors\', fieldType: \'select\', multiple: true });\n  const { informed: informAuthorize } = useField({ formController, field: \'authorize\', fieldType: \'checkbox\' });\n\n  return render(\n    <form\n      onReset={formController.reset}\n      onSubmit={formController.submitForm}\n      onKeyDown={formController.keyDown}>\n      <>\n        <label>\n          First name: <input {...informName} />\n        </label>\n        <label>\n          Age: <input {...informAge} type="number" />\n        </label>\n        <label>\n          Relationship status:\n          <select {...informStatus}>\n            <option value="" disabled>\n              Select One...\n            </option>\n            <option value="single">Single</option>\n            <option value="relationship">Relationship</option>\n            <option value="complicated">Complicated</option>\n          </select>\n        </label>\n        <label>\n          Colors:\n          <select\n            {...informColors}\n            style={{ height: \'100px\', width: \'200px\' }}>\n            <option value="red">Red</option>\n            <option value="green">Green</option>\n            <option value="blue">Blue</option>\n            <option value="yellow">Yellow</option>\n            <option value="orange">Orange</option>\n            <option value="purple">Purple</option>\n          </select>\n        </label>\n        <label>\n          Authorize <input type="checkbox" {...informAuthorize} />\n        </label>\n      </>\n      <button type="submit">Submit</button>\n    </form>  \n  );\n}\n\n```\n',
          function UseFieldDirect() {
            var _useForm = Object(src.useForm)({ onSubmit: onSubmit }),
              formController = _useForm.formController,
              render = _useForm.render,
              formState = _useForm.formState,
              informName = Object(src.useField)({
                formController: formController,
                field: 'name',
                fieldType: 'text'
              }).informed,
              informAge = Object(src.useField)({
                formController: formController,
                field: 'age',
                fieldType: 'number'
              }).informed,
              informStatus = Object(src.useField)({
                formController: formController,
                field: 'status',
                fieldType: 'select'
              }).informed,
              informColors = Object(src.useField)({
                formController: formController,
                field: 'colors',
                fieldType: 'select',
                multiple: !0
              }).informed,
              informAuthorize = Object(src.useField)({
                formController: formController,
                field: 'authorize',
                fieldType: 'checkbox'
              }).informed;
            return render(
              react_default.a.createElement(
                'form',
                {
                  onReset: formController.reset,
                  onSubmit: formController.submitForm,
                  onKeyDown: formController.keyDown
                },
                react_default.a.createElement(
                  react_default.a.Fragment,
                  null,
                  react_default.a.createElement(
                    'label',
                    null,
                    'First name: ',
                    react_default.a.createElement('input', informName)
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Age: ',
                    react_default.a.createElement(
                      'input',
                      useFieldDirect_extends({}, informAge, { type: 'number' })
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Relationship status:',
                    react_default.a.createElement(
                      'select',
                      informStatus,
                      react_default.a.createElement(
                        'option',
                        { value: '', disabled: !0 },
                        'Select One...'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'single' },
                        'Single'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'relationship' },
                        'Relationship'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'complicated' },
                        'Complicated'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Colors:',
                    react_default.a.createElement(
                      'select',
                      useFieldDirect_extends({}, informColors, {
                        style: { height: '100px', width: '200px' }
                      }),
                      react_default.a.createElement(
                        'option',
                        { value: 'red' },
                        'Red'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'green' },
                        'Green'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'blue' },
                        'Blue'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'yellow' },
                        'Yellow'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'orange' },
                        'Orange'
                      ),
                      react_default.a.createElement(
                        'option',
                        { value: 'purple' },
                        'Purple'
                      )
                    )
                  ),
                  react_default.a.createElement(
                    'label',
                    null,
                    'Authorize ',
                    react_default.a.createElement(
                      'input',
                      useFieldDirect_extends(
                        { type: 'checkbox' },
                        informAuthorize
                      )
                    )
                  )
                ),
                react_default.a.createElement(
                  'button',
                  { type: 'submit' },
                  'Submit'
                ),
                react_default.a.createElement('label', null, 'Values:'),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.values, null, 2)
                ),
                react_default.a.createElement('label', null, 'Touched:'),
                react_default.a.createElement(
                  Code.a,
                  { language: 'language-js' },
                  JSON.stringify(formState.touched, null, 2)
                )
              )
            );
          }
        );
      function useFieldCustom_extends() {
        return (useFieldCustom_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function useFieldCustom_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function useFieldCustom_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var useFieldCustom_CustomTextInput = function CustomTextInput(props) {
          var _useField = Object(src.useField)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function(key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          target,
                          Object.getOwnPropertyDescriptors(source)
                        )
                      : ownKeys(Object(source)).forEach(function(key) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key)
                          );
                        });
                }
                return target;
              })({}, props)
            ),
            fieldState = _useField.fieldState,
            fieldApi = _useField.fieldApi,
            render = _useField.render,
            ref = _useField.ref,
            userProps = _useField.userProps,
            value = fieldState.value,
            setValue = fieldApi.setValue,
            setTouched = fieldApi.setTouched,
            _onChange = userProps.onChange,
            _onBlur = userProps.onBlur,
            rest = useFieldCustom_objectWithoutProperties(userProps, [
              'onChange',
              'onBlur'
            ]);
          return render(
            react_default.a.createElement(
              'input',
              useFieldCustom_extends({}, rest, {
                ref: ref,
                value: value || 0 === value ? value : '',
                onChange: function onChange(e) {
                  setValue(e.target.value), _onChange && _onChange(e);
                },
                onBlur: function onBlur(e) {
                  setTouched(!0), _onBlur && _onBlur(e);
                }
              })
            )
          );
        },
        useFieldCustom = Object(withDocs.a)(
          '# Use Field\n\nHere we use the hook `useField` to create a custom text input. The idea is that you do this once\nfor a specific input type, then you simply start using your `<CustomTextInput />` throughout your code.\n\n\x3c!-- STORY --\x3e\n\n\x3c!-- IDFK Strange issue where i need this commnet or code formatting is messed up --\x3e\n\n```jsx\nimport { Form, useField } from \'informed\';\n\nconst CustomTextInput = (props) => {\n\n  const { fieldState, fieldApi, render, ref, userProps } = useField({ ...props });\n\n  const { value } = fieldState;\n  const { setValue, setTouched } = fieldApi;\n  const { onChange, onBlur, ...rest } = userProps;\n\n  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */\n  return render(\n    <input\n      {...rest}\n      ref={ref}\n      value={!value && value !== 0 ? \'\' : value}\n      onChange={e => {\n        setValue(e.target.value);\n        if (onChange) {\n          onChange(e);\n        }\n      }}\n      onBlur={e => {\n        setTouched(true);\n        if (onBlur) {\n          onBlur(e);\n        }\n      }}\n    />\n  );\n};\n\n<Form>\n  <label>\n    First name:\n    <CustomTextInput field="name" />\n  </label>\n  <button type="submit">Submit</button>\n</Form>;\n```\n',
          function FromScratch() {
            return react_default.a.createElement(
              'div',
              null,
              react_default.a.createElement(
                src.Form,
                { id: 'custom-form-2' },
                function(_ref) {
                  _ref.formApi;
                  var formState = _ref.formState;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    react_default.a.createElement(
                      'label',
                      null,
                      'First name:',
                      react_default.a.createElement(
                        useFieldCustom_CustomTextInput,
                        { field: 'name' }
                      )
                    ),
                    react_default.a.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    ),
                    react_default.a.createElement('label', null, 'Values:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.values, null, 2)
                    ),
                    react_default.a.createElement('label', null, 'Errors:'),
                    react_default.a.createElement(
                      Code.a,
                      { language: 'language-js' },
                      JSON.stringify(formState.errors, null, 2)
                    )
                  );
                }
              )
            );
          }
        ),
        useField = function UseField() {
          return react_default.a.createElement(
            'div',
            null,
            react_default.a.createElement(useFieldCustom, null),
            react_default.a.createElement('br', null),
            react_default.a.createElement(useFieldDirect, null)
          );
        };
    },
    892: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(893),
        __webpack_require__(894),
        __webpack_require__(896),
        __webpack_require__(898);
      var _create,
        _storybook_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20),
        storybook_readme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87),
        _storybook_theming_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          485
        ),
        _storybook_theming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          280
        ),
        _package_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(488);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
                )
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                  );
                });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var theme = Object(
        _storybook_theming_create__WEBPACK_IMPORTED_MODULE_6__.create
      )(
        (_defineProperty(
          (_create = { base: 'light', brandTitle: 'Informed' }),
          'brandTitle',
          'Informed v'.concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.a)
        ),
        _defineProperty(
          _create,
          'brandUrl',
          'https://joepuzzo.github.io/informed'
        ),
        _create)
      );
      Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addParameters)({
        readme: {},
        darkMode: {
          darkClass: 'informed-black',
          lightClass: 'informed-white',
          stylePreview: !0,
          dark: _objectSpread(
            _objectSpread({}, theme),
            _storybook_theming__WEBPACK_IMPORTED_MODULE_7__.themes.dark
          ),
          light: _objectSpread(
            _objectSpread(
              {},
              _storybook_theming__WEBPACK_IMPORTED_MODULE_7__.themes.light
            ),
            theme
          )
        }
      }),
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(
          storybook_readme__WEBPACK_IMPORTED_MODULE_5__.addReadme
        );
    },
    893: function(module, exports, __webpack_require__) {
      (function(global) {
        var _self =
            'undefined' != typeof window
              ? window
              : 'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope
                ? self
                : {},
          Prism = (function() {
            var e = /\blang(?:uage)?-(\w+)\b/i,
              t = 0,
              n = (_self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                util: {
                  encode: function encode(e) {
                    return e instanceof a
                      ? new a(e.type, n.util.encode(e.content), e.alias)
                      : 'Array' === n.util.type(e)
                        ? e.map(n.util.encode)
                        : e
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/\u00a0/g, ' ');
                  },
                  type: function type(e) {
                    return Object.prototype.toString
                      .call(e)
                      .match(/\[object (\w+)\]/)[1];
                  },
                  objId: function objId(e) {
                    return (
                      e.__id ||
                        Object.defineProperty(e, '__id', { value: ++t }),
                      e.__id
                    );
                  },
                  clone: function clone(e) {
                    switch (n.util.type(e)) {
                      case 'Object':
                        var a = {};
                        for (var r in e)
                          e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
                        return a;
                      case 'Array':
                        return (
                          e.map &&
                          e.map(function(e) {
                            return n.util.clone(e);
                          })
                        );
                    }
                    return e;
                  }
                },
                languages: {
                  extend: function extend(e, t) {
                    var a = n.util.clone(n.languages[e]);
                    for (var r in t) a[r] = t[r];
                    return a;
                  },
                  insertBefore: function insertBefore(e, t, a, r) {
                    var i = (r = r || n.languages)[e];
                    if (2 == arguments.length) {
                      for (var l in (a = arguments[1]))
                        a.hasOwnProperty(l) && (i[l] = a[l]);
                      return i;
                    }
                    var o = {};
                    for (var s in i)
                      if (i.hasOwnProperty(s)) {
                        if (s == t)
                          for (var l in a) a.hasOwnProperty(l) && (o[l] = a[l]);
                        o[s] = i[s];
                      }
                    return (
                      n.languages.DFS(n.languages, function(t, n) {
                        n === r[e] && t != e && (this[t] = o);
                      }),
                      (r[e] = o)
                    );
                  },
                  DFS: function DFS(e, t, a, r) {
                    for (var i in ((r = r || {}), e))
                      e.hasOwnProperty(i) &&
                        (t.call(e, i, e[i], a || i),
                        'Object' !== n.util.type(e[i]) || r[n.util.objId(e[i])]
                          ? 'Array' !== n.util.type(e[i]) ||
                            r[n.util.objId(e[i])] ||
                            ((r[n.util.objId(e[i])] = !0),
                            n.languages.DFS(e[i], t, i, r))
                          : ((r[n.util.objId(e[i])] = !0),
                            n.languages.DFS(e[i], t, null, r)));
                  }
                },
                plugins: {},
                highlightAll: function highlightAll(e, t) {
                  var a = {
                    callback: t,
                    selector:
                      'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                  };
                  n.hooks.run('before-highlightall', a);
                  for (
                    var r,
                      i = a.elements || document.querySelectorAll(a.selector),
                      l = 0;
                    (r = i[l++]);

                  )
                    n.highlightElement(r, !0 === e, a.callback);
                },
                highlightElement: function highlightElement(t, a, r) {
                  for (var i, l, o = t; o && !e.test(o.className); )
                    o = o.parentNode;
                  o &&
                    ((i = (o.className.match(e) || [, ''])[1].toLowerCase()),
                    (l = n.languages[i])),
                    (t.className =
                      t.className.replace(e, '').replace(/\s+/g, ' ') +
                      ' language-' +
                      i),
                    (o = t.parentNode),
                    /pre/i.test(o.nodeName) &&
                      (o.className =
                        o.className.replace(e, '').replace(/\s+/g, ' ') +
                        ' language-' +
                        i);
                  var u = {
                    element: t,
                    language: i,
                    grammar: l,
                    code: t.textContent
                  };
                  if (
                    (n.hooks.run('before-sanity-check', u),
                    !u.code || !u.grammar)
                  )
                    return (
                      u.code &&
                        (n.hooks.run('before-highlight', u),
                        (u.element.textContent = u.code),
                        n.hooks.run('after-highlight', u)),
                      void n.hooks.run('complete', u)
                    );
                  if ((n.hooks.run('before-highlight', u), a && _self.Worker)) {
                    var g = new Worker(n.filename);
                    (g.onmessage = function(e) {
                      (u.highlightedCode = e.data),
                        n.hooks.run('before-insert', u),
                        (u.element.innerHTML = u.highlightedCode),
                        r && r.call(u.element),
                        n.hooks.run('after-highlight', u),
                        n.hooks.run('complete', u);
                    }),
                      g.postMessage(
                        JSON.stringify({
                          language: u.language,
                          code: u.code,
                          immediateClose: !0
                        })
                      );
                  } else
                    (u.highlightedCode = n.highlight(
                      u.code,
                      u.grammar,
                      u.language
                    )),
                      n.hooks.run('before-insert', u),
                      (u.element.innerHTML = u.highlightedCode),
                      r && r.call(t),
                      n.hooks.run('after-highlight', u),
                      n.hooks.run('complete', u);
                },
                highlight: function highlight(e, t, r) {
                  var i = n.tokenize(e, t);
                  return a.stringify(n.util.encode(i), r);
                },
                matchGrammar: function matchGrammar(e, t, a, r, i, l, o) {
                  var s = n.Token;
                  for (var u in a)
                    if (a.hasOwnProperty(u) && a[u]) {
                      if (u == o) return;
                      var g = a[u];
                      g = 'Array' === n.util.type(g) ? g : [g];
                      for (var c = 0; c < g.length; ++c) {
                        var h = g[c],
                          f = h.inside,
                          d = !!h.lookbehind,
                          m = !!h.greedy,
                          p = 0,
                          y = h.alias;
                        if (m && !h.pattern.global) {
                          var v = h.pattern.toString().match(/[imuy]*$/)[0];
                          h.pattern = RegExp(h.pattern.source, v + 'g');
                        }
                        h = h.pattern || h;
                        for (
                          var b = r, k = i;
                          b < t.length;
                          k += t[b].length, ++b
                        ) {
                          var w = t[b];
                          if (t.length > e.length) return;
                          if (!(w instanceof s)) {
                            h.lastIndex = 0;
                            var P = 1;
                            if (!(_ = h.exec(w)) && m && b != t.length - 1) {
                              if (((h.lastIndex = k), !(_ = h.exec(e)))) break;
                              for (
                                var A = _.index + (d ? _[1].length : 0),
                                  j = _.index + _[0].length,
                                  x = b,
                                  O = k,
                                  S = t.length;
                                S > x &&
                                (j > O || (!t[x].type && !t[x - 1].greedy));
                                ++x
                              )
                                A >= (O += t[x].length) && (++b, (k = O));
                              if (t[b] instanceof s || t[x - 1].greedy)
                                continue;
                              (P = x - b), (w = e.slice(k, O)), (_.index -= k);
                            }
                            if (_) {
                              d && (p = _[1].length);
                              j =
                                (A = _.index + p) + (_ = _[0].slice(p)).length;
                              var _,
                                N = w.slice(0, A),
                                C = w.slice(j),
                                E = [b, P];
                              N && (++b, (k += N.length), E.push(N));
                              var L = new s(
                                u,
                                f ? n.tokenize(_, f) : _,
                                y,
                                _,
                                m
                              );
                              if (
                                (E.push(L),
                                C && E.push(C),
                                Array.prototype.splice.apply(t, E),
                                1 != P && n.matchGrammar(e, t, a, b, k, !0, u),
                                l)
                              )
                                break;
                            } else if (l) break;
                          }
                        }
                      }
                    }
                },
                tokenize: function tokenize(e, t) {
                  var a = [e],
                    r = t.rest;
                  if (r) {
                    for (var i in r) t[i] = r[i];
                    delete t.rest;
                  }
                  return n.matchGrammar(e, a, t, 0, 0, !1), a;
                },
                hooks: {
                  all: {},
                  add: function add(e, t) {
                    var a = n.hooks.all;
                    (a[e] = a[e] || []), a[e].push(t);
                  },
                  run: function run(e, t) {
                    var a = n.hooks.all[e];
                    if (a && a.length) for (var r, i = 0; (r = a[i++]); ) r(t);
                  }
                }
              }),
              a = (n.Token = function(e, t, n, a, r) {
                (this.type = e),
                  (this.content = t),
                  (this.alias = n),
                  (this.length = 0 | (a || '').length),
                  (this.greedy = !!r);
              });
            if (
              ((a.stringify = function(e, t, r) {
                if ('string' == typeof e) return e;
                if ('Array' === n.util.type(e))
                  return e
                    .map(function(n) {
                      return a.stringify(n, t, e);
                    })
                    .join('');
                var i = {
                  type: e.type,
                  content: a.stringify(e.content, t, r),
                  tag: 'span',
                  classes: ['token', e.type],
                  attributes: {},
                  language: t,
                  parent: r
                };
                if (
                  ('comment' == i.type && (i.attributes.spellcheck = 'true'),
                  e.alias)
                ) {
                  var l =
                    'Array' === n.util.type(e.alias) ? e.alias : [e.alias];
                  Array.prototype.push.apply(i.classes, l);
                }
                n.hooks.run('wrap', i);
                var o = Object.keys(i.attributes)
                  .map(function(e) {
                    return (
                      e +
                      '="' +
                      (i.attributes[e] || '').replace(/"/g, '&quot;') +
                      '"'
                    );
                  })
                  .join(' ');
                return (
                  '<' +
                  i.tag +
                  ' class="' +
                  i.classes.join(' ') +
                  '"' +
                  (o ? ' ' + o : '') +
                  '>' +
                  i.content +
                  '</' +
                  i.tag +
                  '>'
                );
              }),
              !_self.document)
            )
              return _self.addEventListener
                ? (_self.addEventListener(
                    'message',
                    function(e) {
                      var t = JSON.parse(e.data),
                        a = t.language,
                        r = t.code,
                        i = t.immediateClose;
                      _self.postMessage(n.highlight(r, n.languages[a], a)),
                        i && _self.close();
                    },
                    !1
                  ),
                  _self.Prism)
                : _self.Prism;
            var r =
              document.currentScript ||
              [].slice.call(document.getElementsByTagName('script')).pop();
            return (
              r &&
                ((n.filename = r.src),
                !document.addEventListener ||
                  n.manual ||
                  r.hasAttribute('data-manual') ||
                  ('loading' !== document.readyState
                    ? window.requestAnimationFrame
                      ? window.requestAnimationFrame(n.highlightAll)
                      : window.setTimeout(n.highlightAll, 16)
                    : document.addEventListener(
                        'DOMContentLoaded',
                        n.highlightAll
                      ))),
              _self.Prism
            );
          })();
        module.exports && (module.exports = Prism),
          void 0 !== global && (global.Prism = Prism),
          (Prism.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: /<!DOCTYPE[\s\S]+?>/i,
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
              pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,
              inside: {
                tag: {
                  pattern: /^<\/?[^\s>\/]+/i,
                  inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
                },
                'attr-value': {
                  pattern: /=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,
                  inside: { punctuation: /[=>"']/ }
                },
                punctuation: /\/?>/,
                'attr-name': {
                  pattern: /[^\s>\/]+/,
                  inside: { namespace: /^[^\s>\/:]+:/ }
                }
              }
            },
            entity: /&#?[\da-z]{1,8};/i
          }),
          (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
            Prism.languages.markup.entity),
          Prism.hooks.add('wrap', function(a) {
            'entity' === a.type &&
              (a.attributes.title = a.content.replace(/&amp;/, '&'));
          }),
          (Prism.languages.xml = Prism.languages.markup),
          (Prism.languages.html = Prism.languages.markup),
          (Prism.languages.mathml = Prism.languages.markup),
          (Prism.languages.svg = Prism.languages.markup),
          (Prism.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
              inside: { rule: /@[\w-]+/ }
            },
            url: /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
            selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
            string: {
              pattern: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0
            },
            property: /(\b|\B)[\w-]+(?=\s*:)/i,
            important: /\B!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:]/
          }),
          (Prism.languages.css.atrule.inside.rest = Prism.util.clone(
            Prism.languages.css
          )),
          Prism.languages.markup &&
            (Prism.languages.insertBefore('markup', 'tag', {
              style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: Prism.languages.css,
                alias: 'language-css'
              }
            }),
            Prism.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|').*?\1/i,
                  inside: {
                    'attr-name': {
                      pattern: /^\s*style/i,
                      inside: Prism.languages.markup.tag.inside
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': {
                      pattern: /.+/i,
                      inside: Prism.languages.css
                    }
                  },
                  alias: 'language-css'
                }
              },
              Prism.languages.markup.tag
            )),
          (Prism.languages.clike = {
            comment: [
              { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
            ],
            string: {
              pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0
            },
            'class-name': {
              pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /(\.|\\)/ }
            },
            keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(true|false)\b/,
            function: /[a-z0-9_]+(?=\()/i,
            number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
            operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
            punctuation: /[{}[\];(),.:]/
          }),
          (Prism.languages.javascript = Prism.languages.extend('clike', {
            keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
            number: /\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
            function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
            operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
          })),
          Prism.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
              lookbehind: !0,
              greedy: !0
            }
          }),
          Prism.languages.insertBefore('javascript', 'string', {
            'template-string': {
              pattern: /`(?:\\\\|\\?[^\\])*?`/,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /\$\{[^}]+\}/,
                  inside: {
                    'interpolation-punctuation': {
                      pattern: /^\$\{|\}$/,
                      alias: 'punctuation'
                    },
                    rest: Prism.languages.javascript
                  }
                },
                string: /[\s\S]+/
              }
            }
          }),
          Prism.languages.markup &&
            Prism.languages.insertBefore('markup', 'tag', {
              script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
                alias: 'language-javascript'
              }
            }),
          (Prism.languages.js = Prism.languages.javascript),
          (Prism.languages.json = {
            property: /"(?:\\.|[^\\"])*"(?=\s*:)/gi,
            string: /"(?!:)(?:\\.|[^\\"])*"(?!:)/g,
            number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
            punctuation: /[{}[\]);,]/g,
            operator: /:/g,
            boolean: /\b(true|false)\b/gi,
            null: /\bnull\b/gi
          }),
          (Prism.languages.jsonp = Prism.languages.json),
          (function(a) {
            var e = a.util.clone(a.languages.javascript);
            (a.languages.jsx = a.languages.extend('markup', e)),
              (a.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+(?:[\w\.:-]+(?:=(?:("|')(\\?[\s\S])*?\1|[^\s'">=]+|(\{[\s\S]*?\})))?|\{\.{3}\w+\}))*\s*\/?>/i),
              (a.languages.jsx.tag.inside[
                'attr-value'
              ].pattern = /=(?!\{)(?:('|")[\s\S]*?(\1)|[^\s>]+)/i),
              a.languages.insertBefore(
                'inside',
                'attr-name',
                {
                  spread: {
                    pattern: /\{\.{3}\w+\}/,
                    inside: { punctuation: /\{|\}|\./, 'attr-value': /\w+/ }
                  }
                },
                a.languages.jsx.tag
              );
            var s = a.util.clone(a.languages.jsx);
            delete s.punctuation,
              (s = a.languages.insertBefore(
                'jsx',
                'operator',
                { punctuation: /=(?={)|[{}[\];(),.:]/ },
                { jsx: s }
              )),
              a.languages.insertBefore(
                'inside',
                'attr-value',
                {
                  script: {
                    pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                    inside: s,
                    alias: 'language-javascript'
                  }
                },
                a.languages.jsx.tag
              );
          })(Prism),
          (function() {
            if (
              'undefined' != typeof self &&
              self.Prism &&
              self.document &&
              Function.prototype.bind
            ) {
              var e = /(?:^|\s)token(?=$|\s)/,
                s = /(?:^|\s)active(?=$|\s)/g,
                i = /(?:^|\s)flipped(?=$|\s)/g,
                o = function o(t, e, s, i) {
                  (this._elt = null),
                    (this._type = t),
                    (this._clsRegexp = RegExp('(?:^|\\s)' + t + '(?=$|\\s)')),
                    (this._token = null),
                    (this.updater = e),
                    (this._mouseout = this.mouseout.bind(this)),
                    (this.initializer = i);
                  var n = this;
                  s || (s = ['*']),
                    'Array' !== Prism.util.type(s) && (s = [s]),
                    s.forEach(function(t) {
                      'string' != typeof t && (t = t.lang),
                        o.byLanguages[t] || (o.byLanguages[t] = []),
                        o.byLanguages[t].indexOf(n) < 0 &&
                          o.byLanguages[t].push(n);
                    }),
                    (o.byType[t] = this);
                };
              (o.prototype.init = function() {
                this._elt ||
                  ((this._elt = document.createElement('div')),
                  (this._elt.className =
                    'prism-previewer prism-previewer-' + this._type),
                  document.body.appendChild(this._elt),
                  this.initializer && this.initializer());
              }),
                (o.prototype.check = function(t) {
                  do {
                    if (
                      e.test(t.className) &&
                      this._clsRegexp.test(t.className)
                    )
                      break;
                  } while ((t = t.parentNode));
                  t && t !== this._token && ((this._token = t), this.show());
                }),
                (o.prototype.mouseout = function() {
                  this._token.removeEventListener(
                    'mouseout',
                    this._mouseout,
                    !1
                  ),
                    (this._token = null),
                    this.hide();
                }),
                (o.prototype.show = function() {
                  if ((this._elt || this.init(), this._token))
                    if (this.updater.call(this._elt, this._token.textContent)) {
                      this._token.addEventListener(
                        'mouseout',
                        this._mouseout,
                        !1
                      );
                      var e = (function t(_t) {
                        var e = 0,
                          s = 0,
                          i = _t;
                        if (i.parentNode) {
                          do {
                            (e += i.offsetLeft), (s += i.offsetTop);
                          } while ((i = i.offsetParent) && i.nodeType < 9);
                          i = _t;
                          do {
                            (e -= i.scrollLeft), (s -= i.scrollTop);
                          } while (
                            (i = i.parentNode) &&
                            !/body/i.test(i.nodeName)
                          );
                        }
                        return {
                          top: s,
                          right: innerWidth - e - _t.offsetWidth,
                          bottom: innerHeight - s - _t.offsetHeight,
                          left: e
                        };
                      })(this._token);
                      (this._elt.className += ' active'),
                        e.top - this._elt.offsetHeight > 0
                          ? ((this._elt.className = this._elt.className.replace(
                              i,
                              ''
                            )),
                            (this._elt.style.top = e.top + 'px'),
                            (this._elt.style.bottom = ''))
                          : ((this._elt.className += ' flipped'),
                            (this._elt.style.bottom = e.bottom + 'px'),
                            (this._elt.style.top = '')),
                        (this._elt.style.left =
                          e.left +
                          Math.min(200, this._token.offsetWidth / 2) +
                          'px');
                    } else this.hide();
                }),
                (o.prototype.hide = function() {
                  this._elt.className = this._elt.className.replace(s, '');
                }),
                (o.byLanguages = {}),
                (o.byType = {}),
                (o.initEvents = function(t, e) {
                  var s = [];
                  o.byLanguages[e] && (s = s.concat(o.byLanguages[e])),
                    o.byLanguages['*'] && (s = s.concat(o.byLanguages['*'])),
                    t.addEventListener(
                      'mouseover',
                      function(t) {
                        var e = t.target;
                        s.forEach(function(t) {
                          t.check(e);
                        });
                      },
                      !1
                    );
                }),
                (Prism.plugins.Previewer = o),
                Prism.hooks.add('after-highlight', function(t) {
                  (o.byLanguages['*'] || o.byLanguages[t.language]) &&
                    o.initEvents(t.element, t.language);
                });
            }
          })();
      }.call(this, __webpack_require__(21)));
    },
    894: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(236),
        content = __webpack_require__(895);
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    895: function(module, exports, __webpack_require__) {
      (exports = __webpack_require__(237)(!1)).push([
        module.i,
        '/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It\'s recommended that you don\'t attempt to style these elements.\n * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n  -webkit-appearance: textfield; /* 1 */ /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don\'t inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}',
        ''
      ]),
        (module.exports = exports);
    },
    896: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(236),
        content = __webpack_require__(897);
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    897: function(module, exports, __webpack_require__) {
      (exports = __webpack_require__(237)(!1)).push([
        module.i,
        '/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+json+jsx&plugins=previewer-base */\n/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: #f8f8f2 !important;\n\tbackground: none !important;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3) !important;\n\tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace !important;\n\ttext-align: left !important;\n\twhite-space: pre !important;\n\tword-spacing: normal !important;\n\tword-break: normal !important;\n\tword-wrap: normal !important;\n\tline-height: 1.5 !important;\n  border: none;\n\n\t-moz-tab-size: 4 !important;\n\t-o-tab-size: 4 !important;\n\ttab-size: 4 !important;\n\n\t-webkit-hyphens: none !important;\n\t-ms-hyphens: none !important;\n\thyphens: none !important;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1rem !important;\n\tmargin: 0 0 !important;\n\toverflow: visible !important;\n  overflow-x: scroll !important;\n\tborder-radius: 0.3em !important;\n}\n\ncode[class*="language-"] {\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: visible !important;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: #272822 !important;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em !important;\n\tborder-radius: .3em !important;\n\twhite-space: normal !important;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray !important;\n}\n\n.token.punctuation {\n\tcolor: #f8f8f2 !important;\n}\n\n.namespace {\n\topacity: .7 !important;\n}\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672 !important;\n}\n\n.token.boolean,\n.token.number {\n\tcolor: #ae81ff !important;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #a6e22e !important;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n\tcolor: #f8f8f2 !important;\n}\n\n.token.atrule,\n.token.attr-value,\n.token.function {\n\tcolor: #e6db74 !important;\n}\n\n.token.keyword {\n\tcolor: #66d9ef !important;\n}\n\n.token.regex,\n.token.important {\n\tcolor: #fd971f !important;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold !important;\n}\n.token.italic {\n\tfont-style: italic !important;\n}\n\n.token.entity {\n\tcursor: help !important;\n}\n\n.prism-previewer,\n.prism-previewer:before,\n.prism-previewer:after {\n\tposition: absolute !important;\n\tpointer-events: none !important;\n}\n.prism-previewer,\n.prism-previewer:after {\n\tleft: 50% !important;\n}\n.prism-previewer {\n\tmargin-top: -48px !important;\n\twidth: 32px !important;\n\theight: 32px !important;\n\tmargin-left: -16px !important;\n\n\topacity: 0 !important;\n\ttransition: opacity .25s !important;\n}\n.prism-previewer.flipped {\n\tmargin-top: 0 !important;\n\tmargin-bottom: -48px !important;\n}\n.prism-previewer:before,\n.prism-previewer:after {\n\tcontent: \'\' !important;\n\tposition: absolute !important;\n\tpointer-events: none !important;\n}\n.prism-previewer:before {\n\ttop: -5px !important;\n\tright: -5px !important;\n\tleft: -5px !important;\n\tbottom: -5px !important;\n\tborder-radius: 10px !important;\n\tborder: 5px solid #fff !important;\n\tbox-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 0 10px rgba(0, 0, 0, 0.75) !important;\n}\n\n.prism-previewer:after {\n\ttop: 100% !important;\n\twidth: 0 !important;\n\theight: 0 !important;\n\tmargin: 5px 0 0 -7px !important;\n\tborder: 7px solid transparent !important;\n\tborder-color: rgba(255, 0, 0, 0) !important;\n\tborder-top-color: #fff !important;\n}\n.prism-previewer.flipped:after {\n\ttop: auto !important;\n\tbottom: 100% !important;\n\tmargin-top: 0 !important;\n\tmargin-bottom: 5px !important;\n\tborder-top-color: rgba(255, 0, 0, 0) !important;\n\tborder-bottom-color: #fff !important;\n}\n.prism-previewer.active {\n\topacity: 1 !important;\n}\n',
        ''
      ]),
        (module.exports = exports);
    },
    898: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(236),
        content = __webpack_require__(899);
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    899: function(module, exports, __webpack_require__) {
      (exports = __webpack_require__(237)(!1)).push([
        module.i,
        ":root {\n  --informed-font-size--10: 10px;\n  --informed-font-size--20: 12px;\n  --informed-font-size--30: 14px;\n  --informed-font-size--40: 17px;\n  --informed-font-size--50: 20px;\n  --informed-font-size--55: 23px;\n  --informed-font-size--60: 24px;\n  --informed-font-size--70: 28px;\n  --informed-font-size--75: 34px;\n  --informed-font-size--80: 40px;\n  --informed-height--pill: 40px;\n  --informed-line-height--10: 18px;\n  --informed-line-height--20: 20px;\n  --informed-line-height--30: 21px;\n  --informed-line-height--40: 23px;\n  --informed-line-height--50: 24px;\n  --informed-line-height--60: 28px;\n  --informed-line-height--70: 36px;\n  --informed-line-height--75: 45px;\n  --informed-line-height--80: 48px;\n}\n\n.body {\n  font-family: Helvetica, sans-serif;\n}\n\na > img {\n  border-radius: 10px;\n}\n\nh1 {\n  letter-spacing: -0.6px;\n  font-size: var(--informed-font-size--80, 40px);\n  line-height: var(--informed-line-height--80, 48px);\n}\n\nh2 {\n  letter-spacing: -0.5px;\n  font-size: var(--informed-font-size--70, 28px);\n  line-height: var(--informed-line-height--70, 36px);\n}\n\nh3 {\n  letter-spacing: -0.6px;\n  font-size: var(--informed-font-size--60, 24px);\n  line-height: var(--informed-line-height--60, 28px);\n}\n\nh4 {\n  letter-spacing: -0.4px;\n  font-size: var(--informed-font-size--50, 20px);\n  line-height: var(--informed-line-height--60, 28px);\n}\n\nh5 {\n  font-size: var(--informed-font-size--40, 17px);\n  line-height: var(--informed-line-height--20, 20px);\n}\n\nh6 {\n  font-size: var(--informed-font-size--30, 14px);\n  line-height: var(--informed-line-height--30, 21px);\n}\n\ninput {\n  margin-bottom: 1rem;\n}\n\ninput:not([type='checkbox']):not([type='radio']),\ntextarea,\nselect {\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  display: block;\n  border-radius: 20px;\n  width: 100%;\n  padding: 10px 20px;\n  font-weight: 500;\n  border: 1px solid transparent;\n  max-width: 400px;\n  background-color: #f4f4f4;\n}\n\n.radio-label {\n  display: block;\n}\n\ntextarea {\n  max-width: 100%;\n}\n\nselect {\n  /* needed */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  /* SVG background image */\n  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n  background-size: 0.6em;\n  background-position: calc(100% - 1.3em) center;\n  background-repeat: no-repeat;\n}\n\n.select:before {\n  content: '';\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #f00;\n}\n\n.select:after {\n  content: '';\n  position: absolute;\n  right: 10px;\n  top: 3px;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #333;\n}\n\nlabel {\n  /* text-align: left; */\n  /* margin-left: 1rem; */\n  margin-bottom: 1rem;\n  display: block;\n}\n\nbutton {\n  text-align: left;\n  display: inline-block;\n  height: var(--informed-height--pill);\n  border: 1px solid transparent;\n  border-radius: 20px;\n  padding: 5px 40px;\n  color: white;\n  background-color: #3e6ae1;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  margin-right: 1rem;\n}\n\nbutton[type='submit'] {\n  display: block;\n}\n\nhr {\n  border: none !important;\n  height: 1px !important;\n  /* Set the hr color */\n  color: #333; /* old IE */\n  background-color: #333; /* Modern Browsers */\n}\n\npre {\n  font-size: 1em !important;\n}\n\n.markdown-body[class] {\n  font-size: inherit;\n  color: inherit;\n  border: inherit;\n}\n\n.markdown-body pre {\n  font-size: inherit;\n  color: inherit;\n  border: inherit;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n.markdown-body[class] h1,\n.markdown-body[class] h2,\n.markdown-body[class] h3,\n.markdown-body[class] h4,\n.markdown-body[class] h5,\n.markdown-body[class] h6 {\n  border: inherit;\n  margin: inherit;\n  padding: inherit;\n}\n\n.markdown-body[class] h1[id] {\n  letter-spacing: -0.6px;\n  font-size: var(--informed-font-size--80, 40px);\n  line-height: var(--informed-line-height--80, 48px);\n  margin-top: 2rem;\n}\n\n.markdown-body[class] h2[id] {\n  letter-spacing: -0.5px;\n  font-size: var(--informed-font-size--70, 28px);\n  line-height: var(--informed-line-height--70, 36px);\n  margin-top: 2rem;\n}\n\n.markdown-body[class] h3[id] {\n  letter-spacing: -0.6px;\n  font-size: var(--informed-font-size--60, 24px);\n  line-height: var(--informed-line-height--60, 28px);\n  margin-top: 2rem;\n}\n\n.markdown-body[class] h4[id] {\n  letter-spacing: -0.4px;\n  font-size: var(--informed-font-size--50, 20px);\n  line-height: var(--informed-line-height--60, 28px);\n  margin-top: 2rem;\n}\n\n.markdown-body[class] h5[id] {\n  font-size: var(--informed-font-size--40, 17px);\n  line-height: var(--informed-line-height--20, 20px);\n  margin-top: 1rem;\n}\n\n.markdown-body[class] h6[id] {\n  font-size: var(--informed-font-size--30, 14px);\n  line-height: var(--informed-line-height--30, 21px);\n  margin-top: 1rem;\n}\n\n.markdown-body p {\n  margin: inherit;\n}\n\n.markdown-body[class] p {\n}\n\n.markdown-body[class] ul {\n}\n\n.markdown-body[class] ol {\n}\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  text-decoration: none !important;\n}\n\n/* .markdown-body[class] table {\n  display: table;\n}\n\n.markdown-body thead {\n}\n\n.markdown-body tbody {\n}\n\n.markdown-body table thead tr:nth-child(1n),\n.markdown-body table tbody tr:nth-child(1n) {\n  background: inherit;\n  border: inherit;\n}\n\n.markdown-body table thead tr:nth-child(1n):first-child th {\n}\n\n.markdown-body thead tr th:nth-child(1n),\n.markdown-body tbody tr th:nth-child(1n) {\n  padding: inherit;\n  border: inherit;\n}\n\n.markdown-body[class] thead tr th:nth-child(1n),\n.markdown-body[class] tbody tr th:nth-child(1n) {\n}\n\n.markdown-body thead tr td:nth-child(1n),\n.markdown-body tbody tr td:nth-child(1n) {\n  padding: inherit;\n  border: inherit;\n}\n\n.markdown-body[class] thead tr td:nth-child(1n),\n.markdown-body[class] tbody tr td:nth-child(1n) {\n}\n\n.markdown-body[class] thead tr th:nth-child(1n):first-child,\n.markdown-body[class] tbody tr th:nth-child(1n):first-child,\n.markdown-body[class] thead tr td:nth-child(1n):first-child,\n.markdown-body[class] tbody tr td:nth-child(1n):first-child {\n  padding-left: 0;\n}\n\n.markdown-body[class] thead tr th:nth-child(1n):last-child,\n.markdown-body[class] tbody tr th:nth-child(1n):last-child,\n.markdown-body[class] thead tr td:nth-child(1n):last-child,\n.markdown-body[class] tbody tr td:nth-child(1n):last-child {\n  padding-right: 0;\n} */\n\n.informed-container {\n  padding: 4rem;\n}\n\n.informed-black {\n  background-color: rgb(13, 16, 17);\n  color: white !important;\n}\n\n.informed-black input:not([type='checkbox']):not([type='radio']),\n.informed-black select,\n.informed-black textarea {\n  background-color: #222222;\n  color: white;\n}\n\n.informed-black select {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ctitle%3Edown-arrow%3C/title%3E%3Cg fill='%23000000'%3E%3Cpath d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");\n  /* filter: invert(1); */\n}\n\n.informed-black .markdown-body[class] table {\n  background-color: #000;\n}\n\n.informed-black td {\n  background-color: #000;\n}\n\n.informed-black th {\n  background-color: #000;\n}\n\n.markdown-body > :first-child {\n  margin-top: 2rem !important;\n}\n",
        ''
      ]),
        (module.exports = exports);
    }
  },
  [[541, 1, 2]]
]);
//# sourceMappingURL=main.48db1eb4465aaa1fbef2.bundle.js.map
