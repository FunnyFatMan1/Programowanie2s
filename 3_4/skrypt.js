console.log("zadanie 1");
let a = 20;
let b = 10;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

document.getElementById("addition").innerHTML = add;
document.getElementById("subtraction").innerHTML = sub;
document.getElementById("multiplication").innerHTML = mul;
document.getElementById("division").innerHTML = div;

console.log("Dodawanie:", add);
console.log("Odejmowanie:", sub);
console.log("Mnożenie:", mul);
console.log("Dzielenie:", div);


console.log("zadanie 2");
let s1=3;
let s2=4;
let s3=5;

let p=(s1+s2+s3)/2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));

//a)
console.log(area);

//b) wynik + wyjasnienie
console.log("Dla trojkata o bokach: "+s1+", "+s2+", "+s3+" pole wynosi "+area);

document.getElementById("wynik1").innerHTML = area;

console.log("zadanie 3, zakomentowane ");

/*let random=Math.ceil(Math.random() * 10), userInput;
 console.log("Wylosowana liczba: "+random);
 let promptText="Zgadnij wylosowaną liczbę";
 do{
 userInput=prompt(promptText,0);
  if(userInput>random) promptText="Wylosowana liczba jest mniejsza";
 else if(userInput<random) promptText="Wylosowana liczba jest większa";
}while(userInput!=random);
alert("Brawo, wygrałeś!");

document.getElementById("minilotto").innerHTML = random;*/
console.log("zadanie 4, zakomentowane");
/*let num1 = parseFloat(prompt("Podaj 1 liczbe: "));
let num2 = parseFloat(prompt("Podaj 2 liczbe: "));
let num3 = parseFloat(prompt("Podaj 3 liczbe: "));
let help=0;
if(num1==num2&&num2==num3){
    
    console.log("Liczby sa rowne");
    
}
 else {
    help=num1;
    if(help<=num2)
    {
        help=num2;
    }
    if(help<=num2)
    {
       help=num3;
    }
}
document.getElementById("zad4").innerHTML = help;
console.log("Największa liczba to: "+help);*/
console.log("zadanie 5")
function nwd() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;
    var reszta;

    while(b){
        reszta = a % b;
        a = b;
        b = reszta;
    }
    document.getElementById("msg").innerHTML="nwd: "+a;
    console.log("nwd:"+ a)
}
console.log("zadanie 6")
  class student{
                constructor(imie, nazwisko, wiek)
                {
                    this.imie = imie;
                    this.nazwisko = nazwisko;
                    this.wiek = wiek;
                }
        }
let student1 = new student("Kacper", "Babiarz", 20);
student1.FanGwiazdkowychWojenek=true;
console.log("Student 1:");
console.log(student1);
let student2 = new student("Seba", "Kazienko", 17);
student2.FanGwiazdkowychWojenek=false;
console.log("Student 2: ");
console.log(student2);
let student3 = new student("Piotr", "Grabkasz", 20);
student3.FanGwiazdkowychWojenek=false;
console.log("Student 3: ");
console.log(student3);

console.log("zadanie 7,zakomentowane") 


/*function zad7(){
const student=Object.create(null);
student.imie=prompt("Podaj imię:", "Anakin ");
student.nazwisko=prompt("Podaj nazwisko:", "Skywalker");
student.wiek=prompt("Podaj wiek:", 10)
console.log("Student: ");
console.log(student);
document.getElementById("zad67").innerHTML='Imię: '+student.imie+'<br/>Nazwisko: '+student.nazwisko+'<br/>Wiek: '+student.wiek;     
}


zad7();*/

function zad8() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const timeString = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;

    document.getElementById("clock").innerHTML = timeString;
  }

  setInterval(zad8, 1000);

