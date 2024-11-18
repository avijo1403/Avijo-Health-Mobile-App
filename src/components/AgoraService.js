import AgoraRTC from 'agora-rtc-sdk-ng';

const APP_ID = 'd19a9bdbb20e41dc8fad2ff7fe7f3d34';

class AgoraService {
  constructor() {
    this.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    this.localTracks = {
      videoTrack: null,
      audioTrack: null,
    };
    this.remoteUsers = new Map();
  }

  async join(channel, token, uid) {
    await this.client.join(APP_ID, channel, token, uid);

    this.localTracks.videoTrack = await AgoraRTC.createCameraVideoTrack();
    this.localTracks.audioTrack = await AgoraRTC.createMicrophoneAudioTrack();

    await this.client.publish(Object.values(this.localTracks));

    this.client.on('user-published', (user, mediaType) => {
      this.client.subscribe(user, mediaType).then(() => {
        if (mediaType === 'video') {
          const remoteVideoTrack = user.videoTrack;
          this.remoteUsers.set(user.uid, remoteVideoTrack);
        }
        if (mediaType === 'audio') {
          // Handle remote audio track
        }
      });
    });

    this.client.on('user-unpublished', (user) => {
      this.remoteUsers.delete(user.uid);
    });
  }

  leave() {
    for (let trackName in this.localTracks) {
      let track = this.localTracks[trackName];
      if (track) {
        track.stop();
        track.close();
        this.localTracks[trackName] = null;
      }
    }

    this.client.leave();
    this.remoteUsers.clear();
  }
}

export default new AgoraService();
