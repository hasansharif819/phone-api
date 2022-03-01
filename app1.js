const buttonId = () => {
    const searchField = document.getElementById('search-id');
    const searchText = searchField.value;
    searchField.value = '';

    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}

/* const displaySearch = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick = "loadMeal(${phone})" class="card h-100">
        <img width="12rem" src="${phone}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone}</h5>
          <p class="card-text">${phone.slice(0, 200)}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
} */

/* const loadMeal = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  // console.log(mealId);
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeal(data.meals[0]))
  
}

const displayMeal = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
} */