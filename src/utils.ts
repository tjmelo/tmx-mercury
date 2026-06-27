let savedStyleElement: HTMLStyleElement | null = null;

const setStyleElement = (element: HTMLStyleElement | null = null) => {
  savedStyleElement = element;
}

const rootStyle = () => savedStyleElement;

export { rootStyle, setStyleElement };
export default setStyleElement;
