import React from 'react';
import styles from "./dyanmic-title.module.scss";
import { DyanmicTitleType } from './dyanmic-title.type';

export const DynamicTitle: React.FC<DyanmicTitleType> = (props) => {
  const { tag = 'div', text } = props;

  const className = styles[tag] || '';

  return React.createElement(tag, {className}, text);
};