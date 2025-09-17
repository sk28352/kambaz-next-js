import Link from "next/link";
import Image from "next/image";
export default function Dashboard() 
{ return ( 

<div id="wd-dashboard"> 
<h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 
<h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr /> 

<div id="wd-dashboard-courses"> <div className="wd-dashboard-course"> 
    <Link href="/Courses/1234" className="wd-dashboard-course-link"> 
    <img src="/images/reactjs.jpg" width={200} height={150} /> 
<div> <h5> CS1234 React JS </h5> 
<p className="wd-dashboard-course-title"> 
Full Stack software developer </p> 
<button> Go </button> </div> </Link> </div> 

<div className="wd-dashboard-course"> 
    <Link href="/Courses/5800" className="wd-dashboard-course-link"> 
    <img src="/images/algos.jpg" width={200} height={150} /> 
<div> <h5> CS5800 Algorithms </h5> 
<p className="wd-dashboard-course-title"> 
Core computer science </p> 
<button> Go </button> </div> </Link> </div> 

<div className="wd-dashboard-course"> 
    <Link href="/Courses/5200" className="wd-dashboard-course-link"> 
    <img src="/images/dbms.jpg" width={200} height={150} /> 
<div> <h5> CS5200 Database Management </h5> 
<p className="wd-dashboard-course-title"> 
Database Engineer </p> 
<button> Go </button> </div> </Link> </div> 

<div className="wd-dashboard-course"> 
    <Link href="/Courses/6120" className="wd-dashboard-course-link"> 
    <img src="/images/nlp.jpg" width={200} height={150} /> 
<div> <h5> CS6120 Natural Language Processing </h5> 
<p className="wd-dashboard-course-title"> 
NLP Engineer </p> 
<button> Go </button> </div> </Link> </div> 

<div className="wd-dashboard-course"> 
    <Link href="/Courses/2345" className="wd-dashboard-course-link"> 
    <img src="/images/ai.jpg" width={200} height={150} /> 
<div> <h5> CS Foundations of AI </h5> 
<p className="wd-dashboard-course-title"> 
AI Engineer </p> 
<button> Go </button> </div> </Link> </div> 

<div className="wd-dashboard-course"> 
    <Link href="/Courses/4567" className="wd-dashboard-course-link"> 
    <img src="/images/rei.jpg" width={200} height={150} /> 
<div> <h5> CS 4567 Reinforcement Learning </h5> 
<p className="wd-dashboard-course-title"> 
Agent Learner Developer </p> 
<button> Go </button> </div> </Link> </div> 

<div className="wd-dashboard-course"> 
    <Link href="/Courses/5678" className="wd-dashboard-course-link"> 
    <img src="/images/cloud.jpg" width={200} height={150} /> 
<div> <h5> CS 5678 Cloud computing</h5> 
<p className="wd-dashboard-course-title"> 
Cloud Engineer </p> 
<button> Go </button> </div> </Link> </div> 










 </div> </div> );}