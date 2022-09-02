import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from './Spinner';
import {Link} from 'react-router-dom'
// ACTIONS
import {getProduct} from './redux/actions';
// REACT-REDUX
import {useSelector,useDispatch} from 'react-redux';


 const Product = () => {

    const {id} = useParams(); 
    const dispatch = useDispatch()
    const { product, loading, error } = useSelector(state => state.product);
    const [showFullImage, setFullImage] = useState(false);

    useEffect(() => {
      dispatch(getProduct(id))
    }, [id,dispatch]);

    // ** FORMAT PRICE AMOUNT OUTPUT**
    const formatPrice = (amount) => 'R$ ' + parseFloat(amount).toFixed(2);

    // ** IF LOADING, SHOW SPINNER **
    if(loading){
      return <Spinner/>
    }

    // ** IF ERROR, SHOW ERROR MESSAGE **
    if(error){
      return <p style={{color:'red',textAlign:'center',marginTop:'50px'}}>{error}</p>
    }

    return (
      <div className='product' style={{padding:'20px'}}>
        
        <div className='product-details-header' style={{textAlign:'center'}}>
          <div className='product-header-bread-crumbs'>
            { product && 
              <p>
                <small>
                  <Link to='/' style={{color:'#000'}}>products</Link> / {product.category} / {product.title} 
                </small>
              </p> 
            }
          </div>
        </div>

       { 
          !product
          ? <div>
              <h3 style={{ textAlign:'center' }}>.. Product not found ..</h3> 
              <br/><br/><br/><br/>
              <p style={{ textAlign:'center'}}>
                <Link to={'/'} style={{color:'#000',fontWeight:'700' }}>&#9664; &nbsp; Go back to products page</Link>
              </p>
            </div> 

          : <div className='product-details-container'>
              <div className='container'>

                <div className='product-details-image'>
                  {/* PRODUCT IMAGE */}
                  <img src={product.image} alt={product.title} onClick={() => setFullImage(true)} />
                </div>
                  {/* PRODUCT INFO */}
                <div className='product-details-description'>
                    <h2>{product.title}</h2>
                    <h3>{formatPrice(product.price)}</h3>
                    <p>{product.description}</p>
                    <p>
                      <br/>
                      <Link to={'/'} className='btn'> &#9664; &nbsp; Back to poducts list</Link>
                    </p>
                </div>
                
              </div>

              {/* PRODUCT FULL IMAGE POPUP */}
                <div className={showFullImage ? 'full-image-container' : 'full-image-invisible'} onClick={() => setFullImage(false)}>
                    <div className='full-product-image'>
                      <img src={product.image} alt={product.title} style={{padding:'30px'}} />
                      
                      {/* CLOSE BUTTON - HIDE FULL IMAGE CONTAINER */}
                      <span onClick={() => setFullImage(false)}>X</span>
                    </div>
                </div>
            </div>
        } 
      </div>
  )
}



export default Product;