import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function PastaList() {

    const pastaList = [
        {
            id: 1,
            name: "Carbonara",
            productDescription: "Pasta, carbonarasaus, bacon, og parmesan",
            allergies: "Ingen",
            image: "https://i.imgur.com/TD7TfOE.jpg",
            productType: "Pasta",
            price: 189
        },
        {
            id: 2,
            name: "Scampi",
            productDescription: "Pasta, scampi, ostesaus med hvitvin",
            allergies: "S",
            image: "https://i.imgur.com/Grh4x4s.jpg",
            productType: "Pasta",
            price: 189
        },
        {
            id: 3,
            name: "Bolognese",
            productDescription: "Pasta, tomatsaus, kjøtt",
            allergies: "Ingen",
            image: "https://i.imgur.com/ZQKKVWu.jpg",
            productType: "Pasta",
            price: 179
        },
        {
            id: 4,
            name: "Pomodoro",
            productDescription: "Pasta, basilikum og soltørket tomat",
            allergies: "V",
            image: "https://i.imgur.com/YvVV3zE.jpg",
            productType: "Pasta",
            price: 179
        },
        {
            id: 5,
            name: "Salsiccia",
            productDescription: "Pasta, pølse, hvit saus",
            allergies: "Ingen",
            image: "https://i.imgur.com/GiN1P93.jpg",
            productType: "Pasta",
            price: 179
        },
        {
            id: 6,
            name: "Verdura",
            productDescription: "Pasta, dagens grønnsaker",
            allergies: "V",
            image: "https://i.imgur.com/IoSBW0w.jpg",
            productType: "Pasta",
            price: 179
        },
        {
            id: 7,
            name: "Al Forno",
            productDescription: "Tomat, fløte og hvitvin",
            allergies: "Ingen",
            image: "https://i.imgur.com/FdmGTx5.jpg",
            productType: "Pasta",
            price: 179
        },
        {
            id: 8,
            name: "Piselli",
            productDescription: "Pasta, tomater, erter og basilikum",
            allergies: "Ingen",
            image: "https://i.imgur.com/8fP0xon.jpg",
            productType: "Pasta",
            price: 179
        },
        {
            id: 9,
            name: "Pollo",
            productDescription: "Pasta, tomat, kylling, og basilikum",
            allergies: "Ingen",
            image: "https://i.imgur.com/EBoF1iD.jpg",
            productType: "Pasta",
            price: 189
        },
        {
            id: 10,
            name: "Ceci",
            productDescription: "Pasta, tomat, og kikerter",
            allergies: "Ingen",
            image: "https://i.imgur.com/Ps9KPW6.jpg",
            productType: "pasta",
            price: 179
        },

    ]

    return (
        <>
            <div style={{ marginBottom: "5em" }}>
                <Typography variant="h2" align='center' marginBottom="5vh">Pasta</Typography>
                <Grid container spacing={3} align='center' direction='row' justifyContent='center'>

                    {pastaList.map((p) => {
                        return <Grid item sm={12} md={5} lg={3}>
                            <ProductCard product={p} />
                        </Grid>
                    })}

                </Grid>
            </div>
        </>
    );
}

export default PastaList;