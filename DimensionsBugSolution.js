import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  if (!windowDimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Window Width: {windowDimensions.width}</Text>
      <Text>Window Height: {windowDimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;