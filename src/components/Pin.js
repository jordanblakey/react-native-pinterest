import React from 'react'
import { PinIcon } from '../util/icons'
import { StyleSheet, View, Text, Image } from 'react-native'

import UtilityNavButton from './UtiltiyNavButton'
import Button from './Button'
import images from '../assets/images'

export default class Pin extends React.Component {
  render() {
    return (
      <View style={styles.PinContainer}>
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <UtilityNavButton icon="Back" />
            <UtilityNavButton icon="Heart" />
            <UtilityNavButton icon="Share" />
            <UtilityNavButton icon="More" />
          </View>

          <View style={styles.PinButtonContainer}>
            <Button red icon text="Save" />
          </View>
        </View>
        <View style={styles.PinContent}>
          <Image style={styles.PinImage} source={images.image1} />
          <Image style={styles.PinImage} source={images.image2} />
          <Image style={styles.PinImage} source={images.image3} />
          <Image
            style={styles.PinImage}
            source={{
              uri:
                'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/472087/472087-1524063226744-d2b97275c0027.jpg'
            }}
          />
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={[styles.PinMetaText, styles.TextBold]}>
              website.com
            </Text>
          </View>

          <View style={styles.PinButtonContainer}>
            <Button text="Visit" />
          </View>
        </View>

        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar} />

          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User Name </Text>
              <Text>saved to </Text>
              <Text style={styles.TextBold}>Space</Text>
            </Text>
            <Text style={styles.PinUserText}>Description: Lorem, ipsum.</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    width: '100%'
  },
  PinHeader: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 90,
    padding: 16
  },
  UtilityNav: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 40
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: '#B11',
    borderRadius: 6,
    padding: 8
  },
  PinbuttonText: {
    color: '#FFF',
    marginLeft: 6
  },
  PinContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 0,
    paddingBottom: 8
  },
  PinImage: {
    flex: 1,
    marginBottom: 8,
    height: 200,
    width: '100%',
    borderRadius: 8
  },
  PinMeta: {
    backgroundColor: '#FFF',
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'row'
  },
  PinMetaTextContainer: {
    flex: 1
  },
  UtilityButton: {
    backgroundColor: '#CECECE',
    paddingLeft: 16,
    paddingRight: 16
  },
  UtilityButtonText: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  PinUserContainer: {},
  PinUser: {
    padding: 16,
    flex: 5,
    flexDirection: 'row'
  },
  PinUserAvatar: {
    backgroundColor: 'none',
    width: 50,
    height: 50,
    backgroundColor: '#EEE',
    borderRadius: 25,
    marginRight: 8
  },
  PinUserText: {},
  TextBold: {
    fontWeight: 'bold'
  }
})
