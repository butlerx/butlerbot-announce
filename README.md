# butlerbot-announce

announce plugin for butlerbot


## Install

```sh
yarn add butlerbot-announce
```
Create a file in the plugin dir as follows

```js
import announce from 'butlerbot-announce';

export default announce({
  production: {
    waitTime: 1,
    channelsToJoin: [],
    baseUrl: 'https://www.redbrick.dcu.ie/api/',
  },

  development: {
    waitTime: 1,
    channelsToJoin: ['#botdev'],
    baseUrl: 'https://www.redbrick.dcu.ie/api/',
  },
});
```
