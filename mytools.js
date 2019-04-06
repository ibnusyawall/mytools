/* Coded By Ibnu Syawall */
/* My Tools */
/* Say Alhamdulillah :) */

// ---------- module ----------

var z = require('request') ;    // npm install --save request
var b = require('readline');    // npm install --save readline
var c = require('shelljs') ;    // npm install --save shelljs
var d = require('colors')  ;    // npm install --save colors

// ---------- warna ----------

d.setTheme({
    kuning : 'yellow',
    hijau  : 'green' ,
    biru   : 'blue'  ,
    merah  : 'red'
})

// ---------- shell ----------

c.exec('clear off');

// ---------- garis ----------

garis = ' =========================== '

// ---------- banner ----------

c.echo('            _           _')
c.echo('  _____ _ _| |_ ___ ___| |___')
c.echo(' |     | | |  _| . | . | |_ -|')
c.echo(' |_|_|_|_  |_| |___|___|_|___|')
c.echo('       |___| ')
c.echo('')
c.echo("     C" + " : " + "I".merah + "bnu " + "S".merah + "yawall")
c.echo("   407 Authentic Exploit")
c.echo(garis); c.echo('');

// ---------- input ----------

const masuk = b.createInterface({
    input : process.stdin,
    output: process.stdout
});

// ---------- list ----------

pa = ' ['.kuning, gar = '] '.kuning

c.echo(pa + '1' + gar + 'DNS Lookup        ' + pa + '6' + gar + 'Whois Lookup     ' + pa + '11' + gar + 'HTTP Header Check')
c.echo(pa + '2' + gar + 'Reverse DNS       ' + pa + '7' + gar + 'GeoIp Lookup     ' + pa + '12' + gar + 'Extract Link From Web')
c.echo(pa + '3' + gar + 'Find DNS Record   ' + pa + '8' + gar + 'Reverse Ip Lookup' + pa + '13' + gar + 'Trace Route')
c.echo(pa + '4' + gar + 'Find Shared DNS   ' + pa + '9' + gar + 'TCP Port Scan    ' + pa + '99' + gar + 'Quit');
c.echo(pa + '5' + gar + 'Zone Transfer Test' + pa + '10' + gar + 'Subnet Lookup   '); c.echo("");

// ---------- url ----------

var url = ['https://api.hackertarget.com/dnslookup/?q=', 'https://api.hackertarget.com/reversedns/?q=',
           'https://api.hackertarget.com/hostsearch/?q=', 'https://api.hackertarget.com/findshareddns/?q=',
           'https://api.hackertarget.com/zonetransfer/?q=', 'https://api.hackertarget.com/whois/?q=',
           'https://api.hackertarget.com/geoip/?q=', 'https://api.hackertarget.com/reverseiplookup/?q=',
           'https://api.hackertarget.com/nmap/?q=', 'https://api.hackertarget.com/subnetcalc/?q=',
           'https://api.hackertarget.com/httpheaders/?q=', 'https://api.hackertarget.com/pagelinks/?q=',
           'https://api.hackertarget.com/mtr/?q=']

// ---------- nganu ----------

masuk.question(' [my#tools] | : ', (tampil) => {
     c.echo('');c.echo(garis);
     if (`${tampil}` == 1){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (aa) => {
             c.echo(garis);
             c.echo(pa + '√'.biru + gar + ' Harap Tunggu ..');c.echo(garis); z(url[0]+ `${aa}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
             }); masuk.close();
         });
     } else if (`${tampil}` == 2){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (bb) => {
             c.echo(garis);
             c.echo(pa + '√'.biru + gar + ' Harap Tunggu ..');c.echo(garis); z(url[1] + `${bb}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
             }); masuk.close();
          });
     } else if (`${tampil}` == 3){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (cc) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[2] + `${cc}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 4){
         masuk.question(pa + '!'.merah + gar + ' Enter NS of Domain : ', (dd) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[3] + `${dd}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 5){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (ee) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[4] + `${ee}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 6){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (ff) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[5] + `${ff}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 7){
         masuk.question(pa + '!'.merah + gar + ' Enter Ip Address   : ', (gg) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[6] + `${gg}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 8){
         masuk.question(pa + '!'.merah + gar + ' Enter Ip Address   : ', (hh) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[7] + `${hh}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 9){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (ii) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[8] + `${ii}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 10){
         masuk.question(pa + '!'.merah + gar + ' Enter Ip Address   : ', (jj) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[9] + `${jj}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 11){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (kk) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[10] + `${kk}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 12){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (ll) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harao Tunggu .. ');c.echo(garis); z(url[11] + `${ll}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 13){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (mm) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[12] + `${mm}`, function (error, response, body) {
               c.echo('|----- output -----|')
               c.echo(body)
               c.echo('|----- output -----|')
            }); masuk.close();
         });
     } else if (`${tampil}` == 99){
            c.echo(pa + '√'.biru + gar + " Harap Tunggu .. "); c.exec('exit'); c.exec('clear off'); c.echo(' Thanks for using this tools');
            c.echo('      [ my#tools ] > bye     '); c.exec('clear off && ls'); masuk.close();
     } else {
            c.echo(' Masukan input dengan benar !'); c.exec('exit'); c.exec('clear off && ls'); masuk.close();
     }; });

// ---------- exit ----------
