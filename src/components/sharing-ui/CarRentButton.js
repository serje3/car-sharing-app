export const CarRentButton = () => {
    return (
        <div className="d-grid" style={{
            gridColumnStart: 2,
            gridColumnEnd: 3,
        }}>
        <button type="button" className="btn btn-primary btn-lg row" style={{
            backgroundColor: "#9a00ff",
            color: "#ffffff"
        }}>Начать аренду</button>
        </div>
    )
}