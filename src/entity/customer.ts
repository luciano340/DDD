import Address from "./address";

export default class Customer {

    _id: string;
    _name: string;
    _address!: Address;
    _active= false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error('O nome é obrigatório!');           
        }
        if (this._id.length === 0) {
            throw new Error('O ID é obrigatório!');           
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error('Endreço é obrigatório para ativar o cliente!')
        }
    }

    deactive() {
        this._active = false;
    }

    set Address(adreess: Address) {
        this._address = adreess;
    }

}