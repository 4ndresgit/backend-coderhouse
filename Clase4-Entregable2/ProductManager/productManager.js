

const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.productIdCounter = 1;
  }

  _writeToFile(products) {
    fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
  }

  _readFromFile() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  addProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error('Todos los campos son obligatorios');
    }

    const products = this._readFromFile();
    const existingProduct = products.find((p) => p.code === code);
    if (existingProduct) {
      throw new Error('El código del producto ya está en uso');
    }

    const newProduct = {
      id: this.productIdCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    products.push(newProduct);
    this._writeToFile(products);
  }

  getProducts() {
    return this._readFromFile();
  }

  getProductById(id) {
    const products = this._readFromFile();
    const product = products.find((p) => p.id === id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }

  updateProduct(id, updatedProduct) {
    const products = this._readFromFile();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Producto no encontrado');
    }

    products[index] = {
      ...products[index],
      ...updatedProduct,
      id: products[index].id,
    };

    this._writeToFile(products);
  }

  deleteProduct(id) {
    const products = this._readFromFile();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Producto no encontrado');
    }

    products.splice(index, 1);
    this._writeToFile(products);
  }
}

module.exports = ProductManager;
