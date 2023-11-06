import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Row from '/Volumes/Data/BennyBoop/Coding/contactsapp/row.js';

const ScrollViewContacts = props => (
  <ScrollView>
    {props.contacts.map(contact => (
      <Row {...contact} />
    ))}
  </ScrollView>
);

ScrollViewContacts.propTypes = {
  contacts: PropTypes.array,
};

export default ScrollViewContacts;
