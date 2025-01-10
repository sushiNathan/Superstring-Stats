import { WeaponStatsObj } from "../types";



const WeaponStats = ({weapon}: {weapon: WeaponStatsObj}) => (
    <>
    <div className="weapon-stats">
        <div className="weapon-stats-section">
            <div className="stat-line">
                <p className="stat-label">Rate of Fire</p>
                <p className="stat-value">{weapon.rateOfFire}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">ADS Speed</p>
                <p className="stat-value">{weapon.adsSpeed}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Accuracy</p>
                <p className="stat-value">{weapon.accuracy}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Handling</p>
                <p className="stat-value">{weapon.handling}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Magazine Capacity</p>
                <p className="stat-value">{weapon.magazineCapacity}</p>
            </div>
        </div>
        <div className="weapon-stats-section">
            <div className="stat-line">
                <p className="stat-label">Reload Speed</p>
                <p className="stat-value">{weapon.reloadSpeed}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Rechambering Speed</p>
                <p className="stat-value">{weapon.rechamberingSpeed}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Stringified Damage</p>
                <p className="stat-value">{weapon.stringifiedDamage}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Max Scope Zoom</p>
                <p className="stat-value">{weapon.maxScopeZoom}</p>
            </div>
        </div>
    </div>
</>
)

export default WeaponStats;