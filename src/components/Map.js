import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
  } from 'react-leaflet'
  
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const position = [
    46.677305204291585,
    -1.436612606048584
  ]
const position2 = [
    46.677305204291585,
    -1.446612606048584
  ]

const fcIcon = L.icon({
    iconSize: [60, 60],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    shadowSize: [100, 30], // size of the shadow
    shadowAnchor: [15, 10],
    iconUrl: "https://img2.freepng.fr/20180320/etw/kisspng-pile-of-poo-emoji-feces-t-shirt-sticker-poop-png-emoji-island-5ab1c1e2792d65.3033429615215989464964.jpg",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
    })
    
export const Map = () => {
    return (
        <div> 
            <h2>Méteo Pokémon</h2>

            <MapContainer
                center={[46.6681699, -1.4148661]}
                zoom={14}
                scrollWheelZoom={false} // Zoomer avec le scroll de la souris
                style={{ height: "100%", width: "100%" }}
            >

                <TileLayer
                url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnVudGhlYXIiLCJhIjoiY2tkYTdnOHpmMGI3NDJxbXpoc2QwMXc3MyJ9.nu-giQ821MNuH64prgx2yg"}
                attribution='CDA Vendée' // Texte de la cartouche
                />

                <Marker position={position} draggable={true} icon={fcIcon}>
                    <Popup>
                        FC est ici.
                    </Popup>
                </Marker>

                <Marker position={position2}>
                    <Popup>
                        FC n'est pas là.
                    </Popup>
                </Marker>
                
            </MapContainer>
        </div>
    )
    
}