import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="logo" />
      <h3 className="text-3xl font-bold -ml-3">zapShift</h3>
    </div>
  );
};
export default Logo;
