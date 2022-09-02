import React,{ useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
//ACTIONS
import { getProducts } from './redux/actions';

// COMPONENTS
import Spinner from './Spinner';
import ProductsList from './ProductsList';
import Categories from './Categories';


const Products = () => {
  const  { products, filteredProducts, loading, error } = useSelector(state => state.products);
  //const { products, filteredProducts, loading, error } = storeState;
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // ** IF LOADING, SHOW SPINNER**
  if(loading){
    return <Spinner/>
  }

  // ** IF ERROR, SHOW ERROR MESSAGE **
  if(error){
    return <p style={{color:'red',textAlign:'center', marginTop:'45px'}}>{error}</p>
  }

  return (
    <div className='products-wrapper'>

      <Categories/>
      
      <ProductsList allProducts={ filteredProducts.length ? filteredProducts : products } />

    </div>
  )
}

export default Products;
