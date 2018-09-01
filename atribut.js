function jam() {
    var waktu = new Date(),
        jam = waktu.getHours(),
        menit = waktu.getMinutes(),
        detik = waktu.getSeconds();
    document.getElementById('jam').innerHTML = cekAngka(jam) + ":" + cekAngka(menit) + ":" + cekAngka(detik);
}

function cekAngka(standIn) {
    if (standIn < 10) {
        standIn = '0' + standIn
    }
    return standIn;
}
setInterval(jam, 1000);


var images = [
  "images/slider/tmii1.jpg",
  "images/slider/tmii2.jpg",
  "images/slider/tmii3.jpg",
  "images/slider/tmii4.jpg",
];

var i = 0;
function slides(){
  document.getElementById("slideimage").src = images[i];
  if (i <(images.length-1)) {
    i++
  } else {
    i=0;
  }
}
setInterval(slides,2000)
