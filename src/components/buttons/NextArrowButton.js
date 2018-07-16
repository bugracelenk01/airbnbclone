import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class NextArrowButton extends Component{
    render() {
        const { handleNextButton } = this.props;
        return(
            <TouchableOpacity 
                style={styles.button}
                onPress={handleNextButton}
            >
                <Icon 
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableOpacity>
        );
    }
}

NextArrowButton.propTypes= {
    handleNextButton: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: colors.white
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    }
});
