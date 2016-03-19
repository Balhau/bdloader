## BDLoader


### What is this?

This is a [chrome extension](https://en.wikipedia.org/wiki/Google_Chrome_extension) to automate the downloading of resources. For now the only service integrated is the downloading of [youtube videos](https://www.youtube.com). This is a component that sends the links for a [python flask](http://flask.pocoo.org/) service called [omxclient](http://git.balhau.net/omxpiclient.git) which do the work of downloading the resources and save them in a local [samba](https://en.wikipedia.org/wiki/Server_Message_Block) shared folder.


### On the name

BDLoader is the shortname for Balhau Downloader. Which was the first idea for the development of this extension. However the name is now a little bit mis-representative of the extension because it already does some more things


### Torrents start/stop

The last feature added to this extension is the possibility to start and stop the torrent service.

### Future improvements

Currently the services invoked to start and stop the torrent daemon as well as the downloader service are hard coded in the extension source code. Would be very nice to give the possibility to setup this configurations with a GUI for that purpose and store it with the chrome extension storage API.
