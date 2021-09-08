import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as VenidiumIcon } from './images/venidium.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={VenidiumIcon} viewBox="60 0 180 200" {...props} />;
}
