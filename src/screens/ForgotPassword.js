import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Loader from '../components/Loader';

export default class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state= {
            formValid: true,
            validEmail: false,
            emailAdress: '',
            validPassword: false,
            loadingVisible: false,
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }
    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({ emailAdress: email})
        
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({ validEmail: true });
            }
            else{
                if(!emailCheckRegex.test(email)){
                    this.setState({ validEmail: false });
                }
            }
        }
    }
    goToNextStep() {
        this.setState({ loadingVisible: true });

        setTimeout(() => {
            if(this.state.emailAdress === 'hello@gmail.com') {
                this.setState({ formValid: true, loadingVisible: false });
            } else {
                this.setState({ formValid: false, loadingVisible: false });
            }
        }, 2000);
    }
    handleCloseNotification(){
        this.setState({ formValid: true });
    }
    render(){
        const { validEmail, loadingVisible, formValid } = this.state;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const showNotification = formValid ? false : true;
        return(
            <KeyboardAvoidingView 
            style={[{backgroundColor: background}, styles.wrapper]}
            behavior="padding"
            >
                <View style={styles.form}>
                    <Text style={styles.forgotPasswordHeading}>Forgot your password ?</Text>
                    <Text style={styles.forgotPasswordSubheading}>Enter your email to find your account.</Text>
                    <InputField
                    textColor={colors.white}
                    labelText="EMAILD ADDRESS"
                    labelTextSize={14}
                    labelColor={colors.white}
                    borderBottomColor={colors.white}
                    inputType="email"
                    onChangeText={this.handleEmailChange}
                    showCheckmark={validEmail}
                    />
                </View>
                <View style={styles.nextButtonWrapper}>
                    <NextArrowButton
                    handleNextButton = {this.goToNextStep}
                    disabled={!validEmail}
                    />
                </View>
                <View style={styles.notificationWrapper}>
                    <Notification 
                    showNotification={showNotification}
                    handleCloseNotification={this.handleCloseNotification}
                    type="Error"
                    firstLine="No account exists for the requested"
                    secondLine="email address."
                    />
                </View>
                <Loader 
                modalVisible={loadingVisible}
                animationType="fade"
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flex: 1,
    },
    form:{
        marginTop:60,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
    },
    forgotPasswordHeading: {
        fontSize: 28,
        color:colors.white,
        fontWeight: '300',
    },
    forgotPasswordSubheading:{
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60,
    },
    nextButtonWrapper: {
        alignItems: 'flex-end',
        bottom: 20,
        right: 20,
        position: 'absolute'
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
    }
});