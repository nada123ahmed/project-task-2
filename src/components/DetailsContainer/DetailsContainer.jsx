import "./DetailsContainer.css"
import CartIcon from "../../../public/Images/icon-cart.svg"
function DetailsContainer(){
    return (
        <div id="DetailsDiv">
<label id="Tittle">perfume</label>
<h1 id="Header">Gabrielle Essence Eau De parfum</h1>
<p id="Description">Afloral , solar and voluptuous <br></br>interpretation composed by <br></br>olivier polge , perfumer-creator<br></br> for the house of CHANEL</p>
<div id="PriceDiv">
    <label id="PriceLabel">$149.99</label>
    <label id="DiscountPrice"><s>$169.99</s></label>
</div>
<button id="CartBtn">
    <img src={CartIcon} alt="cart icon"></img>
    <span>add to cart</span></button>
        </div>
       
    )
}
export default DetailsContainer;