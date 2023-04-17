class ProductManager {
    constructor() {
        this.products = []; // Inicializa el arreglo de productos vacío
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const newProduct = { title, description, price, thumbnail, code, stock };
        this.products.push(newProduct); // Agrega un nuevo producto al arreglo
    }

    removeProduct(code) {
        const index = this.products.findIndex((product) => product.code === code);
        if (index > -1) {
          this.products.splice(index, 1); // Remueve un producto del arreglo
        }
    }

    getProductByCode(code) {
        return this.products.find((product) => product.code === code); // Retorna un producto según su código
    }

    getProducts() {
        return this.products; // Retorna todos los productos
    }
}

// Creamos un objeto para almacenar todas las instancias de ProductManager
const productManagers = {};

// Creamos una función para agregar una instancia a nuestro objeto
function addProductManager(key, instance) {
    productManagers[key] = instance;
}

// Creamos una instancia de ProductManager para "Juego de Pesas"
const pesasManager = new ProductManager();
const pesasProduct = {
    title: 'Juego de Pesas',
    description: 'Un set de pesas para entrenamiento físico en casa.',
    price: 2499.99,
    thumbnail: 'ruta/imagen-pesas',
    code: 'PROD001',
    stock: 20
};
pesasManager.addProduct(pesasProduct.title, pesasProduct.description, pesasProduct.price, pesasProduct.thumbnail, pesasProduct.code, pesasProduct.stock);
addProductManager(pesasProduct.code, pesasManager);

// Creamos otra instancia de ProductManager para "Smartwatch"
const smartwatchManager = new ProductManager();
const smartwatchProduct = {
    title: 'Smartwatch',
    description: 'Un reloj inteligente con pantalla táctil y muchas funcionalidades.',
    price: 1599.99,
    thumbnail: 'ruta/imagen-smartwatch',
    code: 'PROD002',
    stock: 15
};
smartwatchManager.addProduct(smartwatchProduct.title, smartwatchProduct.description, smartwatchProduct.price, smartwatchProduct.thumbnail, smartwatchProduct.code, smartwatchProduct.stock);
addProductManager(smartwatchProduct.code, smartwatchManager);

// Creamos una instancia de ProductManager para el primer producto
const productManager = new ProductManager();
const biciProduct = {
    title: 'Bicicleta',
    description: 'Rodado 28, cuadro de aluminio y 21 velocidades.',
    price: 1950.99,
    thumbnail: 'ruta/imagen-bicicleta',
    code: 'PROD003',
    stock: 10
};
productManager.addProduct(biciProduct.title, biciProduct.description, biciProduct.price, biciProduct.thumbnail, biciProduct.code, biciProduct.stock);
addProductManager(biciProduct.code, productManager);

console.log(productManagers['PROD001'].getProducts());

console.log(productManagers['PROD002'].getProducts());

console.log(productManagers['PROD003'].getProducts());


