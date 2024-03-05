"use client";

import React from "react";
import CTAProject from "../components/project/cta-project";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TimeLine } from "../components/project/timeline";
import Project1 from "../components/project/detailProject";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(null);
  ``;
  const handleOpen = (value: any) => setSize(value);

  return (
    <div>
      <CTAProject />
      <Project1 />
    </div>
  );
};

export default Projects;
