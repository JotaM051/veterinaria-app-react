export const mockData = {
  client: {
    id: 1,
    name: "Ana Pérez",
    email: "ana@email.com",
    phone: "+506 8888-8888"
  },
  pets: [
    {
      id: 1,
      name: "Roco",
      species: "Perro",
      breed: "Labrador",
      age: 5,
      weight: 28,
      allergies: ["Ninguna"],
      status: "Activo"
    },
      {
      id: 3,
      name: "Pelay",
      species: "",
      breed: "pug",
      age: 5,
      weight: 28,
      allergies: ["Ninguna"],
      status: "Activo"
    },

    {
      id: 2,
      name: "Mishi",
      species: "Gato",
      breed: "Siamés",
      age: 3,
      weight: 4,
      allergies: ["Polen"],
      status: "Activo"
    }
  ],
  vaccines: [
    { id: 1, petId: 1, name: "Rabia", date: "2025-01-15" },
    { id: 2, petId: 1, name: "Parvovirus", date: "2024-11-20" },
    { id: 3, petId: 3, name: "Rabia", date: "2025-01-22" }
  ],
  appointments: [
    { id: 1, petId: 1, date: "2025-02-20", reason: "Control anual", vet: "Dr. Rodríguez" },
    { id: 2, petId: 2, date: "2025-03-20", reason: "Control anual", vet: "Dr. Rodríguez" },
    { id: 3, petId: 3, date: "2025-04-20", reason: "Control anual", vet: "Dr. Rodríguez" }

  ]
};