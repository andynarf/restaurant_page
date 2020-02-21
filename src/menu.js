const menu = () => {
  const menuhtml = `<a class='a' href="#">Comete una<br>SpaceBurger</a>
    <div class='flex'>
    
        <img id='astronaut' src="../images/atronaut.png">
        <h1>
            Space Burgers<br>
            Hamburguesas, posta
        </h1>
    </div>
    <div class="tabs">
        <div class="tab-2">
            <label for="tab2-1">Home</label>
            <input id="tab2-1" name="tabs-two" type="radio" checked="checked">
            <div>
                <h4>Sobre Nosotros</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam
                    id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet
                    condimentum nisi a egestas.</p>
                <p>Donec interdum ante ut enim consequat, quis varius nulla dapibus. Vivamus mollis fermentum augue a
                    varius. Vestibulum in sapien at lectus gravida lobortis vulputate sed metus. Duis scelerisque justo et
                    maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo sapien eget vestibulum. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel aliquet
                    nunc, finibus posuere lorem. Suspendisse consectetur volutpat est ut ornare.</p>
            </div>
        </div>
        <div class="tab-2">
            <label for="tab2-2">Menu</label>
            <input id="tab2-2" name="tabs-two" type="radio">
            <div>
                <h4>Nuestas Hamburguesas</h4>
                
                <ul class="menu">
                    <li class='burgers'>
                        <a href="#">
                            <img class='menuimg' src="../images/wacamole.png">
                            <h4>WacaBurger</h4>
                        </a>
                        <p>Simple Hamburguesa con lechuga, tomate, bacon y nuestra salsa de Wacamole.</p>
                    </li>
                    <li class='burgers'>
                        <a href="#">
                            <img class='menuimg' src="../images/spaceTasty.png">
                            <h4>Space Tasty</h4>
                        </a>
                        <p>Doble Hamburguesa con pepinos,lechuga, tomate y nuestra salsa Tasty.</p>
                    </li>
                    <li class='burgers'>
                        <a href="#">
                            <img class='menuimg' src="../images/kickaboo.png">
                            <h4>KickaBoo</h4>
                        </a>
                        <p>Terminala si podes, solo los mas valientes ( o gorditos ) piden esta .</p>
                    </li>
                    <li class='burgers'>
                        <a href="#">
                            <img class='menuimg2' src="../images/tristeza.png">
                            <h4>Tristeza</h4>
                        </a>
                        <p>No podia faltar la clasica cheeseburger, para los mas aburridos.</p>
                    </li>
                    <li class='burgers'>
                        <a href="#">
                            <img class='menuimg2' src="../images/felicidad.png">
                            <h4>felicidad</h4>
                        </a>
                        <p>Una cheeseburger de verdad, hamburguesa doble mucho queso y mucha salsa.</p>
                    </li>
                    <li class='burgers'>
                        <a href="#">
                            <img class='menuimg2' src="../images/polloking.png">
                            <h4>PolloKing</h4>
                        </a>
                        <p>La de pollo, nada mas que decir, si no te va la carne, pedite esta.</p>
                    </li>
                </ul>`;
  return menuhtml;
};


export default menu;
