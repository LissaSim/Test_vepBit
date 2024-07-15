import 'bootstrap/dist/css/bootstrap.css'
import { Montaga } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Services from "@/app/components/Services";
import Technology from "@/app/components/Technology";
import BlogList from "@/app/components/BlogList";
import ReviewsList from "@/app/components/ReviewsList";
import Footer from "@/app/components/Footer";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
   <div className="wrapper">
       <Header/>
       <Main/>
       <Services/>
       <Technology/>
       <BlogList/>
       <ReviewsList/>
       <Footer/>
   </div>
      </body>
    </html>
  );
}
