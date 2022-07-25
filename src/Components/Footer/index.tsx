import FooterImg from "../../Assets/Img/footer.png"

function Footer() {
  return (
    <div className="styleFooter">
      <div className='containerMain'>
        <div className="width-5">
          <h1>Con el patrocinio de</h1>
        </div>
        <div className="width-5 positionRelative">
          <img src={FooterImg} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
