export const TintOptions = {
  generalProperties: {
    // diffuse: ""
    // color: "#000",
    transparent: true, // Enable transparency
    // opacity: 0.8, // Set opacity (adjust as needed)
    roughness: 0.1, // Set roughness (adjust as needed)
    transmission: 0.9, // Set transmission (simulates light passing through the glass)
    clearcoat: 1, // Set clearcoat (adds a clear glossy layer)
    clearcoatRoughness: 0.1, // Set clearcoat roughness (adjust as needed)
    metalness: 0,
  },
  variableProperties: {
    Dark: {
      color: "#000",
      opacity: 0.8,
    },
    Medium: {
      color: "#222",
      opacity: 0.6,
    },
    Light: {
      color: "#444",
      opacity: 0.4,
    },
    Clear: {
      color: "#666",
      opacity: 0.2,
    },
  },
};
