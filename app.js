const colors = ['#2E191B', '#0B6623', '#000080'] // Vermillion, Forest, Navy

const colorsName = ['red', 'green', 'blue'];
 function randomPositionColor(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const color = arr[randomIndex];
    return color;
    }
// importar el modulo HTTP

let http = require("http");

let servidor = http.createServer((req, res) => {


// aqui le digo que si busca por variant=xColor me devuelva la posicion del array correspondiente, PREGUNTA, SE PODRIA OPTIMIZAR DE ALGUNA MANERA?
if(req.url.includes(`variant=red`)){
    return res.end(colors[0]);
}
else if(req.url.includes(`variant=green`)){
    return res.end(colors[1]);
}
else if(req.url.includes(`variant=blue`)){
    return res.end(colors[2]);
}

//devolver un color random si hace la peticion a /color usando funcion randomPositionColor()
if(req.url.includes("/color")){
    
   
    let result = randomPositionColor(colors);
    return res.end(result);
}



//saludo de bienvenida 

res.writeHead(200, { "Content-type": "text/html charset=utf-8" }) // esto es para lo de los acentos blabla
res.write("<h1>Bienvenido a la pagina que te genera colores</h1>") // la respuesta, en este caso saludo bienvenida
res.end(); //finalizamos

});

servidor.listen(3000);