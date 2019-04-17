import React, { Component } from 'react';
import './App.css';
import ProductList from './components/product-list';
import Search from './components/search';
import Products from './data/posts';

class App extends Component {
  
  state = {
    products: Products.posts,
    filteredProducts: [],
    selectedProduct: null
  }
  
  constructor() {
    super();
    this.searchTerm = '';
  }

  componentDidMount() {
    this.onSearch('');
  }

  render() {
    return (
      <div>
        <Search onSearchChange={term => this.onSearch(term)}/>
        <ProductList products={this.state.filteredProducts} onIncreaseVotes={selectedProduct=> this.onIncreaseVotes(selectedProduct)} />
      </div>
    );
  }

  onSearch(searchText) {
    this.searchTerm = searchText
    this.setState({
      filteredProducts: this.state.products.filter(product => product.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1).sort((first, last)=> last.votes_count - first.votes_count)
    })
  }

  onIncreaseVotes(selectedProduct) {
    const tempProducts = this.state.products.map(product => product.id === selectedProduct.id ? Object.assign({}, selectedProduct, {votes_count: selectedProduct.votes_count + 1}) : product).sort((first, last)=>  last.votes_count - first.votes_count);
    this.setState({
      products: tempProducts,
      filteredProducts: tempProducts.filter(product => product.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1).sort((first, last)=> last.votes_count - first.votes_count)
    })
  }
}

export default App;