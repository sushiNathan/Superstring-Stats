import { CharacterAbilityObj } from "../types";

type CharacterAbilityProp = {
    info: CharacterAbilityObj,
    imagePath: string
};


const CharacterAbility = ({ability}: {ability: CharacterAbilityProp}) => (
    <>
    <div className="character-ability">
        <div className="ability-icon">
                <img src={ability.imagePath} alt="Active Skill"/>
                <p>Q/Active</p>
        </div>
        <div>
            <p className="ability-name">{ability.info.name}</p>
            <div className="ability-text">
                <p className="ability-description">{ability.info.description}</p>
            </div>
            <div className="ability-additional-details">
                <p>Additional Info</p>
                <ul>
                    {ability.info.additionalInfo.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</>
)

export default CharacterAbility;