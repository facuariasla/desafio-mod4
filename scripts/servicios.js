// https://cdn.contentful.com/spaces/htwvwm8ying6/environments/master/entries?access_token=LtfQ5wEUCREskUhLHCGQwuh9Cn3dzvFJqcxDynXIsbo&&content_type=services

function addServicesCard(params = {}) {
    const $template = document.querySelector("#template__portfolio-container");
    const $container = document.querySelector(".section-portfolio");
  
    $template.content.querySelector(".portfolio__container__img").src =
      params.image;
    $template.content.querySelector(
      ".portfolio__container__img-title"
    ).textContent = params.title;
    $template.content.querySelector(
      ".portfolio__container__img-description"
    ).textContent = params.description;
  
    const clone = document.importNode($template.content, true);
    $container.appendChild(clone);
  }
  
  function getServiceData() {
    return fetch(
      "https://cdn.contentful.com/spaces/htwvwm8ying6/environments/master/entries?access_token=LtfQ5wEUCREskUhLHCGQwuh9Cn3dzvFJqcxDynXIsbo&&content_type=services"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
  
          const imagenes =  data.includes.Asset.map((item) => {
            let imagen = item.fields.file.url;
            return imagen;
          });
  
        const fieldsCollections = data.items.map((item) => {
  
          let frame = item.fields.image.sys.id;
          return {
            title: item.fields.title,
            description: item.fields.description,
            image: imagenes.filter((x) => x.includes(frame))
          };
        });
        return fieldsCollections;
      });
  }
  
  
  
  function main() {
    getServiceData().then((works) => {
      console.log(works);
      for (const w of works) {
        addServicesCard(w);
      }
  
    });
  }
  
  main();
  