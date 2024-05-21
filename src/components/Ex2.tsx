import React, { useState } from 'react'
interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
}
export default function Ex2() {
    const [product, setProduct] = useState<Product>({ id: 1, name: "cocacola", price: 1000, quantity: 10 })

    return (
        <div>
            <h2>Thông tin sản phụ</h2>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>

        </div>
    )
}
