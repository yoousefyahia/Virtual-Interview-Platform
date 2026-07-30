// import { AuthCard, AuthHeader, HiringPanel } from "@/components/auth/AuthShell";
// import { SignupProgress } from "@/components/auth/SignupProgress";
// import { SignupAccountForm } from "@/components/forms/SignupAccountForm";
// import styles from "@/components/auth/auth.module.css";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <main  className= "flex flex-col min-h-screen " >
    <h1 className="text-3xl font-bold text-center mt-10">test</h1>
   {/* <Navbar />
      <Footer /> */}
      {/* <div className={styles.shell}>
        <AuthHeader title="Create Your Account" signup />
        <SignupProgress step={1} label="Company details" />
        <AuthCard className={styles.signupCard}>
          <SignupAccountForm />
          <HiringPanel />
        </AuthCard>
      </div> */}
    </main>
  );}
