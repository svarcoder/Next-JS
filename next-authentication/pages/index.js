import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <div className={styles.container}>
      <>Hiiii</>
    </div>
  );
}
