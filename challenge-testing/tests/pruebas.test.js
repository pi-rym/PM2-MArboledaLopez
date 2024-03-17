const { CarritoCompra } = require ('../index1');

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it('agregarProducto debe agregar el producto a carrito', () => {
    const producto = { name: 'Producto 1', quantity: 2, price: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto);
  });

  it('calcularTotal debe calcular el total correcto', () => {
    const productos = [
      { name: 'Producto 1', quantity: 2, price: 10 },
      { name: 'Producto 2', quantity: 1, price: 20 }
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    expect(carrito.calcularTotal()).toBe(40);
  });
  
  
  it('aplicarDescuento debe aplicar el descuento al total', () => {
    const productos = [
      { name: 'Producto 1', quantity: 2, price: 10 },
      { name: 'Producto 2', quantity: 1, price: 20 }
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    const totalBeforeDiscount = carrito.calcularTotal();
    const discountPercentage = 10;
    const totalAfterDiscount = totalBeforeDiscount * (1 - discountPercentage / 100);
    expect(carrito.aplicarDescuento(discountPercentage)).toBe(totalAfterDiscount);
  });
  
  

  it('aplicarDescuento debe botar un error si está fuera de 0 y 100', () => {
    expect(() => carrito.aplicarDescuento(-10)).toThrow();
    expect(() => carrito.aplicarDescuento(110)).toThrow();
  });
});


