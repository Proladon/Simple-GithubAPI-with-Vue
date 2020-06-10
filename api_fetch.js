// const axios = require("axios")
    var app = new Vue({
        el: "#app",
        data: {
            user: '',
            img: '',
            id:'',
            created_date: '',
            recent_update: ''
        },
        methods: {
            getuser(user) {
                axios
                    .get(`https://api.github.com/users/${user}`)
                    .then((res) => {
                        console.log(res.data.login);
                        this.img = res.data.avatar_url
                        this.id = res.data.id
                        this.created_date = res.data.created_at
                        this.recent_update = res.data.updated_at
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
    });

