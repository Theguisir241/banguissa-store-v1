import styles from '../styles/TitleSeparator.module.css'
const TitleSeparator = ({ 
  title, 
  color1 = '#ffffffff', 
  color2 = '#f4ca54' 
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} style={{ color: color1 }}>{title}</h2> 
      
      <div className={styles.separator}>
        <div 
          className={styles.segment1} 
          style={{ backgroundColor: color1 }}
        ></div>
        
        <div 
          className={styles.segment2} 
          style={{ backgroundColor: color2 }}
        ></div>
      </div>
    </div>
  );
};

export default TitleSeparator;