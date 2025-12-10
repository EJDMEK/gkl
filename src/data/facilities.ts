// Datová struktura pro otevírací dobu zařízení
// V budoucnu bude upravovatelná v administraci

export interface FacilityStatus {
  id: string
  name: string
  nameEn?: string
  status: 'open' | 'closed'
  hours?: string // Např. "8:00 – 23:00"
  customMessage?: string // Vlastní zpráva místo hodin
}

export interface FacilitiesConfig {
  lastUpdated: string // ISO date string
  facilities: FacilityStatus[]
}

// Demo data - v produkci budou načítána z API/administrace
export const facilitiesConfig: FacilitiesConfig = {
  lastUpdated: new Date().toISOString(),
  facilities: [
    {
      id: 'golf-course',
      name: 'Golfové hřiště',
      nameEn: 'Golf Course',
      status: 'closed',
      hours: undefined,
      customMessage: 'zavřeno'
    },
    {
      id: 'reception',
      name: 'Recepce',
      nameEn: 'Reception',
      status: 'closed',
      hours: undefined,
      customMessage: 'zavřeno'
    },
    {
      id: 'driving-range',
      name: 'Driving Range',
      nameEn: 'Driving Range',
      status: 'closed',
      hours: undefined,
      customMessage: 'zavřeno'
    },
    {
      id: 'restaurant',
      name: 'Restaurace',
      nameEn: 'Restaurant',
      status: 'open',
      hours: '8:00 – 23:00',
      customMessage: undefined
    }
  ]
}

// Funkce pro získání aktuálního stavu zařízení
export const getFacilityStatus = (facilityId: string): FacilityStatus | undefined => {
  return facilitiesConfig.facilities.find(f => f.id === facilityId)
}

// Funkce pro získání všech zařízení
export const getAllFacilities = (): FacilityStatus[] => {
  return facilitiesConfig.facilities
}

// Funkce pro aktualizaci stavu zařízení (pro budoucí administraci)
export const updateFacilityStatus = (facilityId: string, status: Partial<FacilityStatus>): void => {
  const facility = facilitiesConfig.facilities.find(f => f.id === facilityId)
  if (facility) {
    Object.assign(facility, status)
    facilitiesConfig.lastUpdated = new Date().toISOString()
  }
}

