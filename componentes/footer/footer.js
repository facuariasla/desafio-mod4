function viewFooter(el) {
    const $footer = document.createElement("div")
    $footer.innerHTML = `<footer class="footer">
    <a class="footer__logo" href="/facuariasla-des4/index.html">A 👁 F</a>
    <div class="footer__social">
        <a href="https://www.instagram.com/facuariasla/" class="footer__social__links" target="_blank">
            <img class="social-img" src="./images/instagram.svg" alt="">Instagram</a>
        <a href="https://www.linkedin.com/in/facundo-arias-98011b209/" class="footer__social__links" target="_blank">
            <img class="social-img" src="./images/linkedin-icon.svg" alt="">Linkedin</a>
        <a href="https://github.com/facuariasla" class="footer__social__links" target="_blank">
            <img class="social-img" src="./images/github.svg" alt="">GitHub</a>
    </div>
</footer>`
  el.appendChild($footer)
}

