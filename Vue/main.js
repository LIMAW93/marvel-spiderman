let myVue = new Vue({
  el: "#myApp",
  data: {
    members: []
  },
  methods: {
    getData() {
      fetch("https://nytimes-ubiqum.herokuapp.com/congress/113/senate")
        .then(function(pan) {
          return pan.json();
        })
        .then(function(data) {
          myVue.members = data.results[0].members;
        });
    }
  },
  created() {
    this.getData();
  }
});
