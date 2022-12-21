import styles from "../../styles/Home.module.css";

export default function Component({ users }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Server-side rendering</h1>
        <div className={styles.description}>
          <ul>
            {users.map((user) => (
              <li key={user.email}>{user.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

// this function gets called on each request
export async function getServerSideProps() {
  // calling an external API to fetch data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // this returning data can be accessed from the component using the prop name
  return { props: { users } };
}
