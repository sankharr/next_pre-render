import styles from "../../styles/Home.module.css";

const Post = ({ user }) => {
  console.log("user", user);

  return (
    <>
      <main className={styles.main}>
        <h1>Static Generation (Paths)</h1>
        <div className={styles.description}>Selected User : {user.name}</div>
      </main>
    </>
  );
};

// this function gets called during the build time
export async function getStaticPaths() {
  // calling an external API to fetch data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((item) => ({
    params: { id: item.id.toString() },
  }));

  // thes paths will get pre-rendered only at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log("params", params);
  // fetch call has been made only to get the specific data
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return { props: { user } };
}

export default Post;
