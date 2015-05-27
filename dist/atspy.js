/**
 * typescript-spy-decorator v.1.0.0 - A @spy typescript decorator that allow to spy method calls for testing purposes
 * Copyright (c) 2015 Remo H. Jansen <remo.jansen@wolksoftware.com> (http://www.remojansen.com)
 * MIT
 * https://github.com/remojansen/typescript-spy-decorator
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.atspy=t()}}(function(){return function t(e,r,n){function i(a,l){if(!r[a]){if(!e[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){var r=e[a][1][t];return i(r?r:t)},c,c.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){var n=t("./decorators"),i=function(){function t(){this.decorators["class"]=n["class"],this.decorators.method=n.method}return t.prototype.getSpies=function(t){return t.spies},t.prototype.getCallStack=function(t){throw new Error("Not implemented exception")},t}(),o=new i;e.exports=o},{"./decorators":3}],2:[function(t,e,r){var n=t("./type_checker"),i=function(){function t(t,e,r){"undefined"!=typeof performance&&"function"==typeof performance.now&&(this.highResTimeStamp=performance.now()),this.thisValue=new n(t),this.calledWithNew=e,this.args=[];for(var i=0;i<r.length;i++)this.args.push(new n(r[i]))}return t.prototype.calledOn=function(t){return this.thisValue.match(t)},t.prototype.calledWith=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var r=t.length;if(r>this.args.length)return!1;for(var n=0;r>n;n++)if(this.args[n].match(arguments[n])===!1)return!1;return!0},t.prototype.calledWithExactly=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return arguments.length==this.args.length&&this.calledWith.apply(this,t)},t.prototype.notCalledWith=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return!this.calledWith.apply(this,t)},t.prototype.calledWithMatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var r=t.length;if(r>this.args.length)return!1;for(var n=0;r>n;n++){var i=t[n];if(!i(this.args[n]))return!1}return!0},t.prototype.notCalledWithMatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return!this.calledWithMatch.apply(this,t)},t.prototype.threw=function(t){return"undefined"==typeof this.exception?!1:"undefined"==typeof t?!0:this.exception.value&&this.exception.value().toString()===t.toString()},t}();e.exports=i},{"./type_checker":5}],3:[function(t,e,r){function n(t,e,r){var n=r.value;return t.spies=t.spies||{},t.spies[e]=new s,r.value=function(){for(var r=[],i=0;i<arguments.length;i++)r[i-0]=arguments[i];var o,a,l,s;o=this,a=o.constructor==t,l=new u(o,a,r),s=null;try{return s=n.apply(o,r),l.returnValue=new c(s),t.spies[e].calls.push(l),s}catch(h){throw l.exception=h,l.returnValue=new c(void 0),t.spies[e].calls.push(l),h}},r}function i(t){function e(r,i){var o=Object.getOwnPropertyDescriptor(r,i);o?"function"==typeof o.value&&Object.defineProperty(t.prototype,i,h([n],t.prototype,i,o)):e(Object.getPrototypeOf(r),i)}var r=t.prototype;for(var i in r)r[i]!==t&&e(r,i);return t}function o(t,e){throw new Error("Not implemented exception")}function a(t,e,r){throw new Error("Not implemented exception")}function l(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];switch(t.length){case 1:return i.apply(this,t);case 2:return o.apply(this,t);case 3:return"number"==typeof t[2]?a.apply(this,t):n.apply(this,t);default:throw new Error("Invalid operation excepion")}}var s=t("./spy"),u=t("./call"),c=t("./type_checker"),h=this&&this.__decorate||function(t,e,r,n){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(t,e,r,n);switch(arguments.length){case 2:return t.reduceRight(function(t,e){return e&&e(t)||t},e);case 3:return t.reduceRight(function(t,n){return void(n&&n(e,r))},void 0);case 4:return t.reduceRight(function(t,n){return n&&n(e,r,t)||t},n)}},p={universal:l,"class":i,method:n,property:o,parameter:a};e.exports=p},{"./call":2,"./spy":4,"./type_checker":5}],4:[function(t,e,r){var n=function(){function t(){this.calls=[]}return t.prototype.getCalls=function(){return this.calls},t.prototype.callCount=function(){return this.calls.length},t.prototype.called=function(){return this.calls.length>0},t.prototype.calledOnce=function(){return 1===this.calls.length},t.prototype.calledTwice=function(){return 2===this.calls.length},t.prototype.calledThrice=function(){return 3===this.calls.length},t.prototype.firstCall=function(){return this.getCall(1)},t.prototype.secondCall=function(){return this.getCall(2)},t.prototype.thirdCall=function(){return this.getCall(3)},t.prototype.lastCall=function(){return this.getCall(this.calls.length)},t.prototype.getCall=function(t){var e=this.calls.length;return 0!==e&&e>=t?this.calls[t-1]:null},t.prototype.calledOn=function(t){for(var e=0;e<this.calls.length;e++)if(this.calls[e].thisValue.match(t))return!0;return!1},t.prototype.alwaysCalledOn=function(t){for(var e=0,r=0;r<this.calls.length;r++)this.calls[r].thisValue.match(t)&&(e+=1);return e===this.calls.length},t.prototype.calledBefore=function(t){if("undefined"==typeof performance||"function"!=typeof performance.now){var e="This feature is only available in enviroments with performance timing API support.";throw new Error(e)}for(var r=this.calls.length,n=t.getCalls(),i=n.length,o=0,a=0,l=0;r>l;l++){var s=this.calls[l].highResTimeStamp;s>o&&(o=s)}for(var u=0;i>u;u++){var s=n[u].highResTimeStamp;s>a&&(a=s)}return o>a},t.prototype.calledAfter=function(t){return!this.calledBefore(t)},t.prototype.calledWith=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var r=0;r<this.calls.length;r++)if((n=this.calls[r]).calledWith.apply(n,t))return!0;return!1;var n},t.prototype.alwaysCalledWith=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var r=this.calls.length,n=0,i=0;r>i;i++)(o=this.calls[i]).calledWith.apply(o,t)&&n++;return n===r;var o},t.prototype.calledWithExactly=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var r=0;r<this.calls.length;r++)if((n=this.calls[r]).calledWithExactly.apply(n,t))return!0;return!1;var n},t.prototype.alwaysCalledWithExactly=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var r=this.calls.length,n=0,i=0;r>i;i++)(o=this.calls[i]).calledWithExactly.apply(o,t)&&n++;return n===r;var o},t.prototype.calledWithMatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var r=0;r<this.calls.length;r++)if((n=this.calls[r]).calledWithMatch.apply(n,t))return!0;return!1;var n},t.prototype.alwaysCalledWithMatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var r=this.calls.length,n=0,i=0;r>i;i++)(o=this.calls[i]).calledWithMatch.apply(o,t)&&n++;return n===r;var o},t.prototype.calledWithNew=function(){for(var t=0;t<this.calls.length;t++)if(this.calls[t].calledWithNew===!0)return!0;return!1},t.prototype.neverCalledWith=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return!this.calledWith.apply(this,t)},t.prototype.neverCalledWithMatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return!this.calledWithMatch.apply(this,t)},t.prototype.threw=function(t){for(var e=0;e<this.calls.length;e++)if(this.calls[e].threw(t))return!0;return!1},t.prototype.alwaysThrew=function(t){for(var e=this.calls.length,r=0,n=0;e>n;n++)this.calls[n].threw(t)&&r++;return r===e},t.prototype.returned=function(t){for(var e=0;e<this.calls.length;e++)if(this.calls[e].returnValue.match(t))return!0;return!1},t.prototype.alwaysReturned=function(t){for(var e=0,r=0;r<this.calls.length;r++)this.calls[r].returnValue.match(t)&&(e+=1);return e===this.calls.length},t.prototype.reset=function(){this.calls=[]},t}();e.exports=n},{}],5:[function(t,e,r){var n=function(){function t(t){this._value=t}return t.prototype.value=function(){return this._value},t.prototype.match=function(e){var r=new t(e),n=new t(this._value);if(r.isNumber())return n.isNumber()===!1?!1:this._value===e;if(r.isBool())return n.isBool()===!1?!1:this._value===e;if(r.isString())return n.isString()===!1?!1:this._value===e;if(r.isDefined()){if(r.isFunc())return n.isFunc()===!1?!1:this._value.toString()==e.toString();if(r.isRegexp())return n.isRegexp()===!1?!1:this._value.source===e.source&&this._value.global===e.global&&this._value.ignoreCase===e.ignoreCase&&this._value.multiline===e.multiline;if(r.isDate())return n.isDate()===!1?!1:this._value.valueOf()===e.valueOf();if(r.isArray()){if(n.isArray()===!1)return!1;if(this._value.length!==e.length)return!1;for(var i=0;i<this._value.length;i++)if(new t(this._value[i]).match(e[i])===!1)return!1;return!0}var o,a=0,l=0;for(o in this._value){if(a+=1,!(o in e))return!1;var s=new t(this._value[o]);if(!s.match(e[o]))return!1}for(o in e)l+=1;return a==l}return!n.isDefined()==!1?!1:this._value===e},t.prototype.isAny=function(){return!0},t.prototype.isDefined=function(){return null!==this._value&&void 0!==this._value},t.prototype.isTruthy=function(){return!!this._value},t.prototype.isFalsy=function(){return!this._value},t.prototype.isTypeOf=function(t){switch(t){case"array":return this.isArray();case"date":return this.isDate();case"regexp":return this.isRegexp();default:return typeof this._value===t}},t.prototype.isBool=function(){return this.isTypeOf("boolean")},t.prototype.isNumber=function(){return this.isTypeOf("number")},t.prototype.isString=function(){return this.isTypeOf("string")},t.prototype.isObject=function(){return this.isTypeOf("object")},t.prototype.isFunc=function(){return this.isTypeOf("function")},t.prototype.isArray=function(){return"undefined"==typeof Array.isArray?"[object Array]"==typeof this._value:Array.isArray(this._value)},t.prototype.isRegexp=function(){return this.isInstanceOf(RegExp)},t.prototype.isDate=function(){return"function"==typeof this._value.getMonth},t.prototype.isSame=function(t){return this._value===t},t.prototype.isInstanceOf=function(t){return this._value instanceof t},t.prototype.itHas=function(t){return"object"==typeof this._value?t in this._value:void 0!==this._value[t]},t.prototype.itHasOwn=function(t){return this._value.hasOwnProperty(t)},t}();e.exports=n},{}]},{},[1])(1)});