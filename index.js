// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(){
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
};

function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
};

function appendCat(){
    appendCat=cats.slice();
    appendCat.push('Broom')
    return appendCat;
}

function prependCat(){
    prependCat=cats.slice();
    prependCat.unshift('Arnold')
    return prependCat
};

function removeLastCat(){
    removeLastCat=cats.slice();
    removeLastCat.pop('Garfield')
    return removeLastCat
};

function removeFirstCat(){
    removeFirstCat=cats.slice();
    removeFirstCat.shift('Milo')
    return removeFirstCat
};