var miembros = data.results[0].members;
console.log(miembros);


let statistics = {
  reps: 0,
  rep_votes:0,
  dem_votes:0,
  dems: 0,
  inds: 0,
  ind_votes:0,

};


function calcStats() {

    miembros.forEach(member => {
        if (member.party == "R") {
          statistics.reps ++;
          statistics.rep_votes += member.votes_with_party_pct;
        }
        if (member.party == "D") {
          statistics.dems ++;
          statistics.dem_votes += member.votes_with_party_pct;
        }
      
        if (member.party == "I") {
          statistics.inds ++;
          statistics.ind_votes += member.votes_with_party_pct;
        }
      });
      
      statistics.totalAvgr = statistics.rep_votes/statistics.reps;
      statistics.totalAvgd = statistics.dem_votes/statistics.reps;
      statistics.totalAvgi = statistics.ind_votes/statistics.reps;

    };


calcStats()
paintTable()

function paintTable(){

document.getElementById(numbInds).innerHTML=statistics.inds;
document.getElementById(votesInds).innerHTML=statistics.totalAvgi.tofixed(2);

};
