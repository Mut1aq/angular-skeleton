export interface GeoJSON {
  type: string;
  name: string;
  crs: Crs;
  features: Feature[];
}

export interface Crs {
  type: string;
  properties: {
    name: string;
  };
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Properties {
  ID_0: number;
  ISO: string;
  NAME_0: string;
  OBJECTID_1: number;
  ISO3: string;
  NAME_ENGLI: string;
  NAME_ISO: string;
  NAME_FAO: string;
  NAME_LOCAL: string;
  NAME_OBSOL: any;
  NAME_VARIA: string;
  NAME_NONLA: any;
  NAME_FRENC: string;
  NAME_SPANI: string;
  NAME_RUSSI: string;
  NAME_ARABI: string;
  NAME_CHINE: string;
  WASPARTOF: any;
  CONTAINS: any;
  SOVEREIGN: string;
  ISO2: string;
  WWW: any;
  FIPS: string;
  ISON: number;
  VALIDFR: string;
  VALIDTO: string;
  POP2000: number;
  SQKM: number;
  POPSQKM: number;
  UNREGION1: string;
  UNREGION2: string;
  DEVELOPING: number;
  CIS: number;
  Transition: number;
  OECD: number;
  WBREGION: string;
  WBINCOME: string;
  WBDEBT: string;
  WBOTHER: any;
  CEEAC: number;
  CEMAC: number;
  CEPLG: number;
  COMESA: number;
  EAC: number;
  ECOWAS: number;
  IGAD: number;
  IOC: number;
  MRU: number;
  SACU: number;
  UEMOA: number;
  UMA: number;
  PALOP: number;
  PARTA: number;
  CACM: number;
  EurAsEC: number;
  Agadir: number;
  SAARC: number;
  ASEAN: number;
  NAFTA: number;
  GCC: number;
  CSN: number;
  CARICOM: number;
  EU: number;
  CAN: number;
  ACP: number;
  Landlocked: number;
  AOSIS: number;
  SIDS: number;
  Islands: number;
  LDC: number;
}

export interface Geometry {
  type: string;
  coordinates: number[][][][];
}
