function viewContact(el) {
  const $contact = document.createElement("div");
  $contact.innerHTML = `<section class="box-four">
    <h1 class="box-four__title">Escribime</h1>

    <form action="" id="box-four__form" method="POST" >
        <label for="" class="form__label">Nombre
            <input id="name" class="form__input" type="text" name="user" maxlength="35">
        </label>
        <label for="" class="form__label">Email
            <input id="email" class="form__input" type="email" name="email">
        </label>
        <label for="" class="form__label">Mensaje
            <textarea id="message" class="form__textarea" name="message" id="" cols="30" rows="10" maxlength="500"></textarea>
        </label>
        <button class="box-four__button" type="submit">Enviar</button>
    </form>
</section>`;
  el.appendChild($contact);
}




function formPost() {
  const $formulario = document.querySelector("#box-four__form");

  $formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $name = document.querySelector("#name").value;
    const $email = document.querySelector("#email").value;
    const $message = document.querySelector("#message").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "facundolautaroarias@hotmail.com",
        message: $message,
        name: $name,
        email: $email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Data info", data);

        let $contactBox = document.querySelector(".box-four");
        $contactBox.innerHTML = ` <br> 
            <p> Gracias "${$name}" Tu mensaje ha sido enviado 😀</p>
            `;

        // Para redirigir a HOME:
        // setTimeout(()=> {
        //     window.location.href = "/index.html";
        // }, 7000)
      });
  });
}

// https://apx-api.vercel.app/api/utils/dwf
