import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", 'Luciano Romao');
const address = new Address("Servidao pedro manoel dos santos", 122, '88058-479', 'Floripa')
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "maça", 5);
const item2 = new OrderItem("2", "bolo", 15);

const order = new Order("1", "123", [item1, item2])