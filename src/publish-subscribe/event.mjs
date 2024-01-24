class Event {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(fn);
  }
  off(name, fn) {
    if (this.events[name]) {
      const index = this.events[name].indexOf(fn);
      this.events[name].splice(index, 1);
    }
  }
  trigger(name, data) {
    this.events[name]?.forEach(fn => fn(data));
  }
}

export default new Event();