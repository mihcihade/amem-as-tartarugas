motivos = [
    " Eles são divas",
    "tem filhotes muito fofos",
    "Gostam de nadar",
    "São famosas kkkk",
      "Existem 7 espécies de tartarugas "
  ];
  
  var imagens = [ "https://blog.cobasi.com.br/wp-content/uploads/2023/11/AdobeStock_568432724.webp",
    "https://conexaoplaneta.com.br/wp-content/uploads/2020/06/cientistas-drones-contagem-bercario-tartarugas-verdes-2-conexao-planeta.jpg", 
    "https://img.freepik.com/fotos-gratis/tartarugas-nadando-no-oceano_23-2150537286.jpg","https://s2-vidadebicho.glbimg.com/UzYRr3PWZuYqfJsB1PToU6Eidgc=/0x0:1400x700/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2023/K/9/Cht9bITcaA29TAQdnfGA/00001tartarugas-marinhas-18-curiosidades-sobre-as-queridinhas-do-oceano.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMFE70DcjKtApUzm1P5jM_ygGO6PuYUiaHA&usqp=CAhttps://img.freepik.com/fotos-premium/uma-tartaruga-bebe-em-uma-praia_900958-7518.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  