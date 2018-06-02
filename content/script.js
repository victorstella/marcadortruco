
function raise(n){
  switch (n){
    case 1:
      $("#nos").attr("onclick", "tentoNos(3)");
      $("#eles").attr("onclick", "tentoEles(3)");
      $("#tentos").attr("onclick", "raise(2)");
      $("#tentos").text("SEIS!");
      break;
    case 2:
      $("#nos").attr("onclick", "tentoNos(6)");
      $("#eles").attr("onclick", "tentoEles(6)");
      $("#tentos").attr("onclick", "raise(3)");
      $("#tentos").text("NOVE!");
      break;
    case 3:
      $("#nos").attr("onclick", "tentoNos(9)");
      $("#eles").attr("onclick", "tentoEles(9)");
      $("#tentos").attr("onclick", "raise(4)");
      $("#tentos").text("DOZE!");
      break;
    case 4:
      $("#nos").attr("onclick", "tentoNos(12)");
      $("#eles").attr("onclick", "tentoEles(12)");
      $("#tentos").attr("onclick", "raise(1)");
      break;
  }
}

function tentoNos(n) {
  var ptsNos = document.getElementById("nos").innerHTML, count;
  for(count = 0;count < n;count++){
    ptsNos++;
  }
  $("#nos").attr("onclick", "tentoNos(1)");
  $("#eles").attr("onclick", "tentoEles(1)");
  $("#tentos").attr("onclick", "raise(1)");
  $("#tentos").text("TRUCO!");
  $("#nos").text(ptsNos);
  if(ptsNos >= 12){
    alert("NÓS GANHAMOS!");
    $("#nos").text("0");
    $("#eles").text("0");
  }
}

function tentoEles(n) {
  var ptsEles = document.getElementById("eles").innerHTML, count;
  for(count = 0;count < n;count++){
    ptsEles++;
  }
  $("#nos").attr("onclick", "tentoNos(1)");
  $("#eles").attr("onclick", "tentoEles(1)");
  $("#tentos").attr("onclick", "raise(1)");
  $("#tentos").text("TRUCO!");
  $("#eles").text(ptsEles);
  if(ptsEles >= 12){
    alert("ELES GANHARAM!");
    $("#nos").text("0");
    $("#eles").text("0");
  }
}
