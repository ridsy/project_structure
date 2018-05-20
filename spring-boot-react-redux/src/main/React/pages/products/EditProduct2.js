import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions/products'
import { hashHistory } from 'react-router'


import EditForm from 'components/products/EditForm'

class EditProductCmp1 extends React.Component {
    constructor(props) {
    	console.log("edit constructor");
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidUpdate(prevProps){
        if(this.props.editedProduct && this.props.editedProduct !== prevProps.editedProduct){
            hashHistory.push('/products')
        }
    }

    render() {
    	console.log("edit render");
//    	var id = this.props.params.id;
//    	console.log(this.props.editedProduct);
//    	const currProduct = this.props.editedProduct.find((product) =>
//        product.id === id );
//            const currProduct = this.props.editedProduct[index];

        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <EditForm editProduct = {this.props.editProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
};


function mapStateToProps(state) {
    return {
        editedProduct: state.product.get('edited')
    }
}

export const EditProduct2 = connect(mapStateToProps, actionCreators)(EditProductCmp1)