"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "../Auth.css";

export default function StateLogin() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    stateCode: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", "state");
    router.push("/dashboard/authority");
  };

  // ...rest of your JSX
}