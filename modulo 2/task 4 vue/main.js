(function () {
    let myVue = new Vue({
        el: "#myApp",
        data: {
            members: [],
            checked: [],
            stateSelected: "ALL",
        },
        created() {
            this.getData();
            console.log(this.members);
        },
        methods: {
            getData() {
                fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
                    headers: { "X-API-KEY": "FSm4voUkb6HavdlVYS3A3ua82UwG9lUsyntyEmlG" }
                })
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (data) {
                        myVue.members = data.results[0].members;
                    })
            },
        },

        computed: {
            checkedParty() {
                //se puede tener multilineas en una arrow function abriendo {}
                return this.members.filter((member) => {
                    let partyFilter = this.checked.includes(member.party) || this.checked.length == 0;
                    let statesFilter = this.stateSelected == "ALL" || this.stateSelected == member.state;
                    return partyFilter && statesFilter;

                })
            },

            states() {
                //new set quita los repetidos de una array
                return new Set(this.members.map((member) => member.state).sort())
            },

        },
    });
})()
    // finsih vue




//https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json