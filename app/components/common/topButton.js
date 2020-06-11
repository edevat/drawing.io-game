import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { connect } from 'react-redux';

class TopButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={this.props.icon}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2.5, 
        marginVertical: 8, 
        height: 30, 
        width: 30,
    },
    icon: {
        height: 30, 
        width: 30,
    }
});

const mapStateToProps = state => {
    return {
    };
};


export default connect(mapStateToProps,
    {
    })(TopButton);
