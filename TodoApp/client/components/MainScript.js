
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/actions';
import Main from './Main.component';

function mapStateToProps(storeData){
        return{
            mytodos:storeData.todos
        }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators(allActions,dispatch);
}


var App = connect(mapStateToProps,mapDispatchToProps)(Main);
export default App;