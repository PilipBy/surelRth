let nama = document.getElementById('Nama');
let password = document.getElementById('password');
let laman = document.getElementById('kontainer');
let hide =document.getElementById('button-login');
let main = document.getElementById('main');
let scroll = document.getElementById('scroll');
let autoplay = document.getElementById('autoplay')

hide.onclick = function(){
    if(Nama.value ==='Ratih Ramadian Puspa' && password.value === 'biru'){
        laman.style.visibility = 'hidden';
        main.style.filter = 'none';
        scroll.style.overflow = 'auto';
        alert('Konfirmasi Berhasil, \nHalo Ratih:D \nSelamat Membaca. ')
    }
    else{
        alert('Konfirmasi gagal, silahkan coba lagi')
    }
}
