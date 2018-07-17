import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

export default class Login extends Component{
    handleNextButton() {
        alert('next button pressed');
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField 
                            labelText= "EMAIL ADRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor= {colors.white}
                            borderBottomColor= {colors.white}
                            inputType="email"
                            customStyle = {{ marginBottom: 30 }}
                        />
                        <InputField 
                            labelText= "PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor= {colors.white}
                            borderBottomColor= {colors.white}
                            inputType="password"
                            customStyle = {{ marginBottom: 30 }}
                        />
                    </ScrollView>
                    <View style= {styles.nextButton}>
                        <NextArrowButton
                            handleNextButton= {this.handleNextButton}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green01,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    loginHeader: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    nextButton: {
        alignItems: 'flex-end',
        marginBottom: 20,
        marginRight: 20,
    }
});