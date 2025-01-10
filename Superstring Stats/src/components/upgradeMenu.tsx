enum upgradeColor {
    blue,
    yellow,
    green
}
type UpgradesProp = {
    icon: string,
    name: string,
    color: upgradeColor
    choice1: {
        name: string,
        cost: number
    },
    choice2?: {
        name: string,
        cost: number
    }
};
var upgradeColors = ['blue', 'yellow', 'green'];

const UpgradeMenu = ({upgrades}: {upgrades: UpgradesProp}) => (
    <>
    <div className={'character-upgrade-menu ' + (upgrades.choice2 ? '' : 'shrink')}>
        <div className="character-upgrade-title">
            <span className={'upgrade-icon-' + upgradeColors[upgrades.color]}>
                <span>
                    <img src={upgrades.icon}/>
                </span>
            </span>
            <p>{upgrades.name}</p>
        </div>
        <div className="character-upgrade" role="button">
            <p>
                <span>{upgrades.choice1.name}</span>
                <span>{upgrades.choice1.cost}</span>
            </p>
        </div>
        {upgrades.choice2 ?
            <div className="character-upgrade">
                <p>
                    <span>{upgrades.choice2.name}</span>
                    <span>{upgrades.choice2.cost}</span>
                </p>
            </div>
            : null
        }
    </div>
</>
)

export default UpgradeMenu;