import React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './single-project.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';

function SingleProjectUI({ id, name, desc, tags, code, demo, image, theme, classes }) {
    const { isDark } = useContext(ThemeContext);
console.log(isDark);

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.quaternary }}
            >
                <div className='projectContent'>
                    <div>
                        <h2
                            id={name.replace(' ', '-').toLowerCase()}
                            style={{ color: theme.tertiary }}
                        >
                            {name}
                        </h2>
                        <img src={image ? image : placeholder} alt={name} />
                        <p
                            className='project--desc'
                            style={{
                                background: theme.secondary,
                                color: theme.tertiary,
                            }}
                        >
                            {desc}
                        </p>
                    </div>
                    <div className='project--showcaseBtn'>
                        <div className='live-btn' style={{color: isDark ? "white" : "black"}} >
                            <p>Live</p>
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-demo`}
                            >
                                <FaPlay
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-demo`}
                                    className={classes.icon}
                                    aria-label='Demo'
                                />
                            </a>
                        </div>
                        <div className='code-btn' style={{color: isDark ? "white" : "black"}} >
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                            >
                                <FaCode
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                                    className={classes.icon}
                                    aria-label='Code'
                                />
                            </a>
                            <p>Code</p>
                        </div>
                    </div>
                </div>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProjectUI;
