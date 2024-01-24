import event from './event.mjs';

event.on('go', console.log);
event.trigger('go', 'data');
