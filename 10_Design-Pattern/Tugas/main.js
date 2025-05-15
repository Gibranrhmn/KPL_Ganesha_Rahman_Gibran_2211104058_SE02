// main.js
const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Inisialisasi subject
const subject = new Subject();

// Inisialisasi observers
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

// Set subject reference ke masing-masing observer
observer1.setSubject(subject);
observer2.setSubject(subject);

// Tambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);

// Kirim beberapa notifikasi
subject.notify("Update 1");
subject.notify("Update 2");
subject.notify("Update 3");
subject.notify("Update 4");
subject.notify("Update 5");
