import React from "react";
import './Products.css';
class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<div>
<div class="content-wrapper">
  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src={this.props.i} alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">{this.props.n}</h2>
      <div class="news-card__post-date">{this.props.p}</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">{this.props.d}</p>
        <a href="#" class="news-card__read-more">Buy Now <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
</div>
</div>
); }
}
export default Products;