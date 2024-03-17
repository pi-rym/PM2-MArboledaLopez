class CarritoCompra {
    constructor(){
        this.carrito= [];
    }

    agregarProducto (producto){
        this.carrito.push (producto);
    }

    calcularTotal(){
        let total = 0;
        for (let producto of this.carrito){
            total += producto.quantity * producto.price;
        }
        return total;
    }

    aplicarDescuento(porcentaje){
        if (porcentaje >= 0 && porcentaje <= 100){
            const total = this.calcularTotal();
            const descuento = total * (porcentaje / 100);
            const totalConDescuento = total - descuento;
            return totalConDescuento;
        }else{
            throw new Error ('El descuento debe de tener un porcentaje entre 0 y 100 para poder ser aplicado.')
        }
    }

}


module.exports = {
    CarritoCompra
}
