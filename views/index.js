let data;
(async () => {
  try {
    const result = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
    data = result;
  } catch (error) {
    console.log(error);
  }
})();

const searchInput = document.getElementById('searchInput');
const itemContainer = document.getElementById('itemContainer');
let filterData;

searchInput.addEventListener('keyup', (e) => {
  itemContainer.innerHTML = '';
  console.log(e, searchInput.value);
  if (Number(e.key) || e.key === 'Backspace' || e.key === '0') {
    let numOfHideItems = Number(searchInput.value);
    filterData = data.slice(0, numOfHideItems);
    console.log(filterData);
    for (let i = 0; i < filterData.length; i++) {
      itemContainer.innerHTML += `<div class = "item"><span class ="item_number" >${
        i + 1
      }</span> <span class="item_text">${filterData[i].name}</span></div>`;
    }
    if (numOfHideItems > filterData.length) {
      itemContainer.innerHTML += `<div style='margin:20px 0px' >No more items</div>
`;
    }
  }
});
