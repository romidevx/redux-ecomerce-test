import React,{useState} from 'react';
import './styles.css';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {filterByCategory} from './redux/actions';


const Categories = () => {

    const {products} = useSelector(state => state.products);
    // FILTER PRODUCTS CATEGORIES
    const categories = ['all',...new Set(products.map(item => item.category))];
    const dispatch = useDispatch()
    const [currentItem, setCurrentItem] = useState('');

    const HandleMenuClick = (categoryItem) => {
        setCurrentItem(categoryItem);
        dispatch(filterByCategory(categoryItem));
    }

    return (
        <div className='categories-container'>
            {
                categories && categories.map(categoryItem => 
                    <h3 key={categoryItem} className={currentItem === categoryItem ? 'categoryItem-active' : 'categoryItem'} onClick={() => HandleMenuClick(categoryItem)}>
                        {categoryItem}
                    </h3>
                )
            }
        </div>
    )
}

export default Categories;
