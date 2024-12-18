import Sound from 'react-native-sound';

let ringtone;

export const loadRingtone = () => {
  ringtone = new Sound('ringtone.wav', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load ringtone:', error);
    }
  });
};

export const playRingtone = () => {
    console.log('play...');
  if (ringtone) {
    ringtone.setNumberOfLoops(-1); // Loop indefinitely
    ringtone.play();
  }
};

export const stopRingtone = () => {
  if (ringtone) {
    ringtone.stop();
  }
};
