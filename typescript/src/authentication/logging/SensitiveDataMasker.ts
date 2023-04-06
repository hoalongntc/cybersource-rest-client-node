declare interface SensitiveDataMasker {
  maskSensitiveData(message: string): string;
}

const sensitiveDataMasker: SensitiveDataMasker = null;

export default sensitiveDataMasker;
