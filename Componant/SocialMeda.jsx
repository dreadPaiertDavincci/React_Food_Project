import "../src/Style/SocialMeda.css";
function SocialMeda(){ 
    return(
<div className="main__socials">
  <button className="Link__instagram" title="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#E4405F">
      <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-2a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  </button>

  <button className="Link__facebook" title="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
      <path fill="#1877F2"
        d="M24 4C12.954 4 4 12.954 4 24c0 9.998 7.336 18.27 17 19.743V29h-5v-5h5v-3.5c0-5.239 3.134-8.125 7.924-8.125 2.292 0 4.688.4 4.688.4v5h-2.644C28.083 17.775 28 18.83 28 19.9V24h6l-1 5h-5v14.743C36.664 42.27 44 33.998 44 24c0-11.046-8.954-20-20-20z" />
    </svg>
  </button>

  <button className="Link__google" title="Google">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
      <path fill="#EA4335"
        d="M24 9.5c3.1 0 5.6 1.2 7.3 2.3l5.4-5.4C33.1 3.4 28.9 1.5 24 1.5 14.5 1.5 6.9 7.9 4 16h6.8C12 11.7 17.5 9.5 24 9.5z" />
      <path fill="#34A853"
        d="M24 46.5c6.5 0 12-2.2 16.3-6l-6.7-5.5c-2 1.4-4.6 2.2-9.6 2.2-6.5 0-12-4.3-13.9-10.2H3v6.4C6.9 40.1 14.5 46.5 24 46.5z" />
      <path fill="#4A90E2"
        d="M44 24c0-1.4-.1-2.4-.3-3.5H24v7h11.5c-.5 2.8-2 5.2-4.4 6.9l6.7 5.5C41.4 36.9 44 30.9 44 24z" />
      <path fill="#FBBC05"
        d="M10.1 28.5C9.7 27.2 9.5 25.6 9.5 24s.2-3.2.6-4.5H3v-6.4C6.9 7.9 14.5 1.5 24 1.5c4.9 0 9.1 1.9 12.7 5.4l-5.4 5.4c-1.7-1.1-4.2-2.3-7.3-2.3-6.5 0-12 4.3-13.9 10.2z" />
    </svg>
  </button>

  <button className="Link__discord" title="Discord">
      <svg
      height="30px"
      width="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="discord"
    >
      <path
        d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
      ></path>
    </svg>
  </button>
</div>

    );
}
export default SocialMeda;