# Welcome to RNPlayground

It’s an e-commerce tutorial mobile app created by degeloper (Ege Barış Akyürek)

## Tech Stack

- CLI: Expo
- Language: TypeScript, JavaScript
- State Management: Context API
- Backend: https://fakestoreapi.com
- Testing: Jest
- HTTP Client: Axios
- Navigation: react-navigation

## Features

- Login with prefilled username and password. (username: johnd, password: m38rmF$)
- Auto-Login if you already logged in before.
- Logout.
- Expo-secure-store for encrypt and securely store the user token.
- All products screen.
- Category screen filtered by product category.
- Search product by name in category screen.
- Product detail modal.
- Add to cart the product with quantity from the product detail screen.
- Cart screen for the products whose already been added to the basket.
- Discount calculations for the categories jewelery and electronics.
- SubTotal and Total price calculations.
- DeepLinking for the spesific product and category screens.
- Unit and Snapshot tests for components and screens.
- SplashScreen, loading and empty states
- Error handler for the service requests

## Deep Linking iOS

- npx uri-scheme open "exp://127.0.0.1:19000/--/product/1" --ios
- npx uri-scheme open "exp://127.0.0.1:19000/--/category/jewelery" --ios

## Deep Linking Android

- npx uri-scheme open "exp://127.0.0.1:19000/--/product/1" --android
- npx uri-scheme open "exp://127.0.0.1:19000/--/category/jewelery" --android

## iOS Showcase

<div className='rows'>
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/iOS/splash.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/iOS/login.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/iOS/productList.png" width="200" height="400" />
</div>

<div className='rows'>
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/iOS/category.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/iOS/productDetail.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/iOS/cart.png" width="200" height="400" />
</div>

## Android Showcase

<div className='rows'>
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/Android/splash.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/Android/login.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/Android/productList.png" width="200" height="400" />
</div>

<div className='rows'>
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/Android/category.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/Android/productDetail.png" width="200" height="400" />
  <img src="https://github.com/degeloper34/RNPlayground/blob/master/src/assets/marketingResources/Android/cart.png" width="200" height="400" />
</div>




