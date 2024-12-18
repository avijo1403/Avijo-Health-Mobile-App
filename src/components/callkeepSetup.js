import RNCallKeep from "react-native-callkeep";

const setupCallKeep = () => {
  const options = {
    ios: {
      appName: 'YourApp',
    },
    android: {
      alertTitle: 'Permissions Required',
      alertDescription: 'This app needs permission to display calls',
      cancelButton: 'Cancel',
      okButton: 'OK',
    },
  };

  RNCallKeep.setup(options)
    .then(() => console.log('CallKeep setup complete'))
    .catch((error) => console.error('CallKeep setup error:', error));
};

export default setupCallKeep;
