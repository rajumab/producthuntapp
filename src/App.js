import React, { Component } from 'react';
import './App.css';
import ProductList from './components/product-list';
import Search from './components/search';
import Products from './data/posts';

class App extends Component {
  state = {
    products: [],
    selectedProduct: null
  }

  componentDidMount() {
    this.onSearch('');
  }

  render() {
    return (
      <div>
        <Search onSearchChange={term => this.onSearch(term)}/>
        <ProductList products={this.state.products} onIncreaseVotes={selectedProduct=> this.onIncreaseVotes(selectedProduct)} />
      </div>
    );
  }

  onSearch(searchText) {
    this.setState({
      products: Products.posts.filter(product => product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1).sort((first, last)=> last.votes_count - first.votes_count)
    })
  }

  onIncreaseVotes(selectedProduct) {
    console.log(selectedProduct);
    this.setState({
      products: this.state.products.map(product => product.id === selectedProduct.id ? Object.assign({}, selectedProduct, {votes_count: selectedProduct.votes_count + 1}) : product).sort((first, last)=>  last.votes_count - first.votes_count)
    })
  }
}

export default App;
