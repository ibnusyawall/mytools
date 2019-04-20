/* Coded By Ibnu Syawall */
/* MyTools */
/* Say Alhamdulillah*/

// ---------- module ----------

var z = require('request' );    // npm install --save request
var b = require('readline');    // npm install --save readline
var c = require('shelljs' );    // npm install --save shelljs
var d = require('colors'  );    // npm install --save colors
var e = require('fs');          // npm install --save fs
var i = require('ip');

// ---------- warna ----------

d.setTheme({
    kuning : 'yellow',
    hijau  : 'green' ,
    biru   : 'blue'  ,
    merah  : 'red'   ,
    a: ['white', 'bgBlue']
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
c.echo(garis); c.echo(' v 0.1.1'); c.echo('');

// ---------- input ----------

const masuk = b.createInterface({
    input : process.stdin,
    output: process.stdout
});

// ---------- list ----------

pa = ' ['.kuning, gar = '] '.kuning

c.echo(pa + '1' + gar + 'DNS Lookup        ' + pa + '6' + gar + 'Whois Lookup     ' + pa + '11' + gar + 'HTTP Header Check    ');
c.echo(pa + '2' + gar + 'Reverse DNS       ' + pa + '7' + gar + 'GeoIp Lookup     ' + pa + '12' + gar + 'Extract Link From Web');
c.echo(pa + '3' + gar + 'Find DNS Record   ' + pa + '8' + gar + 'Reverse Ip Lookup' + pa + '13' + gar + 'Trace Route          ');
c.echo(pa + '4' + gar + 'Find Shared DNS   ' + pa + '9' + gar + 'TCP Port Scan    ' + pa + '14' + gar + 'Tes Ping             ');
c.echo(pa + '5' + gar + 'Zone Transfer Test' + pa + '10' + gar + 'Subnet Lookup   ' + pa + '15' + gar + 'Robots-Scan'); c.echo("");

c.echo(pa + '16' + gar + 'SiteMap-Scan ');
c.echo(pa + '17' + gar + 'Admin Finder             Your Ip  : ' + '| '.merah + i.address() + ' | '.merah);
c.echo(pa + '18' + gar + 'Find Uploader ');
c.echo(pa + '99' + gar + 'Exit / Keluar');

// ---------- url ----------

var url = ['https://api.hackertarget.com/dnslookup/?q=', 'https://api.hackertarget.com/reversedns/?q=',
           'https://api.hackertarget.com/hostsearch/?q=', 'https://api.hackertarget.com/findshareddns/?q=',
           'https://api.hackertarget.com/zonetransfer/?q=', 'https://api.hackertarget.com/whois/?q=',
           'https://api.hackertarget.com/geoip/?q=', 'https://api.hackertarget.com/reverseiplookup/?q=',
           'https://api.hackertarget.com/nmap/?q=', 'https://api.hackertarget.com/subnetcalc/?q=',
           'https://api.hackertarget.com/httpheaders/?q=', 'https://api.hackertarget.com/pagelinks/?q=',
           'https://api.hackertarget.com/mtr/?q=']

// ---------- nganu ----------

c.echo(' '); masuk.question(' [my#tools] | : ', (tampil) => {
     c.echo('');c.echo(garis);

     if (`${tampil}` == 1){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (aa) => {
             c.echo(garis);
             c.echo(pa + '√'.biru + gar + ' Harap Tunggu ..');c.echo(garis); z(url[0]+ `${aa}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|');

              // save file
              var dir = `./.output/DNSLOOKUP/${aa}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output DNS LOOKUP From ${aa}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/DNSLOOKUP/${aa}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/DNSLOOKUP/${aa}/` + 'output.txt '.biru);
              })

             }); masuk.close();
         });

     } else if (`${tampil}` == 2){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (bb) => {
             c.echo(garis);
             c.echo(pa + '√'.biru + gar + ' Harap Tunggu ..');c.echo(garis); z(url[1] + `${bb}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/REVERSEDNS/${bb}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output REVERSE DNS From ${bb}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/REVERSEDNS/${bb}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/REVERSEDNS/${bb}/` + 'output.txt '.biru);
              })

             }); masuk.close();
          });

     } else if (`${tampil}` == 3){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (cc) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[2] + `${cc}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/FINDDNS-REC/${cc}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output FIND DNS RECORD From ${cc}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/FINDDNS-REC/${cc}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/FINDDNS-REC/${cc}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 4){
         masuk.question(pa + '!'.merah + gar + ' Enter NS of Domain : ', (dd) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[3] + `${dd}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/FINDSHARED-DNS/${dd}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output FIND SHARED DNS From ${dd}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/FINDSHARED-DNS/${dd}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/FINDSHARED-DNS/${dd}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 5){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (ee) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[4] + `${ee}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/ZONETRANSFER/${ee}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output ZONE TRANSFER TEST From ${ee}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/ZONETRANSFER/${ee}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/ZONETRANSFER/${ee}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 6){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (ff) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[5] + `${ff}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/WHOISLOOKUP/${ff}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output WHOIS LOOKUP From ${ff}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/WHOISLOOKUP/${ff}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/WHOISLOOKUP/${ff}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 7){
         masuk.question(pa + '!'.merah + gar + ' Enter Ip Address   : ', (gg) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[6] + `${gg}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/GEOIPLOOKUP/${gg}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output GEO IP LOOKUP From ${gg}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/GEOIPLOOKUP/${gg}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/GWOIPLOOKUP/${gg}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 8){
         masuk.question(pa + '!'.merah + gar + ' Enter Ip Address   : ', (hh) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[7] + `${hh}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/REVERSEIP/${hh}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output REVERSE IP From ${hh}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/REVERSEIP/${hh}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/REVERSEIP/${hh}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 9){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (ii) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[8] + `${ii}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/SCANPORT/${ii}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output SCAN PORT From ${ii}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/SCANPORT/${ii}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/SCANPORT/${ii}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 10){
         masuk.question(pa + '!'.merah + gar + ' Enter Ip Address   : ', (jj) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[9] + `${jj}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/SUBNETLOOKUP/${jj}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output SUBNET LOOKUP From ${jj}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/SUBNETLOOKUP/${jj}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/SUBNETLOOKUP/${jj}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 11){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (kk) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[10] + `${kk}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/HTTPHEADER/${kk}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output HTTP HEADER From ${kk}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/HTTPHEADER/${kk}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/HTTPHEADER/${kk}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 12){
         masuk.question(pa + '!'.merah + gar + ' Enter Domain       : ', (ll) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harao Tunggu .. ');c.echo(garis); z(url[11] + `${ll}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/EXTRACTLINK/${ll}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output EXTRACT LINK From ${ll}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/EXTRACTLINK/${ll}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/EXTRACTLINK/${ll}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 13){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (mm) => {
            c.echo(garis);
            c.echo(pa + '√'.biru + gar + ' Harap Tunggu .. ');c.echo(garis); z(url[12] + `${mm}`, function (error, response, body) {
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(body)
               c.echo('|----- output -----|')

              // save file
              var dir = `./.output/TRACEROUTE/${mm}`
                if (!e.existsSync(dir)) {
                  e.mkdirSync(dir)
                };
              var output = `Output TRACE ROUTE From ${mm}\n ------------------------- \n ${body} \n`;
              e.appendFile(`.output/TRACEROUTE/${mm}/output.txt`, output, function (err) {
                if (err) throw err;
                c.echo(''); c.echo(` Output saved : .output/TRACEROUTE/${mm}/` + 'output.txt '.biru);
              })

            }); masuk.close();
         });

     } else if (`${tampil}` == 14){
         masuk.question(pa + '!'.merah + gar + ' Ip / Domain        : ', (nn) => {
             c.echo(garis);
             c.echo(pa + '√'.biru + gar + ' Harap Tunggu ..');c.echo(garis);
               c.echo(''); c.echo('|----- output -----|'); c.echo('');
               c.echo(''); c.exec('ping ' + `${nn}`); c.exec('sleep 8'); masuk.close(); c.echo('');
               c.echo('|----- output -----|');
          });

     } else if (`${tampil}` == 15){

        var readl = require('readline');
        var bacaf = require('fs');
        var shell = require('shelljs' );
        var ambil = require('request' );

        tampil = shell.echo; jalan = shell.exec;

        tampil(' ');

        tampil('     ['.kuning + '1' + '] '.kuning + 'Dari Site ');
        tampil('     ['.kuning + '2' + '] '.kuning + 'Dari List ');
        tampil('     ['.kuning + '0' + '] '.kuning + 'Keluar    ');

        tampil(' '); tampil('|--------------------| pilih |--------------------|'); tampil(' ');

        masuk.question('['.kuning + '!' + '] '.kuning + '| ' + 'S'.merah + 'B'.biru + ' | ' + '> : ', (pilih) => {
           if (`${pilih}` == 1 || `${pilih}` == 01){
              tampil(' '); tampil('|--------------------|   01   |--------------------|'); tampil(' ');
              masuk.question('Masukan Alamat Situs : ', (site) => {
                 ambil(`${site}/robots.txt`, function(error, response, body){
                   if (response.statusCode == 200) {
                     tampil(' '); tampil('['.hijau + response.statusCode + ']'.hijau + ` ${site}/robots.txt`)
                     tampil(' '); tampil(body)
                   } else {
                     tampil(' '); tampil('['.merah + response.statusCode + ']'.merah + ` ${site}/robots.txt`)
                   };
                 }); masuk.close();
              });
           } else if (`${pilih}` == 2 || `${pilih}` == 02) {
              tampil(' '); tampil('|--------------------|   02   |--------------------|'); tampil(' ');
              masuk.question('Masukan Alamat File : ', (file) => {
                const baris = readl.createInterface({
                  input : bacaf.createReadStream(`${file}`),
                  crlfDelay : Infinity
                }); baris.on('line', (line) => {
                  ambil(`${line}/robots.txt`, function(error, response, body){
                    if (response.statusCode == 200) {
                      tampil(' '); tampil('['.hijau + response.statusCode + ']'.hijau + ` ${line}/robots.txt`)
                      tampil(' '); tampil(body)
                    } else {
                      tampil(' '); tampil('['.merah + response.statusCode + ']'.merah + ` ${line}/robots.txt`)
                    };
                  }); masuk.close();
              }); });
           } else if (`${pilih}` == 0 || `${pilih}` == 00) {
              jalan('clear && ls');
              tampil(' '); tampil('|------------------| keluar |------------------|'); tampil(' '); masuk.close();
           } else {
              tampil(' '); tampil('|--------------------| null |--------------------|'); tampil(' ');
              tampil('Masukan input dengan benar ! '); masuk.close();
           }

          });

     } else if (`${tampil}` == 16){

        var readl = require('readline');
        var bacaf = require('fs');
        var shell = require('shelljs' );
        var ambil = require('request' );

        tampil = shell.echo; jalan = shell.exec;

        tampil(' ');

        tampil('     ['.kuning + '1' + '] '.kuning + 'Dari Site ');
        tampil('     ['.kuning + '2' + '] '.kuning + 'Dari List ');
        tampil('     ['.kuning + '0' + '] '.kuning + 'Keluar    ');

        tampil(' '); tampil('|--------------------| pilih |--------------------|'); tampil(' ');

        masuk.question('['.kuning + '!' + '] '.kuning + '| ' + 'S'.merah + 'B'.biru + ' | ' + '> : ', (pilih) => {
           if (`${pilih}` == 1 || `${pilih}` == 01){
              tampil(' '); tampil('|--------------------|   01   |--------------------|'); tampil(' ');
              masuk.question('Masukan Alamat Situs : ', (site) => {
                 ambil(`${site}/sitemap.xml`, function(error, response, body){
                   if (response.statusCode == 200) {
                     tampil(' '); tampil('['.hijau + response.statusCode + ']'.hijau + ` ${site}/sitemap.xml`)
                     tampil(' '); tampil(body)
                   } else {
                     tampil(' '); tampil('['.merah + response.statusCode + ']'.merah + ` ${site}/sitemap.xml`)
                   };
                 }); masuk.close();
              });
           } else if (`${pilih}` == 2 || `${pilih}` == 02) {
              tampil(' '); tampil('|--------------------|   02   |--------------------|'); tampil(' ');
              masuk.question('Masukan Alamat File : ', (file) => {
                const baris = readl.createInterface({
                  input : bacaf.createReadStream(`${file}`),
                  crlfDelay : Infinity
                }); baris.on('line', (line) => {
                  ambil(`${line}/sitemap.xml`, function(error, response, body){
                    if (response.statusCode == 200) {
                      tampil(' '); tampil('['.hijau + response.statusCode + ']'.hijau + ` ${line}/sitemap.xml`)
                      tampil(' '); tampil(body)
                    } else {
                      tampil(' '); tampil('['.merah + response.statusCode + ']'.merah + ` ${line}/sitemap.xml`)
                    };
                  }); masuk.close();
              }); });
           } else if (`${pilih}` == 0 || `${pilih}` == 00) {
              jalan('clear && ls');
              tampil(' '); tampil('|------------------| keluar |------------------|'); tampil(' '); masuk.close();
           } else {
              tampil(' '); tampil('|--------------------| null |--------------------|'); tampil(' ');
              tampil('Masukan input dengan benar ! '); masuk.close();
           }

          });

     } else if (`${tampil}` == 17) {

       var ambil = require('request') ;     // npm install --save request

       c.echo('        _ ___ _       _')
       c.echo('  ___ _| |  _|_|___ _| |')
       c.echo(" | .'| . |  _| |   | . |")
       c.echo(' |__,|___|_| |_|_|_|___|')
       c.echo("")
       c.echo("   407 Authentic Exploit")

       c.echo(' ===========================')

       c.echo(''); masuk.question(' ['.kuning + '!'.merah + ']'.kuning + ' Masukan url : ', (url) => {
         const rl = b.createInterface({
           input : e.createReadStream('./.payload/adfind.txt'),
           crlfDelay : Infinity
         }); rl.on('line', (line) => {

         ambil('http://' + `${url}` + '/' + `${line}`, function (error, response, body) {
           if (response.statusCode == 200) {
             c.echo(' ['.kuning + '√'.biru + ']'.kuning +  ` Masok => ${url}/${line}`.hijau)
           } else if (response.statusCode == 404) {
            c.echo(' ['.kuning + '×'.merah + ']'.kuning + ` Gagal => ${url}/${line}`.merah)
           }
         }); }); });

     } else if (`${tampil}` == 18) {
         c.echo(''); c.echo('    ['.merah + ' FINDUPLOADER' + ' | '.biru + '407 AUTHENTIC EXPLOIT ' + ']    '.merah); c.echo('');
         c.echo(' ['.merah + 'MENU' + '] '.merah + ':'); c.echo('') ;
         c.echo('       ['.biru + '1' + '] '.biru + 'FIND UPLOADER');
         c.echo('       ['.biru + '2' + '] '.biru + 'ADD PAYLOAD  ');
         c.echo('');

        masuk.question(' ['.kuning + '?' + '] '.kuning + '[FNUP] > ', (pilih) => {
          if (`${pilih}` == 1 || `${pilih}` == 01) {
            c.echo(''); c.echo(' |----------| ----- |----------|'); c.echo('');
            masuk.question(' ['.kuning + '!' + '] '.kuning + 'Domain Name : ', (domain) => {
              const baris = b.createInterface({
                input : e.createReadStream('./.payload/findup.txt'),
                crlfDelay : Infinity
              }); baris.on('line', (line) => {
                  z('http://' + `${domain}` + `${line}`, function (error, response, body) {
                     if (response.statusCode == 200) {
                       var berhasil = `\n[ http://${domain}${line} ]`;
                       e.appendFile('found.txt', berhasil, function (err) {
                         if (err) throw err;
                       });
                       c.echo('');
                       c.echo(` DOMAIN NAME   : ${domain}` );
                       c.echo(` USING PAYLOAD : ${line}`   );
                       c.echo(' STATUS        : ' + 'FOUND !'.hijau);
                     } else {
                       c.echo('');
                       c.echo(` DOMAIN NAME   : ${domain}`);
                       c.echo(` USING PAYLOAD : ${line}`  );
                       c.echo(' STATUS        : ' + 'NOT FOUND UPLOADER'.merah)
                     }
                  })
              }); masuk.close();
            })
          } else if (`${pilih}` == 2 || `${pilih}` == 2) {
             c.echo(''); c.echo(' |----------| ----- |----------|'); c.echo('');
             masuk.question(' ['.kuning + '!' + '] '.kuning + 'PAYLOAD   : ', (payload) => {
               var isi = `\n${payload}`;
               e.appendFile('./.payload/findup.txt', isi, function (err) {
                if (err) {
                  c.echo(''); c.echo(' ['.merah + ` Gagal menyimpan payload : ` + `${payload}`.kuning + ' ] '.merah)
                } else {
                  c.echo(''); c.echo('     ['.hijau + ` ${payload} ` + ']      '.hijau)
                  c.echo(''); c.echo('  ' + `Payload berhasil disimpan`.a);
                  c.echo(''); c.echo(` saved payload : .payload/` + `findup.txt`.kuning);
                }
               }); masuk.close();
             });
          }
        });

     } else if (`${tampil}` == 99) {
            c.echo(pa + '√'.biru + gar + " Harap Tunggu .. "); c.exec('exit'); c.exec('clear off'); c.echo(' Thanks for using this tools');
            c.echo('      [ my#tools ] > bye     '); c.exec('clear off && ls'); masuk.close();

     } else {
            c.echo(' Masukan input dengan benar !'); c.exec('exit'); c.exec('clear off && ls'); masuk.close();
     }; });

// ---------- exit ----------
