declare interface SensitiveDataMasker {
    maskSensitiveData(message: string): string;
}
export default SensitiveDataMasker;
