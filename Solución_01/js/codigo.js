let valorCompra = prompt("Ingrese el valor de compra en soles (S/)");

descuento = valorCompra * 0.05;
resultado = valorCompra - descuento;

alert(`Valor de la compra:     S/ ${valorCompra}
Descuento:                  S/ ${descuento}
Total a pagar               S/ ${resultado}
`);
