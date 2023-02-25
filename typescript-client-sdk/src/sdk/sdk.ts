import * as utils from "../internal/utils";
import { Availability } from "./availability";
import { Coupon } from "./coupon";
import { Credits } from "./credits";
import { Customer } from "./customer";
import { Event } from "./event";
import { Invoice } from "./invoice";
import { Security } from "./models/shared";
import { Plan } from "./plan";
import { Subscription } from "./subscription";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.billwithorb.com/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class OrbAPI {
  public availability: Availability;
  public coupon: Coupon;
  public credits: Credits;
  public customer: Customer;
  public event: Event;
  public invoice: Invoice;
  public plan: Plan;
  public subscription: Subscription;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "3.1.1";
  private _genVersion = "1.5.3";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.availability = new Availability(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.coupon = new Coupon(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.credits = new Credits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customer = new Customer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.event = new Event(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoice = new Invoice(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.plan = new Plan(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscription = new Subscription(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}