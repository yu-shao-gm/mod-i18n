/*
Copyright 2017 Yu Shao yu.shao.gm@gmail.com

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



"use strict";

// system locale is singleton 

module.exports.locale = {

    currentLocale: "undefinied_",
    showLocale: function() {
        console.log("current locale is: ", this.currentLocale);
    }
}

// i18nString holds text needs to be translated

module.exports.i18nString = (str) => {

    var obj = {
        i18n_string: str,
        currentLocale: "undefined",
        get: function() {
            console.log("currentLocale: ", this.currentLocale);
            console.log("hello, my name is: ", this.i18n_string);
        },

        translate: function() {
            var cnjson = require('./cn.json');
            console.log("translation is: ", cnjson[this.i18n_string]);
        }
    }
    Object.seal(obj);
    return obj;
}
