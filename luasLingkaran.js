
var hasil;

function luasLingkaran(a,b){
    

    hasil = a * b ** 2;
    return hasil;

}

// } alert(luasLingkaran(22/7 , 63));
var a = 22/7;
var b = parseInt(prompt("silahkan masukan jari-jari"));
var hasil= luasLingkaran(a,b);
document.write("hasil luas liungkarannyta adalah ",hasil);