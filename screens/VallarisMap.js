import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        
        <MapLibreGL.MapView
          style={styles.map}
          logoEnabled={false}
          styleURL="https://cloud.vallarismaps.com/core/api/styles/1.0-beta/styles/644cd090609b85fc14181f66?api_key=yzEMEZPZZPyMfpJb55aIM7H28dycwjV1yuwZDToEBD3efYixP5XAG32a2YmbUyUy"
        />
      </View>
    );
  }
}