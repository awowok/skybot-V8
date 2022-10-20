let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `*MEMBER BARU WAJIB INTRO*

Nama lengkap: Ganiiiiii
Nama panggilan:abdul
Hobi: turu
Umur: 13
Gender:g ta
Kelas: 8smp
Tinggi badan: 148
Berat badan :45 
Agama: islam 
Golongan darah: g tau 
Status:privasi 
Nama pacar: salsa
Jumlah mantan: banyak 
Nama mantan: maya
Nama bapak : Yanto 
Nama ibu : yanti
Nama kakak:marti
Kakak online:hinata
Kakak kandung/tiri:putri
Jumlah kakak:3
Nama adek:g ada
Adek online:2
Adek kandung/tiri:g ada 
Jumlah adek:0
Nama kakek:surikem
Kakek dari ayah :g tau
Kakek dari ibu  :g tau 
Nama nenek:sukinah
Nenek dari ayah :g tau 
Nenek dari ibu :g tau 
Nama bibi:sukinah
Bibi dari ayah :g tay
Bibi dari ibu :g tay
Nama paman
Bibi dari ayah :
Bibi dari ibu :
KTP:g ada 
SIM: blm ada
STNK: mati
BPKB:g ada
KK: ada
Alamat rumah:g tau 
RT: 3
RW:2
KELURAHAN: Gombong 
KECAMATAN: kebuemn 
KABUPATEN: kebumen
KOTA: aku di desa
PROVINSI:jateng
PLANET:mars
GALAXY:g tay
UNIVERSE:g tah
LANGIT:ke 3
DARATAN: ada 1 cewe
LAUTAN: anget
KEPULAUAN:jateng
SAMUDRA: pasifik
UKURAN SEPATU:42
UKURAN BAJU: xl
UKURAN CELANA: xl
LEBAR PINGGANG: 32
PANJANG TANGAN:23
PANJANG KAKI:23
MAKANAN FAVORIT:mu ayam
MINUMAN FAVORIT:boba ayang 
FILM FAVORIT: Naruto 
SINETRON FAVORIT:kisah yata
GAME FAVORIT:epep
ANIME FAVORIT:hinata
MANGA FAVORIT:g tau 
MANHUA FAVORIT:g ada
MANHWA FAVORIT:
CHANNEL YOUTUBE:B ada
INSTAGRAM:Ganz•Beban9
TWITTER: g ada
FACEBOOK:ganz beban
MUSIC FAVORIT:sed 
SIFAT:marhan
SIKAP: cuek 
ZODIAK:g atu
TANGGAL LAHIR: 1 7 2007
MERK HP:oppo
MERK MOTOR:
MERK MOBIL:mio
TINGKAT RUMAH:1
ALAMAT SEKOLAH:smp 4 GOMBONG 
Ukuran daleman:g Tu
Ukuran atasan : gw cowo 
Diameter kepala :g tau 

Statistik tubuh 
Diameter perut :
Diameter lengan :
Diameter paha :
Diameter lutut :
Diameter betis:
Panjang tangan :
Panjang kaki :
Panjang kepala :
Lebar hidung :
Cita cita :
Hobi :
Jenis hewan peliharaan :
Nama hewan:
Diameter rumah:
Waifu:
Husbu:
Loli kesukaan :
Shota kesukaan :
Punya brp teman :
Teman online :
Teman offline :
Teman main game:
Teman sekolah:

Nemu link grup ini dari mana :
Kenal sama siapa aj d grup ini :
Org paling cantik yg lu kenal :
Org paling ganteng yg lu kenal :
Nama wali kelas:
Nama kepala sekolah :
Nma ketua kelas:
Wakil ketua kls:
Sekertaris :
Sekertaris 2:
Bendahara:
Bendahara 2:
Nama presiden:
Nama wakil:
Nma org yg lu kejar:
`
conn.sendButtonDoc(m.chat, cap, author, 'ℹ️ Menu', '.menu', null, adReply)
}
handler.customPrefix = /^(intro)$/i
handler.command = new RegExp

export default handler