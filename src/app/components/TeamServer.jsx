// TeamServer.jsx
import TeamMember from "./TeamMember"; // Client Component pour animation
import styles from "../styles/Team.module.css";

const teamMembers = [
  { name: "Stéphane Mbongou", role: "CEO & Founder", img: "/team/stephane.jpg" },
  { name: "Issambo Princesse ", role: "Co-Founder", img: "/team/sephora.png" },
  { name: "Penny Chen", role: "Logistic & Quality Manager", img: "/team/penny.png" },
  { name: "Lucy Li", role: "Accountant", img: "/team/lucy.png" },
];

export default function TeamServer() {
  return (
    <section className={styles.teamSection} id="team">
      <h2 className={styles.title}>Our Team</h2>

      <div className={styles.teamGrid}>
        {teamMembers.map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
