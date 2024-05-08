import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  // <Layout title="About | Next.js + TypeScript Example">
  <div>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </div>
  // </Layout>
);

export default AboutPage;
