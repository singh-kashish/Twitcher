# Twitcher

# React App with Redux/Redux-Thunk, Google OAuth, OBS Streaming

- If you are new or kind of new to React I highly recommend it, at least read the description to see what's in it, I did learn some stuff

## The App consists of :

streams\api - It contains JsonPlaceHolder Api REST server which is used as a database to implement CRUD functionality.

streams\client - It contains the React/Redux side of components of the app
(Note:  Google Authorization  gives access to Create, Edit and Delete , without logging in a person can view a stream from the stream list)

streams\rtmpserver - It  the stream from OBS Studio

## Dependencies apart from Node Modules

OBS Studio - open source for video streaming and recording

Google APIs - only for signin with 'gapi.auth2'

## To enable the client with Google login

Create a new project at console.developers.google.com or use an existing one if you have
Set your client id at property "clientId" (found at the beginning of the GoogleAuth component ~row 37)

I use Yarn package manager but npm would work also.

Run 'yarn install' to fetch node modules
Then 'yarn start' to run the project

_Use Chrome and the add on "redux dev tools" to debug the redux state_

## To enable the api (saving and fetching data)

Start the api server (json-server) in a console
: streams\api> yarn start
(there are some streams in the "database" already, you can remove them by editing the file api\db.json )

## To enable streaming

Start the rtmp server (node-media-server) in a console
: streams\rtmpserver> yarn start

If not installed, Install OBS Studio - https://obsproject.com/
Create a streaming scene

- then a Source for display
- and audio if you want

Change settings for stream - File/Settings/Stream

- URL = rtmp://localhost/live
- Stream key = 1
  -- note, the stream key must match the id of the stream in the client,
  example: http://localhost:3000/streams/id
  would match with stream key id which can be looked upon from the url

Start streaming (note, you must have started the media server)

## ScreenShots :
- HomePage
  ![image](https://user-images.githubusercontent.com/54403943/124511491-e85afa80-ddf3-11eb-9ca6-d412be78d8fb.png)
- Create New Stream
  ![create](https://user-images.githubusercontent.com/54403943/124510727-17706c80-ddf2-11eb-9567-2104e3151e53.png)
- Delete a Stream
  ![delete](https://user-images.githubusercontent.com/54403943/124511187-2c99cb00-ddf3-11eb-8a15-86000f5e86d1.png)
- Edit a Stream Details
  ![edit](https://user-images.githubusercontent.com/54403943/124511237-476c3f80-ddf3-11eb-9eaf-8855e58ab283.png)
- Running Streams
  ![stream2](https://user-images.githubusercontent.com/54403943/124511555-104a5e00-ddf4-11eb-89ad-4082c6513d15.jpg)
  ![stream1](https://user-images.githubusercontent.com/54403943/124511557-12acb800-ddf4-11eb-8854-dfbab8180a1c.png)
