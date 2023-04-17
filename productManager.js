class ProductManager {
    constructor() {
    this.products = [];
    this.productId = 0;
    }

// Validar que todos los campos sean obligatorios
    addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('Todos los campos son obligatorios');
        return;
    }

// Validar que no se repita el campo "code"
    const existingProduct = this.products.find(p => p.code === product.code);
    if (existingProduct) {
        console.error(`Ya existe un producto con el código ${product.code}`);
        return;
    }

// Agregar el producto con id autoincrementable
    this.productId++;
    const newProduct = { id: this.productId, ...product };
    this.products.push(newProduct);
    console.log(`Producto agregado correctamente con id ${this.productId}`);
    }

    getProducts() {
    return this.products;
    }

    getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
        return product;
    } else {
        console.error(`Producto con id ${id} no encontrado`);
            }
        }
}

const biciProduct = {
    title: "Bicicleta",
    description: "Una bicicleta de alta calidad",
    price: 500,
    thumbnail: "https://example.com/bici.jpg",
    code: "BIC001",
    stock: 10
};

const pesasProduct = {
    title: "Juego de Pesas",
    description: "Un juego completo de pesas para entrenamiento",
    price: 200,
    thumbnail: "https://example.com/pesas.jpg",
    code: "PES001",
    stock: 5
};

const caminadoraProduct = {
    title: "Caminadora",
    description: "Una caminadora de alta resistencia para entrenamiento intensivo",
    price: 1000,
    thumbnail: "https://example.com/caminadora.jpg",
    code: "CAM001",
    stock: 3
};

const manager = new ProductManager();
manager.addProduct(biciProduct);
manager.addProduct(pesasProduct);
manager.addProduct(caminadoraProduct);

//Imprimir por consola todos los productos

console.log(manager.getProducts());
