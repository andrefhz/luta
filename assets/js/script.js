const char = createKnight('André');
const monster = createLittleMonster();
const elementChar = document.querySelector('#char');
const elementMonster = document.querySelector('#monster');

stage.start(
    char,
    monster,
    elementChar,
    elementMonster
);