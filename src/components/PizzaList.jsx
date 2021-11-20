import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid'


function PizzaList() {

    const pizzaList = [
        {
            id: 1,
            name: "Margarita",
            productDescription: "Tomatsaus og mozarella",
            allergies: "Ingen",
            image: "src\images\products\margarita.jpeg",
            productType: "Pizza",
            price: 249
        },
        {
            id: 1,
            name: "Burratona",
            productDescription: "Tomatsaus, mozarella, parmaskinke, ruccola og cherrytomater",
            allergies: "G",
            image: "./burratona.jpeg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 3,
            name: "Albese",
            productDescription: "Tomatsaus, mozarella, og indrefilet",
            allergies: "Ingen",
            image: "./albese.jpeg",
            productType: "Pizza",
            price: 289
        },
        {
            id: 4,
            name: "Vegano",
            productDescription: "Tomatsaus, mozarella, oliven, diverse grønnsaker",
            allergies: "V",
            image: "./vegano.jpeg",
            productType: "Pizza",
            price: 259
        },
        {
            id: 5,
            name: "Milano",
            productDescription: "Tomatsaus, mozarella, løk, ruccola, og pastrami",
            allergies: "Ingen",
            image: "./milano.jpeg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 6,
            name: "Firenze",
            productDescription: "Tomatsaus, mozarella, oliven, parmaskinke",
            allergies: "Ingen",
            image: "./firenze.jpeg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 7,
            name: "Napoli",
            productDescription: "Tomatsaus, mozarella, bacon, basilikum",
            allergies: "Ingen",
            image: "./napoli.jpeg",
            productType: "Pizza",
            price: 279
        },
        {
            id: 8,
            name: "Torino",
            productDescription: "Tomatsaus, mozarella, parmesan, og basilikum",
            allergies: "Ingen",
            image: "torino.jpeg",
            productType: "Pizza",
            price: 249
        },
        {
            id: 9,
            name: "Genova",
            productDescription: "Tomatsaus, mozarella, ruccola og ytrefilet",
            allergies: "Ingen",
            image: "./genova.jpeg",
            productType: "Pizza",
            price: 289
        },
        {
            id: 10,
            name: "Venezia",
            productDescription: "Tomatsaus, mozarella, pepperoni og champignon",
            allergies: "Ingen",
            image: "./venezia.jpeg",
            productType: "Pizza",
            price: 279
        },

    ]

    return (
        <>
            <Grid container spacing={3} align='center' direction='row'>

                {pizzaList.map((p) => {
                    return <Grid item sm={12} md={5} lg={3}>
                        <ProductCard product={p} />
                    </Grid>
                })}

            </Grid>
        </>
    );
}

export default PizzaList;
