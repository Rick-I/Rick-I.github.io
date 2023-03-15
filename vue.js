let app = new Vue({
    el: '#content',

    data: {
        fade: false,
        apps: {"app1":false, "app2":false, "app3":false, 
                "web1":false, "web2":false, "web3":false
        },
        app_id: ""
    },
    
    methods: {
        display: function(id) {
            this.fade = true;
            this.apps[id] = true;
            this.app_id = id;
        },
        hide: function() {
            this.fade = false;
            this.apps[this.app_id] = false;
        }
    }
});