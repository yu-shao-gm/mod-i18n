"use strict";

var g11n = require('./mod-i18n');


var currentLocale = g11n.locale;

currentLocale.showLocale();
currentLocale.currentlocale = "cn";
currentLocale.showLocale();
g11n.locale.currentLocale = "cn";
currentLocale.showLocale();

var istring = g11n.i18nString("hello");

istring.get();
istring.translate();
