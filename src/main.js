import { getProducts, getProductById, searchProducts } from "./fetch-helpers.js";
import { renderProducts, renderProductDetails } from "./dom-helpers.js";

const errorMessage = document.querySelector('#error-message');

const displayError = (msg) => {
    errorMessage.textContent = msg;
};

const init = () => {
    displayError('');

    getProducts().then((result) => {
        if (result.error) {
            displayError(result.error.message);
        } else {
            renderProducts(result.data);
        }
    });
}

init();

const productList = document.querySelector('#products-list')

productList.addEventListener('click', (e) => {
    const li = e.target.closest('li');

    if (!li) return;

    const id = li.dataset.productId;

    displayError('');

    getProductById(id).then((result) => {
        if (result.error) {
            displayError(result.error.message);
        } else {
            renderProductDetails(result.data);
        }
    });
});

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const query = formData.get('query');

    displayError('');

    const result = await searchProducts(query);
    if (result.error) {
        displayError(result.error.message);
    } else {
        renderProducts(result.data);
        searchForm.reset();
    }
});