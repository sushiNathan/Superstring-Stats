type AbilityProps = {
    name: string,
    imagePath: string
};

const AbilityName = ({name, imagePath}: AbilityProps) => (
    <>
    <div className="ability-name">
        <p>{name}</p>
        <img src={imagePath} alt="Active Skill"/>
    </div>
</>
)

export default AbilityName;