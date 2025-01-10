export interface CharacterStatsObj {
    armor: number;
    armorRegen: number;
    movementSpeed: number;
    stringifiedMovementSpeed: number;
    stringifiedDmgRedRatio: number;
    downTime: number;
    revivalTimeWhileDown: number;
}

export interface WeaponStatsObj {
    name: string;
    rateOfFire: number;
    adsSpeed: number;
    accuracy: number;
    handling: number;
    magazineCapacity: number;
    reloadSpeed: number;
    rechamberingSpeed: number;
    stringifiedDamage: number;
    maxScopeZoom: number;
    damage: {
        head: DamageObj;
        body: DamageObj;
        legs: DamageObj;
    }
}

export interface DamageObj {
    tenMeters: number;
    thirtyMeters: number;
    fiftyMeters: number;
}

export interface DetailedStatsObj {
    cooldown?: number;
    buffDuration?: number;
    costDemolition?: number;
    costEscort?: number;
    //Flavia
    butterflyDuration?: number;
    orbHealth?: number;
    orbDuration?: number;
    ultimatePointGainDemolition?: number;
    ultimatePointGainEscort?: number;
    zoneDuration?: number;
}

export interface CharacterAbilityObj {
    name: string;
    description: string;
    additionalInfo: string[];
}

export interface CharacterAbilitiesObj {
    active: {
        name: string;
        description: string;
        detailedStats: object;
    };
    passive: {
        name: string;
        description: string;
        detailedStats: object;
    };
    ultimate: {
        name: string;
        description: string;
        detailedStats: object;
    };
}