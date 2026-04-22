// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.


const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes)
        for (const recipe of recipes) {
            const div = document.createElement('div');
            div.classList.add('recipe-container');
            const divWithRecipeUpperText = document.createElement('div');
            divWithRecipeUpperText.innerText = `
                "id": ${recipe.id},
                "name": ${recipe.name},
            `
            const divWithRecipeLowerText = document.createElement('div');
            divWithRecipeLowerText.innerText = `    
                "instructions": ${recipe.instructions},
                "prepTimeMinutes": ${recipe.prepTimeMinutes},
                "cookTimeMinutes":${recipe.cookTimeMinutes},
                "servings": ${recipe.servings},
                "difficulty": ${recipe.difficulty},
                "cuisine": ${recipe.cuisine},
                "caloriesPerServing": ${recipe.caloriesPerServing},
                "tags": ${recipe.tags},
                "userId": ${recipe.userId},
                "rating": ${recipe.rating},
                "reviewCount":${recipe.reviewCount},
                "mealType":${recipe.mealType}
            `
            const ol = document.createElement('ol');
            for (const ingredient of recipe.ingredients){
                const li = document.createElement('li');
                li.innerText = `${ingredient}`;

                ol.appendChild(li);
            }
            const img = document.createElement('img');
            img.classList.add('food-img')
            img.src = recipe.image;


            div.append(divWithRecipeUpperText,img,ol,divWithRecipeLowerText);
            recipesDiv.appendChild(div);

    }



        // for (const cart of carts) {
    //         const div = document.createElement('div');
    //         div.classList.add('cart-container');
    //         const divWithInfo = document.createElement('div');
    //         divWithInfo.innerText = `
    //             "id": ${cart.id},
    //             "total": ${cart.total},
    //             "discountedTotal": ${cart.discountedTotal},
    //             "userId": ${cart.userId},
    //             "totalProducts": ${cart.totalProducts},
    //             "totalQuantity": ${cart.totalQuantity}
    //         `
    //
    //         const ol = document.createElement('ol');
    //         for (const product of cart.products) {
    //             const li = document.createElement('li');
    //             const info = document.createElement('p');
    //             info.innerHTML = `
    //                 id": ${product.id},
    //                 "title": ${product.title},
    //                 "price": ${product.price},
    //                 "quantity": ${product.quantity},
    //                 "total": ${product.total},
    //                 "discountPercentage": ${product.discountPercentage},
    //                 "discountedTotal": ${product.discountedTotal},
    //             `
    //
    //             const img = document.createElement('img');
    //             img.src = product.thumbnail;
    //             li.append(img, info);
    //             ol.appendChild(li);
    //         }
    //         div.append(divWithInfo, ol)
    //         cartsDiv.appendChild(div)
    //     }
    //
    //
    })
