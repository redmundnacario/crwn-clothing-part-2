import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import "./App.css";

// import { addCollectionAndDocuments } from "./firebase/firebase.utils";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

const App = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    // const collections = useSelector(selectCollectionsForPreview);
    // console.log(userAuth);

    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((snapShot) => {
                    dispatch(
                        setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data(),
                        })
                    );
                });
            } else {
                dispatch(setCurrentUser(userAuth));
                // addCollectionAndDocuments(
                //     "collections",
                //     collections.map(({ title, items }) => ({ title, items }))
                // );
            }
        });

        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                    }
                />
            </Switch>
        </div>
    );
};

export default App;
