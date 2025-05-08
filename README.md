> [!WARNING]
> **This branch no longer be updated. Currenly we are working in `master` branch. You can take attention on `master` branch for bot update.**
> 
> Thank you

<div align="center">
	<img style="margin-bottom: 20px" src="https://i.ibb.co/Y7y2gjm/Frame-1-3.png" alt="sad" width="250" height="250"/>
    <br>
	<div>
		<img src="https://img.shields.io/github/issues/rzkytmgr/WhatsApp-Bot">
		<img src="https://img.shields.io/github/stars/rzkytmgr/WhatsApp-Bot">
		<img src="https://img.shields.io/github/stars/rzkytmgr/WhatsApp-Bot">
		<img src="https://img.shields.io/github/forks/rzkytmgr/WhatsApp-Bot?label=Forks">
	</div>
    <br>
    <div align="center">
        <h3>
            Donate
        </h3>
        <span>🎉 
        	<a href="https://trakteer.id/ruzky/">
            Trakteer.id
        </a>
            🎉 
        </span>
        <br>
        <span>🎊
        <a href="https://saweria.co/rzkytmgr">
            Saweria.co
        </a>
            🎊
        </span>
	<br>
	<span>🎉
        <a href="https://paypal.me/rzkytmgr">
            Paypal
        </a>
            🎉
        </span>
    </div>
</div>

**Jump to :**

- [Guide](#guide)
- [Features](#features)
- [Troubleshoting](#troubleshoting)
- [Contributors](#contributors)
- [References](#references)

---

**WhatsApp-Bot** **(SadBot)** - This section will explain to you and guide you what you must do before using this _nodejs_ bot on your local computer, show you all bot features, troubleshooting, etc.

**Make an issue when you have a problem or found a bug when using this bot**

---

## Guide

**_Requirements :_**

- Node.Js >= 12.18.3
- [ffmpeg](https://ffmpeg.org/)
- Google Chrome

Step by step to start the bot :

1. Clone this repositry

   `git clone https://github.com/rzkytmgr/WhatsApp-Bot`

2. Enter the directory

   `cd WhatsApp-Bot`

3. Open directory with your favorit code editor, then Change the [settings.js](https://github.com/rzkytmgr/WhatsApp-Bot/blob/master/settings.js) code

   - [prefix](https://github.com/rzkytmgr/WhatsApp-Bot/blob/d3aa0452ffd22d43b71cc6fae94122769f47d3dd/settings.js#L2) - prefix bot commands _(default : !)_
   - [owner](https://github.com/rzkytmgr/WhatsApp-Bot/blob/d3aa0452ffd22d43b71cc6fae94122769f47d3dd/settings.js#L3) - owner bot number
   - [support](https://github.com/rzkytmgr/WhatsApp-Bot/blob/d3aa0452ffd22d43b71cc6fae94122769f47d3dd/settings.js#L4) - bot group support

4. change path to your ffmpeg bin on [./lib/function/youtube.js on line 23](https://github.com/rzkytmgr/WhatsApp-Bot/blob/d3aa0452ffd22d43b71cc6fae94122769f47d3dd/lib/function/youtube.js#L23)

   ```javascript
   const downloadOptions = {
     ffmpegPath: '/usr/bin/ffmpeg', // change this to your ffmpeg bin path
     // ...code here
   };
   ```
   
5. Install all packages

   `npm install`

6. After all configuration finished, now start the bot

   `npm start`

7. Scan QR code with you phone. done!

**Summary :**

```bash
$ git clone https://github.com/rzkytmgr/WhatsApp-Bot
$ cd WhatsApp-Bot
$ npm install
$ npm start
```

## Features

All features/Bot Commands

_Default prefix :_ !

**Bot Owner Commands :**

|  Commands   | Status |                 Description                 |
| :---------: | :----: | :-----------------------------------------: |
| !resetlimit |   OK   |          *https://bit.ly/34IDvrD*           |
|  !unblock   |   OK   |             Unblockir bot user              |
|  !leaveall  |   OK   |            Leave all bot groups             |
| !resetrank  |   OK   |          *https://bit.ly/34IDvrD*           |
|  !clearall  |   OK   |              Clear all message              |
|     !bc     |   OK   | Broadcast to all bot contact include groups |
|  !premium   |   OK   |          *https://bit.ly/34IDvrD*           |
|    !ban     |   OK   |          *https://bit.ly/34IDvrD*           |
| !freespace  |   OK   |          *https://bit.ly/34IDvrD*           |

**Group Owner Commands :**

| Commands | Status |         Description         |
| :------: | :----: | :-------------------------: |
| !kickall |   OK   | Kick all members on a group |
|  !start  |   OK   |  *https://bit.ly/34IDvrD*   |

**Group Admin Commands :**

|  Commands  | Status |       Description        |
| :--------: | :----: | :----------------------: |
|   !toxic   |   OK   | *https://bit.ly/34IDvrD* |
|    !add    |   OK   |    add a member group    |
|   !kick    |   OK   |   kick a member group    |
|  !promote  |   OK   |  promote a member group  |
|  !demote   |   OK   |  demote an admin group   |
|  !revoke   |   OK   | revoke group invite link |
|   !link    |   OK   |  get group invite link   |
| !startvote |   OK   | *https://bit.ly/34IDvrD* |

**Group Member Commands :**

|  Commands   | Status |              Description               |
| :---------: | :----: | :------------------------------------: |
|    !ping    |   OK   |    Tag all members on related group    |
|  !votekick  |   OK   |        *https://bit.ly/34IDvrD*        |
|  !voteinfo  |   OK   |        *https://bit.ly/34IDvrD*        |
|    !vote    |   OK   |        *https://bit.ly/34IDvrD*        |
|  !matchme   |   OK   |       Match random member to you       |
| !groupstats |   OK   |            Get Group stats             |
|   !kickme   |   OK   |   Kick someone who use this command    |
|  !mystats   |   OK   | Get someone stats who use this command |
|    !rob     |   OK   |        *https://bit.ly/34IDvrD*        |
|  !richman   |   OK   |        *https://bit.ly/34IDvrD*        |
|    !pick    |   OK   |    Pick random guy on related group    |

**General Commands (Personal/Group Message) :**

|    Commands    |   Status    |                Description                |
| :------------: | :---------: | :---------------------------------------: |
|     !voice     |     OK      |              Text to speech               |
|     !menu      |     OK      |                 Show menu                 |
|     !rules     |     OK      |              Show Bot Rules               |
|    !donate     |     OK      |                Show Donate                |
|   !quranayat   |     OK      |            Get Qur'an digital             |
|  !quransurah   |     OK      |          Get All Ayah in a Surah          |
|   !murottal    |     OK      |           Get Qur'an Ayah Audio           |
|    !tafsir     |     OK      |             Get Qur'an Tafsir             |
|    !quotes     | Coming soon |                     -                     |
|   !makequote   |     OK      |            Make a image quote             |
|     !mirip     |     OK      |                     -                     |
|      !gay      |     OK      |            Get g\*y percentage            |
|    !brainly    |     OK      |          Get answer from bainly           |
|    !sticker    |     OK      |         Convert image to sticker          |
|  !gifsticker   |     OK      |      Convert video.mp4 to Gif Stiker      |
| !giphysticker  |     OK      |          Convert giphy to Stiker          |
|     !bucin     |     OK      |              Get SIMP quote               |
|     !jodoh     |     OK      |            Get Love percentage            |
|     !hitme     |     OK      |         *https://bit.ly/34IDvrD*          |
|    !hitrank    |     OK      |         *https://bit.ly/34IDvrD*          |
|     !music     |     OK      |     Get music via Voice from Youtube      |
|  !downtiktok   | Coming soon |                     -                     |
|  !downtwitter  | Coming soon |                     -                     |
| !downfacebook  | Coming soon |                     -                     |
| !downinstagram | Coming soon |                     -                     |
|    !lyrics     |     OK      |          Finding for song lyrics          |
|     !short     |     OK      |               URL shortener               |
|     !covid     |     OK      |               Covid-19 Info               |
|      !cat      |     OK      |            Random cat pictures            |
|      !dog      |     OK      |            Random dog pictures            |
|     !meme      |     OK      |                Random meme                |
|     !anime     |     OK      |             Finding for anime             |
|  !stickernobg  | Coming Soon |                     -                     |
| !stickertotext |     OK      |          Convert text to sticker          |
|     !wiki      |     OK      |                 Wiki info                 |
|  !imagequote   |     OK      |            Random image quote             |
|     !join      |     OK      | Automatically bot will join to your group |
|     !roll      |     OK      |                 Roll dice                 |
|    !weather    |     OK      |             Get weather info              |
|     !movie     |     OK      |             Get a movie info              |

[Read all detail commands here!](https://github.com/rzkytmgr/WhatsApp-Bot/wiki/[GUIDE]-Using-Bot-Features)

## Troubleshoting

You can read all troubleshoting here, [Puppeteer Troubleshooting](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md)

## Contributors

<div>
	<a>
    <img src="https://avatars2.githubusercontent.com/u/56517576?s=100&u=aa7f0603549acb258d8e5f02f67c239821b31c74&v=4">
    </a>
</div>

Read [CONTRIBUTING.md](https://github.com/rzkytmgr/WhatsApp-Bot/blob/master/CONTRIBUTING.md) to start make Pull request, Thanks to all contributors.

## References

- [@open-wa](https://open-wa.github.io/wa-automate-nodejs/)
