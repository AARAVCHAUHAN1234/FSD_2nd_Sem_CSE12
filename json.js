let jsonstring = '{"productname":"Laptop", "price":1200, "instock":"true"}';
let product = JSON.parse(jsonstring);
console.log(product);
console.log(product.productname);
console.log(product.price);
console.log(product.instock);
let newproduct = {productname:"Mobile", price:800, instock:true};
let newjsonstring = JSON.stringify(newproduct);
console.log(newjsonstring);

for (key in product) {
    console.log(key + ": " + product[key]);
}