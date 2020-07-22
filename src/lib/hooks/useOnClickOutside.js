import { useEffect } from 'react';

/**
 * Custom hook useOnClickOutside
 *
 * Create a ref that we add to the element for which we want to detect outside clicks
 * const ref = useRef();
 * State for our modal
 * for ex.
 * const [isModalOpen, setModalOpen] = useState(false);
 * Call hook passing in the ref and a function to call on outside click
 * useOnClickOutside(ref, () => setModalOpen(false));
 *  note that a component should be wrapped with React.forwardRef() to receive (props, ref)
 *
 * @param {React.Ref} ref - element ref from where you use this hook
 * @param {Function} handler - handler which handles event onClick
 * @returns {Function} - Hook
 */
function useOnClickOutside(ref, handler): Function {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
