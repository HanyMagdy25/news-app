import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css";
import Image from "next/image";
// Api_key = "82e119b1e01441c1b08417d9c5bb3df7"

const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta
          name="description"
          content={`This month's employee of the month is Hany Magdy`}
        />

        <meta property="og:image" content='/img.jpg' />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is Hany Magdy`}
        />

        <meta property="twitter:image" content='/img.jpg' />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is Hany Magdy`}
        />
      </Head>

      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <h1>Employee Of The Month</h1>

          <div className={styles.employeeOfTheMonth}>
            <h3>Hany Magdy</h3>
            <h6>Software Engineer</h6>
            {/* <Image src="https://res.cloudinary.com/dia1kfg4m/image/upload/v1660838516/IMG20210705122930_2_aofdw2.jpg" alt="employee" /> */}
            <div>
              <Image
                src="/img.jpg"
                className="object"
                alt="employee"
                layout="intrinsic"
                width={500}
                height={500}
              />
            </div>
            <p>Dev guy and tutorialist</p>
          </div>
        </div>
      </div>
    </>
  );
};
// https://res.cloudinary.com/dia1kfg4m/image/upload/v1660838516/IMG20210705122930_2_aofdw2.jpg
// export const getServerSideProps = async (pageContext) => {
//   const apiResponse = await fetch(
//     "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
//   );
//   const employee = await apiResponse.json();

//   return {
//     props: {
//       employee,
//     },
//   };
// };
export default EOM;
