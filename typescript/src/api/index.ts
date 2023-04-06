import ApiClient, { ApiCallback } from '../ApiClient';
import MerchantConfig from '../authentication/core/MerchantConfig';

import {
  AccessTokenResponse,
  AddNegativeListRequest,
  AuthReversalRequest,
  Body,
  CapturePaymentRequest,
  CheckPayerAuthEnrollmentRequest,
  CreateAccessTokenRequest,
  CreateAdhocReportRequest,
  CreateBundledDecisionManagerCaseRequest,
  CreateCreditRequest,
  CreateInvoiceRequest,
  CreateP12KeysRequest,
  CreatePaymentRequest,
  CreateReportSubscriptionRequest,
  CreateSearchRequest,
  CreateSharedSecretKeysRequest,
  CreateSharedSecretKeysVerifiRequest,
  DeleteBulkP12KeysRequest,
  DeleteBulkSymmetricKeysRequest,
  FlexV1KeysPost200Response,
  FlexV1TokensPost200Response,
  FraudMarkingActionRequest,
  GeneratePublicKeyRequest,
  GenerateUnifiedCheckoutCaptureContextRequest,
  IncrementAuthRequest,
  InlineResponse200,
  InvoiceSettingsRequest,
  InvoicingV2InvoiceSettingsGet200Response,
  InvoicingV2InvoicesAllGet200Response,
  InvoicingV2InvoicesGet200Response,
  InvoicingV2InvoicesPost201Response,
  KmsV2KeysAsymDeletesPost200Response,
  KmsV2KeysAsymGet200Response,
  KmsV2KeysAsymPost201Response,
  KmsV2KeysSymDeletesPost200Response,
  KmsV2KeysSymGet200Response,
  KmsV2KeysSymPost201Response,
  MitReversalRequest,
  MitVoidRequest,
  OctCreatePaymentRequest,
  PatchCustomerPaymentInstrumentRequest,
  PatchCustomerRequest,
  PatchCustomerShippingAddressRequest,
  PatchInstrumentIdentifierRequest,
  PatchPaymentInstrumentRequest,
  PayerAuthSetupRequest,
  PaymentInstrumentList,
  PaymentInstrumentList1,
  PostCustomerPaymentInstrumentRequest,
  PostCustomerRequest,
  PostCustomerShippingAddressRequest,
  PostInstrumentIdentifierEnrollmentRequest,
  PostInstrumentIdentifierRequest,
  PostPaymentInstrumentRequest,
  PredefinedSubscriptionRequestBean,
  PtsV1TransactionBatchesGet200Response,
  PtsV1TransactionBatchesIdGet200Response,
  PtsV2CreditsPost201Response,
  PtsV2IncrementalAuthorizationPatch201Response,
  PtsV2PaymentsCapturesPost201Response,
  PtsV2PaymentsPost201Response,
  PtsV2PaymentsPost201Response1,
  PtsV2PaymentsRefundPost201Response,
  PtsV2PaymentsReversalsPost201Response,
  PtsV2PaymentsVoidsPost201Response,
  PtsV2PayoutsPost201Response,
  PushFunds201Response,
  PushFundsRequest,
  RefreshPaymentStatusRequest,
  RefundCaptureRequest,
  RefundPaymentRequest,
  ReportingV3ChargebackDetailsGet200Response,
  ReportingV3ChargebackSummariesGet200Response,
  ReportingV3ConversionDetailsGet200Response,
  ReportingV3InterchangeClearingLevelDetailsGet200Response,
  ReportingV3NetFundingsGet200Response,
  ReportingV3NotificationofChangesGet200Response,
  ReportingV3PaymentBatchSummariesGet200Response,
  ReportingV3PurchaseRefundDetailsGet200Response,
  ReportingV3ReportDefinitionsGet200Response,
  ReportingV3ReportDefinitionsNameGet200Response,
  ReportingV3ReportSubscriptionsGet200Response,
  ReportingV3ReportSubscriptionsGet200ResponseSubscriptions,
  ReportingV3ReportsGet200Response,
  ReportingV3ReportsIdGet200Response,
  ReportingV3RetrievalDetailsGet200Response,
  ReportingV3RetrievalSummariesGet200Response,
  RiskV1AddressVerificationsPost201Response,
  RiskV1AuthenticationResultsPost201Response,
  RiskV1AuthenticationSetupsPost201Response,
  RiskV1AuthenticationsPost201Response,
  RiskV1DecisionsPost201Response,
  RiskV1ExportComplianceInquiriesPost201Response,
  RiskV1UpdatePost201Response,
  SearchRequest,
  ShippingAddressListForCustomer,
  TaxRequest,
  TokenizeRequest,
  TssV2GetEmvTags200Response,
  TssV2PostEmvTags200Response,
  TssV2TransactionsGet200Response,
  TssV2TransactionsPost201Response,
  UmsV1UsersGet200Response,
  UpdateAsymKeysRequest,
  UpdateInvoiceRequest,
  UpdatePGPKeysRequest,
  UpdatePGPKeysRequest1,
  UpdatePasswordKeysRequest,
  V1FileDetailsGet200Response,
  ValidateExportComplianceRequest,
  ValidateRequest,
  VasV2PaymentsPost201Response,
  VasV2TaxVoid200Response,
  VerifyCustomerAddressRequest,
  VoidCaptureRequest,
  VoidCreditRequest,
  VoidPaymentRequest,
  VoidRefundRequest,
  VoidTaxRequest,
} from '../model';

export class AsymmetricKeyManagementApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * 'Create one or more PKCS12 keys' 
   * @summary Create one or more PKCS12 keys
   *
   * @param {CreateP12KeysRequest} createP12KeysRequest 
   
   */
  public createP12Keys(createP12KeysRequest: CreateP12KeysRequest, callback: ApiCallback<KmsV2KeysAsymPost201Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysAsymPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysAsymPost201Response, callback);
  }
  /**
   * 'Delete one or more PKCS12 keys' 
   * @summary Delete one or more PKCS12 keys
   *
   * @param {DeleteBulkP12KeysRequest} deleteBulkP12KeysRequest 
   
   */
  public deleteBulkP12Keys(deleteBulkP12KeysRequest: DeleteBulkP12KeysRequest, callback: ApiCallback<KmsV2KeysAsymDeletesPost200Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysAsymDeletesPost200Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysAsymDeletesPost200Response, callback);
  }
  /**
   * Retrieves keys details by providing the key id.
   * @summary Retrieves PKCS12 key details
   *
   * @param {string} keyId Key ID. 
   
   */
  public getP12KeyDetails(keyId: string, callback: ApiCallback<KmsV2KeysAsymGet200Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysAsymGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysAsymGet200Response, callback);
  }
  /**
   * Activate or De-activate Asymmetric Key 
   * @summary Activate or De-activate Asymmetric Key
   *
   * @param {string} keyId Key ID. 
   * @param {UpdateAsymKeysRequest} updateAsymKeysRequest 
   
   */
  public updateAsymKey(keyId: string, updateAsymKeysRequest: UpdateAsymKeysRequest, callback: ApiCallback<any>) {
    const any = null;
    return this.apiClient.callApi<any>('', '', {}, {}, {}, {}, {}, [], [], [], any, callback);
  }
}
export class CaptureApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Include the payment ID in the POST request to capture the payment amount.
   * @summary Capture a Payment
   *
   * @param {CapturePaymentRequest} capturePaymentRequest 
   * @param {string} id The payment ID returned from a previous payment request. This ID links the capture to the payment. 
   
   */
  public capturePayment(capturePaymentRequest: CapturePaymentRequest, id: string, callback: ApiCallback<PtsV2PaymentsCapturesPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsCapturesPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsCapturesPost201Response, callback);
  }
}
export class ChargebackDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Chargeback Detail Report Description
   * @summary Get Chargeback Details
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getChargebackDetails(startTime: Date, endTime: Date, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3ChargebackDetailsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ChargebackDetailsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ChargebackDetailsGet200Response, callback);
  }
}
export class ChargebackSummariesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Chargeback Summary Report Description
   * @summary Get Chargeback Summaries
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getChargebackSummaries(startTime: Date, endTime: Date, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3ChargebackSummariesGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ChargebackSummariesGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ChargebackSummariesGet200Response, callback);
  }
}
export class ConversionDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Get conversion detail of transactions for a merchant.
   * @summary Get Conversion Detail Transactions
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getConversionDetail(startTime: Date, endTime: Date, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3ConversionDetailsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ConversionDetailsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ConversionDetailsGet200Response, callback);
  }
}
export class CreditApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * POST to the credit resource to credit funds to a specified credit card.
   * @summary Process a Credit
   *
   * @param {CreateCreditRequest} createCreditRequest 
   
   */
  public createCredit(createCreditRequest: CreateCreditRequest, callback: ApiCallback<PtsV2CreditsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2CreditsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2CreditsPost201Response, callback);
  }
}
export class CustomerApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   *
   * @summary Delete a Customer
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public deleteCustomer(customerTokenId: string, opts: { profileId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   *
   * @summary Retrieve a Customer
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public getCustomer(customerTokenId: string, opts: { profileId?: string }, callback: ApiCallback<PostCustomerRequest>) {
    const any = null;
    return this.apiClient.callApi<PostCustomerRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostCustomerRequest, callback);
  }
  /**
   *
   * @summary Update a Customer
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {PatchCustomerRequest} patchCustomerRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {string} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
   *
   */
  public patchCustomer(customerTokenId: string, patchCustomerRequest: PatchCustomerRequest, opts: { profileId?: string; ifMatch?: string }, callback: ApiCallback<PatchCustomerRequest>) {
    const any = null;
    return this.apiClient.callApi<PatchCustomerRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PatchCustomerRequest, callback);
  }
  /**
   *
   * @summary Create a Customer
   *
   * @param {PostCustomerRequest} postCustomerRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public postCustomer(postCustomerRequest: PostCustomerRequest, opts: { profileId?: string }, callback: ApiCallback<PostCustomerRequest>) {
    const any = null;
    return this.apiClient.callApi<PostCustomerRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostCustomerRequest, callback);
  }
}
export class CustomerPaymentInstrumentApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   *
   * @summary Delete a Customer Payment Instrument
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public deleteCustomerPaymentInstrument(customerTokenId: string, paymentInstrumentTokenId: string, opts: { profileId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   *
   * @summary Retrieve a Customer Payment Instrument
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public getCustomerPaymentInstrument(customerTokenId: string, paymentInstrumentTokenId: string, opts: { profileId?: string }, callback: ApiCallback<PostCustomerPaymentInstrumentRequest>) {
    const any = null;
    return this.apiClient.callApi<PostCustomerPaymentInstrumentRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostCustomerPaymentInstrumentRequest, callback);
  }
  /**
   *
   * @summary List Payment Instruments for a Customer
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
   * @param {number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
   *
   */
  public getCustomerPaymentInstrumentsList(customerTokenId: string, opts: { profileId?: string; offset?: number; limit?: number }, callback: ApiCallback<PaymentInstrumentList>) {
    const any = null;
    return this.apiClient.callApi<PaymentInstrumentList>('', '', {}, {}, {}, {}, {}, [], [], [], PaymentInstrumentList, callback);
  }
  /**
   *
   * @summary Update a Customer Payment Instrument
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
   * @param {PatchCustomerPaymentInstrumentRequest} patchCustomerPaymentInstrumentRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {string} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
   *
   */
  public patchCustomersPaymentInstrument(customerTokenId: string, paymentInstrumentTokenId: string, patchCustomerPaymentInstrumentRequest: PatchCustomerPaymentInstrumentRequest, opts: { profileId?: string; ifMatch?: string }, callback: ApiCallback<PatchCustomerPaymentInstrumentRequest>) {
    const any = null;
    return this.apiClient.callApi<PatchCustomerPaymentInstrumentRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PatchCustomerPaymentInstrumentRequest, callback);
  }
  /**
   * Include an existing TMS Customer & Instrument Identifier token id in the request. * A Customer token can be created by calling: **POST *_/tms/v2/customers*** * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers***
   * @summary Create a Customer Payment Instrument
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {PostCustomerPaymentInstrumentRequest} postCustomerPaymentInstrumentRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public postCustomerPaymentInstrument(customerTokenId: string, postCustomerPaymentInstrumentRequest: PostCustomerPaymentInstrumentRequest, opts: { profileId?: string }, callback: ApiCallback<PostCustomerPaymentInstrumentRequest>) {
    const any = null;
    return this.apiClient.callApi<PostCustomerPaymentInstrumentRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostCustomerPaymentInstrumentRequest, callback);
  }
}
export class CustomerShippingAddressApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   *
   * @summary Delete a Customer Shipping Address
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {string} shippingAddressTokenId The TokenId of an shipping address.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public deleteCustomerShippingAddress(customerTokenId: string, shippingAddressTokenId: string, opts: { profileId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   *
   * @summary Retrieve a Customer Shipping Address
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {string} shippingAddressTokenId The TokenId of an shipping address.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public getCustomerShippingAddress(customerTokenId: string, shippingAddressTokenId: string, opts: { profileId?: string }, callback: ApiCallback<PostCustomerShippingAddressRequest>) {
    const any = null;
    return this.apiClient.callApi<PostCustomerShippingAddressRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostCustomerShippingAddressRequest, callback);
  }
  /**
   *
   * @summary List Shipping Addresses for a Customer
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
   * @param {number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
   *
   */
  public getCustomerShippingAddressesList(customerTokenId: string, opts: { profileId?: string; offset?: number; limit?: number }, callback: ApiCallback<ShippingAddressListForCustomer>) {
    const any = null;
    return this.apiClient.callApi<ShippingAddressListForCustomer>('', '', {}, {}, {}, {}, {}, [], [], [], ShippingAddressListForCustomer, callback);
  }
  /**
   *
   * @summary Update a Customer Shipping Address
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {string} shippingAddressTokenId The TokenId of an shipping address.
   * @param {PatchCustomerShippingAddressRequest} patchCustomerShippingAddressRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {string} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
   *
   */
  public patchCustomersShippingAddress(customerTokenId: string, shippingAddressTokenId: string, patchCustomerShippingAddressRequest: PatchCustomerShippingAddressRequest, opts: { profileId?: string; ifMatch?: string }, callback: ApiCallback<PatchCustomerShippingAddressRequest>) {
    const any = null;
    return this.apiClient.callApi<PatchCustomerShippingAddressRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PatchCustomerShippingAddressRequest, callback);
  }
  /**
   * Include an existing TMS Customer token id in the request URI. * A Customer token can be created by calling: **POST *_/tms/v2/customers***
   * @summary Create a Customer Shipping Address
   *
   * @param {string} customerTokenId The TokenId of a customer.
   * @param {PostCustomerShippingAddressRequest} postCustomerShippingAddressRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public postCustomerShippingAddress(customerTokenId: string, postCustomerShippingAddressRequest: PostCustomerShippingAddressRequest, opts: { profileId?: string }, callback: ApiCallback<PostCustomerShippingAddressRequest>) {
    const any = null;
    return this.apiClient.callApi<PostCustomerShippingAddressRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostCustomerShippingAddressRequest, callback);
  }
}
export class DecisionManagerApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be 'postiive', 'negative' or 'review'. 
   * @summary List Management
   *
   * @param {string} type The list to be updated. It can be &#39;positive&#39;, &#39;negative&#39; or &#39;review&#39;.
   * @param {AddNegativeListRequest} addNegativeListRequest 
   
   */
  public addNegative(type: string, addNegativeListRequest: AddNegativeListRequest, callback: ApiCallback<RiskV1UpdatePost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1UpdatePost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1UpdatePost201Response, callback);
  }
  /**
   * Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.
   * @summary Create Decision Manager
   *
   * @param {CreateBundledDecisionManagerCaseRequest} createBundledDecisionManagerCaseRequest 
   
   */
  public createBundledDecisionManagerCase(createBundledDecisionManagerCaseRequest: CreateBundledDecisionManagerCaseRequest, callback: ApiCallback<RiskV1DecisionsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1DecisionsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1DecisionsPost201Response, callback);
  }
  /**
   * This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 
   * @summary Fraud Marking
   *
   * @param {string} id Request ID of the transaction that you want to mark as suspect or remove from history.
   * @param {FraudMarkingActionRequest} fraudMarkingActionRequest 
   
   */
  public fraudUpdate(id: string, fraudMarkingActionRequest: FraudMarkingActionRequest, callback: ApiCallback<RiskV1UpdatePost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1UpdatePost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1UpdatePost201Response, callback);
  }
}
export class DownloadDTDApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Used to download DTDs for reports on no-auth.
   * @summary Download DTD for Report
   *
   * @param {string} reportDefinitionNameVersion Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1
   
   */
  public getDTDV2(reportDefinitionNameVersion: string, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
}
export class DownloadXSDApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Used to download XSDs for reports on no-auth.
   * @summary Download XSD for Report
   *
   * @param {string} reportDefinitionNameVersion Name and version of XSD file to download. Some XSDs only have one version. In that case version name is not needed. Some example values are DecisionManagerDetailReport, DecisionManagerTypes
   
   */
  public getXSDV2(reportDefinitionNameVersion: string, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
}
export class EMVTagDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Returns the entire EMV tag dictionary
   * @summary Retrieve the EMV Dictionary
   *
   
   */
  public getEmvTags(callback: ApiCallback<TssV2GetEmvTags200Response>) {
    const any = null;
    return this.apiClient.callApi<TssV2GetEmvTags200Response>('', '', {}, {}, {}, {}, {}, [], [], [], TssV2GetEmvTags200Response, callback);
  }
  /**
   * Pass an EMV Tag-Length-Value (TLV) string for parsing.
   * @summary Parse an EMV String
   *
   * @param {Body} body 
   
   */
  public parseEmvTags(body: Body, callback: ApiCallback<TssV2PostEmvTags200Response>) {
    const any = null;
    return this.apiClient.callApi<TssV2PostEmvTags200Response>('', '', {}, {}, {}, {}, {}, [], [], [], TssV2PostEmvTags200Response, callback);
  }
}
export class InstrumentIdentifierApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   *
   * @summary Delete an Instrument Identifier
   *
   * @param {string} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public deleteInstrumentIdentifier(instrumentIdentifierTokenId: string, opts: { profileId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   *
   * @summary Retrieve an Instrument Identifier
   *
   * @param {string} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public getInstrumentIdentifier(instrumentIdentifierTokenId: string, opts: { profileId?: string }, callback: ApiCallback<PostInstrumentIdentifierRequest>) {
    const any = null;
    return this.apiClient.callApi<PostInstrumentIdentifierRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostInstrumentIdentifierRequest, callback);
  }
  /**
   *
   * @summary List Payment Instruments for an Instrument Identifier
   *
   * @param {string} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
   * @param {number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
   *
   */
  public getInstrumentIdentifierPaymentInstrumentsList(instrumentIdentifierTokenId: string, opts: { profileId?: string; offset?: number; limit?: number }, callback: ApiCallback<PaymentInstrumentList1>) {
    const any = null;
    return this.apiClient.callApi<PaymentInstrumentList1>('', '', {}, {}, {}, {}, {}, [], [], [], PaymentInstrumentList1, callback);
  }
  /**
   *
   * @summary Update an Instrument Identifier
   *
   * @param {string} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
   * @param {PatchInstrumentIdentifierRequest} patchInstrumentIdentifierRequest Specify the previous transaction ID to update.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {string} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
   *
   */
  public patchInstrumentIdentifier(instrumentIdentifierTokenId: string, patchInstrumentIdentifierRequest: PatchInstrumentIdentifierRequest, opts: { profileId?: string; ifMatch?: string }, callback: ApiCallback<PatchInstrumentIdentifierRequest>) {
    const any = null;
    return this.apiClient.callApi<PatchInstrumentIdentifierRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PatchInstrumentIdentifierRequest, callback);
  }
  /**
   *
   * @summary Create an Instrument Identifier
   *
   * @param {PostInstrumentIdentifierRequest} postInstrumentIdentifierRequest Specify either a Card, Bank Account or Enrollable Card
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public postInstrumentIdentifier(postInstrumentIdentifierRequest: PostInstrumentIdentifierRequest, opts: { profileId?: string }, callback: ApiCallback<PostInstrumentIdentifierRequest>) {
    const any = null;
    return this.apiClient.callApi<PostInstrumentIdentifierRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostInstrumentIdentifierRequest, callback);
  }
  /**
   *
   * @summary Enroll an Instrument Identifier for Network Tokenization
   *
   * @param {string} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
   * @param {PostInstrumentIdentifierEnrollmentRequest} postInstrumentIdentifierEnrollmentRequest Specify Enrollable Card details
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public postInstrumentIdentifierEnrollment(instrumentIdentifierTokenId: string, postInstrumentIdentifierEnrollmentRequest: PostInstrumentIdentifierEnrollmentRequest, opts: { profileId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
}
export class InterchangeClearingLevelDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Interchange Clearing Level data for an account or a merchant
   * @summary Interchange Clearing Level data for an account or a merchant
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getInterchangeClearingLevelDetails(startTime: Date, endTime: Date, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3InterchangeClearingLevelDetailsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3InterchangeClearingLevelDetailsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3InterchangeClearingLevelDetailsGet200Response, callback);
  }
}
export class InvoiceSettingsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Get the invoice settings for the invoice payment page.
   * @summary Get Invoice Settings
   *
   
   */
  public getInvoiceSettings(callback: ApiCallback<InvoicingV2InvoiceSettingsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoiceSettingsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoiceSettingsGet200Response, callback);
  }
  /**
   * Update invoice settings for the invoice payment page.
   * @summary Update Invoice Settings
   *
   * @param {InvoiceSettingsRequest} invoiceSettingsRequest 
   
   */
  public updateInvoiceSettings(invoiceSettingsRequest: InvoiceSettingsRequest, callback: ApiCallback<InvoicingV2InvoiceSettingsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoiceSettingsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoiceSettingsGet200Response, callback);
  }
}
export class InvoicesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Create a new invoice.
   * @summary Create a New Invoice
   *
   * @param {CreateInvoiceRequest} createInvoiceRequest 
   
   */
  public createInvoice(createInvoiceRequest: CreateInvoiceRequest, callback: ApiCallback<InvoicingV2InvoicesPost201Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoicesPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoicesPost201Response, callback);
  }
  /**
   * Get a list of invoices.
   * @summary Get a List of Invoices
   *
   * @param {number} offset Page offset number.
   * @param {number} limit Maximum number of items you would like returned.
   * @param {Object} opts Optional parameters
   * @param {string} opts.status The status of the invoice.  Possible values:   - DRAFT   - CREATED   - SENT   - PARTIAL   - PAID   - CANCELED
   *
   */
  public getAllInvoices(offset: number, limit: number, opts: { status?: string }, callback: ApiCallback<InvoicingV2InvoicesAllGet200Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoicesAllGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoicesAllGet200Response, callback);
  }
  /**
   * Get the details of a specific invoice.
   * @summary Get Invoice Details
   *
   * @param {string} id The invoice number.
   
   */
  public getInvoice(id: string, callback: ApiCallback<InvoicingV2InvoicesGet200Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoicesGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoicesGet200Response, callback);
  }
  /**
   * Cancel an invoice.
   * @summary Cancel an Invoice
   *
   * @param {string} id The invoice number.
   
   */
  public performCancelAction(id: string, callback: ApiCallback<InvoicingV2InvoicesPost201Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoicesPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoicesPost201Response, callback);
  }
  /**
   * Send an invoice.
   * @summary Send an Invoice
   *
   * @param {string} id The invoice number.
   
   */
  public performSendAction(id: string, callback: ApiCallback<InvoicingV2InvoicesPost201Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoicesPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoicesPost201Response, callback);
  }
  /**
   * Update an invoice.
   * @summary Update an Invoice
   *
   * @param {string} id The invoice number.
   * @param {UpdateInvoiceRequest} updateInvoiceRequest Updating the invoice does not resend the invoice automatically. You must resend the invoice separately.
   
   */
  public updateInvoice(id: string, updateInvoiceRequest: UpdateInvoiceRequest, callback: ApiCallback<InvoicingV2InvoicesPost201Response>) {
    const any = null;
    return this.apiClient.callApi<InvoicingV2InvoicesPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], InvoicingV2InvoicesPost201Response, callback);
  }
}
export class KeyGenerationApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Generate a one-time use public key and key ID to encrypt the card number in the follow-on Tokenize Card request. The key used to encrypt the card number on the cardholder’s device or browser is valid for 15 minutes and must be used to verify the signature in the response message. CyberSource recommends creating a new key for each order. Generating a key is an authenticated request initiated from your servers, prior to requesting to tokenize the card data from your customer’s device or browser.
   * @summary Generate Key
   *
   * @param {string} format Indicator to enable the receipt of the Keys response in Flex 11+ format (JWT) or legacy (parameter not required)
   * @param {GeneratePublicKeyRequest} generatePublicKeyRequest 
   
   */
  public generatePublicKey(format: string, generatePublicKeyRequest: GeneratePublicKeyRequest, callback: ApiCallback<FlexV1KeysPost200Response>) {
    const any = null;
    return this.apiClient.callApi<FlexV1KeysPost200Response>('', '', {}, {}, {}, {}, {}, [], [], [], FlexV1KeysPost200Response, callback);
  }
}
export class KeyManagementApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Search one or more Keys
   * @summary Search Keys
   *
   * @param {Object} opts Optional parameters
   * @param {number} opts.offset This allows you to specify the page offset from the resulting list resultset you want the records to be returned
   * @param {number} opts.limit This allows you to specify the total number of records to be returned off the resulting list resultset
   * @param {string} opts.sort This allows you to specify a comma separated list of fields in the order which the resulting list resultset must be sorted.
   * @param {Array<string>} opts.organizationIds List of Orgaization Ids to search. The maximum size of the organization Ids list is 1. The maximum length of Organization Id is 30.
   * @param {Array<string>} opts.keyIds List of Key Ids to search. The maximum size of the Key Ids list is 1
   * @param {Array<string>} opts.keyTypes Key Type, Possible values -  certificate, password, pgp and scmp_api. When Key Type is provided atleast one more filter needs to be provided
   * @param {Date} opts.expirationStartDate Expiry Filter Start Date. When Expiration Date filter is provided, atleast one more filter needs to be provided
   * @param {Date} opts.expirationEndDate Expiry Filter End Date. When Expiration Date filter is provided, atleast one more filter needs to be provided
   *
   */
  public searchKeys(opts: { offset?: number; limit?: number; sort?: string; organizationIds?: Array<string>; keyIds?: Array<string>; keyTypes?: Array<string>; expirationStartDate?: Date; expirationEndDate?: Date }, callback: ApiCallback<InlineResponse200>) {
    const any = null;
    return this.apiClient.callApi<InlineResponse200>('', '', {}, {}, {}, {}, {}, [], [], [], InlineResponse200, callback);
  }
}
export class KeyManagementPasswordApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Activate or De-activate key of type password 
   * @summary Activate or De-activate Password
   *
   * @param {string} keyId Key ID. 
   * @param {UpdatePasswordKeysRequest} updatePasswordKeysRequest 
   
   */
  public updatePassword(keyId: string, updatePasswordKeysRequest: UpdatePasswordKeysRequest, callback: ApiCallback<any>) {
    const any = null;
    return this.apiClient.callApi<any>('', '', {}, {}, {}, {}, {}, [], [], [], any, callback);
  }
}
export class KeyManagementPgpApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Activate or De-activate PGP Key 
   * @summary Activate or De-activate PGP Key
   *
   * @param {string} keyId Key ID. 
   * @param {UpdatePGPKeysRequest} updatePGPKeysRequest 
   
   */
  public updatePGP(keyId: string, updatePGPKeysRequest: UpdatePGPKeysRequest, callback: ApiCallback<any>) {
    const any = null;
    return this.apiClient.callApi<any>('', '', {}, {}, {}, {}, {}, [], [], [], any, callback);
  }
}
export class KeyManagementScmpApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Update or Deactivate scmp api Key 
   * @summary Update or Deactivate
   *
   * @param {string} keyId Key ID. 
   * @param {UpdatePGPKeysRequest1} updatePGPKeysRequest 
   
   */
  public updateSCMP(keyId: string, updatePGPKeysRequest: UpdatePGPKeysRequest1, callback: ApiCallback<any>) {
    const any = null;
    return this.apiClient.callApi<any>('', '', {}, {}, {}, {}, {}, [], [], [], any, callback);
  }
}
export class NetFundingsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Get Netfunding information for an account or a merchant.
   * @summary Get Netfunding Information for an Account or a Merchant
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   * @param {string} opts.groupName Valid CyberSource Group Name.
   *
   */
  public getNetFundingDetails(startTime: Date, endTime: Date, opts: { organizationId?: string; groupName?: string }, callback: ApiCallback<ReportingV3NetFundingsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3NetFundingsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3NetFundingsGet200Response, callback);
  }
}
export class NotificationOfChangesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Download the Notification of Change report. This report shows eCheck-related fields updated as a result of a response to an eCheck settlement transaction. 
   * @summary Get Notification of Changes
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
   
   */
  public getNotificationOfChangeReport(startTime: Date, endTime: Date, callback: ApiCallback<ReportingV3NotificationofChangesGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3NotificationofChangesGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3NotificationofChangesGet200Response, callback);
  }
}
export class PayerAuthenticationApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * This call verifies that the card is enrolled in a card authentication program.
   * @summary Check Payer Auth Enrollment
   *
   * @param {CheckPayerAuthEnrollmentRequest} checkPayerAuthEnrollmentRequest 
   
   */
  public checkPayerAuthEnrollment(checkPayerAuthEnrollmentRequest: CheckPayerAuthEnrollmentRequest, callback: ApiCallback<RiskV1AuthenticationsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1AuthenticationsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1AuthenticationsPost201Response, callback);
  }
  /**
   * A new service for Merchants to get reference_id for Digital Wallets to use in place of BIN number in Cardinal. Set up file while authenticating with Cardinal. This service should be called by Merchant when payment instrument chosen or changes. This service has to be called before enrollment check.
   * @summary Setup Payer Auth
   *
   * @param {PayerAuthSetupRequest} payerAuthSetupRequest 
   
   */
  public payerAuthSetup(payerAuthSetupRequest: PayerAuthSetupRequest, callback: ApiCallback<RiskV1AuthenticationSetupsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1AuthenticationSetupsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1AuthenticationSetupsPost201Response, callback);
  }
  /**
   * This call retrieves and validates the authentication results from issuer and allows the merchant to proceed with processing the payment. 
   * @summary Validate Authentication Results
   *
   * @param {ValidateRequest} validateRequest 
   
   */
  public validateAuthenticationResults(validateRequest: ValidateRequest, callback: ApiCallback<RiskV1AuthenticationResultsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1AuthenticationResultsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1AuthenticationResultsPost201Response, callback);
  }
}
export class PaymentBatchSummariesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Scope can be either account/merchant or reseller.
   * @summary Get Payment Batch Summary Data
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   * @param {string} opts.rollUp Conditional - RollUp for data for day/week/month. Required while getting breakdown data for a Merchant
   * @param {string} opts.breakdown Conditional - Breakdown on account_rollup/all_merchant/selected_merchant. Required while getting breakdown data for a Merchant.
   * @param {number} opts.startDayOfWeek Optional - Start day of week to breakdown data for weeks in a month
   *
   */
  public getPaymentBatchSummary(startTime: Date, endTime: Date, opts: { organizationId?: string; rollUp?: string; breakdown?: string; startDayOfWeek?: number }, callback: ApiCallback<ReportingV3PaymentBatchSummariesGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3PaymentBatchSummariesGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3PaymentBatchSummariesGet200Response, callback);
  }
}
export class PaymentInstrumentApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   *
   * @summary Delete a Payment Instrument
   *
   * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public deletePaymentInstrument(paymentInstrumentTokenId: string, opts: { profileId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   *
   * @summary Retrieve a Payment Instrument
   *
   * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public getPaymentInstrument(paymentInstrumentTokenId: string, opts: { profileId?: string }, callback: ApiCallback<PostPaymentInstrumentRequest>) {
    const any = null;
    return this.apiClient.callApi<PostPaymentInstrumentRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostPaymentInstrumentRequest, callback);
  }
  /**
   *
   * @summary Update a Payment Instrument
   *
   * @param {string} paymentInstrumentTokenId The TokenId of a payment instrument.
   * @param {PatchPaymentInstrumentRequest} patchPaymentInstrumentRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   * @param {string} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
   *
   */
  public patchPaymentInstrument(paymentInstrumentTokenId: string, patchPaymentInstrumentRequest: PatchPaymentInstrumentRequest, opts: { profileId?: string; ifMatch?: string }, callback: ApiCallback<PatchPaymentInstrumentRequest>) {
    const any = null;
    return this.apiClient.callApi<PatchPaymentInstrumentRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PatchPaymentInstrumentRequest, callback);
  }
  /**
   * Include an existing TMS Instrument Identifier id in the request body. * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers***
   * @summary Create a Payment Instrument
   *
   * @param {PostPaymentInstrumentRequest} postPaymentInstrumentRequest
   * @param {Object} opts Optional parameters
   * @param {string} opts.profileId The id of a profile containing user specific TMS configuration.
   *
   */
  public postPaymentInstrument(postPaymentInstrumentRequest: PostPaymentInstrumentRequest, opts: { profileId?: string }, callback: ApiCallback<PostPaymentInstrumentRequest>) {
    const any = null;
    return this.apiClient.callApi<PostPaymentInstrumentRequest>('', '', {}, {}, {}, {}, {}, [], [], [], PostPaymentInstrumentRequest, callback);
  }
}
export class PaymentsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * A payment authorizes the amount for the transaction. There are a number of supported payment feature, such as E-commerce and Card Present - Credit Card/Debit Card, Echeck, e-Wallets, Level II/III Data, etc..  A payment response includes the status of the request. It also includes processor-specific information when the request is successful and errors if unsuccessful. See the [Payments Developer Guides Page](https://developer.cybersource.com/api/developer-guides/dita-payments/GettingStarted.html).  Authorization can be requested with Capture, Decision Manager, Payer Authentication(3ds), and Token Creation. 
   * @summary Process a Payment
   *
   * @param {CreatePaymentRequest} createPaymentRequest 
   
   */
  public createPayment(createPaymentRequest: CreatePaymentRequest, callback: ApiCallback<PtsV2PaymentsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsPost201Response, callback);
  }
  /**
   * Use this service to authorize additional charges in a lodging or autorental transaction. Include the ID returned from the original authorization in the PATCH request to add additional charges to that authorization. 
   * @summary Increment an Authorization
   *
   * @param {string} id The ID returned from the original authorization request.
   * @param {IncrementAuthRequest} incrementAuthRequest 
   
   */
  public incrementAuth(id: string, incrementAuthRequest: IncrementAuthRequest, callback: ApiCallback<PtsV2IncrementalAuthorizationPatch201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2IncrementalAuthorizationPatch201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2IncrementalAuthorizationPatch201Response, callback);
  }
  /**
   * Checks and updates the payment status 
   * @summary Check a Payment Status
   *
   * @param {string} id The payment id whose status needs to be checked and updated.
   * @param {RefreshPaymentStatusRequest} refreshPaymentStatusRequest 
   
   */
  public refreshPaymentStatus(id: string, refreshPaymentStatusRequest: RefreshPaymentStatusRequest, callback: ApiCallback<PtsV2PaymentsPost201Response1>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsPost201Response1>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsPost201Response1, callback);
  }
}
export class PayoutsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Send funds from a selected funding source to a designated credit/debit card account or a prepaid card using an Original Credit Transaction (OCT). 
   * @summary Process a Payout
   *
   * @param {OctCreatePaymentRequest} octCreatePaymentRequest 
   
   */
  public octCreatePayment(octCreatePaymentRequest: OctCreatePaymentRequest, callback: ApiCallback<PtsV2PayoutsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PayoutsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PayoutsPost201Response, callback);
  }
}
export class PurchaseAndRefundDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Download the Purchase and Refund Details report. This report report includes all purchases and refund transactions, as well as all activities related to transactions resulting in an adjustment to the net proceeds.
   * @summary Get Purchase and Refund Details
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   * @param {string} opts.paymentSubtype Payment Subtypes.   - **ALL**:  All Payment Subtypes   - **VI** :  Visa   - **MC** :  Master Card   - **AX** :  American Express   - **DI** :  Discover   - **DP** :  Pinless Debit  (default to ALL)
   * @param {string} opts.viewBy View results by Request Date or Submission Date.   - **requestDate** : Request Date   - **submissionDate**: Submission Date  (default to requestDate)
   * @param {string} opts.groupName Valid CyberSource Group Name.User can define groups using CBAPI and Group Management Module in EBC2. Groups are collection of organizationIds
   * @param {number} opts.offset Offset of the Purchase and Refund Results.
   * @param {number} opts.limit Results count per page. Range(1-2000) (default to 2000)
   *
   */
  public getPurchaseAndRefundDetails(startTime: Date, endTime: Date, opts: { organizationId?: string; paymentSubtype?: string; viewBy?: string; groupName?: string; offset?: number; limit?: number }, callback: ApiCallback<ReportingV3PurchaseRefundDetailsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3PurchaseRefundDetailsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3PurchaseRefundDetailsGet200Response, callback);
  }
}
export class PushFundsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Receive funds using an Original Credit Transaction (OCT). 
   * @summary Process a Push Funds Transfer
   *
   * @param {PushFundsRequest} pushFundsRequest 
   * @param {string} contentType 
   * @param {string} xRequestid 
   * @param {string} vCMerchantId 
   * @param {string} vCPermissions 
   * @param {string} vCCorrelationId 
   * @param {string} vCOrganizationId 
   
   */
  public createPushFundsTransfer(pushFundsRequest: PushFundsRequest, contentType: string, xRequestid: string, vCMerchantId: string, vCPermissions: string, vCCorrelationId: string, vCOrganizationId: string, callback: ApiCallback<PushFunds201Response>) {
    const any = null;
    return this.apiClient.callApi<PushFunds201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PushFunds201Response, callback);
  }
}
export class RefundApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Refund a capture API is only used, if you have requested Capture independenlty using [/pts/v2/payments/{id}/captures](https://developer.cybersource.com/api-reference-assets/index.html#payments_capture) API call. Include the capture ID in the POST request to refund the captured amount. 
   * @summary Refund a Capture
   *
   * @param {RefundCaptureRequest} refundCaptureRequest 
   * @param {string} id The capture ID. This ID is returned from a previous capture request.
   
   */
  public refundCapture(refundCaptureRequest: RefundCaptureRequest, id: string, callback: ApiCallback<PtsV2PaymentsRefundPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsRefundPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsRefundPost201Response, callback);
  }
  /**
   * Refund a Payment API is only used, if you have requested Authorization and Capture together in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call. Include the payment ID in the POST request to refund the payment amount. 
   * @summary Refund a Payment
   *
   * @param {RefundPaymentRequest} refundPaymentRequest 
   * @param {string} id The payment ID. This ID is returned from a previous payment request.
   
   */
  public refundPayment(refundPaymentRequest: RefundPaymentRequest, id: string, callback: ApiCallback<PtsV2PaymentsRefundPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsRefundPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsRefundPost201Response, callback);
  }
}
export class ReportDefinitionsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * View the attributes of an individual report type. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation/)
   * @summary Get Report Definition
   *
   * @param {string} reportDefinitionName Name of the Report definition to retrieve
   * @param {Object} opts Optional parameters
   * @param {string} opts.subscriptionType The subscription type for which report definition is required. By default the type will be CUSTOM. Valid Values: - CLASSIC - CUSTOM - STANDARD
   * @param {string} opts.reportMimeType The format for which the report definition is required. By default the value will be CSV. Valid Values: - application/xml - text/csv
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getResourceInfoByReportDefinition(reportDefinitionName: string, opts: { subscriptionType?: string; reportMimeType?: string; organizationId?: string }, callback: ApiCallback<ReportingV3ReportDefinitionsNameGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ReportDefinitionsNameGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ReportDefinitionsNameGet200Response, callback);
  }
  /**
   * View a list of supported reports and their attributes before subscribing to them.
   * @summary Get Reporting Resource Information
   *
   * @param {Object} opts Optional parameters
   * @param {string} opts.subscriptionType Valid Values: - CLASSIC - CUSTOM - STANDARD
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getResourceV2Info(opts: { subscriptionType?: string; organizationId?: string }, callback: ApiCallback<ReportingV3ReportDefinitionsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ReportDefinitionsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ReportDefinitionsGet200Response, callback);
  }
}
export class ReportDownloadsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Download a report using the unique report name and date.
   * @summary Download a Report
   *
   * @param {string} reportDate Valid date on which to download the report in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**  yyyy-mm-dd For reports that span multiple days, this value would be the end date of the report in the time zone of the report subscription. Example 1: If your report start date is 2020-03-06 and the end date is 2020-03-09, the reportDate passed in the query is 2020-03-09. Example 2: If your report runs from midnight to midnight on 2020-03-09, the reportDate passed in the query is 2020-03-10
   * @param {string} reportName Name of the report to download
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public downloadReport(reportDate: string, reportName: string, opts: { organizationId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
}
export class ReportSubscriptionsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Create or update an already existing classic or standard subscription.
   * @summary Create a Standard or Classic Subscription
   *
   * @param {PredefinedSubscriptionRequestBean} predefinedSubscriptionRequestBean Report subscription request payload
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public createStandardOrClassicSubscription(predefinedSubscriptionRequestBean: PredefinedSubscriptionRequestBean, opts: { organizationId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   * Create a report subscription for your organization. The report name must be unique.
   * @summary Create Report Subscription for a Report Name by Organization
   *
   * @param {CreateReportSubscriptionRequest} createReportSubscriptionRequest Report subscription request payload
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public createSubscription(createReportSubscriptionRequest: CreateReportSubscriptionRequest, opts: { organizationId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   * Delete a report subscription for your organization. You must know the unique name of the report you want to delete.
   * @summary Delete Subscription of a Report Name by Organization
   *
   * @param {string} reportName Name of the Report to Delete
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public deleteSubscription(reportName: string, opts: { organizationId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   * View a summary of all report subscriptions.
   * @summary Get All Subscriptions
   *
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getAllSubscriptions(opts: { organizationId?: string }, callback: ApiCallback<ReportingV3ReportSubscriptionsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ReportSubscriptionsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ReportSubscriptionsGet200Response, callback);
  }
  /**
   * View the details of a report subscription, such as the report format or report frequency, using the report’s unique name.
   * @summary Get Subscription for Report Name
   *
   * @param {string} reportName Name of the Report to Retrieve
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getSubscription(reportName: string, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3ReportSubscriptionsGet200ResponseSubscriptions>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ReportSubscriptionsGet200ResponseSubscriptions>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ReportSubscriptionsGet200ResponseSubscriptions, callback);
  }
}
export class ReportsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation)
   * @summary Create Adhoc Report
   *
   * @param {CreateAdhocReportRequest} createAdhocReportRequest Report subscription request payload
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public createReport(createAdhocReportRequest: CreateAdhocReportRequest, opts: { organizationId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   * Download a report using the reportId value. If you don’t already know this value, you can obtain it using the Retrieve available reports call.
   * @summary Get Report Based on Report Id
   *
   * @param {string} reportId Valid Report Id
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getReportByReportId(reportId: string, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3ReportsIdGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ReportsIdGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ReportsIdGet200Response, callback);
  }
  /**
   * Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report.
   * @summary Retrieve Available Reports
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {string} timeQueryType Specify time you would like to search  Valid values: - reportTimeFrame - executedTime
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   * @param {string} opts.reportMimeType Valid Report Format  Valid values: - application/xml - text/csv
   * @param {string} opts.reportFrequency Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC
   * @param {string} opts.reportName Valid Report Name
   * @param {number} opts.reportDefinitionId Valid Report Definition Id
   * @param {string} opts.reportStatus Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA
   *
   */
  public searchReports(startTime: Date, endTime: Date, timeQueryType: string, opts: { organizationId?: string; reportMimeType?: string; reportFrequency?: string; reportName?: string; reportDefinitionId?: number; reportStatus?: string }, callback: ApiCallback<ReportingV3ReportsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3ReportsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3ReportsGet200Response, callback);
  }
}
export class RetrievalDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Retrieval Detail Report Description
   * @summary Get Retrieval Details
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getRetrievalDetails(startTime: Date, endTime: Date, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3RetrievalDetailsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3RetrievalDetailsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3RetrievalDetailsGet200Response, callback);
  }
}
export class RetrievalSummariesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Retrieval Summary Report Description
   * @summary Get Retrieval Summaries
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Organization Id
   *
   */
  public getRetrievalSummary(startTime: Date, endTime: Date, opts: { organizationId?: string }, callback: ApiCallback<ReportingV3RetrievalSummariesGet200Response>) {
    const any = null;
    return this.apiClient.callApi<ReportingV3RetrievalSummariesGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], ReportingV3RetrievalSummariesGet200Response, callback);
  }
}
export class ReversalApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Include the payment ID in the POST request to reverse the payment amount.
   * @summary Process an Authorization Reversal
   *
   * @param {string} id The payment ID returned from a previous payment request.
   * @param {AuthReversalRequest} authReversalRequest 
   
   */
  public authReversal(id: string, authReversalRequest: AuthReversalRequest, callback: ApiCallback<PtsV2PaymentsReversalsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsReversalsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsReversalsPost201Response, callback);
  }
  /**
   * This is to reverse a previous payment that merchant does not receive a reply(Mostly due to Timeout). To use this feature/API, make sure to pass unique value to field - clientReferenceInformation -> transactionId in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call and use same transactionId in this API request payload to reverse the payment.
   * @summary Timeout Reversal
   *
   * @param {MitReversalRequest} mitReversalRequest 
   
   */
  public mitReversal(mitReversalRequest: MitReversalRequest, callback: ApiCallback<PtsV2PaymentsReversalsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsReversalsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsReversalsPost201Response, callback);
  }
}
export class SearchTransactionsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Create a search request. 
   * @summary Create a Search Request
   *
   * @param {CreateSearchRequest} createSearchRequest 
   
   */
  public createSearch(createSearchRequest: CreateSearchRequest, callback: ApiCallback<TssV2TransactionsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<TssV2TransactionsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], TssV2TransactionsPost201Response, callback);
  }
  /**
   * Include the Search ID in the GET request to retrieve the search results.
   * @summary Get Search Results
   *
   * @param {string} searchId Search ID.
   
   */
  public getSearch(searchId: string, callback: ApiCallback<TssV2TransactionsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<TssV2TransactionsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], TssV2TransactionsPost201Response, callback);
  }
}
export class SecureFileShareApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Download a file for the given file identifier
   * @summary Download a File with File Identifier
   *
   * @param {string} fileId Unique identifier for each file
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Cybersource Organization Id
   *
   */
  public getFile(fileId: string, opts: { organizationId?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   * Get list of files and it's information of them available inside the report directory
   * @summary Get List of Files
   *
   * @param {string} startDate Valid start date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd
   * @param {string} endDate Valid end date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId Valid Cybersource Organization Id
   * @param {string} opts.name **Tailored to searches for specific files with in given Date range** example : MyTransactionDetailreport.xml
   *
   */
  public getFileDetail(startDate: string, endDate: string, opts: { organizationId?: string; name?: string }, callback: ApiCallback<V1FileDetailsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<V1FileDetailsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], V1FileDetailsGet200Response, callback);
  }
}
export class SymmetricKeyManagementApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Create one or more Shared-Secret Keys 
   * @summary Create Shared-Secret Keys
   *
   * @param {CreateSharedSecretKeysRequest} createSharedSecretKeysRequest 
   
   */
  public createV2SharedSecretKeys(createSharedSecretKeysRequest: CreateSharedSecretKeysRequest, callback: ApiCallback<KmsV2KeysSymPost201Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysSymPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysSymPost201Response, callback);
  }
  /**
   * Create one or more Shared-Secret Keys as per Verifi spec with 32 chars, store digest algo during key generation. 
   * @summary Create Shared-Secret Keys as per verifi spec
   *
   * @param {string} vIcDomain domain
   * @param {CreateSharedSecretKeysVerifiRequest} createSharedSecretKeysVerifiRequest 
   
   */
  public createV2SharedSecretKeysVerifi(vIcDomain: string, createSharedSecretKeysVerifiRequest: CreateSharedSecretKeysVerifiRequest, callback: ApiCallback<KmsV2KeysSymPost201Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysSymPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysSymPost201Response, callback);
  }
  /**
   * 'Delete one or more Symmetric keys' 
   * @summary Delete one or more Symmetric keys
   *
   * @param {DeleteBulkSymmetricKeysRequest} deleteBulkSymmetricKeysRequest 
   
   */
  public deleteBulkSymmetricKeys(deleteBulkSymmetricKeysRequest: DeleteBulkSymmetricKeysRequest, callback: ApiCallback<KmsV2KeysSymDeletesPost200Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysSymDeletesPost200Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysSymDeletesPost200Response, callback);
  }
  /**
   * Retrieves keys details by providing the key id.
   * @summary Retrieves shared secret key details
   *
   * @param {string} keyId Key ID. 
   
   */
  public getKeyDetails(keyId: string, callback: ApiCallback<KmsV2KeysSymGet200Response>) {
    const any = null;
    return this.apiClient.callApi<KmsV2KeysSymGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], KmsV2KeysSymGet200Response, callback);
  }
}
export class TaxesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Get tax details for a transaction. 
   * @summary Calculate Taxes
   *
   * @param {TaxRequest} taxRequest 
   
   */
  public calculateTax(taxRequest: TaxRequest, callback: ApiCallback<VasV2PaymentsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<VasV2PaymentsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], VasV2PaymentsPost201Response, callback);
  }
  /**
   * Pass the Tax Request ID in the PATCH request to void the committed tax calculation.
   * @summary Void Taxes
   *
   * @param {VoidTaxRequest} voidTaxRequest 
   * @param {string} id The tax ID returned from a previous request.
   
   */
  public voidTax(voidTaxRequest: VoidTaxRequest, id: string, callback: ApiCallback<VasV2TaxVoid200Response>) {
    const any = null;
    return this.apiClient.callApi<VasV2TaxVoid200Response>('', '', {}, {}, {}, {}, {}, [], [], [], VasV2TaxVoid200Response, callback);
  }
}
export class TokenizationApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Returns a token representing the supplied card details. The token replaces card data and can be used as the Subscription ID in the CyberSource Simple Order API or SCMP API. This is an unauthenticated call that you should initiate from your customer’s device or browser.
   * @summary Tokenize Card
   *
   * @param {TokenizeRequest} tokenizeRequest 
   
   */
  public tokenize(tokenizeRequest: TokenizeRequest, callback: ApiCallback<FlexV1TokensPost200Response>) {
    const any = null;
    return this.apiClient.callApi<FlexV1TokensPost200Response>('', '', {}, {}, {}, {}, {}, [], [], [], FlexV1TokensPost200Response, callback);
  }
}
export class TransactionBatchesApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Provides real-time detailed status information about the transactions that you previously uploaded in the Business Center or processed with the Offline Transaction File Submission service.
   * @summary Get Transaction Details for a given Batch Id
   *
   * @param {string} id The batch id assigned for the template.
   * @param {Object} opts Optional parameters
   * @param {string} opts.uploadDate Date in which the original batch file was uploaded. Date must be in ISO-8601 format. Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) **Example date format:**  - yyyy-MM-dd
   * @param {string} opts.status Allows you to filter by rejected response.  Valid values: - Rejected
   *
   */
  public getTransactionBatchDetails(id: string, opts: { uploadDate?: string; status?: string }, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
  /**
   * Provide the search range
   * @summary Get Individual Batch File
   *
   * @param {string} id The batch id assigned for the template.
   
   */
  public getTransactionBatchId(id: string, callback: ApiCallback<PtsV1TransactionBatchesIdGet200Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV1TransactionBatchesIdGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV1TransactionBatchesIdGet200Response, callback);
  }
  /**
   * Provide the search range
   * @summary Get a List of Batch Files
   *
   * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ 
   * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ 
   
   */
  public getTransactionBatches(startTime: Date, endTime: Date, callback: ApiCallback<PtsV1TransactionBatchesGet200Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV1TransactionBatchesGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV1TransactionBatchesGet200Response, callback);
  }
}
export class TransactionDetailsApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Include the Request ID in the GET request to retrieve the transaction details.
   * @summary Retrieve a Transaction
   *
   * @param {string} id Request ID. 
   
   */
  public getTransaction(id: string, callback: ApiCallback<TssV2TransactionsGet200Response>) {
    const any = null;
    return this.apiClient.callApi<TssV2TransactionsGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], TssV2TransactionsGet200Response, callback);
  }
}
export class TransientTokenDataApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Retrieve the data captured by Unfied Checkout. This API is used to retrieve the detailed data represented by the Transient Token. This API will not return PCI payment data (PAN). Include the Request ID in the GET request to retrieve the transaction details.
   * @summary Get Transient Token Data
   *
   * @param {string} transientToken Transient Token returned by the Unified Checkout application. 
   
   */
  public getTransactionForTransientToken(transientToken: string, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
}
export class UnifiedCheckoutCaptureContextApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Generate a one-time use capture context used for the invocation of Unified Checkout. The Request wil contain all of the paramiters for how Unified Chkcout will operate within a client webpage. The resulting payload will be a JWT signed object that can be used to initate Unified Checkout within a merchnat web page
   * @summary Generate Unified Checkout Capture Context
   *
   * @param {GenerateUnifiedCheckoutCaptureContextRequest} generateUnifiedCheckoutCaptureContextRequest 
   
   */
  public generateUnifiedCheckoutCaptureContext(generateUnifiedCheckoutCaptureContextRequest: GenerateUnifiedCheckoutCaptureContextRequest, callback: ApiCallback) {
    const any = null;
    return this.apiClient.callApi('', '', {}, {}, {}, {}, {}, [], [], [], null, callback);
  }
}
export class UserManagementApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * This endpoint is deprecated. Please use the search end point.
   * @summary Get User Information - Deprecated
   *
   * @param {Object} opts Optional parameters
   * @param {string} opts.organizationId This is the orgId of the organization which the user belongs to.
   * @param {string} opts.userName User ID of the user you want to get details on.
   * @param {string} opts.permissionId permission that you are trying to search user on.
   * @param {string} opts.roleId role of the user you are trying to search on.
   *
   */
  public getUsers(opts: { organizationId?: string; userName?: string; permissionId?: string; roleId?: string }, callback: ApiCallback<UmsV1UsersGet200Response>) {
    const any = null;
    return this.apiClient.callApi<UmsV1UsersGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], UmsV1UsersGet200Response, callback);
  }
}
export class UserManagementSearchApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * This endpoint is to get all the user information depending on the filter criteria passed in request body.
   * @summary Search User Information
   *
   * @param {SearchRequest} searchRequest 
   
   */
  public searchUsers(searchRequest: SearchRequest, callback: ApiCallback<UmsV1UsersGet200Response>) {
    const any = null;
    return this.apiClient.callApi<UmsV1UsersGet200Response>('', '', {}, {}, {}, {}, {}, [], [], [], UmsV1UsersGet200Response, callback);
  }
}
export class VerificationApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * This call checks customer data against specified watch lists to ensure export compliance. 
   * @summary Validate export compliance
   *
   * @param {ValidateExportComplianceRequest} validateExportComplianceRequest 
   
   */
  public validateExportCompliance(validateExportComplianceRequest: ValidateExportComplianceRequest, callback: ApiCallback<RiskV1ExportComplianceInquiriesPost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1ExportComplianceInquiriesPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1ExportComplianceInquiriesPost201Response, callback);
  }
  /**
   * This call verifies that the customer address submitted is valid.
   * @summary Verify customer address
   *
   * @param {VerifyCustomerAddressRequest} verifyCustomerAddressRequest 
   
   */
  public verifyCustomerAddress(verifyCustomerAddressRequest: VerifyCustomerAddressRequest, callback: ApiCallback<RiskV1AddressVerificationsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<RiskV1AddressVerificationsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], RiskV1AddressVerificationsPost201Response, callback);
  }
}
export class VoidApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * This is to void a previous payment, capture, refund, or credit that merchant does not receive a reply(Mostly due to timeout). This is to void a previous payment, capture, refund, or credit that merchant does not receive a reply(Mostly due to Timeout). To use this feature/API, make sure to pass unique value to field - clientReferenceInformation -> transactionId in your payment, capture, refund, or credit API call and use same transactionId in this API request payload to reverse the payment.
   * @summary Timeout Void
   *
   * @param {MitVoidRequest} mitVoidRequest 
   
   */
  public mitVoid(mitVoidRequest: MitVoidRequest, callback: ApiCallback<PtsV2PaymentsVoidsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsVoidsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsVoidsPost201Response, callback);
  }
  /**
   * Refund a capture API is only used, if you have requested Capture independenlty using [/pts/v2/payments/{id}/captures](https://developer.cybersource.com/api-reference-assets/index.html#payments_capture) API call. Include the capture ID in the POST request to cancel the capture. 
   * @summary Void a Capture
   *
   * @param {VoidCaptureRequest} voidCaptureRequest 
   * @param {string} id The capture ID returned from a previous capture request.
   
   */
  public voidCapture(voidCaptureRequest: VoidCaptureRequest, id: string, callback: ApiCallback<PtsV2PaymentsVoidsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsVoidsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsVoidsPost201Response, callback);
  }
  /**
   * Include the credit ID in the POST request to cancel the credit.
   * @summary Void a Credit
   *
   * @param {VoidCreditRequest} voidCreditRequest 
   * @param {string} id The credit ID returned from a previous credit request.
   
   */
  public voidCredit(voidCreditRequest: VoidCreditRequest, id: string, callback: ApiCallback<PtsV2PaymentsVoidsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsVoidsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsVoidsPost201Response, callback);
  }
  /**
   * Void a Payment API is only used, if you have requested Authorization and Capture together in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call. Include the payment ID in the POST request to cancel the payment. 
   * @summary Void a Payment
   *
   * @param {VoidPaymentRequest} voidPaymentRequest 
   * @param {string} id The payment ID returned from a previous payment request.
   
   */
  public voidPayment(voidPaymentRequest: VoidPaymentRequest, id: string, callback: ApiCallback<PtsV2PaymentsVoidsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsVoidsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsVoidsPost201Response, callback);
  }
  /**
   * Include the refund ID in the POST request to cancel the refund.
   * @summary Void a Refund
   *
   * @param {VoidRefundRequest} voidRefundRequest 
   * @param {string} id The refund ID returned from a previous refund request.
   
   */
  public voidRefund(voidRefundRequest: VoidRefundRequest, id: string, callback: ApiCallback<PtsV2PaymentsVoidsPost201Response>) {
    const any = null;
    return this.apiClient.callApi<PtsV2PaymentsVoidsPost201Response>('', '', {}, {}, {}, {}, {}, [], [], [], PtsV2PaymentsVoidsPost201Response, callback);
  }
}
export class OAuthApi {
  apiClient: ApiClient;

  constructor(config: MerchantConfig, apiClient?: ApiClient) {}

  /**
   * Create access token and refresh token
   * @summary This request is used by technology partners to obtain an access token and a refresh token, which are contained in the response.  The partner can then use the access token for authentication when submitting API requests to CyberSource on behalf of the merchant.   The request must include the authorization code that was included in the URL redirect response from CyberSource (see [full documentation](https://developer.cybersource.com/api/developer-guides/OAuth/cybs_extend_intro.html)). Access tokens expire after 15 minutes. The refresh token is used to create a new access token, it expires after one year.
   *
   * @param {CreateAccessTokenRequest} createAccessTokenRequest Request payload
   * @param {Object} opts Optional parameters
   * @param {string} opts.vCClientCorrelationId We recommended that you submit this header with a unique value in every client request to this endpoint.  It is sent back in the response header and logged both in the request log and response log.
   *
   */
  public createAccessToken(createAccessTokenRequest: CreateAccessTokenRequest, opts: { vCClientCorrelationId?: string }, callback: ApiCallback<AccessTokenResponse>) {
    const any = null;
    return this.apiClient.callApi<AccessTokenResponse>('', '', {}, {}, {}, {}, {}, [], [], [], AccessTokenResponse, callback);
  }
}
