/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './musicPlayerServices';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
// this trackPlayer makes sure that we are able to access the play pause and other functionalities.
TrackPlayer.registerPlaybackService(() => (playbackService));