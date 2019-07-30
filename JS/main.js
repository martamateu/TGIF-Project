var miembros = data.results[0].members;
console.log(miembros);

var myjson = JSON.stringify(data);

// document.getElementById("tbody").innerHTML = myjson

function createTable(senate) {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < senate.length; i++) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.textContent =
      senate[i].first_name +
      " " +
      senate[i].last_name +
      (senate[i].middle_name || "");
    let party = document.createElement("td");
    party.textContent = senate[i].party;

    let state = document.createElement("td");
    state.textContent = senate[i].state;

    let seniority = document.createElement("td");
    seniority.textContent = senate[i].seniority;

    let votes = document.createElement("td");
    votes.textContent = senate[i].votes_with_party_pct;

    tr.append(name, party, state, seniority, votes);

    tbody.appendChild(tr);
  }
}

createTable(miembros);

document.getElementById("cbox1").addEventListener("click", test);

document.getElementById("cbox2").addEventListener("click", test);

document.getElementById("cbox3").addEventListener("click", test);

document.getElementById("stateSelector").addEventListener("change", test);

function test() {
  let checkboxD = document.getElementById("cbox1");
  console.log("funciona", checkboxD.checked);

  let checkboxR = document.getElementById("cbox2");
  console.log("funciona", checkboxR.checked);

  let checkboxI = document.getElementById("cbox3");
  console.log("funciona", checkboxI.checked);

  
  let filteredmembers = [];
  let finalFilteredMembers = [];

  let currentState = document.getElementById("stateSelector").value;

  if (!checkboxD.checked && !checkboxR.checked && !checkboxI.checked) {
    filteredmembers = Array.from(miembros);
  } else {
    for (let j = 0; j < miembros.length; j++) {
      if (checkboxD.checked && miembros[j].party == "D") {
        filteredmembers.push(miembros[j]);
      }

      if (checkboxR.checked && miembros[j].party == "R") {
        filteredmembers.push(miembros[j]);
      }

      if (checkboxI.checked && miembros[j].party == "I") {
        filteredmembers.push(miembros[j]);
      }
    }
  }

  if(currentState == "all") {
    createTable(filteredmembers)
  }
  else {
    for(var i = 0; i < filteredmembers.length; i++) {
      if(currentState == filteredmembers[i].state) {
        finalFilteredMembers.push(filteredmembers[i])
      }
    }
    createTable(finalFilteredMembers)
  }

}


function populateStates() {
  let states = [];

  for (let i = 0; i < miembros.length; i++) {
    if (!states.includes(miembros[i].state)) {
      states.push(miembros[i].state);
    }
  }

  states.sort();

  for (let j = 0; j < states.length; j++) {
    let option = document.createElement("option");
    option.innerHTML = states[j];
    document.getElementById("stateSelector").append(option);
  }
}

populateStates();
