export const fetchData = (url) => {

};

export const getProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return { data: data.products, error: null };
        })
        .catch((error) => {
            return { data: null, error: error };
        });
};

export const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return { data: data, error: null };
        })
        .catch((error) => {
            return { data: null, error: error };
        });
};

export const searchProducts = async (query) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        if (!response.ok) {
            throw new Error(`Failed to search: ${response.status}`);
        }

        const data = await response.json();
        return { data: data.products, error: null };
    } catch (error) {
        return { data: null, error: error };
    }
};
