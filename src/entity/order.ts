import OrderItem from "./order_item";
export default class Order {

    private _id: string;
    private _customerID: string;
    private  _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]){
        this._id = id;
        this._customerID = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    validate(): boolean {
        if (this._id.length === 0){
            throw new Error('O id é obrigatório!');
        }
        if (this._customerID.length === 0){
            throw new Error('O id do cliente é obrigatório!')
        }
        if (this._items.length === 0){
            throw new Error('É necessário informar ao menos um item a ordem!')
        }
        return true;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}