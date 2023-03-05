type ErrorCodeMessagesType = typeof ERROR_MESSAGES
export type ErrorCodes = keyof ErrorCodeMessagesType

type InformationCodeMessagesType = typeof INFORMATION_MESSAGES
export type InformationCodes = keyof InformationCodeMessagesType

export const INFORMATION_MESSAGES = {
  1: 'プログラムを読み込みました',
} as const
export const ERROR_MESSAGES = {
  1: '実行するプログラムを指定してください！',
  2: 'プログラムの読み込みに失敗しました...',
} as const
