import "./App.css";
import Hero from "./Hero";
import Top from "./Top";
import Footer from "./Footer";
import SingleProduct from "./SingleProduct";
import Giftkit from "./Giftkit"
import Products from "./Products";
import Giftsfhome from "./Giftsfhome"
import Store from "./Store";
import Quote from "./Quote";
import { product_1, product_2, sp1, sp2, sp3 } from "./data";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";

function App() {
  return (
    <div className="app">
      <Top />
      <Hero />
      <SingleProduct inverted data={sp1} />
      <SingleProduct data={sp2} />
      <SingleProduct inverted data={sp3} />
      <Giftkit />
      <Products products={product_1} />
      <Giftsfhome />
      <h1>Thoughtful offerings</h1>
      <Products products={product_2} />
      <Store />
      <Quote />
      <Footer />
      <ModeCommentOutlinedIcon variant="outlined" className="message" />
    </div>
  );
}

export default App;
