    import React from 'react'
    import MapView from 'react-native-maps'
    import { StyleSheet, Dimensions } from 'react-native'

    const height = Dimensions.get('window').height
    const lat = 55.692438504735314;
    const lon = 37.492512737475494;
    
//<MapView.Marker
      //  coordinate={{
      //    latitude: null,
      //    longitude: null,
     //   }}
     //   title={'Titie'}
      //  />

    const Map = () => {
      return (
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: 55.692438504735314,
            longitude: 37.492512737475494,
            latitudeDelta: 0.15,
            longitudeDelta: 0.121,
          }}
          showsUserLocation={true}
        >
        
        </MapView>
      )
    }

    const styles = StyleSheet.create({
      map: {
        height
      }
    })

    export default Map