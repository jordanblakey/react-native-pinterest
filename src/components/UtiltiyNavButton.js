import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Back, Heart, Share, More } from '../util/icons'

export default class UtiltiyNavButton extends Component {
  render() {
    switch (this.props.icon) {
      case 'Back':
        return <Back iconColor="#B11" />
      case 'Heart':
        return <Heart iconColor="#B11" />
      case 'Share':
        return <Share iconColor="#B11" />
      case 'More':
        return <More iconColor="#B11" />
      default:
        return 'No Icon'
    }
  }
}
