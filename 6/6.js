class Dog {

    constructor(name, race, weight, age){
        this.name = name;
        this.race = race;
        this.weight = weight;
        this.age = age;
    }
    wypisz(){
        console.log(`Imie to: ${this.name}`);
        console.log("rasa to: " + this.race);
        console.log("masa to: " + this.weight);
        console.log("wiek to: " + this.age);
    }
}

const azor = new Dog("Azor", "Owczarek", 5, 9);
azor.wypisz();

//zad 1
class Prostokat {
    // a)
    constructor(x, y, nazwa) {
        this.dlugosc = x;
        this.szerokosc = y;
        this.nazwa = nazwa;
    }

    // c)
    Obwod() {
        //instrukcja
        return (this.dlugosc + this.szerokosc) * 2;
    }

    // d)
    Pole() {
        return this.dlugosc * this.szerokosc;
    }

    // e)
    Porownaj(innyProstokat) {
        if(this.Pole() > innyProstokat.Pole()) {
            return this;
        } else if(this.Pole() < innyProstokat.Pole()) {
            return innyProstokat;
        } else {
            return "Prostokąty są równe";
        }
        
    }

    //zad 6
    ZmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
        return this.nowaNazwa;
    }
}

// b)
const p1 = new Prostokat(4, 5, "Prostokąt 1");
const p2 = new Prostokat(2, 7, "Prostokąt 2");
const p3 = new Prostokat(8, 1, "Prostokąt 3");
console.log(p1.nazwa)

console.log("Obwód 2 prostokąta wynosi: "+p2.Obwod());
console.log(p3.Pole());

console.log("Większe pole ma prostokąt: "+p2.Porownaj(p1).nazwa);

//zad 2
class Trojkat {
    // a)
    constructor(h, a, nazwa) {
        this.wysokosc = h;
        this.podstawa = a;
        this.nazwa = nazwa;
    }

    // c)
    Pole() {
        return (this.wysokosc * this.podstawa) / 2;
    }

    // d)
    PorownajTrojkaty(innyTrojkat) {
        return this.Pole()>innyTrojkat.Pole() ? this : innyTrojkat;
    }
}

// b)
const t1 = new Trojkat(4, 9, "Trójkąt 1");
const t2 = new Trojkat(2, 5, "Trójkąt 2");
const t3 = new Trojkat(5, 4, "Trójkąt 3");

//zad 3
class Trapez {
    // a)
    constructor(h, a, b, nazwa) {
        this.wysokosc = h;
        this.podstawa1 = a;
        this.podstawa2 = b;
        this.nazwa = nazwa;
    }

    // c)
    Pole() {
        return ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
    }
}

// b)
const trap1 = new Trapez(2, 9, "Trapez 1");
const trap2 = new Trapez(10, 12, "Trapez 2");
const trap3 = new Trapez(7, 8, "Trapez 3");

//zad 4
function NajwiekszePole(prostokat, trojkat, trapez) { //to są zmienne działające w funkcji, a nie te z class
    let najw = prostokat;
    if(najw.Pole() < trojkat.Pole()) {
        najw = trojkat;
    } if(najw.Pole() < trapez.Pole()) {
        najw = trapez;
    }
    return najw;
}



//zad 5
function WiekszyObwod(prost1, prost2) {
    let obw1 = (prost1.x * 2) + (prost1.y * 2);
    let obw2 = (prost2.x * 2) + (prost2.y * 2);
    return obw1>obw2 ? prost1 : prost2;
   
}

//zad 6 na gorze - w class Prostokat
console.log(p1.ZmienNazwe("Choroszcz"));