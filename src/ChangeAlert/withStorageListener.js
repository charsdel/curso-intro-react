import React from "react";


function withStorageListener(WrappedComponent){


    return function WrappedComponentWithStorageListener(props){
        
        const [storageChange, setStorageChange] = React.useState(false);
        
        //aqui se verifica si hubo un cambio en el almacenamiento por un camnio en otra pesta#a por ejemplo para informar
        window.addEventListener('storage', (change) => {

            if(change.key === 'TODOS_V1'){
                console.log('hubo un cambio en TODOS_V1 ');
                setStorageChange(true);
            }

        });

        //esta funcion intercepta las props que le paso a ChangeAlertwithStorageListener en el index para llamar al efecto
        //en useLocalStorage
        const toggleShow = () =>{

            props.sincronize();
            setStorageChange(false);
        }

        return( 
            <WrappedComponent 
                show = {storageChange}
                toggleShow = {toggleShow}
           
            />
        )
        ;
    }

}

export {withStorageListener};