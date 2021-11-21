import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



function PizzaList() {

    const pizzaList = [
        {
            id: 1,
            name: "Margarita",
            productDescription: "Tomatsaus og mozarella",
            allergies: "Ingen",
            image: "https://i.imgur.com/sYbaGoA.jpg",
            productType: "Pizza",
            price: 249
        },
        {
            id: 2,
            name: "Burratona",
            productDescription: "Tomatsaus, mozarella, parmaskinke, ruccola og cherrytomater",
            allergies: "G",
            image: "https://i.imgur.com/At9Zo6e.jpg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 3,
            name: "Albese",
            productDescription: "Tomatsaus, mozarella, og indrefilet",
            allergies: "Ingen",
            image: "https://i.imgur.com/dKG5Vfc.jpg",
            productType: "Pizza",
            price: 289
        },
        {
            id: 4,
            name: "Vegano",
            productDescription: "Tomatsaus, mozarella, oliven, diverse grønnsaker",
            allergies: "V",
            image: "https://i.imgur.com/2OX70Sa.jpg",
            productType: "Pizza",
            price: 259
        },
        {
            id: 5,
            name: "Milano",
            productDescription: "Tomatsaus, mozarella, løk, ruccola, og pastrami",
            allergies: "Ingen",
            image: "https://i.imgur.com/oWhdfIC.jpg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 6,
            name: "Firenze",
            productDescription: "Tomatsaus, mozarella, oliven, parmaskinke",
            allergies: "Ingen",
            image: "https://i.imgur.com/w51kl3O.jpg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 7,
            name: "Napoli",
            productDescription: "Tomatsaus, mozarella, bacon, basilikum",
            allergies: "Ingen",
            image: "https://i.imgur.com/A2MqM4P.jpg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 8,
            name: "Torino",
            productDescription: "Tomatsaus, mozarella, parmesan, og basilikum",
            allergies: "Ingen",
            image: "https://i.imgur.com/8FYzTAx.jpg",
            productType: "Pizza",
            price: 249
        },
        {
            id: 9,
            name: "Genova",
            productDescription: "Tomatsaus, mozarella, ruccola og ytrefilet",
            allergies: "Ingen",
            image: "https://i.imgur.com/HFlEmRl.jpg",
            productType: "Pizza",
            price: 289
        },
        {
            id: 10,
            name: "Venezia",
            productDescription: "Tomatsaus, mozarella, pepperoni og champignon",
            allergies: "Ingen",
            image: "https://i.imgur.com/zkoDhWT.jpg",
            productType: "Pizza",
            price: 279
        },


    ]

    return (
        <div style={{ marginBottom: "5em" }}>
            <Typography variant="h2" align='center' marginBottom="5vh">Pizza</Typography>
            <Grid container spacing={3} align='center' direction='row' justifyContent='center'>

                {pizzaList.map((p) => {
                    return <Grid item sm={12} md={5} lg={3}>
                        <ProductCard product={p} />
                    </Grid>
                })}

            </Grid>
        </div>
    );
}

export default PizzaList;
