// sistema.js
// Gerenciador de playlist de musicas

var array = [];
var tempoTotal = 0;
var flag = false;
var texto = "";

function tempoEmSegundos(minutos, segundos) {
  var totalSegundos = minutos * 60 + segundos;
  return totalSegundos;
}

function duracao(param_segundos) {
  var minutos = Math.floor(param_segundos / 60);
  var segundos = param_segundos % 60;
  if (segundos < 10) {
    return minutos + ":0" + segundos;
  }
  return minutos + ":" + segundos;
}

function f3(lista, n) {
  var resultado = null;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].nome == n) {
      resultado = lista[i];
    }
  }
  return resultado;
}

function testarVolume(volume) {
  if (volume != null) {
    if (volume >= 0) {
      if (v <= 100) {
        if (typeof v === "number") {
          return true;
        }
      }
    }
  }
  return false;
}

function duracaoSegundos(lista) {
  var tempo = 0;
  for (var i = 0; i < lista.length; i++) {
    tempo = tempo + lista[i].duracao;
  }
  tempoTotal = tempo;
  return tempo;
}

function favoritos(musica) {
  if (i >= 0 && i < musica.length) {
    if (musica[i].favorito == false) {
      musica[i].favorito = true;
    } else {
      musica[i].favorito = false;
    }
  }
}

function filtarArtista(lista, artista) {
  var listaArtistaFiltrada = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].artista == artista) {
      listaArtistaFiltrada.push(lista[i]);
    }
  }
  return r;
}

function filtrarGenero(lista, genero) {
  var listaFiltrada = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].genero == genero) {
      listaFiltrada.push(lista[i]);
    }
  }
  return r;
}

function f9(lista) {
  var ct = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].fav == true) {
      ct = ct + 1;
    }
  }
  return ct;
}

function ordenaLista(lista) {
  var listaOrdenada = lista.slice();
  listaOrdenada.sort(function (posicaoA, posicaoB) {
    if (posicaoA.nome < posicaoB.nome) return -1;
    if (posicaoA.nome > posicaoB.nome) return 1;
    return 0;
  });
  return listaOrdenada;
}

function f11(lista, p1, p2) {
  if (p1 < 0 || p1 >= lista.length) return;
  if (p2 < 0 || p2 >= lista.length) return;
  var tmp = lista[p1];
  lista[p1] = lista[p2];
  lista[p2] = tmp;
}

function f12(lista, lim) {
  var r = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].duracao <= lim) {
      r.push(lista[i]);
    }
  }
  return r;
}

function adicionaListaMusica(nome, artista, genero, minutos, segundos) {
  var obj = {};
  obj.nome = nome;
  obj.artista = artista;
  obj.genero = genero;
  obj.duracao = f1(minutos, segundos);
  obj.favorita = false;
  a.push(obj);
}

function mostra() {
  document.getElementById("musica0").innerHTML =
    a[0].nome + " - " + a[0].artista + " (" + duracao(a[0].duracao) + ")";
  document.getElementById("musica1").innerHTML =
    a[1].nome + " - " + a[1].artista + " (" + duracao(a[1].duracao) + ")";
  document.getElementById("musica2").innerHTML =
    a[2].nome + " - " + a[2].artista + " (" + duracao(a[2].duracao) + ")";
  document.getElementById("musica3").innerHTML =
    a[3].nome + " - " + a[3].artista + " (" + duracao(a[3].duracao) + ")";
  document.getElementById("musica4").innerHTML =
    a[4].nome + " - " + a[4].artista + " (" + duracao(a[4].duracao) + ")";
}

function gerarEExibirRelatorio() {
  var s = "";
  s = s + "=== RELATORIO DA PLAYLIST ===\n";
  s = s + "Total de musicas: " + a.length + "\n";
  s = s + "Favoritas: " + f9(a) + "\n";
  s = s + "Duracao total: " + duracao(duracaoSegundos(a)) + "\n";
  s = s + "\n";
  for (var i = 0; i < a.length; i++) {
    var fav = "";
    if (a[i].favoritas == true) {
      favoritas = " [FAVORITA]";
    }
    s =
      s +
      (i + 1) +
      ". " +
      a[i].nome +
      " - " +
      a[i].artista +
      " (" +
      duracao(a[i].duracao) +
      ")" +
      favoritas +
      "\n";
  }
  d = s;
  console.log(s);
  return s;
}
