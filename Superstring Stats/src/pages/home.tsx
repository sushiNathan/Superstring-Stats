import { Link, useNavigate } from "react-router-dom";
import PusIcon from '../assets/pus_logo.png';
import FlaviaIcon from '../assets/character_portraits/flavia.png'
import PlaceholderIcon from '../assets/character_portraits/placeholder.png'
import DuelistIcon from '../assets/duelist_icon.svg'

const HomePage = () => (
    <>
    <div>
        <h1>Superstring Stats</h1>
        <div className='character-list'>
            <div className='character-group group-urbino'>
                <h2>Urbino</h2>
                <div className="character-row">
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                </div>
            </div>
            <div className='character-group group-pus'>
                <span className="character-group-heading">
                    <span>
                        <img src={PusIcon}/>
                    </span>
                    <h2>P.U.S</h2>
                </span>
                <div className="character-row">
                    <Link to="/flavia" className="character-icon">
                        <img src={FlaviaIcon}/>
                        <span className="character-icon-label">
                            <img src={DuelistIcon}/>
                            <p>Flavia</p>
                        </span>
                    </Link>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                </div>
            </div>
            <div className='character-group group-scissors'>
                <h2>The Scissors</h2>
                <div className="character-row">
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                    <div className="character-icon">
                        <img src={PlaceholderIcon}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
);

export default HomePage;