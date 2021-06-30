/**
 * Set current year on a element of DOM
 * @param {HTMLElement} element 
 */
export const setCurrentYear = (element) => {
    const date = new Date(Date.now());
    element.innerHTML = date.getFullYear();
}

