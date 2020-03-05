function loadDie(){
  var die1 = "https://image.flaticon.com/icons/svg/459/459485.svg";
  var die2 = "https://image.flaticon.com/icons/svg/459/459487.svg";
  var die3 = "https://image.flaticon.com/icons/svg/459/459545.svg";
  var die4 = "https://image.flaticon.com/icons/svg/459/459495.svg";
  var die5 = "https://image.flaticon.com/icons/svg/459/459493.svg";
  var die6 = "https://image.flaticon.com/icons/svg/459/459486.svg";
    function rand(){
    var num = (Math.random()*6) + 1;
    var num = Math.floor(num);
    return num;
    }
  var one = rand();
  var two = rand();
  // return document.querySelector("img.img1").src="https://image.flaticon.com/icons/svg/459/459485.svg";
    function picture(dice){
      if(dice===1){
        return die1;
      }
      else if (dice===2) {
        return die2;
      }
      else if (dice===3) {
        return die3;
      }
      else if (dice===4) {
        return die4;
      }
      else if (dice===5) {
        return die5;
      }
      else {
        return die6;
      }
    }
  // document.querySelector("img.img1").src=picture(one1);
  //

  document.querySelector("img.img1").src=picture(one);
  document.querySelector("img.img2").src=picture(two);
if(one===two){
  document.querySelector("h1").innerHTML = 'Its a Draw <i class="far fa-frown-open"></i>';
}
else if(one > two){
  document.querySelector("h1").innerHTML = 'Player One Wins <i class="far far1 fa-flag"></i>';
}else{
  document.querySelector("h1").innerHTML = '<i class="far far2 fa-flag"></i> Player Two Wins';
}
}
