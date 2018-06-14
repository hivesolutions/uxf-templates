<template>
<div>
    <ux-button v-on:click="onClick">Button</ux-button>
    <ux-button color="green" v-on:click="onClick('green')">Button Green</ux-button>
    <ux-button color="red" v-on:click="onClick('red')">Button Red</ux-button>
    <ux-drop-down v-bind:values="items" v-bind:persist="true"
                  v-on:value_change="onValueChange"></ux-drop-down>
    <ux-text-field original-value="Put some text"></ux-text-field>
    <ux-text-field type="date" original-value="Put a date"></ux-text-field>
</div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";

import { UxButton, UxDropDown, UxTextField } from "uxf/vue";

export const Website = Vue.component("website", {
    components: {
        UxButton,
        UxDropDown,
        UxTextField
    },
    data: function() {
        return {
            items: [
                {
                    text: "first",
                    value: "first"
                },
                {
                    text: "second",
                    value: "second"
                },
                {
                    text: "third",
                    value: "third"
                }
            ]
        };
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

export default Website;
</script>
