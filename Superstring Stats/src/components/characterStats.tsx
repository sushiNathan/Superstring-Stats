import { CharacterStatsObj } from "../types";



const CharacterStats = ({character}: {character: CharacterStatsObj}) => (
    <>
    <div className="character-stats">
        <div className="character-stats-section">
            <div className="stat-line">
                <p className="stat-label">Armor</p>
                <p className="stat-value">{character.armor}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Armor Regen</p>
                <p className="stat-value">{character.armorRegen}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Movement Speed</p>
                <p className="stat-value">{character.movementSpeed}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Stringified Movement Speed</p>
                <p className="stat-value">{character.stringifiedMovementSpeed}</p>
            </div>
        </div>
        <div className="character-stats-section">
            <div className="stat-line">
                <p className="stat-label">Stringified DMG Reduction Ratio</p>
                <p className="stat-value">{character.stringifiedDmgRedRatio}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Down Time</p>
                <p className="stat-value">{character.downTime}</p>
            </div>
            <div className="stat-line">
                <p className="stat-label">Revival Time While Down</p>
                <p className="stat-value">{character.revivalTimeWhileDown}</p>
            </div>
        </div>
    </div>
</>
)

export default CharacterStats;