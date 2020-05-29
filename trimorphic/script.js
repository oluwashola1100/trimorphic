document.getElementById('btn').addEventListener("click", trimorphic);
var cube = "";
var split = [];

function trimorphic(e) {
    var number = document.getElementById('number').value;
    var answer = Math.pow(number, 3);
    e.preventDefault();
    cube += answer;
    split = cube.split('');
    var cont = split.splice(-number.length);
    var contained = cont.join('')
    if (contained == number) {
        alert(`${number}^3 is equal to ${cube} which ends with ${number} is a trimorphic number`) ;
    }else{
       alert(`${number}^3 is equal to ${cube} is not trimorphic number `);
    }
   cube ="";
}