import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [
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
                status: true,
                image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/11/25/637102754985873870_samsung-galaxy-fold-den-0.png'
                }
            ],
            isActive : true
        };
    }


    onAddProduct = () =>{
        alert(this.refs.name.value);
    }


    render(){
        
        const elements = this.state.products.map((product,index)=>{
            let result = '';
            if(product.status && this.state.isActive){
                result =  <tr key={index}>
                            <td scope="row">{index}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
            }
            console.log(result);
            return result;
        });
        return ( 
        <div className = "App" >
            <Header />
            <div>
                    <div className="row">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                               {elements}
                            </tbody>
                        </table>
        <button type="button" className="btn btn-dark ml-5" onClick = { () => {this.setState({isActive: !this.state.isActive});}}>Active: {this.state.isActive === true ? 'true' : 'false'}</button>
                   </div>
                   </div>
                </div>
           
        );
    }
}
export default App;