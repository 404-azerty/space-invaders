const container = document.querySelector(`.grid`);
let allDivs;
let aliens = [];
let unicornPosition = 229;

function createGridAndAliens() {
  let indexAttr = 0;
  // création de la grille
  for (let index = 0; index < 240; index++) {
    if (indexAttr === 0) {
      const bloc = document.createElement(`div`);
      bloc.setAttribute(`data-left`, `true`);
      container.append(bloc);
      indexAttr++;
    } else if (indexAttr === 19) {
      const bloc = document.createElement(`div`);
      bloc.setAttribute(`data-right`, `true`);
      container.append(bloc);
      indexAttr = 0;
    } else {
      const bloc = document.createElement(`div`);
      container.append(bloc);
      indexAttr++;
    }
  }
  // création des aliens aliens
  for (let index = 1; index < 53; index++) {
    if (index === 13) {
      index = 21;
      aliens.push(index);
    } else if (index === 33) {
      index = 41;
      aliens.push(index);
    } else {
      aliens.push(index);
    }
  }
  // ajout des aliens et de la licorne sur la grille
  allDivs = document.querySelectorAll(`.grid div`);
  aliens.forEach((alien) => allDivs[alien].classList.add(`alien`));
  allDivs[unicornPosition].classList.add(`unicorn`);
}
createGridAndAliens();
