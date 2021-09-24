import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/Navbar";
import { CustomProvider } from "./context/Context";
import Cart from "./components/cart/Cart";


const App = () => {
    return (
        <Router>
            <div className="main">
                <CustomProvider>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={ItemListContainer} />
                        <Route exact path="/category/:categoryId" component={ItemListContainer} />
                        <Route exact path="/item/:id" component={ItemDetailContainer} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                    <Footer />
                </CustomProvider>
            </div>
        </Router>
    )
}

export default App;