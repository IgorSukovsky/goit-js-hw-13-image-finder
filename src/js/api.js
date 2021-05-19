export default class ApiService {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.page = 1;
    this.searchQuery = '';
    this.key = '21692552-54f62550fb359a7cc9e1694fc';
  }

  fetchItems() {
    const url = `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`;

    // console.log(url);
    return fetch(url).then(res => res.json());
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// const KEY_API = '21692552-54f62550fb359a7cc9e1694fc';
// const BASE_URL = 'https://pixabay.com/api/';
// const searchQuery = 'cat';
// const page = 1;
// console.log(KEY_API);

// function searchImg(searchQuery, page) {
//   const url = `$(BASE_URL)?image_type=photo&orientation=horizontal&q=$(searchQuery)&page=$(page)&per_page=12&key=$(KEY_API)`;
//   console.log(url);

//   return fetch(url).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject('Something went wrong');
//   });
// }
//   return fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// searchImg(searchQuery, page);
// export { searchImg };
// const getUsers = (searchQuery, page = 1) => {
//   return fetch(
//     `$(BASE_URL)?image_type=photo&orientation=horizontal&q=$(searchQuery)&page=$(page)&per_page=12&key=$(KEY_API)`,
//   ).then(res => res.json());
// };

// getUsers('cat')
//   .then(console.log)
//   .catch(err => console.log(err));
