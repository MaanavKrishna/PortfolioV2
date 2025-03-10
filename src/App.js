import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Diagnostic Center Management System",
    description: "A complete management system for diagnostic centers.",
    link: "https://github.com/MaanavKrishna/Diagnostic-Center-Management-System",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio showcasing skills and projects.",
    link: "https://maanavkrishna.github.io/Portfolio/",
  },
  {
    name: "E-Commerce App",
    description: "A full-stack e-commerce application with authentication and payment integration.",
    link: "https://github.com/MaanavKrishna/E-Commerce-App",
  }
];

const certifications = [
  {
    name: "Programming for Everybody (Python Basics)",
    issuer: "University of Michigan",
    link: "https://coursera.org/verify/ABC123",
  },
  {
    name: "Python Data Structures",
    issuer: "University of Michigan",
    link: "https://coursera.org/verify/DEF456",
  },
  {
    name: "Fundamentals of UI/UX Design",
    issuer: "Microsoft",
    link: "https://microsoft.com/verify/UIUX789",
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    link: "https://ibm.com/verify/AI101",
  },
];

const BackgroundEffect = () => (
  <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} />
    <Stars />
  </Canvas>
);

const Portfolio = () => (
  <Box sx={{ minHeight: "100vh", overflowY: "auto", backgroundColor: "#121212", color: "white", py: 6, position: "relative" }}>
    <BackgroundEffect />
    <Container>
      <Box textAlign="center" mb={6}>
        <Avatar src="https://maanavkrishna.github.io/PortfolioV2/profile.png" sx={{ width: 120, height: 120, margin: "0 auto" }} />
        <Typography variant="h2" component="h1" gutterBottom>
          Maanav Krishna
        </Typography>
        <Typography variant="h5" color="gray">
          Software Developer | Python | SQL | JavaScript | React | HTML | Embedded C
        </Typography>
        <Box mt={2} display="flex" justifyContent="center" gap={2}>
          <a href="https://github.com/MaanavKrishna" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/maanavkrishna" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl hover:text-gray-400" />
          </a>
          <a href="mailto:maanav@example.com">
            <FaEnvelope className="text-4xl hover:text-gray-400" />
          </a>
        </Box>
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ backgroundColor: "#1e1e1e", color: "white", borderRadius: 3, p: 2, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" href={project.link} target="_blank" sx={{ color: "white", borderColor: "gray" }}>
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" gutterBottom mt={6}>
        Certifications
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ backgroundColor: "#1e1e1e", color: "white", borderRadius: 3, p: 2, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {cert.name}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {cert.issuer}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" href={cert.link} target="_blank" sx={{ color: "white", borderColor: "gray" }}>
                    View Certificate
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Portfolio;
