export const loadCurrentApartment = () => {
  try {
    const currentApartment = localStorage.getItem("currentApartment");
    if(currentApartment === null || undefined) {
      return undefined;
    }
    return currentApartment;
  } catch (err) {
    return undefined;
  }
}

export const saveCurrentApartment = (currentApartment: string) => {
  try {
    if(currentApartment !== undefined)
      localStorage.setItem("currentApartment", currentApartment);
  } catch (err) {
    return undefined;
  }
}