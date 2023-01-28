
import AuthPage from '../pages/AuthPage'
import CartPage from '../pages/cart-page/CartPage'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import WishlistPage from '../pages/wishlist-page/WishlistPage'
import ProfilePage from '../pages/ProfilePage'
import { PROFILE_ROUTE, CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, WISHLIST_ROUTE } from './consts'


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: WISHLIST_ROUTE,
        Component: WishlistPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }
]