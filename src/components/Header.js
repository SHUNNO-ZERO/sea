function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      <h1> S  E  A     S  K  Y</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up / new product 
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in / sea sky product 
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
