export const CarOrderActive = () => {
    return (
        <div className="d-grid gap-3 car-card-order-active">
            <div className="col d-flex justify-content-center fw-bolder">Активный заказ</div>
            <div className="d-grid gap-3">
                <div className="d-flex justify-content-between fw-bolder">
                    <span>Начало аренды:</span>
                    <span>01.01.2022 в 20:45</span>
                </div>
                <div className="d-flex justify-content-between fw-bolder">
                    <span>Продолжительность:</span>
                    <span>1ч 24м</span>
                </div>
                <div className="d-flex justify-content-between fw-bolder">
                    <span>Стоимость аренды:</span>
                    <span>840 руб</span>
                </div>
            </div>
        </div>
    )
}