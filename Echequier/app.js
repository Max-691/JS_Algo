const chess = document.getElementById('chess');
const num = parseInt(prompt('nb of cases'));

for (let i = 1; i <= num; i++) {
    const lignes = document.createElement('div');
    lignes.setAttribute('class', 'lignes');
    chess.appendChild(lignes);
  for (let j = 1; j <= num; j++) {
    const cases = document.createElement('div');
    cases.setAttribute('class', 'cases');
    lignes.appendChild(cases);
  }

}
