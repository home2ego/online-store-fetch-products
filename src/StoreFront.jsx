import { useEffect, useState } from 'react';
import Product from './Product.jsx';
import Loader from './Loader.jsx';
import useFetch from './useFetch.jsx';

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get('products.json')
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="store-front">
      {loading && <Loader />}
      {products.map((product) => (
        <Product key={product.id} details={product} />
      ))}
    </div>
  );
}
