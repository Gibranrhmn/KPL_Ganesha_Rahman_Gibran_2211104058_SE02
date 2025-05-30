const Subject = require("./subject");
const ConcreteObserver = require("./concreteObserver");

// Inisialisasi Subject
const subject = new Subject();

// Inisialisasi dan lampirkan observer
const observer1 = new ConcreteObserver("Observer 1", subject);
const observer2 = new ConcreteObserver("Observer 2", subject);

subject.attach(observer1);
subject.attach(observer2);

// Kirim beberapa notifikasi
subject.notify("Update 1");
subject.notify("Update 2");
subject.notify("Update 3");
subject.notify("Update 4");
