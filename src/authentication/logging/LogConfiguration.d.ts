import ExternalLoggerWrapper from './ExternalLoggerWrapper';
declare class LogConfiguration {
    enableLog: boolean;
    logDirectory: string;
    logFileName: string;
    logFileMaxSize: number;
    loggingLevel: string;
    maxLogFiles: number;
    enableMasking: boolean;
    hasExternalLogger: boolean;
    externalLogger?: ExternalLoggerWrapper;
    constructor(logConfig: Partial<LogConfiguration>);
    isLogEnabled(): boolean;
    setLogEnable(enableLogValue: boolean): void;
    isMaskingEnabled(): boolean;
    setMaskingEnabled(enableMaskingValue: boolean): void;
    isExternalLoggerSet(): boolean;
    setHasExternalLogger(hasExternalLogger: boolean): void;
    getExternalLogger(): ExternalLoggerWrapper | undefined;
    setExternalLogger(externalLogger: ExternalLoggerWrapper): void;
    getLogDirectory(): string;
    setLogDirectory(logDirectoryValue: string): void;
    getLogFileName(): string;
    setLogFileName(logFileNameValue: string): void;
    getLogFileMaxSize(): number;
    setLogFileMaxSize(logFileMaxSizeValue: number): void;
    getLoggingLevel(): string;
    setLoggingLevel(loggingLevelValue: string): void;
    getMaxLogFiles(): number;
    setMaxLogFiles(maxLogFilesValue: number): void;
    getDefaultLoggingProperties(warningMessage: string): any;
}
export default LogConfiguration;
