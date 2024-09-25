import axios from 'axios'

const API = 'http://localhost:7777'

const getProjects = () => axios.get(`${API}/projects/all`)
const getProjectbyID = (id) => axios.get(`${API}/projects/${id}`)
const addProject = (projectdata) => axios.post(`${API}/projects/add`,projectData)
const editProject = (id,projectData) => axios.put(`${API}/projects/edit/${id}.projectData`)
const deleteProject = (id) => axios.delete(`${API}/projects/delete/${id}`)



export{getProjects,getProjectbyID,addProject,editProject,deleteProject};
