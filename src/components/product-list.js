import React from 'react';
import Product from './product';
import PropTypes from 'prop-types';

const ProductList = ({products, onVoterIncrease}) => {
    return (
      <div className="content_2d8bd white_09016 hideOverflow_77a4e">
        <ul className="postsList_b2208">
            {products.map(product=><Product key={product.id} product={product} onVoterIncrease={onVoterIncrease}/> )}
        </ul>
      </div>
    );
};

ProductList.propTypes = {
  products: PropTypes.array, 
  onVoterIncrease: PropTypes.func
}

export default ProductList;