const Observer = require("./observer");

/**
 * Observer konkret yang menerima notifikasi dari Subject
 */
class ConcreteObserver extends Observer {
  /**
   * @param {string} name - Nama observer
   * @param {Subject} subject - Referensi ke subject
   */
  constructor(name, subject) {
    super();
    this.name = name;
    this.subject = subject;
    this.notificationCount = 0;
  }

  /**
   * Method yang dipanggil saat Subject mengirim notifikasi
   * @param {*} data - Data yang dikirim Subject
   */
  update(data) {
    this.notificationCount++;
    console.log(
      `${this.name} menerima data: ${data} (Notifikasi ke-${this.notificationCount})`
    );

    if (this.notificationCount >= 3) {
      console.log(
        `${this.name} telah menerima 3 notifikasi dan akan berhenti berlangganan.`
      );
      this.subject.detach(this);
    }
  }
}

module.exports = ConcreteObserver;
