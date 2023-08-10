var cats=[
      {
        "idCategory": "1",
        "strCategory": "Burgers",
        "strCategoryThumb": "images/s-1.png",
        "strCategoryMain": "images/s-img-1.jpg",
        "strCategoryDescription": "When it comes to burgers, we cater to all kinds. We mean, literally. Be in touch and we’ll figure out how we can satisfy you and your crew."
      },
      {
        "idCategory": "2",
        "strCategory": "Pizzas",
        "strCategoryThumb": "images/s-2.png",
        "strCategoryMain": "images/s-img-2.jpg",
        "strCategoryDescription": "Our unique, oval pizzas are made to order with the freshest ingredients and are simply delicious from the first bite to the last."
      },
      {
        "idCategory": "3",
        "strCategory": "Ice-Cream",
        "strCategoryThumb": "images/s-3.png",
        "strCategoryMain": "images/s-img-3.jpg",
        "strCategoryDescription": "From rich, real-dairy ice creams to lower calorie, gluten free, lactose free, peanut free, nut free and no sugar added, we’ve got something for every member of your family."
      },
      {
        "idCategory": "4",
        "strCategory": "Quenchers",
        "strCategoryThumb": "images/s-4.png",
        "strCategoryMain": "images/s-img-4.jpg",
        "strCategoryDescription": "We offers real fruit Quenchers, available in Strawberry Watermelon or Peach flavours.Real Fruit Quenchers are made from real fruit juice from concentrate."
      },
      {
        "idCategory": "5",
        "strCategory": "Tasty-Sweets",
        "strCategoryThumb": "images/s-5.png",
        "strCategoryMain": "images/s-img-5.jpg",
        "strCategoryDescription": "We offer Desi Sweets and Snacks that please your sweet tooth and taste buds at affordable prices.Your hunt for the best and delicious North Indian Sweets.We offer authentic desi flavors.Seymour Cafe proudly boasts of making delicious Indian sweets!"
      },
      {
        "idCategory": "6",
        "strCategory": "Healthy-Food",
        "strCategoryThumb": "images/s-6.png",
        "strCategoryMain": "images/s-img-6.jpg",
        "strCategoryDescription": "We offer a wide variety of healhiest food.Find healthy, delicious recipes and menu ideas from our test kitchen cooks and nutrition experts"
      }
    ];


var items={
    'Burgers':[
        {
          "id": "1",
          "title": "Veg burger",
          "image": "images/b1.jpg",
          "price": 5,
        },
        {
          "id": "2",
          "title": "Chicken Burger",
          "image": "images/b2.jpg",
          "price": 4.76,
        },
        {
          "id": "3",
          "title": "Mac n Chesse Burger",
          "image": "images/b3.jpg",
          "price": 6,
        },
        {
          "id": "4",
          "title": "Beef Burger",
          "image": "images/b4.jpg",
          "price": 3.75,
        },
        {
          "id": "5",
          "title": "Panner Burger",
          "image": "images/panner.jpg",
          "price": 4.5,
        },
        {
          "id": "6",
          "title": "Nacho Burger",
          "image": "images/nacho.jpg",
          "price": 2.78,
        }
      ],
    'Pizzas':[
        {
          "id": "1",
          "title": "Veg Pizza",
          "image": "images/veg.webp",
          "price": 12,
        },
        {
          "id": "2",
          "title": "Chicken Pizza",
          "image": "images/chicken.jpg",
          "price": 15.76,
        },
        {
          "id": "3",
          "title": "Chesse Pizza",
          "image": "images/chesse.png",
          "price": 22,
        },
        {
          "id": "4",
          "title": "Pepperoni Pizza",
          "image": "images/pepperoni.jpg",
          "price": 40.75,
        },
      ],
    'Ice-Cream':[
        {
          "id": "1",
          "title": "Vanilla",
          "image": "images/vanilla.jpg",
          "price": 15,
        },
        {
          "id": "2",
          "title": "Rainbow",
          "image": "images/rainbow.png",
          "price": 18.99,
        },
        {
          "id": "3",
          "title": "Strawberry",
          "image": "images/strawberry.jpg",
          "price": 20.54,
        },
        {
          "id": "4",
          "title": "Chocolate",
          "image": "images/choclate.jpeg",
          "price": 16.50,
        },
      ],
      'Quenchers':[
        {
          "id": "1",
          "title": "Cocktail",
          "image": "images/cocktail.jpg",
          "price": 14.99,
        },
        {
          "id": "2",
          "title": "Mocktail",
          "image": "images/mocktail.jpg",
          "price": 18.99,
        },
        {
          "id": "3",
          "title": "Smoothie",
          "image": "images/smoothie.jpg",
          "price": 20.54,
        },
        {
          "id": "4",
          "title": "Soft Drink",
          "image": "images/Soft.jpg",
          "price": 2.50,
        },
      ],
      'Tasty-Sweets':[
        {
          "id": "1",
          "title": "Cake",
          "image": "images/cake.jpg",
          "price": 19.99,
        },
        {
          "id": "2",
          "title": "Hazelnut",
          "image": "images/hazelnut.jpg",
          "price": 18.99,
        },
        {
          "id": "3",
          "title": "Choco Lava Cake",
          "image": "images/choco.jpg",
          "price": 24,
        },
        {
          "id": "4",
          "title": "Gulab Jamun",
          "image": "images/gulab.jpg",
          "price": 5.50,
        },
        {
          "id": "5",
          "title": "Jalebi",
          "image": "images/Jalebi.jpg",
          "price": 8.50,
        },
        {
          "id": "6",
          "title": "Halwa",
          "image": "images/moong.jpg",
          "price": 20.56,
        },
      ],
      'Healthy-Food':[
        {
          "id": "1",
          "title": "Green Tea",
          "image": "images/green.jpg",
          "price": 5.99,
        },
        {
          "id": "2",
          "title": "Coffee",
          "image": "images/coffee.jpg",
          "price": 10.99,
        },
        {
          "id": "3",
          "title": "Chicken Salad",
          "image": "images/chickensalad.jpg",
          "price": 9.99,
        },
        {
          "id": "4",
          "title": "Veg Salad",
          "image": "images/vegsalad.jpg",
          "price": 7.50,
        },
        {
          "id": "5",
          "title": "Nachos",
          "image": "images/nachos.jpg",
          "price": 8.56,
        },
        {
          "id": "6",
          "title": "Sandwich",
          "image": "images/sandwich.jpg",
          "price": 7,
        },
      ]
    };


      getCategoriesHtml();
      function getCategoriesHtml(){
        var catsHtml='';
        $.each(cats, function(key,val) {
            catsHtml+='<div class="box col-md-4 col-sm-12">';
            catsHtml+='        <img class="image" src="'+val.strCategoryMain+'" alt="">';
            catsHtml+='        <div class="content">';
            catsHtml+='            <img src="'+val.strCategoryThumb+'" alt="">';
            catsHtml+='            <h3><a href="items.html?cat='+val.strCategory+'">'+val.strCategory+'</a></h3>';
            catsHtml+='            <p>'+val.strCategoryDescription+'</p>';
            catsHtml+='        </div>';
            catsHtml+='    </div>';
        });
        $('.cats-row').html(catsHtml);
      }


      getitemsHtml();
      function getitemsHtml(){
        var itemsHtml='';
        const urlSearchParams = new URLSearchParams(window.location.search);  
        const params = Object.fromEntries(urlSearchParams.entries());
        
        if(params.cat!==''){
            $.each(items, function(key,val) {
                if(key==params.cat){
                  
                    $.each(val, function(key1,val1) {
                        itemsHtml+='<div class="box col-md-4 col-sm-12">';
                        itemsHtml+='    <span class="price"> $'+val1.price+' </span>';
                        itemsHtml+='    <img src="'+val1.image+'" alt="">';
                        itemsHtml+='    <h3>'+val1.title+'</h3>';
                        itemsHtml+='    <div class="stars">';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="far fa-star"></i>';
                        itemsHtml+='    </div>';
                        itemsHtml+=`    <button onclick="addToCart('`+key+`',`+val1.id+`,'`+val1.image+`',`+val1.price+`,'`+val1.title+`')" class="btn">Add to Cart</button>`;
                        itemsHtml+='    </div>';
                        
                    });
                }
            });
        }
        
        $('.items-row').html(itemsHtml);
      }

      
      getCartHtml();
      function getCartHtml(){
        var itemsHtml='';
        var totalPrice = 0;
        var cart = localStorage.getItem('cart');
        if(cart!=undefined){

              cart = JSON.parse(cart);
              $.each(cart, function(key,val1) {
                  totalPrice +=  parseInt(val1.qty)*parseFloat(val1.price);   
                  totalPrice = Math.round(totalPrice * 100) / 100   
                  itemsHtml+=`<tr class='cart-row'>
                                  <th>`+val1.title+`</th>
                                  <td> <input type='number' value='`+val1.qty+`' class='cart-qty' onchange='qtyChange("`+val1.cat+`",`+val1.id+`,this)'></td>
                                  <td class='cart-price'>$ `+ parseInt(val1.qty)*parseFloat(val1.price)+`</td>
                                  <td><a href='javascript:' onclick='removeFromCart("`+val1.cat+`",`+val1.id+`,event)'>Remove</a></td>
                              </tr>`;
                  
                  
              });
              itemsHtml += `<tr>
                                <th> Total </th>
                                <td></td>
                                <th class="total-price">$ `+totalPrice+`</th>
                                <td></td>
                            </tr>`;
            
        }
        
        $('.cart-items').html(itemsHtml);
      }

      function qtyChange(cat, item, input)
      {
        if(isNaN(input.value) || input.value <= 0)
        {
          input.value = 1
        }
        else{
          changeCartTotal(cat, item, input.value)
        }
      }

      function changeCartTotal(cat, item, q1){
        var cartRows = document.getElementsByClassName("cart-row");
        
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
          var cartRow = cartRows[i]
          
          var priceItem = cartRow.getElementsByClassName("cart-price")[0]
          var qtyItem = cartRow.getElementsByClassName("cart-qty")[0]
          console.log(priceItem)
          var price = parseFloat(priceItem.innerText.replace('$', ''))
          var qty = qtyItem.value

          total = total + (price * qty)
          console.log(total)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('total-price')[0].innerText = '$' + total
        console.log(cat, item, q1)
        updateToCart(cat, item, q1)
      }

      function updateToCart(cat,item,qty){
        var cart = localStorage.getItem('cart');
        
        if(cart!=undefined){
            cart = JSON.parse(cart);
            var itemFound='no';
            $.each(cart, function(key,val) {
                if(val.id==item && cat==val.cat){
                    itemFound=key;
                }
            });

            if(itemFound!='no'){
                cart[itemFound].qty=qty;
            }
            localStorage.setItem('cart',JSON.stringify(cart));
        }
      }

      function addToCart(cat,item,image,price,title){
        var cart = localStorage.getItem('cart');
        
        if(cart!=undefined){
            cart = JSON.parse(cart);
            var itemFound='no';
            $.each(cart, function(key,val) {
                if(val.id==item && cat==val.cat){
                    itemFound=key;
                }
            });

            if(itemFound!='no'){
                cart[itemFound].qty=cart[itemFound].qty+1;
            }else{
                cart.push({id:item,cat:cat,qty:1,image,price,title})
            }
            localStorage.setItem('cart',JSON.stringify(cart));
        }else{
            cart = [];
            cart.push({id:item,cat:cat,qty:1,image,price,title});
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        if(cart!=undefined){
            var cartCount=cart.length;
            $('.cart-count').html(cartCount);
        }
        alert('item Added')
      }

      
      function removeFromCart(cat,item,e){
        var cart = localStorage.getItem('cart');
        if(cart!=undefined){
            cart = JSON.parse(cart);
            var cart = cart.filter((val,key) => !(val.id==item && cat==val.cat));
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        if(cart!=undefined){
            var cartCount=cart.length;
            $('.cart-count').html(cartCount);
            $(e.target).closest('tr').remove();
        }
        alert('item Removed')
      }

      getCartCount();
      function getCartCount(){
        var cart = localStorage.getItem('cart');
        if(cart!=undefined){
            cart = JSON.parse(cart);
            var cartCount=cart.length;
            $('.cart-count').html(cartCount);
        }
      }

      getSearchItems();
      function getSearchItems(){
        var itemsHtml='';
        const urlSearchParams = new URLSearchParams(window.location.search);  
        const params = Object.fromEntries(urlSearchParams.entries());
        
        if(params.s!==''){
          
            $.each(items, function(key,val) {
              
                    $.each(val, function(key1,val1) {
                      console.log(val1.title)
                      if(val1.title.toLowerCase().match(params.s.toLowerCase())){
                        console.log("aa gea" + val1.title)
                        itemsHtml+='<div class="box col-md-4 col-sm-12">';
                        itemsHtml+='    <span class="price"> $'+val1.price+' </span>';
                        itemsHtml+='    <img src="'+val1.image+'" alt="">';
                        itemsHtml+='    <h3>'+val1.title+'</h3>';
                        itemsHtml+='    <div class="stars">';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="fas fa-star"></i>';
                        itemsHtml+='        <i class="far fa-star"></i>';
                        itemsHtml+='    </div>';
                        itemsHtml+=`    <button onclick="addToCart('`+key+`',`+val1.id+`,'`+val1.image+`',`+val1.price+`,'`+val1.title+`')" class="btn">Add to Cart</button>`;
                        itemsHtml+='    </div>';
                      }   
                    });
                
            });
        
        console.log(itemsHtml)
        $('.search-row').html(itemsHtml);
      }
    }
      

      
      
      