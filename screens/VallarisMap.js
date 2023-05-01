import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';


MapLibreGL.setAccessToken(null);
const coordinateKhonKaenIbitz = [102.819290, 16.455639]
const coordinateKhonKaen = [102.819866, 16.453469]


const VallarisMap = () => {
  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        styleURL="https://cloud.vallarismaps.com/core/api/styles/1.0-beta/styles/644d5d84dd1b612ec5c94fcc?api_key=yzEMEZPZZPyMfpJb55aIM7H28dycwjV1yuwZDToEBD3efYixP5XAG32a2YmbUyUy"
        centerCoordinate={coordinateKhonKaenIbitz}
        zoomEnabled

      >

        <MapLibreGL.Camera
          zoomLevel={13}
          centerCoordinate={coordinateKhonKaenIbitz}
        />
        <MapLibreGL.PointAnnotation
          key="marker1"
          id="marker1"
          coordinate={coordinateKhonKaenIbitz}>
        </MapLibreGL.PointAnnotation>
    
      </MapLibreGL.MapView>

    </View>
  );
};

export default VallarisMap;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

