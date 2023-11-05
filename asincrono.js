const teams = ["Chelsie", "Bayern", "Cruz Azul"]

console.log('Console1');
console.log(teams);

function getTeams(){
    return teams;
}

console.log('Console 2');
console.log(getTeams());

function asyncGetTeams(){
    setTimeout(() => teams, 2000);
}

console.log('Console 3');
console.log(asyncGetTeams());
console.log('Termina el script');