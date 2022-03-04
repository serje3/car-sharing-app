import { equipments } from "./equipments";


export const CarEquipmentRow = ({ equipment }) => {
    return (
        <div className="d-grid gap-3" style={{
            gridTemplateColumns: "1fr",
            gridColumnStart: 2,
            gridColumnEnd: 3,
        }}>
            <div className="col d-flex justify-content-start text-secondary">Оборудование</div>
            <div className="equipList d-grid gap-3">
                {equipment && equipment.map((equip)=>{
                    return <div key={equip} className="d-inline-flex justify-content-start gap-3">{equipments[equip]}</div>
                })}
            </div>
        </div>
    )
}