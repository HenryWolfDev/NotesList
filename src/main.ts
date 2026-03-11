import './style.scss';
import { Task } from './core/Task.js';
import { Today } from './views/Today.js';

// const main = document.getElementById('app');

const todayView = new Today();

todayView.renderUI('app');

const testTAsk = new Task('test');

console.log(testTAsk);
console.log(testTAsk.createdAt.toLocaleString());
console.log(testTAsk.addComment('test test'));
console.log(testTAsk.addComment('test test 3'));
console.log(testTAsk.comments);
