import React from 'react';

const fetchAPI = async (setData, url, options) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return setData(json);
  } catch (error) {
    console.log('Um erro ocorreu');
  }
};

export default fetchAPI;
