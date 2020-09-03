// kelas karyawan
class karyawan {
    constructor ( nama, posisi, status) {
        this.nama = nama;
        this.posisi = posisi;
        this.status = status;
    }          
    greeting () {
            return `halo saya ${nama} bekerja pada posisi ${posisi}`;
          }  
    }
    
export {karyawan}
    
