import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/auth-context";
import CartPage from "./pages/cart-page";
import Homepage from "./pages/home-page";
import Layout from "./pages/layout";

import LoginPage from "./pages/login-page";
import SearchPage from "./pages/search-page";
import SingleProduct from "./pages/single-product";
import { store } from "./redux/store";
import RequireAuth from "./shared/components/required-auth";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="search/:query" element={<SearchPage />} />

            <Route
              path="cart"
              element={
                <RequireAuth>
                  <CartPage />
                </RequireAuth>
              }
            />
            <Route path="product/:productId" element={<SingleProduct />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Provider>
    </AuthProvider>
  );
}

export default App;
