import { Link } from 'react-router-dom';


function Product(props) {
    const idol = props.product;
    const profile = idol.details.toString().slice(0,12);
    
    return (
    <div className="product">
      <img className="product-image" src={idol.url} alt="product"  />
      <div className="product-name">
        <Link to={`/idols/${idol._id}`} >{idol.name}</Link>
      </div>
      <div className="product-brand">{idol.brand}</div>
      <div className="product-price">โปรไฟล์ : {profile} ... <Link to={`/idols/${idol._id}`} >ดูเพิ่มเติม</Link></div>
     
      <div className="product-rating">{idol.stars} Stars (10 Reviews)</div>
    </div>
    );
}

export default Product;
