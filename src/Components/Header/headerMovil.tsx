import useWindowDimensions, { DimensionsResize } from "../../Hooks/useWindowDimensions";
import { itemMenu } from "./Items";
function HeaderMovil() {
    const { height, width } = useWindowDimensions();
    return (
        <div className="styleMenuMovil">
            {itemMenu.map((item, key) => {
                if (item.hidden) return <></>
                return (
                    <div className="widthItemMenu" key={key}>
                        <div className="styleItemMenuMovil">
                            <img src={item.icon} />
                            <h6>{item.titleMovil ?? item.title}</h6>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default HeaderMovil;
