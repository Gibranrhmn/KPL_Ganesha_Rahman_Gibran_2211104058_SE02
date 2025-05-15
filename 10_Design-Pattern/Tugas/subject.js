// subject.js
class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        console.log('Observer ditambahkan.');
        this.observers.push(observer);
    }

    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log('Observer dihapus.');
        }
    }

    notify(data) {
        console.log('Notifikasi ke semua observer...');
        // Salin array untuk menghindari masalah jika observer dihapus saat iterasi
        const observersCopy = [...this.observers];
        for (const observer of observersCopy) {
            observer.update(data);
        }
    }
}

module.exports = Subject;
