

/*
-Consigna
Realizar una clase “ProductManager” que gestione un conjunto de productos.

-Aspectos a incluir
* Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

* Cada producto que gestione debe contar con las propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)

* Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable

* Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

* Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”
*/
class ProductManager {
    constructor() {
      this.products = []; // Consigna
      this.productIdCounter = 1;
    }
  
    addProduct(product) {
      const { title, description, price, thumbnail, code, stock } = product;
  
      // Validacion
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error('Todos los campos son obligatorios');
      }
  
      // Verificar si ya está en uso
      const existingProduct = this.products.find((p) => p.code === code);
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
        stock
      };
  
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.error('Not found');
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();

  try {
  productManager.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 10.99,
    thumbnail: "imagen1.jpg",
    code: "001",
    stock: 20,
  });

  productManager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 15.49,
    thumbnail: "imagen2.jpg",
    code: "002",
    stock: 15,
  });
} catch (error) {
  console.error(error.message);
}

const allProducts = productManager.getProducts();
console.log(allProducts);


const productIdToFind = 1;
const productFound = productManager.getProductById(productIdToFind);
console.log(productFound);

const nonExistentProductId = 100;
const productNotFound = productManager.getProductById(nonExistentProductId);
