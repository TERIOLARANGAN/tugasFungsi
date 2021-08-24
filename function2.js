let tahun = prompt("masukkan umur kucing anda tahun ini");
function umurKucing (tahun){
if(tahun == 1){
return 15
}
else if(tahun == 2){
return 24
}
else if(tahun > 2){
return ((tahun - 2) * 4 + 24)
}
}
document.write("usia kucing anda setara dengan "+umurKucing(tahun)+" tahun");
console.log(umurKucing(tahun));