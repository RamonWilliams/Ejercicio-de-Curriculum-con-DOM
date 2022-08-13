/*Decimos que informacion queremos tener*/
const personalInfo={
    name:"Ramon Williams",
    address:"Calle Benidorm 32 5to C ,Madrid Spain",
    
    about:"Full Developer Estudent 💻, Enjoying everything that i do",
    email:"ramonwor21@gmail.com",
    mobile:"661561881"
}
const tecnologies={
    html:{
      name:"Html5",
      experience:"Junior",
      img:"https://cdn-icons-png.flaticon.com/512/888/888859.png",
    },

    Css:{
      name:"CSS3",
      experience:"Junior",
      img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png",
    },
    Js:{
        name:"JavaScript",
        experience:"Junior",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    }
    
}

const gallery={
    
    landing1:{
        name:"Proyecto de Html y CSS",
        cover:"https://revistabatxillerat.files.wordpress.com/2018/01/tecnologia-2.jpg?w=900"
    },
    landing2:{
        name:"Proyecto de Html y CSS",
        cover:"https://redimensiona.mx/images/servicios/tecnologia/proyectos-tecnologicos-0.png"
    },
    landing3:{
        name:"Proyecto de Html y CSS",
        cover:"https://esportsbureau.com/wp-content/uploads/2022/06/Tecnologi%CC%81a-Esports.jpg"
    }
}

const rrss={
    linkedin:{
        name:"Linkedin",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
    },
   
}

/*---------------------2do Paso:--------------
 Creamos contenedor donde contendra cada informacion
 de cada div en nuestro HTML*/

 let personalInfoHtml=document.querySelector("#personalInfo");
 let tecnologiesHtml=document.querySelector("#tecnologies");
 let galleryHtml=document.querySelector("#gallery-info");
 let rrssHtml=document.querySelector("#rrss");
 /*----------3)Funciones que convierten a HTML---------*/
 /*cREAMOS LA FUNCION por cada div de informacion y le pasamos parametro al objeto
 del cual sacaremos de informavion a procesar.
 Daremos la esructura que contendra esos Div de informacion  */

 const personalInfoConversionHtml=(personalInfo)=>{
   return `
   
   
    

    <div class="titulos">
        <h1>${personalInfo.name} </h1>
        <h2>${personalInfo.about}</h2>
        <p>${personalInfo.address}</p>
        <p>${personalInfo.mobile} </p>
        <p>${personalInfo.email} </p>   
     </div>  
  
      `
   
 }
 const tecnologiesConversionHtml=(tecnologies)=>{
     return`
   

     <div class="tecnologies-info"> 
      <h2>${tecnologies.html.name}</h2>
      <p>${tecnologies.html.experience}</p>
      <img class="tecnologies-img" src="${tecnologies.html.img}" alt="${tecnologies.html.name}"/>
     </div>

     <div class="tecnologies-info"> 
     <h2>${tecnologies.Css.name}</h2>
     <p>${tecnologies.Css.experience}</P>
     <img class="tecnologies-img" src="${tecnologies.Css.img}" alt="${tecnologies.Css.name}"/>
     </div>


     <div class="tecnologies-info">
     <h2>${tecnologies.Js.name} </h2>
     <p> ${tecnologies.Js.experience}</p>
     <img class="tecnologies-img" src="${tecnologies.Js.img}"
     </div>

     `
 }

 const galleryConversionHtml=(gallery)=>{
     return `
       
       <div class="gallery-div">
         <h2>${gallery.landing1.name} </h2>
         <img class="gallery-container-image" src="${gallery.landing1.cover}" alt="${gallery.landing1.name}"/>
       </div>
     
       <div class="gallery-div"> 
       <h2>${gallery.landing2.name} </h2>
       <img class="gallery-container-image" src="${gallery.landing2.cover}" alt="${ gallery.landing2.name}"/>
       </div>

       <div class="gallery-div">
         <h2>${gallery.landing3.name}</h2>
         <img class="gallery-container-image" src="${gallery.landing3.cover}" alt ="${gallery.landing3.name}"/>
       </div>
     
       `
 }


 const rrssConversionHtml=(rrss)=>{
    return `
    <div class="rrss-image"> 
    <h2> ${rrss.linkedin.name}</h2>
    <img class="rrss-image1" src="${rrss.linkedin.logo}" alt="${rrss.linkedin.name}"/>

    </div>
     
    
   
    `
 }

/*---------------------------------4--------------------*/
//Container sera cada uno de los querys -element cada uno de los bloqque de html
//Container sera cada uno de los querys -element cada uno de los bloqque de html

const passToDocumentHtml=(container,functionCreateHtml,element)=>{
    container.innerHTML+=functionCreateHtml(element);
}

passToDocumentHtml(personalInfoHtml,personalInfoConversionHtml,personalInfo);
passToDocumentHtml(tecnologiesHtml,tecnologiesConversionHtml,tecnologies);
passToDocumentHtml(galleryHtml, galleryConversionHtml,gallery);
passToDocumentHtml( rrssHtml,rrssConversionHtml,rrss);

