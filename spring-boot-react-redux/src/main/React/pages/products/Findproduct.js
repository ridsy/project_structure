import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions/products'
import { hashHistory } from 'react-router'


import ProductForm from 'components/products/SearchForm'

class FindProductCmp extends React.Component {
    constructor(props) {
    	console.log("find");
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidUpdate(){
    
    	
        
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ProductForm findProduct = {this.props.findProduct}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
};


function mapStateToProps(state) {
    return {
        savedProduct: state.product.get('saved')
    }
}

export const FindProduct = connect(mapStateToProps, actionCreators)(FindProductCmp)