# React Native Dimensions.get() returns undefined

This repository demonstrates a common issue in React Native where `Dimensions.get('window')` or `Dimensions.get('screen')` returns `undefined` unexpectedly. This can lead to crashes or layout inconsistencies.

The solution provided uses `useEffect` and `useState` to handle the asynchronous nature of `Dimensions` and provide a reliable way to get screen dimensions.