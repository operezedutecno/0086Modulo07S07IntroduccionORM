class Cajero {
    constructor(saldo_inicial) {
        this._saldo = saldo_inicial
    }

    get saldo() { // Accesador
        return parseFloat(this._saldo).toFixed(2)
    }

    set saldo(nuevo_saldo) { // Mutador
        this._saldo = nuevo_saldo
    }

    consultarSaldo() {
        return `El saldo actual es: ${this.saldo}`
    }

    depositarDinero(deposito) {
        // this.saldo = Number(this.saldo) + deposito; 
        this._saldo += deposito;
        console.log(this.consultarSaldo());
    }

    retirarDinero(retiro) {
        this._saldo -= retiro
        console.log(this.consultarSaldo());
    }
}

module.exports = Cajero