export interface Product {
    name: string;
    price: number;
}

const products : Product[] = [{name: 'fountain pen', price: 80}, {name: 'notebook', price: 15}, {name: 'ink', price: 12}, {name: 'stationery', price: 20}];

export function calcAverageProductPrice (products: Product[]) : number {
    let total = 0;
    let average = 0;
    if (products == []) {
        return 0;
    } else {
        products.forEach((product) => {
        total = total + product.price;
        average = total/products.length;
    });

    return average;
    //still need to divide
    }
}

console.log(calcAverageProductPrice([]));

let myAvgPrice = calcAverageProductPrice(products);

console.log(myAvgPrice);