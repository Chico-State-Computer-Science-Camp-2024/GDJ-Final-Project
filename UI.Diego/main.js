function openDirect() {
    document.getElementById("direct").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeDirect() {
    document.getElementById("direct").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  $(".enter").click(function (){
    $("#logo").delay(300).animate({opacity:0}, 700);
    $(".enter").delay(300).animate({opacity:0}, 700);
    $(".creds").delay(300).animate({'top' : "+=30px"});
    $('.shrd1').delay(800).animate({'marginTop' : "-=550px",opacity:1}, 1400);
    $('.shrd2').delay(1000).animate({'marginTop' : "-=550px",opacity:1}, 1400);
    $('.shrd3').delay(1200).animate({'marginTop' : "-=550px",opacity:1}, 1400);
  });
  
  $(".shrd1").click(function (){
    //window.location.href = 'relative/path/to/page.html';
    $(".maple").delay(200).animate({opacity:1}, 1500);
    $(".maple").css("top", "0px");
    console.log ("shrd1");
  })
  
  $(".shrd2").click(function (){
    //window.location.href = 'relative/path/to/page.html';
    $(".maple").delay(200).animate({opacity:1}, 1500);
    $(".maple").css("top", "0px");
    console.log ("shrd2");
  })
  
  $(".shrd3").click(function (){
    //window.location.href = 'relative/path/to/page.html';
    $(".maple").delay(200).animate({opacity:1}, 1500);
    $(".maple").css("top", "0px");
    console.log ("shrd3");
  })
  
  //function stretchImage() {
  //  var img = document.getElementById('shrd1');
  //    img.style.transform = 'scale(1.5)';
  //    img.classList.add('stretch');
  //}
  
  //let mSel = $("#main");
  //mSel.click(function (){
  //  if(parseInt(mSel.css('left')) === 10){
  //    mSel.animate({'left': '250px'}, 400);
  //  } else {
  //    mSel.animate({'left': '10px'}, 400);
  //  }
  //});