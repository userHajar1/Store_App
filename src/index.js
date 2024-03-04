import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import store from "./Redux/store";
import ProductList from "./tps/store/ProductList"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <ProductList />
        </Provider>
    </>
);