import React from 'react';
import Product from './product';
import PropTypes from 'prop-types';

const ProductList = ({products, onIncreaseVotes}) => {
    if(products == null) {
      return (
      <div className="container content_2d8bd white_09016 hideOverflow_77a4e">
        <ul className="postsList_b2208">
            <h3>Loading...</h3>
        </ul>
      </div>
      )
   }
   if(!products.length) {
        return (
        <div className="container content_2d8bd white_09016 hideOverflow_77a4e">
          <ul className="postsList_b2208">
              <h3>No Result Found</h3>
          </ul>
        </div>
        )
    }
    return (
      <div className="container content_2d8bd white_09016 hideOverflow_77a4e">
        <ul className="postsList_b2208">
            {products.map(product=><Product key={product.id} product={product} onIncreaseVotes={onIncreaseVotes}/> )}
        </ul>
      </div>
    );
};

ProductList.propTypes = {
  products: PropTypes.array, 
  onIncreaseVotes: PropTypes.func
}

export default ProductList;