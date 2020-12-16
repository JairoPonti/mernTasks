import React, { useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyectos} = proyectosContext

    //Obtener proyectos cuando carga el componente
    useEffect(() => {   //No debe haber un useEffect luego de un return
        obtenerProyectos();
      }, []);
    
    //Revisar si el state inicial tiene contenido
    if(proyectos.length === 0) return null;


    return (
        <ul className="listado-proyectos">
          {proyectos.map(proyecto => (
              <Proyecto
               key={proyecto.id}
               proyecto={proyecto}
               />
          ))}
        </ul>
    )
}

export default ListadoProyectos
