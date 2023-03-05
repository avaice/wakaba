import { ErrorCodes, ERROR_MESSAGES, InformationCodes, INFORMATION_MESSAGES } from './codes'

export const Engine = {
  message: (message: string) => {
    console.log(message)
  },
  fatalError: (message: string | ErrorCodes) => {
    if (typeof message === 'number') {
      console.error('\x1b[31mError: ' + ERROR_MESSAGES[message] + '\x1b[0m')
    } else {
      console.error('\x1b[31mError: ' + message + '\x1b[0m')
    }

    process.exit(0)
  },
  informationMessage: (message: string | InformationCodes) => {
    if (typeof message === 'number') {
      console.log('\x1b[36m' + INFORMATION_MESSAGES[message] + '\x1b[0m')
    } else {
      console.log('\x1b[36m' + message + '\x1b[0m')
    }
  },
}
