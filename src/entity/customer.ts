import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private  _active= false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name() {
        return this._name;
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
        this._active = true;
    }

    deactive() {
        this._active = false;
    }

    set Address(adreess: Address) {
        this._address = adreess;
    }

    isActive() {
        return this._active;
    }
}