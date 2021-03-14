

class Personajes {
    constructor(id) {
        let _id = id;
        this.getId = () => _id;
        this.setId = (nuevo_id) => (_id = nuevo_id);
        this.id = id;
    }
    get id() {
        return this.getId();
    }
    set id(nuevo_id) {
        this.setId(nuevo_id);
    }

}


class DetallesPersonajes extends Personajes {
    constructor(id, name, status, species, gender, created, origin, location, episode) {
        super(id);
        let _name = name;
        let _status = status;
        this.species = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
        this.getName = () => _name;
        this.setName = (nuevo_name) => (_nombre = nuevo_name);
        this.getStatus = () => _status;
        this.setStatus = (nuevo_status) => (_status = nuevo_status);

    }
    get name() {
        return this.getName();
    }
    set name(nuevo_name) {
        this.setName(nuevo_name);
    }
    get status() {
        return this.getStatus();
    }
    set status(nuevo_status) {
        this.setStatus(nuevo_status);
    }

}


(async () => {
    try {
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(url);
        const data = await response.json();

        return infoGeneral(data.results)
    } catch (err) {
        console.log(err);
    }
})(); //iife

setTimeout(() => { $("#ruedaGira").replaceWith("20"); }, 2000); 



function infoGeneral(personajesArray) {
    const paraDOM = document.querySelector('#resultados');
    const paraModal = document.querySelector('#paraModal')
    const paraImagenesDatos = paraDOM;


    personajesArray.forEach(personajesDatos => {
        let locationarray = (`${personajesDatos.location}`)
        let location = locationarray.length

        let episodearray = (`${personajesDatos.episode}`)
        let episode = episodearray.length

        paraImagenesDatos.innerHTML = paraImagenesDatos.innerHTML + ` 
    

        <div class="col-6 col-md-2 py-5 "> 
        <button id="botonesPersonajesredondados" type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModalCenter${personajesDatos.id}">
        <img id="${personajesDatos.id}" src=${personajesDatos.image} )"></img> </button> 
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter${personajesDatos.id}" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title text-dark" id="nombrePersonajeRam">${personajesDatos.name}</h3> <!--id  nombrePersonajeRam-->
                        <button id="botonDatosPersonajesRam" type="button" class="close" data-dismiss="modal" aria-label="Close">  <!--id  botonDatosPersonajesRam-->
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="paraModal" class="modal-body bg-info">
                        <p>Id : ${personajesDatos.id}</p>
                        <p>Nombre:${personajesDatos.name}</p>
                        <p>Estado:  ${personajesDatos.status}</p>
                        <p>Especie: ${personajesDatos.species} </p>
                        <p>Género:  ${personajesDatos.gender}  </p>
                        <p>Creado:  ${personajesDatos.created}</p>
                        <p>Origin:${personajesDatos.origin.name}</p>
                        <p>Ubicación: ${location}</p>
                        <p>Episidios: ${episode} </p>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- fin modal -->
    
        </div>
        <div class="col-6 col-md-1 align-self-center"> 
        <h2> ID: ${personajesDatos.id}</h2>
        <h2> ${personajesDatos.name}</h2><h4> ${personajesDatos.species}</h4> 
        </div>
        <div class="col-none col-md-1 align-self-center"> 
        </div>
    `
    }
    );

}

