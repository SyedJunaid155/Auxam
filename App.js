  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */

  import React from 'react';
  import { 
    NavigationContainer, 
    
  } from '@react-navigation/native';
  import RootStack from './screen/RootStack';



  const App= () => {
    
    return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
    );
  };

  

  export default App;
