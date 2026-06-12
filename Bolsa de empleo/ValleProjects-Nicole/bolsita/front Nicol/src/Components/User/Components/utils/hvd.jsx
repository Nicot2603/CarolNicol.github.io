import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

export const showPreview = (data) => {
  const previewModal = document.getElementById('previewModal');
  if (previewModal) {
    previewModal.style.display = 'block';
    const previewContent = document.getElementById('previewContent');
    if (previewContent) {
      previewContent.innerHTML = `
        <div class="cv-preview">
          <h2>Vista Previa del CV</h2>
          <div class="section">
            <h3>Nombre Completo</h3>
            <p>${data.fullName || 'N/A'}</p>
          </div>
          <div class="section">
            <h3>Correo Electrónico</h3>
            <p>${data.email || 'N/A'}</p>
          </div>
          <div class="section">
            <h3>Teléfono</h3>
            <p>${data.phone || 'N/A'}</p>
          </div>
          <div class="section">
            <h3>Portafolio</h3>
            <p>${data.portfolio || 'N/A'}</p>
          </div>
          <div class="section">
            <h3>Perfil Profesional</h3>
            <p>${data.professionalProfile || 'N/A'}</p>
          </div>
          <div class="section">
            <h3>Habilidades Técnicas</h3>
            <ul>
              ${data.technicalSkills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
          <div class="section">
            <h3>Habilidades Blandas</h3>
            <ul>
              ${data.softSkills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
          <div class="section">
            <h3>Experiencia Profesional</h3>
            <ul>
              ${data.experiences.map(exp => `
                <li>
                  <strong>${exp.role}</strong> en ${exp.company} (${exp.startDate} - ${exp.endDate})
                  <p>${exp.description}</p>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="section">
            <h3>Formación Académica</h3>
            <ul>
              ${data.educations.map(edu => `
                <li>
                  <strong>${edu.title}</strong> en ${edu.institution} (${edu.startDate} - ${edu.endDate})
                  <p>${edu.description}</p>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="section">
            <h3>Proyectos Destacados</h3>
            <ul>
              ${data.projects.map(proj => `
                <li>
                  <strong>${proj.name}</strong>
                  <p>${proj.description}</p>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="section">
            <h3>Referencias</h3>
            <ul>
              ${data.references.map(ref => `
                <li>
                  <strong>${ref.name}</strong> (${ref.relation})
                  <p>Teléfono: ${ref.phone}</p>
                  <p>Email: ${ref.email}</p>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    }
  }
};

export const closePreview = () => {
  const previewModal = document.getElementById('previewModal');
  if (previewModal) {
    previewModal.style.display = 'none';
  }
};

export const downloadPDF = async (cvData) => {
  try {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No se encontró un token de autenticación.');
    }

    console.log('Sending cvData:', cvData);

    const response = await axios.post('http://localhost:5000/api/iaImprove/optimizar-cv', cvData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // Agregar el token al header
      },
      responseType: 'blob',  // Importante para manejar datos binarios como PDFs
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'optimized_cv.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error al optimizar CV:', error.message);
    alert('Error al optimizar el CV: ' + error.message);
  }
};


const addSkill = (containerId) => {
  const container = document.getElementById(containerId);
  const skillInput = document.createElement('div');
  skillInput.className = 'skill-input';
  skillInput.innerHTML = `
    <input type="text" placeholder="Nueva habilidad">
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(skillInput);
};

const addExperience = () => {
  const container = document.getElementById('experience');
  const experienceItem = document.createElement('div');
  experienceItem.className = 'experience-item';
  experienceItem.innerHTML = `
    <input type="text" placeholder="Cargo">
    <input type="text" placeholder="Empresa">
    <div class="date-range">
      <input type="date" placeholder="Fecha inicio" class="date-input">
      <span>-</span>
      <input type="date" placeholder="Fecha fin" class="date-input">
    </div>
    <textarea placeholder="• Describe tus logros cuantificables&#10;• Otro logro importante&#10;• Un logro más"></textarea>
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(experienceItem);
};

const addEducation = () => {
  const container = document.getElementById('education');
  const educationItem = document.createElement('div');
  educationItem.className = 'education-item';
  educationItem.innerHTML = `
    <input type="text" placeholder="Título">
    <input type="text" placeholder="Institución">
    <div class="date-range">
      <input type="date" placeholder="Fecha inicio" class="date-input">
      <span>-</span>
      <input type="date" placeholder="Fecha fin" class="date-input">
    </div>
    <textarea placeholder="• Logro académico relevante&#10;• Proyecto destacado"></textarea>
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(educationItem);
};

const addProject = () => {
  const container = document.getElementById('projects');
  const projectItem = document.createElement('div');
  projectItem.className = 'experience-item';
  projectItem.innerHTML = `
    <input type="text" placeholder="Nombre del Proyecto">
    <textarea placeholder="• Descripción breve del proyecto&#10;• Tecnologías utilizadas&#10;• Resultados medibles"></textarea>
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(projectItem);
};

const addReference = () => {
  const container = document.getElementById('referencesList');
  const defaultText = document.getElementById('defaultText');
  defaultText.style.display = 'none';
  const referenceItem = document.createElement('div');
  referenceItem.className = 'reference-item';
  referenceItem.innerHTML = `
    <input type="text" placeholder="Nombre Completo">
    <input type="text" placeholder="Cargo, Empresa">
    <input type="tel" placeholder="Teléfono (ej: +57 300 123 4567)">
    <input type="email" placeholder="Correo electrónico">
    <button class="delete-btn" onclick="removeReference(this)">×</button>
  `;
  container.appendChild(referenceItem);
};

const removeReference = (button) => {
  button.parentElement.remove();
  const container = document.getElementById('referencesList');
  const defaultText = document.getElementById('defaultText');
  if (container.children.length === 0) {
    defaultText.style.display = 'block';
  }
};

const Hdv = () => {
  const [skills, setSkills] = useState({ technicalSkills: [], softSkills: [] });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [references, setReferences] = useState([]);
  const [cvData, setCvData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    professionalProfile: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cvData.fullName || !cvData.email || !cvData.phone || !cvData.portfolio || !cvData.professionalProfile) {
      alert('Por favor, rellena todos los campos obligatorios.');
      return;
    }

    const completeCvData = {
      ...cvData,
      technicalSkills: skills.technicalSkills,
      softSkills: skills.softSkills,
      experiences: experience,
      educations: education,
      projects: projects,
      references: references,
    };

    console.log('completeCvData:', completeCvData); // Verifica los datos antes de enviarlos
    await downloadPDF(completeCvData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Campos para ingresar datos del CV */}
        <input
          type="text"
          value={cvData.fullName}
          onChange={(e) => setCvData({ ...cvData, fullName: e.target.value })}
          placeholder="Nombre Completo"
          required
        />
        <input
          type="email"
          value={cvData.email}
          onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
          placeholder="Correo Electrónico"
          required
        />
        <input
          type="tel"
          value={cvData.phone}
          onChange={(e) => setCvData({ ...cvData, phone: e.target.value })}
          placeholder="Teléfono"
          required
        />
        <input
          type="url"
          value={cvData.portfolio}
          onChange={(e) => setCvData({ ...cvData, portfolio: e.target.value })}
          placeholder="Portafolio"
          required
        />
        <textarea
          value={cvData.professionalProfile}
          onChange={(e) => setCvData({ ...cvData, professionalProfile: e.target.value })}
          placeholder="Perfil Profesional"
          required
        ></textarea>

        {/* Mostrar la lista de habilidades técnicas y blandas */}
        <button type="button" onClick={() => addSkill('technicalSkillsContainer')}>
          Agregar Habilidad Técnica
        </button>
        <button type="button" onClick={() => addSkill('softSkillsContainer')}>
          Agregar Habilidad Blanda
        </button>

        {/* Mostrar la lista de experiencias */}
        <button type="button" onClick={addExperience}>Agregar Experiencia</button>

        {/* Mostrar la lista de educación */}
        <button type="button" onClick={addEducation}>Agregar Educación</button>

        {/* Mostrar la lista de proyectos */}
        <button type="button" onClick={addProject}>Agregar Proyecto</button>

        {/* Mostrar la lista de referencias */}
        <button type="button" onClick={addReference}>Agregar Referencia</button>

        <button type="submit">Generar PDF</button>
      </form>
    </div>
  );
};

export default Hdv;
