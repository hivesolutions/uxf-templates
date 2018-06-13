import Vue from "vue";
import jQuery from "jquery";

import {
    UxButton,
    UxDropDown,
    UxTextField
} from "uxf/vue";

import "hive-layout";
import "hive-js-util";

import "uxf/bin/css/ux.css";

import "hive-layout/css/layout.flat.css";
import "hive-layout/css/layout.extras.css";
import "hive-layout/css/layout.data.css";

import "./res/ux.ico";

window.$ = window.jQuery = jQuery;

export const simpleVue = function() {
    const app = new Vue({
        el: "#app",
        components: {
            UxButton,
            UxDropDown,
            UxTextField
        },
        data: {
            items: [{
                text: "first",
                value: "first"
            }, {
                text: "second",
                value: "second"
            }, {
                text: "third",
                value: "third"
            }]
        },
        methods: {
            onClick: function(value) {
                alert(`Clicked: ${value || "normal"}`);
            },
            onValueChange: function(value) {
                alert(`Selected: ${value}`);
            }
        }
    });
    return app;
};

export default simpleVue;
