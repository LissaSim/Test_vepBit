import 'bootstrap/dist/css/bootstrap.css'
import { Montaga } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Technology from "./components/Technology";
import BlogList from "./components/BlogList";
import ReviewsList from "./components/ReviewsList";
import Footer from "./components/Footer";

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
