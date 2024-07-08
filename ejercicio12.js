// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let powerMatches = [];
  Object.keys(mutants).forEach(key => {
    if (mutants[key].power.includes(power)) {
      powerMatches.push(mutants[key]);
    }
  });

  if (powerMatches.length >= 1) {
    let mutantsWithPower = powerMatches.map(mutants => mutants.name).join(', ');
    console.log("Los mutantes con el poder '" + power + "' encontrados son: " + mutantsWithPower);
  }
  else {
    console.log("No se ha encontrado ningún mutante con el poder: " + power);
  }
}

findMutantByPower(mutants, 'steel skin');