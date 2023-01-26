import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from orbapi import utils


@dataclass_json
@dataclasses.dataclass
class PriceBillableMetric:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceBpsConfig:
    r"""PriceBpsConfig
    Provided when model_type is `bps`
    """
    
    bps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bps') }})
    per_unit_maximum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit_maximum') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceBulkBpsConfigTiers:
    bps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bps') }})
    maximum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_amount') }})
    per_unit_maximum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit_maximum') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceBulkBpsConfig:
    r"""PriceBulkBpsConfig
    Provided when model_type is `bulk_bps`
    """
    
    tiers: Optional[list[PriceBulkBpsConfigTiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceBulkConfigTiers:
    maximum_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_units') }})
    unit_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_amount') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceBulkConfig:
    r"""PriceBulkConfig
    Provided when model_type is `bulk`
    """
    
    tiers: Optional[list[PriceBulkConfigTiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    
class PriceCadenceEnum(str, Enum):
    ANNUAL = "annual"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"


@dataclass_json
@dataclasses.dataclass
class PriceMatrixConfigMatrixValues:
    dimension_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension_values') }})
    unit_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_amount') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceMatrixConfig:
    r"""PriceMatrixConfig
    Provided when model_type is `matrix`
    """
    
    default_unit_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_unit_amount') }})
    dimensions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    matrix_values: Optional[list[PriceMatrixConfigMatrixValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrix_values') }})
    
class PriceModelTypeEnum(str, Enum):
    UNIT = "unit"
    TIERED = "tiered"
    BULK = "bulk"
    PACKAGE = "package"
    BPS = "bps"
    TIERED_BPS = "tiered_bps"
    BULK_BPS = "bulk_bps"
    MATRIX = "matrix"


@dataclass_json
@dataclasses.dataclass
class PricePackageConfig:
    r"""PricePackageConfig
    Provided when model_type is `package`
    """
    
    package_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_amount') }})
    package_size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_size') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceTieredBpsConfigTiers:
    bps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bps') }})
    maximum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_amount') }})
    minimum_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_amount') }})
    per_unit_maximum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit_maximum') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceTieredBpsConfig:
    r"""PriceTieredBpsConfig
    Provided when model_type is `tiered_bps`
    """
    
    tiers: Optional[list[PriceTieredBpsConfigTiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceTieredConfigTiers:
    first_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_unit') }})
    last_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_unit') }})
    unit_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_amount') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceTieredConfig:
    r"""PriceTieredConfig
    Provided when model_type is`tiered`
    """
    
    tiers: Optional[list[PriceTieredConfigTiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    

@dataclass_json
@dataclasses.dataclass
class PriceUnitConfig:
    r"""PriceUnitConfig
    Provided when model_type is `unit`
    """
    
    unit_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_amount') }})
    

@dataclass_json
@dataclasses.dataclass
class Price:
    r"""Price
    Orb supports a few different pricing models out of the box. Each of these models is serialized differently in a given Price object. The model_type field determines the key for the configuration object that is present.
    
    ## Unit pricing
    With unit pricing, each unit costs a fixed amount.
    ```json
    {
        ...
        \"model_type\": \"unit\",
        \"unit_config\": {
            \"unit_amount\": \"0.50\"
        }
        ...
    }
    ```
    
    ## Tiered pricing
    In tiered pricing, the cost of a given unit depends on the tier range that it falls into, where each tier range is defined by an upper and lower bound. For example, the first ten units may cost $0.50 each and all units thereafter may cost $0.10 each.
    ```json
    {
        ...
        \"model_type\": \"tiered\",
        \"tiered_config\": {
            \"tiers\": [ 
               {
                    \"first_unit\": 1,
                    \"last_unit\": 10,
                    \"unit_amount\": \"0.50\"
                },
                {
                    \"first_unit\": 11,
                    \"last_unit\": null,
                    \"unit_amount\": \"0.10\"
                }
            ]
        }
        ...
    }
    ```
    
    ## Bulk pricing
    Bulk pricing applies when the number of units determine the cost of all units. For example, if you've bought less than 10 units, they may each be $0.50 for a total of $5.00. Once you've bought more than 10 units, all units may now be priced at $0.40 (i.e. 101 units total would be $40.40).
    ```json
    {
        ...
        \"model_type\": \"bulk\",
        \"bulk_config\": {
            \"tiers\": [ 
                {
                    \"maximum_units\": 10,
                    \"unit_amount\": \"0.50\"
                },
                {
                    \"maximum_units\": 1000,
                    \"unit_amount\": \"0.40\"
                }
              ]
        }
        ...
    }
    ```
    
    ## Package pricing
    Package pricing defines the size or granularity of a unit for billing purposes. For example, if the package size is set to 5, then 4 units will be billed as 5 and 6 units will be billed at 10.
    ```json
    {
        ...
        \"model_type\": \"package\",
        \"package_config\": {
           \"package_amount\": \"0.80\",
           \"package_size\": 10
        }
        ...
     }
    ```
    
    ## BPS pricing
    BPS pricing specifies a per-event (e.g. per-payment) rate in one hundredth of a percent (the number of basis points to charge), as well as a cap per event to assess. For example, this would allow you to assess a fee of 0.25% on every payment you process, with a maximum charge of $25 per payment.
    ```json
    {
        ...
        \"model_type\": \"bps\",
        \"bps_config\": {
           \"bps\": 125,
           \"per_unit_maximum\": \"11.00\"
        }
        ...
     }
    ```
    
    ## Bulk BPS pricing
    Bulk BPS pricing specifies BPS parameters in a tiered manner, dependent on the total quantity across all events. Similar to bulk pricing, the BPS parameters of a given event depends on the tier range that the billing period falls into. Each tier range is defined by an upper bound. For example, after $1.5M of payment volume is reached, each individual payment may have a lower cap or a smaller take-rate.
    ```json
        ...
        \"model_type\": \"bulk_bps\",
        \"bulk_bps_config\": {
            \"tiers\": [ 
               {
                    \"maximum_amount\": \"1000000.00\",
                    \"bps\": 125,
                    \"per_unit_maximum\": \"19.00\"
               },
              {
                    \"maximum_amount\": null,
                    \"bps\": 115,
                    \"per_unit_maximum\": \"4.00\"
                }
            ]
        }
        ...
    }
    ```
    
    ## Tiered BPS pricing
    Tiered BPS pricing specifies BPS parameters in a graduated manner, where an event's applicable parameter is a function of its marginal addition to the period total. Similar to tiered pricing, the BPS parameters of a given event depends on the tier range that it falls into, where each tier range is defined by an upper and lower bound. For example, the first few payments may have a 0.8 BPS take-rate and all payments after a specific volume may incur a take-rate of 0.5 BPS each.
    ```json
        ...
        \"model_type\": \"tiered_bps\",
        \"tiered_bps_config\": {
            \"tiers\": [ 
               {
                    \"minimum_amount\": \"0\",
                    \"maximum_amount\": \"1000000.00\",
                    \"bps\": 125,
                    \"per_unit_maximum\": \"19.00\"
               },
              {
                    \"minimum_amount\": \"1000000.00\",
                    \"maximum_amount\": null,
                    \"bps\": 115,
                    \"per_unit_maximum\": \"4.00\"
                }
            ]
        }
        ...
    }
    ```
    
    ## Matrix pricing
    Matrix pricing defines a set of unit prices in a one or two-dimensional matrix. `dimensions` defines the two event property values evaluated in this pricing model. In a one-dimensional matrix, the second value is `null`. Every configuration has a list of `matrix_values` which give the unit prices for specified property values. In a one-dimensional matrix, the matrix values will have `dimension_values` where the second value of the pair is null. If an event does not match any of the dimension values in the matrix, it will resort to the `default_unit_amount`.
    ```json
    ...
    \"model_type\": \"matrix\"
    \"matrix_config\": {
        \"default_unit_amount\": \"3.00\",
        \"dimensions\": [
            \"cluster_name\",
            \"region\"
        ],
        \"matrix_values\": [
            {
                \"dimension_values\": [
                    \"alpha\",
                    \"west\"
                ],
                \"unit_amount\": \"2.00\"
            },
            ...
        ]
    }
    ...
    ```
    
    ### Fixed fees
    Fixed fees are prices that are applied independent of usage quantites, and follow unit pricing. They also have an additional parameter `fixed_price_quantity`. If the Price represents a fixed cost, this represents the quantity of units applied.
    ```json
    {
        ...
        \"id\": \"price_id\",
        \"model_type\": \"unit\",
        \"unit_config\": {
           \"unit_amount\": \"2.00\"
        },
        \"fixed_price_quantity\": 3.0
        ...
    }
    ```
    
    """
    
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    discount: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    minimum: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    plan_phase_order: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_phase_order') }})
    billable_metric: Optional[PriceBillableMetric] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billable_metric') }})
    bps_config: Optional[PriceBpsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bps_config') }})
    bulk_bps_config: Optional[PriceBulkBpsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulk_bps_config') }})
    bulk_config: Optional[PriceBulkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulk_config') }})
    cadence: Optional[PriceCadenceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cadence') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fixed_price_quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_price_quantity') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    matrix_config: Optional[PriceMatrixConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrix_config') }})
    model_type: Optional[PriceModelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model_type') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_config: Optional[PricePackageConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_config') }})
    tiered_bps_config: Optional[PriceTieredBpsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiered_bps_config') }})
    tiered_config: Optional[PriceTieredConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiered_config') }})
    unit_config: Optional[PriceUnitConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_config') }})
    
