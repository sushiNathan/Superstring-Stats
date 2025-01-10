import { CharacterAbilitiesObj } from "../types";
import CharacterAbility from "./characterAbility";

const CharacterAbilities = ({abilities}: {abilities: CharacterAbilitiesObj}) => (
    <>
    <div className="character-abilities">
        <CharacterAbility ability={abilities.active}/>
        <CharacterAbility ability={abilities.passive}/>
        <CharacterAbility ability={abilities.ultimate}/>
    </div>
</>
)

export default CharacterAbilities;