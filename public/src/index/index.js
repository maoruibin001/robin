import '../../stylesheets/common/style.css';
import '../../stylesheets/login/login.css';
import Vue from 'vue';


new Vue({
    el: '#loginModal',
    data() {
        return {
            name: 'maoruibin',
            user: '333',
            password: ''
        }
    },
    methods: {
        test() {
            console.log(222);
        }
    }
});