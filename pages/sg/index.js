import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Component({ users }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Static Generation</h1>
        <div className={styles.description}>
          <ul>
            {users.map((user) => (
              <li key={user.email}><Link href={`/sg/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

// this function gets called during the build time
export async function getStaticProps() {
  // calling an external API to fetch data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // this returning data can be accessed from the component using the prop name
  return { props: { users } };
}
