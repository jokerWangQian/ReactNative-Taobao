/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import JuHuaSuan from './JuHuaSuan';
import ShappingCart from './ShoppingCart';
import OrderScreen from './OrderScreen';
import MineScreen from './MineScreen';
import MoreScreen from './MoreScreen';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
    TextInput,
    Platform
} from 'react-native';

//定时器用到的5张图
var a = "https://gw.alicdn.com/imgextra/i4/122/O1CN01aU2fhg1ClupzwwD4a_!!122-0-lubanu.jpg";
var b = "https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg";
var c = "https://img.alicdn.com/imgextra/i1/96/O1CN01uflo8X1Ca0XdMGxmF_!!96-0-luban.jpg"
var d = "https://gw.alicdn.com/imgextra/i2/73/O1CN01F2deNR1CPTQl2O2yV_!!73-0-lubanu.jpg";
var e = "https://gw.alicdn.com/imgextra/i3/160/O1CN019KaaGY1D3JtDIRJIO_!!160-0-lubanu.jpg"
var f = 0;

//获取屏幕的宽度和高度
var screenWidth = Dimensions
    .get('window')
    .width;
var screenHeight = Dimensions
    .get('window')
    .height;

class HomePage extends Component {
    //顶部导航条
    static navigationOptions = ({navigation}) => {
        return {title: '首页', headerTitle: (<TextInput
            style={{
            height: 30,
            width: screenWidth - 100,
            backgroundColor: 'white'
        }}
            placeholder='顶部搜索框'/>), headerRight: (
                <TouchableOpacity
                    onPress={() => {
                    alert('add click!')
                }}>
                    <Image
                        source={require('../ImageLib/navigation_add.png')}
                        style={{
                        width: 30,
                        height: 30,
                        marginRight: 10
                    }}/>
                </TouchableOpacity>
            ), headerLeft: (
                <TouchableOpacity
                    onPress={() => {
                    alert('scan click!')
                }}>
                    <Image
                        source={require('../ImageLib/navigation_scan.png')}
                        style={{
                        width: 30,
                        height: 30,
                        marginLeft: 10
                    }}/>
                </TouchableOpacity>
            )};
    };
    //初始化
    constructor(props) {
        super(props);

        this.fetchData = this
            .fetchData
            .bind(this);

        this.state = {
            uri: a,
            refreshing: false
        };

        //定时器
        setInterval(() => {
            f++;
            var imageUrl = '';
            if (f % 5 == 0) 
                imageUrl = a;
            else if (f % 5 == 1) 
                imageUrl = b;
            else if (f % 5 == 2) 
                imageUrl = c;
            else if (f % 5 == 3) 
                imageUrl = d;
            else if (f % 5 == 4) 
                imageUrl = e;
            
            this.setState(prevState => {
                return {uri: imageUrl};
            });
        }, 3000)
    }

    render() {
        return (
            <ScrollView
                style={style.container}
                refreshControl={< RefreshControl title = '下拉获取最新数据' refreshing = {
                this.state.refreshing
            }
            onRefresh = {
                () => this._showAlert('下啦刷新')
            } />}>
                <Image
                    source={{
                    uri: this.state.uri
                }}
                    style={{
                    width: screenWidth,
                    height: screenHeight / 4,
                    resizeMode: 'stretch'
                }}/>
                <View
                    width={screenWidth}
                    style={{
                    height: 90,
                    flexDirection: 'row',
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity onPress={() => {}}>
                        <View width={screenWidth / 5} style={style.menuItemView}>
                            <Image
                                source={{
                                url: 'https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png'
                            }}
                                style={style.menuItemIcon}/>
                            <Text style={style.menuItemTitle}>天猫</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.push('JuHuaSuan', {title: '聚划算'})}>
                        <View width={screenWidth / 5} style={style.menuItemView}>
                            <Image
                                source={{
                                url: 'https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png'
                            }}
                                style={style.menuItemIcon}/>
                            <Text style={style.menuItemTitle}>聚划算</Text>
                        </View>
                    </TouchableOpacity>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>天猫国际</Text>
                    </View>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>外卖</Text>
                    </View>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>天猫超市</Text>
                    </View>
                </View>
                <View
                    width={screenWidth}
                    style={{
                    height: 90,
                    flexDirection: 'row',
                    backgroundColor: 'white'
                }}>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>充值中心</Text>
                    </View>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB1ydXzhCzqK1RjSZPcXXbTepXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>飞猪旅行</Text>
                    </View>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>领金币</Text>
                    </View>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>拍卖</Text>
                    </View>
                    <View width={screenWidth / 5} style={style.menuItemView}>
                        <Image
                            source={{
                            url: 'https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png'
                        }}
                            style={style.menuItemIcon}/>
                        <Text style={style.menuItemTitle}>分类</Text>
                    </View>
                </View>
                <View width={screenWidth} style={style.noticeView}>
                    <Image
                        source={require('../ImageLib/taobaotoutiao.png')}
                        style={{
                        marginTop: 20,
                        width: 60,
                        height: 60,
                        marginLeft: 10
                    }}/>
                    <NoticeItem/>
                </View>
            </ScrollView>
        );
    }

    _showAlert(s) {
        alert(s);
    }

    //网络请求数据
    fetchData() {
        fetch("https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesE" +
                "xample.json").then((response) => response.json()).then((responseData) => {
            alert(responseData.movies[0].title + "|" + responseData.movies[0].year);
        });
    }
}

AppRegistry.registerComponent('HomePage', () => HomePage);

//样式
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },

    menuItemView: {
        height: 100,
        flexDirection: 'column',
        alignItems: 'center'
    },

    menuItemIcon: {
        width: 60,
        height: 60,
        marginTop: 10,
        resizeMode: 'cover'
    },

    menuItemTitle: {
        marginTop: 5,
        color: '#666666',
        fontSize: 16
    },

    noticeView: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },

    noticeItemView: {
        height: 30,
        flexDirection: 'row'
    },

    notiveItemTitle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 14,
        marginLeft: 3,
        ...Platform.select({
            ios: {
                lineHeight: 28
            },
            android: {}
        })
    },

    notiveItemTypeText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 10,
        color: 'red',
        ...Platform.select({
            ios: {
                lineHeight: 16
            },
            android: {}
        })
    },

    notiveItemTypeView: {
        width: 24,
        height: 18,
        marginTop: 6,
        marginLeft: 3,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5
    }
})

//淘宝头条组件
class NoticeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notice: [
                {
                    'type': '精华',
                    'title': '855+12G，这三款旗舰用三年没问题，这三款旗舰用三年没问题，这三款旗舰用三年没问题，',
                    'url': 'https://market.m.taobao.com/apps/market/content/index.html?wh_weex=true&data_pre' +
                            'fetch=true&source=topline&business_spm=a2141.7634494&wx_navbar_transparent=false' +
                            '&contentId=222680380772&spm=a2141.7631809'
                }, {
                    'type': '超赞',
                    'title': '车长近4米7，不到六万！全系配四轮独悬配！全系配四轮独悬配！全系配四轮独悬配！全系配四轮独悬配',
                    'url': 'https://market.m.taobao.com/apps/market/content/index.html?wh_weex=true&data_pre' +
                            'fetch=true&source=topline&business_spm=a2141.7634494&wx_navbar_transparent=false' +
                            '&contentId=223008106558&spm=a2141.7631809'
                }
            ]
        }
    }

    render() {
        return (
            <View
                width={screenWidth - 110}
                style={{
                    marginTop:20,
                height: 60,
                flexDirection: 'column'
            }}>
                <View style={style.noticeItemView}>
                    <View style={style.notiveItemTypeView}>
                        <Text style={style.notiveItemTypeText}>{this.state.notice[0].type}</Text>
                    </View>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={style.notiveItemTitle}>{this.state.notice[0].title}</Text>
                </View>
                <View style={style.noticeItemView}>
                    <View style={style.notiveItemTypeView}>
                        <Text style={style.notiveItemTypeText}>{this.state.notice[1].type}</Text>
                    </View>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={style.notiveItemTitle}>{this.state.notice[1].title}</Text>
                </View>
            </View>
        );
    }
}

//首页导航路由
const HomeStack = createStackNavigator({
    Home: HomePage,
    JuHuaSuan: JuHuaSuan
}, {
    //设置默认导航栏样式
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerBackTitle: null
    }
});

//底部导航路由
export default createAppContainer(createBottomTabNavigator({
    首页: HomeStack,
    ShoppingCart: ShappingCart,
    OrderScreen: OrderScreen,
    MineScreen: MineScreen,
    MoreScreen: MoreScreen
}, {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === '首页') {
                iconName = `ios-home${focused
                    ? ''
                    : ''}`;
            } else if (routeName === 'ShoppingCart') {
                iconName = `ios-cart${focused
                    ? ''
                    : ''}`;
            } else if (routeName === 'OrderScreen') {
                iconName = `ios-list-box${focused
                    ? ''
                    : ''}`;
            } else if (routeName === 'MineScreen') {
                iconName = `ios-person${focused
                    ? ''
                    : ''}`;
            } else if (routeName === 'MoreScreen') {
                iconName = `ios-more${focused
                    ? ''
                    : ''}`;
            }

            return <Ionicons name={iconName} size={25} color={tintColor}/>;
        }
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
    }
}));
