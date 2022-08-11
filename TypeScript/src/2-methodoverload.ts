// 实现函数重载
type MessageType = 'image' | 'audio' | string

type Message = {
  id: number,
  type: MessageType,
  sendMessage: string
}

let messages: Message[] = [
  {
    id: 1, type: 'image', sendMessage: '学好JavaScript'
  },
  {
    id: 2, type: 'image', sendMessage: '学好TypeScript'
  },
  {
    id: 3, type: 'audio', sendMessage: '学好Vue'
  },
  {
    id: 4, type: 'audio', sendMessage: '学好React'
  },
  {
    id: 5, type: 'audio', sendMessage: '学好Node.js'
  }
]
// 重载签名1
function getMessages(value: number): Message
// 重载签名2
function getMessages(value: MessageType): Message[]
// 实现签名
function getMessages(value: number | MessageType): Message | undefined | Message[] {
  if(typeof value === 'number') {
    return messages.find((msg) => { return value === msg.id})
  } else {
    return messages.filter((msg) => { return value === msg.type})
  }
}

console.log(getMessages(1))
console.log(getMessages('image'))