import Announce from './app/controllers/announce';

export default config => (app) => {
  const announce = new Announce(app.client, config);
  app.joinChannels(announce.config.channelsToJoin);
};
