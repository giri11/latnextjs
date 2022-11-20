import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import styles from "../../styles/Users.module.css";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  console.log(dataUsers);

  const router = useRouter();

  return (
    <Layout pageTitle='Home Page user'>
        <h1 className="title">index user</h1>
        {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  )
}

// data ini bersifat statis, jadi tidak cocok jika datanya dinamis
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    }
  }
}