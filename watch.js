const reactive = (target) => {
  const handler = {
    get(target, prop, receiver) {
      track(target, prop);
      return target[prop];
    },
    set(target, prop, value, receiver) {
      trigger(target, prop, target[prop], value);
      target[prop] = value;
      return false;
    },
  };
  return new Proxy(target, handler);
};

let activeEffect = null;
const depMap = new WeakMap();
const watch = (effect, cb) => {
  activeEffect = cb;
  effect();
  activeEffect = null;
};
const track = (target, key) => {
  if (activeEffect) {
    let deps = depMap.get(target);
    if (!deps) {
      deps = new Map();
      depMap.set(target, deps);
    }
    let dep = deps.get(key);
    if (!dep) {
      dep = new Set();
      deps.set(key, dep);
    }
    dep.add(activeEffect);
  }
};

const trigger = (target, key, oldVal, newVal) => {
  const deps = depMap.get(target);
  if (deps) {
    const dep = deps.get(key);
    if (dep) {
      dep.forEach(activeEffect => activeEffect(oldVal, newVal));
    }
  }
};

const obj = {
  a: 1,
};

const recObj = reactive(obj);
watch(() => recObj.a, (oldVal, newVal) => {
  console.log(`old: ${oldVal}, new: ${newVal}`);
});
watch(() => recObj.a, (oldVal, newVal) => {
  console.log(`신규 등록 old: ${oldVal}, new: ${newVal}`);
});

recObj.a = 10;