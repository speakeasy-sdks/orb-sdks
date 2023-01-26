import dataclasses



@dataclasses.dataclass
class SchemeVesselAPIToken:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'vessel-api-token' }})
    

@dataclasses.dataclass
class Security:
    vessel_api_token: SchemeVesselAPIToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
