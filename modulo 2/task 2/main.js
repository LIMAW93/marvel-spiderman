$(function () {
    let myVue = new Vue({
        el: "#myApp",
        data: {
            members: []
        },
        methods: {
            getData() {
                fetch("https://api.propublica.org/congress/v1/113/senate/members.json"), {
                    headers: { "X-API-KEY": "FSm4voUkb6HavdlVYS3A3ua82UwG9lUsyntyEmlG" }
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (data) {
                            myVue.members = data.results[0].members;
                        })
                }
            }
        },

        createData() {
            this.getData()
        }
    })
    // finsih vue

});
// finish block functio

//https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json