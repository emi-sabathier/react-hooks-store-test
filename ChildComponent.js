import React from 'react';
import {View, Text, Button} from 'react-native';
import {useStore} from './store/store';

export default function ChildComponent() {
    const {state, dispatch} = useStore();

    console.log(state);
    return (
        <View>
            <Button title="ADD" onPress={() => dispatch({
                type: 'ADD', payload: {id:1},
            })}/>
            <Button title="DELETE" onPress={() => dispatch({
                type: 'DELETE', payload: {id:1},
            })}/>
            <Button title="reset" onPress={() => dispatch({type: 'RESET', message: 'on reset'})}/>
        </View>
    );
}
