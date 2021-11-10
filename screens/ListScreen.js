import * as React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default class RecipeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          api: '',

        };
      }

    getAPIvalue = () =>{
        this.setState({
            api: this.props.navigation.getParam('api')
        })
    }

    componentDidMount = () =>{
        this.getAPIvalue();
    }

    render() {
        return (
            <View>
                <Text>{this.state.api}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})