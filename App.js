import React ,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableHighlight
} from 'react-native';
import data from './sales.json'

const basketIcon = require('./images/basket.png')

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            dataSource: data,
            liked: false,
        }
    }
    handleButtonPress = () =>{
        this.setState({
            liked: !this.state.liked,
        })
    }

    // likedStyles = this.state.liked ? styles.liked : undefined;

    renderRow = ({ item }) => (
        <TouchableHighlight
            onPress={this.handleButtonPress}
            underlayColor="#fefefe"
        >
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image source={basketIcon} style={styles.icon}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.items}>{item.items} Items</Text>
                    <Text style={styles.address}>{item.address}</Text>
                </View>
                <View style={styles.total}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.price}>${item.total}</Text>
                </View>
            </View>
        </TouchableHighlight>

    )

    render(){
        return(
            <View>
                <Text style={styles.mainContainer}>Sales</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderRow}
                    keyExtractor={item=>item.id}
                />
            </View>
            );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    title:{
        backgroundColor: '#0f1b29',
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        padding:10,
        paddingTop:40,
        textAlign:'center',
    },
    row:{
        borderColor:'#f1f1f1',
        borderBottomWidth:1,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        paddingTop:20,
        paddingBottom:20,
    },
    iconContainer:{
        alignItems:'center',
        backgroundColor:'#feb401',
        borderColor:'#feaf12',
        borderRadius:25,
        borderWidth:1,
        justifyContent:'center',
        height:50,
        width:50,
    },
    icon:{
        tintColor:'#fff',
        height:22,
        width:22,
    },

    //text
    info:{
        flex:1,
        paddingLeft:25,
        paddingRight:25,
    },
    items:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:5
    },
    address:{
        color:'#ccc',
        fontSize:14,
    },
    total:{
        width:80,
    },
    date:{
        fontSize:12,
        marginBottom:5,
    },
    price:{
        color:'#1cad61',
        fontSize:25,
        fontWeight:'bold'
    }

});

