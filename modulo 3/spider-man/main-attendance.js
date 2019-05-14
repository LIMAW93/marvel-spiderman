// (function () {

let myVue = new Vue({
    el: "#myApp",
    data: {
        members: [],
        numDemocrats: 0,
        numRepublicans: 0,
        numIndependents: 0,
        totalReps: 105,
        // votesDemocrats: 0,
        // votesRepublicans: 0,
        // votesIndependents: 0,
        // totalVotes: 0,

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

        compare(a, b) {
            if (a.missed_votes_pct < b.missed_votes_pct) {
                return -1;
            }
            if (a.missed_votes_pct > b.missed_votes_pct) {
                return 1;
            }
            if (a.missed_votes_pct == b.missed_votes_pct) {
                return 0;
            }
        },


    },

    filters: {
        decimal(value) {
            return Number(value.toFixed(2));
        },
    },

    computed: {
        democrats() {
            return this.numDemocrats = (this.members.filter((member) => member.party == "D").length);
        },
        republicans() {
            return this.numRepublicans = (this.members.filter((member) => member.party == "R").length);
        },
        independents() {
            return this.numIndependents = (this.members.filter((member) => member.party == "I").length);
        },

        votesDemocrats() {
            return (((this.members.map((member) => (member.party == "D") ? parseFloat(member.votes_with_party_pct) : 0))
                .reduce((a, b) => a + b)) / this.numDemocrats);

        },
        votesRepublicans() {
            return (((this.members.map((member) => (member.party == "R") ? parseFloat(member.votes_with_party_pct) : 0))
                .reduce((a, b) => a + b)) / this.numRepublicans);

        },
        votesIndependents() {
            return (((this.members.map((member) => (member.party == "I") ? parseFloat(member.votes_with_party_pct) : 0))
                .reduce((a, b) => a + b)) / this.numIndependents);

        },

        tableLeast() {
            return this.members.sort(this.compare).reverse().slice(0, this.members.length * 0.1);
        },

        tableMost() {
            return this.members.sort(this.compare).slice(0, this.members.length * 0.1);

        },

    },


});
    // finsih vue
// })()
//hide function



//https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json