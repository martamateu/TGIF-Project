var miembros= data.results[0].members;


let statistics = {
	reps: 0,
	rep_votes: 0,
	dems: 0,
	dem_votes: 0,
	inds: 0,
    ind_votes: 0,

};

calcStats();
paintTable();

function calcStats() {
	miembros.forEach(member => {
		if (member.party == 'R') {
			statistics.reps++;
			statistics.rep_votes += member.votes_with_party_pct;
    }
    
		if (member.party == 'D') {
			statistics.dems++;
			statistics.dem_votes += member.votes_with_party_pct;
    }
    
		if (member.party == 'I') {
			statistics.inds++;
			statistics.ind_votes += member.votes_with_party_pct;
    }
    
	});

  statistics.totalAvgR = statistics.rep_votes / statistics.reps;
	statistics.totalAvgD = statistics.dem_votes / statistics.dems;
	statistics.totalAvgI = statistics.ind_votes / statistics.inds;
};


function paintTable() {
	document.getElementById("numbReps").innerHTML = statistics.reps;
	document.getElementById('votesReps').innerHTML = statistics.totalAvgR.toFixed(2,);
	document.getElementById('numbDems').innerHTML = statistics.dems;
	document.getElementById('votesDems').innerHTML = statistics.totalAvgD.toFixed(2,);

};

function printEngageTable(id) {
	let table=document.getElementById(id);
	let ordenados;
	if(id == "least_engaged"){
	   ordenados= miembros.sort(function (a,b){return b.missed_votes_pct-a.missed_votes_pct});
	} else {
		ordenados= miembros.sort(function (a,b){return a.missed_votes_pct-b.missed_votes_pct});
	}
  
	let diezprimeros = ordenados.slice(0,(miembros.length*0,10));
  
	for(let i= 0; i< diezprimeros.length;i++){
		let row = document.createElement('tr');
		row.insertCell().textContent = diezprimeros[i].first_name;
		row.insertCell().textContent=diezprimeros[i].missed_votes;
		row.insertCell().textContent=diezprimeros[i].missed_votes_pct + "%";
  
		table.append(row);
		
	}
  }
  
  printEngageTable("least_engaged");
  printEngageTable("most_engaged");