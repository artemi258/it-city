export default function ProductsItem() {
 const items = fetch('http://localhost:3001/api/product', {
  method: 'GET',
 })
  .then((res) => res.json())
  .then((res) => setProducts(res));
 return;
}
