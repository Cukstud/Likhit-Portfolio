import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">N V S Likhit</h1>
        <p className="text-zinc-400">Aspiring Computer Science Engineer</p>
      </header>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="bg-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-center gap-2"><MapPin size={16} /> Chennai, India</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +91 81900 77761</li>
              <li className="flex items-center gap-2"><Mail size={16} /> likhitnvs@gmail.com</li>
              <li className="flex items-center gap-2"><Linkedin size={16} /> <a href="https://www.linkedin.com/in/likhit-nvs/" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/likhit-nvs</a></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Career Objective</h2>
            <p className="text-zinc-300">Aspiring Computer Science engineer with practical experience in Python, SQL, and machine learning. Keen to contribute to impactful tech projects and continuously enhance my skills as a software developer.</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 col-span-1 md:col-span-2">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <ul className="space-y-2 text-zinc-300">
              <li>
                <strong>Sathyabama Institute of Science and Technology, Chennai</strong><br />
                B.E. in Computer Science and Engineering (2021–2025)<br />
                GPA: 7.5 / 10
              </li>
              <li>
                <strong>St. Bede’s Academy, Chennai</strong><br />
                Class XII – 2020–2021 | 72.5%
              </li>
              <li>
                <strong>Sri Chaitanya Techno School, Chennai</strong><br />
                Class X – 2018–2019 | 81%
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 col-span-1 md:col-span-2">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="space-y-4 text-zinc-300">
              <li>
                <strong>Pharmacy Management System</strong> – Apr 2024<br />
                Developed a web-based pharmacy inventory and sales system using Django and PHP.
                Implemented user authentication, purchase tracking, and automated billing features.
              </li>
              <li>
                <strong>Hotel Booking Chatbot System</strong> – Mar 2023<br />
                Built an intelligent chatbot using Amazon Lex and AWS S3 to automate hotel booking.
                Integrated natural language queries with backend APIs for room selection and booking.
              </li>
              <li>
                <strong>Precision Agriculture Using Machine Learning</strong> – Dec 2024<br />
                Built a smart agriculture system using CNNs for disease detection and Random Forest for crop prediction.
                Applied regression models and real-world datasets to deliver fertilizer recommendations.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
            <ul className="list-disc ml-5 text-zinc-300">
              <li>Python, SQL</li>
              <li>HTML, CSS</li>
              <li>AWS (Lex, S3), Tableau</li>
              <li>Languages: English, Telugu, Hindi</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc ml-5 text-zinc-300">
              <li>Google IT Automation with Python — Coursera</li>
              <li>Microsoft Certified: Azure AI Fundamentals</li>
              <li>AWS Cloud Computing Course — Wissenaire IIT Bhubaneswar</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
