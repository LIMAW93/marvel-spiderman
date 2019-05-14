let members = data.results[0].members;

let miTabla = document.getElementById("miTabla");

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

let template = "";

for (let i = 0; i < members.length; i++) {
  let member = members[i];
  template += `
  <tr>
    <td><a href="${member.url}>${member.first_name}, ${member.middle_name || ""} ${member.last_name}</a></td>
    <td>${member.party}</td>
    <td>${member.state}</td>
    <td>${member.seniority}</td>
  </tr>`;
}
miTabla.innerHTML = template;
