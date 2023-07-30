

const ProductManager = require('./productManager');

const productManager = new ProductManager('products.json'); 

try {
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

  const allProducts = productManager.getProducts();
  console.log(allProducts);

  const productIdToFind = 1;
  const productFound = productManager.getProductById(productIdToFind);
  console.log(productFound);

  const updatedProduct = {
    title: 'Producto 1 Modificado',
    price: 12.99,
  };
  productManager.updateProduct(productIdToFind, updatedProduct);

  const deletedProductId = 2;
  productManager.deleteProduct(deletedProductId);

  const updatedProductsAfterDelete = productManager.getProducts();
  console.log(updatedProductsAfterDelete);
} catch (error) {
  console.error(error.message);
}
