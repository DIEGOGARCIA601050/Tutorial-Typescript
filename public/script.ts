const app = document.getElementById('app') as HTMLElement
const hUno = document.createElement('h1')
hUno.innerHTML="Hello Word"
if (app&&app instanceof HTMLElement ) {
    app.appendChild(hUno)
}
