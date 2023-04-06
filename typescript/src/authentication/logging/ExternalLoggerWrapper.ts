declare class ExternalLoggerWrapper {
  extLogger: any;

  constructor(externalLogger: any);

  getLogger(): any;
  isLoggerEmpty(): boolean;
}

export default ExternalLoggerWrapper;
