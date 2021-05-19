import './sass/main.scss';
import ApiServise from './js/api';
// import createMarkup from './services/createMarkup.js';
import LoadMoreBtn from './js/load-more-btn';
import listImg from './handlebars/listImg.hbs';

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

// const perPage = 10;
// const page = 1;
// let searchQuery = '';

const apiServise = new ApiServise();

const refs = {
  formInput: document.querySelector('.search-form'),
  result: document.querySelector('.result'),
  error: document.querySelector('.error'),
  //   getBtn: document.querySelector('[data-action="get-users"]'),
};

refs.formInput.addEventListener('submit', getUsers);
// refs.getBtn.addEventListener('click', getFirstUsers);
loadMoreBtn.refs.button.addEventListener('click', getUsers);

// function getFirstUsers() {
//     loadMoreBtn.show();
// //   apiServise.resetUserId();
//   refs.result.innerHTML = '';

//   getUsers();
// }

function getUsers(e) {
  e.preventDefault();
  apiServise.query = e.currentTarget.elements.query.value;
  console.dir(e.currentTarget.elements[0]);
  if (apiServise.query.trim() === '') {
    return alert('Please Enter Search Query');
  }
  //   const formRef = refs.formInput.elements.query.value;

  //   const inputValue = formRef.toLowerCase().trim();

  //   console.log(refs.formInput.elements);
  //   const searchQuery = e.target.elements;
  refs.result.innerHTML = '';
  loadMoreBtn.disable();
  //   if (!inputValue) return;
  apiServise
    .fetchItems()
    .then(items => {
      renderItems(items);
      loadMoreBtn.enable();
    })
    .catch(err => {
      renderError(err);
      loadMoreBtn.hide();
    });
  //   console.log(apiServise);
}

function renderItems(items) {
  //   const markup = createMarkup(items);
  const markup = listImg(items);
  refs.result.insertAdjacentHTML('beforeend', markup);
  refs.error.textContent = '';
}

function renderError(err) {
  refs.result.innerHTML = '';
  refs.error.textContent = err;
}
