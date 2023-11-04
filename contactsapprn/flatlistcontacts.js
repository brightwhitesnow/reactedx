import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Row from '/Volumes/Data/BennyBoop/Coding/contactsapprn/row.js';

const renderItem = ({item}) => <Row {...item} />;
const FlatListContacts = props => (
  <FlatList renderItem={renderItem} data={props.contacts} />
);

FlatListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default FlatListContacts;
