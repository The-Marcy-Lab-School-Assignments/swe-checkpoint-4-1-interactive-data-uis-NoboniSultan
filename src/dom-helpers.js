export const renderProducts = (products) => {
    const list = document.querySelector('#products-list');
    const countSpan = document.querySelector('#product-count');

    list.innerHTML = '';

    countSpan.textContent = products ? products.length : 0;

    if (!products) return;

    //Render the products
    products.forEach((product) => {
        const li = document.createElement('li');
        li.dataset.productId = product.id;

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const h3 = document.createElement('h3');
        h3.textContent = product.title;

        const p = document.createElement('p');
        p.textContent = `$${product.price}`;

        li.append(img, h3, p);
        list.append(li);
    });
};


export const renderProductDetails = (product) => {
    const detailsSec = document.querySelector('#product-details');

    detailsSec.classList.remove('hidden');

    const title = document.querySelector('#product-title');
    const thumb = document.querySelector('#product-thumbnail');
    const price = document.querySelector('#product-price');
    const desc = document.querySelector('#product-description');
    const rating = document.querySelector('#product-rating');

    title.textContent = product.title;

    thumb.src = product.thumbnail;
    thumb.alt = product.title;

    price.textContent = product.price;

    desc.textContent = product.description;

    rating.textContent = product.rating;
};
