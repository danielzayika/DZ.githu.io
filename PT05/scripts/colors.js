

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
//e defenida uma funcao que faz return de um codigo hexadecimal random (color)
for (var i=1; i<27; i++){
  var aluno = "aluno-";
  document.getElementById(aluno + i).style.color = getRandomColor();
//e feita uma soma da string aluno + i
//iguala-se a soma string aluno- a um valor de color
}
