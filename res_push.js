var restaurantData = [
    {
        name: "Italian Restaurant 1",
        category: ["Italian", "Cheap"],
        info: "Information about Italian Restaurant 1"
    },
    {
        name: "Italian Restaurant 2",
        category: "Italian",
        info: "Information about Italian Restaurant 2"
    },
    {
        name: "Downtown Restaurant 1",
        category: "Downtown",
        info: "Information about Downtown Restaurant 1"
    },
    {
        name: "Downtown Restaurant 2",
        category:["Downtown", "Cheap"],
        info: "Information about Downtown Restaurant 2"
    },
    {
        name: "Local Restaurant 1",
        category: "Locals",
        info: "Information about Local Restaurant 1"
    },
    {
        name: "Local Restaurant 2",
        category: "Locals",
        info: "Information about Local Restaurant 2"
    }
    // Add more restaurant objects as needed
];

function pickRandomRestaurant() {
    var category = document.getElementById("restaurantCategory").value;
    var filteredRestaurants = restaurantData.filter(function(restaurant) {
        return restaurant.category.includes(category);
    });

    if (filteredRestaurants.length > 0) {
        var randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
        var selectedRestaurant = filteredRestaurants[randomIndex];
        document.getElementById("randomRestaurant").textContent = "Random Restaurant: " + selectedRestaurant.name;
        document.getElementById("restaurantInfo").textContent = "Information: " + selectedRestaurant.info;
    } else {
        document.getElementById("randomRestaurant").textContent = "No restaurants in the selected category.";
        document.getElementById("restaurantInfo").textContent = "";
    }
}
