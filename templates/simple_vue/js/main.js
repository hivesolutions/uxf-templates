import Vue from "vue";
import jQuery from "jquery";

import "hive-layout";
import "hive-js-util";

import "uxf/bin/css/ux.css";

import "hive-layout/css/layout.flat.css";
import "hive-layout/css/layout.extras.css";
import "hive-layout/css/layout.data.css";

import "../css/layout.css";

import "../res/images/ux.ico";

import {
    Website
} from "../vue";

window.$ = window.jQuery = jQuery;

export const simpleVue = function() {
    const app = new Vue({
        el: "#app",
        components: {
            Website
        }
    });
    return app;
};

export default simpleVue;
