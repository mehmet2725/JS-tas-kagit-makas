let kullaniciSecimi = prompt(`Taş, kağıt veya makas? Seçiminizi yazın:
Lütfen hepsini küçük harflerle yazınız.`);

let bilgisayarHamlesi = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));

if (kullaniciSecimi !== "taş" && kullaniciSecimi !== "kağıt" && kullaniciSecimi !== "makas") {
    alert(`Geçersiz seçim! Lütfen 'taş', 'kağıt' veya 'makas' yazın.`);
} else {
    alert("Bilgisayarın seçimi: " + bilgisayarHamlesi);
    
    if (kullaniciSecimi === bilgisayarHamlesi) {
        alert(`Berabere!`);
    } 
    else if (
        (kullaniciSecimi === `taş` && bilgisayarHamlesi === `makas`) ||
        (kullaniciSecimi === `kağıt` && bilgisayarHamlesi === `taş`) ||
        (kullaniciSecimi === `makas` && bilgisayarHamlesi === `kağıt`)
    ) {
        alert(`Tebrikler, kazandınız!`);
    } 
    else if (
        (kullaniciSecimi === `taş` && bilgisayarHamlesi === `kağıt`) ||
        (kullaniciSecimi === `kağıt` && bilgisayarHamlesi === `makas`) ||
        (kullaniciSecimi === `makas` && bilgisayarHamlesi === `taş`)
    ) {
        alert(`Bilgisayar kazandı!`);
    }
}