// https://cdn.contentful.com/spaces/htwvwm8ying6/environments/master/entries?access_token=LtfQ5wEUCREskUhLHCGQwuh9Cn3dzvFJqcxDynXIsbo&&content_type=presentacion


// https://cdn.contentful.com/spaces/htwvwm8ying6/environments/master/entries?access_token=LtfQ5wEUCREskUhLHCGQwuh9Cn3dzvFJqcxDynXIsbo&&content_type=serviceshome



//BOX TWO ******************************

function addPresentacionCard(params = {}) {
    const $template = document.querySelector("#template__box-two-container");
    const $boxTwo = document.querySelector(".box-two");
  
    $template.content.querySelector(".box-two__person-img").src =
      params.image1;
    $template.content.querySelector(
      ".box-two__about-me"
    ).textContent = params.name;
    $template.content.querySelector(
      ".box-two__description"
    ).textContent = params.description;
  
    const clone = document.importNode($template.content, true);
    $boxTwo.appendChild(clone);
  }


  function getPresentacionData() {
    return fetch(
      "https://cdn.contentful.com/spaces/htwvwm8ying6/environments/master/entries?access_token=LtfQ5wEUCREskUhLHCGQwuh9Cn3dzvFJqcxDynXIsbo&&content_type=presentacion"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          const imagenes =  data.includes.Asset.map((item) => {
            let imagen = item.fields.file.url;
            return imagen;
          });
  
        const fieldsCollections = data.items.map((item) => {
  
          let frame = item.fields.image1.sys.id;
          return {
            name: item.fields.name,
            description: item.fields.description,
            image1: imagenes.filter((x) => x.includes(frame))
          };
        });
        return fieldsCollections;
      });
  }



// BOX THREE ******************************


function addServicesHomeCard(params = {}) {
    const $template = document.querySelector("#template__box-three-container");
    const $boxThree = document.querySelector(".box-three");
  
    $template.content.querySelector(".box-three__service__img").src =
      params.image;
    $template.content.querySelector(
      ".box-three__service__title"
    ).textContent = params.title;
    $template.content.querySelector(
      ".box-three__service__description"
    ).textContent = params.description;
  
    const clone = document.importNode($template.content, true);
    $boxThree.appendChild(clone);
  }


  function getServicesData() {
    return fetch(
      "https://cdn.contentful.com/spaces/htwvwm8ying6/environments/master/entries?access_token=LtfQ5wEUCREskUhLHCGQwuh9Cn3dzvFJqcxDynXIsbo&&content_type=serviceshome"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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

/////////////////////////////



  function main() {
    getServicesData().then((works) => {
      for (const w of works) {
        addServicesHomeCard(w);
      }
      getPresentacionData().then((info) => {
          for(const i of info) {
              addPresentacionCard(i)
          }
      })
    });

    const $headerContainer = document.querySelector(".container-header");
    viewHeader($headerContainer);
    toogleBtn();

    const $footerContainer = document.querySelector(".container-footer");
    viewFooter($footerContainer);

    const $contactContainer = document.querySelector(".container-form");
    viewContact($contactContainer);


    formPost();


  }
  
  main();
  
