import { useRouter } from "next/router"
import Layout from "../../component/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}

export default function DetailUser(props: UserDetailProps) {

    const { user } = props;
    console.log('isinya: ');
    console.log(user);
  return (
    <Layout pageTitle="User Detail">
      
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
        {/* <p>
            User Detail Page
            {' '}
            {id}
            {' '}
        </p> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}