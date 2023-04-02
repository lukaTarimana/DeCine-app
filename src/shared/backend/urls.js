const backendUrl = process.env.REACT_APP_BACKEND_URL;

const urls = {
    backend: backendUrl,
    register: `${backendUrl}/api/register`,
    upsertUser: `${backendUrl}/api/users`,
    getUserByWallet: `${backendUrl}/api/users`,
    addMovie: `${backendUrl}/api/movies`,
    getMovieById: `${backendUrl}/api/movies`
};
  
export default urls;
  