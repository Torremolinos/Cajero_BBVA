/**
 * @Autor:Adrián Iglesias Riño
 * @Github:
 * Si me robas el codigo almenos dame follow hdp.
 */
document.addEventListener('DOMContentLoaded', function () {
    const cantidadInicial = 2000;
    let cantidadActual = cantidadInicial;


    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const bt1 = document.getElementById('retirar');
    const bt2 = document.getElementById('ingresar');

    bt1.addEventListener('click', ()=>{
        retirar();
    });
    bt2.addEventListener('click', ()=>{
        ingresar();
    });

    const ingresar = () => {
        const input = parseFloat(document.getElementById('input').value);
        if (isNaN(input) || input <= 0) {
            result1.textContent = `Cantidad incorrecta`;
            result2.textContent = `Saldo: ${cantidadActual}€`;
        }
        else {
            cantidadActual += input;
            actualizar();
            result2.textContent = `Saldo: ${cantidadActual}€`;
            result1.textContent = `Ingreso: ${input}€`;
        }
    };

    const retirar = () => {
        const input = parseFloat(document.getElementById('input').value);
        if (isNaN(input) || input <= 0 || input > cantidadActual) {
            result1.textContent = `Cantidad incorrecta`;
            result2.textContent = `Saldo: ${cantidadActual}€`;
        }else if (cantidadActual <= 0) {
            result1.textContent = `No tienes dinero mi rey.`;
        }
        else {
            cantidadActual -= input;
            actualizar();
            result2.textContent = `Retiras: ${input}€`;
            result1.textContent = `Saldo: ${cantidadActual}€`;
        }
    };


    const actualizar = () => {
        cantidadActual.textContent = `Saldo ${cantidadActual}€`;
    };


});