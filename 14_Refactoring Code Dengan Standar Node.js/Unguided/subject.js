/**
 * Kelas Subject (Publisher)
 */
class Subject {
  constructor() {
    this.observers = [];
  }

  /**
   * Menambahkan observer ke daftar
   * @param {Observer} observer
   */
  attach(observer) {
    console.log("Observer ditambahkan.");
    this.observers.push(observer);
  }

  /**
   * Menghapus observer dari daftar
   * @param {Observer} observer
   */
  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log("Observer dihapus.");
    }
  }

  /**
   * Memberi notifikasi ke semua observer
   * @param {*} data - Data yang dikirim ke observer
   */
  notify(data) {
    console.log("Notifikasi ke semua observer...");
    this.observers.forEach((observer) => observer.update(data));
  }
}

module.exports = Subject;
