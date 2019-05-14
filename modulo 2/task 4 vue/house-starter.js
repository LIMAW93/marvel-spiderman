let members = data.results[0].members;

// for (let i = 0; i < members.length; i++) {
//   //Creo una puta fila en el puto limbo
//   let row = document.createElement("tr");

//   let fullName =
//     members[i].first_name +
//     " " +
//     (members[i].middle_name || "") +
//     ", " +
//     members[i].last_name;

//   row.insertCell().innerHTML = fullName;
//   row.insertCell().innerHTML = members[i].party;
//   row.insertCell().innerHTML = members[i].state;

//   //Cuelga la puta row en la puta table
//   miTabla.append(row);
// }

initialTable();
createDropdown();

function initialTable() {

    let miTabla = document.getElementById("miTabla");

    let template = "";
    template +=
        `<thead>
        <tr>
            <th>Name</th>
            <th>Party</th>
            <th>State</th>
            <th>Years in the Office</th>
            <th>Votes with Party %</th>

        </tr>

</thead>
`

    for (let i = 0; i < members.length; i++) {
        let member = members[i];
        template += `
  <tr>
    <td><a href="${member.url}">${member.first_name}, ${member.middle_name || ""} ${member.last_name}</a></td>
    <td>${member.party}</td>
    <td>${member.state}</td>
    <td>${member.seniority}</td>
    <td>${member.votes_with_party_pct + "%"}</td>
  </tr>`;
    }
    miTabla.innerHTML = template;
}



// var somarray =[];
// somarray.map(elt=>elt.value)

let checkbox = document.querySelectorAll('input[name=Party]');
checkbox.forEach(element => {
    element.addEventListener("change", createTable);
});
// checkbox.addEventListener("change", changeTable);

function createTable() {
    let miTabla = document.getElementById("miTabla");
    miTabla.innerHTML = "";

    let ArrcheckedBoxes = Array.from(document.querySelectorAll('input[name=Party]:checked')).map(elt => elt.value);

    let select = document.getElementById("custom-select").value;
    console.log(select);

    let tablaDinamica = "";
    tablaDinamica +=
        `<thead>
            <tr>
                <th>Name</th>
                <th>Party</th>
                <th>State</th>
                <th>Years in the Office</th>
                <th>Votes with Party %</th>
    
            </tr>
    
    </thead>
    `;
    for (let i = 0; i < members.length; i++) {
        let party = data.results[0].members[i].party;
        let member = members[i];
        //search parties
        if ((ArrcheckedBoxes.includes(party) && (select == member.state || select == "All")) || (ArrcheckedBoxes.length < 1 && (select == member.state || select == "All"))) {
            tablaDinamica += `
            <tr>
              <td><a href="${member.url}">${member.first_name}, ${member.middle_name || ""} ${member.last_name}</a></td>
              <td>${member.party}</td>
              <td>${member.state}</td>
              <td>${member.seniority}</td>
              <td>${member.votes_with_party_pct + "%"}</td>
            </tr>`;
        }
    }
    miTabla.innerHTML = tablaDinamica;

    let noData = document.getElementById("noData");
    if (miTabla.rows.length == 1) {
        noData.insertAdjacentHTML("beforeend", `<p>(DALE LUJO)</p>`);
    }

}

function createDropdown() {
    let arrStates = [];
    for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {
            if (!arrStates.includes(members[i].state)) {
                arrStates.push(members[i].state);
            }
        }
    }

    arrStates.sort();

    let select = document.getElementById("custom-select");

    let selectOption = "";

    selectOption += `
    <option selected id="state" value="All">ALL</option>
`;

    for (let i = 0; i < arrStates.length; i++) {
        selectOption += `
        <option value="${arrStates[i]}">${arrStates[i]}</option>
    
        `;
    }
    select.innerHTML = selectOption;

}
