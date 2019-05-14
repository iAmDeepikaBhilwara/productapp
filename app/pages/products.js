import React,{Component} from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import {connect} from 'react-redux';

import Product from '../Components/Product.component';
import {fetchProducts} from '../redux/actions/productAction';

class Products extends Component{
    constructor(props){
        super();
    }
    componentWillMount=()=>{
        this.props.fetchProducts();
    };

    render(){
        const {products}=this.props;
        return(
            <View style={styles.container}>
            <View style={styles.body}>
              <FlatList
                  data={products}
                  renderItem={({item})=>(
                      
                    <Product
                       item={item}
                       product={item}/>
                  )}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={() => (
                    <View style={{ height: 0.5, backgroundColor: "#34495e90" }} />
                  )}
                  />
            </View>
            </View>
        );

    }


}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    body: {
      flex: 1,
      justifyContent: "center"
    }
  });
  const mapStateToProps = state => ({
    products: state.items
  });
  const mapDispatchToProps = (dispatch) => ({
    // addToCart: () => { dispatch(addToCart())},
    fetchProducts: () => { dispatch(fetchProducts())}
  })
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    // { addToCart, fetchProducts }
  )(Products);