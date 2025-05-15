// concreteObserver.js
const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
        this.notificationCount = 0;
        this.subject = null; // Referensi ke subject
    }

    setSubject(subject) {
        this.subject = subject;
    }

    update(data) {
        this.notificationCount++;
        console.log(`${this.name} menerima data: ${data}`);

        if (this.notificationCount >= 3 && this.subject) {
            console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
            this.subject.detach(this);
        }
    }
}

module.exports = ConcreteObserver;
