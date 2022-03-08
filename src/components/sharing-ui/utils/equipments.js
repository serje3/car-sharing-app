import bluetoothSvg from "../../../assets/svg/bluetooth.svg"
import mapSvg from "../../../assets/svg/map.svg"
import childSvg from "../../../assets/svg/child.svg"

//navigator
// bluetooth
// baby_chair

const EquipWrapper = (props) =>
    (<>
        <img src={props.img} alt={props.equip}/>
        <span className="align-self-center">{props.children}</span>
    </>)

export const EquipmentMap = {
    "navigator":
        <EquipWrapper
            equip={"navigator"}
            img={mapSvg}
        >
            Навигатор
        </EquipWrapper>
    ,
    "bluetooth":
        <EquipWrapper
            equip={"bluetooth"}
            img={bluetoothSvg}
        >
        Bluetooth двери
        </EquipWrapper>,
    "baby_chair":
        <EquipWrapper
            equip={"baby_chair"}
            img={childSvg}
        >
            Детское кресло
        </EquipWrapper>
}