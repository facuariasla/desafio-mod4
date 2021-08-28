function viewContact(el) {
    const $contact = document.createElement("div")
    $contact.innerHTML = `<section class="box-four">
    <h1 class="box-four__title">Escribime</h1>

    <form action="" id="box-four__form" >
        <label for="" class="form__label">Nombre
            <input class="form__input" type="text" name="user">
        </label>
        <label for="" class="form__label">Email
            <input class="form__input" type="email" name="email">
        </label>
        <label for="" class="form__label">Mensaje
            <textarea class="form__textarea" name="message" id="" cols="30" rows="10"></textarea>
        </label>
        <button class="box-four__button" type="submit">Enviar</button>
    </form>
</section>`
  el.appendChild($contact)
}

