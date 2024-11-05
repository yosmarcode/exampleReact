
import './App.css';
import FormComponents from './components/FormComponents';
import { TitleComponents } from './components/TitleComponents';
import { useEffect, useState } from 'react';

export const navBarLinks = [
  {
    name: "HOME",
    url:  '/',
    _href: "#home",
    isActive: true,
    isCollapsed: false,
    subMenu: [],
  },
  {
    name: "TESTIMONIO",
    url:  '#testimonio',
    _href: "#testimonio",
    isActive: false,
    isCollapsed: false,
    subMenu: [],
  },
  {
    name: "SOLUCIONES",
    url: "/products",
    _href: "#products",
    isActive: true,
    isCollapsed: true,
    subMenu: [
      {
        id:1, 
        name: "Asesoria TI ", 
        subUrl: "/", 
        isActive: true
      },
      {
        id:2, 
        name: "Desarrollo de Software", 
        subUrl: "/", 
        isActive: true
      },
      {
        id:3, 
        name: "Cubit (CRM gestión Inmobiliaria)​", 
        subUrl: "/cubit2", 
        isActive: true
      },
      {
        id:4, 
        name: "Integración​", 
        subUrl: "/cubit2", 
        isActive: true
      }
    ],
  },
  {
    name: "EMPRESA",
    url: "/aboutus",
    _href: "aboutus",
    isActive: true,
    isCollapsed: false,
  },
  {
    name: "CONTACTO",
    url: "/contact",
    _href: "#contact",
    isActive: true,
    isCollapsed: false,
    subMenu: [],
  },
  {
    name: "MARKETPLACE INMOBILIARIO",
    url: "/marketplace-inmoario",
    _href: "#",
    isActive: false,
    isCollapsed: false,
    subMenu: [],
  },
];

function App() {
  const [name, setName] = useState('Yosmar Hinestroza')


 
  useEffect(() => {
    setTimeout(() => {
      setName('Cristian Prietooooo')
    }, 4000)
  },[])




  return (
   
    <div className="App">
      
      <header className="App-header">
          <h1 className='title'>Proyecto Example</h1>
          <TitleComponents nameData={name} />

          <FormComponents />
          <ul>
           {navBarLinks.map((row) => (
              <li className="list">{row.name}</li>
           ))} 
          </ul>
      </header>
    </div>
  );
}

export default App;
