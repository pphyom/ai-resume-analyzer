import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analyzme | AI Resume Analyzer" },
    { name: "description", content: "Analyze where you belong!" },
  ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />


      <section className="main-section">
          <div className="page-heading py-10">
              <h1>Analyze Your Resume with AI</h1>
              <h2>Review your resume with AI-powered feedback.</h2>
          </div>
          {resumes.length > 0 && (
              <div className="resumes-section">
                  {resumes.map((resume) => (
                      <ResumeCard key={resume.id} resume={resume} />
                  ))}
              </div>
          )}
      </section>

  </main>
}
