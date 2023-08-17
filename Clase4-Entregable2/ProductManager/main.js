

const ProductManager = require('./productManager');

const productManager = new ProductManager('products.json'); 

productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 10.99,
  thumbnail: 'imagen1.jpg',
  code: '001',
  stock: 20,
});

productManager.addProduct({
  title: 'Producto 2',
  description: 'Descripción del producto 2',
  price: 15.49,
  thumbnail: 'imagen2.jpg',
  code: '002',
  stock: 15,
});

console.log('All products:', productManager.getProducts());

const productIdToFind = 1;
console.log('Product found by ID:', productManager.getProductById(productIdToFind));

const updatedProduct = {
  title: 'Producto 1 Modificado',
  price: 12.99,
};
productManager.updateProduct(productIdToFind, updatedProduct);
console.log('Product updated successfully.');

const deletedProductId = 2;
productManager.deleteProduct(deletedProductId);
console.log('Product deleted successfully.');

console.log('Updated products after delete:', productManager.getProducts());


