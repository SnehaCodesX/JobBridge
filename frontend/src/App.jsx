import { useState } from "react";
import "./App.css";


import AppRoutes from "./routes/AppRoutes";

import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Button/Button";

import { AppProvider } from "./context/AppContext";

import Companies from "./Admin/Companies/Companies";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppProvider>
      
        <AppRoutes />

        <Footer />

        <Loader />
        <Companies></Companies>

        {/* =========================================
            BUTTON COMPONENT TEST AREA
        ========================================= */}
        <section
          style={{
            padding: "60px 30px",
            margin: "40px auto",
            maxWidth: "1100px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "10px",
              color: "#4c1d95",
            }}
          >
            JobBridge Button Components
          </h2>

          <p
            style={{
              marginBottom: "30px",
              color: "#64748b",
            }}
          >
            Reusable Button Component Preview
          </p>

          {/* Variants */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <Button variant="primary">
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="danger">
              Delete
            </Button>
          </div>

          {/* Sizes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="primary"
              size="small"
            >
              Small
            </Button>

            <Button
              variant="primary"
              size="medium"
            >
              Medium
            </Button>

            <Button
              variant="primary"
              size="large"
            >
              Large
            </Button>
          </div>
        </section>

        {/* =========================================
            MODAL TEST BUTTON
        ========================================= */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: 5000,
            padding: "12px 22px",
            border: "none",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, #7c3aed, #4f46e5, #c026d3)",
            color: "#fff",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow:
              "0 10px 25px rgba(124, 58, 237, 0.3)",
          }}
        >
          Open Modal
        </button>

        {/* =========================================
            MODAL
        ========================================= */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Welcome to JobBridge"
        >
          <div>
            <p>
              Welcome to JobBridge! Find the right
              opportunities and build your career with us.
            </p>

            <Button
              variant="primary"
              onClick={() => setIsModalOpen(false)}
            >
              Continue
            </Button>
          </div>
        </Modal>
      
    </AppProvider>
  );
}

export default App;