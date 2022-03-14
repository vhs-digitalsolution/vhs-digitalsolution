// utilities
var get = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelector(selector);
  };
  
  var getAll = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelectorAll(selector);
  };
  
  // setup typewriter effect in the terminal demo
  if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `VHS-Digital 
              
  
              ###Soluicionando os problemas da sua empresa
              - Produçãp de Site 💻;
              - Edição de fotos 📷;
              - Edição de vidéos 🎬;
              - Soluções em trafego pago 📈;
`;
    var speed = 60;
  
    function typeItOut () {
      if (i < txt.length) {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
  
    setTimeout(typeItOut, 1800);
  }
  