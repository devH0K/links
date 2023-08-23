function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // utilizado mesmo seletor do css
  // obtem a tag img
  const img = document.querySelector("#profile img")

  // validacao sobre que modo esta ativo
  if (html.classList.contains("light")) {
    // caso seja light mode, obtem imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // caso contrario, utiliza imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
  }
}
