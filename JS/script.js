// Fonction permettant d'afficher et de masquer le champ de recherche.

function displaySearch() {
  //Récupération des éléments HTML
  const searchForm = document.getElementById('searchForm')
  //   console.log(searchForm)
  const glassIcon = document.querySelector('.fa-magnifying-glass')
  //   console.log(glass_icon)

  //Ajout d'un écouteur d'évênement
  glassIcon.addEventListener('click', () => {
    if (searchForm.classList.contains('show')) {
      searchForm.classList.remove('show')
    } else {
      searchForm.classList.add('show')
    }
  })
}
displaySearch()
