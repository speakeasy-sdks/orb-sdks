import dataclasses
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclass_json
@dataclasses.dataclass
class CustomerTaxID:
    r"""CustomerTaxID
    Tax IDs are commonly required to be displayed on customer invoices, which are added to the headers of invoices.
    
    
    ### Supported Tax ID Countries and Types
    
    
    | Country        | Type         | Description                                 |
    |----------------|--------------|---------------------------------------------|
    | Australia      | `au_abn`     | Australian Business Number (AU ABN)	        |
    | Australia      | `au_arn`     | Australian Taxation Office Reference Number |
    | Austria        | `eu_vat`     | European VAT number                         |
    | Belgium        | `eu_vat`     | European VAT number                         |
    | Brazil         | `br_cnpj`    | Brazilian CNPJ number                       |
    | Brazil         | `br_cpf`     | Brazilian CPF number	                       |
    | Bulgaria       | `bg_uic`     | Bulgaria Unified Identification Code        |
    | Bulgaria       | `eu_vat`     | European VAT number                         |
    | Canada         | `ca_bn`      | Canadian BN                                 |
    | Canada         | `ca_gst_hst` | Canadian GST/HST number                     |
    | Canada         | `ca_pst_bc`  | Canadian PST number (British Columbia)      |
    | Canada         | `ca_pst_mb`  | Canadian PST number (Manitoba)              |
    | Canada         | `ca_pst_sk`  | Canadian PST number (Saskatchewan)          |
    | Canada         | `ca_qst`     | Canadian QST number (Québec)                |
    | Chile          | `cl_tin`     | Chilean TIN                                 |
    | Croatia        | `eu_vat`     | European VAT number                         |
    | Cyprus         | `eu_vat`     | European VAT number                         |
    | Czech Republic | `eu_vat`     | European VAT number                         |
    | Denmark        | `eu_vat`     | European VAT number                         |
    | Egypt          | `eg_tin`     | Egyptian Tax Identification Number	         |
    | Estonia   | `eu_vat`     | European VAT number   |                                                                             
    | EU        | `eu_oss_vat` | European One Stop Shop VAT number for non-Union scheme                                                   |
    | Finland   | `eu_vat`     | European VAT number                                                                                      |
    | France    | `eu_vat`     | European VAT number                                                                                      |
    | Georgia   | `ge_vat`     | Georgian VAT                                                                                             |
    | Germany   | `eu_vat`     | European VAT number                                                                                      |
    | Greece    | `eu_vat`     | European VAT number                                                                                      |
    | Hong Kong | `hk_br`      | Hong Kong BR number                                                                                      |
    | Hungary   | `eu_vat`     | European VAT number                                                                                      |
    | Hungary   | `hu_tin`     | Hungary tax number (adószám)	                                                                            |
    | Iceland   | `is_vat`     | Icelandic VAT                                                                                            |
    | India     | `in_gst`     | Indian GST number                                                                                        |
    | Indonesia | `id_npwp`    | Indonesian NPWP number                                                                                   |
    | Ireland   | `eu_vat`     | European VAT number                                                                                      |
    | Israel    | `il_vat`     | Israel VAT                                                                                               |
    | Italy     | `eu_vat`     | European VAT number                                                                                      |
    | Japan     | `jp_cn`      | Japanese Corporate Number (*Hōjin Bangō*)                                                                |
    | Japan     | `jp_rn`      | Japanese Registered Foreign Businesses' Registration Number (*Tōroku Kokugai Jigyōsha no Tōroku Bangō*)	 |
    | Japan     | `jp_trn`     | Japanese Tax Registration Number (*Tōroku Bangō*)	                                                       |
    | Kenya     | `ke_pin`     | Kenya Revenue Authority Personal Identification Number                                                   |
    | Latvia    | `eu_vat`     | European VAT number                                                                                  |
    | Liechtenstein | `li_uid`  | Liechtensteinian UID number           |
    | Lithuania     | `eu_vat`  | European VAT number	                  |
    | Luxembourg    | `eu_vat`  | European VAT number	                  |
    | Malaysia      | `my_frp`  | Malaysian FRP number                  |
    | Malaysia      | `my_itn`  | Malaysian ITN                         |
    | Malaysia      | `my_sst`  | Malaysian SST number                  |
    | Malta         | `eu_vat ` | European VAT number                   |
    | Mexico        | `mx_rfc`  | Mexican RFC number                    |
    | Netherlands   | `eu_vat`  | European VAT number	                  |
    | New Zealand   | `nz_gst`  | New Zealand GST number	               |
    | Norway        | `no_vat`  | Norwegian VAT number                  |
    | Philippines   | `ph_tin	` | Philippines Tax Identification Number |
    | Poland        | `eu_vat`  | European VAT number                   |
    | Portugal      | `eu_vat`  | European VAT number                   |
    | Romania       | `eu_vat`  | European VAT number                   |
    | Russia        | `ru_inn`  | Russian INN                           |
    | Russia        | `ru_kpp`  | Russian KPP                           |
    | Saudi Arabia  | `sg_gst`  | Singaporean GST                       |
    | Singapore     | `sg_uen`  | Singaporean UEN	                      |
    | Slovakia      | `eu_vat`  | European VAT number                   |
    | Slovenia      | `eu_vat`  | European VAT number                   |
    | Slovenia             | `si_tin` | Slovenia tax number (davčna številka)	             |
    | South Africa	        | `za_vat` | South African VAT number                           |
    | South Korea          | `kr_brn` | Korean BRN                                         |
    | Spain                | `es_cif` | Spanish NIF number (previously Spanish CIF number) |
    | Spain                | `eu_vat` | European VAT number	                               |
    | Sweden               | `eu_vat` | European VAT number                                |
    | Switzerland          | `ch_vat` | Switzerland VAT number	                            |
    | Taiwan               | `tw_vat` | Taiwanese VAT	                                     |
    | Thailand             | `th_vat` | Thai VAT                                           |
    | Turkey               | `tr_tin` | Turkish Tax Identification Number                  |
    | Ukraine              | `ua_vat` | Ukrainian VAT                                      |
    | United Arab Emirates | `ae_trn` | United Arab Emirates TRN	                          |
    | United Kingdom       | `eu_vat` | Northern Ireland VAT number                        |
    | United Kingdom       | `gb_vat` | United Kingdom VAT number                          |
    | United States        | `us_ein` | United States EIN                                  |
    
    
    """
    
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
