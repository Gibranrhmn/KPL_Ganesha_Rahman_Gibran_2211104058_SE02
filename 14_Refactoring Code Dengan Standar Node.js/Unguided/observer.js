/**
 * Kelas abstrak Observer
 */
class Observer {
  /**
   * Harus diimplementasikan oleh subclass
   * @param {*} message - data yang dikirim oleh Subject
   */
  update(message) {
    throw new Error("Method 'update()' must be implemented.");
  }
}

module.exports = Observer;
