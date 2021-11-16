
function PastaList(){

    const pasta = [
        {
            id: 1, 
            name: "Carbonara", 
            productDescription: "Pasta, carbonarasaus, bacon, og parmesan",
            image: "./carbonara.jpeg", 
            productType: "Pasta",
            price: 189
        }, 
        {
            id: 1, 
            name: "Scampi", 
            productDescription: "Pasta, scampi, ostesaus med hvitvin",
            image: "./scampi.jpeg", 
            productType: "Pasta",
            price: 189
        }, 
        {
            id: 3, 
            name: "Bolognese", 
            productDescription: "Pasta, tomatsaus, kjøtt",
            image: "./bolognese.jpeg", 
            productType: "Pasta",
            price: 179
        }, 
        {
            id: 4, 
            name: "Pomodoro", 
            productDescription: "Pasta, basilikum og soltørket tomat",
            image: "./pomodoro.jpeg", 
            productType: "Pasta",
            price: 179
        }, 
        {
            id: 5, 
            name: "Salsiccia", 
            productDescription: "Pasta, pølse, hvit saus",
            image: "./Salsiccia.jpeg", 
            productType: "Pasta",
            price: 179
        }, 
        {
            id: 6, 
            name: "Verdura", 
            productDescription: "Pasta, dagens grønnsaker",
            image: "./verdura.jpeg", 
            productType: "Pasta",
            price: 179
        }, 
        {
            id: 7, 
            name: "Al Forno", 
            productDescription: "Tomat, fløte og hvitvin",
            image: "./alforno.jpeg", 
            productType: "Pasta",
            price: 179
        }, 
        {
            id: 8, 
            name: "Piselli", 
            productDescription: "Pasta, tomater, erter og basilikum",
            image: "./piselli.jpeg", 
            productType: "Pasta",
            price: 179
        }, 
        {
            id: 9, 
            name: "Pollo", 
            productDescription: "Pasta, tomat, kylling, og basilikum",
            image: "./pollo.jpeg", 
            productType: "Pasta",
            price: 189
        }, 
        {
            id: 10, 
            name: "Ceci", 
            productDescription: "Pasta, tomat, og kikerter",
            image: "./ceci.jpeg", 
            productType: "pasta",
            price: 179
        }, 
    
    ]
    
    return (
        <>
        <article>
            <img key ={pasta.id} src ={pasta.image} />
            <h3>{pasta.name}</h3>
            <p>{pasta.productDescription}</p>
            <p>{pasta.price}</p>
        </article>
        </>
        );
}

export default PastaList;
