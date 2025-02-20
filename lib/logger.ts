// Logging utility
export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG'
}

export class Logger {
  private static instance: Logger
  private logLevel: LogLevel = LogLevel.INFO

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public setLogLevel(level: LogLevel) {
    this.logLevel = level
  }

  public log(level: LogLevel, message: string, ...optionalParams: any[]) {
    if (this.shouldLog(level)) {
      switch(level) {
        case LogLevel.ERROR:
          console.error(`[${level}]`, message, ...optionalParams)
          break
        case LogLevel.WARN:
          console.warn(`[${level}]`, message, ...optionalParams)
          break
        default:
          console.log(`[${level}]`, message, ...optionalParams)
      }
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const logPriorities = {
      [LogLevel.DEBUG]: 0,
      [LogLevel.INFO]: 1,
      [LogLevel.WARN]: 2,
      [LogLevel.ERROR]: 3
    }

    return logPriorities[level] >= logPriorities[this.logLevel]
  }
}