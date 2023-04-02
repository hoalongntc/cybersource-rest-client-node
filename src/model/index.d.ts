import localVarRequest from 'request';
import http from 'http';
import { ApiClient } from '../ApiClient';
import { MerchantConfig } from '../authentication/core/MerchantConfig';
export declare class AccessTokenResponse {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    refresh_token_expires_in: number;
    client_status: string;
}
export declare class BadRequestError {
    error?: string;
    error_description?: string;
}
export declare class CreateAccessTokenRequest {
    constructor(clientId: string, clientSecret: string);
    'client_id': string;
    'client_secret': string;
    'grant_type'?: string;
    'code'?: string;
    'refresh_token'?: string;
}
export declare class ResourceNotFoundError {
    error?: string;
    error_description?: string;
}
export declare class UnauthorizedClientError {
    error?: string;
    error_description?: string;
}
export declare class AddNegativeListRequest {
    'orderInformation'?: Riskv1liststypeentriesOrderInformation;
    'paymentInformation'?: Riskv1liststypeentriesPaymentInformation;
    'clientReferenceInformation'?: Riskv1liststypeentriesClientReferenceInformation;
    'deviceInformation'?: Riskv1liststypeentriesDeviceInformation;
    'riskInformation'?: Riskv1liststypeentriesRiskInformation;
    'buyerInformation'?: Riskv1liststypeentriesBuyerInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AuthReversalRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidreversalsClientReferenceInformation;
    'reversalInformation'?: Ptsv2paymentsidreversalsReversalInformation;
    'processingInformation'?: Ptsv2paymentsidreversalsProcessingInformation;
    'orderInformation'?: Ptsv2paymentsidreversalsOrderInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsidreversalsPointOfSaleInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Body {
    'requestor': string;
    'parsedTagLimit'?: number;
    'emvDetailsList': Array<Tssv2transactionsemvTagDetailsEmvDetailsList>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CapturePaymentRequest {
    'clientReferenceInformation'?: Ptsv2paymentsClientReferenceInformation;
    'processingInformation'?: Ptsv2paymentsidcapturesProcessingInformation;
    'paymentInformation'?: Ptsv2paymentsidcapturesPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidcapturesOrderInformation;
    'buyerInformation'?: Ptsv2paymentsidcapturesBuyerInformation;
    'deviceInformation'?: Ptsv2paymentsidcapturesDeviceInformation;
    'merchantInformation'?: Ptsv2paymentsidcapturesMerchantInformation;
    'aggregatorInformation'?: Ptsv2paymentsidcapturesAggregatorInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsidcapturesPointOfSaleInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'installmentInformation'?: Ptsv2paymentsidcapturesInstallmentInformation;
    'travelInformation'?: Ptsv2paymentsTravelInformation;
    'promotionInformation'?: Ptsv2paymentsPromotionInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CheckPayerAuthEnrollmentRequest {
    'clientReferenceInformation'?: Riskv1decisionsClientReferenceInformation;
    'orderInformation'?: Riskv1authenticationsOrderInformation;
    'paymentInformation'?: Riskv1authenticationsPaymentInformation;
    'processingInformation'?: Riskv1authenticationsetupsProcessingInformation;
    'tokenInformation'?: Riskv1authenticationsetupsTokenInformation;
    'buyerInformation'?: Riskv1authenticationsBuyerInformation;
    'deviceInformation'?: Riskv1authenticationsDeviceInformation;
    'merchantInformation'?: Riskv1decisionsMerchantInformation;
    'acquirerInformation'?: Ptsv2paymentsAcquirerInformation;
    'recurringPaymentInformation'?: Ptsv2paymentsRecurringPaymentInformation;
    'consumerAuthenticationInformation'?: Riskv1decisionsConsumerAuthenticationInformation;
    'riskInformation'?: Riskv1authenticationsRiskInformation;
    'travelInformation'?: Riskv1authenticationsTravelInformation;
    'merchantDefinedInformation'?: Array<Riskv1decisionsMerchantDefinedInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateAdhocReportRequest {
    'organizationId'?: string;
    'reportDefinitionName'?: string;
    'reportFields'?: Array<string>;
    'reportMimeType'?: string;
    'reportName'?: string;
    'timezone'?: string;
    'reportStartTime'?: Date;
    'reportEndTime'?: Date;
    'reportFilters'?: Reportingv3reportsReportFilters;
    'reportPreferences'?: Reportingv3reportsReportPreferences;
    'groupName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateBundledDecisionManagerCaseRequest {
    'clientReferenceInformation'?: Riskv1decisionsClientReferenceInformation;
    'processorInformation'?: Riskv1decisionsProcessorInformation;
    'processingInformation'?: Riskv1decisionsProcessingInformation;
    'paymentInformation'?: Riskv1decisionsPaymentInformation;
    'orderInformation': Riskv1decisionsOrderInformation;
    'buyerInformation'?: Riskv1decisionsBuyerInformation;
    'deviceInformation'?: Riskv1decisionsDeviceInformation;
    'riskInformation'?: Riskv1decisionsRiskInformation;
    'travelInformation'?: Riskv1decisionsTravelInformation;
    'merchantDefinedInformation'?: Array<Riskv1decisionsMerchantDefinedInformation>;
    'merchantInformation'?: Riskv1decisionsMerchantInformation;
    'acquirerInformation'?: Ptsv2paymentsAcquirerInformation;
    'recurringPaymentInformation'?: Ptsv2paymentsRecurringPaymentInformation;
    'consumerAuthenticationInformation'?: Riskv1decisionsConsumerAuthenticationInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateCreditRequest {
    'clientReferenceInformation'?: Ptsv2paymentsClientReferenceInformation;
    'processingInformation'?: Ptsv2creditsProcessingInformation;
    'paymentInformation'?: Ptsv2paymentsidrefundsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidrefundsOrderInformation;
    'buyerInformation'?: Ptsv2paymentsidcapturesBuyerInformation;
    'deviceInformation'?: Ptsv2paymentsidcapturesDeviceInformation;
    'merchantInformation'?: Ptsv2paymentsidrefundsMerchantInformation;
    'aggregatorInformation'?: Ptsv2paymentsidcapturesAggregatorInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsPointOfSaleInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'installmentInformation'?: Ptsv2creditsInstallmentInformation;
    'travelInformation'?: Ptsv2paymentsTravelInformation;
    'promotionInformation'?: Ptsv2paymentsPromotionInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateInvoiceRequest {
    'customerInformation'?: Invoicingv2invoicesCustomerInformation;
    'invoiceInformation'?: Invoicingv2invoicesInvoiceInformation;
    'orderInformation'?: Invoicingv2invoicesOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateP12KeysRequest {
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<Kmsv2keysasymKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreatePaymentRequest {
    'clientReferenceInformation'?: Ptsv2paymentsClientReferenceInformation;
    'processingInformation'?: Ptsv2paymentsProcessingInformation;
    'issuerInformation'?: Ptsv2paymentsIssuerInformation;
    'paymentInformation'?: Ptsv2paymentsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsOrderInformation;
    'buyerInformation'?: Ptsv2paymentsBuyerInformation;
    'recipientInformation'?: Ptsv2paymentsRecipientInformation;
    'deviceInformation'?: Ptsv2paymentsDeviceInformation;
    'merchantInformation'?: Ptsv2paymentsMerchantInformation;
    'aggregatorInformation'?: Ptsv2paymentsAggregatorInformation;
    'consumerAuthenticationInformation'?: Ptsv2paymentsConsumerAuthenticationInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsPointOfSaleInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'installmentInformation'?: Ptsv2paymentsInstallmentInformation;
    'travelInformation'?: Ptsv2paymentsTravelInformation;
    'healthCareInformation'?: Ptsv2paymentsHealthCareInformation;
    'promotionInformation'?: Ptsv2paymentsPromotionInformation;
    'tokenInformation'?: Ptsv2paymentsTokenInformation;
    'invoiceDetails'?: Ptsv2paymentsInvoiceDetails;
    'processorInformation'?: Ptsv2paymentsProcessorInformation;
    'riskInformation'?: Ptsv2paymentsRiskInformation;
    'acquirerInformation'?: Ptsv2paymentsAcquirerInformation;
    'recurringPaymentInformation'?: Ptsv2paymentsRecurringPaymentInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateReportSubscriptionRequest {
    'organizationId'?: string;
    'reportDefinitionName': string;
    'reportFields': Array<string>;
    'reportMimeType': string;
    'reportFrequency': string;
    'reportInterval'?: string;
    'reportName': string;
    'timezone': string;
    'startTime': string;
    'startDay'?: number;
    'reportFilters'?: {
        [key: string]: Array<string>;
    };
    'reportPreferences'?: Reportingv3reportsReportPreferences;
    'groupName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSearchRequest {
    'save'?: boolean;
    'name'?: string;
    'timezone'?: string;
    'query'?: string;
    'offset'?: number;
    'limit'?: number;
    'sort'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSharedSecretKeysRequest {
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<Kmsv2keyssymKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CreateSharedSecretKeysVerifiRequest {
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<Kmsv2keyssymverifiKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class DeleteBulkP12KeysRequest {
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<Kmsv2keyssymdeletesKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class DeleteBulkSymmetricKeysRequest {
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<Kmsv2keyssymdeletesKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Flexv1tokensCardInfo {
    'cardNumber': string;
    'cardExpirationMonth'?: string;
    'cardExpirationYear'?: string;
    'cardType': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class FraudMarkingActionRequest {
    'riskInformation': Riskv1decisionsidmarkingRiskInformation;
    'clientReferenceInformation'?: Riskv1liststypeentriesClientReferenceInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GeneratePublicKeyRequest {
    'encryptionType': string;
    'targetOrigin'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GenerateUnifiedCheckoutCaptureContextRequest {
    'targetOrigins'?: Array<string>;
    'clientVersion'?: string;
    'allowedCardNetworks'?: Array<string>;
    'allowedPaymentTypes'?: Array<string>;
    'country'?: string;
    'locale'?: string;
    'captureMandate'?: Upv1capturecontextsCaptureMandate;
    'orderInformation'?: Upv1capturecontextsOrderInformation;
    'checkoutApiInitialization'?: Upv1capturecontextsCheckoutApiInitialization;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class IncrementAuthRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidClientReferenceInformation;
    'processingInformation'?: Ptsv2paymentsidProcessingInformation;
    'orderInformation'?: Ptsv2paymentsidOrderInformation;
    'merchantInformation'?: Ptsv2paymentsidMerchantInformation;
    'travelInformation'?: Ptsv2paymentsidTravelInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse200 {
    'submitTimeUtc'?: string;
    'totalCount'?: number;
    'offset'?: number;
    'limit'?: number;
    'sort'?: string;
    'keys'?: Array<InlineResponse200Keys>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse200Keys {
    'organizationId'?: string;
    'merchantName'?: string;
    'keyId'?: string;
    'keyType'?: string;
    'status'?: string;
    'expirationDate'?: string;
    'dateAdded'?: string;
    'addedBy'?: string;
    'dateModified'?: string;
    'modifiedBy'?: string;
    'version'?: string;
    'serialNumber'?: string;
    'issuerName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse400 {
    'errors'?: Array<InlineResponse400Errors>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse4001 {
    'code': string;
    'message': string;
    'localizationKey'?: string;
    'correlationId'?: string;
    'detail'?: string;
    'fields'?: Array<InlineResponse4001Fields>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse4001Fields {
    'path'?: string;
    'message'?: string;
    'localizationKey'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse4002 {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'statusCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse4003 {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse4004 {
    'correlationId'?: string;
    'details'?: Array<InlineResponse4004Details>;
    'informationLink'?: string;
    'message': string;
    'reason': InlineResponse4004.ReasonEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace InlineResponse4004 {
    enum ReasonEnum {
        INVALIDAPIKEY,
        INVALIDSHIPPINGINPUTPARAMS,
        CAPTURECONTEXTINVALID,
        CAPTURECONTEXTEXPIRED,
        SDKXHRERROR,
        UNIFIEDPAYMENTSVALIDATIONPARAMS,
        UNIFIEDPAYMENTSVALIDATIONFIELDS,
        UNIFIEDPAYMENTPAYMENTPARAMITERS,
        CREATETOKENTIMEOUT,
        CREATETOKENXHRERROR,
        SHOWLOADCONTAINERSELECTOR,
        SHOWLOADINVALIDCONTAINER,
        SHOWTOKENTIMEOUT,
        SHOWTOKENXHRERROR,
        SHOWPAYMENTTIMEOUT
    }
}
export declare class InlineResponse4004Details {
    'location'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse400Details {
    'name'?: string;
    'location'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse400Errors {
    'type'?: string;
    'message'?: string;
    'details'?: Array<InlineResponse400Details>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse500 {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponse502 {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'statusCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponseDefault {
    'responseStatus'?: InlineResponseDefaultResponseStatus;
    'links'?: InlineResponseDefaultLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponseDefaultLinks {
    'next'?: Array<InlineResponseDefaultLinksNext>;
    'documentation'?: Array<InlineResponseDefaultLinksNext>;
    'self'?: InlineResponseDefaultLinksNext;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponseDefaultLinksNext {
    'href'?: string;
    'title'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponseDefaultResponseStatus {
    'status'?: number;
    'reason'?: string;
    'message'?: string;
    'correlationId'?: string;
    'details'?: Array<InlineResponseDefaultResponseStatusDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InlineResponseDefaultResponseStatusDetails {
    'location'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoiceSettingsRequest {
    'invoiceSettingsInformation'?: Invoicingv2invoiceSettingsInvoiceSettingsInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoiceSettingsGet200Response {
    'submitTimeUtc'?: string;
    'invoiceSettingsInformation'?: InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation {
    'merchantLogo'?: string;
    'merchantDisplayName'?: string;
    'customEmailMessage'?: string;
    'enableReminders'?: boolean;
    'headerStyle'?: InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle;
    'deliveryLanguage'?: string;
    'defaultCurrencyCode'?: string;
    'payerAuthentication3DSVersion'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle {
    'fontColor'?: string;
    'backgroundColor'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200Response {
    'links'?: InvoicingV2InvoicesAllGet200ResponseLinks;
    'submitTimeUtc'?: string;
    'totalInvoices'?: number;
    'invoices'?: Array<InvoicingV2InvoicesAllGet200ResponseInvoices>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseCustomerInformation {
    'name'?: string;
    'merchantCustomerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseInvoiceInformation {
    'dueDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseInvoices {
    'links'?: InvoicingV2InvoicesAllGet200ResponseLinks1;
    'id'?: string;
    'status'?: string;
    'customerInformation'?: InvoicingV2InvoicesAllGet200ResponseCustomerInformation;
    'invoiceInformation'?: InvoicingV2InvoicesAllGet200ResponseInvoiceInformation;
    'orderInformation'?: InvoicingV2InvoicesAllGet200ResponseOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseLinks {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'next'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'previous'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseLinks1 {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'update'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'deliver'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'cancel'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseOrderInformation {
    'amountDetails'?: InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet404Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesAllGet502Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesGet200Response {
    'links'?: InvoicingV2InvoicesAllGet200ResponseLinks1;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'customerInformation'?: Invoicingv2invoicesCustomerInformation;
    'invoiceInformation'?: InvoicingV2InvoicesPost201ResponseInvoiceInformation;
    'orderInformation'?: InvoicingV2InvoicesPost201ResponseOrderInformation;
    'invoiceHistory'?: Array<InvoicingV2InvoicesGet200ResponseInvoiceHistory>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesGet200ResponseInvoiceHistory {
    'event'?: string;
    'date'?: Date;
    'transactionDetails'?: InvoicingV2InvoicesGet200ResponseTransactionDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesGet200ResponseTransactionDetails {
    'transactionId'?: string;
    'amount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesPost201Response {
    'links'?: InvoicingV2InvoicesAllGet200ResponseLinks1;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'customerInformation'?: Invoicingv2invoicesCustomerInformation;
    'invoiceInformation'?: InvoicingV2InvoicesPost201ResponseInvoiceInformation;
    'orderInformation'?: InvoicingV2InvoicesPost201ResponseOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesPost201ResponseInvoiceInformation {
    'invoiceNumber'?: string;
    'description'?: string;
    'dueDate'?: string;
    'allowPartialPayments'?: boolean;
    'paymentLink'?: string;
    'deliveryMode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesPost201ResponseOrderInformation {
    'amountDetails'?: InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails;
    'lineItems'?: Array<Invoicingv2invoicesOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'balanceAmount'?: string;
    'discountAmount'?: string;
    'discountPercent'?: number;
    'subAmount'?: number;
    'minimumPartialAmount'?: number;
    'taxDetails'?: Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails;
    'freight'?: Invoicingv2invoicesOrderInformationAmountDetailsFreight;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InvoicingV2InvoicesPost202Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoiceSettingsInvoiceSettingsInformation {
    'merchantLogo'?: string;
    'merchantDisplayName'?: string;
    'customEmailMessage'?: string;
    'enableReminders'?: boolean;
    'headerStyle'?: InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle;
    'deliveryLanguage'?: string;
    'defaultCurrencyCode'?: string;
    'payerAuthenticationInInvoicing'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesCustomerInformation {
    'name'?: string;
    'email'?: string;
    'merchantCustomerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesInvoiceInformation {
    'invoiceNumber'?: string;
    'description'?: string;
    'dueDate'?: string;
    'sendImmediately'?: boolean;
    'allowPartialPayments'?: boolean;
    'deliveryMode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesOrderInformation {
    'amountDetails'?: Invoicingv2invoicesOrderInformationAmountDetails;
    'lineItems'?: Array<Invoicingv2invoicesOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'discountAmount'?: string;
    'discountPercent'?: number;
    'subAmount'?: number;
    'minimumPartialAmount'?: number;
    'taxDetails'?: Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails;
    'freight'?: Invoicingv2invoicesOrderInformationAmountDetailsFreight;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesOrderInformationAmountDetailsFreight {
    'amount'?: string;
    'taxable'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails {
    'type'?: string;
    'amount'?: string;
    'rate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesOrderInformationLineItems {
    'productSku'?: string;
    'productName'?: string;
    'quantity'?: number;
    'unitPrice'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Invoicingv2invoicesidInvoiceInformation {
    'description'?: string;
    'dueDate'?: string;
    'allowPartialPayments'?: boolean;
    'deliveryMode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymDeletesPost200Response {
    'submitTimeUtc'?: string;
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<KmsV2KeysAsymDeletesPost200ResponseKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymDeletesPost200ResponseKeyInformation {
    'organizationId'?: string;
    'referenceNumber'?: string;
    'keyId'?: string;
    'status'?: string;
    'message'?: string;
    'errorInformation'?: KmsV2KeysSymPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymGet200Response {
    'submitTimeUtc'?: string;
    'keyInformation'?: KmsV2KeysAsymGet200ResponseKeyInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymGet200ResponseKeyInformation {
    'organizationId'?: string;
    'referenceNumber'?: string;
    'keyId'?: string;
    'status'?: string;
    'expirationDate'?: string;
    'message'?: string;
    'alias'?: string;
    'errorInformation'?: KmsV2KeysSymPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymPost201Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<KmsV2KeysAsymPost201ResponseKeyInformation>;
    'certificateInformation'?: Array<KmsV2KeysAsymPost201ResponseCertificateInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymPost201ResponseCertificateInformation {
    'alias'?: string;
    'keyId'?: string;
    'key'?: string;
    'expirationDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysAsymPost201ResponseKeyInformation {
    'organizationId'?: string;
    'referenceNumber'?: string;
    'keyId'?: string;
    'key'?: string;
    'status'?: string;
    'expirationDate'?: string;
    'message'?: string;
    'alias'?: string;
    'errorInformation'?: KmsV2KeysSymPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymDeletesPost200Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<KmsV2KeysSymDeletesPost200ResponseKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymDeletesPost200ResponseKeyInformation {
    'organizationId'?: string;
    'keyId'?: string;
    'status'?: string;
    'message'?: string;
    'errorInformation'?: KmsV2KeysSymPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymGet200Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'keyInformation'?: KmsV2KeysSymGet200ResponseKeyInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymGet200ResponseKeyInformation {
    'organizationId'?: string;
    'keyId'?: string;
    'status'?: string;
    'expirationDate'?: string;
    'message'?: string;
    'errorInformation'?: KmsV2KeysSymPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymPost201Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'clientReferenceInformation'?: Kmsv2keyssymClientReferenceInformation;
    'keyInformation'?: Array<KmsV2KeysSymPost201ResponseKeyInformation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymPost201ResponseErrorInformation {
    'reason'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KmsV2KeysSymPost201ResponseKeyInformation {
    'organizationId'?: string;
    'externalOrganizationId'?: string;
    'referenceNumber'?: string;
    'keyId'?: string;
    'key'?: string;
    'status'?: string;
    'expirationDate'?: string;
    'message'?: string;
    'errorInformation'?: KmsV2KeysSymPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Kmsv2keysasymKeyInformation {
    'organizationId': string;
    'referenceNumber'?: string;
    'cert': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Kmsv2keyssymClientReferenceInformation {
    'code'?: string;
    'comments'?: string;
    'partner'?: Riskv1decisionsClientReferenceInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Kmsv2keyssymKeyInformation {
    'organizationId': string;
    'referenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Kmsv2keyssymdeletesKeyInformation {
    'organizationId': string;
    'referenceNumber'?: string;
    'keyId': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Kmsv2keyssymverifiKeyInformation {
    'organizationId': string;
    'referenceNumber'?: string;
    'digestAlgorithm'?: Kmsv2keyssymverifiKeyInformation.DigestAlgorithmEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Kmsv2keyssymverifiKeyInformation {
    enum DigestAlgorithmEnum {
        HMACSHA1,
        HMACSHA2
    }
}
export declare class MitReversalRequest {
    'clientReferenceInformation'?: Ptsv2paymentsClientReferenceInformation;
    'reversalInformation'?: Ptsv2paymentsidreversalsReversalInformation;
    'processingInformation'?: Ptsv2paymentsidreversalsProcessingInformation;
    'orderInformation'?: Ptsv2paymentsidreversalsOrderInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsidreversalsPointOfSaleInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MitVoidRequest {
    'clientReferenceInformation'?: Ptsv2paymentsClientReferenceInformation;
    'paymentInformation'?: Ptsv2paymentsidvoidsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidvoidsOrderInformation;
    'processingInformation'?: Ptsv2voidsProcessingInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OctCreatePaymentRequest {
    'clientReferenceInformation'?: Ptsv2payoutsClientReferenceInformation;
    'orderInformation'?: Ptsv2payoutsOrderInformation;
    'merchantInformation'?: Ptsv2payoutsMerchantInformation;
    'recipientInformation'?: Ptsv2payoutsRecipientInformation;
    'senderInformation'?: Ptsv2payoutsSenderInformation;
    'processingInformation'?: Ptsv2payoutsProcessingInformation;
    'paymentInformation'?: Ptsv2payoutsPaymentInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PatchCustomerPaymentInstrumentRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks;
    'id'?: string;
    'object'?: string;
    '_default'?: boolean;
    'state'?: string;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCard;
    'buyerInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation;
    'merchantInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation;
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata;
    'embedded'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PatchCustomerRequest {
    'links'?: Tmsv2customersLinks;
    'id'?: string;
    'objectInformation'?: Tmsv2customersObjectInformation;
    'buyerInformation'?: Tmsv2customersBuyerInformation;
    'clientReferenceInformation'?: Tmsv2customersClientReferenceInformation;
    'merchantDefinedInformation'?: Array<Tmsv2customersMerchantDefinedInformation>;
    'defaultPaymentInstrument'?: Tmsv2customersDefaultPaymentInstrument;
    'defaultShippingAddress'?: Tmsv2customersDefaultShippingAddress;
    'metadata'?: Tmsv2customersMetadata;
    'embedded'?: Tmsv2customersEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PatchCustomerShippingAddressRequest {
    'links'?: Tmsv2customersEmbeddedDefaultShippingAddressLinks;
    'id'?: string;
    '_default'?: boolean;
    'shipTo'?: Tmsv2customersEmbeddedDefaultShippingAddressShipTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultShippingAddressMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PatchInstrumentIdentifierRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinks;
    'id'?: string;
    'object'?: string;
    'state'?: string;
    'type'?: string;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierCard;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBankAccount;
    'tokenizedCard'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCard;
    'issuer'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierIssuer;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBillTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PatchPaymentInstrumentRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks;
    'id'?: string;
    'object'?: string;
    '_default'?: boolean;
    'state'?: string;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCard;
    'buyerInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation;
    'merchantInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation;
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata;
    'embedded'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PayerAuthSetupRequest {
    'clientReferenceInformation'?: Riskv1decisionsClientReferenceInformation;
    'paymentInformation'?: Riskv1authenticationsetupsPaymentInformation;
    'processingInformation'?: Riskv1authenticationsetupsProcessingInformation;
    'tokenInformation'?: Riskv1authenticationsetupsTokenInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentList {
    'links'?: PaymentInstrumentListLinks;
    'offset'?: number;
    'limit'?: number;
    'count'?: number;
    'total'?: number;
    'embedded'?: PaymentInstrumentListEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentList1 {
    'links'?: PaymentInstrumentListLinks;
    'offset'?: number;
    'limit'?: number;
    'count'?: number;
    'total'?: number;
    'embedded'?: PaymentInstrumentList1Embedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentList1Embedded {
    'paymentInstruments'?: Array<PaymentInstrumentList1EmbeddedPaymentInstruments>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentList1EmbeddedEmbedded {
    'instrumentIdentifier'?: PatchInstrumentIdentifierRequest;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentList1EmbeddedPaymentInstruments {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks;
    'id'?: string;
    'object'?: string;
    '_default'?: boolean;
    'state'?: string;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCard;
    'buyerInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation;
    'merchantInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation;
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata;
    'embedded'?: PaymentInstrumentList1EmbeddedEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListEmbedded {
    'paymentInstruments'?: Array<Tmsv2customersEmbeddedDefaultPaymentInstrument>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListLinks {
    'self'?: PaymentInstrumentListLinksSelf;
    'first'?: PaymentInstrumentListLinksFirst;
    'prev'?: PaymentInstrumentListLinksPrev;
    'next'?: PaymentInstrumentListLinksNext;
    'last'?: PaymentInstrumentListLinksLast;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListLinksFirst {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListLinksLast {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListLinksNext {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListLinksPrev {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PaymentInstrumentListLinksSelf {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostCustomerPaymentInstrumentRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks;
    'id'?: string;
    'object'?: string;
    '_default'?: boolean;
    'state'?: string;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCard;
    'buyerInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation;
    'merchantInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation;
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata;
    'embedded'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostCustomerRequest {
    'links'?: Tmsv2customersLinks;
    'id'?: string;
    'objectInformation'?: Tmsv2customersObjectInformation;
    'buyerInformation'?: Tmsv2customersBuyerInformation;
    'clientReferenceInformation'?: Tmsv2customersClientReferenceInformation;
    'merchantDefinedInformation'?: Array<Tmsv2customersMerchantDefinedInformation>;
    'defaultPaymentInstrument'?: Tmsv2customersDefaultPaymentInstrument;
    'defaultShippingAddress'?: Tmsv2customersDefaultShippingAddress;
    'metadata'?: Tmsv2customersMetadata;
    'embedded'?: Tmsv2customersEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostCustomerShippingAddressRequest {
    'links'?: Tmsv2customersEmbeddedDefaultShippingAddressLinks;
    'id'?: string;
    '_default'?: boolean;
    'shipTo'?: Tmsv2customersEmbeddedDefaultShippingAddressShipTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultShippingAddressMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostInstrumentIdentifierEnrollmentRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinks;
    'id'?: string;
    'object'?: string;
    'state'?: string;
    'type'?: string;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierCard;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBankAccount;
    'tokenizedCard'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCard;
    'issuer'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierIssuer;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBillTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostInstrumentIdentifierRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinks;
    'id'?: string;
    'object'?: string;
    'state'?: string;
    'type'?: string;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierCard;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBankAccount;
    'tokenizedCard'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCard;
    'issuer'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierIssuer;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBillTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PostPaymentInstrumentRequest {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks;
    'id'?: string;
    'object'?: string;
    '_default'?: boolean;
    'state'?: string;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCard;
    'buyerInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation;
    'merchantInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation;
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata;
    'embedded'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PredefinedSubscriptionRequestBean {
    'reportDefinitionName': string;
    'subscriptionType': string;
    'reportName'?: string;
    'reportMimeType'?: string;
    'reportFrequency'?: string;
    'reportInterval'?: string;
    'timezone'?: string;
    'startTime'?: string;
    'startDay'?: number;
    'subscriptionStatus'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet200Response {
    'transactionBatches'?: Array<PtsV1TransactionBatchesGet200ResponseTransactionBatches>;
    'links'?: PtsV1TransactionBatchesGet200ResponseLinks;
    'submitTimeUtc'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet200ResponseLinks {
    'self'?: PtsV1TransactionBatchesGet200ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet200ResponseLinksSelf {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet200ResponseTransactionBatches {
    'id'?: string;
    'uploadDate'?: string;
    'completionDate'?: string;
    'transactionCount'?: number;
    'acceptedTransactionCount'?: number;
    'rejectedTransactionCount'?: string;
    'status'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet400Response {
    'errorInformation'?: PtsV1TransactionBatchesGet400ResponseErrorInformation;
    'submitTimeUtc'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet400ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV1TransactionBatchesGet400ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet400ResponseErrorInformationDetails {
    'field'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet500Response {
    'errorInformation'?: PtsV1TransactionBatchesGet500ResponseErrorInformation;
    'submitTimeUtc'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesGet500ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesIdGet200Response {
    'id'?: string;
    'uploadDate'?: string;
    'completionDate'?: string;
    'transactionCount'?: number;
    'acceptedTransactionCount'?: number;
    'rejectedTransactionCount'?: string;
    'status'?: string;
    'links'?: PtsV1TransactionBatchesIdGet200ResponseLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesIdGet200ResponseLinks {
    'transactions'?: Array<PtsV1TransactionBatchesIdGet200ResponseLinksTransactions>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV1TransactionBatchesIdGet200ResponseLinksTransactions {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2CreditsPost201Response {
    'links'?: PtsV2PaymentsRefundPost201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'creditAmountDetails'?: PtsV2CreditsPost201ResponseCreditAmountDetails;
    'processingInformation'?: PtsV2CreditsPost201ResponseProcessingInformation;
    'processorInformation'?: PtsV2PaymentsRefundPost201ResponseProcessorInformation;
    'paymentInformation'?: PtsV2CreditsPost201ResponsePaymentInformation;
    'orderInformation'?: PtsV2PaymentsRefundPost201ResponseOrderInformation;
    'pointOfSaleInformation'?: PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2CreditsPost201ResponseCreditAmountDetails {
    'creditAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2CreditsPost201ResponsePaymentInformation {
    'bank'?: PtsV2PaymentsPost201ResponsePaymentInformationBank;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    'paymentInstrument'?: Ptsv2paymentsPaymentInformationPaymentInstrument;
    'instrumentIdentifier'?: PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier;
    'shippingAddress'?: Ptsv2paymentsPaymentInformationShippingAddress;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2CreditsPost201ResponseProcessingInformation {
    'bankTransferOptions'?: PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions;
    'enhancedDataEnabled'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions {
    'settlementMethod'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'errorInformation'?: PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation;
    'clientReferenceInformation'?: PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation;
    'processorInformation'?: PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation;
    'paymentInformation'?: PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation;
    'orderInformation'?: PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation {
    'code'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponseLinks {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation {
    'amountDetails'?: PtsV2PaymentsPost201ResponseOrderInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation {
    'accountFeatures'?: PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures {
    'category'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation {
    'approvalCode'?: string;
    'transactionId'?: string;
    'responseCode'?: string;
    'systemTraceAuditNumber'?: string;
    'responseDetails'?: string;
    'merchantAdvice'?: PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2IncrementalAuthorizationPatch400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201Response {
    'links'?: PtsV2PaymentsCapturesPost201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'processorInformation'?: PtsV2PaymentsCapturesPost201ResponseProcessorInformation;
    'orderInformation'?: PtsV2PaymentsCapturesPost201ResponseOrderInformation;
    'pointOfSaleInformation'?: PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation;
    'processingInformation'?: PtsV2PaymentsCapturesPost201ResponseProcessingInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponseLinks {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    '_void'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'refund'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponseOrderInformation {
    'amountDetails'?: PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails;
    'invoiceDetails'?: PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'processorTransactionFee'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails {
    'level3TransmissionStatus'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation {
    'terminalId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponseProcessingInformation {
    'enhancedDataEnabled'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost201ResponseProcessorInformation {
    'transactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsCapturesPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response {
    'links'?: PtsV2PaymentsPost201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'errorInformation'?: PtsV2PaymentsPost201ResponseErrorInformation;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'processingInformation'?: PtsV2PaymentsPost201ResponseProcessingInformation;
    'processorInformation'?: PtsV2PaymentsPost201ResponseProcessorInformation;
    'issuerInformation'?: PtsV2PaymentsPost201ResponseIssuerInformation;
    'paymentAccountInformation'?: PtsV2PaymentsPost201ResponsePaymentAccountInformation;
    'paymentInformation'?: PtsV2PaymentsPost201ResponsePaymentInformation;
    'paymentInsightsInformation'?: PtsV2PaymentsPost201ResponsePaymentInsightsInformation;
    'orderInformation'?: PtsV2PaymentsPost201ResponseOrderInformation;
    'pointOfSaleInformation'?: PtsV2PaymentsPost201ResponsePointOfSaleInformation;
    'installmentInformation'?: PtsV2PaymentsPost201ResponseInstallmentInformation;
    'tokenInformation'?: PtsV2PaymentsPost201ResponseTokenInformation;
    'buyerInformation'?: PtsV2PaymentsPost201ResponseBuyerInformation;
    'riskInformation'?: PtsV2PaymentsPost201ResponseRiskInformation;
    'consumerAuthenticationInformation'?: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1 {
    'id'?: string;
    'status'?: string;
    'submitTimeUtc'?: string;
    'processorInformation'?: PtsV2PaymentsPost201Response1ProcessorInformation;
    'reconciliationId'?: string;
    'paymentInformation'?: PtsV2PaymentsPost201Response1PaymentInformation;
    'orderInformation'?: PtsV2PaymentsPost201Response1OrderInformation;
    'clientReferenceInformation'?: PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1OrderInformation {
    'billTo'?: PtsV2PaymentsPost201Response1OrderInformationBillTo;
    'shipTo'?: PtsV2PaymentsPost201Response1OrderInformationShipTo;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1OrderInformationBillTo {
    'firstName'?: string;
    'lastName'?: string;
    'nameSuffix'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'email'?: string;
    'verificationStatus'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1OrderInformationShipTo {
    'firstName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1PaymentInformation {
    'paymentType'?: PtsV2PaymentsPost201Response1PaymentInformationPaymentType;
    'customer'?: Ptsv2refreshpaymentstatusidPaymentInformationCustomer;
    'bank'?: PtsV2PaymentsPost201Response1PaymentInformationBank;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1PaymentInformationBank {
    'account'?: PtsV2PaymentsPost201Response1PaymentInformationBankAccount;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1PaymentInformationBankAccount {
    'ibanSuffix'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1PaymentInformationPaymentType {
    'method'?: PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1PaymentInformationPaymentTypeMethod {
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1ProcessorInformation {
    'transactionId'?: string;
    'tradeNumber'?: string;
    'rawResponse'?: string;
    'responseCode'?: string;
    'sellerProtection'?: PtsV2PaymentsPost201Response1ProcessorInformationSellerProtection;
    'avs'?: PtsV2PaymentsPost201Response1ProcessorInformationAvs;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1ProcessorInformationAvs {
    'codeRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201Response1ProcessorInformationSellerProtection {
    'eligibilty'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseBuyerInformation {
    'merchantCustomerId'?: string;
    'dateOfBirth'?: string;
    'vatRegistrationNumber'?: string;
    'personalIdentification'?: Array<Ptsv2paymentsBuyerInformationPersonalIdentification>;
    'taxId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseClientReferenceInformation {
    'code'?: string;
    'submitLocalDateTime'?: string;
    'ownerMerchantId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation {
    'accessToken'?: string;
    'acsRenderingType'?: string;
    'acsTransactionId'?: string;
    'acsUrl'?: string;
    'authenticationPath'?: string;
    'authorizationPayload'?: string;
    'authenticationTransactionId'?: string;
    'cardholderMessage'?: string;
    'cavv'?: string;
    'cavvAlgorithm'?: string;
    'challengeCancelCode'?: string;
    'challengeRequired'?: string;
    'decoupledAuthenticationIndicator'?: string;
    'directoryServerErrorCode'?: string;
    'directoryServerErrorDescription'?: string;
    'ecommerceIndicator'?: string;
    'eci'?: string;
    'eciRaw'?: string;
    'effectiveAuthenticationType'?: string;
    'ivr'?: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr;
    'strongAuthentication'?: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication;
    'networkScore'?: string;
    'pareq'?: string;
    'paresStatus'?: string;
    'proofXml'?: string;
    'proxyPan'?: string;
    'sdkTransactionId'?: string;
    'signedParesStatusReason'?: string;
    'specificationVersion'?: string;
    'stepUpUrl'?: string;
    'threeDSServerTransactionId'?: string;
    'ucafAuthenticationData'?: string;
    'ucafCollectionIndicator'?: string;
    'veresEnrolled'?: string;
    'whiteListStatusSource'?: string;
    'xid'?: string;
    'directoryServerTransactionId'?: string;
    'authenticationResult'?: string;
    'authenticationStatusMsg'?: string;
    'indicator'?: string;
    'interactionCounter'?: string;
    'whiteListStatus'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr {
    'enabledMessage'?: boolean;
    'encryptionKey'?: string;
    'encryptionMandatory'?: boolean;
    'encryptionType'?: string;
    'label'?: string;
    'prompt'?: string;
    'statusMessage'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthentication {
    'issuerInformation'?: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation {
    'riskAnalysisExemptionResult'?: string;
    'trustedMerchantExemptionResult'?: string;
    'lowValueExemptionResult'?: string;
    'secureCorporatePaymentResult'?: string;
    'transactionRiskAnalysisExemptionResult'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseErrorInformationDetails {
    'field'?: string;
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseInstallmentInformation {
    'additionalCosts'?: string;
    'additionalCostsPercentage'?: string;
    'amount'?: string;
    'amountFunded'?: string;
    'amountRequestedPercentage'?: string;
    'annualFinancingCost'?: string;
    'annualInterestRate'?: string;
    'expenses'?: string;
    'expensesPercentage'?: string;
    'fees'?: string;
    'feesPercentage'?: string;
    'frequency'?: string;
    'insurance'?: string;
    'insurancePercentage'?: string;
    'invoiceData'?: string;
    'monthlyInterestRate'?: string;
    'planType'?: string;
    'sequence'?: number;
    'taxes'?: string;
    'taxesPercentage'?: string;
    'totalAmount'?: string;
    'totalCount'?: number;
    'minimumTotalCount'?: string;
    'maximumTotalCount'?: string;
    'firstInstallmentAmount'?: string;
    'firstInstallmentDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseIssuerInformation {
    'country'?: string;
    'discretionaryData'?: string;
    'countrySpecificDiscretionaryData'?: string;
    'responseCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseLinks {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'reversal'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'capture'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'customer'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'paymentInstrument'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'shippingAddress'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'instrumentIdentifier'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseLinksSelf {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseOrderInformation {
    'amountDetails'?: PtsV2PaymentsPost201ResponseOrderInformationAmountDetails;
    'invoiceDetails'?: PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails;
    'rewardPointsDetails'?: PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'authorizedAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails {
    'level3TransmissionStatus'?: boolean;
    'salesSlipNumber'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails {
    'pointsBeforeRedemption'?: string;
    'pointsValueBeforeRedemption'?: string;
    'pointsRedeemed'?: string;
    'pointsValueRedeemed'?: string;
    'pointsAfterRedemption'?: string;
    'pointsValueAfterRedemption'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentAccountInformation {
    'card'?: PtsV2PaymentsPost201ResponsePaymentAccountInformationCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentAccountInformationCard {
    'suffix'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'type'?: string;
    'prefix'?: string;
    'hashedNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformation {
    'card'?: PtsV2PaymentsPost201ResponsePaymentAccountInformationCard;
    'tokenizedCard'?: PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard;
    'accountFeatures'?: PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures;
    'bank'?: PtsV2PaymentsPost201ResponsePaymentInformationBank;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    'paymentInstrument'?: Ptsv2paymentsPaymentInformationPaymentInstrument;
    'instrumentIdentifier'?: PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier;
    'shippingAddress'?: Ptsv2paymentsPaymentInformationShippingAddress;
    'scheme'?: string;
    'bin'?: string;
    'accountType'?: string;
    'issuer'?: string;
    'binCountry'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures {
    'accountType'?: string;
    'accountStatus'?: string;
    'balances'?: Array<PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances>;
    'balanceAmount'?: string;
    'balanceAmountType'?: string;
    'currency'?: string;
    'balanceSign'?: string;
    'affluenceIndicator'?: string;
    'category'?: string;
    'commercial'?: string;
    'group'?: string;
    'healthCare'?: string;
    'payroll'?: string;
    'level3Eligible'?: string;
    'pinlessDebit'?: string;
    'signatureDebit'?: string;
    'prepaid'?: string;
    'regulated'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances {
    'accountType'?: string;
    'amount'?: string;
    'amountType'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformationBank {
    'account'?: PtsV2PaymentsPost201ResponsePaymentInformationBankAccount;
    'correctedRoutingNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformationBankAccount {
    'correctedAccountNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier {
    'id'?: string;
    'state'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard {
    'prefix'?: string;
    'suffix'?: string;
    'type'?: string;
    'assuranceLevel'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'requestorId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInsightsInformation {
    'responseInsights'?: PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights {
    'category'?: string;
    'categoryCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePointOfSaleInformation {
    'emv'?: PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv;
    'amexCapnData'?: string;
    'terminalId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv {
    'tags'?: string;
    'chipValidationType'?: string;
    'chipValidationResult'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessingInformation {
    'bankTransferOptions'?: PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions;
    'paymentSolution'?: string;
    'enhancedDataEnabled'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions {
    'settlementMethod'?: string;
    'fraudScreeningLevel'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformation {
    'authIndicator'?: string;
    'approvalCode'?: string;
    'cardReferenceData'?: string;
    'transactionId'?: string;
    'networkTransactionId'?: string;
    'responseCode'?: string;
    'responseCodeSource'?: string;
    'responseDetails'?: string;
    'responseCategoryCode'?: string;
    'forwardedAcquirerCode'?: string;
    'avs'?: PtsV2PaymentsPost201ResponseProcessorInformationAvs;
    'cardVerification'?: PtsV2PaymentsPost201ResponseProcessorInformationCardVerification;
    'merchantAdvice'?: PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice;
    'electronicVerificationResults'?: PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults;
    'achVerification'?: PtsV2PaymentsPost201ResponseProcessorInformationAchVerification;
    'customer'?: PtsV2PaymentsPost201ResponseProcessorInformationCustomer;
    'consumerAuthenticationResponse'?: PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse;
    'systemTraceAuditNumber'?: string;
    'paymentAccountReferenceNumber'?: string;
    'transactionIntegrityCode'?: string;
    'amexVerbalAuthReferenceNumber'?: string;
    'masterCardServiceCode'?: string;
    'masterCardServiceReplyCode'?: string;
    'masterCardAuthenticationType'?: string;
    'name'?: string;
    'routing'?: PtsV2PaymentsPost201ResponseProcessorInformationRouting;
    'merchantNumber'?: string;
    'retrievalReferenceNumber'?: string;
    'paymentUrl'?: string;
    'completeUrl'?: string;
    'signature'?: string;
    'publicKey'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationAchVerification {
    'resultCode'?: string;
    'resultCodeRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationAvs {
    'code'?: string;
    'codeRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationCardVerification {
    'resultCode'?: string;
    'resultCodeRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse {
    'code'?: string;
    'codeRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationCustomer {
    'personalIdResult'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults {
    'code'?: string;
    'codeRaw'?: string;
    'email'?: string;
    'emailRaw'?: string;
    'phoneNumber'?: string;
    'phoneNumberRaw'?: string;
    'postalCode'?: string;
    'postalCodeRaw'?: string;
    'street'?: string;
    'streetRaw'?: string;
    'name'?: string;
    'nameRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice {
    'code'?: string;
    'codeRaw'?: string;
    'nameMatch'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseProcessorInformationRouting {
    'network'?: string;
    'networkName'?: string;
    'customerSignatureRequired'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformation {
    'profile'?: PtsV2PaymentsPost201ResponseRiskInformationProfile;
    'rules'?: Array<PtsV2PaymentsPost201ResponseRiskInformationRules>;
    'infoCodes'?: PtsV2PaymentsPost201ResponseRiskInformationInfoCodes;
    'velocity'?: PtsV2PaymentsPost201ResponseRiskInformationVelocity;
    'casePriority'?: number;
    'localTime'?: string;
    'score'?: PtsV2PaymentsPost201ResponseRiskInformationScore;
    'ipAddress'?: PtsV2PaymentsPost201ResponseRiskInformationIpAddress;
    'providers'?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    'travel'?: PtsV2PaymentsPost201ResponseRiskInformationTravel;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationInfoCodes {
    'velocity'?: Array<string>;
    'address'?: Array<string>;
    'customerList'?: Array<string>;
    'deviceBehavior'?: Array<string>;
    'identityChange'?: Array<string>;
    'internet'?: Array<string>;
    'phone'?: Array<string>;
    'suspicious'?: Array<string>;
    'globalVelocity'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationIpAddress {
    'anonymizerStatus'?: string;
    'locality'?: string;
    'country'?: string;
    'administrativeArea'?: string;
    'routingMethod'?: string;
    'carrier'?: string;
    'organization'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationProfile {
    'name'?: string;
    'desinationQueue'?: string;
    'selectorRule'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationRules {
    'name'?: string;
    'decision'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationScore {
    'factorCodes'?: Array<string>;
    'modelUsed'?: string;
    'result'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationTravel {
    'actualFinalDestination'?: PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination;
    'firstDeparture'?: PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture;
    'firstDestination'?: PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination;
    'lastDestination'?: PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination {
    'country'?: string;
    'locality'?: string;
    'latitude'?: string;
    'longitude'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture {
    'country'?: string;
    'locality'?: string;
    'latitude'?: string;
    'longitude'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination {
    'country'?: string;
    'locality'?: string;
    'latitude'?: string;
    'longitude'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination {
    'country'?: string;
    'locality'?: string;
    'latitude'?: string;
    'longitude'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationVelocity {
    'morphing'?: Array<PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing>;
    'address'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing {
    'count'?: number;
    'fieldName'?: string;
    'informationCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseTokenInformation {
    'instrumentidentifierNew'?: boolean;
    'customer'?: PtsV2PaymentsPost201ResponseTokenInformationCustomer;
    'paymentInstrument'?: PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument;
    'shippingAddress'?: PtsV2PaymentsPost201ResponseTokenInformationShippingAddress;
    'instrumentIdentifier'?: PtsV2PaymentsPost201ResponseTokenInformationInstrumentIdentifier;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseTokenInformationCustomer {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseTokenInformationInstrumentIdentifier {
    'id'?: string;
    'state'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost201ResponseTokenInformationShippingAddress {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsPost502Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost201Response {
    'links'?: PtsV2PaymentsRefundPost201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'clientReferenceInformation'?: PtsV2PaymentsRefundPost201ResponseClientReferenceInformation;
    'refundAmountDetails'?: PtsV2PaymentsRefundPost201ResponseRefundAmountDetails;
    'processorInformation'?: PtsV2PaymentsRefundPost201ResponseProcessorInformation;
    'orderInformation'?: PtsV2PaymentsRefundPost201ResponseOrderInformation;
    'pointOfSaleInformation'?: PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost201ResponseClientReferenceInformation {
    'code'?: string;
    'submitLocalDateTime'?: string;
    'ownerMerchantId'?: string;
    'returnReconciliationId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost201ResponseLinks {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    '_void'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost201ResponseOrderInformation {
    'invoiceDetails'?: PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost201ResponseProcessorInformation {
    'approvalCode'?: string;
    'transactionId'?: string;
    'forwardedAcquirerCode'?: string;
    'merchantNumber'?: string;
    'responseCode'?: string;
    'achVerification'?: PtsV2PaymentsPost201ResponseProcessorInformationAchVerification;
    'networkTransactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost201ResponseRefundAmountDetails {
    'refundAmount'?: string;
    'creditAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsRefundPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsReversalsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'reversalAmountDetails'?: PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails;
    'processorInformation'?: PtsV2PaymentsReversalsPost201ResponseProcessorInformation;
    'issuerInformation'?: PtsV2PaymentsReversalsPost201ResponseIssuerInformation;
    'authorizationInformation'?: PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsidreversalsPointOfSaleInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation {
    'approvalCode'?: string;
    'reasonCode'?: string;
    'reversalSubmitted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsReversalsPost201ResponseIssuerInformation {
    'responseCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsReversalsPost201ResponseProcessorInformation {
    'transactionId'?: string;
    'responseCode'?: string;
    'responseCategoryCode'?: string;
    'forwardedAcquirerCode'?: string;
    'masterCardServiceCode'?: string;
    'masterCardServiceReplyCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails {
    'reversedAmount'?: string;
    'originalTransactionAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsReversalsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsVoidsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'voidAmountDetails'?: PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails;
    'processorInformation'?: PtsV2PaymentsVoidsPost201ResponseProcessorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsVoidsPost201ResponseProcessorInformation {
    'responseCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails {
    'voidAmount'?: string;
    'originalTransactionAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PaymentsVoidsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'errorInformation'?: PtsV2PayoutsPost201ResponseErrorInformation;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'merchantInformation'?: PtsV2PayoutsPost201ResponseMerchantInformation;
    'orderInformation'?: PtsV2PayoutsPost201ResponseOrderInformation;
    'processorInformation'?: PtsV2PayoutsPost201ResponseProcessorInformation;
    'recipientInformation'?: PtsV2PayoutsPost201ResponseRecipientInformation;
    'issuerInformation'?: PtsV2PayoutsPost201ResponseIssuerInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseIssuerInformation {
    'serviceProcessingType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseMerchantInformation {
    'merchantDescriptor'?: PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor {
    'name'?: string;
    'locality'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseOrderInformation {
    'amountDetails'?: PtsV2PayoutsPost201ResponseOrderInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'settlementAmount'?: string;
    'settlementCurrency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseProcessorInformation {
    'approvalCode'?: string;
    'responseCode'?: string;
    'transactionId'?: string;
    'systemTraceAuditNumber'?: string;
    'responseCodeSource'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseRecipientInformation {
    'card'?: PtsV2PayoutsPost201ResponseRecipientInformationCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost201ResponseRecipientInformationCard {
    'balance'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PtsV2PayoutsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferAggregatorInformation {
    'aggregatorId'?: string;
    'name'?: string;
    'subMerchant'?: Ptsv1pushfundstransferAggregatorInformationSubMerchant;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferAggregatorInformationSubMerchant {
    'id'?: string;
    'name'?: string;
    'address1'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferClientReferenceInformation {
    'code'?: string;
    'applicationName'?: string;
    'applicationVersion'?: string;
    'applicationUser'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferMerchantDefinedInformation {
    'key'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferMerchantInformation {
    'categoryCode'?: number;
    'submitLocalDateTime'?: string;
    'vatRegistrationNumber'?: string;
    'merchantDescriptor'?: Ptsv1pushfundstransferMerchantInformationMerchantDescriptor;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferMerchantInformationMerchantDescriptor {
    'administrativeArea'?: string;
    'contact'?: string;
    'country'?: string;
    'locality'?: string;
    'name'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferOrderInformation {
    'amountDetails': Ptsv1pushfundstransferOrderInformationAmountDetails;
    'isCryptocurrencyPurchase'?: string;
    'surcharge'?: Ptsv1pushfundstransferOrderInformationSurcharge;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferOrderInformationAmountDetails {
    'totalAmount': string;
    'currency': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferOrderInformationSurcharge {
    'amount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferPointOfServiceInformation {
    'terminalId'?: string;
    'catLevel'?: number;
    'entryMode'?: string;
    'pinEntryCapability'?: number;
    'terminalCapability'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferProcessingInformation {
    'businessApplicationId'?: string;
    'commerceIndicator': string;
    'networkRoutingOrder'?: string;
    'payoutsOptions'?: Ptsv1pushfundstransferProcessingInformationPayoutsOptions;
    'purposeOfPayment'?: string;
    'reconciliationId'?: string;
    'recurringOptions'?: Ptsv1pushfundstransferProcessingInformationRecurringOptions;
    'transactionReason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferProcessingInformationPayoutsOptions {
    'accountFundingReferenceId'?: string;
    'retrievalReferenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferProcessingInformationRecurringOptions {
    'loanPayment'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferProcessingOptions {
    'fundingOptions'?: Ptsv1pushfundstransferProcessingOptionsFundingOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferProcessingOptionsFundingOptions {
    'initiator'?: Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferProcessingOptionsFundingOptionsInitiator {
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformation {
    'paymentInformation'?: Ptsv1pushfundstransferRecipientInformationPaymentInformation;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'firstName'?: string;
    'middleName'?: string;
    'middleInitial'?: string;
    'lastName'?: string;
    'dateOfBirth'?: string;
    'phoneNumber'?: string;
    'personalIdentification'?: Ptsv1pushfundstransferRecipientInformationPersonalIdentification;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformationPaymentInformation {
    'card'?: Ptsv1pushfundstransferRecipientInformationPaymentInformationCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformationPaymentInformationCard {
    'type'?: string;
    'securityCode'?: string;
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'customer'?: Ptsv1pushfundstransferRecipientInformationPaymentInformationCardCustomer;
    'paymentInstrument'?: Ptsv1pushfundstransferRecipientInformationPaymentInformationCardPaymentInstrument;
    'instrumentIdentifier'?: Ptsv1pushfundstransferRecipientInformationPaymentInformationCardInstrumentIdentifier;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformationPaymentInformationCardCustomer {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformationPaymentInformationCardInstrumentIdentifier {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformationPaymentInformationCardPaymentInstrument {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferRecipientInformationPersonalIdentification {
    'id'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferSenderInformation {
    'name'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'middleName'?: string;
    'postalCode'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'vatRegistrationNumber'?: string;
    'dateOfBirth'?: string;
    'phoneNumber'?: string;
    'paymentInformation'?: Ptsv1pushfundstransferSenderInformationPaymentInformation;
    'referenceNumber'?: string;
    'account'?: Ptsv1pushfundstransferSenderInformationAccount;
    'personalIdentification'?: Ptsv1pushfundstransferSenderInformationPersonalIdentification;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferSenderInformationAccount {
    'fundsSource'?: string;
    'number'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferSenderInformationPaymentInformation {
    'card'?: Ptsv1pushfundstransferSenderInformationPaymentInformationCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferSenderInformationPaymentInformationCard {
    'type'?: string;
    'securityCode'?: string;
    'sourceAccountType'?: string;
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv1pushfundstransferSenderInformationPersonalIdentification {
    'id'?: string;
    'personalIdType'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2creditsInstallmentInformation {
    'planType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2creditsProcessingInformation {
    'commerceIndicator'?: string;
    'processorId'?: string;
    'paymentSolution'?: string;
    'reconciliationId'?: string;
    'linkId'?: string;
    'reportGroup'?: string;
    'visaCheckoutId'?: string;
    'purchaseLevel'?: string;
    'industryDataType'?: string;
    'walletType'?: string;
    'nationalNetDomesticData'?: string;
    'networkRoutingOrder'?: string;
    'recurringOptions'?: Ptsv2paymentsidrefundsProcessingInformationRecurringOptions;
    'bankTransferOptions'?: Ptsv2creditsProcessingInformationBankTransferOptions;
    'purchaseOptions'?: Ptsv2creditsProcessingInformationPurchaseOptions;
    'electronicBenefitsTransfer'?: Ptsv2creditsProcessingInformationElectronicBenefitsTransfer;
    'loanOptions'?: Ptsv2paymentsProcessingInformationLoanOptions;
    'japanPaymentOptions'?: Ptsv2creditsProcessingInformationJapanPaymentOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2creditsProcessingInformationBankTransferOptions {
    'customerMemo'?: string;
    'secCode'?: string;
    'terminalCity'?: string;
    'terminalState'?: string;
    'effectiveDate'?: string;
    'partialPaymentId'?: string;
    'settlementMethod'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2creditsProcessingInformationElectronicBenefitsTransfer {
    'category'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2creditsProcessingInformationJapanPaymentOptions {
    'paymentMethod'?: string;
    'installments'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2creditsProcessingInformationPurchaseOptions {
    'isElectronicBenefitsTransfer'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsAcquirerInformation {
    'acquirerBin'?: string;
    'country'?: string;
    'password'?: string;
    'merchantId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsAggregatorInformation {
    'aggregatorId'?: string;
    'name'?: string;
    'subMerchant'?: Ptsv2paymentsAggregatorInformationSubMerchant;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsAggregatorInformationSubMerchant {
    'cardAcceptorId'?: string;
    'id'?: string;
    'name'?: string;
    'address1'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'region'?: string;
    'postalCode'?: string;
    'country'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsBuyerInformation {
    'merchantCustomerId'?: string;
    'dateOfBirth'?: string;
    'vatRegistrationNumber'?: string;
    'companyTaxId'?: string;
    'personalIdentification'?: Array<Ptsv2paymentsBuyerInformationPersonalIdentification>;
    'hashedPassword'?: string;
    'gender'?: string;
    'language'?: string;
    'mobilePhone'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsBuyerInformationPersonalIdentification {
    'type'?: string;
    'id'?: string;
    'issuedBy'?: string;
    'verificationResults'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsClientReferenceInformation {
    'code'?: string;
    'reconciliationId'?: string;
    'pausedRequestId'?: string;
    'transactionId'?: string;
    'comments'?: string;
    'partner'?: Ptsv2paymentsClientReferenceInformationPartner;
    'applicationName'?: string;
    'applicationVersion'?: string;
    'applicationUser'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsClientReferenceInformationPartner {
    'originalTransactionId'?: string;
    'developerId'?: string;
    'solutionId'?: string;
    'thirdPartyCertificationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsConsumerAuthenticationInformation {
    'cavv'?: string;
    'cavvAlgorithm'?: string;
    'eciRaw'?: string;
    'paresStatus'?: string;
    'veresEnrolled'?: string;
    'xid'?: string;
    'ucafCollectionIndicator'?: string;
    'ucafAuthenticationData'?: string;
    'strongAuthentication'?: Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication;
    'directoryServerTransactionId'?: string;
    'paSpecificationVersion'?: string;
    'authenticationType'?: string;
    'responseAccessToken'?: string;
    'acsTransactionId'?: string;
    'acsWindowSize'?: string;
    'alternateAuthenticationData'?: string;
    'alternateAuthenticationDate'?: string;
    'alternateAuthenticationMethod'?: string;
    'authenticationDate'?: string;
    'authenticationTransactionId'?: string;
    'challengeCancelCode'?: string;
    'challengeCode'?: string;
    'challengeStatus'?: string;
    'customerCardAlias'?: string;
    'decoupledAuthenticationIndicator'?: string;
    'decoupledAuthenticationMaxTime'?: string;
    'defaultCard'?: boolean;
    'deviceChannel'?: string;
    'installmentTotalCount'?: number;
    'merchantFraudRate'?: string;
    'marketingOptIn'?: boolean;
    'marketingSource'?: string;
    'mcc'?: string;
    'merchantScore'?: number;
    'messageCategory'?: string;
    'networkScore'?: string;
    'npaCode'?: string;
    'overridePaymentMethod'?: string;
    'overrideCountryCode'?: string;
    'priorAuthenticationData'?: string;
    'priorAuthenticationMethod'?: string;
    'priorAuthenticationReferenceId'?: string;
    'priorAuthenticationTime'?: string;
    'productCode'?: string;
    'returnUrl'?: string;
    'requestorId'?: string;
    'requestorInitiatedAuthenticationIndicator'?: string;
    'requestorName'?: string;
    'referenceId'?: string;
    'sdkMaxTimeout'?: string;
    'secureCorporatePaymentIndicator'?: string;
    'transactionMode'?: string;
    'whiteListStatus'?: string;
    'effectiveAuthenticationType'?: string;
    'signedParesStatusReason'?: string;
    'signedPares'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication {
    'lowValueExemptionIndicator'?: string;
    'riskAnalysisExemptionIndicator'?: string;
    'trustedMerchantExemptionIndicator'?: string;
    'secureCorporatePaymentIndicator'?: string;
    'delegatedAuthenticationExemptionIndicator'?: string;
    'outageExemptionIndicator'?: string;
    'authenticationIndicator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsDeviceInformation {
    'hostName'?: string;
    'ipAddress'?: string;
    'userAgent'?: string;
    'fingerprintSessionId'?: string;
    'useRawFingerprintSessionId'?: boolean;
    'deviceType'?: string;
    'appUrl'?: string;
    'rawData'?: Array<Ptsv2paymentsDeviceInformationRawData>;
    'httpAcceptBrowserValue'?: string;
    'httpAcceptContent'?: string;
    'httpBrowserEmail'?: string;
    'httpBrowserLanguage'?: string;
    'httpBrowserJavaEnabled'?: boolean;
    'httpBrowserJavaScriptEnabled'?: boolean;
    'httpBrowserColorDepth'?: string;
    'httpBrowserScreenHeight'?: string;
    'httpBrowserScreenWidth'?: string;
    'httpBrowserTimeDifference'?: string;
    'userAgentBrowserValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsDeviceInformationRawData {
    'data'?: string;
    'provider'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsHealthCareInformation {
    'amountDetails'?: Array<Ptsv2paymentsHealthCareInformationAmountDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsHealthCareInformationAmountDetails {
    'amountType'?: string;
    'amount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsInstallmentInformation {
    'amount'?: string;
    'frequency'?: string;
    'planType'?: string;
    'sequence'?: number;
    'totalAmount'?: string;
    'totalCount'?: number;
    'firstInstallmentDate'?: string;
    'invoiceData'?: string;
    'paymentType'?: string;
    'eligibilityInquiry'?: string;
    'gracePeriodDuration'?: string;
    'gracePeriodDurationType'?: string;
    'firstInstallmentAmount'?: string;
    'validationIndicator'?: string;
    'identifier'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsInvoiceDetails {
    'barcodeNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsIssuerInformation {
    'discretionaryData'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsMerchantDefinedInformation {
    'key'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsMerchantInformation {
    'merchantDescriptor'?: Ptsv2paymentsMerchantInformationMerchantDescriptor;
    'domainName'?: string;
    'salesOrganizationId'?: string;
    'categoryCode'?: number;
    'categoryCodeDomestic'?: number;
    'taxId'?: string;
    'vatRegistrationNumber'?: string;
    'cardAcceptorReferenceNumber'?: string;
    'transactionLocalDateTime'?: string;
    'serviceFeeDescriptor'?: Ptsv2paymentsMerchantInformationServiceFeeDescriptor;
    'cancelUrl'?: string;
    'successUrl'?: string;
    'failureUrl'?: string;
    'returnUrl'?: string;
    'merchantName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsMerchantInformationMerchantDescriptor {
    'name'?: string;
    'alternateName'?: string;
    'contact'?: string;
    'address1'?: string;
    'locality'?: string;
    'country'?: string;
    'postalCode'?: string;
    'administrativeArea'?: string;
    'phone'?: string;
    'url'?: string;
    'countryOfOrigin'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsMerchantInformationServiceFeeDescriptor {
    'name'?: string;
    'contact'?: string;
    'state'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformation {
    'amountDetails'?: Ptsv2paymentsOrderInformationAmountDetails;
    'billTo'?: Ptsv2paymentsOrderInformationBillTo;
    'shipTo'?: Ptsv2paymentsOrderInformationShipTo;
    'lineItems'?: Array<Ptsv2paymentsOrderInformationLineItems>;
    'invoiceDetails'?: Ptsv2paymentsOrderInformationInvoiceDetails;
    'shippingDetails'?: Ptsv2paymentsOrderInformationShippingDetails;
    'returnsAccepted'?: boolean;
    'isCryptocurrencyPurchase'?: string;
    'preOrder'?: string;
    'preOrderDate'?: string;
    'reordered'?: boolean;
    'totalOffersCount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationAmountDetails {
    'totalAmount'?: string;
    'subTotalAmount'?: string;
    'currency'?: string;
    'discountAmount'?: string;
    'dutyAmount'?: string;
    'gratuityAmount'?: string;
    'taxAmount'?: string;
    'nationalTaxIncluded'?: string;
    'taxAppliedAfterDiscount'?: string;
    'taxAppliedLevel'?: string;
    'taxTypeCode'?: string;
    'freightAmount'?: string;
    'foreignAmount'?: string;
    'foreignCurrency'?: string;
    'exchangeRate'?: string;
    'exchangeRateTimeStamp'?: string;
    'surcharge'?: Ptsv2paymentsOrderInformationAmountDetailsSurcharge;
    'settlementAmount'?: string;
    'settlementCurrency'?: string;
    'amexAdditionalAmounts'?: Array<Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts>;
    'taxDetails'?: Array<Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>;
    'serviceFeeAmount'?: string;
    'originalAmount'?: string;
    'originalCurrency'?: string;
    'cashbackAmount'?: string;
    'currencyConversion'?: Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts {
    'code'?: string;
    'amount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion {
    'indicator'?: string;
    'reconciliationId'?: string;
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationAmountDetailsSurcharge {
    'amount'?: string;
    'description'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationAmountDetailsTaxDetails {
    'type'?: string;
    'amount'?: string;
    'rate'?: string;
    'code'?: string;
    'taxId'?: string;
    'applied'?: boolean;
    'exemptionCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationBillTo {
    'firstName'?: string;
    'lastName'?: string;
    'middleName'?: string;
    'nameSuffix'?: string;
    'title'?: string;
    'company'?: Ptsv2paymentsOrderInformationBillToCompany;
    'address1'?: string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'county'?: string;
    'country'?: string;
    'district'?: string;
    'buildingNumber'?: string;
    'email'?: string;
    'emailDomain'?: string;
    'phoneNumber'?: string;
    'phoneType'?: string;
    'verificationStatus'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationBillToCompany {
    'name'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationInvoiceDetails {
    'invoiceNumber'?: string;
    'barcodeNumber'?: string;
    'expirationDate'?: string;
    'purchaseOrderNumber'?: string;
    'purchaseOrderDate'?: string;
    'purchaseContactName'?: string;
    'taxable'?: boolean;
    'vatInvoiceReferenceNumber'?: string;
    'commodityCode'?: string;
    'merchandiseCode'?: number;
    'transactionAdviceAddendum'?: Array<Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum>;
    'referenceDataCode'?: string;
    'referenceDataNumber'?: string;
    'salesSlipNumber'?: number;
    'invoiceDate'?: string;
    'costCenter'?: string;
    'issuerMessage'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum {
    'data'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationLineItems {
    'productCode'?: string;
    'productName'?: string;
    'productSku'?: string;
    'quantity'?: number;
    'unitPrice'?: string;
    'unitOfMeasure'?: string;
    'totalAmount'?: string;
    'taxAmount'?: string;
    'taxRate'?: string;
    'taxAppliedAfterDiscount'?: string;
    'taxStatusIndicator'?: string;
    'taxTypeCode'?: string;
    'amountIncludesTax'?: boolean;
    'typeOfSupply'?: string;
    'commodityCode'?: string;
    'discountAmount'?: string;
    'discountApplied'?: boolean;
    'discountRate'?: string;
    'invoiceNumber'?: string;
    'taxDetails'?: Array<Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>;
    'fulfillmentType'?: string;
    'weight'?: string;
    'weightIdentifier'?: string;
    'weightUnit'?: string;
    'referenceDataCode'?: string;
    'referenceDataNumber'?: string;
    'productDescription'?: string;
    'giftCardCurrency'?: number;
    'shippingDestinationTypes'?: string;
    'gift'?: boolean;
    'passenger'?: Ptsv2paymentsOrderInformationPassenger;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationPassenger {
    'type'?: string;
    'status'?: string;
    'phone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'id'?: string;
    'email'?: string;
    'nationality'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationShipTo {
    'title'?: string;
    'firstName'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'district'?: string;
    'buildingNumber'?: string;
    'phoneNumber'?: string;
    'company'?: string;
    'destinationTypes'?: string;
    'destinationCode'?: number;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsOrderInformationShippingDetails {
    'giftWrap'?: boolean;
    'shippingMethod'?: string;
    'shipFromPostalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformation {
    'intent'?: string;
    'countryCode'?: string;
    'card'?: Ptsv2paymentsPaymentInformationCard;
    'tokenizedCard'?: Ptsv2paymentsPaymentInformationTokenizedCard;
    'fluidData'?: Ptsv2paymentsPaymentInformationFluidData;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    'paymentInstrument'?: Ptsv2paymentsPaymentInformationPaymentInstrument;
    'instrumentIdentifier'?: Ptsv2paymentsPaymentInformationInstrumentIdentifier;
    'shippingAddress'?: Ptsv2paymentsPaymentInformationShippingAddress;
    'legacyToken'?: Ptsv2paymentsPaymentInformationLegacyToken;
    'bank'?: Ptsv2paymentsPaymentInformationBank;
    'paymentType'?: Ptsv2paymentsPaymentInformationPaymentType;
    'initiationChannel'?: string;
    'eWallet'?: Ptsv2paymentsPaymentInformationEWallet;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationBank {
    'account'?: Ptsv2paymentsPaymentInformationBankAccount;
    'routingNumber'?: string;
    'iban'?: string;
    'swiftCode'?: string;
    'code'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationBankAccount {
    'type'?: string;
    'number'?: string;
    'encoderId'?: string;
    'checkNumber'?: string;
    'checkImageReferenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationCard {
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'type'?: string;
    'useAs'?: string;
    'sourceAccountType'?: string;
    'sourceAccountTypeDetails'?: string;
    'securityCode'?: string;
    'securityCodeIndicator'?: string;
    'accountEncoderId'?: string;
    'issueNumber'?: string;
    'startMonth'?: string;
    'startYear'?: string;
    'productName'?: string;
    'typeSelectionIndicator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationCustomer {
    'customerId'?: string;
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationEWallet {
    'accountId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationFluidData {
    'keySerialNumber'?: string;
    'descriptor'?: string;
    'value'?: string;
    'encoding'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationInstrumentIdentifier {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationLegacyToken {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationPaymentInstrument {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationPaymentType {
    'name'?: string;
    'method'?: Ptsv2paymentsPaymentInformationPaymentTypeMethod;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationPaymentTypeMethod {
    'name'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationShippingAddress {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPaymentInformationTokenizedCard {
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'type'?: string;
    'cryptogram'?: string;
    'requestorId'?: string;
    'transactionType'?: string;
    'assuranceLevel'?: string;
    'storageMethod'?: string;
    'securityCode'?: string;
    'securityCodeIndicator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPointOfSaleInformation {
    'terminalId'?: string;
    'terminalSerialNumber'?: string;
    'cardholderVerificationMethodUsed'?: number;
    'laneNumber'?: string;
    'catLevel'?: number;
    'entryMode'?: string;
    'terminalCapability'?: number;
    'operatingEnvironment'?: string;
    'emv'?: Ptsv2paymentsPointOfSaleInformationEmv;
    'amexCapnData'?: string;
    'trackData'?: string;
    'storeAndForwardIndicator'?: string;
    'cardholderVerificationMethod'?: Array<string>;
    'terminalInputCapability'?: Array<string>;
    'terminalCardCaptureCapability'?: string;
    'terminalOutputCapability'?: string;
    'terminalPinCapability'?: number;
    'deviceId'?: string;
    'pinBlockEncodingFormat'?: number;
    'encryptedPin'?: string;
    'encryptedKeySerialNumber'?: string;
    'partnerSdkVersion'?: string;
    'emvApplicationIdentifierAndDedicatedFileName'?: string;
    'terminalCompliance'?: string;
    'isDedicatedHardwareTerminal'?: string;
    'terminalModel'?: string;
    'terminalMake'?: string;
    'serviceCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPointOfSaleInformationEmv {
    'tags'?: string;
    'cardholderVerificationMethodUsed'?: number;
    'cardSequenceNumber'?: string;
    'fallback'?: boolean;
    'fallbackCondition'?: number;
    'isRepeat'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformation {
    'actionList'?: Array<string>;
    'enableEscrowOption'?: boolean;
    'actionTokenTypes'?: Array<string>;
    'capture'?: boolean;
    'processorId'?: string;
    'businessApplicationId'?: string;
    'commerceIndicator'?: string;
    'commerceIndicatorLabel'?: string;
    'paymentSolution'?: string;
    'reconciliationId'?: string;
    'linkId'?: string;
    'purchaseLevel'?: string;
    'paymentId'?: string;
    'reportGroup'?: string;
    'visaCheckoutId'?: string;
    'industryDataType'?: string;
    'authorizationOptions'?: Ptsv2paymentsProcessingInformationAuthorizationOptions;
    'captureOptions'?: Ptsv2paymentsProcessingInformationCaptureOptions;
    'recurringOptions'?: Ptsv2paymentsProcessingInformationRecurringOptions;
    'bankTransferOptions'?: Ptsv2paymentsProcessingInformationBankTransferOptions;
    'purchaseOptions'?: Ptsv2paymentsProcessingInformationPurchaseOptions;
    'electronicBenefitsTransfer'?: Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer;
    'loanOptions'?: Ptsv2paymentsProcessingInformationLoanOptions;
    'walletType'?: string;
    'nationalNetDomesticData'?: string;
    'japanPaymentOptions'?: Ptsv2paymentsProcessingInformationJapanPaymentOptions;
    'mobileRemotePaymentType'?: string;
    'extendedCreditTotalCount'?: string;
    'networkRoutingOrder'?: string;
    'payByPointsIndicator'?: boolean;
    'isReturnAuthRecordEnabled'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationAuthorizationOptions {
    'authType'?: string;
    'panReturnIndicator'?: string;
    'verbalAuthCode'?: string;
    'verbalAuthTransactionId'?: string;
    'authIndicator'?: string;
    'partialAuthIndicator'?: boolean;
    'balanceInquiry'?: boolean;
    'ignoreAvsResult'?: boolean;
    'declineAvsFlags'?: Array<string>;
    'ignoreCvResult'?: boolean;
    'initiator'?: Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator;
    'billPayment'?: boolean;
    'billPaymentType'?: string;
    'redemptionInquiry'?: boolean;
    'transportationMode'?: string;
    'aggregatedAuthIndicator'?: string;
    'debtRecoveryIndicator'?: string;
    'deferredAuthIndicator'?: boolean;
    'cashAdvanceIndicator'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator {
    'type'?: string;
    'credentialStoredOnFile'?: boolean;
    'storedCredentialUsed'?: boolean;
    'merchantInitiatedTransaction'?: Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction {
    'reason'?: string;
    'previousTransactionId'?: string;
    'originalAuthorizedAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationBankTransferOptions {
    'declineAvsFlags'?: string;
    'secCode'?: string;
    'terminalCity'?: string;
    'terminalState'?: string;
    'effectiveDate'?: string;
    'partialPaymentId'?: string;
    'customerMemo'?: string;
    'paymentCategoryCode'?: string;
    'settlementMethod'?: string;
    'fraudScreeningLevel'?: string;
    'customerPresent'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationCaptureOptions {
    'captureSequenceNumber'?: number;
    'totalCaptureCount'?: number;
    'dateToCapture'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer {
    'category'?: string;
    'voucherSerialNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationJapanPaymentOptions {
    'paymentMethod'?: string;
    'bonuses'?: string;
    'bonusMonth'?: string;
    'secondBonusMonth'?: string;
    'bonusAmount'?: string;
    'secondBonusAmount'?: string;
    'preapprovalType'?: string;
    'installments'?: string;
    'terminalId'?: string;
    'firstBillingMonth'?: string;
    'businessName'?: string;
    'businessNameKatakana'?: string;
    'jis2TrackData'?: string;
    'businessNameAlphaNumeric'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationLoanOptions {
    'type'?: string;
    'assetType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationPurchaseOptions {
    'isElectronicBenefitsTransfer'?: boolean;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessingInformationRecurringOptions {
    'loanPayment'?: boolean;
    'firstRecurringPayment'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessorInformation {
    'preApprovalToken'?: string;
    'authorizationOptions'?: Ptsv2paymentsProcessorInformationAuthorizationOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsProcessorInformationAuthorizationOptions {
    'panReturnIndicator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsPromotionInformation {
    'additionalCode'?: string;
    'code'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRecipientInformation {
    'accountId'?: string;
    'lastName'?: string;
    'middleName'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRecurringPaymentInformation {
    'endDate'?: string;
    'frequency'?: number;
    'numberOfPayments'?: number;
    'originalPurchaseDate'?: string;
    'sequenceNumber'?: number;
    'type'?: string;
    'occurrence'?: string;
    'validationIndicator'?: string;
    'amountType'?: string;
    'maximumAmount'?: string;
    'referenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRiskInformation {
    'profile'?: Ptsv2paymentsRiskInformationProfile;
    'eventType'?: string;
    'buyerHistory'?: Ptsv2paymentsRiskInformationBuyerHistory;
    'auxiliaryData'?: Array<Ptsv2paymentsRiskInformationAuxiliaryData>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRiskInformationAuxiliaryData {
    'key'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRiskInformationBuyerHistory {
    'customerAccount'?: Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount;
    'accountHistory'?: Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory;
    'accountPurchases'?: number;
    'addCardAttempts'?: number;
    'priorSuspiciousActivity'?: boolean;
    'paymentAccountHistory'?: string;
    'paymentAccountDate'?: number;
    'transactionCountDay'?: number;
    'transactionCountYear'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory {
    'firstUseOfShippingAddress'?: boolean;
    'shippingAddressUsageDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount {
    'lastChangeDate'?: string;
    'creationHistory'?: string;
    'modificationHistory'?: string;
    'passwordHistory'?: string;
    'createDate'?: string;
    'passwordChangeDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsRiskInformationProfile {
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTokenInformation {
    'jti'?: string;
    'transientTokenJwt'?: string;
    'paymentInstrument'?: Ptsv2paymentsTokenInformationPaymentInstrument;
    'shippingAddress'?: Ptsv2paymentsTokenInformationShippingAddress;
    'networkTokenOption'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTokenInformationPaymentInstrument {
    '_default'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTokenInformationShippingAddress {
    '_default'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformation {
    'duration'?: string;
    'agency'?: Ptsv2paymentsTravelInformationAgency;
    'autoRental'?: Ptsv2paymentsTravelInformationAutoRental;
    'lodging'?: Ptsv2paymentsTravelInformationLodging;
    'transit'?: Ptsv2paymentsTravelInformationTransit;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationAgency {
    'code'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationAutoRental {
    'noShowIndicator'?: boolean;
    'customerName'?: string;
    'vehicleClass'?: string;
    'distanceTravelled'?: string;
    'distanceUnit'?: string;
    'returnDateTime'?: string;
    'rentalDateTime'?: string;
    'maxFreeDistance'?: string;
    'insuranceIndicator'?: boolean;
    'programCode'?: string;
    'returnAddress'?: Ptsv2paymentsTravelInformationAutoRentalReturnAddress;
    'rentalAddress'?: Ptsv2paymentsTravelInformationAutoRentalRentalAddress;
    'agreementNumber'?: string;
    'odometerReading'?: string;
    'vehicleIdentificationNumber'?: string;
    'companyId'?: string;
    'numberOfAdditionalDrivers'?: string;
    'driverAge'?: string;
    'specialProgramCode'?: string;
    'vehicleMake'?: string;
    'vehicleModel'?: string;
    'timePeriod'?: string;
    'commodityCode'?: string;
    'customerServicePhoneNumber'?: string;
    'taxDetails'?: Ptsv2paymentsTravelInformationAutoRentalTaxDetails;
    'insuranceAmount'?: string;
    'oneWayDropOffAmount'?: string;
    'adjustedAmountIndicator'?: string;
    'adjustedAmount'?: string;
    'fuelCharges'?: string;
    'weeklyRentalRate'?: string;
    'dailyRentalRate'?: string;
    'ratePerMile'?: string;
    'mileageCharge'?: string;
    'extraMileageCharge'?: string;
    'lateFeeAmount'?: string;
    'towingCharge'?: string;
    'extraCharge'?: string;
    'gpsCharge'?: string;
    'phoneCharge'?: string;
    'parkingViolationCharge'?: string;
    'otherCharges'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationAutoRentalRentalAddress {
    'city'?: string;
    'state'?: string;
    'country'?: string;
    'locationId'?: string;
    'address1'?: string;
    'address2'?: string;
    'location'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationAutoRentalReturnAddress {
    'city'?: string;
    'state'?: string;
    'country'?: string;
    'locationId'?: string;
    'location'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationAutoRentalTaxDetails {
    'amount'?: string;
    'rate'?: string;
    'applied'?: boolean;
    'exemptionCode'?: string;
    'taxType'?: string;
    'taxSummary'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationLodging {
    'checkInDate'?: string;
    'checkOutDate'?: string;
    'room'?: Array<Ptsv2paymentsTravelInformationLodgingRoom>;
    'smokingPreference'?: string;
    'numberOfRooms'?: number;
    'numberOfGuests'?: number;
    'roomBedType'?: string;
    'roomTaxType'?: string;
    'roomRateType'?: string;
    'guestName'?: string;
    'customerServicePhoneNumber'?: string;
    'corporateClientCode'?: string;
    'additionalDiscountAmount'?: string;
    'roomLocation'?: string;
    'specialProgramCode'?: string;
    'totalTaxAmount'?: string;
    'prepaidCost'?: string;
    'foodAndBeverageCost'?: string;
    'roomTaxAmount'?: string;
    'adjustmentAmount'?: string;
    'phoneCost'?: string;
    'restaurantCost'?: string;
    'roomServiceCost'?: string;
    'miniBarCost'?: string;
    'laundryCost'?: string;
    'miscellaneousCost'?: string;
    'giftShopCost'?: string;
    'movieCost'?: string;
    'healthClubCost'?: string;
    'valetParkingCost'?: string;
    'cashDisbursementCost'?: string;
    'nonRoomCost'?: string;
    'businessCenterCost'?: string;
    'loungeBarCost'?: string;
    'transportationCost'?: string;
    'gratuityAmount'?: string;
    'conferenceRoomCost'?: string;
    'audioVisualCost'?: string;
    'banquestCost'?: string;
    'nonRoomTaxAmount'?: string;
    'earlyCheckOutCost'?: string;
    'internetAccessCost'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationLodgingRoom {
    'dailyRate'?: string;
    'numberOfNights'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationTransit {
    'airline'?: Ptsv2paymentsTravelInformationTransitAirline;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationTransitAirline {
    'bookingReferenceNumber'?: string;
    'carrierName'?: string;
    'ticketIssuer'?: Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer;
    'ticketNumber'?: string;
    'checkDigit'?: string;
    'restrictedTicketIndicator'?: number;
    'transactionType'?: number;
    'extendedPaymentCode'?: string;
    'passengerName'?: string;
    'customerCode'?: string;
    'documentType'?: string;
    'documentNumber'?: string;
    'documentNumberOfParts'?: number;
    'invoiceNumber'?: string;
    'invoiceDate'?: number;
    'additionalCharges'?: string;
    'totalFeeAmount'?: string;
    'clearingSequence'?: string;
    'clearingCount'?: string;
    'totalClearingAmount'?: string;
    'numberOfPassengers'?: number;
    'reservationSystemCode'?: string;
    'processIdentifier'?: string;
    'ticketIssueDate'?: string;
    'electronicTicketIndicator'?: boolean;
    'originalTicketNumber'?: string;
    'purchaseType'?: string;
    'creditReasonIndicator'?: string;
    'ticketChangeIndicator'?: string;
    'planNumber'?: string;
    'arrivalDate'?: string;
    'restrictedTicketDesciption'?: string;
    'exchangeTicketAmount'?: string;
    'exchangeTicketFeeAmount'?: string;
    'reservationType'?: string;
    'boardingFeeAmount'?: string;
    'legs'?: Array<Ptsv2paymentsTravelInformationTransitAirlineLegs>;
    'ancillaryInformation'?: Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation {
    'ticketNumber'?: string;
    'passengerName'?: string;
    'connectedTicketNumber'?: string;
    'creditReasonIndicator'?: string;
    'service'?: Array<Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService {
    'categoryCode'?: string;
    'subCategoryCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationTransitAirlineLegs {
    'carrierCode'?: string;
    'flightNumber'?: string;
    'originatingAirportCode'?: string;
    '_class'?: string;
    'stopoverIndicator'?: number;
    'departureDate'?: number;
    'destinationAirportCode'?: string;
    'fareBasis'?: string;
    'departTaxAmount'?: string;
    'conjunctionTicket'?: string;
    'exchangeTicketNumber'?: string;
    'couponNumber'?: string;
    'departureTime'?: number;
    'departureTimeMeridian'?: string;
    'arrivalTime'?: number;
    'arrivalTimeMeridian'?: string;
    'endorsementsRestrictions'?: string;
    'totalFareAmount'?: string;
    'feeAmount'?: string;
    'taxAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer {
    'code'?: string;
    'name'?: string;
    'address'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidClientReferenceInformation {
    'code'?: string;
    'partner'?: Ptsv2paymentsidClientReferenceInformationPartner;
    'applicationName'?: string;
    'applicationVersion'?: string;
    'applicationUser'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidClientReferenceInformationPartner {
    'originalTransactionId'?: string;
    'developerId'?: string;
    'solutionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidMerchantInformation {
    'transactionLocalDateTime'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidOrderInformation {
    'amountDetails'?: Ptsv2paymentsidOrderInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidOrderInformationAmountDetails {
    'additionalAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidProcessingInformation {
    'authorizationOptions'?: Ptsv2paymentsidProcessingInformationAuthorizationOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidProcessingInformationAuthorizationOptions {
    'initiator'?: Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator {
    'storedCredentialUsed'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidTravelInformation {
    'duration'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesAggregatorInformation {
    'aggregatorId'?: string;
    'name'?: string;
    'subMerchant'?: Ptsv2paymentsidcapturesAggregatorInformationSubMerchant;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesAggregatorInformationSubMerchant {
    'name'?: string;
    'address1'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesBuyerInformation {
    'merchantCustomerId'?: string;
    'vatRegistrationNumber'?: string;
    'dateOfBirth'?: string;
    'gender'?: string;
    'language'?: string;
    'personalIdentification'?: Array<Ptsv2paymentsidcapturesBuyerInformationPersonalIdentification>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesBuyerInformationPersonalIdentification {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesDeviceInformation {
    'hostName'?: string;
    'ipAddress'?: string;
    'userAgent'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesInstallmentInformation {
    'amount'?: string;
    'frequency'?: string;
    'planType'?: string;
    'sequence'?: number;
    'totalAmount'?: string;
    'totalCount'?: number;
    'firstInstallmentDate'?: string;
    'firstInstallmentAmount'?: string;
    'invoiceData'?: string;
    'paymentType'?: string;
    'additionalCosts'?: string;
    'additionalCostsPercentage'?: string;
    'amountFunded'?: string;
    'amountRequestedPercentage'?: string;
    'annualFinancingCost'?: string;
    'annualInterestRate'?: string;
    'expenses'?: string;
    'expensesPercentage'?: string;
    'fees'?: string;
    'feesPercentage'?: string;
    'insurance'?: string;
    'insurancePercentage'?: string;
    'monthlyInterestRate'?: string;
    'taxes'?: string;
    'taxesPercentage'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesMerchantInformation {
    'merchantDescriptor'?: Ptsv2paymentsMerchantInformationMerchantDescriptor;
    'cardAcceptorReferenceNumber'?: string;
    'categoryCode'?: number;
    'vatRegistrationNumber'?: string;
    'serviceFeeDescriptor'?: Ptsv2paymentsMerchantInformationServiceFeeDescriptor;
    'taxId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesOrderInformation {
    'amountDetails'?: Ptsv2paymentsidcapturesOrderInformationAmountDetails;
    'billTo'?: Ptsv2paymentsidcapturesOrderInformationBillTo;
    'shipTo'?: Ptsv2paymentsidcapturesOrderInformationShipTo;
    'lineItems'?: Array<Ptsv2paymentsOrderInformationLineItems>;
    'invoiceDetails'?: Ptsv2paymentsidcapturesOrderInformationInvoiceDetails;
    'shippingDetails'?: Ptsv2paymentsidcapturesOrderInformationShippingDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'discountAmount'?: string;
    'dutyAmount'?: string;
    'gratuityAmount'?: string;
    'taxAmount'?: string;
    'nationalTaxIncluded'?: string;
    'taxAppliedAfterDiscount'?: string;
    'taxAppliedLevel'?: string;
    'taxTypeCode'?: string;
    'freightAmount'?: string;
    'foreignAmount'?: string;
    'foreignCurrency'?: string;
    'exchangeRate'?: string;
    'exchangeRateTimeStamp'?: string;
    'amexAdditionalAmounts'?: Array<Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts>;
    'taxDetails'?: Array<Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>;
    'serviceFeeAmount'?: string;
    'originalCurrency'?: string;
    'cashbackAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesOrderInformationBillTo {
    'title'?: string;
    'firstName'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'company'?: Ptsv2paymentsOrderInformationBillToCompany;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'district'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'county'?: string;
    'country'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesOrderInformationInvoiceDetails {
    'purchaseOrderNumber'?: string;
    'purchaseOrderDate'?: string;
    'purchaseContactName'?: string;
    'taxable'?: boolean;
    'vatInvoiceReferenceNumber'?: string;
    'commodityCode'?: string;
    'transactionAdviceAddendum'?: Array<Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesOrderInformationShipTo {
    'administrativeArea'?: string;
    'country'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesOrderInformationShippingDetails {
    'shipFromPostalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesPaymentInformation {
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    'card'?: Ptsv2paymentsidcapturesPaymentInformationCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesPaymentInformationCard {
    'sourceAccountType'?: string;
    'sourceAccountTypeDetails'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesPointOfSaleInformation {
    'emv'?: Ptsv2paymentsidcapturesPointOfSaleInformationEmv;
    'amexCapnData'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesPointOfSaleInformationEmv {
    'tags'?: string;
    'fallback'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesProcessingInformation {
    'paymentSolution'?: string;
    'reconciliationId'?: string;
    'linkId'?: string;
    'reportGroup'?: string;
    'visaCheckoutId'?: string;
    'purchaseLevel'?: string;
    'industryDataType'?: string;
    'issuer'?: Ptsv2paymentsIssuerInformation;
    'authorizationOptions'?: Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions;
    'captureOptions'?: Ptsv2paymentsidcapturesProcessingInformationCaptureOptions;
    'loanOptions'?: Ptsv2paymentsProcessingInformationLoanOptions;
    'payByPointsIndicator'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions {
    'authType'?: string;
    'verbalAuthCode'?: string;
    'verbalAuthTransactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidcapturesProcessingInformationCaptureOptions {
    'captureSequenceNumber'?: number;
    'totalCaptureCount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsClientReferenceInformation {
    'code'?: string;
    'reconciliationId'?: string;
    'returnReconciliationId'?: string;
    'pausedRequestId'?: string;
    'transactionId'?: string;
    'comments'?: string;
    'partner'?: Ptsv2paymentsClientReferenceInformationPartner;
    'applicationName'?: string;
    'applicationVersion'?: string;
    'applicationUser'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsMerchantInformation {
    'merchantDescriptor'?: Ptsv2paymentsMerchantInformationMerchantDescriptor;
    'categoryCode'?: number;
    'vatRegistrationNumber'?: string;
    'cardAcceptorReferenceNumber'?: string;
    'taxId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsOrderInformation {
    'amountDetails'?: Ptsv2paymentsidcapturesOrderInformationAmountDetails;
    'billTo'?: Ptsv2paymentsidcapturesOrderInformationBillTo;
    'shipTo'?: Ptsv2paymentsidcapturesOrderInformationShipTo;
    'lineItems'?: Array<Ptsv2paymentsidrefundsOrderInformationLineItems>;
    'invoiceDetails'?: Ptsv2paymentsidcapturesOrderInformationInvoiceDetails;
    'shippingDetails'?: Ptsv2paymentsidcapturesOrderInformationShippingDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsOrderInformationLineItems {
    'productCode'?: string;
    'productName'?: string;
    'productSku'?: string;
    'quantity'?: number;
    'unitPrice'?: string;
    'unitOfMeasure'?: string;
    'totalAmount'?: string;
    'taxAmount'?: string;
    'taxRate'?: string;
    'taxAppliedAfterDiscount'?: string;
    'taxStatusIndicator'?: string;
    'taxTypeCode'?: string;
    'amountIncludesTax'?: boolean;
    'typeOfSupply'?: string;
    'commodityCode'?: string;
    'discountAmount'?: string;
    'discountApplied'?: boolean;
    'discountRate'?: string;
    'invoiceNumber'?: string;
    'taxDetails'?: Array<Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPaymentInformation {
    'card'?: Ptsv2paymentsidrefundsPaymentInformationCard;
    'bank'?: Ptsv2paymentsidrefundsPaymentInformationBank;
    'tokenizedCard'?: Ptsv2paymentsPaymentInformationTokenizedCard;
    'fluidData'?: Ptsv2paymentsPaymentInformationFluidData;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    'paymentInstrument'?: Ptsv2paymentsPaymentInformationPaymentInstrument;
    'instrumentIdentifier'?: Ptsv2paymentsPaymentInformationInstrumentIdentifier;
    'shippingAddress'?: Ptsv2paymentsPaymentInformationShippingAddress;
    'legacyToken'?: Ptsv2paymentsPaymentInformationLegacyToken;
    'paymentType'?: Ptsv2paymentsidrefundsPaymentInformationPaymentType;
    'eWallet'?: Ptsv2paymentsidrefundsPaymentInformationEWallet;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPaymentInformationBank {
    'account'?: Ptsv2paymentsPaymentInformationBankAccount;
    'routingNumber'?: string;
    'iban'?: string;
    'swiftCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPaymentInformationCard {
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'type'?: string;
    'accountEncoderId'?: string;
    'issueNumber'?: string;
    'startMonth'?: string;
    'startYear'?: string;
    'sourceAccountType'?: string;
    'sourceAccountTypeDetails'?: string;
    'securityCode'?: string;
    'useAs'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPaymentInformationEWallet {
    'fundingSource'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPaymentInformationPaymentType {
    'name'?: string;
    'subTypeName'?: string;
    'method'?: Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod {
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsPointOfSaleInformation {
    'emv'?: Ptsv2paymentsidcapturesPointOfSaleInformationEmv;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsProcessingInformation {
    'actionList'?: Array<string>;
    'paymentSolution'?: string;
    'reconciliationId'?: string;
    'linkId'?: string;
    'reportGroup'?: string;
    'visaCheckoutId'?: string;
    'purchaseLevel'?: string;
    'recurringOptions'?: Ptsv2paymentsidrefundsProcessingInformationRecurringOptions;
    'industryDataType'?: string;
    'paymentType'?: string;
    'refundOptions'?: Ptsv2paymentsidrefundsProcessingInformationRefundOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsProcessingInformationRecurringOptions {
    'loanPayment'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidrefundsProcessingInformationRefundOptions {
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsClientReferenceInformation {
    'code'?: string;
    'pausedRequestId'?: string;
    'comments'?: string;
    'partner'?: Ptsv2paymentsidreversalsClientReferenceInformationPartner;
    'applicationName'?: string;
    'applicationVersion'?: string;
    'applicationUser'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsClientReferenceInformationPartner {
    'developerId'?: string;
    'solutionId'?: string;
    'thirdPartyCertificationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsOrderInformation {
    'amountDetails'?: Ptsv2paymentsidreversalsOrderInformationAmountDetails;
    'lineItems'?: Array<Ptsv2paymentsidreversalsOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsOrderInformationAmountDetails {
    'serviceFeeAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsOrderInformationLineItems {
    'quantity'?: number;
    'unitPrice'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsPointOfSaleInformation {
    'emv'?: Ptsv2paymentsidreversalsPointOfSaleInformationEmv;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsPointOfSaleInformationEmv {
    'tags'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsProcessingInformation {
    'paymentSolution'?: string;
    'reconciliationId'?: string;
    'linkId'?: string;
    'reportGroup'?: string;
    'visaCheckoutId'?: string;
    'issuer'?: Ptsv2paymentsIssuerInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsReversalInformation {
    'amountDetails'?: Ptsv2paymentsidreversalsReversalInformationAmountDetails;
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidreversalsReversalInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidvoidsOrderInformation {
    'amountDetails'?: Ptsv2paymentsidreversalsReversalInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2paymentsidvoidsPaymentInformation {
    'paymentType'?: Ptsv2paymentsidrefundsPaymentInformationPaymentType;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsClientReferenceInformation {
    'code'?: string;
    'applicationName'?: string;
    'applicationVersion'?: string;
    'applicationUser'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsMerchantInformation {
    'categoryCode'?: number;
    'submitLocalDateTime'?: string;
    'vatRegistrationNumber'?: string;
    'merchantDescriptor'?: Ptsv2payoutsMerchantInformationMerchantDescriptor;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsMerchantInformationMerchantDescriptor {
    'name'?: string;
    'locality'?: string;
    'country'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'contact'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsOrderInformation {
    'amountDetails'?: Ptsv2payoutsOrderInformationAmountDetails;
    'billTo'?: Ptsv2payoutsOrderInformationBillTo;
    'isCryptocurrencyPurchase'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'surcharge'?: Ptsv2payoutsOrderInformationAmountDetailsSurcharge;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsOrderInformationAmountDetailsSurcharge {
    'amount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsOrderInformationBillTo {
    'firstName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'address2'?: string;
    'country'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'phoneNumber'?: string;
    'phoneType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsPaymentInformation {
    'card'?: Ptsv2payoutsPaymentInformationCard;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsPaymentInformationCard {
    'type'?: string;
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'sourceAccountType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsProcessingInformation {
    'businessApplicationId'?: string;
    'networkRoutingOrder'?: string;
    'commerceIndicator'?: string;
    'reconciliationId'?: string;
    'payoutsOptions'?: Ptsv2payoutsProcessingInformationPayoutsOptions;
    'transactionReason'?: string;
    'purposeOfPayment'?: string;
    'fundingOptions'?: Ptsv2payoutsProcessingInformationFundingOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsProcessingInformationFundingOptions {
    'initiator'?: Ptsv2payoutsProcessingInformationFundingOptionsInitiator;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsProcessingInformationFundingOptionsInitiator {
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsProcessingInformationPayoutsOptions {
    'acquirerMerchantId'?: string;
    'acquirerBin'?: string;
    'retrievalReferenceNumber'?: string;
    'accountFundingReferenceId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsRecipientInformation {
    'firstName'?: string;
    'middleInitial'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'postalCode'?: string;
    'phoneNumber'?: string;
    'dateOfBirth'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsSenderInformation {
    'referenceNumber'?: string;
    'account'?: Ptsv2payoutsSenderInformationAccount;
    'firstName'?: string;
    'middleInitial'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'name'?: string;
    'address1'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'countryCode'?: string;
    'postalCode'?: string;
    'phoneNumber'?: string;
    'dateOfBirth'?: string;
    'vatRegistrationNumber'?: string;
    'personalIdType'?: string;
    'type'?: string;
    'identificationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2payoutsSenderInformationAccount {
    'fundsSource'?: string;
    'number'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2refreshpaymentstatusidAgreementInformation {
    'agreementId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2refreshpaymentstatusidClientReferenceInformation {
    'code'?: string;
    'reconciliationId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2refreshpaymentstatusidPaymentInformation {
    'customer'?: Ptsv2refreshpaymentstatusidPaymentInformationCustomer;
    'paymentType'?: Ptsv2refreshpaymentstatusidPaymentInformationPaymentType;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2refreshpaymentstatusidPaymentInformationCustomer {
    'customerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2refreshpaymentstatusidPaymentInformationPaymentType {
    'name'?: string;
    'method'?: Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2refreshpaymentstatusidProcessingInformation {
    'actionList'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Ptsv2voidsProcessingInformation {
    'paymentId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201Response {
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reconciliationId'?: string;
    'clientReferenceInformation'?: PushFunds201ResponseClientReferenceInformation;
    'recipientInformation'?: PushFunds201ResponseRecipientInformation;
    'merchantInformation'?: PushFunds201ResponseMerchantInformation;
    'errorInformation'?: PushFunds201ResponseErrorInformation;
    'processorInformation'?: PushFunds201ResponseProcessorInformation;
    'orderInformation'?: PushFunds201ResponseOrderInformation;
    'links'?: PushFunds201ResponseLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseClientReferenceInformation {
    'code'?: string;
    'submitLocalDateTime'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PushFunds201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseErrorInformationDetails {
    'field'?: string;
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseLinks {
    'self'?: PushFunds201ResponseLinksSelf;
    'customer'?: PushFunds201ResponseLinksCustomer;
    'paymentInstrument'?: PushFunds201ResponseLinksPaymentInstrument;
    'instrumentIdentifier'?: PushFunds201ResponseLinksInstrumentIdentifier;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseLinksCustomer {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseLinksInstrumentIdentifier {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseLinksPaymentInstrument {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseLinksSelf {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseMerchantInformation {
    'merchantDescriptor'?: PushFunds201ResponseMerchantInformationMerchantDescriptor;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseMerchantInformationMerchantDescriptor {
    'name'?: string;
    'locality'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseOrderInformation {
    'amountDetails'?: PushFunds201ResponseOrderInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency': string;
    'settlementAmount'?: string;
    'settlementCurrency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseProcessorInformation {
    'transactionId'?: number;
    'responseCode'?: string;
    'approvalCode'?: string;
    'systemTraceAuditNumber'?: string;
    'responseCodeSource'?: string;
    'retrievalReferenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseRecipientInformation {
    'card'?: PushFunds201ResponseRecipientInformationCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds201ResponseRecipientInformationCard {
    'balance'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds400Response {
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PushFunds400ResponseDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds400ResponseDetails {
    'field'?: string;
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds401Response {
    'id'?: string;
    'submitTimeUtc'?: string;
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds404Response {
    'id'?: string;
    'submitTimeUtc'?: string;
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFunds502Response {
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PushFundsRequest {
    'clientReferenceInformation'?: Ptsv1pushfundstransferClientReferenceInformation;
    'orderInformation': Ptsv1pushfundstransferOrderInformation;
    'processingInformation': Ptsv1pushfundstransferProcessingInformation;
    'processingOptions'?: Ptsv1pushfundstransferProcessingOptions;
    'recipientInformation'?: Ptsv1pushfundstransferRecipientInformation;
    'senderInformation': Ptsv1pushfundstransferSenderInformation;
    'aggregatorInformation'?: Ptsv1pushfundstransferAggregatorInformation;
    'merchantDefinedInformation'?: Ptsv1pushfundstransferMerchantDefinedInformation;
    'merchantInformation'?: Ptsv1pushfundstransferMerchantInformation;
    'pointOfServiceInformation'?: Ptsv1pushfundstransferPointOfServiceInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RefreshPaymentStatusRequest {
    'paymentInformation'?: Ptsv2refreshpaymentstatusidPaymentInformation;
    'clientReferenceInformation'?: Ptsv2refreshpaymentstatusidClientReferenceInformation;
    'agreementInformation'?: Ptsv2refreshpaymentstatusidAgreementInformation;
    'processingInformation'?: Ptsv2refreshpaymentstatusidProcessingInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RefundCaptureRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidrefundsClientReferenceInformation;
    'processingInformation'?: Ptsv2paymentsidrefundsProcessingInformation;
    'paymentInformation'?: Ptsv2paymentsidrefundsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidrefundsOrderInformation;
    'buyerInformation'?: Ptsv2paymentsidcapturesBuyerInformation;
    'deviceInformation'?: Ptsv2paymentsidcapturesDeviceInformation;
    'merchantInformation'?: Ptsv2paymentsidrefundsMerchantInformation;
    'aggregatorInformation'?: Ptsv2paymentsidcapturesAggregatorInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsidrefundsPointOfSaleInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'travelInformation'?: Ptsv2paymentsTravelInformation;
    'promotionInformation'?: Ptsv2paymentsPromotionInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RefundPaymentRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidrefundsClientReferenceInformation;
    'processingInformation'?: Ptsv2paymentsidrefundsProcessingInformation;
    'paymentInformation'?: Ptsv2paymentsidrefundsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidrefundsOrderInformation;
    'buyerInformation'?: Ptsv2paymentsidcapturesBuyerInformation;
    'deviceInformation'?: Ptsv2paymentsidcapturesDeviceInformation;
    'merchantInformation'?: Ptsv2paymentsidrefundsMerchantInformation;
    'aggregatorInformation'?: Ptsv2paymentsidcapturesAggregatorInformation;
    'pointOfSaleInformation'?: Ptsv2paymentsidrefundsPointOfSaleInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'travelInformation'?: Ptsv2paymentsTravelInformation;
    'promotionInformation'?: Ptsv2paymentsPromotionInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ChargebackDetailsGet200Response {
    'organizationId'?: string;
    'startTime'?: Date;
    'endTime'?: Date;
    'chargebackDetails'?: Array<ReportingV3ChargebackDetailsGet200ResponseChargebackDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ChargebackDetailsGet200ResponseChargebackDetails {
    'processorMerchantId'?: string;
    'merchantName'?: string;
    'transactionReferenceNumber'?: string;
    'merchantReferenceNumber'?: string;
    'natureOfDispute'?: string;
    'alertType'?: string;
    'amount'?: string;
    'sign'?: string;
    'action'?: string;
    'cardType'?: string;
    'originalSettlementTime'?: Date;
    'trackingNumber'?: string;
    'currencyCode'?: string;
    'requestId'?: string;
    'responseDueTime'?: Date;
    'time'?: Date;
    'actionDescription'?: string;
    'customerId'?: string;
    'reasonCode'?: string;
    'representmentCPTime'?: Date;
    'applications'?: string;
    'eventRequestedTime'?: Date;
    'preDisputeFlag'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ChargebackSummariesGet200Response {
    'organizationId'?: string;
    'startTime'?: Date;
    'endTime'?: string;
    'chargebackSummaries'?: Array<ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries {
    'count'?: number;
    'time'?: Date;
    'accountId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ConversionDetailsGet200Response {
    'organizationId'?: string;
    'startTime'?: Date;
    'endTime'?: Date;
    'conversionDetails'?: Array<ReportingV3ConversionDetailsGet200ResponseConversionDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ConversionDetailsGet200ResponseConversionDetails {
    'merchantReferenceNumber'?: string;
    'conversionTime'?: Date;
    'requestId'?: string;
    'originalDecision'?: string;
    'newDecision'?: string;
    'reviewer'?: string;
    'reviewerComments'?: string;
    'queue'?: string;
    'profile'?: string;
    'notes'?: Array<ReportingV3ConversionDetailsGet200ResponseNotes>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ConversionDetailsGet200ResponseNotes {
    'time'?: Date;
    'addedBy'?: string;
    'comments'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3InterchangeClearingLevelDetailsGet200Response {
    'startDate'?: Date;
    'endDate'?: Date;
    'interchangeClearingLevelDetails'?: Array<ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3InterchangeClearingLevelDetailsGet200ResponseInterchangeClearingLevelDetails {
    'requestId'?: string;
    'organizationId'?: string;
    'accountId'?: string;
    'processorMerchantId'?: string;
    'transactionReferenceNumber'?: string;
    'merchantReferenceNumber'?: string;
    'accountSuffix'?: string;
    'paymentSubType'?: string;
    'paymentSubTypeDescription'?: string;
    'transactionTime'?: Date;
    'processedTime'?: Date;
    'transactionType'?: string;
    'amount'?: string;
    'currencyCode'?: string;
    'priceType'?: string;
    'priceAmountOne'?: string;
    'priceAmountTwo'?: string;
    'reClass'?: string;
    'settlementTime'?: Date;
    'settlementProcessor'?: string;
    'merchantBatchNumber'?: string;
    'clearedLevel'?: string;
    'billbackReasonCode'?: string;
    'billbackReasonDescription'?: string;
    'merchantPricedLevel'?: string;
    'discountRate'?: string;
    'discountAmount'?: string;
    'clearingRateAmountOne'?: string;
    'clearingRateAmountTwo'?: string;
    'clearingRateAmountThree'?: string;
    'clearingRateCurrencyCode'?: string;
    'interchangeAmount'?: string;
    'billbackAmount'?: string;
    'settlementAmount'?: string;
    'settlementCurrencyCode'?: string;
    'conversionRate'?: string;
    'deltaCost'?: string;
    'surchargeAmount'?: string;
    'percentRateCharged'?: string;
    'perTransactionCharged'?: string;
    'downgradeReasonCode'?: string;
    'processTime'?: Date;
    'authCode'?: string;
    'batchTime'?: Date;
    'processorBatchNumber'?: string;
    'cardIndicator'?: string;
    'minimumUnit'?: number;
    'minimumUnitCurrencyCode'?: string;
    'creditDeltaIndicator'?: string;
    'feeCategory'?: string;
    'applicationName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3NetFundingsGet200Response {
    'startTime'?: Date;
    'endTime'?: Date;
    'netFundingSummaries'?: Array<ReportingV3NetFundingsGet200ResponseNetFundingSummaries>;
    'totalPurchases'?: Array<ReportingV3NetFundingsGet200ResponseTotalPurchases>;
    'totalRefunds'?: Array<ReportingV3NetFundingsGet200ResponseTotalPurchases>;
    'totalFees'?: Array<ReportingV3NetFundingsGet200ResponseTotalPurchases>;
    'totalChargebacks'?: Array<ReportingV3NetFundingsGet200ResponseTotalPurchases>;
    'netTotal'?: Array<ReportingV3NetFundingsGet200ResponseTotalPurchases>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3NetFundingsGet200ResponseNetFundingSummaries {
    'type'?: string;
    'paymentSubType'?: string;
    'conveyedCount'?: number;
    'conveyedAmount'?: string;
    'settledCount'?: number;
    'fundedCount'?: number;
    'fundedAmount'?: string;
    'currencyCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3NetFundingsGet200ResponseTotalPurchases {
    'currency': string;
    'value': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3NotificationofChangesGet200Response {
    'notificationOfChanges'?: Array<ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges {
    'merchantReferenceNumber'?: string;
    'transactionReferenceNumber'?: string;
    'time'?: Date;
    'code'?: string;
    'accountType'?: string;
    'routingNumber'?: string;
    'accountNumber'?: string;
    'consumerName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PaymentBatchSummariesGet200Response {
    'startTime'?: Date;
    'endTime'?: Date;
    'paymentBatchSummaries'?: Array<ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries {
    'currencyCode'?: string;
    'paymentSubTypeDescription'?: string;
    'startTime'?: Date;
    'endTime'?: Date;
    'salesCount'?: number;
    'salesAmount'?: string;
    'creditCount'?: number;
    'creditAmount'?: string;
    'accountName'?: string;
    'accountId'?: string;
    'merchantId'?: string;
    'merchantName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200Response {
    'offset'?: number;
    'limit'?: number;
    'pageResults'?: number;
    'requestDetails'?: Array<ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails>;
    'settlements'?: Array<ReportingV3PurchaseRefundDetailsGet200ResponseSettlements>;
    'authorizations'?: Array<ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations>;
    'feeAndFundingDetails'?: Array<ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails>;
    'others'?: Array<ReportingV3PurchaseRefundDetailsGet200ResponseOthers>;
    'settlementStatuses'?: Array<ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations {
    'requestId'?: string;
    'transactionReferenceNumber'?: string;
    'time'?: Date;
    'authorizationRequestId'?: string;
    'amount'?: string;
    'currencyCode'?: string;
    'code'?: string;
    'rcode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails {
    'requestId'?: string;
    'interchangePerItemFee'?: string;
    'interchangeDescription'?: string;
    'interchangePercentage'?: string;
    'interchangePercentageAmount'?: string;
    'discountPercentage'?: string;
    'discountAmount'?: string;
    'discountPerItemFee'?: string;
    'totalFee'?: string;
    'feeCurrency'?: string;
    'duesAssessments'?: string;
    'fundingAmount'?: string;
    'fundingCurrency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200ResponseOthers {
    'requestId'?: string;
    'merchantData1'?: string;
    'merchantData2'?: string;
    'merchantData3'?: string;
    'merchantData4'?: string;
    'firstName'?: string;
    'lastName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails {
    'requestId'?: string;
    'cybersourceMerchantId'?: string;
    'processorMerchantId'?: string;
    'groupName'?: string;
    'transactionReferenceNumber'?: string;
    'merchantReferenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses {
    'requestId'?: string;
    'status'?: string;
    'settlementTime'?: Date;
    'reasonCode'?: string;
    'errorText'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3PurchaseRefundDetailsGet200ResponseSettlements {
    'requestId'?: string;
    'transactionType'?: string;
    'submissionTime'?: Date;
    'amount'?: string;
    'currencyCode'?: string;
    'paymentMethod'?: string;
    'walletType'?: string;
    'paymentType'?: string;
    'accountSuffix'?: string;
    'cybersourceBatchTime'?: Date;
    'cybersourceBatchId'?: string;
    'cardType'?: string;
    'debitNetwork'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportDefinitionsGet200Response {
    'reportDefinitions'?: Array<ReportingV3ReportDefinitionsGet200ResponseReportDefinitions>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportDefinitionsGet200ResponseReportDefinitions {
    'type'?: string;
    'reportDefinitionId'?: number;
    'reportDefintionName'?: string;
    'supportedFormats'?: Array<string>;
    'description'?: string;
    'defaultSettings'?: ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings;
    'subscriptionType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportDefinitionsNameGet200Response {
    'type'?: string;
    'reportDefinitionId'?: number;
    'reportDefintionName'?: string;
    'attributes'?: Array<ReportingV3ReportDefinitionsNameGet200ResponseAttributes>;
    'supportedFormats'?: Array<string>;
    'description'?: string;
    'defaultSettings'?: ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings;
    'subscriptionType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportDefinitionsNameGet200ResponseAttributes {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'filterType'?: string;
    '_default'?: boolean;
    'required'?: boolean;
    'supportedType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings {
    'reportMimeType'?: string;
    'reportFrequency'?: string;
    'reportName'?: string;
    'timezone'?: string;
    'startTime'?: string;
    'startDay'?: number;
    'reportFilters'?: {
        [key: string]: Array<string>;
    };
    'reportPreferences'?: Reportingv3reportsReportPreferences;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportSubscriptionsGet200Response {
    'subscriptions'?: Array<ReportingV3ReportSubscriptionsGet200ResponseSubscriptions>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportSubscriptionsGet200ResponseSubscriptions {
    'organizationId'?: string;
    'reportDefinitionId'?: string;
    'reportDefinitionName'?: string;
    'reportMimeType'?: string;
    'reportFrequency'?: string;
    'reportInterval'?: string;
    'reportName'?: string;
    'timezone'?: string;
    'startTime'?: Date;
    'startDay'?: number;
    'reportFields'?: Array<string>;
    'reportFilters'?: {
        [key: string]: Array<string>;
    };
    'reportPreferences'?: Reportingv3reportsReportPreferences;
    'groupId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportsGet200Response {
    'reportSearchResults'?: Array<ReportingV3ReportsGet200ResponseReportSearchResults>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportsGet200ResponseLink {
    'reportDownload'?: ReportingV3ReportsGet200ResponseLinkReportDownload;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportsGet200ResponseLinkReportDownload {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportsGet200ResponseReportSearchResults {
    'link'?: ReportingV3ReportsGet200ResponseLink;
    'reportDefinitionId'?: string;
    'reportName'?: string;
    'reportMimeType'?: string;
    'reportFrequency'?: string;
    'status'?: string;
    'reportStartTime'?: Date;
    'reportEndTime'?: Date;
    'timezone'?: string;
    'reportId'?: string;
    'organizationId'?: string;
    'queuedTime'?: Date;
    'reportGeneratingTime'?: Date;
    'reportCompletedTime'?: Date;
    'subscriptionType'?: string;
    'groupId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3ReportsIdGet200Response {
    'organizationId'?: string;
    'reportId'?: string;
    'reportDefinitionId'?: string;
    'reportName'?: string;
    'reportMimeType'?: string;
    'reportFrequency'?: string;
    'reportFields'?: Array<string>;
    'reportStatus'?: string;
    'reportStartTime'?: Date;
    'reportEndTime'?: Date;
    'timezone'?: string;
    'reportFilters'?: {
        [key: string]: Array<string>;
    };
    'reportPreferences'?: Reportingv3reportsReportPreferences;
    'groupId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3RetrievalDetailsGet200Response {
    'organizationId'?: string;
    'startTime'?: Date;
    'endTime'?: Date;
    'retrievalDetails'?: Array<ReportingV3RetrievalDetailsGet200ResponseRetrievalDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3RetrievalDetailsGet200ResponseRetrievalDetails {
    'processorMerchantId'?: string;
    'merchantName'?: string;
    'transactionReferenceNumber'?: string;
    'merchantReferenceNumber'?: string;
    'natureOfDispute'?: string;
    'alertType'?: string;
    'amount'?: string;
    'sign'?: string;
    'action'?: string;
    'cardType'?: string;
    'originalSettlementTime'?: Date;
    'trackingNumber'?: string;
    'currencyCode'?: string;
    'requestId'?: string;
    'responseDueTime'?: Date;
    'time'?: Date;
    'actionDescription'?: string;
    'customerId'?: string;
    'reasonCode'?: string;
    'representmentCPTime'?: Date;
    'applications'?: string;
    'eventRequestedTime'?: Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ReportingV3RetrievalSummariesGet200Response {
    'organizationId'?: string;
    'startTime'?: Date;
    'endTime'?: string;
    'retrievalSummaries'?: Array<ReportingV3ChargebackSummariesGet200ResponseChargebackSummaries>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Reportingv3ReportDownloadsGet400Response {
    'submitTimeUtc': Date;
    'reason': string;
    'message': string;
    'details': Array<Reportingv3ReportDownloadsGet400ResponseDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Reportingv3ReportDownloadsGet400ResponseDetails {
    'field'?: string;
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Reportingv3reportsReportFilters {
    'applicationName'?: Array<string>;
    'firstName'?: Array<string>;
    'lastName'?: Array<string>;
    'email'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Reportingv3reportsReportPreferences {
    'signedAmounts'?: boolean;
    'fieldNameConvention'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AddressVerificationsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'submitTimeLocal'?: string;
    'status'?: string;
    'message'?: string;
    'clientReferenceInformation'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'addressVerificationInformation'?: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation;
    'errorInformation'?: RiskV1AddressVerificationsPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation {
    'addressType'?: string;
    'barCode'?: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode;
    'applicableRegion'?: string;
    'errorCode'?: string;
    'statusCode'?: string;
    'careOf'?: string;
    'matchScore'?: number;
    'standardAddress'?: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode {
    'value'?: string;
    'checkDigit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress {
    'address1'?: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'locality'?: string;
    'county'?: string;
    'country'?: string;
    'csz'?: string;
    'isoCountry'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1 {
    'withApartment'?: string;
    'withoutApartment'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AddressVerificationsPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationResultsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'submitTimeLocal'?: string;
    'status'?: string;
    'message'?: string;
    'clientReferenceInformation'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'consumerAuthenticationInformation'?: RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation;
    'errorInformation'?: RiskV1AuthenticationsPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation {
    'acsRenderingType'?: string;
    'acsTransactionId'?: string;
    'authenticationResult'?: string;
    'authenticationStatusMsg'?: string;
    'authenticationTransactionId'?: string;
    'authenticationTransactionContextId'?: string;
    'transactionToken'?: string;
    'authorizationPayload'?: string;
    'cavv'?: string;
    'cavvAlgorithm'?: string;
    'directoryServerErrorCode'?: string;
    'directoryServerErrorDescription'?: string;
    'indicator'?: string;
    'interactionCounter'?: string;
    'eci'?: string;
    'eciRaw'?: string;
    'paresStatus'?: string;
    'sdkTransactionId'?: string;
    'specificationVersion'?: string;
    'threeDSServerTransactionId'?: string;
    'ucafAuthenticationData'?: string;
    'ucafCollectionIndicator'?: string;
    'whiteListStatus'?: string;
    'whiteListStatusSource'?: string;
    'xid'?: string;
    'directoryServerTransactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationSetupsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'consumerAuthenticationInformation'?: RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation;
    'clientReferenceInformation'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'errorInformation'?: RiskV1AuthenticationSetupsPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationSetupsPost201ResponseConsumerAuthenticationInformation {
    'accessToken'?: string;
    'referenceId'?: string;
    'deviceDataCollectionUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationSetupsPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationsPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'submitTimeLocal'?: string;
    'status'?: string;
    'message'?: string;
    'clientReferenceInformation'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'orderInformation'?: RiskV1DecisionsPost201ResponseOrderInformation;
    'consumerAuthenticationInformation'?: RiskV1DecisionsPost201ResponseConsumerAuthenticationInformation;
    'errorInformation'?: RiskV1AuthenticationsPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationsPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1AuthenticationsPost400Response1 {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201Response {
    'links'?: PtsV2PaymentsPost201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'submitTimeLocal'?: string;
    'status'?: string;
    'riskInformation'?: PtsV2PaymentsPost201ResponseRiskInformation;
    'paymentInformation'?: RiskV1DecisionsPost201ResponsePaymentInformation;
    'clientReferenceInformation'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'orderInformation'?: RiskV1DecisionsPost201ResponseOrderInformation;
    'consumerAuthenticationInformation'?: RiskV1DecisionsPost201ResponseConsumerAuthenticationInformation;
    'errorInformation'?: RiskV1DecisionsPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201ResponseClientReferenceInformation {
    'code'?: string;
    'comments'?: string;
    'partner'?: Riskv1decisionsClientReferenceInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201ResponseConsumerAuthenticationInformation {
    'accessToken'?: string;
    'acsRenderingType'?: string;
    'acsTransactionId'?: string;
    'acsUrl'?: string;
    'authenticationPath'?: string;
    'authorizationPayload'?: string;
    'authenticationType'?: string;
    'authenticationTransactionId'?: string;
    'authenticationTransactionContextId'?: string;
    'validityPeriod'?: number;
    'cardholderMessage'?: string;
    'cavv'?: string;
    'cavvAlgorithm'?: string;
    'challengeCancelCode'?: string;
    'challengeRequired'?: string;
    'decoupledAuthenticationIndicator'?: string;
    'directoryServerErrorCode'?: string;
    'directoryServerErrorDescription'?: string;
    'ecommerceIndicator'?: string;
    'eci'?: string;
    'eciRaw'?: string;
    'effectiveAuthenticationType'?: string;
    'ivr'?: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr;
    'networkScore'?: string;
    'pareq'?: string;
    'paresStatus'?: string;
    'proofXml'?: string;
    'proxyPan'?: string;
    'sdkTransactionId'?: string;
    'signedParesStatusReason'?: string;
    'specificationVersion'?: string;
    'stepUpUrl'?: string;
    'threeDSServerTransactionId'?: string;
    'ucafAuthenticationData'?: string;
    'ucafCollectionIndicator'?: string;
    'veresEnrolled'?: string;
    'whiteListStatusSource'?: string;
    'xid'?: string;
    'directoryServerTransactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201ResponseOrderInformation {
    'amountDetails'?: RiskV1DecisionsPost201ResponseOrderInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201ResponseOrderInformationAmountDetails {
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost201ResponsePaymentInformation {
    'binCountry'?: string;
    'accountType'?: string;
    'issuer'?: string;
    'scheme'?: string;
    'bin'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1DecisionsPost400Response1 {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1ExportComplianceInquiriesPost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'submitTimeLocal'?: string;
    'status'?: string;
    'message'?: string;
    'clientReferenceInformation'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'exportComplianceInformation'?: RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation;
    'errorInformation'?: RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation {
    'ipCountryConfidence'?: number;
    'infoCodes'?: Array<string>;
    'watchList'?: RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList {
    'matches'?: Array<RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches {
    'addresses'?: Array<string>;
    'sanctionList'?: string;
    'aliases'?: Array<string>;
    'programs'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RiskV1UpdatePost201Response {
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    'clientReferenceInformaton'?: RiskV1DecisionsPost201ResponseClientReferenceInformation;
    'id'?: string;
    'status'?: string;
    'submitTimeUtc'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1addressverificationsBuyerInformation {
    'merchantCustomerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1addressverificationsOrderInformation {
    'billTo'?: Riskv1addressverificationsOrderInformationBillTo;
    'shipTo'?: Riskv1addressverificationsOrderInformationShipTo;
    'lineItems'?: Array<Riskv1addressverificationsOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1addressverificationsOrderInformationBillTo {
    'address1': string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'administrativeArea'?: string;
    'country': string;
    'locality': string;
    'postalCode': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1addressverificationsOrderInformationLineItems {
    'unitPrice': string;
    'quantity'?: number;
    'productSKU'?: string;
    'productRisk'?: string;
    'productName'?: string;
    'productCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1addressverificationsOrderInformationShipTo {
    'address1': string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'administrativeArea'?: string;
    'country': string;
    'locality'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsConsumerAuthenticationInformation {
    'authenticationTransactionId'?: string;
    'authenticationTransactionContext'?: string;
    'otpToken'?: string;
    'authenticationType'?: string;
    'effectiveAuthenticationType'?: string;
    'responseAccessToken'?: string;
    'signedParesStatusReason'?: string;
    'signedPares'?: string;
    'whiteListStatus'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsDeviceInformation {
    'ipAddress'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsOrderInformation {
    'amountDetails'?: Riskv1authenticationresultsOrderInformationAmountDetails;
    'lineItems'?: Array<Riskv1authenticationresultsOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsOrderInformationAmountDetails {
    'currency'?: string;
    'totalAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsOrderInformationLineItems {
    'unitPrice': string;
    'quantity'?: number;
    'taxAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsPaymentInformation {
    'card'?: Riskv1authenticationresultsPaymentInformationCard;
    'tokenizedCard'?: Riskv1authenticationresultsPaymentInformationTokenizedCard;
    'fluidData'?: Riskv1authenticationresultsPaymentInformationFluidData;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsPaymentInformationCard {
    'bin'?: string;
    'type'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'number'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsPaymentInformationFluidData {
    'value'?: string;
    'keySerialNumber'?: string;
    'descriptor'?: string;
    'encoding'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationresultsPaymentInformationTokenizedCard {
    'transactionType'?: string;
    'type'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'number'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsBuyerInformation {
    'merchantCustomerId'?: string;
    'personalIdentification'?: Array<Ptsv2paymentsBuyerInformationPersonalIdentification>;
    'mobilePhone': number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsDeviceInformation {
    'ipAddress'?: string;
    'rawData'?: Array<Ptsv2paymentsDeviceInformationRawData>;
    'httpAcceptBrowserValue'?: string;
    'httpAcceptContent'?: string;
    'httpBrowserLanguage'?: string;
    'httpBrowserJavaEnabled'?: boolean;
    'httpBrowserJavaScriptEnabled'?: boolean;
    'httpBrowserColorDepth'?: string;
    'httpBrowserScreenHeight'?: string;
    'httpBrowserScreenWidth'?: string;
    'httpBrowserTimeDifference'?: string;
    'userAgentBrowserValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsOrderInformation {
    'amountDetails'?: Riskv1authenticationsOrderInformationAmountDetails;
    'preOrder'?: string;
    'preOrderDate'?: string;
    'reordered'?: boolean;
    'shipTo'?: Riskv1decisionsOrderInformationShipTo;
    'lineItems'?: Array<Riskv1authenticationsOrderInformationLineItems>;
    'billTo'?: Riskv1authenticationsOrderInformationBillTo;
    'totalOffersCount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsOrderInformationAmountDetails {
    'currency': string;
    'totalAmount': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsOrderInformationBillTo {
    'address1': string;
    'address2'?: string;
    'administrativeArea': string;
    'country': string;
    'locality'?: string;
    'firstName': string;
    'lastName': string;
    'phoneNumber'?: string;
    'email': string;
    'postalCode': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsOrderInformationLineItems {
    'totalAmount'?: string;
    'unitPrice': string;
    'quantity'?: number;
    'giftCardCurrency'?: number;
    'productSKU'?: string;
    'productDescription'?: string;
    'productName'?: string;
    'passenger'?: Ptsv2paymentsOrderInformationPassenger;
    'shippingDestinationTypes'?: string;
    'taxAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsPaymentInformation {
    'card'?: Riskv1authenticationsPaymentInformationCard;
    'tokenizedCard'?: Riskv1authenticationsPaymentInformationTokenizedCard;
    'fluidData'?: Riskv1authenticationsetupsPaymentInformationFluidData;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsPaymentInformationCard {
    'bin'?: string;
    'type': string;
    'expirationMonth': string;
    'expirationYear': string;
    'number': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsPaymentInformationTokenizedCard {
    'transactionType': string;
    'type': string;
    'expirationMonth': string;
    'expirationYear': string;
    'cryptogram': string;
    'securityCode': string;
    'number': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsRiskInformation {
    'buyerHistory'?: Ptsv2paymentsRiskInformationBuyerHistory;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsTravelInformation {
    'legs'?: Array<Riskv1decisionsTravelInformationLegs>;
    'numberOfPassengers'?: number;
    'passengers'?: Array<Riskv1decisionsTravelInformationPassengers>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsPaymentInformation {
    'card'?: Riskv1authenticationsetupsPaymentInformationCard;
    'tokenizedCard'?: Riskv1authenticationsetupsPaymentInformationTokenizedCard;
    'fluidData'?: Riskv1authenticationsetupsPaymentInformationFluidData;
    'customer'?: Riskv1authenticationsetupsPaymentInformationCustomer;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsPaymentInformationCard {
    'type'?: string;
    'expirationMonth': string;
    'expirationYear': string;
    'number': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsPaymentInformationCustomer {
    'customerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsPaymentInformationFluidData {
    'value': string;
    'keySerialNumber'?: string;
    'descriptor'?: string;
    'encoding'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsPaymentInformationTokenizedCard {
    'transactionType': string;
    'type': string;
    'expirationMonth': string;
    'expirationYear': string;
    'number': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsProcessingInformation {
    'paymentSolution'?: string;
    'visaCheckoutId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1authenticationsetupsTokenInformation {
    'transientToken'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsBuyerInformation {
    'merchantCustomerId'?: string;
    'username'?: string;
    'hashedPassword'?: string;
    'dateOfBirth'?: string;
    'personalIdentification'?: Array<Ptsv2paymentsBuyerInformationPersonalIdentification>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsClientReferenceInformation {
    'code': string;
    'pausedRequestId'?: string;
    'comments'?: string;
    'partner'?: Riskv1decisionsClientReferenceInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsClientReferenceInformationPartner {
    'developerId'?: string;
    'solutionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsConsumerAuthenticationInformation {
    'strongAuthentication'?: Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication;
    'authenticationType'?: string;
    'acsWindowSize'?: string;
    'alternateAuthenticationData'?: string;
    'alternateAuthenticationDate'?: string;
    'alternateAuthenticationMethod'?: string;
    'authenticationDate'?: string;
    'authenticationTransactionId'?: string;
    'transactionFlowIndicator'?: number;
    'challengeCancelCode'?: string;
    'challengeCode'?: string;
    'challengeStatus'?: string;
    'customerCardAlias'?: string;
    'decoupledAuthenticationIndicator'?: string;
    'decoupledAuthenticationMaxTime'?: string;
    'defaultCard'?: boolean;
    'deviceChannel'?: string;
    'installmentTotalCount'?: number;
    'merchantFraudRate'?: string;
    'marketingOptIn'?: boolean;
    'marketingSource'?: string;
    'mcc'?: string;
    'merchantScore'?: number;
    'messageCategory'?: string;
    'npaCode'?: string;
    'overridePaymentMethod'?: string;
    'overrideCountryCode'?: string;
    'priorAuthenticationData'?: string;
    'priorAuthenticationMethod'?: string;
    'priorAuthenticationReferenceId'?: string;
    'priorAuthenticationTime'?: string;
    'productCode'?: string;
    'returnUrl'?: string;
    'requestorId'?: string;
    'requestorInitiatedAuthenticationIndicator'?: string;
    'requestorName'?: string;
    'referenceId'?: string;
    'sdkMaxTimeout'?: string;
    'secureCorporatePaymentIndicator'?: string;
    'transactionMode'?: string;
    'whiteListStatus'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication {
    'authenticationIndicator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsDeviceInformation {
    'cookiesAccepted'?: string;
    'ipAddress'?: string;
    'hostName'?: string;
    'fingerprintSessionId'?: string;
    'httpBrowserEmail'?: string;
    'userAgent'?: string;
    'rawData'?: Array<Ptsv2paymentsDeviceInformationRawData>;
    'httpAcceptBrowserValue'?: string;
    'httpAcceptContent'?: string;
    'httpBrowserLanguage'?: string;
    'httpBrowserJavaEnabled'?: boolean;
    'httpBrowserJavaScriptEnabled'?: boolean;
    'httpBrowserColorDepth'?: string;
    'httpBrowserScreenHeight'?: string;
    'httpBrowserScreenWidth'?: string;
    'httpBrowserTimeDifference'?: string;
    'userAgentBrowserValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsMerchantDefinedInformation {
    'key'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsMerchantInformation {
    'merchantDescriptor'?: Riskv1decisionsMerchantInformationMerchantDescriptor;
    'merchantName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsMerchantInformationMerchantDescriptor {
    'name'?: string;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsOrderInformation {
    'amountDetails'?: Riskv1decisionsOrderInformationAmountDetails;
    'preOrder'?: string;
    'preOrderDate'?: string;
    'reordered'?: boolean;
    'shippingDetails'?: Riskv1decisionsOrderInformationShippingDetails;
    'shipTo'?: Riskv1decisionsOrderInformationShipTo;
    'returnsAccepted'?: boolean;
    'lineItems'?: Array<Riskv1decisionsOrderInformationLineItems>;
    'billTo'?: Riskv1decisionsOrderInformationBillTo;
    'totalOffersCount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsOrderInformationAmountDetails {
    'currency': string;
    'totalAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsOrderInformationBillTo {
    'address1'?: string;
    'address2'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'locality'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'phoneNumber'?: string;
    'email'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsOrderInformationLineItems {
    'totalAmount'?: string;
    'unitPrice'?: string;
    'quantity'?: number;
    'giftCardCurrency'?: number;
    'productSKU'?: string;
    'productRisk'?: string;
    'productDescription'?: string;
    'productName'?: string;
    'productCode'?: string;
    'gift'?: boolean;
    'distributorProductSku'?: string;
    'passenger'?: Ptsv2paymentsOrderInformationPassenger;
    'shippingDestinationTypes'?: string;
    'taxAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsOrderInformationShipTo {
    'address1'?: string;
    'address2'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'destinationTypes'?: string;
    'locality'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'phoneNumber'?: string;
    'postalCode'?: string;
    'destinationCode'?: number;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsOrderInformationShippingDetails {
    'giftWrap'?: boolean;
    'shippingMethod'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsPaymentInformation {
    'card'?: Riskv1decisionsPaymentInformationCard;
    'tokenizedCard'?: Riskv1decisionsPaymentInformationTokenizedCard;
    'customer'?: Ptsv2paymentsPaymentInformationCustomer;
    'bank'?: Ptsv2paymentsPaymentInformationBank;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsPaymentInformationCard {
    'number'?: string;
    'type'?: string;
    'bin'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsPaymentInformationTokenizedCard {
    'transactionType'?: string;
    'type'?: string;
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsProcessingInformation {
    'actionList'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsProcessorInformation {
    'avs'?: Riskv1decisionsProcessorInformationAvs;
    'cardVerification'?: Riskv1decisionsProcessorInformationCardVerification;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsProcessorInformationAvs {
    'code'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsProcessorInformationCardVerification {
    'resultCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsRiskInformation {
    'profile'?: Ptsv2paymentsRiskInformationProfile;
    'eventType'?: string;
    'buyerHistory'?: Ptsv2paymentsRiskInformationBuyerHistory;
    'auxiliaryData'?: Array<Ptsv2paymentsRiskInformationAuxiliaryData>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsTravelInformation {
    'actualFinalDestination'?: string;
    'completeRoute'?: string;
    'departureTime'?: string;
    'journeyType'?: string;
    'legs'?: Array<Riskv1decisionsTravelInformationLegs>;
    'numberOfPassengers'?: number;
    'passengers'?: Array<Riskv1decisionsTravelInformationPassengers>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsTravelInformationLegs {
    'origination'?: string;
    'destination'?: string;
    'carrierCode'?: string;
    'departureDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsTravelInformationPassengers {
    'firstName'?: string;
    'lastName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsidmarkingRiskInformation {
    'markingDetails'?: Riskv1decisionsidmarkingRiskInformationMarkingDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1decisionsidmarkingRiskInformationMarkingDetails {
    'notes'?: string;
    'reason'?: string;
    'fieldsIncluded'?: Array<string>;
    'action'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesDeviceInformation {
    'ipAddress'?: string;
    'hostName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesExportComplianceInformation {
    'addressOperator'?: string;
    'weights'?: Riskv1exportcomplianceinquiriesExportComplianceInformationWeights;
    'sanctionLists'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesExportComplianceInformationWeights {
    'address'?: string;
    'company'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesOrderInformation {
    'billTo'?: Riskv1exportcomplianceinquiriesOrderInformationBillTo;
    'shipTo'?: Riskv1exportcomplianceinquiriesOrderInformationShipTo;
    'lineItems'?: Array<Riskv1exportcomplianceinquiriesOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesOrderInformationBillTo {
    'address1': string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'administrativeArea'?: string;
    'country': string;
    'locality': string;
    'postalCode': string;
    'company'?: Riskv1exportcomplianceinquiriesOrderInformationBillToCompany;
    'firstName'?: string;
    'lastName'?: string;
    'email': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesOrderInformationBillToCompany {
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesOrderInformationLineItems {
    'unitPrice': string;
    'allowedExportCountries'?: Array<string>;
    'restrictedExportCountries'?: Array<string>;
    'quantity'?: number;
    'productSKU'?: string;
    'productRisk'?: string;
    'productName'?: string;
    'productCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1exportcomplianceinquiriesOrderInformationShipTo {
    'country'?: string;
    'firstName'?: string;
    'lastName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesBuyerInformation {
    'personalIdentification'?: Array<Ptsv2paymentsBuyerInformationPersonalIdentification>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesClientReferenceInformation {
    'code': string;
    'comments'?: string;
    'partner'?: Riskv1decisionsClientReferenceInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesDeviceInformation {
    'ipAddress'?: string;
    'networkIpAddress'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesOrderInformation {
    'address'?: Riskv1liststypeentriesOrderInformationAddress;
    'billTo'?: Riskv1liststypeentriesOrderInformationBillTo;
    'shipTo'?: Riskv1liststypeentriesOrderInformationShipTo;
    'lineItems'?: Array<Riskv1liststypeentriesOrderInformationLineItems>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesOrderInformationAddress {
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'country'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesOrderInformationBillTo {
    'address1'?: string;
    'address2'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'phoneNumber'?: string;
    'email'?: string;
    'emailDomain'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesOrderInformationLineItems {
    'unitPrice'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesOrderInformationShipTo {
    'address1'?: string;
    'address2'?: string;
    'administrativeArea'?: string;
    'country'?: string;
    'locality'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesPaymentInformation {
    'card'?: Riskv1liststypeentriesPaymentInformationCard;
    'bank'?: Riskv1liststypeentriesPaymentInformationBank;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesPaymentInformationBank {
    'accountNumber'?: string;
    'code'?: string;
    'country'?: string;
    'iban'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesPaymentInformationCard {
    'number'?: string;
    'type'?: string;
    'bin'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesRiskInformation {
    'markingDetails'?: Riskv1liststypeentriesRiskInformationMarkingDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Riskv1liststypeentriesRiskInformationMarkingDetails {
    'notes'?: string;
    'reason'?: string;
    'recordName'?: string;
    'action'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SearchRequest {
    'organizationId'?: string;
    'userName'?: string;
    'roleId'?: string;
    'permissionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomer {
    'links'?: ShippingAddressListForCustomerLinks;
    'offset'?: number;
    'limit'?: number;
    'count'?: number;
    'total'?: number;
    'embedded'?: ShippingAddressListForCustomerEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerEmbedded {
    'shippingAddresses'?: Array<Tmsv2customersEmbeddedDefaultShippingAddress>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerLinks {
    'self'?: ShippingAddressListForCustomerLinksSelf;
    'first'?: ShippingAddressListForCustomerLinksFirst;
    'prev'?: ShippingAddressListForCustomerLinksPrev;
    'next'?: ShippingAddressListForCustomerLinksNext;
    'last'?: ShippingAddressListForCustomerLinksLast;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerLinksFirst {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerLinksLast {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerLinksNext {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerLinksPrev {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ShippingAddressListForCustomerLinksSelf {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxRequest {
    'clientReferenceInformation'?: Vasv2taxClientReferenceInformation;
    'taxInformation'?: Vasv2taxTaxInformation;
    'orderInformation'?: Vasv2taxOrderInformation;
    'merchantInformation'?: Vasv2taxMerchantInformation;
    'buyerInformation'?: Vasv2taxBuyerInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersBuyerInformation {
    'merchantCustomerID'?: string;
    'email'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersClientReferenceInformation {
    'code'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersDefaultPaymentInstrument {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersDefaultShippingAddress {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbedded {
    'defaultPaymentInstrument'?: Tmsv2customersEmbeddedDefaultPaymentInstrument;
    'defaultShippingAddress'?: Tmsv2customersEmbeddedDefaultShippingAddress;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrument {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks;
    'id'?: string;
    'object'?: string;
    '_default'?: boolean;
    'state'?: string;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCard;
    'buyerInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation;
    'merchantInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation;
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata;
    'embedded'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount {
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo {
    'firstName'?: string;
    'lastName'?: string;
    'company'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation {
    'companyTaxID'?: string;
    'currency'?: string;
    'dateOfBirth'?: string;
    'personalIdentification'?: Array<Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationIssuedBy {
    'administrativeArea'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationPersonalIdentification {
    'id'?: string;
    'type'?: string;
    'issuedBy'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformationIssuedBy;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentCard {
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'type'?: string;
    'issueNumber'?: string;
    'startMonth'?: string;
    'startYear'?: string;
    'useAs'?: string;
    'tokenizedInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentCardTokenizedInformation {
    'requestorID'?: string;
    'transactionType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded {
    'instrumentIdentifier'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier {
    'links'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinks;
    'id'?: string;
    'object'?: string;
    'state'?: string;
    'type'?: string;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierCard;
    'bankAccount'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBankAccount;
    'tokenizedCard'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCard;
    'issuer'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierIssuer;
    'processingInformation'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformation;
    'billTo'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBillTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBankAccount {
    'number'?: string;
    'routingNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierBillTo {
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierCard {
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'securityCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierIssuer {
    'paymentAccountReference'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinks {
    'self'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinksSelf;
    'paymentInstruments'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinksPaymentInstruments;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinksPaymentInstruments {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierLinksSelf {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierMetadata {
    'creator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformation {
    'authorizationOptions'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformationAuthorizationOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformationAuthorizationOptions {
    'initiator'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator {
    'merchantInitiatedTransaction'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction {
    'previousTransactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCard {
    'type'?: string;
    'state'?: string;
    'number'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'cryptogram'?: string;
    'card'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCardCard;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCardCard {
    'suffix'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks {
    'self'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentLinksSelf;
    'customer'?: Tmsv2customersLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentLinksSelf {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation {
    'merchantDescriptor'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor {
    'alternateName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata {
    'creator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation {
    'billPaymentProgramEnabled'?: boolean;
    'bankTransferOptions'?: Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions {
    'sECCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultShippingAddress {
    'links'?: Tmsv2customersEmbeddedDefaultShippingAddressLinks;
    'id'?: string;
    '_default'?: boolean;
    'shipTo'?: Tmsv2customersEmbeddedDefaultShippingAddressShipTo;
    'metadata'?: Tmsv2customersEmbeddedDefaultShippingAddressMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultShippingAddressLinks {
    'self'?: Tmsv2customersEmbeddedDefaultShippingAddressLinksSelf;
    'customer'?: Tmsv2customersEmbeddedDefaultShippingAddressLinksCustomer;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultShippingAddressLinksCustomer {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultShippingAddressLinksSelf {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultShippingAddressMetadata {
    'creator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersEmbeddedDefaultShippingAddressShipTo {
    'firstName'?: string;
    'lastName'?: string;
    'company'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersLinks {
    'self'?: Tmsv2customersLinksSelf;
    'paymentInstruments'?: Tmsv2customersLinksPaymentInstruments;
    'shippingAddress'?: Tmsv2customersLinksShippingAddress;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersLinksPaymentInstruments {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersLinksSelf {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersLinksShippingAddress {
    'href'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersMerchantDefinedInformation {
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersMetadata {
    'creator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tmsv2customersObjectInformation {
    'title'?: string;
    'comment'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TmsV2CustomersResponse {
    links?: Tmsv2customersLinks;
    id?: string;
    objectInformation?: Tmsv2customersObjectInformation;
    buyerInformation?: Tmsv2customersBuyerInformation;
    clientReferenceInformation?: Tmsv2customersClientReferenceInformation;
    merchantDefinedInformation?: Array<Tmsv2customersMerchantDefinedInformation>;
    defaultPaymentInstrument?: Tmsv2customersDefaultPaymentInstrument;
    defaultShippingAddress?: Tmsv2customersDefaultShippingAddress;
    metadata?: Tmsv2customersMetadata;
    embedded?: Tmsv2customersEmbedded;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TokenizeRequest {
    'keyId': string;
    'cardInfo'?: Flexv1tokensCardInfo;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2GetEmvTags200Response {
    'emvTagBreakdownList'?: Array<TssV2GetEmvTags200ResponseEmvTagBreakdownList>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2GetEmvTags200ResponseEmvTagBreakdownList {
    'tag'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2PostEmvTags200Response {
    'parsedEMVTagsList'?: Array<TssV2PostEmvTags200ResponseParsedEMVTagsList>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2PostEmvTags200ResponseEmvTagBreakdownList {
    'tag'?: string;
    'name'?: string;
    'length'?: number;
    'value'?: string;
    'description'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2PostEmvTags200ResponseParsedEMVTagsList {
    'requestId'?: string;
    'totalTags'?: number;
    'emvTagBreakdownList'?: Array<TssV2PostEmvTags200ResponseEmvTagBreakdownList>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200Response {
    'id'?: string;
    'rootId'?: string;
    'reconciliationId'?: string;
    'merchantId'?: string;
    'submitTimeUTC'?: string;
    'applicationInformation'?: TssV2TransactionsGet200ResponseApplicationInformation;
    'buyerInformation'?: TssV2TransactionsGet200ResponseBuyerInformation;
    'clientReferenceInformation'?: TssV2TransactionsGet200ResponseClientReferenceInformation;
    'consumerAuthenticationInformation'?: TssV2TransactionsGet200ResponseConsumerAuthenticationInformation;
    'deviceInformation'?: TssV2TransactionsGet200ResponseDeviceInformation;
    'errorInformation'?: TssV2TransactionsGet200ResponseErrorInformation;
    'installmentInformation'?: TssV2TransactionsGet200ResponseInstallmentInformation;
    'fraudMarkingInformation'?: TssV2TransactionsGet200ResponseFraudMarkingInformation;
    'healthCareInformation'?: Ptsv2paymentsHealthCareInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'merchantInformation'?: TssV2TransactionsGet200ResponseMerchantInformation;
    'orderInformation'?: TssV2TransactionsGet200ResponseOrderInformation;
    'paymentInformation'?: TssV2TransactionsGet200ResponsePaymentInformation;
    'paymentInsightsInformation'?: PtsV2PaymentsPost201ResponsePaymentInsightsInformation;
    'processingInformation'?: TssV2TransactionsGet200ResponseProcessingInformation;
    'processorInformation'?: TssV2TransactionsGet200ResponseProcessorInformation;
    'pointOfSaleInformation'?: TssV2TransactionsGet200ResponsePointOfSaleInformation;
    'riskInformation'?: TssV2TransactionsGet200ResponseRiskInformation;
    'senderInformation'?: TssV2TransactionsGet200ResponseSenderInformation;
    'tokenInformation'?: TssV2TransactionsGet200ResponseTokenInformation;
    'links'?: TssV2TransactionsGet200ResponseLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseApplicationInformation {
    'status'?: string;
    'reasonCode'?: string;
    'rCode'?: string;
    'rFlag'?: string;
    'applications'?: Array<TssV2TransactionsGet200ResponseApplicationInformationApplications>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseApplicationInformationApplications {
    'name'?: string;
    'status'?: string;
    'reasonCode'?: string;
    'rCode'?: string;
    'rFlag'?: string;
    'reconciliationId'?: string;
    'rMessage'?: string;
    'returnCode'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseBuyerInformation {
    'merchantCustomerId'?: string;
    'hashedPassword'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseClientReferenceInformation {
    'code'?: string;
    'applicationVersion'?: string;
    'applicationName'?: string;
    'applicationUser'?: string;
    'partner'?: TssV2TransactionsGet200ResponseClientReferenceInformationPartner;
    'comments'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseClientReferenceInformationPartner {
    'solutionId'?: string;
    'thirdPartyCertificationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseConsumerAuthenticationInformation {
    'eciRaw'?: string;
    'cavv'?: string;
    'xid'?: string;
    'transactionId'?: string;
    'strongAuthentication'?: TssV2TransactionsGet200ResponseConsumerAuthenticationInformationStrongAuthentication;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseConsumerAuthenticationInformationStrongAuthentication {
    'lowValueExemptionIndicator'?: string;
    'riskAnalysisExemptionIndicator'?: string;
    'trustedMerchantExemptionIndicator'?: string;
    'secureCorporatePaymentIndicator'?: string;
    'delegatedAuthenticationExemptionIndicator'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseDeviceInformation {
    'ipAddress'?: string;
    'hostName'?: string;
    'cookiesAccepted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseErrorInformation {
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseFraudMarkingInformation {
    'reason'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseInstallmentInformation {
    'numberOfInstallments'?: string;
    'identifier'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseLinks {
    'self'?: PtsV2PaymentsPost201ResponseLinksSelf;
    'relatedTransactions'?: Array<PtsV2PaymentsPost201ResponseLinksSelf>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseMerchantInformation {
    'merchantDescriptor'?: TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor {
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformation {
    'billTo'?: TssV2TransactionsGet200ResponseOrderInformationBillTo;
    'shipTo'?: TssV2TransactionsGet200ResponseOrderInformationShipTo;
    'lineItems'?: Array<TssV2TransactionsGet200ResponseOrderInformationLineItems>;
    'amountDetails'?: TssV2TransactionsGet200ResponseOrderInformationAmountDetails;
    'shippingDetails'?: TssV2TransactionsGet200ResponseOrderInformationShippingDetails;
    'invoiceDetails'?: TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    'taxAmount'?: string;
    'authorizedAmount'?: string;
    'settlementAmount'?: string;
    'settlementCurrency'?: string;
    'surcharge'?: Ptsv2payoutsOrderInformationAmountDetailsSurcharge;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformationBillTo {
    'firstName'?: string;
    'lastName'?: string;
    'middleName'?: string;
    'nameSuffix'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'company'?: string;
    'email'?: string;
    'country'?: string;
    'title'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails {
    'salesSlipNumber'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformationLineItems {
    'productCode'?: string;
    'productName'?: string;
    'productSku'?: string;
    'taxAmount'?: string;
    'quantity'?: number;
    'unitPrice'?: string;
    'fulfillmentType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformationShipTo {
    'firstName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'company'?: string;
    'country'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseOrderInformationShippingDetails {
    'giftWrap'?: boolean;
    'shippingMethod'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformation {
    'paymentType'?: TssV2TransactionsGet200ResponsePaymentInformationPaymentType;
    'customer'?: TssV2TransactionsGet200ResponsePaymentInformationCustomer;
    'card'?: TssV2TransactionsGet200ResponsePaymentInformationCard;
    'invoice'?: TssV2TransactionsGet200ResponsePaymentInformationInvoice;
    'bank'?: TssV2TransactionsGet200ResponsePaymentInformationBank;
    'accountFeatures'?: TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures;
    'paymentInstrument'?: PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument;
    'instrumentIdentifier'?: TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier;
    'shippingAddress'?: PtsV2PaymentsPost201ResponseTokenInformationShippingAddress;
    'fluidData'?: TssV2TransactionsGet200ResponsePaymentInformationFluidData;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures {
    'balanceAmount'?: string;
    'previousBalanceAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationBank {
    'routingNumber'?: string;
    'branchCode'?: string;
    'swiftCode'?: string;
    'bankCode'?: string;
    'iban'?: string;
    'account'?: TssV2TransactionsGet200ResponsePaymentInformationBankAccount;
    'mandate'?: TssV2TransactionsGet200ResponsePaymentInformationBankMandate;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationBankAccount {
    'suffix'?: string;
    'prefix'?: string;
    'checkNumber'?: string;
    'type'?: string;
    'name'?: string;
    'checkDigit'?: string;
    'encoderId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationBankMandate {
    'referenceNumber'?: string;
    'recurringType'?: string;
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationCard {
    'suffix'?: string;
    'prefix'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'startMonth'?: string;
    'startYear'?: string;
    'issueNumber'?: string;
    'type'?: string;
    'accountEncoderId'?: string;
    'useAs'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationCustomer {
    'customerId'?: string;
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationFluidData {
    'descriptor'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier {
    'id'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationInvoice {
    'number'?: string;
    'barcodeNumber'?: string;
    'expirationDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePaymentInformationPaymentType {
    'name'?: string;
    'type'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponsePointOfSaleInformation {
    'terminalId'?: string;
    'entryMode'?: string;
    'terminalCapability'?: number;
    'cardholderVerificationMethodUsed'?: number;
    'emv'?: Ptsv2paymentsidreversalsPointOfSaleInformationEmv;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessingInformation {
    'industryDataType'?: string;
    'paymentSolution'?: string;
    'commerceIndicator'?: string;
    'commerceIndicatorLabel'?: string;
    'businessApplicationId'?: string;
    'authorizationOptions'?: TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions;
    'bankTransferOptions'?: TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions;
    'japanPaymentOptions'?: TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions {
    'authType'?: string;
    'initiator'?: TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptionsInitiator;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptionsInitiator {
    'type'?: string;
    'credentialStoredOnFile'?: string;
    'storedCredentialUsed'?: string;
    'merchantInitiatedTransaction'?: Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions {
    'secCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions {
    'paymentMethod'?: string;
    'terminalId'?: string;
    'businessName'?: string;
    'businessNameKatakana'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessorInformation {
    'processor'?: TssV2TransactionsGet200ResponseProcessorInformationProcessor;
    'multiProcessorRouting'?: Array<TssV2TransactionsGet200ResponseProcessorInformationMultiProcessorRouting>;
    'transactionId'?: string;
    'networkTransactionId'?: string;
    'retrievalReferenceNumber'?: string;
    'responseId'?: string;
    'approvalCode'?: string;
    'responseCode'?: string;
    'avs'?: PtsV2PaymentsPost201ResponseProcessorInformationAvs;
    'cardVerification'?: Riskv1decisionsProcessorInformationCardVerification;
    'achVerification'?: PtsV2PaymentsPost201ResponseProcessorInformationAchVerification;
    'electronicVerificationResults'?: TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults;
    'systemTraceAuditNumber'?: string;
    'responseCodeSource'?: string;
    'paymentAccountReferenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults {
    'email'?: string;
    'emailRaw'?: string;
    'name'?: string;
    'nameRaw'?: string;
    'phoneNumber'?: string;
    'phoneNumberRaw'?: string;
    'street'?: string;
    'streetRaw'?: string;
    'postalCode'?: string;
    'postalCodeRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessorInformationMultiProcessorRouting {
    'name'?: string;
    'responseCode'?: string;
    'reasonCode'?: string;
    'sequence'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseProcessorInformationProcessor {
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseRiskInformation {
    'profile'?: TssV2TransactionsGet200ResponseRiskInformationProfile;
    'rules'?: Array<TssV2TransactionsGet200ResponseRiskInformationRules>;
    'passiveProfile'?: TssV2TransactionsGet200ResponseRiskInformationProfile;
    'passiveRules'?: Array<TssV2TransactionsGet200ResponseRiskInformationRules>;
    'score'?: TssV2TransactionsGet200ResponseRiskInformationScore;
    'localTime'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseRiskInformationProfile {
    'name'?: string;
    'decision'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseRiskInformationRules {
    'name'?: string;
    'decision'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseRiskInformationScore {
    'factorCodes'?: Array<string>;
    'result'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseSenderInformation {
    'referenceNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsGet200ResponseTokenInformation {
    'customer'?: PtsV2PaymentsPost201ResponseTokenInformationCustomer;
    'paymentInstrument'?: PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument;
    'shippingAddress'?: PtsV2PaymentsPost201ResponseTokenInformationShippingAddress;
    'instrumentIdentifier'?: TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201Response {
    'searchId'?: string;
    'save'?: boolean;
    'name'?: string;
    'timezone'?: string;
    'query'?: string;
    'offset'?: number;
    'limit'?: number;
    'sort'?: string;
    'count'?: number;
    'totalCount'?: number;
    'status'?: string;
    'submitTimeUtc'?: string;
    'embedded'?: TssV2TransactionsPost201ResponseEmbedded;
    'links'?: PtsV2IncrementalAuthorizationPatch201ResponseLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbedded {
    'transactionSummaries'?: Array<TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedApplicationInformation {
    'reasonCode'?: string;
    'rCode'?: string;
    'rFlag'?: string;
    'applications'?: Array<TssV2TransactionsPost201ResponseEmbeddedApplicationInformationApplications>;
    'returnCode'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedApplicationInformationApplications {
    'name'?: string;
    'reasonCode'?: string;
    'rCode'?: string;
    'rFlag'?: string;
    'reconciliationId'?: string;
    'rMessage'?: string;
    'returnCode'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedBuyerInformation {
    'merchantCustomerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation {
    'code'?: string;
    'applicationName'?: string;
    'applicationUser'?: string;
    'partner'?: TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformationPartner {
    'solutionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation {
    'xid'?: string;
    'transactionId'?: string;
    'eciRaw'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedLinks {
    'transactionDetail'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedMerchantInformation {
    'resellerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedOrderInformation {
    'billTo'?: TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo;
    'shipTo'?: TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo;
    'amountDetails'?: Ptsv2paymentsidreversalsReversalInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo {
    'firstName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'email'?: string;
    'country'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo {
    'firstName'?: string;
    'lastName'?: string;
    'address1'?: string;
    'country'?: string;
    'phoneNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPaymentInformation {
    'paymentType'?: TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType;
    'customer'?: Ptsv2refreshpaymentstatusidPaymentInformationCustomer;
    'card'?: TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard;
    'bank'?: TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank {
    'account'?: TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount {
    'suffix'?: string;
    'prefix'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard {
    'suffix'?: string;
    'prefix'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType {
    'type'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation {
    'terminalId'?: string;
    'terminalSerialNumber'?: string;
    'deviceId'?: string;
    'partner'?: TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner {
    'originalTransactionId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedProcessingInformation {
    'paymentSolution'?: string;
    'businessApplicationId'?: string;
    'commerceIndicator'?: string;
    'commerceIndicatorLabel'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedProcessorInformation {
    'processor'?: TssV2TransactionsGet200ResponseProcessorInformationProcessor;
    'approvalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedRiskInformation {
    'providers'?: TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders {
    'fingerprint'?: TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint {
    'trueIpaddress'?: string;
    'hash'?: string;
    'smartId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries {
    'id'?: string;
    'submitTimeUtc'?: string;
    'merchantId'?: string;
    'applicationInformation'?: TssV2TransactionsPost201ResponseEmbeddedApplicationInformation;
    'buyerInformation'?: TssV2TransactionsPost201ResponseEmbeddedBuyerInformation;
    'clientReferenceInformation'?: TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation;
    'consumerAuthenticationInformation'?: TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation;
    'deviceInformation'?: Riskv1authenticationresultsDeviceInformation;
    'fraudMarkingInformation'?: TssV2TransactionsGet200ResponseFraudMarkingInformation;
    'merchantDefinedInformation'?: Array<Ptsv2paymentsMerchantDefinedInformation>;
    'merchantInformation'?: TssV2TransactionsPost201ResponseEmbeddedMerchantInformation;
    'orderInformation'?: TssV2TransactionsPost201ResponseEmbeddedOrderInformation;
    'paymentInformation'?: TssV2TransactionsPost201ResponseEmbeddedPaymentInformation;
    'processingInformation'?: TssV2TransactionsPost201ResponseEmbeddedProcessingInformation;
    'processorInformation'?: TssV2TransactionsPost201ResponseEmbeddedProcessorInformation;
    'pointOfSaleInformation'?: TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation;
    'riskInformation'?: TssV2TransactionsPost201ResponseEmbeddedRiskInformation;
    'links'?: TssV2TransactionsPost201ResponseEmbeddedLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TssV2TransactionsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Tssv2transactionsemvTagDetailsEmvDetailsList {
    'requestId': string;
    'emvRequestCombinedTags': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UmsV1UsersGet200Response {
    'users'?: Array<UmsV1UsersGet200ResponseUsers>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UmsV1UsersGet200ResponseAccountInformation {
    'userName'?: string;
    'roleId'?: string;
    'permissions'?: Array<string>;
    'status'?: string;
    'createdTime'?: Date;
    'lastAccessTime'?: Date;
    'languagePreference'?: string;
    'timezone'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UmsV1UsersGet200ResponseContactInformation {
    'email'?: string;
    'phoneNumber'?: string;
    'firstName'?: string;
    'lastName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UmsV1UsersGet200ResponseOrganizationInformation {
    'organizationId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UmsV1UsersGet200ResponseUsers {
    'accountInformation'?: UmsV1UsersGet200ResponseAccountInformation;
    'organizationInformation'?: UmsV1UsersGet200ResponseOrganizationInformation;
    'contactInformation'?: UmsV1UsersGet200ResponseContactInformation;
    'customFields'?: any;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateAsymKeysRequest {
    'status': string;
    'organizationId': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdateInvoiceRequest {
    'customerInformation'?: Invoicingv2invoicesCustomerInformation;
    'invoiceInformation'?: Invoicingv2invoicesidInvoiceInformation;
    'orderInformation'?: Invoicingv2invoicesOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdatePGPKeysRequest {
    'status': string;
    'organizationId': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdatePGPKeysRequest1 {
    'organizationId'?: string;
    'status'?: string;
    'expirationDate'?: string;
    'version'?: string;
    'comment'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UpdatePasswordKeysRequest {
    'status': string;
    'organizationId': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsCaptureMandate {
    'billingType'?: string;
    'requestEmail'?: boolean;
    'requestPhone'?: boolean;
    'requestShipping'?: boolean;
    'shipToCountries'?: Array<string>;
    'showAcceptedNetworkIcons'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsCheckoutApiInitialization {
    'profileId'?: string;
    'accessKey'?: string;
    'referenceNumber'?: string;
    'transactionUuid'?: string;
    'transactionType'?: string;
    'currency'?: string;
    'amount'?: string;
    'locale'?: string;
    'overrideCustomReceiptPage'?: string;
    'unsignedFieldNames'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsOrderInformation {
    'amountDetails'?: Upv1capturecontextsOrderInformationAmountDetails;
    'billTo'?: Upv1capturecontextsOrderInformationBillTo;
    'shipTo'?: Upv1capturecontextsOrderInformationShipTo;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsOrderInformationAmountDetails {
    'totalAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsOrderInformationBillTo {
    'address1'?: string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'administrativeArea'?: string;
    'buildingNumber'?: string;
    'country'?: string;
    'district'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'company'?: Upv1capturecontextsOrderInformationBillToCompany;
    'email'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'middleName'?: string;
    'nameSuffix'?: string;
    'title'?: string;
    'phoneNumber'?: string;
    'phoneType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsOrderInformationBillToCompany {
    'name'?: string;
    'address1'?: string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'administrativeArea'?: string;
    'buildingNumber'?: string;
    'country'?: string;
    'district'?: string;
    'locality'?: string;
    'postalCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Upv1capturecontextsOrderInformationShipTo {
    'address1'?: string;
    'address2'?: string;
    'address3'?: string;
    'address4'?: string;
    'administrativeArea'?: string;
    'buildingNumber'?: string;
    'country'?: string;
    'district'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'firstName'?: string;
    'lastName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class V1FileDetailsGet200Response {
    'fileDetails'?: Array<V1FileDetailsGet200ResponseFileDetails>;
    'links'?: V1FileDetailsGet200ResponseLinks;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class V1FileDetailsGet200ResponseFileDetails {
    'fileId'?: string;
    'name'?: string;
    'createdTime'?: Date;
    'lastModifiedTime'?: Date;
    'date'?: string;
    'mimeType'?: string;
    'size'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class V1FileDetailsGet200ResponseLinks {
    'self'?: V1FileDetailsGet200ResponseLinksSelf;
    'files'?: Array<V1FileDetailsGet200ResponseLinksFiles>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class V1FileDetailsGet200ResponseLinksFiles {
    'fileId'?: string;
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class V1FileDetailsGet200ResponseLinksSelf {
    'href'?: string;
    'method'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ValidateExportComplianceRequest {
    'clientReferenceInformation'?: Riskv1liststypeentriesClientReferenceInformation;
    'orderInformation'?: Riskv1exportcomplianceinquiriesOrderInformation;
    'buyerInformation'?: Riskv1addressverificationsBuyerInformation;
    'deviceInformation'?: Riskv1exportcomplianceinquiriesDeviceInformation;
    'exportComplianceInformation'?: Riskv1exportcomplianceinquiriesExportComplianceInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ValidateRequest {
    'clientReferenceInformation'?: Riskv1decisionsClientReferenceInformation;
    'processingInformation'?: Riskv1authenticationsetupsProcessingInformation;
    'orderInformation'?: Riskv1authenticationresultsOrderInformation;
    'paymentInformation'?: Riskv1authenticationresultsPaymentInformation;
    'consumerAuthenticationInformation'?: Riskv1authenticationresultsConsumerAuthenticationInformation;
    'deviceInformation'?: Riskv1authenticationresultsDeviceInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201Response {
    'links'?: VasV2PaymentsPost201ResponseLinks;
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'clientReferenceInformation'?: PtsV2PaymentsPost201ResponseClientReferenceInformation;
    'taxInformation'?: VasV2PaymentsPost201ResponseTaxInformation;
    'orderInformation'?: VasV2PaymentsPost201ResponseOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201ResponseLinks {
    '_void'?: PtsV2PaymentsPost201ResponseLinksSelf;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201ResponseOrderInformation {
    'exemptAmount'?: string;
    'taxableAmount'?: string;
    'taxAmount'?: string;
    'lineItems'?: Array<VasV2PaymentsPost201ResponseOrderInformationLineItems>;
    'taxDetails'?: Array<VasV2PaymentsPost201ResponseOrderInformationTaxDetails>;
    'amountDetails'?: Ptsv2paymentsidreversalsReversalInformationAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201ResponseOrderInformationJurisdiction {
    'type'?: string;
    'taxName'?: string;
    'taxAmount'?: string;
    'taxable'?: string;
    'name'?: string;
    'code'?: string;
    'rate'?: string;
    'region'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201ResponseOrderInformationLineItems {
    'taxDetails'?: Array<VasV2PaymentsPost201ResponseOrderInformationTaxDetails>;
    'jurisdiction'?: Array<VasV2PaymentsPost201ResponseOrderInformationJurisdiction>;
    'exemptAmount'?: string;
    'taxableAmount'?: string;
    'taxAmount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201ResponseOrderInformationTaxDetails {
    'type'?: string;
    'amount'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost201ResponseTaxInformation {
    'commitIndicator'?: boolean;
    'refundIndicator'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2PaymentsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2TaxVoid200Response {
    'id'?: string;
    'submitTimeUtc'?: string;
    'status'?: string;
    'clientReferenceInformation'?: PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation;
    'voidAmountDetails'?: VasV2TaxVoid200ResponseVoidAmountDetails;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2TaxVoid200ResponseVoidAmountDetails {
    'voidAmount'?: string;
    'currency'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VasV2TaxVoidsPost400Response {
    'submitTimeUtc'?: string;
    'status'?: string;
    'reason'?: string;
    'message'?: string;
    'details'?: Array<PtsV2PaymentsPost201ResponseErrorInformationDetails>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxBuyerInformation {
    'vatRegistrationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxClientReferenceInformation {
    'code'?: string;
    'partner'?: Riskv1decisionsClientReferenceInformationPartner;
    'comments'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxMerchantInformation {
    'vatRegistrationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformation {
    'amountDetails'?: RiskV1DecisionsPost201ResponseOrderInformationAmountDetails;
    'billTo'?: Vasv2taxOrderInformationBillTo;
    'shippingDetails'?: Vasv2taxOrderInformationShippingDetails;
    'shipTo'?: Vasv2taxOrderInformationShipTo;
    'lineItems'?: Array<Vasv2taxOrderInformationLineItems>;
    'invoiceDetails'?: Vasv2taxOrderInformationInvoiceDetails;
    'orderAcceptance'?: Vasv2taxOrderInformationOrderAcceptance;
    'orderOrigin'?: Vasv2taxOrderInformationOrderOrigin;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationBillTo {
    'address1'?: string;
    'address2'?: string;
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationInvoiceDetails {
    'invoiceDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationLineItems {
    'productSKU'?: string;
    'productCode'?: string;
    'quantity'?: number;
    'productName'?: string;
    'unitPrice'?: string;
    'taxAmount'?: string;
    'orderAcceptance'?: Vasv2taxOrderInformationOrderAcceptance;
    'orderOrigin'?: Vasv2taxOrderInformationOrderOrigin;
    'shipFromCountry'?: string;
    'shipFromAdministrativeArea'?: string;
    'shipFromLocality'?: string;
    'shipFromPostalCode'?: string;
    'buyerVatRegistrationNumber'?: string;
    'sellerVatRegistrationNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationOrderAcceptance {
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationOrderOrigin {
    'locality'?: string;
    'administrativeArea'?: string;
    'postalCode'?: string;
    'country'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationShipTo {
    'country'?: string;
    'administrativeArea'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'address1'?: string;
    'address2'?: string;
    'address3'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxOrderInformationShippingDetails {
    'shipFromLocality'?: string;
    'shipFromCountry'?: string;
    'shipFromPostalCode'?: string;
    'shipFromAdministrativeArea'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxTaxInformation {
    'reportingDate'?: string;
    'dateOverrideReason'?: string;
    'nexus'?: Array<string>;
    'noNexus'?: Array<string>;
    'showTaxPerLineItem'?: string;
    'commitIndicator'?: boolean;
    'refundIndicator'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxidClientReferenceInformation {
    'code'?: string;
    'comments'?: string;
    'partner'?: Vasv2taxidClientReferenceInformationPartner;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Vasv2taxidClientReferenceInformationPartner {
    'solutionId'?: string;
    'developerId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VerifyCustomerAddressRequest {
    'clientReferenceInformation'?: Riskv1liststypeentriesClientReferenceInformation;
    'orderInformation'?: Riskv1addressverificationsOrderInformation;
    'buyerInformation'?: Riskv1addressverificationsBuyerInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VoidCaptureRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidreversalsClientReferenceInformation;
    'paymentInformation'?: Ptsv2paymentsidvoidsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidvoidsOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VoidCreditRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidreversalsClientReferenceInformation;
    'paymentInformation'?: Ptsv2paymentsidvoidsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidvoidsOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VoidPaymentRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidreversalsClientReferenceInformation;
    'paymentInformation'?: Ptsv2paymentsidvoidsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidvoidsOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VoidRefundRequest {
    'clientReferenceInformation'?: Ptsv2paymentsidreversalsClientReferenceInformation;
    'paymentInformation'?: Ptsv2paymentsidvoidsPaymentInformation;
    'orderInformation'?: Ptsv2paymentsidvoidsOrderInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VoidTaxRequest {
    'clientReferenceInformation'?: Vasv2taxidClientReferenceInformation;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare enum AsymmetricKeyManagementApiApiKeys {
}
export declare class AsymmetricKeyManagementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AsymmetricKeyManagementApiApiKeys, value: string): void;
    createP12Keys(createP12KeysRequest: CreateP12KeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysAsymPost201Response;
    }>;
    deleteBulkP12Keys(deleteBulkP12KeysRequest: DeleteBulkP12KeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysAsymDeletesPost200Response;
    }>;
    getP12KeyDetails(keyId: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysAsymGet200Response;
    }>;
    updateAsymKey(keyId: string, updateAsymKeysRequest: UpdateAsymKeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
export declare enum CaptureApiApiKeys {
}
export declare class CaptureApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CaptureApiApiKeys, value: string): void;
    capturePayment(capturePaymentRequest: CapturePaymentRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsCapturesPost201Response;
    }>;
}
export declare enum ChargebackDetailsApiApiKeys {
}
export declare class ChargebackDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ChargebackDetailsApiApiKeys, value: string): void;
    getChargebackDetails(startTime: Date, endTime: Date, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ChargebackDetailsGet200Response;
    }>;
}
export declare enum ChargebackSummariesApiApiKeys {
}
export declare class ChargebackSummariesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ChargebackSummariesApiApiKeys, value: string): void;
    getChargebackSummaries(startTime: Date, endTime: Date, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ChargebackSummariesGet200Response;
    }>;
}
export declare enum ConversionDetailsApiApiKeys {
}
export declare class ConversionDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ConversionDetailsApiApiKeys, value: string): void;
    getConversionDetail(startTime: Date, endTime: Date, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ConversionDetailsGet200Response;
    }>;
}
export declare enum CreditApiApiKeys {
}
export declare class CreditApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CreditApiApiKeys, value: string): void;
    createCredit(createCreditRequest: CreateCreditRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2CreditsPost201Response;
    }>;
}
export declare enum CustomerApiApiKeys {
}
export declare class CustomerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CustomerApiApiKeys, value: string): void;
    deleteCustomer(customerTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getCustomer(customerTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostCustomerRequest;
    }>;
    patchCustomer(customerTokenId: string, patchCustomerRequest: PatchCustomerRequest, profileId?: string, ifMatch?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PatchCustomerRequest;
    }>;
    postCustomer(postCustomerRequest: PostCustomerRequest, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostCustomerRequest;
    }>;
}
export declare enum CustomerPaymentInstrumentApiApiKeys {
}
export declare class CustomerPaymentInstrumentApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CustomerPaymentInstrumentApiApiKeys, value: string): void;
    deleteCustomerPaymentInstrument(customerTokenId: string, paymentInstrumentTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getCustomerPaymentInstrument(customerTokenId: string, paymentInstrumentTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostCustomerPaymentInstrumentRequest;
    }>;
    getCustomerPaymentInstrumentsList(customerTokenId: string, profileId?: string, offset?: number, limit?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PaymentInstrumentList;
    }>;
    patchCustomersPaymentInstrument(customerTokenId: string, paymentInstrumentTokenId: string, patchCustomerPaymentInstrumentRequest: PatchCustomerPaymentInstrumentRequest, profileId?: string, ifMatch?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PatchCustomerPaymentInstrumentRequest;
    }>;
    postCustomerPaymentInstrument(customerTokenId: string, postCustomerPaymentInstrumentRequest: PostCustomerPaymentInstrumentRequest, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostCustomerPaymentInstrumentRequest;
    }>;
}
export declare enum CustomerShippingAddressApiApiKeys {
}
export declare class CustomerShippingAddressApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CustomerShippingAddressApiApiKeys, value: string): void;
    deleteCustomerShippingAddress(customerTokenId: string, shippingAddressTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getCustomerShippingAddress(customerTokenId: string, shippingAddressTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostCustomerShippingAddressRequest;
    }>;
    getCustomerShippingAddressesList(customerTokenId: string, profileId?: string, offset?: number, limit?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ShippingAddressListForCustomer;
    }>;
    patchCustomersShippingAddress(customerTokenId: string, shippingAddressTokenId: string, patchCustomerShippingAddressRequest: PatchCustomerShippingAddressRequest, profileId?: string, ifMatch?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PatchCustomerShippingAddressRequest;
    }>;
    postCustomerShippingAddress(customerTokenId: string, postCustomerShippingAddressRequest: PostCustomerShippingAddressRequest, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostCustomerShippingAddressRequest;
    }>;
}
export declare enum DecisionManagerApiApiKeys {
}
export declare class DecisionManagerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DecisionManagerApiApiKeys, value: string): void;
    addNegative(type: string, addNegativeListRequest: AddNegativeListRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1UpdatePost201Response;
    }>;
    createBundledDecisionManagerCase(createBundledDecisionManagerCaseRequest: CreateBundledDecisionManagerCaseRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1DecisionsPost201Response;
    }>;
    fraudUpdate(id: string, fraudMarkingActionRequest: FraudMarkingActionRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1UpdatePost201Response;
    }>;
}
export declare enum DownloadDTDApiApiKeys {
}
export declare class DownloadDTDApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DownloadDTDApiApiKeys, value: string): void;
    getDTDV2(reportDefinitionNameVersion: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum DownloadXSDApiApiKeys {
}
export declare class DownloadXSDApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DownloadXSDApiApiKeys, value: string): void;
    getXSDV2(reportDefinitionNameVersion: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum EMVTagDetailsApiApiKeys {
}
export declare class EMVTagDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EMVTagDetailsApiApiKeys, value: string): void;
    getEmvTags(options?: any): Promise<{
        response: http.IncomingMessage;
        body: TssV2GetEmvTags200Response;
    }>;
    parseEmvTags(body: Body, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TssV2PostEmvTags200Response;
    }>;
}
export declare enum InstrumentIdentifierApiApiKeys {
}
export declare class InstrumentIdentifierApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InstrumentIdentifierApiApiKeys, value: string): void;
    deleteInstrumentIdentifier(instrumentIdentifierTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getInstrumentIdentifier(instrumentIdentifierTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostInstrumentIdentifierRequest;
    }>;
    getInstrumentIdentifierPaymentInstrumentsList(instrumentIdentifierTokenId: string, profileId?: string, offset?: number, limit?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PaymentInstrumentList1;
    }>;
    patchInstrumentIdentifier(instrumentIdentifierTokenId: string, patchInstrumentIdentifierRequest: PatchInstrumentIdentifierRequest, profileId?: string, ifMatch?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PatchInstrumentIdentifierRequest;
    }>;
    postInstrumentIdentifier(postInstrumentIdentifierRequest: PostInstrumentIdentifierRequest, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostInstrumentIdentifierRequest;
    }>;
    postInstrumentIdentifierEnrollment(instrumentIdentifierTokenId: string, postInstrumentIdentifierEnrollmentRequest: PostInstrumentIdentifierEnrollmentRequest, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum InterchangeClearingLevelDetailsApiApiKeys {
}
export declare class InterchangeClearingLevelDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InterchangeClearingLevelDetailsApiApiKeys, value: string): void;
    getInterchangeClearingLevelDetails(startTime: Date, endTime: Date, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3InterchangeClearingLevelDetailsGet200Response;
    }>;
}
export declare enum InvoiceSettingsApiApiKeys {
}
export declare class InvoiceSettingsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InvoiceSettingsApiApiKeys, value: string): void;
    getInvoiceSettings(options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoiceSettingsGet200Response;
    }>;
    updateInvoiceSettings(invoiceSettingsRequest: InvoiceSettingsRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoiceSettingsGet200Response;
    }>;
}
export declare enum InvoicesApiApiKeys {
}
export declare class InvoicesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InvoicesApiApiKeys, value: string): void;
    createInvoice(createInvoiceRequest: CreateInvoiceRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoicesPost201Response;
    }>;
    getAllInvoices(offset: number, limit: number, status?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoicesAllGet200Response;
    }>;
    getInvoice(id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoicesGet200Response;
    }>;
    performCancelAction(id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoicesPost201Response;
    }>;
    performSendAction(id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoicesPost201Response;
    }>;
    updateInvoice(id: string, updateInvoiceRequest: UpdateInvoiceRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InvoicingV2InvoicesPost201Response;
    }>;
}
export declare enum KeyGenerationApiApiKeys {
}
export declare class KeyGenerationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: KeyGenerationApiApiKeys, value: string): void;
    generatePublicKey(format: string, generatePublicKeyRequest: GeneratePublicKeyRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
export declare enum KeyManagementApiApiKeys {
}
export declare class KeyManagementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: KeyManagementApiApiKeys, value: string): void;
    searchKeys(offset?: number, limit?: number, sort?: string, organizationIds?: Array<string>, keyIds?: Array<string>, keyTypes?: Array<string>, expirationStartDate?: Date, expirationEndDate?: Date, options?: any): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse200;
    }>;
}
export declare enum KeyManagementPasswordApiApiKeys {
}
export declare class KeyManagementPasswordApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: KeyManagementPasswordApiApiKeys, value: string): void;
    updatePassword(keyId: string, updatePasswordKeysRequest: UpdatePasswordKeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
export declare enum KeyManagementPgpApiApiKeys {
}
export declare class KeyManagementPgpApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: KeyManagementPgpApiApiKeys, value: string): void;
    updatePGP(keyId: string, updatePGPKeysRequest: UpdatePGPKeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
export declare enum KeyManagementScmpApiApiKeys {
}
export declare class KeyManagementScmpApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: KeyManagementScmpApiApiKeys, value: string): void;
    updateSCMP(keyId: string, updatePGPKeysRequest: UpdatePGPKeysRequest1, options?: any): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
export declare enum NetFundingsApiApiKeys {
}
export declare class NetFundingsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: NetFundingsApiApiKeys, value: string): void;
    getNetFundingDetails(startTime: Date, endTime: Date, organizationId?: string, groupName?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3NetFundingsGet200Response;
    }>;
}
export declare enum NotificationOfChangesApiApiKeys {
}
export declare class NotificationOfChangesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: NotificationOfChangesApiApiKeys, value: string): void;
    getNotificationOfChangeReport(startTime: Date, endTime: Date, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3NotificationofChangesGet200Response;
    }>;
}
export declare enum PayerAuthenticationApiApiKeys {
}
export declare class PayerAuthenticationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PayerAuthenticationApiApiKeys, value: string): void;
    checkPayerAuthEnrollment(checkPayerAuthEnrollmentRequest: CheckPayerAuthEnrollmentRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1AuthenticationsPost201Response;
    }>;
    payerAuthSetup(payerAuthSetupRequest: PayerAuthSetupRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1AuthenticationSetupsPost201Response;
    }>;
    validateAuthenticationResults(validateRequest: ValidateRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1AuthenticationResultsPost201Response;
    }>;
}
export declare enum PaymentBatchSummariesApiApiKeys {
}
export declare class PaymentBatchSummariesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PaymentBatchSummariesApiApiKeys, value: string): void;
    getPaymentBatchSummary(startTime: Date, endTime: Date, organizationId?: string, rollUp?: string, breakdown?: string, startDayOfWeek?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3PaymentBatchSummariesGet200Response;
    }>;
}
export declare enum PaymentInstrumentApiApiKeys {
}
export declare class PaymentInstrumentApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PaymentInstrumentApiApiKeys, value: string): void;
    deletePaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getPaymentInstrument(paymentInstrumentTokenId: string, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostPaymentInstrumentRequest;
    }>;
    patchPaymentInstrument(paymentInstrumentTokenId: string, patchPaymentInstrumentRequest: PatchPaymentInstrumentRequest, profileId?: string, ifMatch?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PatchPaymentInstrumentRequest;
    }>;
    postPaymentInstrument(postPaymentInstrumentRequest: PostPaymentInstrumentRequest, profileId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PostPaymentInstrumentRequest;
    }>;
}
export declare enum PaymentsApiApiKeys {
}
export declare class PaymentsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PaymentsApiApiKeys, value: string): void;
    createPayment(createPaymentRequest: CreatePaymentRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsPost201Response;
    }>;
    incrementAuth(id: string, incrementAuthRequest: IncrementAuthRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2IncrementalAuthorizationPatch201Response;
    }>;
    refreshPaymentStatus(id: string, refreshPaymentStatusRequest: RefreshPaymentStatusRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsPost201Response1;
    }>;
}
export declare enum PayoutsApiApiKeys {
}
export declare class PayoutsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PayoutsApiApiKeys, value: string): void;
    octCreatePayment(octCreatePaymentRequest: OctCreatePaymentRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PayoutsPost201Response;
    }>;
}
export declare enum PurchaseAndRefundDetailsApiApiKeys {
}
export declare class PurchaseAndRefundDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PurchaseAndRefundDetailsApiApiKeys, value: string): void;
    getPurchaseAndRefundDetails(startTime: Date, endTime: Date, organizationId?: string, paymentSubtype?: string, viewBy?: string, groupName?: string, offset?: number, limit?: number, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3PurchaseRefundDetailsGet200Response;
    }>;
}
export declare enum PushFundsApiApiKeys {
}
export declare class PushFundsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PushFundsApiApiKeys, value: string): void;
    createPushFundsTransfer(pushFundsRequest: PushFundsRequest, contentType: string, xRequestid: string, vCMerchantId: string, vCPermissions: string, vCCorrelationId: string, vCOrganizationId: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PushFunds201Response;
    }>;
}
export declare enum RefundApiApiKeys {
}
export declare class RefundApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: RefundApiApiKeys, value: string): void;
    refundCapture(refundCaptureRequest: RefundCaptureRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsRefundPost201Response;
    }>;
    refundPayment(refundPaymentRequest: RefundPaymentRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsRefundPost201Response;
    }>;
}
export declare enum ReportDefinitionsApiApiKeys {
}
export declare class ReportDefinitionsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReportDefinitionsApiApiKeys, value: string): void;
    getResourceInfoByReportDefinition(reportDefinitionName: string, subscriptionType?: string, reportMimeType?: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ReportDefinitionsNameGet200Response;
    }>;
    getResourceV2Info(subscriptionType?: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ReportDefinitionsGet200Response;
    }>;
}
export declare enum ReportDownloadsApiApiKeys {
}
export declare class ReportDownloadsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReportDownloadsApiApiKeys, value: string): void;
    downloadReport(reportDate: string, reportName: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum ReportSubscriptionsApiApiKeys {
}
export declare class ReportSubscriptionsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReportSubscriptionsApiApiKeys, value: string): void;
    createStandardOrClassicSubscription(predefinedSubscriptionRequestBean: PredefinedSubscriptionRequestBean, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createSubscription(createReportSubscriptionRequest: CreateReportSubscriptionRequest, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSubscription(reportName: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAllSubscriptions(organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ReportSubscriptionsGet200Response;
    }>;
    getSubscription(reportName: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ReportSubscriptionsGet200ResponseSubscriptions;
    }>;
}
export declare enum ReportsApiApiKeys {
}
export declare class ReportsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReportsApiApiKeys, value: string): void;
    createReport(createAdhocReportRequest: CreateAdhocReportRequest, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getReportByReportId(reportId: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ReportsIdGet200Response;
    }>;
    searchReports(startTime: Date, endTime: Date, timeQueryType: string, organizationId?: string, reportMimeType?: string, reportFrequency?: string, reportName?: string, reportDefinitionId?: number, reportStatus?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3ReportsGet200Response;
    }>;
}
export declare enum RetrievalDetailsApiApiKeys {
}
export declare class RetrievalDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: RetrievalDetailsApiApiKeys, value: string): void;
    getRetrievalDetails(startTime: Date, endTime: Date, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3RetrievalDetailsGet200Response;
    }>;
}
export declare enum RetrievalSummariesApiApiKeys {
}
export declare class RetrievalSummariesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: RetrievalSummariesApiApiKeys, value: string): void;
    getRetrievalSummary(startTime: Date, endTime: Date, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: ReportingV3RetrievalSummariesGet200Response;
    }>;
}
export declare enum ReversalApiApiKeys {
}
export declare class ReversalApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ReversalApiApiKeys, value: string): void;
    authReversal(id: string, authReversalRequest: AuthReversalRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsReversalsPost201Response;
    }>;
    mitReversal(mitReversalRequest: MitReversalRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsReversalsPost201Response;
    }>;
}
export declare enum SearchTransactionsApiApiKeys {
}
export declare class SearchTransactionsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SearchTransactionsApiApiKeys, value: string): void;
    createSearch(createSearchRequest: CreateSearchRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TssV2TransactionsPost201Response;
    }>;
    getSearch(searchId: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TssV2TransactionsPost201Response;
    }>;
}
export declare enum SecureFileShareApiApiKeys {
}
export declare class SecureFileShareApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SecureFileShareApiApiKeys, value: string): void;
    getFile(fileId: string, organizationId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getFileDetail(startDate: string, endDate: string, organizationId?: string, name?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: V1FileDetailsGet200Response;
    }>;
}
export declare enum SymmetricKeyManagementApiApiKeys {
}
export declare class SymmetricKeyManagementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SymmetricKeyManagementApiApiKeys, value: string): void;
    createV2SharedSecretKeys(createSharedSecretKeysRequest: CreateSharedSecretKeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysSymPost201Response;
    }>;
    createV2SharedSecretKeysVerifi(vIcDomain: string, createSharedSecretKeysVerifiRequest: CreateSharedSecretKeysVerifiRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysSymPost201Response;
    }>;
    deleteBulkSymmetricKeys(deleteBulkSymmetricKeysRequest: DeleteBulkSymmetricKeysRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysSymDeletesPost200Response;
    }>;
    getKeyDetails(keyId: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: KmsV2KeysSymGet200Response;
    }>;
}
export declare enum TaxesApiApiKeys {
}
export declare class TaxesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TaxesApiApiKeys, value: string): void;
    calculateTax(taxRequest: TaxRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: VasV2PaymentsPost201Response;
    }>;
    voidTax(voidTaxRequest: VoidTaxRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: VasV2TaxVoid200Response;
    }>;
}
export declare enum TokenizationApiApiKeys {
}
export declare class TokenizationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TokenizationApiApiKeys, value: string): void;
    tokenize(tokenizeRequest: TokenizeRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
export declare enum TransactionBatchesApiApiKeys {
}
export declare class TransactionBatchesApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionBatchesApiApiKeys, value: string): void;
    getTransactionBatchDetails(id: string, uploadDate?: string, status?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getTransactionBatchId(id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV1TransactionBatchesIdGet200Response;
    }>;
    getTransactionBatches(startTime: Date, endTime: Date, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV1TransactionBatchesGet200Response;
    }>;
}
export declare enum TransactionDetailsApiApiKeys {
}
export declare class TransactionDetailsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionDetailsApiApiKeys, value: string): void;
    getTransaction(id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: TssV2TransactionsGet200Response;
    }>;
}
export declare enum TransientTokenDataApiApiKeys {
}
export declare class TransientTokenDataApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransientTokenDataApiApiKeys, value: string): void;
    getTransactionForTransientToken(transientToken: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum UnifiedCheckoutCaptureContextApiApiKeys {
}
export declare class UnifiedCheckoutCaptureContextApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: UnifiedCheckoutCaptureContextApiApiKeys, value: string): void;
    generateUnifiedCheckoutCaptureContext(generateUnifiedCheckoutCaptureContextRequest: GenerateUnifiedCheckoutCaptureContextRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
export declare enum UserManagementApiApiKeys {
}
export declare class UserManagementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: UserManagementApiApiKeys, value: string): void;
    getUsers(organizationId?: string, userName?: string, permissionId?: string, roleId?: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: UmsV1UsersGet200Response;
    }>;
}
export declare enum UserManagementSearchApiApiKeys {
}
export declare class UserManagementSearchApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: UserManagementSearchApiApiKeys, value: string): void;
    searchUsers(searchRequest: SearchRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: UmsV1UsersGet200Response;
    }>;
}
export declare enum VerificationApiApiKeys {
}
export declare class VerificationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: VerificationApiApiKeys, value: string): void;
    validateExportCompliance(validateExportComplianceRequest: ValidateExportComplianceRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1ExportComplianceInquiriesPost201Response;
    }>;
    verifyCustomerAddress(verifyCustomerAddressRequest: VerifyCustomerAddressRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: RiskV1AddressVerificationsPost201Response;
    }>;
}
export declare enum VoidApiApiKeys {
}
export declare class VoidApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(apiClient: ApiClient, config: MerchantConfig);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: VoidApiApiKeys, value: string): void;
    mitVoid(mitVoidRequest: MitVoidRequest, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsVoidsPost201Response;
    }>;
    voidCapture(voidCaptureRequest: VoidCaptureRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsVoidsPost201Response;
    }>;
    voidCredit(voidCreditRequest: VoidCreditRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsVoidsPost201Response;
    }>;
    voidPayment(voidPaymentRequest: VoidPaymentRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsVoidsPost201Response;
    }>;
    voidRefund(voidRefundRequest: VoidRefundRequest, id: string, options?: any): Promise<{
        response: http.IncomingMessage;
        body: PtsV2PaymentsVoidsPost201Response;
    }>;
}
