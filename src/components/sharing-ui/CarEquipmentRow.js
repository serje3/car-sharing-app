import { EquipmentMap } from "./utils/equipments";


export const CarEquipmentRow = ({ equipments }) => {
    return (
        <div className="d-grid gap-3 car-card-equipment">
            <div className="col d-flex justify-content-start text-secondary">
                {equipments && equipments.length!==0?
                    "Оборудование":
                    "Нет оборудования"}
            </div>
            <div className="equipList d-grid gap-3">
                {equipments && equipments.map((equip)=>{
                    return <div key={equip} className="d-inline-flex justify-content-start gap-3">{EquipmentMap[equip]}</div>
                })}
            </div>
        </div>
    )
}