function toogleBtn () {
const $toggleButton = document.querySelector('.toggle-button')
const $headerLinks = document.querySelector('.header-links')

$toggleButton.addEventListener('click', () => {
    $headerLinks.classList.toggle('active')
})
}


function viewHeader (el) {
    const $header = document.createElement("div")
    $header.innerHTML = ` 
    <header name="header-1" class="header">
    <div class="brand-title">
        <a class="brand-title__af" href="/index.html">A 👁 F</a>
    </div>
    <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <div class="header-links">
        <ul>
            <li><a href="/facuariasla-des4/portfolio.html">Portfolio</a></li>
            <li><a href="/facuariasla-des4/servicios.html">Servicios</a></li>
            <li><a href="/facuariasla-des4/contacto.html">Contacto</a></li>
        </ul>
    </div>
</header> `
    el.appendChild($header)
}