// const axios = require("axios")
    var app = new Vue({
        el: "#app",
        data: {
            none: false,
            user: '',
            name: '',
            github:'',
            img: '',
            id: '',
            followers:'',
            created_date: '',
            recent_update: '',
        },
        methods: {
            getuser() {
                user = this.user
                if(this.user.trim('') == '') return
                axios
                    .get(`https://api.github.com/users/${user}`)
                    .then((res) => {
                        this.none = false
                        this.name = res.data.avatar_url.login
                        this.img = res.data.avatar_url
                        this.id = res.data.id
                        this.github = res.data.html_url
                        this.followers = res.data.followers
                        this.created_date = res.data.created_at
                        this.recent_update = res.data.updated_at
                    })
                    .catch((err) => {
                        console.log(err);
                        this.none = true
                        this.name = this.user
                        this.img = './src/kr2.gif'
                        this.id = 'none'
                        this.github = 'none'
                        this.followers = 'none'
                        this.created_date = 'none'
                        this.recent_update = 'none'
                    });
            },
        },
    });

