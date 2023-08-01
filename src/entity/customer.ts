class Customer {

    _id: string;
    _name: string;
    _address: string;
    _active= false;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
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
        if (this._address.length === 0) {
            throw new Error('Endreço é obrigatório para ativar o cliente!')
        }
    }

    deactive() {
        this._active = false;
    }

}