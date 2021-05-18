export interface Person {
    fullName: string,
    emailAddress: string,
}

export interface Place {
    street: string,
    city: string,
    postalCode: string,
    country: string,
}

export type Data = Product | Order

export interface Product {
    kind: "product",
    id: number,
    name: string,
    price: number,
    category: string,
    description: string,
}

export interface Order {
    kind: "order",
    id: number,
    buyer: Person
    deliveryAddress: Place,
    products: Product
}