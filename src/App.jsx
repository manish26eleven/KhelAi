
import { useEffect, useState } from 'react';
import './App.css'
import cricket from './assets/cricket.jpg'
import { FaEnvelope, FaMapMarkerAlt  , FaMoon , FaSun} from "react-icons/fa";
function App() {
   const [isDark , setIsDark] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Listen for resize jh 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    
   
  {/* <div style={{ backgroundColor: isDark ? 'black' : 'white', margin:0, padding:0 }}> */}
 <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          padding: "10px 40px",
          backgroundColor: isDark ? "black" : "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <span
          style={{
            fontSize: isMobile ? "28px" : "36px",
            fontWeight: 700,
            letterSpacing: "1px",
            color: isDark ? "white" : "#333",
            textTransform: "uppercase",
          }}
        >
          KHEL.AI
        </span>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "100px 20px 40px" : "120px 40px 60px",
          gap: "30px",
        }}
      >
        {/* Text Content */}
        <div
          style={{
            width: isMobile ? "100%" : "55%",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "32px" : "56px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Cricket Analysis Automation at Your Fingertips
          </h1>
          <p
            style={{
              fontSize: isMobile ? "18px" : "22px",
              fontStyle: "oblique",
            }}
          >
            Founded in 2024 as a startup for providing sports technology
            solutions using artificial intelligence.
          </p>
          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              marginTop: "10px",
              lineHeight: "1.6",
            }}
          >
            Our solutions help you streamline cricket analysis with advanced
            features such as precise ball tracking to monitor every delivery,
            automatic video clipping for effortless highlights, and a single
            Android app that brings all tools together in one place.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: 600,
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#0056b3")
              }
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              onClick={() => window.open("https://khel.ai")}
            >
              Learn More About Khel.ai
            </button>

            <button
              style={{
                backgroundColor: "white",
                color: "#007bff",
                border: "2px solid #007bff",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: 600,
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#007bff";
              }}
              onClick={() => window.open("https://khel.ai/contact-us/")}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            height: isMobile ? "300px" : "500px",
          }}
        >
          <img
            src={cricket}
            alt="Example"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: isMobile ? "40px 20px" : "70px 40px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "#333",
          textAlign: isMobile ? "center" : "left",
          gap: isMobile ? "20px" : "0",
        }}
      >
        {/* Column 1 */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              color: "#716dafff",
              marginBottom: "8px",
            }}
          >
            Contact Info
          </h3>
          <p>ELCASSICO SPORTSTECH PRIVATE LIMITED</p>
        </div>

        {/* Column 2 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <FaEnvelope color="#0096ff" />
            <a
              href="mailto:vaibhav@khel.ai"
              style={{
                color: "#0096ff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              vaibhav@khel.ai
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: "8px",
            }}
          >
            <FaMapMarkerAlt color="#0096ff" />
            <span style={{ fontSize: "15px" }}>
              POCKET 40 HOUSE NO. 153, THIRD FLOOR, CR PARK, NEW DELHI, 110019
            </span>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <p style={{ fontSize: "14px", color: isDark ? "white" : "#666" }}>
            © {new Date().getFullYear()} KHEL.AI. All rights reserved.
          </p>
        </div>
      </div>

      {/* 🌙 Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: isDark ? "#f5c518" : "#333",
          color: isDark ? "#000" : "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          zIndex: 9999,
        }}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </div>
  {/* </div> */}
  </>
  


   
    
  )
}
// const styles = {
//   container: {
//    display: 'flex', // arrange text + image side-by-side
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#1c1c1c',
//     color: 'white',
//     // minHeight: '100vh', // full screen height
//     // width: '100vw', // full screen width
//     margin: 0,
//     padding: '60px 100px', // padding for spacing inside
//     boxSizing: 'border-box', 
   
//   },
//   textSection: {
//     flex: 1,
//     maxWidth: '55%',
//   },
//   title: {
//     fontSize: '24px',
//     fontWeight: '600',
//     marginBottom: '10px',
//     color: '#ccc',
//   },
//   heading: {
//     fontSize: '60px',
//     fontWeight: '900',
//     lineHeight: '1.2',
//     marginBottom: '20px',
//   },
//   paragraph: {
//     fontSize: '18px',
//     lineHeight: '1.6',
//     marginBottom: '25px',
//     color: '#ddd',
//   },
//   link: {
//     color: '#60a5fa',
//     textDecoration: 'none',
//   },
//   logo: {
//     width: '300px',
//     borderRadius: '10px',
//     marginBottom: '25px',
//     backgroundColor: '#fff',
//     padding: '10px',
//   },
//   imageSection: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   aiImage: {
//     width: '380px',
//     height: 'auto',
//     filter: 'drop-shadow(0px 0px 10px #7b61ff)',
//   },
// }

export default App
