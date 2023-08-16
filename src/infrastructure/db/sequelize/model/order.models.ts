import { Model, Table, PrimaryKey, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import OrderItemModel from "./order-item.models";
import CustomerModel from "./customer.models";

@Table({
    tableName: "orders",
    timestamps: false,
})
  
export default class OrderModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => CustomerModel)
    @Column({allowNull: false})
    declare customerId: string;

    @BelongsTo(() => CustomerModel)
    declare customer: CustomerModel;

    @HasMany(() => OrderItemModel)
    declare items: OrderItemModel[];

    @Column({allowNull: false})
    declare total: number;
}