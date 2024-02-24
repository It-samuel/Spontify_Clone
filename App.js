import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Constants from "expo-constants";
import RootNav from './Navigations/RootNav';

export default function App() {
  return (
    
      <View style={styles.container}> 
      <RootNav/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  
});
