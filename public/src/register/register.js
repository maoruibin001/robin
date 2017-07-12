/**
 * Created by lenovo on 2017/7/11.
 */

import '../../stylesheets/common/style.css';
import Vue from 'vue';


new Vue({
    el: '#container',
    data: function() {
        return {
            name: 'maoruibin'
        }
    },
    methods: {
        test() {
            console.log(222);
        }
    }
});