import React from 'react'
import { PinIcon } from '../util/icons'
import { StyleSheet, View, Text } from 'react-native'

import UtilityNavButton from './UtiltiyNavButton'

export default class Button extends React.Component {
  render() {
    let bgc, fw, col
    if (this.props.red) {
      bgc = '#B11'
      col = '#FFF'
    } else {
      bgc = '#CECECE'
      fw = 'bold'
      col = '#000'
    }
    return (
      <View style={[styles.PinButton, { backgroundColor: bgc }]}>
        {this.props.icon && (
          <View style={styles.IconSpacer}>
            <PinIcon iconColor="#FFF" />
          </View>
        )}
        <Text style={[styles.PinbuttonText, { fontWeight: fw, color: col }]}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  PinButton: {
    flexDirection: 'row',
    backgroundColor: '#B11',
    borderRadius: 6,
    padding: 8
  },
  IconSpacer: {
    paddingRight: 4
  },
  PinbuttonText: {
    color: '#FFF'
  },
  UtilityButton: {
    backgroundColor: '#CECECE',
    paddingLeft: 16,
    paddingRight: 16
  },
  UtilityButtonText: {
    fontWeight: 'bold',
    color: '#FFF'
  }
})
