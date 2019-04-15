import React, { Component } from 'react'

const Product = ({product, onIncreaseVotes}) => {
  console.log("called here: "+product);
    if(!product) {
        return <div>Loading...</div>
    }
  const {
    name,
    tagline,
    thumbnail,
    votes_count,
    redirect_url
    } = product;

  return (
      <li>
        <div className="item_54fdd">
          <a className="link_523b9" href={redirect_url} target="true">
            <div className="thumbnail_f9ee1 thumbnail_9832a">
              <img className="Keychron K2" src={thumbnail.image_url} style={{width: "80px", height: "80px"}} alt="img"/>
            </div>
            <div className="content_31491">
              <h3 className="font_9d927 medium_51d18 semiBold_e201b title_9ddaf lineHeight_042f1 underline_57d3c">{name}</h3>
              <p className="font_9d927 grey_bbe43 small_231df normal_d2e66 tagline_619b7 lineHeight_042f1 underline_57d3c">{tagline}</p>
            </div>
          </a>
          <div className="voteButtonWrap_4c515">
            <button className="button_30e5c smallSize_5216f simpleVariant_8a863 newVoteButton_dac5c" onClick={()=> onIncreaseVotes(product)}>
              <span className="font_9d927 xSmall_1a46e semiBold_e201b buttonContainer_b6eb3 lineHeight_042f1 underline_57d3c uppercase_a49b4"><div className="icon_f5f81 blackOrange_56e54"></div>
                <span className="font_9d927 small_231df semiBold_e201b lineHeight_042f1 underline_57d3c">{votes_count}</span>
              </span>
            </button>  
          </div>
        </div>
      </li>
  );
};

export default Product;
