declare interface Token {
    signature: string;
    signedFields: string;
}
declare class TokenVerification {
    verifyToken(publicKey: string | any, token: Token): boolean;
}
export default TokenVerification;
