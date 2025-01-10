import * as flaviaInfo from '../characters/flavia.json'
import CharacterStats from '../components/characterStats';
import CharacterAbility from '../components/characterAbility';
import WeaponStats from '../components/weaponStats';
import UpgradeMenu from '../components/upgradeMenu';

import ActiveAbilityIcon from '../assets/skill_icons/flavia_active.png';
import PassiveAbilityIcon from '../assets/skill_icons/flavia_passive.png';
import UltimateAbilityIcon from '../assets/skill_icons/flavia_ultimate.png';
import AccuracyUpgradeIcon from '../assets/upgrade_icons/accuracy_upgrade.png';
import ArmorUpgradeIcon from '../assets/upgrade_icons/armor_upgrade.png';
import CapacityUpgradeIcon from '../assets/upgrade_icons/capacity_upgrade.png';
import CriticalHitUpgradeIcon from '../assets/upgrade_icons/critical_hit_upgrade.png';
import FiringUpgradeIcon from '../assets/upgrade_icons/firing_upgrade.png';

var flaviaAbilies = flaviaInfo.abilities;
var activeAbility = {
    info: flaviaAbilies.active,
    imagePath: ActiveAbilityIcon
}
var passiveAbility = {
    info: flaviaAbilies.passive,
    imagePath: PassiveAbilityIcon
}
var ultimateAbility = {
    info: flaviaAbilies.ultimate,
    imagePath: UltimateAbilityIcon
}

//Upgrades
var flaviaUpgrades = flaviaInfo.upgrades;
var firingUpgrades = {
    icon: FiringUpgradeIcon,
    name: flaviaUpgrades.blue1.name,
    color: 0,
    choice1: {
        name: flaviaUpgrades.blue1.choice1.name,
        cost: flaviaUpgrades.blue1.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.blue1.choice2.name,
        cost: flaviaUpgrades.blue1.choice2.cost
    }
}
var criticalUpgrades = {
    icon: CriticalHitUpgradeIcon,
    name: flaviaUpgrades.blue2.name,
    color: 0,
    choice1: {
        name: flaviaUpgrades.blue2.choice1.name,
        cost: flaviaUpgrades.blue2.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.blue2.choice2.name,
        cost: flaviaUpgrades.blue2.choice2.cost
    }
}
var capacityUpgrades = {
    icon: CapacityUpgradeIcon,
    name: flaviaUpgrades.blue3.name,
    color: 0,
    choice1: {
        name: flaviaUpgrades.blue3.choice1.name,
        cost: flaviaUpgrades.blue3.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.blue3.choice2.name,
        cost: flaviaUpgrades.blue3.choice2.cost
    }
}
var accuracyUpgrades = {
    icon: AccuracyUpgradeIcon,
    name: flaviaUpgrades.blue4.name,
    color: 0,
    choice1: {
        name: flaviaUpgrades.blue4.choice1.name,
        cost: flaviaUpgrades.blue4.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.blue4.choice2.name,
        cost: flaviaUpgrades.blue4.choice2.cost
    }
}
var phantomMirageUpgrades = {
    icon: ActiveAbilityIcon,
    name: flaviaUpgrades.yellow1.name,
    color: 1,
    choice1: {
        name: flaviaUpgrades.yellow1.choice1.name,
        cost: flaviaUpgrades.yellow1.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.yellow1.choice2.name,
        cost: flaviaUpgrades.yellow1.choice2.cost
    }
}
var retributionUpgrades = {
    icon: PassiveAbilityIcon,
    name: flaviaUpgrades.yellow2.name,
    color: 1,
    choice1: {
        name: flaviaUpgrades.yellow2.choice1.name,
        cost: flaviaUpgrades.yellow2.choice1.cost
    }
}
var armorUpgrades = {
    icon: ArmorUpgradeIcon,
    name: flaviaUpgrades.green1.name,
    color: 2,
    choice1: {
        name: flaviaUpgrades.green1.choice1.name,
        cost: flaviaUpgrades.green1.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.green1.choice2.name,
        cost: flaviaUpgrades.green1.choice2.cost
    }
}
var survivabilityUpgrades = {
    icon: ArmorUpgradeIcon,
    name: flaviaUpgrades.green2.name,
    color: 2,
    choice1: {
        name: flaviaUpgrades.green2.choice1.name,
        cost: flaviaUpgrades.green2.choice1.cost
    },
    choice2: {
        name: flaviaUpgrades.green2.choice2.name,
        cost: flaviaUpgrades.green2.choice2.cost
    }
}

const FlaviaPage = () => (
    <>
    <h1 className="character-name">Flavia</h1>
    <div className="character-abilities">
        <CharacterAbility ability={activeAbility}/>
        <CharacterAbility ability={passiveAbility}/>
        <CharacterAbility ability={ultimateAbility}/>
    </div>
    <div className="character-and-weapon-stats">
        <CharacterStats character={flaviaInfo.characterInfo.stats}/>
        <WeaponStats weapon={flaviaInfo.weaponInfo}/>
    </div>
    <div className="character-upgrades">
        <UpgradeMenu upgrades={firingUpgrades}/>
        <UpgradeMenu upgrades={criticalUpgrades}/>
        <UpgradeMenu upgrades={capacityUpgrades}/>
        <UpgradeMenu upgrades={accuracyUpgrades}/>
    </div>
    <div className="character-upgrades">
        <UpgradeMenu upgrades={phantomMirageUpgrades}/>
        <UpgradeMenu upgrades={retributionUpgrades}/>
        <UpgradeMenu upgrades={armorUpgrades}/>
        <UpgradeMenu upgrades={survivabilityUpgrades}/>
    </div>
</>
)

export default FlaviaPage;