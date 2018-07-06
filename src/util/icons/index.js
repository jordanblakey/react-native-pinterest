import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

const Back = props => (
  <Ionicons
    className="vectorIcon"
    name="ios-arrow-back"
    size={36}
    color={props.iconColor}
  />
)
const Heart = props => (
  <Ionicons
    className="vectorIcon"
    name="ios-heart"
    size={36}
    color={props.iconColor}
  />
)
const Share = props => (
  <Ionicons
    className="vectorIcon"
    name="ios-send"
    size={36}
    color={props.iconColor}
  />
)
const More = props => (
  <Ionicons
    className="vectorIcon"
    name="ios-more"
    size={36}
    color={props.iconColor}
  />
)
const PinIcon = props => (
  <FontAwesome
    className="vectorIcon"
    name="map-pin"
    size={16}
    color={props.iconColor}
  />
)

export { Back, Heart, Share, More, PinIcon }
