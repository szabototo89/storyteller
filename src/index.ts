import './app.css';

function initializeApplication() {
  const message: string = "Hello World!";
  console.log(message);
}

initializeApplication();

document.body.innerHTML = `
  <h1>Hello World!</h1>
`.trim(); 