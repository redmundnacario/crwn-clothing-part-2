import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import "./App.css";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInAndSignUp = lazy(() =>
    import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

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
                <Suspense fallback={<Spinner />}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Suspense>
            </Switch>
        </div>
    );
};

export default App;
