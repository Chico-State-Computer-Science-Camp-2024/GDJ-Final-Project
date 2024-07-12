function openDirect() {
    document.getElementById("direct").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeDirect() {
    document.getElementById("direct").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  let Monke;

function preload (){
    Monke = loadModel('./imagesD/amongusupsidedown.obj', true);
}

function setup(){
    let canv = createCanvas(800, 800, WEBGL);
    canv.parent("pho");
}

function draw(){
    background(255);
    orbitControl();
    normalMaterial();
    model(Monke);

}