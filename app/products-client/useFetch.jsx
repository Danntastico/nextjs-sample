import { useEffect, useReducer } from 'react';

const initState = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error });
      }
    };

    fetchData();
  }, [url]);

  return state;
}

export default useFetch;
