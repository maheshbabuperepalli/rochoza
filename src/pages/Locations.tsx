import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import wendingMachine from "../assets/wendingMachine.png";

// Fix default icon path issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Custom vending machine icon
const vendingMachineIcon = new L.Icon({
  iconUrl: wendingMachine,
  iconSize: [38, 38], // Size of the icon
  iconAnchor: [19, 38], // Point of the icon which corresponds to marker's location
  popupAnchor: [0, -38], // Where the popup should open relative to the iconAnchor
});

const cities = [
  { name: "Vizag", position: [17.6868, 83.2185] },
  { name: "Hyderabad", position: [17.385, 78.4867] },
  { name: "Bengaluru", position: [12.9716, 77.5946] },
  { name: "Goa", position: [15.2993, 74.124] },
];

const Locations = () => {
  return (
    <div className="w-full flex h-full flex-col pt-16">
      {/* Description */}
      <div className="text-center text-gray-700 py-8 px-20">
        <p className="text-lg leading-relaxed">
          We serve key cities like Bengaluru, Hyderabad, Vizag, and Goa.
          Wherever you are, we provide reliable and easy-to-use solutions
          tailored for you. Connect with us and experience the best service.
        </p>
      </div>
      <MapContainer
        center={[15.0, 78.0]}
        zoom={6}
        scrollWheelZoom={true}
        className="w-4/6 h-4/6   self-center"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={city.position as [number, number]}
            icon={vendingMachineIcon}
          >
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Locations;
