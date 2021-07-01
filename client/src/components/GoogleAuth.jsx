import React from 'react';
class GoogleAuth extends React.Component{
    state = {isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'220274558084-m1d5fvnpuhfks67haeql6eq3eamfe2se.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = ()=>{
        this.setState({ isSignedIn : this.auth.isSignedIn.get() });
    }
    onSignInClick = ()=>{
        this.auth.signIn();
    };
    onSignOutClick = ()=>{
        this.auth.signOut();
    };
    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return (
                <button className="ui loading button">Loading</button>
            );
        }
        else if(this.state.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>SignOut
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignInClick}className="ui primary google button">
                    <i className="google icon"/>
                    SignIn
                </button>
            );
        }
    };
    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}
export default GoogleAuth;