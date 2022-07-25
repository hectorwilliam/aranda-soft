import useWindowDimensions, { DimensionsResize } from "../../Hooks/useWindowDimensions";
import { itemMenu } from "./Items";
import iconHome from "../../Assets/Img/icons/ic_home.svg"
function Header() {
    const { height, width } = useWindowDimensions();
    return (
        <div className="containerMain styleHeader">
            <div className="logo  width-2">
                <img src="https://e7.pngegg.com/pngimages/665/342/png-clipart-sumup-point-of-sale-payment-card-mobile-payment-credit-card-company-text.png" />
            </div>
            <div className="itemMenu  width-8">
   
                <ul>
                    {width > DimensionsResize.desktops.min ?
                        <>
                            {itemMenu.map((item, key) => {
                                return <li key={key}>{item.title}</li>
                            })

                            }
                        </>
                        : <img src={iconHome} />}

                </ul>
            </div>
        </div>
    );
}

export default Header;
