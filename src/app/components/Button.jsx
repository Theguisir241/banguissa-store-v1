// components/Button.js

import styles from '../styles/button.module.css';

const Button = ({ children, href, className }) => {
    
    const containerClasses = `${styles['hero-links']} ${className ? className : ''}`;

    return (
        <div className={containerClasses}>
            <a href={href} className={styles.link}>
                {children} 
            </a>
        </div>
    );
};

export default Button;