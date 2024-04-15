/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
function bng() {
    // to get random values
    let a = {
        1:"Crazy",
        2:"Amazing",
        3:"Fire"
    }
    let b = {
        1:"Engine",
        2:"Foods",
        3:"Garments"
    }
    let c = {
        1:"Bros",
        2:"Limited",
        3:"Hub"
    }
    let r = Math.floor(Math.random()*(3-1+1) +1);
    console.log(a[r]);
    r = Math.floor(Math.random()*(3-1+1) +1)
    console.log(b[r]);
    r = Math.floor(Math.random()*(3-1+1) +1)
    console.log(c[r]);
}
bng();

