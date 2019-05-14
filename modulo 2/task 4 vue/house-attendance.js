let statistics = {

    "Number_democrats": 0,
    "Number_republicans": 0,
    "Number_independents": 0,
    "total_reps": 105,
    "votes_democrats": 0,
    "votes_republicans": 0,
    "votes_independents": 0,
    "total_votes": 0,

}

let members = data.results[0].members;

totalReps();
sumVotes();
createTableGlance();
tableLeastEngaged();
tableMostEngaged();

function totalReps() {
    let numDemocrats = [];
    let numRepublicans = [];


    for (let i = 0; i < members.length; i++) {
        member = members[i];
        if (member.party == "D") {
            numDemocrats.push(member);
        }
        if (member.party == "R") {
            numRepublicans.push(member);
        }

    }
    statistics.Number_democrats = numDemocrats.length;
    statistics.Number_republicans = numRepublicans.length;


}


function sumVotes() {
    let votesDemocrats = [];
    let votesRepublicans = [];


    let sumDemocrats = 0;
    let sumRepublicans = 0;


    for (let i = 0; i < members.length; i++) {
        member = members[i];
        if (member.party == "D") {
            votesDemocrats.push(member.votes_with_party_pct);
            sumDemocrats += member.votes_with_party_pct;
        }
        if (member.party == "R") {
            votesRepublicans.push(member.votes_with_party_pct);
            sumRepublicans += member.votes_with_party_pct;
        }

    }
    statistics.votes_democrats = parseFloat((sumDemocrats / votesDemocrats.length).toFixed(2));
    statistics.votes_republicans = parseFloat((sumRepublicans / votesRepublicans.length).toFixed(2));
    statistics.total_votes = (((statistics.votes_democrats + statistics.votes_republicans) / 2).toFixed(2));

}


function createTableGlance() {

    let tableGlance = document.getElementById("tableGlance");
    let template = "";
    template += `
    <thead>
        <tr>
            <th>Party</th>
            <th>Nº of Reps</th>
            <th>% Voted w/ Party</th>
        </tr> 
    </thead>         
    <tbody>
        <tr>
            <td>Democrats</td>
            <td>${statistics.Number_democrats}</td>
            <td>${statistics.votes_democrats}%</td>
        </tr>

        <tr>
            <td>Republicans</td>
            <td>${statistics.Number_republicans}</td>
            <td>${statistics.votes_republicans}%</td>
        </tr>
        <tr>
            <td>Independents</td>
            <td>${statistics.Number_independents}</td>
            <td>${statistics.votes_independents}%</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>${statistics.total_reps}</td>
            <td>${statistics.total_votes}%</td>
        </tr>
      </tbody>              
    `
    tableGlance.innerHTML = template;
}

function tableLeastEngaged() {

    // let arrMissed = [];

    // for (let i = 0; i < members.length; i++) {
    //     for (let j = i + 1; j < members.length; j++) {
    //         if (!arrMissed.includes(members[i].state)) {
    //             arrMissed.push(member.missed_votes_pct);
    //         }
    //     }
    // }


    // let arrMissedSorted = arrMissed.sort((a, b) => a - b);
    // 

    // for (let i = 0; i < members.length; i++) {

    //     if (arrMissedSorted[i] == members[i].missed_votes_pct) {

    //     }

    // }

    let tableLeast = document.getElementById("tableLeast");

    function sortMissed(a, b) {

        a.missed_votes_pct - b.missed_votes_pct;

        if (a.missed_votes_pct < b.missed_votes_pct) {
            return -1;
        }
        if (a.missed_votes_pct > b.missed_votes_pct) {
            return 1;
        }
        if (a.missed_votes_pct == b.missed_votes_pct) {
            return 0;
        }
    }

    let template = "";
    template += `
        <thead>
            <th>Name</th>
            <th>Missed Votes</th>
            <th>% Missed</th>
        </thead>
        <tbody>
    `;

    let memberSorted = members.sort(sortMissed).reverse();

    let sortedLength = memberSorted.length * 10 / 100;


    for (let i = 0; i < sortedLength; i++) {
        let member = memberSorted[i];
        template += `
                  
                        <tr>
                            <td><a href="${member.url}">${member.first_name}, ${member.middle_name || ""} ${member.last_name}</a></td>
                            <td>${member.missed_votes}</td>
                            <td>${member.missed_votes_pct}</td>                            
                        </tr>
                    
        `;
    }
    template += `</tbody>`
    tableLeast.innerHTML = template;

}

function tableMostEngaged() {

    let tableMost = document.getElementById("tableMost");

    function sortMissed(a, b) {

        a.missed_votes_pct - b.missed_votes_pct;

        if (a.missed_votes_pct < b.missed_votes_pct) {
            return -1;
        }
        if (a.missed_votes_pct > b.missed_votes_pct) {
            return 1;
        }
        if (a.missed_votes_pct == b.missed_votes_pct) {
            return 0;
        }
    }

    let template = "";
    template += `
        <thead>
            <th>Name</th>
            <th>Missed Votes</th>
            <th>% Missed</th>
        </thead>
        <tbody>
    `;

    let memberSorted = members.sort(sortMissed);

    let sortedLength = memberSorted.length * 10 / 100;


    for (let i = 0; i < sortedLength; i++) {
        let member = memberSorted[i];

        template += `
                    
                        <tr>
                            <td><a href="${member.url}">${member.first_name}, ${member.middle_name || ""} ${member.last_name}</a></td>
                            <td>${member.missed_votes}</td>
                            <td>${member.missed_votes_pct}</td>                            
                        </tr>
                    
        `;
    }
    template += `</tbody>`
    tableMost.innerHTML = template;

}

