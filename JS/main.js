var miembros = data.results[0].members;
console.log(miembros);

var myjson=JSON.stringify(data);

// document.getElementById("tbody").innerHTML = myjson



function createTable(senate) {
  let tbody = document.getElementById("tbody");
  
  for (let i = 0; i < miembros.length; i++) {
     
      let tr = document.createElement("tr");
     
      let name = document.createElement("td");
      name.textContent = miembros[i].first_name + " " + miembros[i].last_name + (miembros[i].middle_name || "");
      let party = document.createElement("td");
      party.textContent = miembros[i].party;

      let state = document.createElement("td");
      state.textContent = miembros[i].state;

      let seniority = document.createElement("td");
      seniority.textContent = miembros[i].seniority;

      let votes = document.createElement("td");
      votes.textContent = miembros[i].votes_with_party_pct;

      tr.append(name, party, state, seniority, votes);

      tbody.appendChild(tr);
  }

}
createTable();


