
function PizzaList(){

    const pizza = [
        {
            id: 1, 
            name: "Margarita", 
            productDescription: "Tomatsaus og mozarella",
            image: '.src/images/products/pizza/margarita.jpeg', 
            productType: "Pizza",
            price: 249
        }, 
        {
            id: 1, 
            name: "Burratona", 
            productDescription: "Tomatsaus, mozarella, parmaskinke, ruccola og cherrytomater",
            image: "./burratona.jpeg", 
            productType: "Pizza",
            price: 279
        }, 
        {
            id: 3, 
            name: "Albese", 
            productDescription: "Tomatsaus, mozarella, og indrefilet",
            image: "./albese.jpeg", 
            productType: "Pizza",
            price: 289
        }, 
        {
            id: 4, 
            name: "Vegano", 
            productDescription: "Tomatsaus, mozarella, oliven, diverse grønnsaker",
            image: "./vegano.jpeg", 
            productType: "Pizza",
            price: 259
        }, 
        {
            id: 5, 
            name: "Milano", 
            productDescription: "Tomatsaus, mozarella, løk, ruccola, og pastrami",
            image: "./milano.jpeg", 
            productType: "Pizza",
            price: 279
        }, 
        {
            id: 6, 
            name: "Firenze", 
            productDescription: "Tomatsaus, mozarella, oliven, parmaskinke",
            image: "./firenze.jpeg", 
            productType: "Pizza",
            price: 279
        }, 
        {
            id: 7, 
            name: "Napoli", 
            productDescription: "Tomatsaus, mozarella, bacon, basilikum",
            image: "./napoli.jpeg", 
            productType: "Pizza",
            price: 279
        }, 
        {
            id: 8, 
            name: "Torino", 
            productDescription: "Tomatsaus, mozarella, parmesan, og basilikum",
            image: "torino.jpeg", 
            productType: "Pizza",
            price: 249
        }, 
        {
            id: 9, 
            name: "Genova", 
            productDescription: "Tomatsaus, mozarella, ruccola og ytrefilet",
            image: "./genova.jpeg", 
            productType: "Pizza",
            price: 289
        }, 
        {
            id: 10, 
            name: "Venezia", 
            productDescription: "Tomatsaus, mozarella, pepperoni og champignon",
            image: "./venezia.jpeg", 
            productType: "Pizza",
            price: 279
        }, 
    
    ]
    
    return (
        <>
        {pizza.map(function(p, idx){
            return (<ul key={idx}>{p.name}{p.image}</ul>)
        })}
        </>
        );
}

export default PizzaList;
