import React,{ Component } from 'react';

class Product extends Component{
    render(){
        return(
            <div className="col-4">
            <div className="card m-2">
                <div className="card-header h-100">
                    <img src={this.props.image} alt={this.props.name} style={{width:50 +'%'}}></img>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Tên sản phẩm: {this.props.name}</h4>
                    <h6 className="card-text">Mã sản phẩm: {this.props.id}</h6>
                    <p className="card-text">Giá sản phẩm: {this.props.price} VNĐ</p>
                    <p className="card-text">Tình trạng: {this.props.status ? 'Còn hàng' : 'Hết hàng'} </p>
                </div>
                <a name="buy" className="btn btn-primary w-25 m-2" role="button">Mua Hàng</a>
            </div>
            </div>
        );
    }   
}

export default Product;