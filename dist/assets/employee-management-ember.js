'use strict';



;define("employee-management-ember/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("employee-management-ember/app", ["exports", "ember-resolver", "ember-load-initializers", "employee-management-ember/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends Ember.Application {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("employee-management-ember/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("employee-management-ember/components/employee-form/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let EmployeeFormComponent = _exports.default = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._action, _dec10 = Ember._action, _dec11 = Ember._action, _dec12 = Ember._action, _dec13 = Ember._action, _dec14 = Ember._action, _dec15 = Ember._action, _class = class EmployeeFormComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "employee", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "name", _descriptor3, this);
      _initializerDefineProperty(this, "department", _descriptor4, this);
      _initializerDefineProperty(this, "email", _descriptor5, this);
      _initializerDefineProperty(this, "contact", _descriptor6, this);
      _initializerDefineProperty(this, "address", _descriptor7, this);
      _initializerDefineProperty(this, "salary", _descriptor8, this);
    }
    updateName(event) {
      this.name = event.target.value;
    }
    updateDepartment(event) {
      this.department = event.target.value;
    }
    updateEmail(event) {
      this.email = event.target.value;
    }
    updateContact(event) {
      this.contact = event.target.value;
    }
    updateAddress(event) {
      this.address = event.target.value;
    }
    updateSalary(event) {
      this.salary = event.target.value;
    }

    // Handle form submission
    onSubmit(event) {
      event.preventDefault();
      const employeeData = {
        id: this.args.model?.id || this.employee.employees.length + 1,
        name: this.name,
        department: this.department,
        email: this.email,
        contact: this.contact,
        address: this.address,
        salary: this.salary
      };
      if (this.args.model) {
        this.employee.updateEmployee(employeeData);
      } else {
        this.employee.addEmployee(employeeData);
      }
      this.router.transitionTo('index');
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "employee", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model?.name || '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "department", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model?.department || '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model?.email || '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "contact", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model?.contact || '';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "address", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model?.address || '';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "salary", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.model?.salary || '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateName", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "updateName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateDepartment", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "updateDepartment"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateEmail", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "updateEmail"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateContact", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "updateContact"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateAddress", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "updateAddress"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateSalary", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "updateSalary"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onSubmit", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "onSubmit"), _class.prototype), _class);
});
;define("employee-management-ember/components/employee-form/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "ND89xqnQ",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[4,[38,0],[\"submit\",[32,0,[\"onSubmit\"]]],null],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"Employee Form\"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,\"for\",\"name\"],[12],[2,\"Name\"],[13],[2,\"\\n    \"],[11,\"input\"],[24,1,\"name\"],[16,2,[32,0,[\"name\"]]],[24,\"required\",\"\"],[24,4,\"text\"],[4,[38,0],[\"input\",[32,0,[\"updateName\"]]],null],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,\"for\",\"department\"],[12],[2,\"Department\"],[13],[2,\"\\n    \"],[11,\"select\"],[24,1,\"department\"],[16,2,[32,0,[\"department\"]]],[4,[38,0],[\"change\",[32,0,[\"updateDepartment\"]]],null],[12],[2,\"\\n      \"],[10,\"option\"],[14,2,\"HR\"],[12],[2,\"HR\"],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"Developer\"],[12],[2,\"Developer\"],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"Tester\"],[12],[2,\"Tester\"],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"Manager\"],[12],[2,\"Manager\"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,\"for\",\"email\"],[12],[2,\"Email\"],[13],[2,\"\\n    \"],[11,\"input\"],[24,1,\"email\"],[16,2,[32,0,[\"email\"]]],[24,\"required\",\"\"],[24,4,\"email\"],[4,[38,0],[\"input\",[32,0,[\"updateEmail\"]]],null],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,\"for\",\"contact\"],[12],[2,\"Contact Number\"],[13],[2,\"\\n    \"],[11,\"input\"],[24,1,\"contact\"],[16,2,[32,0,[\"contact\"]]],[24,4,\"number\"],[4,[38,0],[\"input\",[32,0,[\"updateContact\"]]],null],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,\"for\",\"address\"],[12],[2,\"Address\"],[13],[2,\"\\n    \"],[11,\"textarea\"],[24,1,\"address\"],[4,[38,0],[\"input\",[32,0,[\"updateAddress\"]]],null],[12],[1,[32,0,[\"address\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,\"for\",\"salary\"],[12],[2,\"Salary\"],[13],[2,\"\\n    \"],[11,\"input\"],[24,1,\"salary\"],[16,2,[32,0,[\"salary\"]]],[24,4,\"number\"],[4,[38,0],[\"input\",[32,0,[\"updateSalary\"]]],null],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[8,\"link-to\",[[24,0,\"cancel-button\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"Cancel\"]],\"parameters\":[]}]]],[2,\"\\n      \"],[10,\"button\"],[14,5,\"margin-left: 417px\"],[14,4,\"submit\"],[12],[2,\"Submit\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\"]}",
    "meta": {
      "moduleName": "employee-management-ember/components/employee-form/template.hbs"
    }
  });
});
;define("employee-management-ember/components/index/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let EmployeeFormComponent = _exports.default = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, _class = class EmployeeFormComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "employee", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
    }
    model() {}
    deleteEmployee(id) {
      this.employee.deleteEmployee(id);
      this.router.transitionTo('index');
      console.log(this.employee.employees);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "employee", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteEmployee", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "deleteEmployee"), _class.prototype), _class);
});
;define("employee-management-ember/components/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "GKp2YMSR",
    "block": "{\"symbols\":[\"employee\"],\"statements\":[[10,\"div\"],[14,0,\"employee-table\"],[12],[2,\"\\n\\n  \"],[10,\"h2\"],[12],[2,\"Employee List \"],[8,\"link-to\",[[24,0,\"add-button\"]],[[\"@route\"],[\"add-emp-details\"]],[[\"default\"],[{\"statements\":[[2,\"Add\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"table\"],[12],[2,\"\\n    \"],[10,\"thead\"],[12],[2,\"\\n    \"],[10,\"tr\"],[12],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Emp-Id\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Emp-Name\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Emp-Department\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Email\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Contact-Number\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Address\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Salary\"],[13],[2,\"\\n      \"],[10,\"th\"],[12],[2,\"Actions\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tbody\"],[12],[2,\"\\n\"],[6,[37,4],[[32,0,[\"employee\",\"employees\",\"length\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"employee\",\"employees\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"id\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"department\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"email\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"contact\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"address\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[1,[32,1,[\"salary\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[12],[2,\"\\n            \"],[8,\"link-to\",[[24,0,\"edit-button\"]],[[\"@route\",\"@model\"],[\"employee-form\",[32,1]]],[[\"default\"],[{\"statements\":[[2,\"Edit\"]],\"parameters\":[]}]]],[2,\"\\n              \"],[11,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"deleteEmployee\"]],[32,1,[\"id\"]]],null]],null],[12],[2,\"Delete\"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]},{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[14,\"colspan\",\"8\"],[12],[2,\"No employees available\"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"-track-array\",\"each\",\"if\"]}",
    "meta": {
      "moduleName": "employee-management-ember/components/index/template.hbs"
    }
  });
});
;define("employee-management-ember/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("employee-management-ember/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("employee-management-ember/helpers/app-version", ["exports", "employee-management-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = Ember.Helper.helper(appVersion);
});
;define("employee-management-ember/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _pluralize.default;
});
;define("employee-management-ember/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _singularize.default;
});
;define("employee-management-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "employee-management-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("employee-management-ember/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
});
;define("employee-management-ember/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("employee-management-ember/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define("employee-management-ember/initializers/export-application-global", ["exports", "employee-management-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = _exports.default = {
    name: 'export-application-global',
    initialize: initialize
  };
});
;define("employee-management-ember/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define("employee-management-ember/router", ["exports", "employee-management-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('index', {
      path: '/'
    });
    this.route('employee-form', {
      path: '/employee-form-edit/:employee_id'
    });
    this.route('add-emp-details');
  });
});
;define("employee-management-ember/routes/add-emp-details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class AddEmpDetailsRoute extends Ember.Route {}
  _exports.default = AddEmpDetailsRoute;
});
;define("employee-management-ember/routes/employee-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let EmployeeFormRoute = _exports.default = (_dec = Ember.inject.service, _class = class EmployeeFormRoute extends Ember.Route {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "employee", _descriptor, this);
    }
    model(params) {
      return params.employee_id ? this.employee.getEmployeeById(parseInt(params.employee_id, 10)) : null;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "employee", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("employee-management-ember/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let IndexRoute = _exports.default = (_dec = Ember.inject.service, _class = class IndexRoute extends Ember.Route {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "employee", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "employee", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("employee-management-ember/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("employee-management-ember/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("employee-management-ember/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("employee-management-ember/services/employee", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let EmployeeService = _exports.default = (_dec = Ember._tracked, _class = class EmployeeService extends Ember.Service {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "employees", _descriptor, this);
      this.fetchEmployees();
    }
    async fetchEmployees() {
      try {
        let response = await fetch('http://localhost:5000/employees');
        this.employees = await response.json();
        console.log(this.employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }
    async addEmployee(employee) {
      try {
        let response = await fetch('http://localhost:5000/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(employee)
        });
        console.log(this.employees);
        let newEmployee = await response.json();
        this.employees = [...this.employees, newEmployee];
      } catch (error) {
        console.error('Error adding employee:', error);
      }
      console.log(this.employees);
    }
    async updateEmployee(updatedEmployee) {
      try {
        let response = await fetch(`http://localhost:5000/employees/${updatedEmployee.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedEmployee)
        });
        if (response.ok) {
          console.log(response);
          this.fetchEmployees();
        } else {
          console.error('Update failed:', await response.text());
        }
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    }
    async deleteEmployee(id) {
      try {
        let response = await fetch(`http://localhost:5000/employees/${id}`, {
          method: 'DELETE'
        });
        this.fetchEmployees();
      } catch (error) {
        console.error('Error While Delete employee data', error);
      }
    }
    getEmployeeById(id) {
      return this.employees.find(employee => employee.id === id);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "employees", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _class);
});
;define("employee-management-ember/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("employee-management-ember/templates/add-emp-details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "2ImoDoOK",
    "block": "{\"symbols\":[],\"statements\":[[8,\"employee-form\",[],[[\"@model\"],[[32,0,[\"model\"]]]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "employee-management-ember/templates/add-emp-details.hbs"
    }
  });
});
;define("employee-management-ember/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "exlom366",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "employee-management-ember/templates/application.hbs"
    }
  });
});
;define("employee-management-ember/templates/employee-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "vlYM+DMn",
    "block": "{\"symbols\":[],\"statements\":[[8,\"employee-form\",[],[[\"@model\"],[[32,0,[\"model\"]]]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "employee-management-ember/templates/employee-form.hbs"
    }
  });
});
;define("employee-management-ember/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = Ember.HTMLBars.template({
    "id": "5wmyTAme",
    "block": "{\"symbols\":[],\"statements\":[[8,\"index\",[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "employee-management-ember/templates/index.hbs"
    }
  });
});
;define("employee-management-ember/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("employee-management-ember/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("employee-management-ember/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("employee-management-ember/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('employee-management-ember/config/environment', [], function() {
  var prefix = 'employee-management-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("employee-management-ember/app")["default"].create({"name":"employee-management-ember","version":"0.0.0+885877ea"});
          }
        
//# sourceMappingURL=employee-management-ember.map
