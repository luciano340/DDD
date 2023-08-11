import Product from "../../domain/entity/products";
import ProductRepositoryInterface from "../../domain/repository/product-respository.interface";
import ProductModel from "../db/sequelize/model/product.models";

export default class ProductRepository implements ProductRepositoryInterface {

    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,

         });
    }

    async update(entity: Product): Promise<void> {
        await ProductModel.update({
            name: entity.name,
            price: entity.price,
         },
         {
            where: {
                id: entity.id
            }
         });    
    }

    async find(id: string): Promise<Product> {
        const product = await ProductModel.findOne({where: {id: id}})
        return new Product(
            product.id,
            product.name,
            product.price
        )
    }

    async findAll(): Promise<Product[]> {
        const products = await ProductModel.findAll();
        return products.map((products) => 
            new Product(products.id, products.name, products.price)
        );
    }
}