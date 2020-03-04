import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {

    onAddProduct = () =>{
        alert(this.refs.name.value);
    }

    render(){
        const products = [
            {
                name : 'Iphone 11 Promax 32GB',
                id : 5,
                price: 2000000,
                status: true,
                image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg'
            },
            {
                name : 'Samsung Galaxy S20 129GB',
                id : 6,
                price: 3000000,
                status: true,
                image: 'https://9to5google.com/wp-content/uploads/sites/4/2020/01/Samsung-Galaxy-S20-rumors.jpg?quality=82&strip=all&w=1500'
            },
            { 
                name : 'Samsung Galaxy Fold',
            id : 7,
            price: 4000000,
            status: false,
            image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/11/25/637102754985873870_samsung-galaxy-fold-den-0.png'
            }
        ];
        const elements = products.map((product,index)=>{
            return <Product key = {product.id} name={ product.name } price={product.price} id={product.id} status={product.status} image={product.image}/>
        });
        return ( <div className = "App" >
            <Header />
            <div>
                    <div className="row">
                        
                            { elements }
                   
                    </div>
                   
                </div>
            </div>
        );
    }
}
export default App;